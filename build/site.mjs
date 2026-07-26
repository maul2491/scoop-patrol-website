// Shared site configuration, icons and layout chrome.
// Everything that appears on more than one page lives here so there is one
// place to change it. `node build.mjs` regenerates the static HTML.

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

// PLACEHOLDERS, every value below marked TODO must be replaced before launch.
// Grep the built site for "REPLACE_" and "[" to find anything outstanding.
export const SITE = {
  name: 'Scoop Patrol Aberdare',
  shortName: 'Scoop Patrol',
  tagline: 'We handle the poo, so you don\'t have to.',

  // TODO: swap for the live custom domain, then re-run `node build.mjs`.
  origin: 'https://REPLACE_DOMAIN',

  phoneDisplay: '07760 541636',
  phoneIntl: '+447760541636',
  whatsappNumber: '447760541636',

  // TODO: real business email. Until it exists, links fall back to phone and
  // the legal pages show the [EMAIL ADDRESS] token so it is easy to find.
  email: null,

  nrwNumber: 'CBDU034485',
  hours: '8am–8pm, Monday to Sunday',

  // TODO: real profile URLs, then uncomment in schema `sameAs`.
  facebook: null,
  googleBusinessProfile: null,

  legalUpdated: '26 July 2026',
};

export const WA_TEXT = 'Hi%20Scoop%20Patrol%2C%20I\'d%20like%20a%20quote%20for...';
export const WA_LINK = `https://wa.me/${SITE.whatsappNumber}?text=${WA_TEXT}`;
export const TEL_LINK = `tel:${SITE.phoneIntl}`;

export const AREAS = [
  'Aberaman', 'Abercynon', 'Aberdare', 'Cwmaman', 'Cwmbach', 'Cwmdare',
  'Ferndale', 'Llwydcoed', 'Maerdy', 'Mountain Ash', 'Pontypridd', 'Trecynon',
];

export const POSTCODE_DISTRICTS = ['CF37', 'CF43', 'CF44', 'CF45'];

// NRW registration wording (plan §5.4)
export const NRW_SHORT = 'NRW registered waste carrier';
export const NRW_FULL = `Registered upper tier waste carrier with Natural Resources Wales. Registration number <strong>${SITE.nrwNumber}</strong>. You're welcome to verify this on the NRW public register.`;
export const NRW_MEANS = 'This means your pet waste is collected, transported and disposed of legally, not fly-tipped, and not quietly put into household waste.';

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

export const icons = {
  // ic-wa: the WhatsApp glyph fills its whole viewBox, unlike the other icons
  // (~78%), so it needs sizing down to look the same weight in a circle badge.
  whatsapp: `<svg class="ic ic-wa" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`,

  phone: `<svg class="ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1z"/></svg>`,

  // Combined cat + dog, replaces the single paw on pet-safe messaging (plan §6.2/§6.6)
  catdog: `<svg class="ic ic-catdog" viewBox="0 0 38 22" aria-hidden="true"><g fill="currentColor"><path d="M5.6 3.8c1.6-.6 3 .6 3.5 2.3.9-.3 1.9-.5 2.9-.5s2 .2 2.9.5c.5-1.7 1.9-2.9 3.5-2.3 1.6.6 2 2.9 1.1 4.7-.3.6-.7 1.2-1.1 1.6.3.7.5 1.5.5 2.3 0 3.6-3 5.9-6.9 5.9S5.1 16 5.1 12.4c0-.8.2-1.6.5-2.3-.4-.4-.8-1-1.1-1.6-.9-1.8-.5-4.1 1.1-4.7Z"/><path d="M22.6 3.3c.3-.5 1-.5 1.3 0l2.5 4.1c.9-.3 1.8-.4 2.8-.4s1.9.1 2.8.4l2.5-4.1c.3-.5 1-.5 1.3 0 .5.9.8 2 .8 3.1v3.4c.5.9.8 1.9.8 2.9 0 3.5-3 5.7-6.9 5.7s-6.9-2.2-6.9-5.7c0-1 .3-2 .8-2.9V6.4c0-1.1.3-2.2.8-3.1Z"/></g><g fill="#fff"><circle cx="9.6" cy="11.4" r="1.15"/><circle cx="14.4" cy="11.4" r="1.15"/><ellipse cx="12" cy="14.4" rx="1.5" ry="1.05"/><circle cx="26.8" cy="11.6" r="1.15"/><circle cx="31.6" cy="11.6" r="1.15"/><path d="M29.2 13.6 30.5 15h-2.6l1.3-1.4Z"/></g></svg>`,

  leaf: `<svg class="ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 20c0-8 5-14.5 15-15.5C18 13.5 12.5 19 4 20Z"/><path d="M6.5 17.5C9 13 12 10 16.5 7.3" stroke="rgba(255,255,255,.55)" stroke-width="1.3" fill="none" stroke-linecap="round"/></svg>`,

  shield: `<svg class="ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.2 20 5v6.4c0 4.8-3.3 8.9-8 10.4-4.7-1.5-8-5.6-8-10.4V5l8-2.8Z"/><path d="M8.4 11.9 11 14.5l4.7-4.8" stroke="#fff" stroke-width="1.9" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  badgeCheck: `<svg class="ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 1.8 2.4 1.9 3-.3 1 2.9 2.6 1.6-1 2.9 1 2.9-2.6 1.6-1 2.9-3-.3L12 22.2l-2.4-1.9-3 .3-1-2.9L3 16.1l1-2.9-1-2.9 2.6-1.6 1-2.9 3 .3L12 1.8Z"/><path d="M8.4 12 11 14.6l4.7-4.8" stroke="#fff" stroke-width="1.9" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  unlock: `<svg class="ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="4" y="10.5" width="12.5" height="10.5" rx="2.2"/><path d="M9 10.5V7.2a4.6 4.6 0 0 1 9.2 0V9" stroke="currentColor" stroke-width="2.1" fill="none" stroke-linecap="round"/><circle cx="10.25" cy="15.7" r="1.5" fill="#fff"/></svg>`,

  clock: `<svg class="ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="9.4"/><path d="M12 6.6V12l3.6 2.2" stroke="#fff" stroke-width="1.9" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  weather: `<svg class="ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="7.8" cy="7.6" r="3.4"/><path d="M7.8 1.4v1.6M7.8 12.2v1.6M2 7.6H.4M15.2 7.6h-1.6M3.7 3.5 2.6 2.4M13 2.4l-1.1 1.1M3.7 11.7l-1.1 1.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M9.6 20.4a4 4 0 0 1 .5-8 5.6 5.6 0 0 1 10.7 1.6 3.2 3.2 0 0 1-.6 6.4H9.6Z"/></svg>`,

  pin: `<svg class="ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.1c-4 0-7.2 3.2-7.2 7.2 0 5.2 6.4 12 6.7 12.3.3.3.7.3 1 0 .3-.3 6.7-7.1 6.7-12.3 0-4-3.2-7.2-7.2-7.2Z"/><circle cx="12" cy="9.3" r="2.7" fill="#fff"/></svg>`,

  check: `<svg class="check-ic" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M6 10.2l2.5 2.5L14 7" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  star: `<svg class="star" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="m10 1.6 2.5 5.4 5.9.7-4.4 4 1.2 5.8L10 14.6 4.8 17.5 6 11.7l-4.4-4 5.9-.7L10 1.6Z"/></svg>`,

  google: `<svg class="platform-ic" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.4a5.5 5.5 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.6-5.2 3.6-8.8Z"/><path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3a7.2 7.2 0 0 1-10.7-3.8H1.4v3.1A12 12 0 0 0 12 24Z"/><path fill="#FBBC05" d="M5.3 14.3a7.1 7.1 0 0 1 0-4.6V6.6H1.4a12 12 0 0 0 0 10.8l3.9-3.1Z"/><path fill="#EA4335" d="M12 4.8c1.8 0 3.4.6 4.6 1.8l3.5-3.5A12 12 0 0 0 1.4 6.6l3.9 3.1A7.2 7.2 0 0 1 12 4.8Z"/></svg>`,

  facebook: `<svg class="platform-ic" viewBox="0 0 24 24" aria-hidden="true"><path fill="#1877F2" d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.24 2.7.24v2.9h-1.5c-1.5 0-2 .93-2 1.9V12h3.3l-.53 3.5h-2.8v8.4A12 12 0 0 0 24 12Z"/></svg>`,
};

// ---------------------------------------------------------------------------
// Navigation model
// ---------------------------------------------------------------------------

// "Patios, Decking & Artificial Grass" is deliberately not a nav item. It reads
// like a separate service when it is included in every clean, so it lives as a
// section of the garden cleans page instead.
export const SERVICES_NAV = [
  { label: 'Pricing', href: '/services/pricing' },
  { label: 'Pet Waste Garden Cleans', href: '/services/garden-cleans' },
  { label: 'Pet Waste Collection', href: '/services/pet-waste-collection' },
  { label: 'Cat Litter Add-on', href: '/services/pet-waste-collection#cat-litter' },
];

// ---------------------------------------------------------------------------
// Chrome
// ---------------------------------------------------------------------------

function header(nav) {
  const isServices = nav === 'services';
  const sub = SERVICES_NAV.map(s => `<a href="${s.href}">${s.label}</a>`).join('\n            ');
  const subMobile = SERVICES_NAV
    .map(s => `<a class="mm-sub" href="${s.href}">${s.label}</a>`).join('\n    ');
  const on = k => (nav === k ? ' class="is-current" aria-current="page"' : '');

  return `<header>
  <div class="wrap nav-row">
    <a class="brand" href="/">
      <img src="/assets/logo.jpg" alt="Scoop Patrol Aberdare logo" width="46" height="46">
      <span class="brand-text">Scoop Patrol<span>Aberdare</span></span>
    </a>
    <nav aria-label="Primary">
      <ul>
        <li><a href="/"${on('home')}>Home</a></li>
        <li class="nav-dropdown">
          <button class="nav-dropdown-btn${isServices ? ' is-current' : ''}" aria-haspopup="true" aria-expanded="false">Services <span class="nav-dropdown-caret" aria-hidden="true">▾</span></button>
          <div class="nav-dropdown-menu">
            ${sub}
          </div>
        </li>
        <li><a href="/commercial"${on('commercial')}>Commercial Services</a></li>
        <li><a href="/about"${on('about')}>About</a></li>
        <li><a href="/faq"${on('faq')}>FAQ</a></li>
        <li><a href="/contact"${on('contact')}>Contact</a></li>
      </ul>
    </nav>
    <div class="nav-actions">
      <a href="${WA_LINK}" class="btn btn-green nav-cta" data-analytics="whatsapp-header">${icons.whatsapp} Message us</a>
      <button class="burger" id="burgerBtn" aria-label="Menu" aria-expanded="false" aria-controls="mmenu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
  <div class="wrap mobile-menu" id="mmenu">
    <a href="/">Home</a>
    <div class="mm-subhead">Services</div>
    ${subMobile}
    <a href="/commercial">Commercial Services</a>
    <a href="/about">About</a>
    <a href="/faq">FAQ</a>
    <a href="/contact">Contact</a>
    <a href="${WA_LINK}" data-analytics="whatsapp-mobile-menu">Message us on WhatsApp</a>
  </div>
</header>`;
}

function footer() {
  const areaList = AREAS.join(', ');
  return `<footer>
  <div class="wrap">
    <div class="foot-grid">
      <div>
        <div class="foot-brand">
          <img src="/assets/logo.jpg" alt="Scoop Patrol Aberdare logo" width="40" height="40">
          <span>Scoop Patrol Aberdare</span>
        </div>
        <p>Pet waste garden clean-ups and collections across Rhondda Cynon Taf. We handle the poo, so you don't have to.</p>
        <p class="foot-nrw">${NRW_FULL}</p>
      </div>
      <div>
        <h4>Services</h4>
        <ul>
          <li><a href="/services/pricing">Pricing</a></li>
          <li><a href="/services/garden-cleans">Pet Waste Garden Cleans</a></li>
          <li><a href="/services/pet-waste-collection">Pet Waste Collection</a></li>
          <li class="foot-sub"><a href="/services/pet-waste-collection#cat-litter">Cat Litter Add-on</a></li>
          <li><a href="/commercial">Commercial Services</a></li>
        </ul>
      </div>
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms">Terms &amp; Conditions</a></li>
          <li><a href="/cookie-policy">Cookie Policy</a></li>
        </ul>
      </div>
      <div>
        <h4>Get in touch</h4>
        <ul class="foot-contact">
          <li><span class="foot-ic foot-ic-wa">${icons.whatsapp}</span><a href="${WA_LINK}" data-analytics="whatsapp-footer">WhatsApp: ${SITE.phoneDisplay}</a></li>
          <li><span class="foot-ic">${icons.phone}</span><a href="${TEL_LINK}">${SITE.phoneDisplay}</a></li>
          <li><span class="foot-ic">${icons.pin}</span><span>Serving Rhondda Cynon Taf, ${areaList}</span></li>
          <li><span class="foot-ic">${icons.clock}</span><span>${SITE.hours}</span></li>
        </ul>
      </div>
    </div>
    <div class="bottom-line">© 2026 Scoop Patrol Aberdare. All rights reserved.</div>
  </div>
</footer>`;
}

// Closing CTA band, every page ends with this (plan §7)
export function ctaBand({
  heading = 'Ready for a fresh garden?',
  body = 'Message us your postcode, garden size and number of pets, we\'ll come back with a fair price the same day.',
  eyebrow = 'Free quote',
} = {}) {
  return `<section class="pad" id="contact-cta">
  <div class="cta-band">
    <span class="eyebrow">${eyebrow}</span>
    <h2>${heading}</h2>
    <p>${body}</p>
    <div class="cta-actions">
      <a href="${WA_LINK}" class="btn btn-green" data-analytics="whatsapp-cta">${icons.whatsapp} Message us on WhatsApp</a>
      <a href="/contact" class="btn btn-cream">Get a quote</a>
    </div>
    <div class="cta-trustline">
      <span>${NRW_SHORT}</span>
      <span>Fully insured</span>
      <span>DBS checked</span>
      <span>No contracts</span>
    </div>
  </div>
</section>`;
}

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------

export function localBusinessSchema() {
  const sameAs = [SITE.facebook, SITE.googleBusinessProfile].filter(Boolean);
  const out = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.origin}/#business`,
    name: SITE.name,
    alternateName: SITE.shortName,
    description: 'Pet waste garden clean-ups and collections across Rhondda Cynon Taf. NRW registered waste carrier, fully insured, DBS checked. Waste always taken away.',
    slogan: SITE.tagline,
    url: `${SITE.origin}/`,
    telephone: SITE.phoneIntl,
    priceRange: '££',
    image: `${SITE.origin}/assets/logo.jpg`,
    logo: `${SITE.origin}/assets/logo.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Aberdare',
      addressRegion: 'Rhondda Cynon Taf',
      addressCountry: 'GB',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Rhondda Cynon Taf' },
      ...AREAS.map(name => ({ '@type': 'City', name })),
    ],
    serviceArea: { '@type': 'GeoShape', postalCode: POSTCODE_DISTRICTS },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '20:00',
    },
  };
  if (sameAs.length) out.sameAs = sameAs;
  return out;
}

export function breadcrumbSchema(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE.origin}${c.href}`,
    })),
  };
}

export function serviceSchema({ serviceType, offers }) {
  const out = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    provider: { '@id': `${SITE.origin}/#business` },
    areaServed: { '@type': 'AdministrativeArea', name: 'Rhondda Cynon Taf' },
  };
  if (offers) out.offers = offers;
  return out;
}

// Visible breadcrumb trail, matching the schema. `trail` includes the current
// page as its last entry; that entry renders unlinked.
function breadcrumbHtml(trail) {
  const parts = trail.map((c, i) =>
    i === trail.length - 1
      ? `<span aria-current="page">${c.name}</span>`
      : `<a href="${c.href}">${c.name}</a>`);
  return `<nav class="breadcrumb" aria-label="Breadcrumb">${parts.join('<span class="sep" aria-hidden="true">›</span>')}</nav>`;
}

// Dark banner at the top of every inner page.
export function pageHero({ trail, kicker, h1, lead, wide = false }) {
  return `<section class="page-hero">
  <div class="wrap${wide ? '' : ' wrap-narrow'}">
    ${trail ? breadcrumbHtml(trail) : ''}
    ${kicker ? `<span class="kicker-light">${kicker}</span>` : ''}
    <h1>${h1}</h1>
    ${lead ? `<p class="lead">${lead}</p>` : ''}
  </div>
</section>`;
}

// ---------------------------------------------------------------------------
// Page shell
// ---------------------------------------------------------------------------

export function page({
  slug,           // '' for home, otherwise 'services/pricing'
  title,
  description,
  nav,            // key for current-nav highlighting
  body,
  schema = [],
  trail = null,   // full breadcrumb trail INCLUDING the current page, or null on home
  ogImage = '/assets/og-share-card.jpg',
}) {
  const url = `${SITE.origin}/${slug}${slug ? '/' : ''}`;
  const blocks = [localBusinessSchema(), ...schema];
  if (trail) blocks.push(breadcrumbSchema(trail));

  const schemaHtml = blocks
    .map(b => `<script type="application/ld+json">\n${JSON.stringify(b, null, 2)}\n</script>`)
    .join('\n');

  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${url}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE.origin}${ogImage}">
<meta property="og:locale" content="en_GB">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/jpeg" href="/assets/logo.jpg">
<link rel="apple-touch-icon" href="/assets/logo.jpg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/styles.css">
${schemaHtml}
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
<div class="scroll-progress" aria-hidden="true"><div class="scroll-progress-fill" id="scrollFill"><span class="scroll-progress-paw">🐾</span></div></div>

${header(nav)}

<main id="main">
${body}
</main>

${footer()}

<script src="/assets/site.js"></script>
</body>
</html>
`;
}
