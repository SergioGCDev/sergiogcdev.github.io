/**
 * Footer compartido de sergiogc.dev.
 *
 * El sitio es HTML estático. Este archivo es la única fuente del marcado:
 * cada página declara <footer data-site-footer> y el componente lo renderiza.
 */
(() => {
    const footer = document.querySelector("[data-site-footer]");
    if (!footer) return;

    const isEnglish = () =>
        document.body.classList.contains("lang-en") ||
        document.querySelector('[data-lang-content="en"].active') !== null;

    const render = () => {
        const english = isEnglish();
        const privacy = english ? "Privacy" : "Privacidad";
        const terms = english ? "Terms" : "Términos";

        footer.innerHTML = [
            '<div class="footer-content">',
            '<span>© 2026 Sergio García</span>',
            '<div class="footer-links" role="navigation" aria-label="Legal">',
            '<a href="/privacy/">' + privacy + '</a><span aria-hidden="true">·</span>',
            '<a href="/terms/">' + terms + '</a>',
            '</div></div>'
        ].join("");
        if (footer.hasAttribute('data-local-preview')) {
            footer.querySelectorAll('a').forEach(link => {
                link.href = link.getAttribute('href') + (english ? '?lang=en' : '');
            });
        }
    };

    render();
    window.addEventListener("site-language-change", render);

    document.addEventListener("click", (event) => {
        if (event.target.closest("[data-value], [data-lang-btn]")) {
            window.setTimeout(render, 0);
        }
    });
})();
