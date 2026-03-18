/**
 * GoGoCash Landing Page — Clone
 * Splash, nav, mobile menu, header scroll, smooth scroll
 */

(function () {
  'use strict';

  const splash = document.getElementById('splash');
  const splashEnter = document.querySelector('.splash-enter');
  const SPLASH_DURATION_MS = 3000;
  const SPLASH_STORAGE_KEY = 'gogocash-splash-seen';

  // Splash: hide after delay or on Enter click; then trigger hero entrance
  function hideSplash() {
    if (!splash) return;
    splash.classList.add('is-hidden');
    splash.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('splash-visible');
    try {
      sessionStorage.setItem(SPLASH_STORAGE_KEY, '1');
    } catch (e) {}
    var heroInner = document.querySelector('.hero-inner');
    if (heroInner) {
      requestAnimationFrame(function () {
        heroInner.classList.add('animate-in');
      });
    }
  }

  if (splash) {
    if (splashEnter) {
      splashEnter.addEventListener('click', hideSplash);
    }
    setTimeout(hideSplash, SPLASH_DURATION_MS);
  }

  // Scroll-triggered section animations
  var sections = document.querySelectorAll('.section');
  if (typeof IntersectionObserver !== 'undefined' && sections.length) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { rootMargin: '0px 0px -80px 0px', threshold: 0.1 }
    );
    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  } else {
    sections.forEach(function (section) {
      section.classList.add('in-view');
    });
  }

  const header = document.getElementById('header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const navOverlay = document.querySelector('.nav-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav a');

  // Mobile menu open/close
  function openMenu() {
    mobileNav.classList.add('is-open');
    navOverlay.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close menu');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileNav.classList.remove('is-open');
    navOverlay.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
  }

  if (menuToggle && mobileNav && navOverlay) {
    menuToggle.addEventListener('click', function () {
      if (mobileNav.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    navOverlay.addEventListener('click', closeMenu);

    mobileLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  // Header background on scroll
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Smooth scroll for anchor links (fallback if CSS scroll-behavior not enough)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
