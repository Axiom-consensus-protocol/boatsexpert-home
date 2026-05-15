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

const BOATS = [
    {
      brand: 'Finval', cat: 'Aluminium', country: 'ee',
      model: '470 EVO <em>DC</em>',
      tagline: 'Shallowest draft in the Finval range — clears 19 cm of water.',
      badges: [['exclusive','Exclusive'],['ok','In stock'],['featured','Editor\'s pick']],
      features: ['AlMg 5083 hull', '55 L fuel', 'Trolling-ready', 'RAPTOR coat'],
      specs: [['Length','4.65 m'],['Beam','1.96 m'],['Engine','40–70 hp'],['Draft','19 cm']],
      meta: [['users','4 + 1'],['weight','440 kg'],['shield','10 yrs']],
      price: { l: 'From, VAT incl.', v: '€20,490', mo: '€295/mo · 60 mo' },
      photo: 'assets/boats/finval-470-evo.jpg',
      fb: '',
      gallery: 28, year: 2026,
    },
    {
      brand: 'GALA', cat: 'RIB', country: 'ua',
      model: 'VIKING <em>V6F</em>',
      tagline: 'Open RIB platform. Inflatable tubes, fibreglass V-hull, 150 hp top.',
      badges: [['order','On order · 4–6 wk']],
      features: ['Fibreglass V-hull', 'PVC tubes', '12 pax', 'Console wheel'],
      specs: [['Length','5.80 m'],['Beam','2.36 m'],['Engine','150 hp'],['Tubes','50 cm']],
      meta: [['users','12'],['weight','520 kg'],['shield','5 yrs']],
      price: { l: 'MSRP from', v: '€26,366', mo: '€420/mo · 60 mo' },
      photo: 'assets/boats/gala-viking-v6f-111-654x525.jpg',
      fb: '',
      gallery: 14, year: 2026,
    },
    {
      brand: 'GALAXY Pro', cat: 'Cabin', country: 'ua',
      model: 'Pilot <em>P6.5</em>',
      tagline: 'Aluminium pilot boat. 200 hp, walk-around cabin, sea-trial slots open.',
      badges: [['ok','In stock']],
      features: ['Walk-around', 'AlMg 5083', 'Heated cabin', 'Pro electronics'],
      specs: [['Length','6.50 m'],['Beam','2.30 m'],['Engine','200 hp'],['Cabin','Yes']],
      meta: [['users','12'],['weight','920 kg'],['shield','10 yrs']],
      price: { l: 'MSRP from', v: '€26,330', mo: '€420/mo · 60 mo' },
      photo: 'assets/boats/galaxy-pilot-p6-5-654x525.jpg',
      fb: '',
      gallery: 22, year: 2026,
    },
    {
      brand: 'Big Foot', cat: 'Aluminium', country: 'hu',
      model: 'Ultimate <em>Console</em>',
      tagline: 'Centre-console aluminium angler. Rod holders, livewell, dry storage.',
      badges: [['ok','In stock']],
      features: ['Centre-console', 'Livewell 90 L', '4 rod holders', 'Trolling-ready'],
      specs: [['Length','5.65 m'],['Beam','2.05 m'],['Engine','60 hp'],['Draft','27 cm']],
      meta: [['users','6'],['weight','520 kg'],['shield','5 yrs']],
      price: { l: 'MSRP from', v: '€10,605', mo: '€175/mo · 60 mo' },
      photo: 'assets/boats/big-foot-ultimate-654x525.jpg',
      fb: '',
      gallery: 11, year: 2026,
    },
    {
      brand: 'GALAXY', cat: 'Heavy Duty', country: 'ua',
      model: 'HD <em>460M</em>',
      tagline: 'Heavy-duty 4.7 m aluminium hull. Built for rough water and commercial use.',
      badges: [['req','By request']],
      features: ['3 mm AlMg', 'Self-bailing', '10 pax', 'Commercial-rated'],
      specs: [['Length','4.70 m'],['Beam','2.20 m'],['Engine','50 hp'],['Draft','30 cm']],
      meta: [['users','10'],['weight','610 kg'],['shield','5 yrs']],
      price: { l: 'Price', v: 'On request', req: true },
      photo: 'assets/boats/galaxy-heavy-duty-hd460m-654x525.jpg',
      fb: '',
      gallery: 9, year: 2026,
    },
    {
      brand: 'Finval', cat: 'Aluminium', country: 'ee',
      model: '555 EVO <em>BC</em>',
      tagline: 'Bow-console layout, 5.5 m fishing deck — Finval\'s most versatile angler.',
      badges: [['exclusive','Exclusive']],
      features: ['AlMg 5083', 'Bow console', '80 L tank', 'Stand-up casting'],
      specs: [['Length','5.55 m'],['Beam','2.10 m'],['Engine','60–100'],['Draft','24 cm']],
      meta: [['users','5'],['weight','620 kg'],['shield','10 yrs']],
      price: { l: 'From, VAT incl.', v: '€28,900', mo: '€450/mo · 60 mo' },
      photo: 'assets/boats/finval-470-evo-18.jpg',
      fb: '',
      gallery: 18, year: 2025,
    },
    {
      brand: 'GALAXY Pro', cat: 'Compact', country: 'ua',
      model: 'Pilot <em>P4</em>',
      tagline: 'Compact aluminium console — entry-level model in the GALAXY range.',
      badges: [['ok','In stock']],
      features: ['Open console', '2 mm AlMg', 'Tiller option', 'Road-trailer'],
      specs: [['Length','3.90 m'],['Beam','1.65 m'],['Engine','30 hp'],['Draft','22 cm']],
      meta: [['users','6'],['weight','230 kg'],['shield','5 yrs']],
      price: { l: 'MSRP from', v: '€7,920', mo: '€135/mo · 60 mo' },
      photo: 'assets/boats/galaxy-pilot-p4-654x525.jpg',
      fb: '',
      gallery: 8, year: 2025,
    },
    {
      brand: 'NorthSilver', cat: 'Cabin', country: 'ee',
      model: 'Hawk <em>580 DCM</em>',
      tagline: 'Double-cabin cruiser. Sleep two, fish four — Black Sea proven.',
      badges: [['order','On order · 6 wk']],
      features: ['2-bunk cabin', 'GRP/AlMg', 'Heated helm', 'Toilet aft'],
      specs: [['Length','5.80 m'],['Beam','2.30 m'],['Engine','150 hp'],['Draft','45 cm']],
      meta: [['users','6'],['weight','1180 kg'],['shield','10 yrs']],
      price: { l: 'From, VAT incl.', v: '€38,200', mo: '€615/mo · 60 mo' },
      photo: 'assets/stock/northsilver-585-fish.jpg',
      fb: 'assets/stock/northsilver-585-yamaha.png',
      gallery: 24, year: 2026,
    },
    {
      brand: 'GALAXY', cat: 'Heavy Duty', country: 'ua',
      model: 'HC <em>520</em>',
      tagline: 'Commercial-grade aluminium. Ideal for marina operators and pickups.',
      badges: [['req','By request']],
      features: ['3 mm AlMg', 'Reinforced', 'Cargo deck', 'Heavy keel'],
      specs: [['Length','5.20 m'],['Beam','2.10 m'],['Engine','8 hp'],['Draft','35 cm']],
      meta: [['users','5'],['weight','580 kg'],['shield','5 yrs']],
      price: { l: 'Price', v: 'On request', req: true },
      photo: 'assets/boats/galaxy-heavy-duty-hc520-654x525.jpg',
      fb: '',
      gallery: 7, year: 2026,
    },
    {
      brand: 'Beneteau', cat: 'Cruising', country: 'fr',
      model: 'Antares <em>7</em>',
      tagline: 'Family fibreglass cruiser. Walk-around cabin, sun pad, swim platform.',
      badges: [['order','On order · 8–10 wk']],
      features: ['GRP hull', 'Walk-around', 'Sun deck', 'CE-B cat'],
      specs: [['Length','7.05 m'],['Beam','2.59 m'],['Engine','150–250'],['Draft','55 cm']],
      meta: [['users','8'],['weight','1640 kg'],['shield','5 yrs']],
      price: { l: 'From, VAT incl.', v: '€72,400', mo: '€1,160/mo · 60 mo' },
      photo: 'assets/stock/beneteau-antares-7-comfort.jpg',
      fb: 'assets/stock/beneteau-antares-7-essential.jpg',
      gallery: 32, year: 2026,
    },
    {
      brand: 'Big Foot', cat: 'Aluminium', country: 'hu',
      model: 'Ultimate <em>B</em>',
      tagline: 'Entry-level fishing aluminium — same hull, basic equipment.',
      badges: [['ok','In stock']],
      features: ['AlMg 5083', 'Open deck', 'Bench seat', 'Basic kit'],
      specs: [['Length','5.65 m'],['Beam','2.05 m'],['Engine','60 hp'],['Draft','27 cm']],
      meta: [['users','6'],['weight','480 kg'],['shield','5 yrs']],
      price: { l: 'MSRP from', v: '€3,450', mo: '€62/mo · 60 mo' },
      photo: 'assets/boats/big-foot-ultimate.jpg',
      fb: '',
      gallery: 6, year: 2026,
    },
    {
      brand: 'Finval', cat: 'Pro Angler', country: 'ee',
      model: '575 CASTING <em>PRO</em>',
      tagline: 'A new concept for professional fishermen — casting deck forward.',
      badges: [['exclusive','Exclusive'],['featured','New 2026']],
      features: ['Casting deck', '105 L livewell', 'Pro electronics', '24 V trolling'],
      specs: [['Length','5.75 m'],['Beam','2.15 m'],['Engine','70–115'],['Draft','22 cm']],
      meta: [['users','5'],['weight','690 kg'],['shield','10 yrs']],
      price: { l: 'From, VAT incl.', v: '€34,500', mo: '€555/mo · 60 mo' },
      photo: 'assets/boats/finval-470-evo-27.jpg',
      fb: '',
      gallery: 16, year: 2026,
    },
    {
      brand: 'GALAXY Pro', cat: 'Flagship', country: 'ua',
      model: 'TRIDENT <em>T12</em>',
      tagline: '11.6 m flagship aluminium — twin engines, sleeps eight, ocean-class hull.',
      badges: [['featured','Flagship'],['order','Build to order']],
      features: ['Twin engines', 'Sleeps 8', 'Ocean-class', '11.6 m hull'],
      specs: [['Length','11.6 m'],['Beam','3.40 m'],['Engine','2 × 600'],['Draft','85 cm']],
      meta: [['users','20'],['weight','5800 kg'],['shield','10 yrs']],
      price: { l: 'MSRP from', v: '€178,940', mo: '€2,870/mo · 60 mo' },
      photo: 'assets/boats/galaxy-trident-t12-654x525.jpg',
      fb: '',
      gallery: 42, year: 2026,
    },
    {
      brand: 'Reval Grade', cat: 'Aluminium', country: 'ee',
      model: '470 <em>Pro</em>',
      tagline: 'Estonian aluminium runabout — solid hull, simple electrical, trailer-ready.',
      badges: [['ok','In stock']],
      features: ['AlMg 5083', 'Steering wheel', 'Cushioned seats', 'Built-in tank'],
      specs: [['Length','4.70 m'],['Beam','1.92 m'],['Engine','40–60 hp'],['Draft','25 cm']],
      meta: [['users','4'],['weight','390 kg'],['shield','5 yrs']],
      price: { l: 'From, VAT incl.', v: '€14,200', mo: '€235/mo · 60 mo' },
      photo: 'assets/stock/reval-grade-cg47.jpg',
      fb: 'assets/boats/finval-470-evo-11.jpg',
      gallery: 11, year: 2025,
    },
    {
      brand: 'LANDX', cat: 'Aluminium', country: 'hu',
      model: 'Pro <em>460</em>',
      tagline: 'Hungarian-built 4.6 m angler — open deck, lockable storage, livewell.',
      badges: [['order','On order · 8 wk']],
      features: ['AlMg 5083', 'Livewell 60 L', 'Lockable storage', 'Rod holders'],
      specs: [['Length','4.60 m'],['Beam','1.95 m'],['Engine','40–50 hp'],['Draft','24 cm']],
      meta: [['users','4'],['weight','420 kg'],['shield','5 yrs']],
      price: { l: 'From, VAT incl.', v: '€16,800', mo: '€275/mo · 60 mo' },
      photo: 'assets/stock/landx-x6.png',
      fb: 'assets/boats/finval-470-evo-13.jpg',
      gallery: 9, year: 2026,
    },
    {
      brand: 'NorthSilver', cat: 'Expedition', country: 'ee',
      model: 'Expedition <em>575</em>',
      tagline: 'Long-range expedition hull. Auxiliary fuel, dry storage, heated wheelhouse.',
      badges: [['order','On order · 10 wk']],
      features: ['Wheelhouse', '120 L fuel', 'AlMg 5083', 'Heater + GPS'],
      specs: [['Length','5.75 m'],['Beam','2.20 m'],['Engine','115–150'],['Draft','40 cm']],
      meta: [['users','6'],['weight','980 kg'],['shield','10 yrs']],
      price: { l: 'From, VAT incl.', v: '€44,800', mo: '€720/mo · 60 mo' },
      photo: 'assets/stock/northsilver-585-yamaha.png',
      fb: 'assets/stock/northsilver-585-fish.jpg',
      gallery: 19, year: 2026,
    },
    {
      brand: 'GALA', cat: 'RIB', country: 'ua',
      model: 'ATLANTIS <em>A360</em>',
      tagline: 'Compact RIB — light enough for one-person handling, tough enough for the sea.',
      badges: [['ok','In stock']],
      features: ['PVC tubes', 'GRP V-hull', 'Folding seat', 'Towable'],
      specs: [['Length','3.60 m'],['Beam','1.70 m'],['Engine','15–25 hp'],['Tubes','42 cm']],
      meta: [['users','5'],['weight','85 kg'],['shield','5 yrs']],
      price: { l: 'MSRP from', v: '€4,890', mo: '€85/mo · 60 mo' },
      photo: 'assets/stock/gala-atlantis-a390q.jpg',
      fb: 'assets/boats/gala-viking-v6f.jpg',
      gallery: 12, year: 2026,
    },
    {
      brand: 'RESPO', cat: 'Trailer', country: 'ee',
      model: 'BT <em>1800</em>',
      tagline: 'Hot-galvanised boat trailer — 1800 kg capacity, road-legal across EU.',
      badges: [['ok','In stock']],
      features: ['Hot-galvanised', '1800 kg', 'Tilting frame', '13-pin EU plug'],
      specs: [['Length','6.20 m'],['Beam','2.10 m'],['Capacity','1800 kg'],['Tyre','13″']],
      meta: [['users','—'],['weight','280 kg'],['shield','3 yrs']],
      price: { l: 'From, VAT incl.', v: '€3,950', mo: '€68/mo · 60 mo' },
      photo: 'assets/stock/furseal-425-sc-vinyl.jpg',
      fb: 'assets/boats/hero-DSC07340-1.jpg',
      gallery: 6, year: 2026,
    },
  ];

  const BADGE_CLASS = { exclusive: 'exclusive', featured: 'featured', ok: '', order: 'order', req: 'request' };
  const META_ICONS = {
    users: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="5.5" r="2.4"/><path d="M2.5 14 Q 8 9.5 13.5 14"/></svg>',
    weight: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5 H13 L12 13 H4 Z"/><path d="M6.5 5 Q 6.5 3 8 3 Q 9.5 3 9.5 5"/></svg>',
    shield: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2 L13 4 L13 9 Q 13 12 8 14 Q 3 12 3 9 L3 4 Z"/><path d="M5.8 8 L7.2 9.4 L10.4 6.2"/></svg>',
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
              '<span class="gallery-count">' + GALLERY_SVG + b.gallery + ' photos</span>',
              '<span class="year-pill">' + b.year + '</span>',
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
    const availabilitySection = findSection('availability');
    const brandChecks = () => Array.from(brandSection?.querySelectorAll('.check.on .lbl') || []).map(text);
    const bodyChecks = () => Array.from(bodySection?.querySelectorAll('.check.on .lbl') || []).map(text);
    const activeAvailability = () => text(availabilitySection?.querySelector('.seg button.active') || '').toLowerCase();
    const boatStatus = (boat) => {
      const keys = boat.badges.map(([key]) => key);
      if (keys.includes('ok')) return 'in stock';
      if (keys.includes('order')) return 'on order';
      if (keys.includes('req')) return 'by request';
      return 'catalog';
    };
    const bodyMatches = (boat, selected) => {
      if (!selected.length) return true;
      const haystack = lower([boat.brand, boat.cat, boat.tagline, boat.features.join(' ')].join(' '));
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
    const updateToolbar = (filtered, brands, bodies, availability) => {
      const shown = filtered.length ? '1 - ' + Math.min(filtered.length, 12) : '0';
      if (countEl) countEl.innerHTML = 'Showing <b>' + shown + '</b> of <b>' + filtered.length + '</b> boats';
      if (headCount) headCount.textContent = filtered.length === BOATS.length ? 'ready' : filtered.length + ' shown';
      if (!chipsEl) return;
      const chips = [];
      if (availability && availability !== 'all') chips.push(['Stock', availability.replace(/\b\w/g, (m) => m.toUpperCase())]);
      chips.push(['Brand', brands.length ? brands.slice(0, 2).join(', ') + (brands.length > 2 ? ' +' + (brands.length - 2) : '') : 'All']);
      chips.push(['Hull', bodies.length ? bodies.slice(0, 2).join(', ') + (bodies.length > 2 ? ' +' + (bodies.length - 2) : '') : 'All']);
      chipsEl.innerHTML = chips.map(([label, value]) => '<span class="chip">' + label + ': <b>' + value + '</b><span class="x" aria-hidden="true"></span></span>').join('') +
        '<button class="chip-clear" type="button">Clear all</button>';
      chipsEl.querySelector('.chip-clear')?.addEventListener('click', resetFilters);
    };
    function applyFilters(){
      const brands = brandChecks();
      const bodies = bodyChecks();
      const availability = activeAvailability();
      const filtered = BOATS.filter((boat) => {
        if (availability === 'in stock' && boatStatus(boat) !== 'in stock') return false;
        if (availability === 'on order' && boatStatus(boat) !== 'on order') return false;
        if (brands.length && !brands.some((brand) => lower(boat.brand).includes(lower(brand)))) return false;
        return bodyMatches(boat, bodies);
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
        : '<div class="quick-result"><span></span><span><span class="qr-k">No exact match</span><span class="qr-name">Send us the brief</span><span class="qr-meta">We will find the closest hull in 48 hours.</span></span><span class="qr-price">Brief</span></div>';
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
