/** Mechanical copies: preserve legal prose; isolate presentation and routes. */
const fs = require('node:fs');
for (const name of ['privacy', 'terms']) {
    let html = fs.readFileSync(`${name}/index.html`, 'utf8');
    html = html.replace('</head>', '<meta name="robots" content="noindex, nofollow">\n<link rel="stylesheet" href="/styles/preview-legal.css">\n</head>');
    html = html.replace('<body>', '<body class="preview-legal">');
    html = html.replace(/href="\/(privacy|terms)\/?"/g, 'href="/preview/$1/"').replace(/href="\/"/g, 'href="/preview/"');
    html = html.replace('data-site-footer', 'data-site-footer data-local-preview');
    html = html.replace("localStorage.setItem('sergiogc-lang', lang);", `const url = new URL(location.href);
            if (lang === 'en') url.searchParams.set('lang', 'en');
            else url.searchParams.delete('lang');
            history.replaceState(null, '', url.pathname + url.search + url.hash);
            document.querySelectorAll('[data-lang-btn]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.langBtn === lang)));
            document.querySelectorAll('a[href^="/preview/"]').forEach(a => {
                const destination = new URL(a.href);
                if (lang === 'en') destination.searchParams.set('lang', 'en');
                else destination.searchParams.delete('lang');
                a.href = destination.pathname + destination.search + destination.hash;
            });`);
    html = html.replace("const saved = localStorage.getItem('sergiogc-lang');\n        if (saved === 'en') setLang('en');", "setLang(new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'es');");
    const overlay = html.indexOf('<div class="page-overlay"');
    if (overlay !== -1) html = html.slice(0, overlay) + '</body>\n</html>\n';
    fs.mkdirSync(`preview/${name}`, { recursive: true });
    fs.writeFileSync(`preview/${name}/index.html`, html);
}
