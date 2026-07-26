import {
  page, pageHero, ctaBand, serviceSchema, icons,
  NRW_FULL, NRW_MEANS, SERVICES_NAV,
} from '../site.mjs';
import {
  sectionHead, pricingTabs, priceNote, whatToExpect, squiggle,
} from '../components.mjs';

const HOME = { name: 'Home', href: '/' };
const SERVICES = { name: 'Services', href: '/services' };

// ---------------------------------------------------------------------------
// /services — hub
// ---------------------------------------------------------------------------

const HUB_CARDS = [
  {
    href: '/services/pricing',
    title: 'Pricing',
    body: 'Weekly, fortnightly and one-off prices, what affects your quote, and how first cleans are priced.',
  },
  {
    href: '/services/garden-cleans',
    title: 'Pet Waste Garden Cleans',
    body: 'Full clearance of visible pet waste, pet-safe sanitising, everything taken away. Lawns, patios, decking and artificial grass.',
  },
  {
    href: '/services/pet-waste-collection',
    title: 'Pet Waste Collection',
    body: 'You bag it, we take it away and dispose of it legally. From £10.',
  },
  {
    href: '/services/pet-waste-collection#cat-litter',
    title: 'Cat Litter Add-on',
    body: '£3 per bag, collected alongside your scheduled garden clean.',
  },
  {
    href: '/services/garden-cleans#surfaces',
    title: 'Patios, Decking &amp; Artificial Grass',
    body: 'Cleared and treated as part of your clean, at no extra charge.',
  },
  {
    href: '/commercial',
    title: 'Commercial Services',
    body: 'Landlords, dog daycares, walking fields, groomers and breeders. Quoted individually.',
  },
];

export const servicesIndex = page({
  slug: 'services',
  nav: 'services',
  title: 'Our Services — Pet Waste Clean-ups & Collections | Scoop Patrol',
  description: 'Pet waste garden clean-ups, collections, cat litter add-on and commercial services across Aberdare and Rhondda Cynon Taf. NRW registered waste carrier.',
  trail: [HOME, SERVICES],
  body: [
    pageHero({
      trail: [HOME, SERVICES],
      kicker: 'Our services',
      h1: 'Everything we do, in one place',
      lead: 'Regular and one-off pet waste clean-ups and collections across Rhondda Cynon Taf — for family gardens and commercial sites alike.',
    }),
    `<section class="pad" style="background:var(--paper);">
  <div class="wrap">
    <div class="hub-grid reveal-group">
      ${HUB_CARDS.map(c => `<a class="hub-card" href="${c.href}">
        <h2>${c.title}</h2>
        <p>${c.body}</p>
        <span class="hub-more">Read more →</span>
      </a>`).join('\n      ')}
    </div>
  </div>
</section>`,
    ctaBand(),
  ].join('\n\n'),
});

// ---------------------------------------------------------------------------
// /services/pricing
// ---------------------------------------------------------------------------

const PRICE_FACTORS = [
  ['🏡', 'Garden size', 'Small, medium or larger gardens are priced differently because clearance time scales with area, not just mess.'],
  ['🐾', 'Number of pets', 'More pets means more waste per visit, reflected in the per-pet step-up.'],
  ['🪨', 'Access and terrain', 'Decking, stones, slate, artificial grass and overgrown areas take longer to clear properly, so these are quoted with that in mind.'],
  ['📅', 'Frequency', 'Weekly stays tidier and costs less per visit than fortnightly, where build-up is greater each time.'],
  ['🌱', 'Build-up', 'First cleans on a neglected garden are priced separately, usually from £20 depending on what\'s there.'],
];

// Wording matches /faq exactly (plan §7.1 item 7)
const PRICING_FAQ = [
  ['How much does pet waste removal cost?', 'From £10 per clean for a small garden with one pet on a weekly round, rising with garden size, number of pets and frequency. See our pricing page for the full breakdown.'],
  ['Why are first cleans priced separately?', 'If there\'s a build-up, long grass, decking, stones, slate or artificial grass, the first visit takes considerably longer. First cleans usually start from £20 depending on what\'s there.'],
  ['Do prices change without notice?', 'No. We confirm your price upfront before the first visit and tell you in advance of any change.'],
];

export const pricing = page({
  slug: 'services/pricing',
  nav: 'services',
  title: 'Pet Waste Removal Prices Rhondda Cynon Taf | From £10 — Scoop Patrol Aberdare',
  description: 'Weekly, fortnightly and one-off pet waste garden clean-up prices across Aberdare and RCT. From £10 per clean, waste always taken away. Same-day quotes.',
  trail: [HOME, SERVICES, { name: 'Pricing', href: '/services/pricing' }],
  schema: [serviceSchema({
    serviceType: 'Pet waste garden clean-up',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'GBP',
      lowPrice: '10',
      highPrice: '25',
      offerCount: '10',
    },
  })],
  body: [
    pageHero({
      trail: [HOME, SERVICES, { name: 'Pricing', href: '/services/pricing' }],
      kicker: 'Pricing',
      h1: 'Tailored pricing for your garden\'s unique needs',
      lead: 'Every price includes full waste removal — nothing extra to collect, nothing left behind.',
    }),
    `<section class="pad" style="background:var(--paper);">
  <div class="wrap">
    ${pricingTabs()}
    ${priceNote()}
  </div>
</section>`,
    `<section class="pad tight">
  <div class="wrap">
    ${sectionHead({ kicker: 'The details', h2: 'What affects your price' })}
    <div class="factor-grid reveal-group">
      ${PRICE_FACTORS.map(([ic, h, p]) => `<div class="factor-card">
        <h3><span aria-hidden="true">${ic}</span> ${h}</h3>
        <p>${p}</p>
      </div>`).join('\n      ')}
    </div>
  </div>
</section>`,
    `<section class="pad tight" style="background:var(--paper);">
  <div class="wrap">
    ${sectionHead({ kicker: 'More ways we can help', h2: 'Other services and pricing' })}
    <div class="related-grid reveal-group">
      <a class="related-card" href="/services/pet-waste-collection">
        <b>Pet waste collection — from £10</b>
        <p>Already bag your own waste? We'll collect it and dispose of it legally. Small bags from £10, standard black bags £12–£15, larger bags and bins quoted individually.</p>
        <span>See collections →</span>
      </a>
      <a class="related-card" href="/services/pet-waste-collection#cat-litter">
        <b>Cat litter add-on — £3 per bag</b>
        <p>Bagged cat litter collected alongside your scheduled garden clean. One visit, one less job.</p>
        <span>See the cat litter add-on →</span>
      </a>
    </div>
    <div class="price-note" style="margin-top:26px;">
      🏢 <strong>Commercial sites are quoted individually</strong> — it depends on site size, waste volume and how often you need us. <a class="text-link" href="/commercial">See Commercial Services →</a>
    </div>
  </div>
</section>`,
    `<section class="pad tight">
  <div class="wrap wrap-narrow">
    ${sectionHead({ kicker: 'Quick questions', h2: 'Pricing FAQs' })}
    <div class="faq-list">
      ${PRICING_FAQ.map(([q, a]) => `<div class="faq-item"><h3>${q}</h3><p>${a}</p></div>`).join('\n      ')}
    </div>
    <p class="section-foot"><a class="text-link" href="/faq">See all FAQs →</a></p>
  </div>
</section>`,
    ctaBand(),
  ].join('\n\n'),
});

// ---------------------------------------------------------------------------
// /services/garden-cleans
// ---------------------------------------------------------------------------

const FREQUENCY_CARDS = [
  ['Weekly', 'The most popular choice. Keeps a garden consistently tidy and low-odour, and each visit is quicker because there\'s less to clear — which is why it costs less per visit.'],
  ['Fortnightly', 'Suits smaller, single-pet gardens where build-up is slower. Each visit takes a little longer, so the per-visit price is higher than weekly.'],
  ['One-off', 'A single clean whenever you need one — before visitors, before a house move, or just to reset a garden that\'s got away from you. No commitment to anything after it.'],
];

export const gardenCleans = page({
  slug: 'services/garden-cleans',
  nav: 'services',
  title: 'Pet Waste Garden Clean-Ups in Aberdare & RCT — Scoop Patrol Aberdare',
  description: 'Weekly, fortnightly and one-off pet waste garden clean-ups across Rhondda Cynon Taf. Pet-safe sanitising, waste always taken away. NRW registered.',
  trail: [HOME, SERVICES, { name: 'Pet Waste Garden Cleans', href: '/services/garden-cleans' }],
  schema: [serviceSchema({
    serviceType: 'Pet waste garden clean-up',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'GBP',
      lowPrice: '10',
      highPrice: '25',
      offerCount: '10',
    },
  })],
  body: [
    pageHero({
      trail: [HOME, SERVICES, { name: 'Pet Waste Garden Cleans', href: '/services/garden-cleans' }],
      kicker: 'Garden cleans',
      h1: 'Pet waste garden clean-ups',
      lead: 'We clear every visible piece of pet waste from your garden, treat the area with pet-safe sanitiser, and take everything away with us.',
    }),
    `<section class="pad tight" style="background:var(--paper);">
  <div class="wrap wrap-narrow">
    ${sectionHead({ kicker: 'What you get', h2: 'What a clean actually includes' })}
    <div class="prose">
      <p>Every visit covers the whole garden, not just the lawn — patios, paths, decking and artificial grass are all cleared and treated as part of the same clean, at no extra charge.</p>
      <ul class="tick-list">
        <li>Full clearance of visible pet waste across every surface</li>
        <li>Treatment with our pet-safe deodorising and sanitising spray</li>
        <li>All waste bagged and taken away — nothing left in your bin</li>
        <li>Legal disposal under our NRW waste carrier registration</li>
      </ul>
    </div>
  </div>
</section>`,
    whatToExpect(),
    `<section class="pad tight" style="background:var(--paper);">
  <div class="wrap">
    ${sectionHead({ kicker: 'How often', h2: 'Weekly, fortnightly or one-off' })}
    <div class="factor-grid factor-grid-3 reveal-group">
      ${FREQUENCY_CARDS.map(([h, p]) => `<div class="factor-card"><h3>${h}</h3><p>${p}</p></div>`).join('\n      ')}
    </div>
    <div class="price-note" style="margin-top:26px;">
      🧾 <strong>First cleans.</strong> If there's already a build-up — long grass, decking, stones, slate or artificial grass — the first visit takes considerably longer, so it's priced separately, usually from £20 depending on what's there. After that you're onto your normal rate.
    </div>
    <p class="section-foot"><a class="text-link" href="/services/pricing">See full pricing →</a></p>
  </div>
</section>`,
    `<section class="pad tight" id="surfaces">
  <div class="wrap wrap-narrow">
    ${sectionHead({ kicker: 'Surfaces', h2: 'Patios, decking and artificial grass' })}
    <div class="prose">
      <p>We don't just do lawns. Patios, paths, decking and artificial grass all get cleared and treated as part of your clean.</p>
      <p>Artificial grass is the one people ask about most. Urine soaks past the surface into the backing, which is why hosing it down doesn't shift the smell. Every visit, we clear the waste and treat the area with our pet-safe deodorising and sanitising spray — so odour is kept on top of rather than allowed to build up.</p>
      <div class="callout">
        <h3>Being straight about what this is</h3>
        <p>This is part of a regular clean, not a separate deep-clean or restoration service. Regular visits prevent build-up; they won't undo years of saturation.</p>
        <p>If artificial grass has been left a long time and the smell has reached the infill or sub-base underneath, regular sanitising will help but may not fully fix it. That usually needs specialist restoration or infill replacement, which isn't something we offer. We'll tell you straight if that's what we find.</p>
      </div>
    </div>
  </div>
</section>`,
    `<section class="pad tight" style="background:var(--paper);">
  <div class="wrap wrap-narrow">
    ${sectionHead({ kicker: 'All year round', h2: 'We clean through winter too' })}
    <div class="prose">
      <p>Waste doesn't stop in bad weather, and neither do we. We work all year round, rain or shine. If severe weather ever makes a visit genuinely unsafe or pointless, we'll message you and either move it to the next available slot or skip it at no charge.</p>
    </div>
  </div>
</section>`,
    ctaBand(),
  ].join('\n\n'),
});

// ---------------------------------------------------------------------------
// /services/pet-waste-collection  (+ #cat-litter)
// ---------------------------------------------------------------------------

export const petWasteCollection = page({
  slug: 'services/pet-waste-collection',
  nav: 'services',
  title: 'Pet Waste & Cat Litter Collection — Aberdare & RCT | Scoop Patrol',
  description: 'Already bag your own pet waste or cat litter? We collect and dispose of it legally. Collections from £10 across Rhondda Cynon Taf. NRW registered waste carrier.',
  trail: [HOME, SERVICES, { name: 'Pet Waste Collection', href: '/services/pet-waste-collection' }],
  schema: [
    serviceSchema({
      serviceType: 'Pet waste collection',
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GBP',
        lowPrice: '10',
        offerCount: '3',
      },
    }),
    serviceSchema({
      serviceType: 'Cat litter collection',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'GBP',
        price: '3',
        description: 'Per bag of cat litter collected alongside a scheduled garden clean.',
      },
    }),
  ],
  body: [
    pageHero({
      trail: [HOME, SERVICES, { name: 'Pet Waste Collection', href: '/services/pet-waste-collection' }],
      kicker: 'Collections',
      h1: 'Pet waste collection — you bag it, we take it away',
      lead: 'Some customers already collect and bag their own pet waste but don\'t want the job of storing it or getting it to the bin. That\'s exactly what this is for.',
    }),
    `<section class="pad tight" style="background:var(--paper);">
  <div class="wrap wrap-narrow">
    ${sectionHead({ kicker: 'Pricing', h2: 'Simple, per-collection pricing' })}
    <div class="table-scroll">
      <table class="price-table">
        <thead><tr><th scope="col">Service</th><th scope="col">Price</th></tr></thead>
        <tbody>
          <tr><td>Small bag collection</td><td class="tag-cell">From £10</td></tr>
          <tr><td>Standard black bag collection</td><td class="tag-cell">From £12–£15</td></tr>
          <tr><td>Larger bags, bins or multiple bags</td><td class="tag-cell">Quoted individually</td></tr>
        </tbody>
      </table>
    </div>
    <div class="prose" style="margin-top:26px;">
      <h3>Regular or one-off</h3>
      <p>Collections work either way. Most customers settle into a weekly or fortnightly rhythm that lines up with their own routine, but a single one-off collection is absolutely fine — say after a clear-out, or when storage has got on top of you.</p>
      <h3>Who it's for</h3>
      <p>Customers who already have their own routine and don't need a garden clean, or who simply have nowhere to store bagged waste between council collections. If you'd rather we did the clearing too, that's our <a class="text-link" href="/services/garden-cleans">garden clean service</a>.</p>
    </div>
  </div>
</section>`,
    `<section class="pad tight">
  <div class="wrap wrap-narrow">
    ${sectionHead({ kicker: 'Legal disposal', h2: 'Why it matters that we\'re registered' })}
    <div class="prose">
      <div class="callout callout-green">
        <p>${NRW_FULL}</p>
        <p><strong>${NRW_MEANS}</strong></p>
      </div>
      <p>When you hand waste over to someone else, where it ends up stops being something you can see. That's exactly why carrier registration exists — and why it's worth checking, whoever you use. Most local operators aren't registered. We are, and the number above is yours to verify.</p>
    </div>
  </div>
</section>`,
    `<section class="pad tight" id="cat-litter" style="background:var(--paper);">
  <div class="wrap wrap-narrow">
    ${sectionHead({ kicker: 'Add-on', h2: 'Cat litter collection add-on' })}
    <div class="prose">
      <p>Got a cat as well as a dog? We'll take your bagged litter away at the same time as your garden clean — one visit, one less job.</p>
      <h3>How it works</h3>
      <p>Bag your used litter as you normally would and leave it out ready for your scheduled visit. We'll collect it alongside your garden clean and take it away with us. There's no separate call-out to arrange and nothing extra for you to do on the day — if you're already on the round, it simply gets added to the visit you've already got booked.</p>
      <h3>What it costs</h3>
      <p><strong>£3 per bag</strong>, collected during an existing visit. As a worked example, a standard weekly clean at £15 plus four bags of litter at £3 each comes to £27 for the week.</p>
      <div class="callout">
        <p><strong>One thing to be clear about:</strong> this is an add-on to a scheduled visit, not a standalone service. We don't currently offer cat-litter-only collection without a garden clean or waste collection booked alongside it. If that's what you're after, message us anyway — if there's enough demand it's something we'd look at.</p>
      </div>
    </div>
  </div>
</section>`,
    ctaBand({
      heading: 'Ready to hand it over?',
      body: 'Message us with your area and roughly how much you need collected — we\'ll quote it fairly, usually the same day.',
    }),
  ].join('\n\n'),
});
