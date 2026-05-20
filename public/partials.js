/**
 * Axiom Marine — partials loader.
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
    const groups = [
      {
        title: 'Boats catalog',
        meta: '20 / 324',
        links: [
          ['/catalog', 'Full catalog', '20 Results of 324'],
          ['/in-stock', 'Boats in stock', '13 current stock entries'],
          ['/listings/body-type/aluminium-boats', 'Aluminium boats', 'Live body-type route'],
          ['/listings/body-type/fishing-boats', 'Fishing boats', 'Live body-type route'],
          ['/listings/make-brand/finval', 'Pro Angler Boats', 'Live make-brand route'],
          ['/listings/make-brand/gala', 'Atlas RIB', 'VIKING, ATLANTIS, Sprinter']
        ]
      },
      {
        title: 'Shop',
        meta: '942 results',
        links: [
          ['/shop', 'Shop archive', 'Live shop results'],
          ['/product-category/outboard-motors', 'Outboard motors', 'Live product category'],
          ['/product-category/electric-motors', 'Electric motors', 'Live product category'],
          ['/product-category/sonars', 'Sonars', 'Live product category'],
          ['/product-category/batteries', 'Batteries', 'Live product category'],
          ['/product-category/outboard-hydraulic-steering-system', 'Hydraulic steering', 'Helm source category']
        ]
      },
      {
        title: 'Services',
        meta: 'Live routes',
        links: [
          ['/services', 'Services', 'Live services route'],
          ['/services/expert-tuning-of-angler-boats', 'Expert tuning', 'Angler boats'],
          ['/services/outboard-engine-installation', 'Outboard installation', 'Live service route'],
          ['/services/tuning-service', 'Tuning service', 'Live service route'],
          ['/services/registration-driving', 'Registration driving', 'Live service route']
        ]
      }
    ];

    const nav = document.createElement('nav');
    nav.className = 'mobile-drawer mobile-drawer--generated';
    nav.id = 'mobileDrawer';
    nav.setAttribute('data-bx-mobile-drawer', 'true');
    nav.setAttribute('aria-label', 'Mobile navigation');
    nav.setAttribute('aria-hidden', 'true');
    nav.setAttribute('role', 'dialog');
    nav.setAttribute('aria-modal', 'true');
    nav.setAttribute('aria-labelledby', 'mobileDrawerTitle');
    nav.innerHTML =
      '<div class="mobile-drawer-head">' +
        '<a href="/" class="mobile-drawer-brand" aria-label="Axiom Marine home">' +
          '<img class="logo-img" src="/assets/logo/logo-white.svg" alt="Axiom Marine"/>' +
          '<span><b id="mobileDrawerTitle">Axiom Marine</b><small>Demo · Marine vertical</small></span>' +
        '</a>' +
        '<button class="mobile-close" type="button" aria-label="Close menu">' +
          '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 3l10 10M13 3L3 13"/></svg>' +
        '</button>' +
      '</div>' +
      '<div class="mobile-drawer-source"><span>Live site map</span><b>marine.axiomprotocol.org</b></div>' +
      '<div class="mobile-drawer-kpis">' +
        '<span><b>324</b> listings</span>' +
        '<span><b>13</b> boats in stock</span>' +
        '<span><b>942</b> shop results</span>' +
      '</div>' +
      '<div class="mobile-drawer-actions">' +
        '<button class="mobile-command mobile-command--search" type="button" data-mobile-search>Search catalog</button>' +
        '<a class="mobile-command" href="tel:+0000000000">Office · +0 000 000 000</a>' +
        '<a class="mobile-command" href="https://wa.me/0000000000">WhatsApp</a>' +
      '</div>' +
      groups.map(group => (
        '<section class="mobile-nav-group">' +
          '<div class="mobile-nav-group__head"><b>' + group.title + '</b><span>' + group.meta + '</span></div>' +
          '<div class="mobile-nav">' +
            group.links.map(item => '<a href="' + item[0] + '"><span>' + item[1] + '</span><small>' + item[2] + '</small></a>').join('') +
          '</div>' +
        '</section>'
      )).join('') +
      '<div class="mobile-nav mobile-nav--single">' +
        '<a href="/blog"><span>Blog</span><small>News and archive</small></a>' +
        '<a href="/contact"><span>Contact</span><small>Office and sales contacts</small></a>' +
      '</div>' +
      '<div class="mobile-tools">' +
        '<a href="/contact" class="btn-brass" data-i18n="nav.cta_testdrive">Contact showroom</a>' +
        '<a href="https://wa.me/0000000000" class="btn-outline">WhatsApp</a>' +
      '</div>' +
      '<div class="mobile-tools-info">' +
        '<a href="tel:+0000000000" class="brass">+0 (000) 000 000</a>' +
        '<a href="mailto:demo@axiomprotocol.org">demo@axiomprotocol.org</a>' +
        '<span>Demo street #5</span>' +
        '<span>Mon-Thu | 10:00-17:30</span>' +
      '</div>';
    document.body.appendChild(nav);
    return nav;
  }

  function initMobileDrawer(){
    const buttons = Array.from(document.querySelectorAll('.mobile-menu'));
    if (!buttons.length) return;

    const drawer = document.querySelector('.mobile-drawer[data-bx-mobile-drawer]') || document.querySelector('.mobile-drawer') || buildMobileDrawer();
    const legacyToggle = document.getElementById('mobile-toggle');
    let lastTrigger = null;
    const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

    function routePart(value){
      return String(value || '').split('#')[0].split('?')[0].replace(/\/+$/, '').toLowerCase() || '/';
    }

    function updateActiveLinks(){
      const current = routePart(location.pathname || '/');
      drawer.querySelectorAll('.mobile-nav a').forEach(link => {
        const target = routePart(link.getAttribute('href'));
        const active = target === current || (target !== '/' && current.indexOf(target + '/') === 0);
        link.classList.toggle('is-active', active);
        if (active) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });
    }

    function setOpen(open){
      if (open) updateActiveLinks();
      drawer.classList.toggle('is-open', open);
      drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
      document.body.classList.toggle('mobile-drawer-open', open);
      document.body.classList.remove('mobile-nav-open');
      if (legacyToggle) legacyToggle.checked = open;
      buttons.forEach(button => button.setAttribute('aria-expanded', open ? 'true' : 'false'));
      const focusTarget = open ? drawer.querySelector('.mobile-close') : lastTrigger;
      if (focusTarget && typeof focusTarget.focus === 'function') setTimeout(() => focusTarget.focus(), 30);
    }

    buttons.forEach(button => {
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-controls', drawer.id || 'mobileDrawer');
      button.addEventListener('click', event => {
        event.preventDefault();
        lastTrigger = button;
        setOpen(!drawer.classList.contains('is-open'));
      });
    });

    drawer.querySelectorAll('.mobile-close, .mobile-nav a, .mobile-tools a, .mobile-command').forEach(control => {
      control.addEventListener('click', () => setOpen(false));
    });

    drawer.querySelectorAll('[data-mobile-search]').forEach(control => {
      control.addEventListener('click', event => {
        event.preventDefault();
        setOpen(false);
        const search = document.querySelector('.search-toggle');
        if (search) setTimeout(() => search.click(), 80);
      });
    });

    document.addEventListener('keydown', event => {
      if (!drawer.classList.contains('is-open')) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
      }
      if (event.key !== 'Tab') return;
      const focusable = Array.from(drawer.querySelectorAll(focusableSelector))
        .filter(node => node.offsetParent !== null || node === document.activeElement);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    updateActiveLinks();
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
