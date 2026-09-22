/** Progressive enhancement shared by the home and service pages. */
(() => {
    const themeButton = document.getElementById('themeToggle');
    // El modo claro está fijado temporalmente. El control sigue en el marcado
    // para recuperar la opción sin reestructurar las páginas después.
    document.documentElement.dataset.theme = 'light';

    // Native <details> remains usable when JavaScript is unavailable.
    document.querySelectorAll('.mobile-menu').forEach(menu => {
        const summary = menu.querySelector('summary');
        menu.addEventListener('keydown', event => {
            if (event.key === 'Escape' && menu.open) {
                menu.open = false;
                summary.focus();
            }
        });
        menu.addEventListener('click', event => {
            if (event.target.closest('a')) menu.open = false;
        });
        document.addEventListener('click', event => {
            if (!menu.contains(event.target)) menu.open = false;
        });
        menu.addEventListener('focusout', () => {
            requestAnimationFrame(() => {
                if (!menu.contains(document.activeElement)) menu.open = false;
            });
        });
        matchMedia('(max-width: 1000px)').addEventListener('change', () => {
            menu.open = false;
        });
    });

    /*
     * Service pages share one URL per service. Their Spanish source remains in
     * the document for crawlers; English is an explicit, query-string based
     * view for visitors. No cookies or personal data are stored.
     */
    const languageToggle = document.querySelector('[data-language-toggle]');
    if (!languageToggle) return;

    const textNodes = [...document.querySelectorAll('[data-i18n-en]')];
    const htmlNodes = [...document.querySelectorAll('[data-i18n-html-en]')];
    const ariaNodes = [...document.querySelectorAll('[data-i18n-aria-en]')];
    const metaNodes = [...document.querySelectorAll('[data-i18n-content-en]')];
    const hrefNodes = [...document.querySelectorAll('[data-i18n-href-en]')];
    const originals = new WeakMap();

    [...textNodes, ...htmlNodes].forEach(node => originals.set(node, node.innerHTML));
    ariaNodes.forEach(node => originals.set(node, node.getAttribute('aria-label') || ''));
    metaNodes.forEach(node => originals.set(node, node.getAttribute('content') || ''));
    hrefNodes.forEach(node => originals.set(node, node.getAttribute('href') || ''));
    const originalTitle = document.title;

    const serviceLinks = () => document.querySelectorAll('[data-language-route]');

    const setLanguage = (language, { updateUrl = false } = {}) => {
        const english = language === 'en';
        document.documentElement.lang = english ? 'en' : 'es';
        document.body.classList.toggle('lang-en', english);

        textNodes.forEach(node => {
            node.textContent = english ? node.dataset.i18nEn : originals.get(node);
        });
        htmlNodes.forEach(node => {
            node.innerHTML = english ? node.dataset.i18nHtmlEn : originals.get(node);
        });
        ariaNodes.forEach(node => {
            node.setAttribute('aria-label', english ? node.dataset.i18nAriaEn : originals.get(node));
        });
        metaNodes.forEach(node => {
            node.setAttribute('content', english ? node.dataset.i18nContentEn : originals.get(node));
        });
        hrefNodes.forEach(node => {
            node.setAttribute('href', english ? node.dataset.i18nHrefEn : originals.get(node));
        });
        document.title = english ? languageToggle.dataset.titleEn : originalTitle;

        languageToggle.querySelectorAll('button').forEach(button => {
            const selected = button.dataset.langValue === language;
            button.classList.toggle('active', selected);
            button.setAttribute('aria-pressed', String(selected));
        });

        serviceLinks().forEach(link => {
            const route = link.dataset.languageRoute;
            link.setAttribute('href', english ? `${route}?lang=en` : route);
        });

        if (updateUrl) {
            const url = new URL(window.location.href);
            if (english) url.searchParams.set('lang', 'en');
            else url.searchParams.delete('lang');
            window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
        }

        window.dispatchEvent(new Event('site-language-change'));
    };

    const initialLanguage = new URLSearchParams(window.location.search).get('lang') === 'en' ? 'en' : 'es';
    setLanguage(initialLanguage);
    languageToggle.addEventListener('click', event => {
        const button = event.target.closest('[data-lang-value]');
        if (button) setLanguage(button.dataset.langValue, { updateUrl: true });
    });
})();
