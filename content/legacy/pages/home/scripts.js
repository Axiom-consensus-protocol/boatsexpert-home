// The quick-search modal lives inside the loaded header partial, so the
    // wiring code below must wait until partials.js has injected it.
    function __initQuickSearch(){
      const searchItems = [
        {
          title: 'Finval 470 EVO DC',
          type: 'Boat',
          eyebrow: 'Finval · Exclusive dealer',
          desc: 'AlMg 5083 aluminium fishing boat, 4.65 m, draft only 19 cm, Garmin-ready cockpit.',
          price: '€20,490',
          image: 'assets/boats/finval-470-evo-10.jpg',
          url: 'Boat.html',
          tags: 'finval 470 evo dc aluminium fishing boat shallow draft garmin sonar'
        },
        {
          title: 'GALA Viking V6F',
          type: 'Boat',
          eyebrow: 'GALA · RIB specialist',
          desc: '5.80 m inflatable safety with twelve seats, two consoles and family deck layout.',
          price: '€26,366',
          image: 'assets/boats/gala-viking-v6f.jpg',
          url: 'Catalog.html',
          tags: 'gala viking rib inflatable boat family'
        },
        {
          title: 'Galaxy Pilot P6.5',
          type: 'Boat',
          eyebrow: 'Galaxy Pro · aluminium',
          desc: 'Cabin cruiser for Black Sea and Danube delta, up to 200 hp, pilot house comfort.',
          price: '€26,330',
          image: 'assets/boats/galaxy-pilot-p65.jpg',
          url: 'Catalog.html',
          tags: 'galaxy pilot cabin aluminium boat 200 hp'
        },
        {
          title: 'Garmin Marine electronics',
          type: 'Shop',
          eyebrow: 'Official dealer · sonars',
          desc: 'Chartplotters, fishfinders, transducers and navigation equipment for fitted boats.',
          price: 'from €240',
          image: 'assets/brands/garmin.webp',
          url: 'Shop.html',
          tags: 'garmin marine sonar fishfinder chartplotter navigation echomap'
        },
        {
          title: 'Yamaha outboard motors',
          type: 'Shop',
          eyebrow: 'Official equipment',
          desc: 'Outboard motors installed, rigged and calibrated in the Otopeni workshop.',
          price: 'from €890',
          image: 'assets/brands/yamaha.webp',
          url: 'Shop.html',
          tags: 'yamaha outboard motor engine installation rigging'
        },
        {
          title: 'Minn Kota electric motors',
          type: 'Shop',
          eyebrow: 'Electric motors',
          desc: 'Bow-mount trolling motors for angler boats with battery and deck preparation.',
          price: 'from €640',
          image: 'assets/brands/minnkota.webp',
          url: 'Shop.html',
          tags: 'minn kota electric motor trolling fishing'
        },
        {
          title: 'Rebelcell lithium batteries',
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
          eyebrow: 'Osculati · RAM · KED',
          desc: 'Deck hardware, mounts, lights, audio, steering and fit-out accessories.',
          price: '182 items',
          image: 'assets/brands/osculati.webp',
          url: 'Shop.html',
          tags: 'marine accessories osculati ram ked mounts lights audio steering'
        },
        {
          title: 'Expert tuning of angler boats',
          type: 'Service',
          eyebrow: 'Workshop · Otopeni',
          desc: 'Casting platforms, livewells, trolling motor prep, rod storage and JackPlate setup.',
          price: 'service',
          image: 'assets/boats/finval-470-evo-15.jpg',
          url: 'index.html#services',
          tags: 'tuning service angler fishing boat workshop livewell trolling'
        },
        {
          title: 'Outboard engine installation',
          type: 'Service',
          eyebrow: 'Yamaha · Mercury · Honda',
          desc: 'Engine fitting, rigging, hydraulic steering, calibration and warranty paperwork.',
          price: 'service',
          image: 'assets/brands/yamaha.webp',
          url: 'index.html#services',
          tags: 'outboard installation engine service yamaha mercury honda'
        },
        {
          title: 'Boat registration and warranty',
          type: 'Service',
          eyebrow: 'ANR paperwork',
          desc: 'Registration, warranty desk, pickup, service and delivery across RO · MD · RS · BG.',
          price: 'support',
          image: 'assets/logo/favicon-192.png',
          url: 'index.html#services',
          tags: 'registration warranty anr paperwork delivery service'
        },
        {
          title: 'Finval 470 EVO DC — owner story',
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
              <span>Try Finval, Garmin, sonar, Yamaha, batteries, trailer, service or warranty.</span>
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
