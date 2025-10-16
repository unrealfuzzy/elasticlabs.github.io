const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('nav-menu');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (menuToggle && navMenu) {
  const syncMenuState = () => {
    if (window.innerWidth > 700) {
      menuToggle.setAttribute('aria-expanded', 'false');
      navMenu.setAttribute('aria-hidden', 'false');
    } else if (menuToggle.getAttribute('aria-expanded') === 'true') {
      navMenu.setAttribute('aria-hidden', 'false');
    } else {
      navMenu.setAttribute('aria-hidden', 'true');
    }
  };

  const toggleMenu = () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.setAttribute('aria-hidden', expanded ? 'true' : 'false');
  };

  menuToggle.addEventListener('click', toggleMenu);
  window.addEventListener('resize', syncMenuState);
  syncMenuState();

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 700) {
        menuToggle.setAttribute('aria-expanded', 'false');
        navMenu.setAttribute('aria-hidden', 'true');
      }
    });
  });
}
