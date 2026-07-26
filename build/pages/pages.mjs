import {
  page, pageHero, ctaBand, serviceSchema, icons, SITE, AREAS,
  NRW_FULL, NRW_MEANS, WA_LINK, TEL_LINK, POSTCODE_DISTRICTS,
} from '../site.mjs';
import { sectionHead, quoteForm, whoWeWorkWith, squiggle } from '../components.mjs';

const HOME = { name: 'Home', href: '/' };

// ---------------------------------------------------------------------------
// /commercial
// ---------------------------------------------------------------------------

const SECTORS = [
  ['🔑', 'Landlords &amp; lettings', 'Gardens left in a state between tenancies, or shared outdoor space at a multi-let property that nobody takes responsibility for. We clear it, sanitise it and take the waste away, so the next viewing isn\'t the problem it was going to be.'],
  ['🐕', 'Dog daycare', 'High traffic, lots of dogs, and an odour problem that builds fast if it isn\'t stayed on top of. Regular scheduled visits keep runs and outdoor areas usable, and every collection comes with a Waste Transfer Note for your records.'],
  ['🌳', 'Dog walking fields', 'Open ground where waste is easy to miss and customers notice immediately when it\'s been missed. We work to a schedule that suits your booking pattern, including early or late slots around your busiest times.'],
  ['✂️', 'Pet groomers', 'Smaller volumes, but commercial waste all the same, which means it can\'t legally go into household collections. We collect on a rhythm that suits you and document it properly.'],
  ['🐾', 'Dog breeders', 'Runs, whelping areas and exercise yards need clearing and sanitising consistently, not occasionally. We\'ll work to whatever frequency your setup needs.'],
];

export const commercial = page({
  slug: 'commercial',
  nav: 'commercial',
  title: 'Commercial Pet Waste Removal, Landlords, Daycares & Kennels | RCT',
  description: 'Commercial pet waste removal and collection across Rhondda Cynon Taf. NRW registered upper tier waste carrier, fully insured, DBS checked. Quotes tailored to your site.',
  trail: [HOME, { name: 'Commercial Services', href: '/commercial' }],
  schema: [serviceSchema({ serviceType: 'Commercial pet waste removal' })],
  body: [
    pageHero({
      trail: [HOME, { name: 'Commercial Services', href: '/commercial' }],
      kicker: 'Commercial services',
      h1: 'Commercial pet waste removal and collection',
      lead: 'For landlords, dog daycares, dog walking fields, pet groomers and breeders across Rhondda Cynon Taf. Scheduled, documented and legally disposed of.',
    }),
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
      <p><strong>Why this matters to you.</strong> As a business, you have a duty of care for waste produced on your premises. Using a registered carrier and keeping the Waste Transfer Note is how you meet it, and it's what an inspector will ask to see.</p>
      <p>${NRW_FULL}</p>
    </div>
  </div>
</section>`,
    `<section class="pad tight">
  <div class="wrap">
    ${sectionHead({ kicker: 'Who we work with', h2: 'Sites we look after' })}
    <div class="sector-list reveal-group">
      ${SECTORS.map(([ic, h, p]) => `<div class="sector-card">
        <span class="sector-ic" aria-hidden="true">${ic}</span>
        <div><h3>${h}</h3><p>${p}</p></div>
      </div>`).join('\n      ')}
    </div>
  </div>
</section>`,
    `<section class="pad tight" style="background:var(--paper);">
  <div class="wrap wrap-narrow">
    ${sectionHead({ kicker: 'Artificial surfaces', h2: 'Artificial grass and hard standing' })}
    <div class="prose">
      <p>Daycares and dog walking fields with artificial grass get the same pet-safe sanitising treatment as part of every visit, not as an extra. Odour on artificial surfaces is a real operational problem. It's what customers comment on first, and most operators clearing waste won't treat for it at all.</p>
      <p>As with our residential work, we'll be straight with you about the limits: regular treatment keeps odour from building up, but where urine has already reached the infill or sub-base, that needs specialist restoration rather than routine cleaning. <a class="text-link" href="/services/garden-cleans#surfaces">More on how we handle surfaces →</a></p>
    </div>
  </div>
</section>`,
    `<section class="pad tight">
  <div class="wrap wrap-narrow">
    ${sectionHead({ kicker: 'Pricing', h2: 'Quoted around your site' })}
    <div class="prose">
      <p>Commercial sites are quoted individually. It depends on site size, waste volume and how often you need us. Tell us about your site and we'll come back with a fair price.</p>
    </div>
  </div>
</section>`,
    ctaBand({
      eyebrow: 'Commercial enquiry',
      heading: 'Tell us about your site',
      body: 'Send us the site type, rough size and how often you\'d need us, and we\'ll come back with a tailored price.',
    }),
  ].join('\n\n'),
});

// ---------------------------------------------------------------------------
// /about
// ---------------------------------------------------------------------------

export const about = page({
  slug: 'about',
  nav: 'about',
  title: 'About Scoop Patrol Aberdare, Myles & Sabrina, Your Local Team',
  description: 'Scoop Patrol Aberdare is a local, two-person pet waste removal service run by Myles and Sabrina across Rhondda Cynon Taf. NRW registered, DBS checked, fully insured.',
  trail: [HOME, { name: 'About', href: '/about' }],
  body: [
    pageHero({
      trail: [HOME, { name: 'About', href: '/about' }],
      kicker: 'About us',
      h1: 'For families, busy schedules and those who need support',
      lead: 'Scoop Patrol is Myles and Sabrina, two people, one van, and a round that covers our own valley.',
    }),
    `<section class="pad tight" style="background:var(--paper);">
  <div class="wrap">
    <div class="why-split">
      <div class="why-copy reveal">
        <span class="kicker">Our story</span>
        <h2>Why we started</h2>
        ${squiggle()}
        <div class="prose">
          <p>We started Scoop Patrol because we saw the community needed a helping hand. Especially for those struggling on their own. That's why we do what we do, to keep every space clean and every neighbour supported.</p>
          <p>Some of our customers are simply busy: two jobs, small children, and a garden that keeps losing the argument. Others have mobility problems, or are recovering from surgery, or have reached a point where bending and lifting isn't realistic any more. A few have been genuinely embarrassed to ask. Nobody should be.</p>
          <p>It's the same job either way, and we treat it the same way: turn up when we said we would, do it properly, take the waste with us, and never make anyone feel awkward about needing the help.</p>
        </div>
      </div>
      <div class="why-art reveal">
        <div class="why-art-frame family-crossfade" data-crossfade>
          <picture class="fx-img fx-a">
            <source srcset="/assets/scoop-patrol-family-summer.webp" type="image/webp">
            <img src="/assets/scoop-patrol-family-summer.jpg"
                 alt="A family and their dog enjoying a clean, tidy back garden on a summer afternoon"
                 width="1200" height="960" loading="lazy" decoding="async">
          </picture>
          <picture class="fx-img fx-b" aria-hidden="true">
            <source srcset="/assets/scoop-patrol-family-autumn.webp" type="image/webp">
            <img src="/assets/scoop-patrol-family-autumn.jpg"
                 alt="" width="1200" height="960" loading="lazy" decoding="async">
          </picture>
        </div>
      </div>
    </div>
  </div>
</section>`,
    `<section class="pad tight">
  <div class="wrap">
    ${sectionHead({ kicker: 'Local means local', h2: 'We live on the round we clean' })}
    <div class="prose wrap-narrow" style="padding:0;">
      <p>Scoop Patrol isn't a franchise with a call centre somewhere else. We're based in Aberdare, we work across Rhondda Cynon Taf, and the gardens on our round belong to our neighbours. That's the whole business, and it is why we'd rather fix a problem than argue about one.</p>
      <p>If you message us, you're messaging Myles or Sabrina. Same two people every visit, so you always know who's coming.</p>
    </div>
  </div>
</section>`,
    `<section class="pad tight" style="background:var(--paper);">
  <div class="wrap">
    ${sectionHead({ kicker: 'Credentials', h2: 'What we\'re registered and checked for' })}
    <div class="compliance-grid reveal-group">
      <div class="compliance-card">
        <span class="compliance-ic">${icons.leaf}</span>
        <h3>NRW registered</h3>
        <p>Upper tier waste carrier, registration <strong>${SITE.nrwNumber}</strong>. ${NRW_MEANS}</p>
      </div>
      <div class="compliance-card">
        <span class="compliance-ic">${icons.shield}</span>
        <h3>Fully insured</h3>
        <p>So if something does go wrong through our negligence, you're covered and we put it right.</p>
      </div>
      <div class="compliance-card">
        <span class="compliance-ic">${icons.badgeCheck}</span>
        <h3>DBS checked</h3>
        <p>We're in and out of people's gardens, often when they're not home. It felt like the right thing to do.</p>
      </div>
      <div class="compliance-card">
        <span class="compliance-ic">${icons.catdog}</span>
        <h3>Pet-safe throughout</h3>
        <p>Pet-safe deodorising and sanitising products, and biodegradable bags on every visit.</p>
      </div>
    </div>
  </div>
</section>`,
    whoWeWorkWith(),
    ctaBand(),
  ].join('\n\n'),
});

// ---------------------------------------------------------------------------
// /faq
// ---------------------------------------------------------------------------
// `text` is the canonical wording and is what goes into FAQPage schema.
// `html` is the same wording with links added, schema must match on-page text.

const FAQ_GROUPS = [
  ['Pricing', [
    {
      q: 'How much does pet waste removal cost?',
      text: 'From £10 per clean for a small garden with one pet on a weekly round, rising with garden size, number of pets and frequency. See our pricing page for the full breakdown.',
      html: 'From £10 per clean for a small garden with one pet on a weekly round, rising with garden size, number of pets and frequency. See our <a class="text-link" href="/services/pricing">pricing page</a> for the full breakdown.',
    },
    {
      q: 'Why are first cleans priced separately?',
      text: 'If there\'s a build-up, long grass, decking, stones, slate or artificial grass, the first visit takes considerably longer. First cleans usually start from £20 depending on what\'s there.',
    },
    {
      q: 'Do prices change without notice?',
      text: 'No. We confirm your price upfront before the first visit and tell you in advance of any change.',
    },
  ]],
  ['The visit', [
    {
      q: 'How often should I have my garden cleared?',
      text: 'Weekly is most popular and keeps gardens consistently tidy and low-odour. Fortnightly suits smaller single-pet gardens, though each visit takes longer.',
    },
    {
      q: 'Is dog poo bad for my lawn?',
      text: 'Left to sit, it can scorch grass and leave patchy yellowed areas, and it\'s a common source of bacteria and parasites in gardens where children or other pets play. Regular removal is the simplest fix.',
    },
    {
      q: 'Do I need to be home?',
      text: 'No, as long as we can access the garden. Just tell us how to get in (side gate code, etc.) when you book.',
    },
    {
      q: 'Do you still clean in winter?',
      text: 'Yes. We clean and collect all year round, rain or shine, waste doesn\'t stop in bad weather.',
    },
    {
      q: 'Do you sanitise as well as clear?',
      text: 'Yes. Every clean includes treating the area with pet-friendly sanitiser to help remove germs and reduce infection risk.',
    },
  ]],
  ['Collections', [
    {
      q: 'What if I already bag my own waste?',
      text: 'That\'s our collection service, you bag it, we take it away. From £10.',
      html: 'That\'s our <a class="text-link" href="/services/pet-waste-collection">collection service</a>, you bag it, we take it away. From £10.',
    },
    {
      q: 'Do you collect cat litter?',
      text: 'Yes, as an add-on to a scheduled visit, at £3 per bag collected alongside your garden clean.',
      html: 'Yes, as an <a class="text-link" href="/services/pet-waste-collection#cat-litter">add-on to a scheduled visit</a>, at £3 per bag collected alongside your garden clean.',
    },
  ]],
  ['Areas &amp; booking', [
    {
      q: 'What areas do you cover?',
      text: `Across Rhondda Cynon Taf, ${AREAS.join(', ')}, covering the ${POSTCODE_DISTRICTS.slice(0, -1).join(', ')} and ${POSTCODE_DISTRICTS.slice(-1)} postcode districts. Just outside? Message us anyway, we're expanding the round regularly.`,
    },
    {
      q: 'How do I get a quote?',
      text: 'Message us or use the quote form with your postcode, garden size and number of pets. A photo helps us price fairly. We come back the same day.',
      html: 'Message us or use the <a class="text-link" href="/contact">quote form</a> with your postcode, garden size and number of pets. A photo helps us price fairly. We come back the same day.',
    },
    {
      q: 'Do I have to sign a contract?',
      text: 'No. No contracts, cancel any time.',
    },
  ]],
  ['Surfaces', [
    {
      q: 'Do you clean patios, decking and artificial grass too?',
      text: 'Yes, they\'re cleared and treated as part of your clean, not charged separately. Every visit includes treating the area with our pet-safe deodorising and sanitising spray.',
    },
    {
      q: 'Why does my artificial grass still smell after I hose it?',
      text: 'Because urine soaks past the surface into the backing, and rinsing only dilutes what\'s on top. Regular clearing and sanitising keeps it from building up. If it\'s been left a long time and the smell has reached the infill or sub-base, regular treatment will help but may not fully fix it, at that point you may need a specialist restoration or infill replacement, which isn\'t something we offer.',
    },
    {
      q: 'What do you use on artificial grass?',
      text: 'Our pet-safe deodorising and sanitising spray, which is safe for pets, children and artificial surfaces once dry.',
    },
  ]],
  ['Compliance', [
    {
      q: 'What happens to the waste you collect?',
      text: `We're a registered upper tier waste carrier with Natural Resources Wales (${SITE.nrwNumber}), so everything we collect is transported and disposed of legally, never fly-tipped, never quietly put into household waste. You're welcome to check our registration on the NRW public register.`,
    },
    {
      q: 'Are you insured?',
      text: 'Yes, fully insured. We\'re also DBS checked.',
    },
    {
      q: 'Are your products safe for pets and children?',
      text: 'Yes, pet-safe products and biodegradable bags throughout.',
    },
  ]],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_GROUPS.flatMap(([, qs]) => qs.map(item => ({
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
    pageHero({
      trail: [HOME, { name: 'FAQ', href: '/faq' }],
      kicker: 'Got questions?',
      h1: 'Frequently asked questions',
      lead: 'Everything customers usually ask before their first visit. Can\'t find your answer? Message us and we\'ll reply the same day.',
    }),
    `<section class="pad" style="background:var(--paper);">
  <div class="wrap wrap-narrow">
    <nav class="faq-jump" aria-label="Jump to a section">
      ${FAQ_GROUPS.map(([g]) => `<a href="#faq-${slugify(g)}">${g}</a>`).join('\n      ')}
    </nav>
    ${FAQ_GROUPS.map(([group, qs]) => `<div class="faq-group" id="faq-${slugify(group)}">
      <h2>${group}</h2>
      ${squiggle()}
      <div class="faq-list">
        ${qs.map(item => `<div class="faq-item">
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
    pageHero({
      trail: [HOME, { name: 'Contact', href: '/contact' }],
      kicker: 'Get in touch',
      h1: 'Get a free quote',
      lead: 'Tell us your postcode, garden size and number of pets and we\'ll come back with a fair price, usually the same day.',
    }),
    `<section class="pad tight" style="background:var(--paper);">
  <div class="wrap contact-split">
    <div class="contact-aside reveal">
      <h2>Quickest ways to reach us</h2>
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
      <h2>Or fill this in</h2>
      ${squiggle()}
      <p class="muted" style="margin-bottom:22px;">This opens WhatsApp with your details ready to send, so you don't have to type it all out.</p>
      ${quoteForm({ id: 'quoteFormContact' })}
    </div>
  </div>
</section>`,
    ctaBand({
      eyebrow: 'Prefer to just message?',
      heading: 'One message is all it takes',
      body: 'Send us your postcode, garden size and number of pets, a photo helps us give the fairest price.',
    }),
  ].join('\n\n'),
});
