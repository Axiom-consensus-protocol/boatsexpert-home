/**
 * BoatsExpert — partials loader.
 *
 * Loads HTML fragments into mount points marked with [data-partial="name"].
 * Each fragment is fetched from /partials/<name>.html.
 *
 * Falls back to an inline <template id="partial-<name>"> embedded in the host
 * page so the prototype works without an HTTP server (file://).
 *
 * Runs synchronously before i18n.js so that data-i18n elements inside
 * partials are bound on first paint.
 *
 * Usage:
 *   <div data-partial="header"></div>
 *   <div data-partial="footer"></div>
 *
 *   <template id="partial-header">…</template>
 *   <template id="partial-footer">…</template>
 *
 *   <script src="partials.js"></script>
 *   <script src="i18n.js" defer></script>
 */
(function(){
  function inject(node, html){
    // Replace the mount node entirely with the partial markup so the
    // partial keeps its own outer wrappers (<header>, <footer>, etc.).
    const frag = document.createRange().createContextualFragment(html);
    node.replaceWith(frag);
  }

  function fromTemplate(name){
    const tpl = document.getElementById('partial-' + name);
    if (!tpl) return null;
    return tpl.innerHTML;
  }

  async function load(node){
    const name = node.getAttribute('data-partial');
    if (!name) return;

    // On a real server, the shared partial file is the source of truth.
    // Inline templates are kept only as a file:// fallback for quick local opens.
    if (location.protocol !== 'file:'){
      try {
        const res = await fetch('/partials/' + name + '.html', { cache: 'no-cache' });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const html = await res.text();
        inject(node, html);
        return;
      } catch (e) {
        console.warn('[partials] failed to load "' + name + '", falling back to inline template:', e);
      }
    }

    const inline = fromTemplate(name);
    if (inline){
      inject(node, inline);
    } else {
      console.warn('[partials] missing inline fallback for "' + name + '"');
    }
  }

  function markActiveNav(){
    // Highlight the primary nav link that matches the current page path.
    // Catalog.html → /Catalog (also matches /catalog/ paths if used later).
    const path = (location.pathname || '').toLowerCase();
    const file = path.split('/').pop() || '';
    const stem = file.replace(/\.html?$/i, '');
    document.querySelectorAll('header.site nav.primary a').forEach(a => {
      const href = (a.getAttribute('href') || '').toLowerCase();
      if (!href) return;
      const targetStem = href.split('/').pop().replace(/\.html?$/i, '');
      // Match if the link file matches current file, OR if the link points to
      // a subroute whose first segment equals the current file stem.
      const linkSeg = href.split('/').filter(Boolean)[0] || '';
      const isMatch =
        (stem && targetStem && stem === targetStem) ||
        (stem && linkSeg && stem === linkSeg);
      if (isMatch){
        a.classList.add('active');
        a.setAttribute('aria-current', 'page');
      }
    });
  }

  function buildMobileDrawer(){
    const navItems = [
      ['Catalog.html', 'nav.catalog', 'Catalog'],
      ['Catalog.html#results', 'nav.instock', 'In Stock'],
      ['Shop.html', 'nav.shop', 'Shop'],
      ['index.html#services', 'nav.services', 'Services'],
      ['index.html#contact', 'nav.contact', 'Contact']
    ];

    const nav = document.createElement('nav');
    nav.className = 'mobile-drawer mobile-drawer--generated';
    nav.setAttribute('aria-label', 'Mobile navigation');
    nav.setAttribute('aria-hidden', 'true');
    nav.innerHTML =
      '<div class="mobile-drawer-head">' +
        '<a href="index.html" class="logo" aria-label="BoatsExpert home">' +
          '<img class="logo-img" src="assets/logo/logo-white.svg" alt="BoatsExpert"/>' +
        '</a>' +
        '<button class="mobile-close" type="button" aria-label="Close menu">' +
          '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 3l10 10M13 3L3 13"/></svg>' +
        '</button>' +
      '</div>' +
      '<div class="mobile-nav">' +
        navItems.map(item => '<a href="' + item[0] + '" data-i18n="' + item[1] + '">' + item[2] + '</a>').join('') +
      '</div>' +
      '<div class="mobile-tools">' +
        '<a href="index.html#contact" class="btn-brass" data-i18n="nav.cta_testdrive">Book a Test Drive</a>' +
        '<a href="https://wa.me/40743377377" class="btn-outline">WhatsApp</a>' +
      '</div>' +
      '<div class="mobile-tools-info">' +
        '<a href="tel:+40743377377" class="brass">+40 (743) 377 377</a>' +
        '<a href="mailto:info@boatsexpert.com">info@boatsexpert.com</a>' +
        '<span>Strada Horia Closca si Crisan 5, Otopeni</span>' +
        '<span>Mon-Thu | 10:00-17:30</span>' +
      '</div>';
    document.body.appendChild(nav);
    return nav;
  }

  function initMobileDrawer(){
    const buttons = Array.from(document.querySelectorAll('.mobile-menu'));
    if (!buttons.length) return;

    const drawer = document.querySelector('.mobile-drawer') || buildMobileDrawer();
    const legacyToggle = document.getElementById('mobile-toggle');

    function setOpen(open){
      drawer.classList.toggle('is-open', open);
      drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
      document.body.classList.toggle('mobile-drawer-open', open);
      if (legacyToggle) legacyToggle.checked = open;
      buttons.forEach(button => button.setAttribute('aria-expanded', open ? 'true' : 'false'));
    }

    buttons.forEach(button => {
      button.setAttribute('aria-expanded', 'false');
      button.addEventListener('click', () => setOpen(true));
    });

    drawer.querySelectorAll('.mobile-close, .mobile-nav a, .mobile-tools a').forEach(control => {
      control.addEventListener('click', () => setOpen(false));
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') setOpen(false);
    });
  }

  async function loadAll(){
    const nodes = Array.from(document.querySelectorAll('[data-partial]'));
    // Load sequentially to preserve DOM order
    for (const n of nodes) {
      await load(n);
    }
    markActiveNav();
    initMobileDrawer();
    document.documentElement.dispatchEvent(new CustomEvent('partials:ready'));
    // If i18n has already mounted, re-apply translations to freshly inserted nodes
    if (window.BX_i18n && typeof window.BX_i18n.reload === 'function'){
      // No-op; i18n.js will re-apply via setLang at startup.
    }
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', loadAll);
  } else {
    loadAll();
  }
})();
