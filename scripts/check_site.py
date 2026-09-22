"""Dependency-free checks for the static site: python3 scripts/check_site.py.

Checks source HTML, local references, metadata, sitemap and JavaScript syntax.
This is not a replacement for browser, accessibility or indexation testing.
"""
import json
import shutil
import subprocess
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
from xml.etree import ElementTree

ROOT = Path(__file__).resolve().parents[1]
PAGES = ["index.html", "desarrollo-apps-ios/index.html", "diseno-web-malaga/index.html",
         "privacy/index.html", "terms/index.html", "cv/index.html"]
VOID = set("area base br col embed hr img input link meta param source track wbr".split())
ERRORS = []


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path, self.ids, self.refs, self.meta = path, set(), [], {}
        self.stack, self.scripts = [], []
        self.h1, self.title, self.canonical = 0, "", ""
        self.script = None
        self.feed(path.read_text(encoding="utf-8"))
        self.close()
        if self.stack:
            self.error("Unclosed elements: " + str(self.stack))

    def error(self, message):
        ERRORS.append(f"{self.path.relative_to(ROOT)}: {message}")

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            if attrs["id"] in self.ids:
                self.error("Duplicate id: " + attrs["id"])
            self.ids.add(attrs["id"])
        if tag not in VOID:
            self.stack.append(tag)
        if tag == "h1":
            self.h1 += 1
        if tag == "meta":
            self.meta[attrs.get("name", attrs.get("property"))] = attrs.get("content", "")
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonical = attrs["href"]
        for name in ("href", "src"):
            if attrs.get(name):
                self.refs.append(attrs[name])
        if "srcset" in attrs:
            self.refs.extend(item.strip().split()[0] for item in attrs["srcset"].split(","))
        if tag == "script":
            self.script = {"type": attrs.get("type", ""), "text": ""}

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        if not self.stack or self.stack[-1] != tag:
            self.error("Unbalanced closing element: " + tag)
        elif self.stack:
            self.stack.pop()
        if tag == "script" and self.script is not None:
            self.scripts.append(self.script)
            self.script = None

    def handle_data(self, data):
        if self.script is not None:
            self.script["text"] += data
        if self.stack and self.stack[-1] == "title":
            self.title += data


pages = {ROOT / name: Page(ROOT / name) for name in PAGES}
node = shutil.which("node")
if not node:
    ERRORS.append("Node.js is required for JavaScript syntax checks.")

for path, page in pages.items():
    route = "/" + str(path.relative_to(ROOT)).removesuffix("index.html")
    if page.h1 != 1 or not page.title or not page.meta.get("description"):
        page.error("Expected one h1, a title and a description.")
    if page.canonical != "https://sergiogc.dev" + route:
        page.error("Incorrect canonical: " + page.canonical)
    for ref in page.refs:
        url = urlsplit(ref)
        if url.scheme or url.netloc:
            continue
        target = ((ROOT / unquote(url.path).lstrip("/")) if url.path.startswith("/")
                  else (path.parent / unquote(url.path))) if url.path else path
        if target.is_dir():
            target /= "index.html"
        target = target.resolve()
        if not target.is_file():
            page.error("Missing local reference: " + ref)
        elif url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:
            page.error("Missing anchor: " + ref)
    for script in page.scripts:
        if script["type"] == "application/ld+json":
            try:
                json.loads(script["text"])
            except ValueError as error:
                page.error("Invalid JSON-LD: " + str(error))
        elif script["text"].strip() and node:
            check = subprocess.run([node, "--check", "-"], input=script["text"], text=True, capture_output=True)
            if check.returncode:
                page.error("Invalid inline JavaScript: " + check.stderr)

for script in (ROOT / "scripts").glob("*.js"):
    if node:
        check = subprocess.run([node, "--check", str(script)], capture_output=True, text=True)
        if check.returncode:
            ERRORS.append(check.stderr)

urls = ElementTree.parse(ROOT / "sitemap.xml").findall(".//{*}loc")
locations = [url.text for url in urls]
expected = [page.canonical for page in pages.values()]
if len(locations) != len(set(locations)) or set(locations) != set(expected):
    ERRORS.append("Sitemap does not match the canonical URLs of the six pages.")
if "Sitemap: https://sergiogc.dev/sitemap.xml" not in (ROOT / "robots.txt").read_text():
    ERRORS.append("Missing sitemap reference in robots.txt.")
if ERRORS:
    print("\n".join(ERRORS))
    sys.exit(1)
print(f"OK: {len(pages)} pages, local references, metadata, JSON-LD, sitemap and JS syntax.")
