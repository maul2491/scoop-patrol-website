import {
  page, pageHero, ctaBand, serviceSchema, icons, SITE, AREAS,
  NRW_FULL, NRW_MEANS, WA_LINK, TEL_LINK, POSTCODE_DISTRICTS,
} from '../site.mjs';
import { sectionHead, quoteForm, whoWeWorkWith, squiggle } from '../components.mjs';
import { commercial as CC, faq as CF, contact as CCT } from '../content.mjs';

const HOME = { name: 'Home', href: '/' };

// ---------------------------------------------------------------------------
// /commercial
// ---------------------------------------------------------------------------

export const commercial = page({
  slug: 'commercial',
  nav: 'commercial',
  title: 'Commercial Pet Waste Removal, Landlords, Daycares & Kennels | RCT',
  description: 'Commercial pet waste removal and collection across Rhondda Cynon Taf. NRW registered upper tier waste carrier, fully insured, DBS checked. Quotes tailored to your site.',
  trail: [HOME, { name: 'Commercial Services', href: '/commercial' }],
  schema: [serviceSchema({ serviceType: 'Commercial pet waste removal' })],
  body: [
    pageHero({ trail: [HOME, { name: 'Commercial Services', href: '/commercial' }], ...CC.hero }),
    `<section class="pad tight" style="background:var(--paper);">
  <div class="wrap">
    ${sectionHead({ kicker: 'Compliance', h2: 'The paperwork side, handled properly' })}
    <div class="compliance-grid reveal-group">
      <div class="compliance-card">
        <span class="compliance-ic">${icons.leaf}</span>
        <h3>NRW registered</h3>
        <p>Upper tier waste carrier, registration <strong>${SITE.nrwNumber}</strong>, verifiable on the NRW public register.</p>
      </div>
      <div class="compliance-card">
        <span class="compliance-ic">${icons.badgeCheck}</span>
        <h3>Waste Transfer Notes</h3>
        <p>Provided for every collection, so your duty-of-care evidence is complete.</p>
      </div>
      <div class="compliance-card">
        <span class="compliance-ic">${icons.shield}</span>
        <h3>Fully insured</h3>
        <p>Cover in place for work carried out on your premises.</p>
      </div>
      <div class="compliance-card">
        <span class="compliance-ic">${icons.badgeCheck}</span>
        <h3>DBS checked</h3>
        <p>Relevant where we're working around staff, tenants or the public.</p>
      </div>
    </div>
    <div class="callout callout-green" style="margin-top:30px;">
      <p>${CC.compliance.why}</p>
      <p>${NRW_FULL}</p>
    </div>
  </div>
</section>`,
    `<section class="pad tight">
  <div class="wrap">
    ${sectionHead({ kicker: 'Who we work with', h2: 'Sites we look after' })}
    <div class="sector-list reveal-group">
      ${CC.sectors.map(s => `<div class="sector-card">
        <span class="sector-ic" aria-hidden="true">${s.icon}</span>
        <div><h3>${s.heading}</h3><p>${s.body}</p></div>
      </div>`).join('\n      ')}
    </div>
  </div>
</section>`,
    `<section class="pad tight" style="background:var(--paper);">
  <div class="wrap wrap-narrow">
    ${sectionHead({ kicker: 'Artificial surfaces', h2: 'Artificial grass and hard standing' })}
    <div class="prose">
      <p>${CC.surfaces.body1}</p>
      <p>${CC.surfaces.body2}</p>
    </div>
  </div>
</section>`,
    `<section class="pad tight">
  <div class="wrap wrap-narrow">
    ${sectionHead({ kicker: 'Pricing', h2: 'Quoted around your site' })}
    <div class="prose">
      <p>${CC.pricing.body}</p>
    </div>
  </div>
</section>`,
    ctaBand(CC.cta),
  ].join('\n\n'),
});

// ---------------------------------------------------------------------------
// /faq
// ---------------------------------------------------------------------------
// `text` is the canonical wording and is what goes into FAQPage schema.
// `html` is the same wording with links added, schema must match on-page text.
// Two answers are dynamic (areas list, NRW number) and stay code-driven
// rather than duplicated in content/faq.json, so they can't drift from the
// AREAS/SITE.nrwNumber single source of truth; merged into their groups here.

const AREAS_ANSWER = {
  q: 'What areas do you cover?',
  text: `Across Rhondda Cynon Taf, ${AREAS.join(', ')}, covering the ${POSTCODE_DISTRICTS.slice(0, -1).join(', ')} and ${POSTCODE_DISTRICTS.slice(-1)} postcode districts. Just outside? Message us anyway, we're expanding the round regularly.`,
};

const WASTE_ANSWER = {
  q: 'What happens to the waste you collect?',
  text: `We're a registered upper tier waste carrier with Natural Resources Wales (${SITE.nrwNumber}), so everything we collect is transported and disposed of legally, never fly-tipped, never quietly put into household waste. You're welcome to check our registration on the NRW public register.`,
};

const FAQ_GROUPS = CF.groups.map(g => {
  if (g.group === 'Areas &amp; booking') return { ...g, items: [AREAS_ANSWER, ...g.items] };
  if (g.group === 'Compliance') return { ...g, items: [WASTE_ANSWER, ...g.items] };
  return g;
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_GROUPS.flatMap(g => g.items.map(item => ({
    '@type': 'Question',
    name: item.q.replace(/&amp;/g, '&'),
    acceptedAnswer: { '@type': 'Answer', text: item.text },
  }))),
};

export const faq = page({
  slug: 'faq',
  nav: 'faq',
  title: 'FAQs, Pet Waste Removal & Collection in Aberdare & RCT',
  description: 'Answers on pricing, frequency, what happens to the waste, areas covered, and how booking works for pet waste garden clean-ups across Rhondda Cynon Taf.',
  trail: [HOME, { name: 'FAQ', href: '/faq' }],
  schema: [faqSchema],
  body: [
    pageHero({ trail: [HOME, { name: 'FAQ', href: '/faq' }], ...CF.hero }),
    `<section class="pad" style="background:var(--paper);">
  <div class="wrap wrap-narrow">
    <nav class="faq-jump" aria-label="Jump to a section">
      ${FAQ_GROUPS.map(g => `<a href="#faq-${slugify(g.group)}">${g.group}</a>`).join('\n      ')}
    </nav>
    ${FAQ_GROUPS.map(g => `<div class="faq-group" id="faq-${slugify(g.group)}">
      <h2>${g.group}</h2>
      ${squiggle()}
      <div class="faq-list">
        ${g.items.map(item => `<div class="faq-item">
          <h3>${item.q}</h3>
          <p>${item.html || item.text}</p>
        </div>`).join('\n        ')}
      </div>
    </div>`).join('\n    ')}
  </div>
</section>`,
    ctaBand(),
  ].join('\n\n'),
});

function slugify(s) {
  return s.replace(/&amp;/g, 'and').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// ---------------------------------------------------------------------------
// /contact
// ---------------------------------------------------------------------------

export const contact = page({
  slug: 'contact',
  nav: 'contact',
  title: 'Contact Scoop Patrol Aberdare, Get a Free Quote',
  description: 'Get a free same-day quote for pet waste garden clean-ups and collections across Rhondda Cynon Taf. Message us on WhatsApp or use the quote form.',
  trail: [HOME, { name: 'Contact', href: '/contact' }],
  body: [
    pageHero({ trail: [HOME, { name: 'Contact', href: '/contact' }], ...CCT.hero }),
    `<section class="pad tight" style="background:var(--paper);">
  <div class="wrap contact-split">
    <div class="contact-aside reveal">
      <h2>${CCT.asideHeading}</h2>
      ${squiggle()}
      <ul class="contact-methods">
        <li>
          <span class="contact-ic contact-ic-wa">${icons.whatsapp}</span>
          <div><b>WhatsApp</b><a href="${WA_LINK}" data-analytics="whatsapp-contact-page">${SITE.phoneDisplay}</a><span>Fastest, most quotes go out the same day.</span></div>
        </li>
        <li>
          <span class="contact-ic">${icons.phone}</span>
          <div><b>Phone</b><a href="${TEL_LINK}">${SITE.phoneDisplay}</a><span>Happy to take your details over the phone.</span></div>
        </li>
        <li>
          <span class="contact-ic">${icons.clock}</span>
          <div><b>Hours</b><span>${SITE.hours}</span></div>
        </li>
        <li>
          <span class="contact-ic">${icons.pin}</span>
          <div><b>Areas we cover</b><span>${AREAS.join(', ')}, and the surrounding Rhondda Cynon Taf area. Just outside? Message us anyway.</span></div>
        </li>
      </ul>
    </div>
    <div class="contact-form-wrap reveal">
      <h2>${CCT.formHeading}</h2>
      ${squiggle()}
      <p class="muted" style="margin-bottom:22px;">${CCT.formIntro}</p>
      ${quoteForm({ id: 'quoteFormContact' })}
    </div>
  </div>
</section>`,
    ctaBand(CCT.cta),
  ].join('\n\n'),
});
