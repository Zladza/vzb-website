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
      <a href="mailto:vbeslagic@vzbcapital.com">vbeslagic@vzbcapital.com</a>
      <a href="tel:+381112407076">+381 11 240 7076</a>
      <span data-i18n="footer_address">Starine Novaka 3, Beograd</span>
    </div>
  </div>
</div>
<div class="footer-bottom">
  <div class="container">
    <span data-i18n="footer_bottom">Belgrade, Serbia · Western Balkans</span>
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
    svc1_title: 'Feasibility Studies',
    svc1_desc: 'Technical and financial feasibility analysis for infrastructure projects across transport, energy, and municipal sectors.',
    svc2_title: 'Concession & PPP Design',
    svc2_desc: 'Full-cycle advisory on public-private partnership and concession structuring, documentation, and negotiation.',
    svc3_title: 'Regulatory Advisory',
    svc3_desc: 'Expert counsel on infrastructure regulation, EU accession alignment, and public procurement for governments and agencies.',

    // Home CTA banner
    cta_heading: 'Ready to discuss your project?',
    cta_sub: 'Our team is available for confidential consultations.',
    cta_btn: 'Contact Us',

    // About page
    about_label: 'ABOUT US',
    about_heading: 'Built for the Balkans',
    about_tagline: 'A boutique advisory firm with deep regional expertise and a global perspective.',
    about_story_heading: 'Our Story',
    about_story: 'VZB Consulting was founded in Belgrade with a clear mission: to provide rigorous, regionally grounded advisory to governments, multilateral agencies, and infrastructure developers across the Western Balkans. Operating at the intersection of public policy, regulatory reform, and infrastructure investment, the firm serves as a trusted advisory partner across the full project lifecycle — from feasibility and procurement through to concession design and capacity building. Our client base includes government ministries, PMUs of programmes funded by the World Bank, EBRD, EIB, GIZ, USAID, and the Western Balkans Investment Framework.',
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
    svc_fin_title: 'Infrastructure Feasibility Studies',
    svc_fin_desc: 'Rigorous technical and financial feasibility analysis covering transport, energy, water, and municipal infrastructure — providing governments and donors with the analytical foundation to make sound investment decisions.',
    svc_feas_title: 'Regulatory & Policy Advisory',
    svc_feas_desc: 'Expert counsel on infrastructure regulatory frameworks, EU accession chapter alignment, energy sector reform, and municipal governance — supporting clients across Serbia and the Western Balkans.',
    svc_ir_title: 'Public Procurement Support',
    svc_ir_desc: 'End-to-end advisory on public procurement strategy and documentation under PRAG, World Bank SPN, and EBRD procurement procedures — ensuring compliant and competitive tender processes.',
    svc_ppp_title: 'Concession & PPP Framework Design',
    svc_ppp_desc: 'Full-cycle advisory on public-private partnership and concession structuring — from framework design and transaction documentation through to negotiation and financial close.',
    svc_gov_title: 'Project Financing Advisory',
    svc_gov_desc: 'Navigating multilateral lenders and development finance institutions — EBRD, EIB, World Bank, KfW, WBIF — to structure and secure optimal financing for major infrastructure initiatives.',
    svc_dd_title: 'Capacity Building',
    svc_dd_desc: 'Structured capacity-building programmes for government ministries, public agencies, and PMUs — strengthening institutional capacity for project preparation, procurement management, and EU-funded programme delivery.',

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
    team_title: 'Founder & Managing Director',
    team_bio: 'Vladimir Beslagić is the Founder and Managing Director of VZB Consulting d.o.o. Prior to founding VZB, he served as Partner for Financial Advisory Services at Deloitte, leading the Infrastructure and Capital Projects practice across Serbia, Montenegro, North Macedonia, and the Republic of Srpska. With over twenty years of experience in financial advisory, he has directed engagements spanning PPP advisory, project finance, privatisation, and restructuring across telecommunications, utilities, infrastructure, and financial services. Since 2008, his focus has been on infrastructure and capital projects — advising governments on PPP frameworks, concession design, and public investment programmes funded by the World Bank, EBRD, EIB, GIZ, USAID, and WBIF.',
    career_heading: 'Career',
    career1_period: '2021 — Present',
    career1_role: 'Founder & Managing Director',
    career1_company: 'VZB Consulting d.o.o.',
    career1_location: 'Belgrade, Serbia',
    career2_period: '2011 — 2021',
    career2_role: 'Partner, Financial Advisory Services · Head of Infrastructure & Capital Projects',
    career2_company: 'Deloitte',
    career2_location: 'Serbia, Montenegro, North Macedonia, Republic of Srpska',
    team_network: 'We collaborate with a network of senior regional experts and specialist advisors to deliver the full depth of expertise each engagement requires.',

    // Contact page
    contact_label: 'GET IN TOUCH',
    contact_heading: 'Contact Us',
    contact_sub: 'We welcome enquiries from governments, investors, and developers with infrastructure projects across the Western Balkans.',
    contact_details_heading: 'Contact Details',
    contact_email_label: 'Email',
    contact_email_value: 'vbeslagic@vzbcapital.com',
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
    footer_address: 'Starine Novaka 3, Beograd',
    footer_bottom: 'Belgrade, Serbia · Western Balkans',
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
    svc1_title: 'Studije Izvodljivosti',
    svc1_desc: 'Tehnička i finansijska analiza izvodljivosti za infrastrukturne projekte u sektorima transporta, energetike i komunalnih usluga.',
    svc2_title: 'Dizajn Koncesija i JPP',
    svc2_desc: 'Savetovanje kroz ceo ciklus strukturiranja javno-privatnih partnerstava i koncesija, dokumentacije i pregovora.',
    svc3_title: 'Regulatorno Savetovanje',
    svc3_desc: 'Stručno savetovanje o regulativi infrastrukture, usklađivanju sa EU i javnim nabavkama za vlade i agencije.',

    // Home CTA banner
    cta_heading: 'Spremni da razgovaramo o vašem projektu?',
    cta_sub: 'Naš tim je dostupan za poverljive konsultacije.',
    cta_btn: 'Kontaktirajte Nas',

    // About page
    about_label: 'O NAMA',
    about_heading: 'Izgrađeno za Balkan',
    about_tagline: 'Boutique savetodavna firma sa dubokim regionalnim znanjem i globalnom perspektivom.',
    about_story_heading: 'Naša Priča',
    about_story: 'VZB Consulting je osnovan u Beogradu sa jasnom misijom: pružanje rigoriznog, regionalno utemeljenog savetovanju vladama, multilateralnim agencijama i programerima infrastrukture na Zapadnom Balkanu. Delujući na preseku javne politike, regulatorne reforme i infrastrukturnih investicija, firma služi kao pouzdan savetodavni partner kroz ceo životni ciklus projekta — od izvodljivosti i nabavke do dizajna koncesija i izgradnje kapaciteta. Naša klijentska baza uključuje vladina ministarstva, JPO programa finansiranih od strane Svetske banke, EBRD, EIB, GIZ, USAID i Investicionog okvira za Zapadni Balkan.',
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
    svc_fin_title: 'Studije Izvodljivosti Infrastrukture',
    svc_fin_desc: 'Rigorozna tehnička i finansijska analiza izvodljivosti u sektorima transporta, energetike, vodoprivrede i komunalne infrastrukture — pružajući vladama i donatorima analitičku osnovu za donošenje zdravih investicionih odluka.',
    svc_feas_title: 'Regulatorno i Političko Savetovanje',
    svc_feas_desc: 'Stručno savetovanje o regulatornim okvirima infrastrukture, usklađivanju poglavlja za EU integraciju, reformi energetskog sektora i upravljanju opštinama — podrška klijentima u Srbiji i na Zapadnom Balkanu.',
    svc_ir_title: 'Podrška Javnim Nabavkama',
    svc_ir_desc: 'Sveobuhvatno savetovanje o strategiji i dokumentaciji javnih nabavki prema PRAG, SPN Svetske banke i procedurama EBRD nabavki — obezbeđujući usklađene i konkurentne tenderske procese.',
    svc_ppp_title: 'Dizajn Okvira za Koncesije i JPP',
    svc_ppp_desc: 'Savetovanje kroz ceo ciklus strukturiranja javno-privatnih partnerstava i koncesija — od dizajna okvira i dokumentacije transakcije do pregovora i finansijskog zatvaranja.',
    svc_gov_title: 'Savetovanje o Finansiranju Projekata',
    svc_gov_desc: 'Navigacija kroz multilateralne zajmodavce i institucije razvojnog finansiranja — EBRD, EIB, Svetska banka, KfW, WBIF — za strukturiranje i obezbeđivanje optimalnog finansiranja velikih infrastrukturnih inicijativa.',
    svc_dd_title: 'Izgradnja Kapaciteta',
    svc_dd_desc: 'Strukturirani programi izgradnje kapaciteta za vladina ministarstva, javne agencije i JPO — jačanje institucionalnih kapaciteta za pripremu projekata, upravljanje nabavkama i isporuku programa finansiranih od EU.',

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
    team_title: 'Osnivač i Generalni Direktor',
    team_bio: 'Vladimir Beslagić je osnivač i generalni direktor VZB Consulting d.o.o. Pre osnivanja VZB-a, obavljao je funkciju Partnera za usluge finansijskog savetovanja u Deloitteu, vodeći praksu infrastrukture i kapitalnih projekata za Srbiju, Crnu Goru, Severnu Makedoniju i Republiku Srpsku. Sa više od dvadeset godina iskustva u finansijskom savetovanju, vodio je angažmane koji obuhvataju JPP savetovanje, projektno finansiranje, privatizaciju i restrukturiranje u sektorima telekomunikacija, komunalnih usluga, infrastrukture i finansijskih usluga. Od 2008. godine, fokus je na infrastrukturnim i kapitalnim projektima — savetovanje vlada o JPP okvirima, dizajnu koncesija i programima javnih investicija finansiranim od strane Svetske banke, EBRD, EIB, GIZ, USAID i WBIF.',
    career_heading: 'Karijera',
    career1_period: '2021 — Danas',
    career1_role: 'Osnivač i Generalni Direktor',
    career1_company: 'VZB Consulting d.o.o.',
    career1_location: 'Beograd, Srbija',
    career2_period: '2011 — 2021',
    career2_role: 'Partner, Finansijsko savetovanje · Direktor infrastrukture i kapitalnih projekata',
    career2_company: 'Deloitte',
    career2_location: 'Srbija, Crna Gora, Severna Makedonija, Republika Srpska',
    team_network: 'Sarađujemo sa mrežom iskusnih regionalnih stručnjaka i specijalizovanih savetnika kako bismo isporučili punu dubinu stručnosti koju svaki angažman zahteva.',

    // Contact page
    contact_label: 'STUPITE U KONTAKT',
    contact_heading: 'Kontaktirajte Nas',
    contact_sub: 'Dobrodošli su upiti vlada, investitora i programera sa infrastrukturnim projektima na Zapadnom Balkanu.',
    contact_details_heading: 'Kontakt Podaci',
    contact_email_label: 'Email',
    contact_email_value: 'vbeslagic@vzbcapital.com',
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
    footer_address: 'Starine Novaka 3, Beograd',
    footer_bottom: 'Beograd, Srbija · Zapadni Balkan',
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
