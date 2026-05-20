// The quick-search modal lives inside the loaded header partial, so the
    // wiring code below must wait until partials.js has injected it.
    function __initQuickSearch(){
      const searchItems = [
        {
          title: 'Pro Angler 470',
          type: 'Boat',
          eyebrow: 'Pro Angler · Exclusive dealer',
          desc: 'AlMg 5083 aluminium fishing boat, 4.65 m, draft only 19 cm, Marine Nav-ready cockpit.',
          price: '€20,490',
          image: 'assets/boats/finval-470-evo-10.jpg',
          url: 'Boat.html',
          tags: 'finval 470 evo dc aluminium fishing boat shallow draft garmin sonar'
        },
        {
          title: 'Atlas RIB V6',
          type: 'Boat',
          eyebrow: 'Atlas RIB · RIB specialist',
          desc: '5.80 m inflatable safety with twelve seats, two consoles and family deck layout.',
          price: '€26,366',
          image: 'assets/boats/gala-viking-v6f.jpg',
          url: 'Catalog.html',
          tags: 'gala viking rib inflatable boat family'
        },
        {
          title: 'Pilot Marine 6.5',
          type: 'Boat',
          eyebrow: 'Pilot Marine Pro · aluminium',
          desc: 'Cabin cruiser for Black Sea and Danube delta, up to 200 hp, pilot house comfort.',
          price: '€26,330',
          image: 'assets/boats/galaxy-pilot-p65.jpg',
          url: 'Catalog.html',
          tags: 'galaxy pilot cabin aluminium boat 200 hp'
        },
        {
          title: 'Marine Nav electronics',
          type: 'Shop',
          eyebrow: 'Official dealer · sonars',
          desc: 'Chartplotters, fishfinders, transducers and navigation equipment for fitted boats.',
          price: 'from €240',
          image: 'assets/brands/garmin.webp',
          url: 'Shop.html',
          tags: 'garmin marine sonar fishfinder chartplotter navigation echomap'
        },
        {
          title: 'Outboard Y outboard motors',
          type: 'Shop',
          eyebrow: 'Official equipment',
          desc: 'Outboard motors installed, rigged and calibrated in the demo workshop.',
          price: 'from €890',
          image: 'assets/brands/yamaha.webp',
          url: 'Shop.html',
          tags: 'yamaha outboard motor engine installation rigging'
        },
        {
          title: 'E-Motor electric motors',
          type: 'Shop',
          eyebrow: 'Electric motors',
          desc: 'Bow-mount trolling motors for angler boats with battery and deck preparation.',
          price: 'from €640',
          image: 'assets/brands/minnkota.webp',
          url: 'Shop.html',
          tags: 'minn kota electric motor trolling fishing'
        },
        {
          title: 'Marine Cell lithium batteries',
          type: 'Shop',
          eyebrow: 'Power systems',
          desc: 'Lithium batteries for electronics, trolling motors and long fishing days.',
          price: 'from €165',
          image: 'assets/brands/rebelcell.webp',
          url: 'Shop.html',
          tags: 'rebelcell lithium battery batteries power'
        },
        {
          title: 'Marine accessories',
          type: 'Shop',
          eyebrow: 'Hardware Co · RAM · KED',
          desc: 'Deck hardware, mounts, lights, audio, steering and fit-out accessories.',
          price: '182 items',
          image: 'assets/brands/hardware-co.webp',
          url: 'Shop.html',
          tags: 'marine accessories hardware-co ram ked mounts lights audio steering'
        },
        {
          title: 'Expert tuning of angler boats',
          type: 'Service',
          eyebrow: 'Workshop · demo',
          desc: 'Casting platforms, livewells, trolling motor prep, rod storage and JackPlate setup.',
          price: 'service',
          image: 'assets/boats/finval-470-evo-15.jpg',
          url: 'index.html#services',
          tags: 'tuning service angler fishing boat workshop livewell trolling'
        },
        {
          title: 'Outboard engine installation',
          type: 'Service',
          eyebrow: 'Outboard Y · Outboard M · Honda',
          desc: 'Engine fitting, rigging, hydraulic steering, calibration and warranty paperwork.',
          price: 'service',
          image: 'assets/brands/yamaha.webp',
          url: 'index.html#services',
          tags: 'outboard installation engine service yamaha mercury honda'
        },
        {
          title: 'Boat registration and warranty',
          type: 'Service',
          eyebrow: 'registration paperwork',
          desc: 'Registration, warranty desk, pickup, service and delivery across Worldwide.',
          price: 'support',
          image: 'assets/logo/favicon-192.png',
          url: 'index.html#services',
          tags: 'registration warranty anr paperwork delivery service'
        },
        {
          title: 'Pro Angler 470 — owner story',
          type: 'Story',
          eyebrow: 'Logbook · 8 min',
          desc: 'A 19 cm draft puts you in places others cannot reach. One season on the Danube.',
          price: 'read',
          image: 'assets/blog/470vc-overview-01.jpg',
          url: 'index.html#blog',
          tags: 'finval 470 evo story danube review shallow draft'
        }
      ];

      const root = document.getElementById('quickSearch');
      const input = document.getElementById('quickSearchInput');
      const results = document.getElementById('quickSearchResults');
      const toggles = document.querySelectorAll('.search-toggle');
      let activeIndex = -1;

      const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      }[char]));

      const itemHtml = (item, index) => `
        <a class="quick-result${index === activeIndex ? ' is-active' : ''}" href="${esc(item.url)}">
          <span class="quick-result__img"><img src="${esc(item.image)}" alt="${esc(item.title)}" loading="lazy" /></span>
          <span class="quick-result__body">
            <span class="quick-result__ey">${esc(item.eyebrow)}</span>
            <span class="quick-result__title">${esc(item.title)}</span>
            <span class="quick-result__desc">${esc(item.desc)}</span>
          </span>
          <span class="quick-result__aside">
            <span class="quick-result__type">${esc(item.type)}</span>
            <span class="quick-result__price">${esc(item.price)}</span>
          </span>
        </a>
      `;

      const getMatches = (query) => {
        const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
        if (!tokens.length) return searchItems.slice(0, 6);
        return searchItems
          .map((item) => {
            const haystack = `${item.title} ${item.type} ${item.eyebrow} ${item.desc} ${item.tags}`.toLowerCase();
            const score = tokens.reduce((sum, token) => {
              if (item.title.toLowerCase().includes(token)) return sum + 8;
              if (item.tags.toLowerCase().includes(token)) return sum + 5;
              if (haystack.includes(token)) return sum + 2;
              return sum - 20;
            }, 0);
            return { item, score };
          })
          .filter(({ score }) => score > 0)
          .sort((a, b) => b.score - a.score)
          .map(({ item }) => item)
          .slice(0, 7);
      };

      const render = () => {
        const query = input.value;
        const matches = getMatches(query);
        activeIndex = Math.min(activeIndex, matches.length - 1);
        if (!matches.length) {
          results.innerHTML = `
            <div class="quick-search__empty">
              <b>No exact match.</b>
              <span>Try Pro Angler, Marine Nav, sonar, Outboard Y, batteries, trailer, service or warranty.</span>
            </div>
          `;
          return;
        }
        const label = query.trim() ? `${matches.length} matches` : 'Popular searches';
        results.innerHTML = `<div class="quick-search__group">${esc(label)}</div>${matches.map(itemHtml).join('')}`;
      };

      const openSearch = () => {
        root.classList.add('is-open');
        root.setAttribute('aria-hidden', 'false');
        document.body.classList.add('search-open');
        toggles.forEach((toggle) => toggle.setAttribute('aria-expanded', 'true'));
        activeIndex = -1;
        render();
        window.setTimeout(() => input.focus(), 30);
      };

      const closeSearch = () => {
        root.classList.remove('is-open');
        root.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('search-open');
        toggles.forEach((toggle) => toggle.setAttribute('aria-expanded', 'false'));
      };

      toggles.forEach((toggle) => toggle.addEventListener('click', openSearch));
      root.querySelectorAll('[data-search-close]').forEach((control) => control.addEventListener('click', closeSearch));
      input.addEventListener('input', () => {
        activeIndex = -1;
        render();
      });
      input.addEventListener('keydown', (event) => {
        const links = Array.from(results.querySelectorAll('.quick-result'));
        if (event.key === 'Escape') {
          closeSearch();
          return;
        }
        if (!links.length) return;
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          activeIndex = (activeIndex + 1) % links.length;
          render();
          results.querySelectorAll('.quick-result')[activeIndex]?.scrollIntoView({ block: 'nearest' });
        }
        if (event.key === 'ArrowUp') {
          event.preventDefault();
          activeIndex = (activeIndex - 1 + links.length) % links.length;
          render();
          results.querySelectorAll('.quick-result')[activeIndex]?.scrollIntoView({ block: 'nearest' });
        }
        if (event.key === 'Enter' && activeIndex >= 0) {
          event.preventDefault();
          links[activeIndex].click();
        }
      });
      document.addEventListener('keydown', (event) => {
        if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
          event.preventDefault();
          openSearch();
        }
      });
      render();
    }
    if (document.querySelector('[data-partial="header"]')){
      document.documentElement.addEventListener('partials:ready', __initQuickSearch, { once: true });
    } else {
      // No partials in this page — run immediately when DOM is ready
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', __initQuickSearch);
      else __initQuickSearch();
    }

    function __initShopFinder(){
      document.querySelectorAll('.shop-system').forEach((root) => {
        if (root.dataset.shopFinderReady === 'true') return;
        const buttons = Array.from(root.querySelectorAll('[data-shop-filter]'));
        const cards = Array.from(root.querySelectorAll('.cat[data-shop-groups]'));
        if (!buttons.length || !cards.length) return;

        const applyFilter = (filter) => {
          const active = filter || 'all';
          buttons.forEach((button) => {
            const selected = button.dataset.shopFilter === active;
            button.classList.toggle('is-active', selected);
            button.setAttribute('aria-pressed', selected ? 'true' : 'false');
          });
          cards.forEach((card) => {
            const groups = (card.dataset.shopGroups || '').split(/\s+/).filter(Boolean);
            const visible = active === 'all' || groups.includes(active);
            card.hidden = !visible;
            card.classList.toggle('is-hidden', !visible);
          });
        };

        buttons.forEach((button) => {
          button.addEventListener('click', () => applyFilter(button.dataset.shopFilter));
        });
        root.dataset.shopFinderReady = 'true';
        applyFilter(root.querySelector('[data-shop-filter].is-active')?.dataset.shopFilter || 'all');
      });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', __initShopFinder);
    else __initShopFinder();
