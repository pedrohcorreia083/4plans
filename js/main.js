/* ============================================
   4PLANS - MAIN JS
============================================ */

// ---- Navbar scroll effect ----
(function () {
  const navbar = document.getElementById('mainNavbar');
  if (!navbar) return;

  function updateNavbar() {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar(); // run on load
})();

// ---- Scroll reveal ----
(function () {
  const elements = document.querySelectorAll(
    '.service-card, .step-card, .check-card, .dark-card, .muted-card, .accent-light-card, .accent-block, .transparency-card, .pain-box, .section-heading'
  );

  elements.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
})();

// ---- Stagger animation for grid children ----
(function () {
  document.querySelectorAll('.row.g-4').forEach(row => {
    row.querySelectorAll('.service-card, .step-card').forEach((card, i) => {
      card.style.transitionDelay = (i * 80) + 'ms';
    });
  });
})();

// ---- Smooth scroll for anchor links ----
document.querySelectorAll('a[href*="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    // Only handle same-page anchors
    if (href.startsWith('#') || href.includes(window.location.pathname + '#')) {
      const id = href.split('#')[1];
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});
