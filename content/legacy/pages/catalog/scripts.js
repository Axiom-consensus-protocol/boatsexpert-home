// Make filter checks interactive
    document.querySelectorAll('.check').forEach(c => {
      c.addEventListener('click', e => {
        e.preventDefault();
        c.classList.toggle('on');
      });
    });
    // Segmented control
    document.querySelectorAll('.seg').forEach(seg => {
      seg.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          seg.querySelectorAll('button').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
      });
    });
    // View toggle
    document.querySelectorAll('.view-toggle').forEach(vt => {
      vt.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          vt.querySelectorAll('button').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
      });
    });

;

const liveBoat = ({ brand, cat, country, model, price, length, persons, power, photo, request = false }) => ({
    brand,
    cat,
    country,
    model,
    tagline: 'Live BoatsExpert listing: ' + length + ' · ' + persons + ' persons · ' + power + '.',
    badges: request ? [['req', 'Request']] : [['live', 'Live listing']],
    features: ['Length overall ' + length, persons + ' persons', power, request ? 'Request price' : price],
    specs: [['Length', length], ['Persons', persons], ['Power', power], ['Source', 'Listings']],
    meta: [['users', persons], ['power', power], ['catalog', request ? 'Request' : 'MSRP']],
    price: request ? { l: 'Live catalog price', v: 'Request', req: true } : { l: 'MSRP', v: price },
    photo,
    fb: 'assets/boats/hero-DSC07340-1.jpg',
    galleryLabel: 'more info',
    sourceLabel: 'Live',
  });

const BOATS = [
    liveBoat({ brand: 'GALA', cat: 'RIB Boats', country: 'ua', model: 'VIKING V6F (V580F)', price: '€26,366', length: '5.8 m', persons: '12', power: '150 HP', photo: 'assets/boats/gala-viking-v6f-111-654x525.jpg' }),
    liveBoat({ brand: 'Big Foot', cat: 'Aluminium Boats', country: 'hu', model: 'Ultimate Console', price: '€10,605', length: '5.65 m', persons: '6', power: '60 hp', photo: 'assets/boats/big-foot-ultimate-654x525.jpg' }),
    liveBoat({ brand: 'Big Foot', cat: 'Aluminium Boats', country: 'hu', model: 'Ultimate B', price: '€3,450', length: '5.65 m', persons: '6', power: '60 hp', photo: 'assets/boats/big-foot-ultimate.jpg' }),
    liveBoat({ brand: 'GALAXY', cat: 'Aluminium Boats', country: 'ua', model: 'HEAVY DUTY HC520', price: 'Request', length: '5.20 m', persons: '5', power: '8 hp', photo: 'assets/boats/galaxy-heavy-duty-hc520-654x525.jpg', request: true }),
    liveBoat({ brand: 'GALAXY', cat: 'Aluminium Boats', country: 'ua', model: 'HEAVY DUTY HD460M', price: 'Request', length: '4.70 m', persons: '10', power: '50 hp', photo: 'assets/boats/galaxy-heavy-duty-hd460m-654x525.jpg', request: true }),
    liveBoat({ brand: 'GALAXY', cat: 'Aluminium Boats', country: 'ua', model: 'HEAVY DUTY F450HD', price: 'Request', length: '4.50 m', persons: '6', power: '50 hp', photo: 'assets/boats/galaxy-hd460m.jpg', request: true }),
    liveBoat({ brand: 'GALAXY', cat: 'Aluminium Boats', country: 'ua', model: 'HEAVY DUTY P4.6HD', price: 'Request', length: '4.57 m', persons: '7', power: '60 hp', photo: 'assets/boats/galaxy-heavy-duty-hd460m-654x525.jpg', request: true }),
    liveBoat({ brand: 'GALAXY', cat: 'Aluminium Boats', country: 'ua', model: 'PILOT - P6.5', price: '€26,330', length: '6.50 m', persons: '12', power: '200 hp', photo: 'assets/boats/galaxy-pilot-p6-5-654x525.jpg' }),
    liveBoat({ brand: 'GALAXY', cat: 'Aluminium Boats', country: 'ua', model: 'PILOT - P4', price: '€7,920', length: '3.90 m', persons: '6', power: '30 hp', photo: 'assets/boats/galaxy-pilot-p4-654x525.jpg' }),
    liveBoat({ brand: 'GALAXY', cat: 'Aluminium Boats', country: 'ua', model: 'TRIDENT - T12', price: '€178,940', length: '11.60 m', persons: '20', power: '1200 hp', photo: 'assets/boats/galaxy-trident-t12-654x525.jpg' }),
    liveBoat({ brand: 'GALAXY', cat: 'Aluminium Boats', country: 'ua', model: 'TRIDENT - T10', price: '€149,510', length: '9.60 m', persons: '16', power: '700 hp', photo: 'assets/boats/galaxy-trident-t12-654x525.jpg' }),
    liveBoat({ brand: 'GALAXY', cat: 'Aluminium Boats', country: 'ua', model: 'TRIDENT - T6.5', price: '€70,650', length: '6.50 m', persons: '10', power: '300 hp', photo: 'assets/boats/galaxy-trident-t12-654x525.jpg' }),
    liveBoat({ brand: 'GALAXY', cat: 'Aluminium Boats', country: 'ua', model: 'PILOT - P4.5', price: '€12,760', length: '4.50 m', persons: '7', power: '70 hp', photo: 'assets/boats/galaxy-pilot-p4-654x525.jpg' }),
    liveBoat({ brand: 'GALAXY', cat: 'Aluminium Boats', country: 'ua', model: 'PILOT - P5', price: '€15,970', length: '5.00 m', persons: '8', power: '100 hp', photo: 'assets/boats/galaxy-pilot-p4-654x525.jpg' }),
    liveBoat({ brand: 'GALAXY', cat: 'Aluminium Boats', country: 'ua', model: 'PILOT - P6', price: '€23,100', length: '5.80 m', persons: '10', power: '175 hp', photo: 'assets/boats/galaxy-pilot-p6-5-654x525.jpg' }),
    liveBoat({ brand: 'GALAXY', cat: 'Aluminium Boats', country: 'ua', model: 'PILOT - P7', price: '€32,560', length: '6.95 m', persons: '13', power: '300 hp', photo: 'assets/boats/galaxy-pilot-p6-5-654x525.jpg' }),
    liveBoat({ brand: 'GALAXY', cat: 'Aluminium Boats', country: 'ua', model: 'TRIDENT T8', price: '€101,010', length: '7.80 m', persons: '14', power: '500 hp', photo: 'assets/boats/galaxy-trident-t12-654x525.jpg' }),
    liveBoat({ brand: 'GALAXY', cat: 'Aluminium Boats', country: 'ua', model: 'Pilot - P12', price: 'Request', length: '11.60 m', persons: '18', power: '900 hp', photo: 'assets/boats/galaxy-pilot-p6-5-654x525.jpg', request: true }),
    liveBoat({ brand: 'GALAXY', cat: 'Aluminium Boats', country: 'ua', model: 'Pilot - P10', price: 'Request', length: '9.60 m', persons: '16', power: '700 hp', photo: 'assets/boats/galaxy-pilot-p6-5-654x525.jpg', request: true }),
    liveBoat({ brand: 'GALAXY', cat: 'Aluminium Boats', country: 'ua', model: 'Pilot - P8', price: '€44,040', length: '7.80 m', persons: '14', power: '350 HP', photo: 'assets/boats/galaxy-pilot-p6-5-654x525.jpg' }),
  ];

  const BADGE_CLASS = { exclusive: 'exclusive', featured: 'featured', live: 'featured', ok: '', order: 'order', req: 'request' };
  const META_ICONS = {
    users: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="5.5" r="2.4"/><path d="M2.5 14 Q 8 9.5 13.5 14"/></svg>',
    power: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l2-6h6l2 6"/><path d="M5 11h6"/><path d="M8 5v8"/></svg>',
    catalog: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h10v10H3z"/><path d="M5 6h6M5 9h4"/></svg>',
  };
  const COMPARE_SVG = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2.5 L12 2.5 L12 13.5 L8 11 L4 13.5 Z"/></svg>';
  const GALLERY_SVG = '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="8" height="6" rx="1"/><circle cx="6" cy="6" r="1.5"/></svg>';

  function renderBoats(items){
    const list = items || BOATS;
    const fallbackPhoto = 'assets/boats/hero-DSC07340-1.jpg';
    const wrap = document.getElementById('results');
    if (!wrap) return;
    wrap.innerHTML = list.map((b, index) => {
      const badgesHtml = b.badges.map(([k, t]) => {
        const cls = BADGE_CLASS[k];
        return '<span class="badge ' + cls + '"><span class="pulse"></span>' + t + '</span>';
      }).join('');
      const featuresHtml = b.features.map(f => '<span class="ft">' + f + '</span>').join('');
      const specsHtml = b.specs.map(([k, v]) =>
        '<div><span class="k">' + k + '</span><span class="v">' + v + '</span></div>'
      ).join('');
      const metaHtml = b.meta.map(([icon, val]) =>
        '<span class="m">' + META_ICONS[icon] + val + '</span>'
      ).join('');
      const priceHtml = b.price.req
        ? '<span class="l">' + b.price.l + '</span><span class="v">' + b.price.v + '</span>'
        : '<span class="l">' + b.price.l + '</span><span class="v">' + b.price.v + '</span>' +
          (b.price.mo ? '<span class="mo">or <b>' + b.price.mo + '</b></span>' : '');

      // Killer-fact chip — pick the last spec as the hero value (Draft, Engine top, Tubes, etc.)
      const killer = b.specs[b.specs.length - 1] || ['', ''];
      const killerHtml = killer[1]
        ? '<div class="killer"><span class="kn">' + killer[1].replace(/(\d+(?:[.,]\d+)?)/, '<b>$1</b>') + '</span><span class="kl">' + killer[0] + '</span></div>'
        : '';
      const photo = b.photo || fallbackPhoto;
      const fb = b.fb || fallbackPhoto;

      return [
        '<a class="boat" href="/boat">',
          '<div class="boat-photo">',
            '<img src="' + photo + '" alt="' + b.brand + ' ' + b.model.replace(/<[^>]+>/g,'') + '" onerror="this.onerror=null;this.src=\''+fb+'\'" loading="lazy"/>',
            '<div class="gradient"></div>',
            '<span class="catalog-index">№ ' + String(index + 1).padStart(2, '0') + '</span>',
            '<div class="badges"><div class="badges-l">' + badgesHtml + '</div>',
            '<button class="compare" aria-label="Save">' + COMPARE_SVG + '</button></div>',
            killerHtml,
            '<div class="photo-foot">',
              '<span class="gallery-count">' + GALLERY_SVG + (b.galleryLabel || 'more info') + '</span>',
              '<span class="year-pill">' + (b.sourceLabel || 'Live') + '</span>',
            '</div>',
          '</div>',
          '<div class="boat-body">',
            '<div class="boat-brand"><span class="b">' + b.brand + ' · ' + b.cat + '</span><span class="origin"><span class="flag ' + b.country + '"></span>' + b.country.toUpperCase() + '</span></div>',
            '<div class="boat-model">' + b.model + '</div>',
            '<div class="boat-tagline">' + b.tagline + '</div>',
            '<div class="boat-features">' + featuresHtml + '</div>',
            '<div class="boat-specs">' + specsHtml + '</div>',
            '<div class="boat-meta">' + metaHtml + '</div>',
            '<div class="boat-foot">',
              '<div class="boat-price' + (b.price.req ? ' request' : '') + '">' + priceHtml + '</div>',
              '<div class="boat-actions"><span>Details</span><span class="primary">Request</span></div>',
            '</div>',
          '</div>',
        '</a>'
      ].join('');
    }).join('');
  }
  renderBoats();

  (function initCatalogFilters(){
    const filters = document.querySelector('aside.filters');
    if (!filters) return;
    const countEl = document.querySelector('.results-count');
    const chipsEl = document.querySelector('.active-chips');
    const headCount = filters.querySelector('.filter-head h3 em');
    const resetControls = document.querySelectorAll('.filters .reset, .chip-clear');
    const text = (node) => (node?.textContent || '').replace(/\s+/g, ' ').trim();
    const lower = (value) => String(value || '').toLowerCase();
    const filterSections = Array.from(filters.querySelectorAll('.filter-section'));
    const findSection = (needle) => filterSections.find((section) => lower(text(section.querySelector('h4'))).includes(needle));
    const brandSection = findSection('brand');
    const bodySection = findSection('body');
    const availabilitySection = findSection('listing status');
    const brandChecks = () => Array.from(brandSection?.querySelectorAll('.check.on .lbl') || []).map(text);
    const bodyChecks = () => Array.from(bodySection?.querySelectorAll('.check.on .lbl') || []).map(text);
    const extraChecks = () => filterSections
      .filter((section) => section !== brandSection && section !== bodySection && section !== availabilitySection)
      .flatMap((section) => Array.from(section.querySelectorAll('.check.on .lbl')).map(text));
    const activeAvailability = () => text(availabilitySection?.querySelector('.seg button.active') || '').toLowerCase();
    const boatStatus = (boat) => {
      const keys = boat.badges.map(([key]) => key);
      if (keys.includes('req')) return 'by request';
      return 'price shown';
    };
    const brandMatches = (boat, selected) => {
      if (!selected.length) return true;
      const brand = lower(boat.brand);
      const model = lower(boat.model);
      return selected.some((label) => {
        const l = lower(label);
        if (l.startsWith('gala ')) return brand === 'gala' && model.includes(l.replace('gala ', '').trim());
        if (l.includes('galaxy')) return brand === 'galaxy';
        if (l.includes('big foot')) return brand === 'big foot';
        if (l.includes('respo')) return brand === 'respo';
        if (l.includes('northsilver')) return brand === 'northsilver';
        if (l.includes('reval')) return brand === 'reval grade';
        return brand === l || brand.includes(l);
      });
    };
    const bodyMatches = (boat, selected) => {
      if (!selected.length) return true;
      const haystack = lower([boat.brand, boat.cat, boat.model, boat.tagline, boat.features.join(' ')].join(' '));
      return selected.some((label) => {
        const l = lower(label);
        if (l.includes('aluminium')) return /(aluminium|almg|pro angler|heavy duty|compact)/.test(haystack);
        if (l.includes('fishing')) return /(fishing|angler|casting|trolling|livewell|pro)/.test(haystack);
        if (l.includes('rib')) return /(rib|tube|inflatable|gala)/.test(haystack);
        if (l.includes('cruising') || l.includes('fiberglass')) return /(cruising|cabin|grp|fibreglass|family|antares)/.test(haystack);
        if (l.includes('trailer')) return /(trailer|respo|towable)/.test(haystack);
        return haystack.includes(l.replace(' boats', ''));
      });
    };
    const labelMatches = (boat, selected) => {
      if (!selected.length) return true;
      const haystack = lower([boat.brand, boat.cat, boat.model, boat.tagline, boat.features.join(' '), boat.specs.map(([, v]) => v).join(' ')].join(' '));
      return selected.some((label) => haystack.includes(lower(label)));
    };
    const updateToolbar = (filtered, brands, bodies, availability) => {
      const shown = filtered.length ? '1-' + Math.min(filtered.length, 20) : '0';
      if (countEl) countEl.innerHTML = '<b>' + shown + '</b> shown from this 20-item live page snapshot';
      if (headCount) headCount.textContent = filtered.length === BOATS.length ? '20 live cards' : filtered.length + ' shown';
      if (!chipsEl) return;
      const chips = [];
      if (availability && availability !== 'all') chips.push(['Status', availability.replace(/\b\w/g, (m) => m.toUpperCase())]);
      chips.push(['Brand', brands.length ? brands.slice(0, 2).join(', ') + (brands.length > 2 ? ' +' + (brands.length - 2) : '') : 'All']);
      chips.push(['Hull', bodies.length ? bodies.slice(0, 2).join(', ') + (bodies.length > 2 ? ' +' + (bodies.length - 2) : '') : 'All']);
      chipsEl.innerHTML = chips.map(([label, value]) => '<span class="chip">' + label + ': <b>' + value + '</b><span class="x" aria-hidden="true"></span></span>').join('') +
        '<button class="chip-clear" type="button">Clear all</button>';
      chipsEl.querySelector('.chip-clear')?.addEventListener('click', resetFilters);
    };
    function applyFilters(){
      const brands = brandChecks();
      const bodies = bodyChecks();
      const extras = extraChecks();
      const availability = activeAvailability();
      const filtered = BOATS.filter((boat) => {
        if (availability === 'price shown' && boatStatus(boat) !== 'price shown') return false;
        if ((availability === 'request' || availability === 'request price') && boatStatus(boat) !== 'by request') return false;
        if (!brandMatches(boat, brands)) return false;
        return bodyMatches(boat, bodies) && labelMatches(boat, extras);
      });
      renderBoats(filtered);
      updateToolbar(filtered, brands, bodies, availability);
    }
    function resetFilters(event){
      event?.preventDefault?.();
      filters.querySelectorAll('.check.on').forEach((check) => check.classList.remove('on'));
      filters.querySelectorAll('.seg').forEach((seg) => {
        seg.querySelectorAll('button').forEach((button, index) => button.classList.toggle('active', index === 0));
      });
      applyFilters();
    }
    filters.querySelectorAll('.check').forEach((check) => check.addEventListener('click', () => window.setTimeout(applyFilters, 0)));
    filters.querySelectorAll('.seg button').forEach((button) => button.addEventListener('click', () => window.setTimeout(applyFilters, 0)));
    resetControls.forEach((control) => control.addEventListener('click', resetFilters));
    applyFilters();
  })();

  (function initMobileCatalogFilterDock(){
    const sidebar = document.querySelector('aside.filters');
    const body = document.querySelector('.body');
    const main = body?.querySelector('main');
    if (!sidebar || !body || !main) return;

    const media = window.matchMedia('(max-width: 760px)');
    let frame = 0;

    const clearDock = () => {
      sidebar.classList.remove('is-mobile-fixed');
      body.classList.remove('catalog-filter-docked');
      document.documentElement.style.removeProperty('--catalog-sticky-filter-height');
    };

    const sync = () => {
      frame = 0;
      if (!media.matches) {
        clearDock();
        return;
      }

      const topOffset = 74;
      const bodyRect = body.getBoundingClientRect();
      const bodyTop = bodyRect.top + window.scrollY;
      const bodyBottom = bodyRect.bottom + window.scrollY;
      const filterHeight = sidebar.offsetHeight;
      const start = bodyTop - topOffset;
      const end = bodyBottom - filterHeight - 24;
      const docked = window.scrollY >= start && window.scrollY <= end;

      sidebar.classList.toggle('is-mobile-fixed', docked);
      body.classList.toggle('catalog-filter-docked', docked);
      if (docked) {
        document.documentElement.style.setProperty('--catalog-sticky-filter-height', filterHeight + 'px');
      } else {
        document.documentElement.style.removeProperty('--catalog-sticky-filter-height');
      }
    };

    const requestSync = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(sync);
    };

    window.addEventListener('scroll', requestSync, { passive: true });
    window.addEventListener('resize', requestSync);
    media.addEventListener?.('change', requestSync);
    requestSync();
  })();

  (function initQuickSearch(){
    const root = document.getElementById('quickSearch');
    if (!root) return;
    const input = document.getElementById('quickSearchInput');
    const results = document.getElementById('quickSearchResults');
    const toggles = document.querySelectorAll('.search-toggle');
    const closeControls = root.querySelectorAll('[data-search-close]');
    const rows = BOATS.map((boat) => ({
      title: boat.brand + ' ' + boat.model.replace(/<[^>]+>/g, ''),
      brand: boat.brand,
      cat: boat.cat,
      price: boat.price.v,
      photo: boat.photo,
      meta: boat.specs.map(([k, v]) => k + ' ' + v).join(' · ') + ' · ' + boat.features.join(' · '),
      href: '/boat'
    }));

    const renderSearch = () => {
      const query = input.value.trim().toLowerCase();
      const filtered = rows.filter((row) => {
        const haystack = (row.title + ' ' + row.brand + ' ' + row.cat + ' ' + row.meta + ' ' + row.price).toLowerCase();
        return !query || haystack.includes(query);
      }).slice(0, 7);

      results.innerHTML = filtered.length
        ? filtered.map((row) => [
          '<a class="quick-result" href="' + row.href + '">',
            '<img src="' + row.photo + '" alt="' + row.title + '" loading="lazy"/>',
            '<span>',
              '<span class="qr-k">' + row.brand + ' · ' + row.cat + '</span>',
              '<span class="qr-name">' + row.title + '</span>',
              '<span class="qr-meta">' + row.meta + '</span>',
            '</span>',
            '<span class="qr-price">' + row.price + '</span>',
          '</a>'
        ].join('')).join('')
        : '<div class="quick-result"><span></span><span><span class="qr-k">No exact match</span><span class="qr-name">Open the live catalog</span><span class="qr-meta">The source archive currently has 324 results.</span></span><span class="qr-price">324</span></div>';
    };

    const openSearch = () => {
      root.classList.add('is-open');
      root.setAttribute('aria-hidden', 'false');
      toggles.forEach((toggle) => toggle.setAttribute('aria-expanded', 'true'));
      renderSearch();
      window.setTimeout(() => input.focus(), 40);
    };
    const closeSearch = () => {
      root.classList.remove('is-open');
      root.setAttribute('aria-hidden', 'true');
      toggles.forEach((toggle) => toggle.setAttribute('aria-expanded', 'false'));
    };

    toggles.forEach((toggle) => toggle.addEventListener('click', openSearch));
    closeControls.forEach((control) => control.addEventListener('click', closeSearch));
    input.addEventListener('input', renderSearch);
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && root.classList.contains('is-open')) closeSearch();
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        openSearch();
      }
    });
  })();
