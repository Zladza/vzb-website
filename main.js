const NAV_HTML = `
<div class="nav-inner container">
  <a href="index.html" class="nav-logo">
    <span class="logo-vzb">VZB</span>
    <span class="logo-sub">CAPITAL & ADVISORY</span>
  </a>
  <div class="nav-links" id="navLinks">
    <a href="index.html" class="nav-link" data-i18n="nav_home">Home</a>
    <a href="about.html" class="nav-link" data-i18n="nav_about">About</a>
    <a href="services.html" class="nav-link" data-i18n="nav_services">Services</a>
    <a href="projects.html" class="nav-link" data-i18n="nav_projects">Projects</a>
    <a href="team.html" class="nav-link" data-i18n="nav_team">Team</a>
    <a href="contact.html" class="nav-link" data-i18n="nav_contact">Contact</a>
  </div>
  <div class="nav-right">
    <div class="lang-toggle">
      <button class="lang-btn" data-lang="en">EN</button>
      <span class="lang-sep">|</span>
      <button class="lang-btn" data-lang="sr">SR</button>
    </div>
    <button class="nav-hamburger" id="navHamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
  injectNav();
  injectFooter();
  initI18n();
  initNavScroll();
  initMobileMenu();
});

function injectNav() {
  const navEl = document.getElementById('nav');
  if (!navEl) return;
  navEl.innerHTML = NAV_HTML;
  const currentFile = location.pathname.split('/').pop() || 'index.html';
  navEl.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentFile) link.classList.add('active');
  });
}

function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initMobileMenu() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('#navHamburger');
    const links = document.getElementById('navLinks');
    if (btn && links) {
      links.classList.toggle('open');
      btn.classList.toggle('open');
    } else if (!e.target.closest('.nav-inner') && links) {
      links.classList.remove('open');
      document.getElementById('navHamburger')?.classList.remove('open');
    }
  });
}

function injectFooter() {
  // Defined in Task 4
}

function initI18n() {
  // Defined in Task 3
}
