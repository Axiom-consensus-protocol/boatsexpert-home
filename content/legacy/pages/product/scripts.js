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
        { src: 'assets/shop/HK4200A-3-300x258.png', cap: 'BayStar Hydraulic Steering Kit HK4200A-3' },
        { src: 'assets/shop/HK4222A-3-300x258.jpg', cap: 'BayStar Hydraulic Steering System Luxe' },
        { src: 'assets/shop/F14393-300x258.jpg',    cap: 'Hydraulic steering product view' },
        { src: 'assets/shop/22-300x258.jpg',        cap: 'Hydraulic steering component view' },
        { src: 'assets/shop/901157-300x258.jpg',    cap: 'Hydraulic steering fittings view' },
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

      lbTot.textContent = PHOTOS.length;
      PHOTOS.forEach((p, i) => {
        const b = document.createElement('button');
        b.innerHTML = '<img src="' + p.src + '" alt=""/>';
        b.setAttribute('aria-label', 'Photo ' + (i+1));
        b.addEventListener('click', () => { idx = i; update(); });
        if (i === 0) b.classList.add('active');
        lbThumbs.appendChild(b);
      });

      document.getElementById('lb-close').addEventListener('click', close);
      document.getElementById('lb-prev').addEventListener('click', prev);
      document.getElementById('lb-next').addEventListener('click', next);
      lb.addEventListener('click', e => { if (e.target === lb) close(); });

      // Desktop pgal-main → open
      const pgalMain = document.querySelector('.pgal-main');
      if (pgalMain) pgalMain.addEventListener('click', e => {
        if (e.target.closest('.pgal-tools, .pgal-badges')) return;
        open(0);
      });
      // Desktop thumbs → open at correct index
      document.querySelectorAll('.pgal-thumb[data-src]').forEach((t, i) => {
        t.addEventListener('dblclick', e => { e.preventDefault(); open(i); });
      });

      // Mobile carousel → open
      document.querySelectorAll('.pgal-mobile-slide img').forEach(img => {
        img.addEventListener('click', () => open(parseInt(img.dataset.lb, 10) || 0));
      });
      const pgalMZoom = document.getElementById('pgal-m-zoom');
      if (pgalMZoom) pgalMZoom.addEventListener('click', () => {
        const cur = parseInt(document.getElementById('pgal-m-cur').textContent, 10) - 1;
        open(cur);
      });

      document.addEventListener('keydown', e => {
        if (lb.hidden) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
      });

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
      document.querySelectorAll('.sec, .compat, .rel, .rev, .stat-card').forEach(el => el.classList.add('reveal'));
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
      const track = document.getElementById('pgal-m-track');
      const dots  = document.getElementById('pgal-m-dots');
      const cur   = document.getElementById('pgal-m-cur');
      if (!track || !dots) return;
      track.addEventListener('scroll', () => {
        const i = Math.round(track.scrollLeft / track.clientWidth);
        if (cur) cur.textContent = i + 1;
        dots.querySelectorAll('span').forEach((d, j) => d.classList.toggle('active', j === i));
      }, { passive: true });
    })();

    // Gallery swap
    document.querySelectorAll('.pgal-thumb[data-src]').forEach(t => {
      t.addEventListener('click', () => {
        document.querySelectorAll('.pgal-thumb').forEach(x => x.classList.remove('active'));
        t.classList.add('active');
        document.getElementById('pgal-main-img').src = t.dataset.src;
      });
    });
    // Qty buttons
    document.querySelectorAll('.qty button').forEach(b => {
      b.addEventListener('click', () => {
        const inp = document.getElementById('qty');
        const d = parseInt(b.dataset.d, 10);
        inp.value = Math.max(1, parseInt(inp.value || '1', 10) + d);
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
