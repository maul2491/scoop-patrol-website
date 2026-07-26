/* Scoop Patrol Aberdare — site behaviour.
   Progressive enhancement only: every page is readable and every link works
   with this file blocked. */
(function () {
  'use strict';

  var WHATSAPP_NUMBER = '447760541636';

  // ---------------------------------------------------------------------
  // Mobile menu
  // ---------------------------------------------------------------------
  var burger = document.getElementById('burgerBtn');
  var mmenu = document.getElementById('mmenu');
  if (burger && mmenu) {
    burger.addEventListener('click', function () {
      var open = mmenu.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
    mmenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mmenu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------------------------------------------------------------------
  // Services dropdown
  // ---------------------------------------------------------------------
  function closeDropdowns() {
    document.querySelectorAll('.nav-dropdown.open').forEach(function (d) {
      d.classList.remove('open');
      var b = d.querySelector('.nav-dropdown-btn');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  }
  document.querySelectorAll('.nav-dropdown').forEach(function (dd) {
    var btn = dd.querySelector('.nav-dropdown-btn');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var wasOpen = dd.classList.contains('open');
      closeDropdowns();
      if (!wasOpen) {
        dd.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
    // Hover on pointer devices, as the plan specifies
    dd.addEventListener('mouseenter', function () {
      if (window.matchMedia('(hover:hover) and (min-width:1080px)').matches) {
        closeDropdowns();
        dd.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
    dd.addEventListener('mouseleave', function () {
      if (window.matchMedia('(hover:hover) and (min-width:1080px)').matches) closeDropdowns();
    });
  });
  document.addEventListener('click', closeDropdowns);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDropdowns();
  });

  // ---------------------------------------------------------------------
  // Pricing tabs
  // ---------------------------------------------------------------------
  document.querySelectorAll('.tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var panelId = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.price-panel').forEach(function (p) {
        p.classList.remove('active');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      var panel = document.getElementById(panelId);
      if (panel) panel.classList.add('active');
    });
  });

  // ---------------------------------------------------------------------
  // Before / after comparison slider
  // ---------------------------------------------------------------------
  (function () {
    var slider = document.getElementById('compareSlider');
    var beforeLayer = document.getElementById('beforeLayer');
    var handle = document.getElementById('compareHandle');
    var handleBtn = document.getElementById('compareHandleBtn');
    if (!slider || !beforeLayer || !handle || !handleBtn) return;

    function setPct(pct) {
      pct = Math.min(100, Math.max(0, pct));
      beforeLayer.style.clipPath = 'inset(0 ' + (100 - pct) + '% 0 0)';
      handle.style.left = pct + '%';
      handleBtn.setAttribute('aria-valuenow', Math.round(pct));
    }
    function pctFromX(clientX) {
      var r = slider.getBoundingClientRect();
      return ((clientX - r.left) / r.width) * 100;
    }

    var dragging = false;
    function onMove(e) { if (dragging) setPct(pctFromX(e.clientX)); }
    function stop() {
      dragging = false;
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', stop);
    }
    slider.addEventListener('pointerdown', function (e) {
      dragging = true;
      setPct(pctFromX(e.clientX));
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', stop);
      e.preventDefault();
    });
    handleBtn.addEventListener('keydown', function (e) {
      var cur = parseFloat(handleBtn.getAttribute('aria-valuenow')) || 50;
      if (e.key === 'ArrowLeft') { setPct(cur - 5); e.preventDefault(); }
      if (e.key === 'ArrowRight') { setPct(cur + 5); e.preventDefault(); }
      if (e.key === 'Home') { setPct(0); e.preventDefault(); }
      if (e.key === 'End') { setPct(100); e.preventDefault(); }
    });
    setPct(50);
  })();

  // ---------------------------------------------------------------------
  // Review carousel — scroll-snap, built to take more cards without changes
  // ---------------------------------------------------------------------
  document.querySelectorAll('[data-carousel]').forEach(function (carousel) {
    var track = carousel.querySelector('[data-carousel-track]');
    var prev = carousel.querySelector('[data-carousel-prev]');
    var next = carousel.querySelector('[data-carousel-next]');
    var dotsWrap = carousel.querySelector('[data-carousel-dots]');
    if (!track) return;
    var slides = Array.prototype.slice.call(track.children);
    if (!slides.length) return;

    function perView() {
      var trackW = track.clientWidth;
      var slideW = slides[0].getBoundingClientRect().width;
      return Math.max(1, Math.round(trackW / (slideW + 20)));
    }
    function pageCount() { return Math.max(1, slides.length - perView() + 1); }
    function currentIndex() {
      var slideW = slides[0].getBoundingClientRect().width + 20;
      return Math.round(track.scrollLeft / slideW);
    }

    if (dotsWrap) {
      for (var i = 0; i < pageCount(); i++) {
        var dot = document.createElement('button');
        dot.className = 'carousel-dot';
        dot.type = 'button';
        dot.setAttribute('aria-label', 'Go to review ' + (i + 1));
        (function (idx) {
          dot.addEventListener('click', function () { goTo(idx); });
        })(i);
        dotsWrap.appendChild(dot);
      }
    }

    function goTo(idx) {
      var slideW = slides[0].getBoundingClientRect().width + 20;
      track.scrollTo({ left: idx * slideW, behavior: 'smooth' });
    }
    function sync() {
      var idx = currentIndex();
      var max = pageCount() - 1;
      // Nothing to page through (e.g. 3 reviews, 3 visible) — hide the controls
      // rather than show a dead arrow pair and a lone dot.
      var controls = carousel.querySelector('.carousel-controls');
      if (controls) controls.hidden = max <= 0;
      if (prev) prev.disabled = idx <= 0;
      if (next) next.disabled = idx >= max;
      if (dotsWrap) {
        Array.prototype.slice.call(dotsWrap.children).forEach(function (d, i) {
          d.setAttribute('aria-current', String(i === idx));
          d.hidden = i > max;
        });
      }
    }
    if (prev) prev.addEventListener('click', function () { goTo(currentIndex() - 1); });
    if (next) next.addEventListener('click', function () { goTo(currentIndex() + 1); });
    track.addEventListener('scroll', function () {
      window.clearTimeout(track._t);
      track._t = window.setTimeout(sync, 90);
    });
    window.addEventListener('resize', sync);
    sync();
  });

  // ---------------------------------------------------------------------
  // Quote form → WhatsApp deep link
  // ---------------------------------------------------------------------
  document.querySelectorAll('.quote-form').forEach(function (form) {
    var status = form.querySelector('[data-form-status]');
    var notes = form.querySelector('#notes');
    var counter = form.querySelector('[data-char-count]');

    if (notes && counter) {
      notes.addEventListener('input', function () {
        counter.textContent = String(notes.value.length);
      });
    }

    function fieldWrap(el) { return el.closest('.field'); }

    function showError(el, message) {
      var wrap = fieldWrap(el);
      if (wrap) wrap.classList.add('has-error');
      var msg = form.querySelector('[data-error-for="' + el.id + '"]');
      if (msg) { msg.textContent = message; msg.hidden = false; }
    }
    function clearError(el) {
      var wrap = fieldWrap(el);
      if (wrap) wrap.classList.remove('has-error');
      var msg = form.querySelector('[data-error-for="' + el.id + '"]');
      if (msg) { msg.textContent = ''; msg.hidden = true; }
    }

    form.querySelectorAll('input, select, textarea').forEach(function (el) {
      el.addEventListener('change', function () { clearError(el); });
    });

    function validate() {
      var firstBad = null;
      form.querySelectorAll('[required]').forEach(function (el) {
        var ok;
        if (el.type === 'checkbox') ok = el.checked;
        else ok = el.value.trim() !== '';
        if (ok && el.type === 'email' && el.value.trim()) {
          ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim());
        }
        if (ok && el.id === 'phone') {
          ok = el.value.replace(/[^0-9]/g, '').length >= 10;
        }
        if (!ok) {
          var label = el.type === 'checkbox'
            ? 'Please tick this to continue.'
            : (el.id === 'phone'
              ? 'Please enter a valid phone number so we can reply.'
              : 'This one\'s needed.');
          showError(el, label);
          if (!firstBad) firstBad = el;
        } else {
          clearError(el);
        }
      });
      // Optional email, but validate the format if something was typed.
      // Clear as well as set, so correcting it removes the error state.
      var email = form.querySelector('#email');
      if (email && !email.hasAttribute('required')) {
        var typed = email.value.trim();
        if (typed && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(typed)) {
          showError(email, 'That email address doesn\'t look right.');
          if (!firstBad) firstBad = email;
        } else {
          clearError(email);
        }
      }
      return firstBad;
    }

    function val(id) {
      var el = form.querySelector('#' + id);
      return el ? el.value.trim() : '';
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = validate();
      if (bad) {
        if (status) {
          status.textContent = 'Please fix the highlighted fields and try again.';
          status.hidden = false;
          status.classList.add('is-error');
        }
        bad.focus();
        bad.scrollIntoView({ block: 'center', behavior: 'smooth' });
        return;
      }
      if (status) { status.classList.remove('is-error'); }

      var msg = 'New quote request from the website:\n\n'
        + 'Name: ' + val('name') + '\n'
        + 'Phone: ' + val('phone') + '\n'
        + 'Email: ' + (val('email') || 'Not provided') + '\n'
        + 'Location: ' + val('location') + ' (' + val('postcode') + ')\n'
        + 'Service: ' + val('service') + '\n'
        + 'Garden size: ' + val('gardenSize') + '\n'
        + 'Dogs: ' + val('dogs') + ' | Cats: ' + val('cats') + '\n'
        + 'Frequency: ' + val('frequency') + '\n'
        + 'Access: ' + (val('access') || 'Not provided') + '\n'
        + 'Notes: ' + (val('notes') || 'None') + '\n'
        + 'Heard via: ' + (val('source') || 'Not stated');

      var win = window.open(
        'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg),
        '_blank', 'noopener'
      );
      if (status) {
        status.hidden = false;
        status.textContent = win
          ? 'Opening WhatsApp with your details — just hit send.'
          : 'Your browser blocked the pop-up. Please allow pop-ups, or give us a ring on 07760 541636.';
        if (!win) status.classList.add('is-error');
      }
    });
  });

  // ---------------------------------------------------------------------
  // Scroll reveal
  // ---------------------------------------------------------------------
  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal, .reveal-group').forEach(function (el) {
    revealObs.observe(el);
  });

  // ---------------------------------------------------------------------
  // Scroll progress bar
  // ---------------------------------------------------------------------
  var fill = document.getElementById('scrollFill');
  var ticking = false;
  function updateProgress() {
    var doc = document.documentElement;
    var scrollable = doc.scrollHeight - doc.clientHeight;
    var pct = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
    if (fill) fill.style.width = Math.min(100, Math.max(0, pct)) + '%';
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { window.requestAnimationFrame(updateProgress); ticking = true; }
  });
  updateProgress();
})();
