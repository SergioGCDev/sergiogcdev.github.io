/* Local-only preview language control. Spanish remains readable without JS. */
(() => {
    // Activación a la entrada de cada panel: ningún fondo secundario se pide
    // al arrancar. Web reutiliza exactamente la URL del hero y su caché.
    const photos = new IntersectionObserver(entries => entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('[data-srcset]').forEach(source => {
            source.srcset = source.dataset.srcset;
        });
        const image = entry.target.querySelector('img[data-src]');
        image.src = image.dataset.src;
        photos.unobserve(entry.target);
    }));
    document.querySelectorAll('.panel-photo:has(img[data-src])').forEach(photo => photos.observe(photo));
    // Un panel alto termina de leerse antes de quedar adherido al viewport.
    // ResizeObserver recalcula también al cambiar idioma o abrir los detalles.
    const panels = [...document.querySelectorAll('.stage-panel')];
    const sizePanels = () => panels.forEach(panel => {
        panel.style.setProperty('--panel-top', `${Math.min(0, window.innerHeight - panel.offsetHeight)}px`);
    });
    const observer = new ResizeObserver(sizePanels);
    panels.forEach(panel => observer.observe(panel));
    window.addEventListener('resize', sizePanels);
    sizePanels();
    const buttons = [...document.querySelectorAll('[data-set-language]')];
    const applyLanguage = language => {
        const english = language === 'en';
        document.documentElement.lang = language;
        document.body.classList.toggle('lang-en', english);
        buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.setLanguage === language)));
        const url = new URL(window.location.href);
        if (english) url.searchParams.set('lang', 'en');
        else url.searchParams.delete('lang');
        window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
        window.dispatchEvent(new Event('site-language-change'));
    };
    applyLanguage(new URLSearchParams(window.location.search).get('lang') === 'en' ? 'en' : 'es');
    buttons.forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.setLanguage)));
})();
