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
  initContactForm();
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
  const links = document.getElementById('navLinks');
  const hamburger = document.getElementById('navHamburger');
  if (!links || !hamburger) return;
  document.addEventListener('click', e => {
    if (e.target.closest('#navHamburger')) {
      links.classList.toggle('open');
      hamburger.classList.toggle('open');
    } else if (!e.target.closest('.nav-inner')) {
      links.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });
}

const FOOTER_HTML = `
<div class="footer-inner container">
  <div class="footer-col footer-brand">
    <a href="index.html" class="nav-logo">
      <span class="logo-vzb">VZB</span>
      <span class="logo-sub">CAPITAL & ADVISORY</span>
    </a>
    <p class="footer-copy" data-i18n="footer_copy">© 2026 VZB Capital & Advisory d.o.o. All rights reserved.</p>
  </div>
  <div class="footer-col">
    <h4 class="footer-heading" data-i18n="footer_links">Quick Links</h4>
    <nav class="footer-nav">
      <a href="about.html" data-i18n="nav_about">About</a>
      <a href="services.html" data-i18n="nav_services">Services</a>
      <a href="projects.html" data-i18n="nav_projects">Projects</a>
      <a href="contact.html" data-i18n="nav_contact">Contact</a>
    </nav>
  </div>
  <div class="footer-col">
    <h4 class="footer-heading" data-i18n="footer_contact_heading">Contact</h4>
    <div class="footer-contact">
      <a href="mailto:vladimirbeslagic@gmail.com">vladimirbeslagic@gmail.com</a>
      <a href="tel:+381112407076">+381 11 240 7076</a>
      <span>Starine Novaka 3, Beograd</span>
    </div>
  </div>
</div>
<div class="footer-bottom">
  <div class="container">
    <span>Belgrade, Serbia · Western Balkans</span>
  </div>
</div>
`;

function injectFooter() {
  const footerEl = document.getElementById('footer');
  if (!footerEl) return;
  footerEl.innerHTML = FOOTER_HTML;
}

const translations = {
  en: {
    // Nav
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_projects: 'Projects',
    nav_team: 'Team',
    nav_contact: 'Contact',

    // Home hero
    hero_label: 'VZB CAPITAL & ADVISORY',
    hero_headline: 'Shaping the Future of Balkan Infrastructure',
    hero_sub: 'Strategic advisory at the intersection of capital, policy, and infrastructure development',
    hero_cta: 'Get in Touch',
    hero_secondary: 'Our Services',

    // Home stats
    stat_projects_num: '15+',
    stat_projects_label: 'Projects',
    stat_countries_num: '6',
    stat_countries_label: 'Countries',
    stat_capital_num: '€500M+',
    stat_capital_label: 'Advised',

    // Home services teaser
    services_teaser_label: 'WHAT WE DO',
    services_teaser_heading: 'Our Core Services',
    services_teaser_sub: 'We provide expert advisory across the full lifecycle of infrastructure projects — from feasibility and financing to execution and delivery.',
    services_teaser_link: 'View All Services →',
    svc1_title: 'Project Financing',
    svc1_desc: 'Structuring and securing financing for major infrastructure initiatives.',
    svc2_title: 'Investor Relations',
    svc2_desc: 'Connecting infrastructure projects with regional and international capital.',
    svc3_title: 'Government Advisory',
    svc3_desc: 'Strategic advisory for public bodies on infrastructure development.',

    // Home CTA banner
    cta_heading: 'Ready to discuss your project?',
    cta_sub: 'Our team is available for confidential consultations.',
    cta_btn: 'Contact Us',

    // About page
    about_label: 'ABOUT US',
    about_heading: 'Built for the Balkans',
    about_tagline: 'A boutique advisory firm with deep regional expertise and a global perspective.',
    about_story_heading: 'Our Story',
    about_story: 'VZB Capital & Advisory was founded in 2021 in Belgrade with a clear mission: to bridge the gap between infrastructure development needs in the Western Balkans and the international capital required to realise them. Operating at the intersection of public policy, private finance, and infrastructure delivery, we bring together the expertise needed to navigate complex projects from conception through to financial close.',
    about_mission_heading: 'Our Mission',
    about_mission: 'To accelerate sustainable infrastructure development across the Western Balkans by providing the highest quality strategic advisory to governments, developers, and investors.',
    about_values_label: 'OUR VALUES',
    about_values_heading: 'Our Values',
    about_why_label: 'WHY VZB',
    val1_title: 'Integrity',
    val1_desc: 'We act with transparency and honesty in every engagement.',
    val2_title: 'Expertise',
    val2_desc: 'Deep technical and financial knowledge across all infrastructure sectors.',
    val3_title: 'Regional Knowledge',
    val3_desc: 'Unmatched understanding of the Western Balkans market and regulatory landscape.',
    val4_title: 'Results-Driven',
    val4_desc: 'We measure success by the outcomes we deliver for our clients.',
    about_why_heading: 'Why VZB?',
    about_why: 'The Western Balkans is one of Europe\'s most dynamic infrastructure markets, with significant EU-backed investment flowing into transport, energy, and urban development. Our team combines hands-on project experience with established relationships across the region\'s public and private sectors — giving our clients a decisive edge.',

    // Services page
    services_label: 'WHAT WE OFFER',
    services_heading: 'Our Services',
    services_sub: 'Comprehensive advisory across the full infrastructure project lifecycle.',
    svc_fin_title: 'Project Financing Advisory',
    svc_fin_desc: 'We structure and secure financing for major infrastructure projects, navigating multilateral lenders, development banks, and private capital markets to achieve optimal funding terms.',
    svc_feas_title: 'Feasibility Studies',
    svc_feas_desc: 'Rigorous technical and financial feasibility analysis that gives investors and governments the confidence to proceed — or the insight to redirect resources wisely.',
    svc_ir_title: 'Investor Relations',
    svc_ir_desc: 'We connect infrastructure projects and developers with the right regional and international investors, leveraging our established network across the Balkans and beyond.',
    svc_ppp_title: 'PPP Structuring',
    svc_ppp_desc: 'End-to-end advisory on public-private partnership design, documentation, and negotiation — balancing public interest with private sector return requirements.',
    svc_gov_title: 'Government Advisory',
    svc_gov_desc: 'Strategic counsel for ministries and public bodies on infrastructure policy, procurement strategy, and project prioritisation aligned with EU integration objectives.',
    svc_dd_title: 'Due Diligence',
    svc_dd_desc: 'Comprehensive commercial, financial, and regulatory due diligence for infrastructure investors, ensuring informed decision-making and risk mitigation.',

    // Projects page
    projects_label: 'OUR WORK',
    projects_heading: 'Selected Projects',
    projects_sub: 'A track record of successful advisory engagements across the Western Balkans.',
    proj1_title: 'Highway Corridor Advisory',
    proj1_country: 'Serbia',
    proj1_year: '2023',
    proj1_sector: 'Transport',
    proj1_desc: 'Financial and strategic advisory for a major highway expansion project connecting Serbia to regional transport networks, including financing structure and investor engagement.',
    proj2_title: 'Energy Infrastructure Feasibility',
    proj2_country: 'Bosnia & Herzegovina',
    proj2_year: '2022',
    proj2_sector: 'Energy',
    proj2_desc: 'Feasibility study and investor identification for a renewable energy transmission infrastructure project, covering technical assessment and financial modelling.',
    proj3_title: 'Urban PPP Structuring',
    proj3_country: 'North Macedonia',
    proj3_year: '2023',
    proj3_sector: 'Urban',
    proj3_desc: 'Structuring of a public-private partnership for urban transport and municipal infrastructure development, including transaction documentation and negotiation support.',
    proj4_title: 'Port Development Advisory',
    proj4_country: 'Montenegro',
    proj4_year: '2024',
    proj4_sector: 'Transport',
    proj4_desc: 'Advisory services for port capacity expansion and logistics infrastructure investment structuring, including multilateral lender liaison and feasibility assessment.',

    // Team page
    team_label: 'OUR PEOPLE',
    team_heading: 'Our Team',
    team_sub: 'Experienced advisors with deep roots in the Western Balkans infrastructure market.',
    team_name: 'Vladimir Beslagic',
    team_title: 'CEO & Founder',
    team_bio: 'Vladimir Beslagic is the founder and CEO of VZB Capital & Advisory. With extensive experience in infrastructure advisory and capital markets across the Western Balkans, he has advised governments, developers, and institutional investors on some of the region\'s most significant infrastructure initiatives. His expertise spans project financing, PPP structuring, and strategic advisory for both public and private sector clients.',
    team_network: 'We collaborate with a network of senior regional experts and specialist advisors to deliver the full depth of expertise each engagement requires.',

    // Contact page
    contact_label: 'GET IN TOUCH',
    contact_heading: 'Contact Us',
    contact_sub: 'We welcome enquiries from governments, investors, and developers with infrastructure projects across the Western Balkans.',
    contact_details_heading: 'Contact Details',
    contact_email_label: 'Email',
    contact_email_value: 'vladimirbeslagic@gmail.com',
    contact_phone_label: 'Phone',
    contact_phone_value: '+381 11 240 7076',
    contact_address_label: 'Address',
    contact_address_value: 'Starine Novaka 3, 11000 Beograd, Serbia',
    contact_form_heading: 'Send a Message',
    form_name: 'Full Name',
    form_email: 'Email Address',
    form_subject: 'Subject',
    form_message: 'Message',
    form_submit: 'Send Message',
    form_success: 'Thank you. We will be in touch shortly.',

    // Footer
    footer_copy: '© 2026 VZB Capital & Advisory d.o.o. All rights reserved.',
    footer_links: 'Quick Links',
    footer_contact_heading: 'Contact',
  },

  sr: {
    // Nav
    nav_home: 'Početna',
    nav_about: 'O Nama',
    nav_services: 'Usluge',
    nav_projects: 'Projekti',
    nav_team: 'Tim',
    nav_contact: 'Kontakt',

    // Home hero
    hero_label: 'VZB CAPITAL & ADVISORY',
    hero_headline: 'Oblikujemo Budućnost Balkanske Infrastrukture',
    hero_sub: 'Strateško savetovanje na preseku kapitala, politike i razvoja infrastrukture',
    hero_cta: 'Kontaktirajte Nas',
    hero_secondary: 'Naše Usluge',

    // Home stats
    stat_projects_num: '15+',
    stat_projects_label: 'Projekata',
    stat_countries_num: '6',
    stat_countries_label: 'Zemalja',
    stat_capital_num: '€500M+',
    stat_capital_label: 'Savetovano',

    // Home services teaser
    services_teaser_label: 'ŠTA RADIMO',
    services_teaser_heading: 'Naše Ključne Usluge',
    services_teaser_sub: 'Pružamo stručno savetovanje kroz ceo životni ciklus infrastrukturnih projekata — od izvodljivosti i finansiranja do izvršenja i isporuke.',
    services_teaser_link: 'Sve Usluge →',
    svc1_title: 'Finansiranje Projekata',
    svc1_desc: 'Strukturiranje i obezbeđivanje finansiranja za važne infrastrukturne inicijative.',
    svc2_title: 'Odnosi sa Investitorima',
    svc2_desc: 'Povezivanje infrastrukturnih projekata sa regionalnim i međunarodnim kapitalom.',
    svc3_title: 'Savetovanje Vlade',
    svc3_desc: 'Strateško savetovanje javnih organa o razvoju infrastrukture.',

    // Home CTA banner
    cta_heading: 'Spremni da razgovaramo o vašem projektu?',
    cta_sub: 'Naš tim je dostupan za poverljive konsultacije.',
    cta_btn: 'Kontaktirajte Nas',

    // About page
    about_label: 'O NAMA',
    about_heading: 'Izgrađeno za Balkan',
    about_tagline: 'Boutique savetodavna firma sa dubokim regionalnim znanjem i globalnom perspektivom.',
    about_story_heading: 'Naša Priča',
    about_story: 'VZB Capital & Advisory je osnovana 2021. godine u Beogradu sa jasnom misijom: premostiti jaz između potreba za razvojem infrastrukture na Zapadnom Balkanu i međunarodnog kapitala potrebnog za njihovu realizaciju. Delujući na preseku javne politike, privatnih finansija i isporuke infrastrukture, okupljamo stručnost potrebnu za navigaciju kroz složene projekte od koncepcije do finansijskog zatvaranja.',
    about_mission_heading: 'Naša Misija',
    about_mission: 'Ubrzati održivi razvoj infrastrukture na Zapadnom Balkanu pružanjem savetodavnih usluga najvišeg kvaliteta vladama, programerima i investitorima.',
    about_values_label: 'NAŠE VREDNOSTI',
    about_values_heading: 'Naše Vrednosti',
    about_why_label: 'ZAŠTO VZB',
    val1_title: 'Integritet',
    val1_desc: 'Delujemo transparentno i pošteno u svakom angažovanju.',
    val2_title: 'Stručnost',
    val2_desc: 'Duboko tehničko i finansijsko znanje u svim infrastrukturnim sektorima.',
    val3_title: 'Regionalno Znanje',
    val3_desc: 'Nenadmašno razumevanje tržišta i regulatornog okruženja Zapadnog Balkana.',
    val4_title: 'Orijentisanost na Rezultate',
    val4_desc: 'Merimo uspeh ishodima koje isporučujemo našim klijentima.',
    about_why_heading: 'Zašto VZB?',
    about_why: 'Zapadni Balkan je jedno od najdinamičnijih infrastrukturnih tržišta u Evropi, sa značajnim investicijama podržanim od EU u transport, energetiku i urbani razvoj. Naš tim kombinuje praktično projektno iskustvo sa uspostavljenim vezama u javnom i privatnom sektoru regiona — dajući našim klijentima odlučujuću prednost.',

    // Services page
    services_label: 'ŠTA NUDIMO',
    services_heading: 'Naše Usluge',
    services_sub: 'Sveobuhvatno savetovanje kroz ceo životni ciklus infrastrukturnog projekta.',
    svc_fin_title: 'Savetovanje o Finansiranju Projekata',
    svc_fin_desc: 'Strukturiramo i obezbeđujemo finansiranje za važne infrastrukturne projekte, navigirajući kroz multilateralne zajmodavce, razvojne banke i tržišta privatnog kapitala.',
    svc_feas_title: 'Studije Izvodljivosti',
    svc_feas_desc: 'Rigorozna tehnička i finansijska analiza izvodljivosti koja investitorima i vladama daje poverenje za napredovanje — ili uvid za pametno preusmeravanje resursa.',
    svc_ir_title: 'Odnosi sa Investitorima',
    svc_ir_desc: 'Povezujemo infrastrukturne projekte i programere sa pravim regionalnim i međunarodnim investitorima, koristeći našu uspostavljenu mrežu.',
    svc_ppp_title: 'Strukturiranje JPP',
    svc_ppp_desc: 'Sveobuhvatno savetovanje o dizajnu, dokumentaciji i pregovorima javno-privatnog partnerstva — balansiranje javnog interesa sa zahtevima privatnog sektora.',
    svc_gov_title: 'Savetovanje Vlade',
    svc_gov_desc: 'Strateški savet za ministarstva i javne organe o infrastrukturnoj politici, strategiji nabavke i prioritizaciji projekata usklađenoj sa ciljevima EU integracije.',
    svc_dd_title: 'Due Diligence',
    svc_dd_desc: 'Sveobuhvatan komercijalni, finansijski i regulatorni due diligence za infrastrukturne investitore, obezbeđujući informisano donošenje odluka i smanjenje rizika.',

    // Projects page
    projects_label: 'NAŠ RAD',
    projects_heading: 'Odabrani Projekti',
    projects_sub: 'Istorija uspešnih savetodavnih angažmana na Zapadnom Balkanu.',
    proj1_title: 'Savetovanje za Autoputski Koridor',
    proj1_country: 'Srbija',
    proj1_year: '2023',
    proj1_sector: 'Transport',
    proj1_desc: 'Finansijsko i strateško savetovanje za projekat proširenja autoputa koji Srbiju povezuje sa regionalnim transportnim mrežama, uključujući strukturu finansiranja i angažovanje investitora.',
    proj2_title: 'Izvodljivost Energetske Infrastrukture',
    proj2_country: 'Bosna i Hercegovina',
    proj2_year: '2022',
    proj2_sector: 'Energetika',
    proj2_desc: 'Studija izvodljivosti i identifikacija investitora za projekat infrastrukture prenosa obnovljive energije, obuhvatajući tehničku procenu i finansijsko modelovanje.',
    proj3_title: 'Strukturiranje Urbanog JPP',
    proj3_country: 'Severna Makedonija',
    proj3_year: '2023',
    proj3_sector: 'Urban',
    proj3_desc: 'Strukturiranje javno-privatnog partnerstva za urbani transport i razvoj komunalne infrastrukture, uključujući dokumentaciju transakcije i podršku pregovorima.',
    proj4_title: 'Savetovanje za Razvoj Luke',
    proj4_country: 'Crna Gora',
    proj4_year: '2024',
    proj4_sector: 'Transport',
    proj4_desc: 'Savetodavne usluge za proširenje kapaciteta luke i strukturiranje investicija u logističku infrastrukturu, uključujući vezu sa multilateralnim zajmodavcima i procenu izvodljivosti.',

    // Team page
    team_label: 'NAŠI LJUDI',
    team_heading: 'Naš Tim',
    team_sub: 'Iskusni savetnici sa dubokim korenima na tržištu infrastrukture Zapadnog Balkana.',
    team_name: 'Vladimir Beslagić',
    team_title: 'Izvršni Direktor i Osnivač',
    team_bio: 'Vladimir Beslagić je osnivač i izvršni direktor VZB Capital & Advisory. Sa bogatim iskustvom u infrastrukturnom savetovanju i tržištima kapitala na Zapadnom Balkanu, savetovao je vlade, programere i institucionalne investitore u nekim od najznačajnijih infrastrukturnih inicijativa regiona. Njegova stručnost obuhvata finansiranje projekata, strukturiranje JPP i strateško savetovanje za klijente iz javnog i privatnog sektora.',
    team_network: 'Sarađujemo sa mrežom iskusnih regionalnih stručnjaka i specijalizovanih savetnika kako bismo isporučili punu dubinu stručnosti koju svaki angažman zahteva.',

    // Contact page
    contact_label: 'STUPITE U KONTAKT',
    contact_heading: 'Kontaktirajte Nas',
    contact_sub: 'Dobrodošli su upiti vlada, investitora i programera sa infrastrukturnim projektima na Zapadnom Balkanu.',
    contact_details_heading: 'Kontakt Podaci',
    contact_email_label: 'Email',
    contact_email_value: 'vladimirbeslagic@gmail.com',
    contact_phone_label: 'Telefon',
    contact_phone_value: '+381 11 240 7076',
    contact_address_label: 'Adresa',
    contact_address_value: 'Starine Novaka 3, 11000 Beograd, Srbija',
    contact_form_heading: 'Pošaljite Poruku',
    form_name: 'Ime i Prezime',
    form_email: 'Email Adresa',
    form_subject: 'Predmet',
    form_message: 'Poruka',
    form_submit: 'Pošalji Poruku',
    form_success: 'Hvala. Uskoro ćemo vas kontaktirati.',

    // Footer
    footer_copy: '© 2026 VZB Capital & Advisory d.o.o. Sva prava zadržana.',
    footer_links: 'Brze Veze',
    footer_contact_heading: 'Kontakt',
  }
};

function initI18n() {
  const lang = localStorage.getItem('vzb-lang') || 'en';
  applyTranslations(lang);
  document.addEventListener('click', e => {
    const btn = e.target.closest('.lang-btn');
    if (!btn) return;
    const newLang = btn.dataset.lang;
    localStorage.setItem('vzb-lang', newLang);
    applyTranslations(newLang);
  });
}


function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const success = document.getElementById('formSuccess');
    btn.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        form.reset();
        if (success) success.style.display = 'block';
      } else {
        btn.disabled = false;
      }
    } catch {
      btn.disabled = false;
    }
  });
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
}
