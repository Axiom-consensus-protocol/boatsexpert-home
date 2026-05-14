// Mobile drawer — close on link click
    document.querySelectorAll('.mobile-nav a, .mobile-tools a').forEach(a => {
      a.addEventListener('click', () => {
        const t = document.getElementById('mobile-toggle');
        if (t) t.checked = false;
      });
    });

    // === LIGHTBOX ===
    (function(){
      const PHOTOS = [
        { src: 'assets/boats/finval-470-evo.jpg',    cap: 'Hero · in showroom' },
        { src: 'assets/boats/finval-470-evo-2.jpg',  cap: 'Profile · port side' },
        { src: 'assets/boats/finval-470-evo-10.jpg', cap: 'Deck · trolling sockets' },
        { src: 'assets/boats/finval-470-evo-13.jpg', cap: 'Console · gauges' },
        { src: 'assets/boats/finval-470-evo-15.jpg', cap: 'On water · cruise' },
        { src: 'assets/boats/finval-470-evo-17.jpg', cap: 'Stern · transom' },
      ];
      const lb     = document.getElementById('lightbox');
      const lbImg  = document.getElementById('lb-img');
      const lbCur  = document.getElementById('lb-cur');
      const lbTot  = document.getElementById('lb-total');
      const lbThumbs = document.getElementById('lb-thumbs');
      let idx = 0;

      function update(){
        lbImg.classList.add('swap');
        setTimeout(() => {
          lbImg.src = PHOTOS[idx].src;
          lbImg.alt = PHOTOS[idx].cap;
          lbCur.textContent = idx + 1;
          requestAnimationFrame(() => lbImg.classList.remove('swap'));
        }, 120);
        lbThumbs.querySelectorAll('button').forEach((b, i) => {
          b.classList.toggle('active', i === idx);
          if (i === idx) b.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
        });
      }
      function open(i){
        idx = Math.max(0, Math.min(i, PHOTOS.length - 1));
        lb.hidden = false;
        requestAnimationFrame(() => lb.classList.add('open'));
        document.body.style.overflow = 'hidden';
        update();
      }
      function close(){
        lb.classList.remove('open');
        setTimeout(() => { lb.hidden = true; document.body.style.overflow = ''; }, 300);
      }
      function next(){ idx = (idx + 1) % PHOTOS.length; update(); }
      function prev(){ idx = (idx - 1 + PHOTOS.length) % PHOTOS.length; update(); }

      // Build thumb strip
      lbTot.textContent = PHOTOS.length;
      PHOTOS.forEach((p, i) => {
        const b = document.createElement('button');
        b.innerHTML = '<img src="' + p.src + '" alt=""/>';
        b.setAttribute('aria-label', 'Photo ' + (i+1));
        b.addEventListener('click', () => { idx = i; update(); });
        if (i === 0) b.classList.add('active');
        lbThumbs.appendChild(b);
      });

      // Triggers
      document.getElementById('lb-close').addEventListener('click', close);
      document.getElementById('lb-prev').addEventListener('click', prev);
      document.getElementById('lb-next').addEventListener('click', next);
      lb.addEventListener('click', e => { if (e.target === lb) close(); });

      // Desktop gallery click → open
      const galMain = document.querySelector('.gal-main');
      if (galMain) galMain.addEventListener('click', e => {
        if (e.target.closest('.gal-toolbar, .gal-foot')) return;
        open(0);
      });
      document.querySelectorAll('.gal-thumb[data-src]').forEach((t, i) => {
        t.addEventListener('click', e => { e.preventDefault(); open(i); });
      });

      // Mobile carousel → open at current slide
      document.querySelectorAll('.gal-mobile-slide img').forEach(img => {
        img.addEventListener('click', () => open(parseInt(img.dataset.lb, 10) || 0));
      });
      const galMZoom = document.getElementById('gal-m-zoom');
      if (galMZoom) galMZoom.addEventListener('click', () => {
        const cur = parseInt(document.getElementById('gal-m-cur').textContent, 10) - 1;
        open(cur);
      });

      // Keyboard
      document.addEventListener('keydown', e => {
        if (lb.hidden) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
      });

      // Touch swipe inside lightbox
      let touchX = 0;
      lb.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
      lb.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
      });
    })();

    // === SCROLL REVEAL ===
    (function(){
      if (!('IntersectionObserver' in window)) return;
      document.querySelectorAll('.sec, .sim, .killer-card, .cfg, .stat-card').forEach(el => el.classList.add('reveal'));
      const io = new IntersectionObserver(es => {
        es.forEach(e => {
          if (e.isIntersecting){
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
      document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    })();

    // === MOBILE SWIPE GALLERY — dot tracker ===
    (function(){
      const track = document.getElementById('gal-m-track');
      const dots  = document.getElementById('gal-m-dots');
      const cur   = document.getElementById('gal-m-cur');
      if (!track || !dots) return;
      const slides = track.querySelectorAll('.gal-mobile-slide');
      track.addEventListener('scroll', () => {
        const i = Math.round(track.scrollLeft / track.clientWidth);
        if (cur) cur.textContent = i + 1;
        dots.querySelectorAll('span').forEach((d, j) => d.classList.toggle('active', j === i));
      }, { passive: true });
    })();

    // Finance / Leasing calculator — live update on slider input
    (function(){
      const price = document.getElementById('fin-price');
      const down  = document.getElementById('fin-down');
      const term  = document.getElementById('fin-term');
      const apr   = document.getElementById('fin-apr');
      const pV = document.getElementById('fin-price-v');
      const dV = document.getElementById('fin-down-v');
      const tV = document.getElementById('fin-term-v');
      const aV = document.getElementById('fin-apr-v');
      const moEl = document.getElementById('fin-mo');
      const totEl = document.getElementById('fin-total');
      function fmt(n){ return '€' + n.toLocaleString('en-US'); }
      function recalc(){
        const p = parseInt(price.value, 10);
        const d = parseInt(down.value, 10);
        const t = parseInt(term.value, 10);
        const a = parseInt(apr.value, 10) / 10; // %
        const principal = p * (1 - d/100);
        let mo;
        if (a === 0){
          mo = principal / t;
        } else {
          const r = (a / 100) / 12;
          mo = principal * r / (1 - Math.pow(1 + r, -t));
        }
        const total = (mo * t) + (p * d / 100);
        pV.textContent = fmt(p);
        dV.textContent = d + '%';
        tV.textContent = t + ' mo';
        aV.textContent = a.toFixed(1) + ' %';
        moEl.innerHTML = fmt(Math.round(mo)) + '<em>/mo</em>';
        totEl.textContent = fmt(Math.round(total));
      }
      [price, down, term, apr].forEach(el => el.addEventListener('input', recalc));
      recalc();
    })();

    // Thumbnail gallery — swap main image
    document.querySelectorAll('.gal-thumb[data-src]').forEach(t => {
      t.addEventListener('click', () => {
        document.querySelectorAll('.gal-thumb').forEach(x => x.classList.remove('active'));
        t.classList.add('active');
        document.getElementById('gal-main-img').src = t.dataset.src;
      });
    });
    // Smooth tab scroll
    document.querySelectorAll('.tabs-bar a').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        document.querySelectorAll('.tabs-bar a').forEach(x => x.classList.remove('active'));
        a.classList.add('active');
        const y = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      });
    });

    // === TABS-BAR FADE-EDGE INDICATORS ===
    (function(){
      const bar = document.querySelector('.tabs-bar');
      const inner = bar && bar.querySelector('.container-wide');
      if (!bar || !inner) return;
      function update(){
        const overflow = inner.scrollWidth > inner.clientWidth + 1;
        bar.classList.toggle('has-overflow', overflow);
        bar.classList.toggle('scrolled-x', inner.scrollLeft > 4);
        bar.classList.toggle('at-end', overflow && inner.scrollLeft + inner.clientWidth >= inner.scrollWidth - 4);
      }
      inner.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update);
      update();
    })();
