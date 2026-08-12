import {
  page, pageHero, ctaBand, serviceSchema, icons,
  NRW_FULL, NRW_MEANS, SERVICES_NAV,
} from '../site.mjs';
import {
  sectionHead, pricingTabs, priceNote, whatToExpect, squiggle,
  GARDEN_CLEAN_PRICE_RANGE,
} from '../components.mjs';
import { services as C } from '../content.mjs';

const HOME = { name: 'Home', href: '/' };
const SERVICES = { name: 'Services', href: '/services' };

// ---------------------------------------------------------------------------
// /services, hub
// ---------------------------------------------------------------------------

export const servicesIndex = page({
  slug: 'services',
  nav: 'services',
  title: C.index.seo.title,
  description: C.index.seo.description,
  trail: [HOME, SERVICES],
  body: [
    pageHero({ trail: [HOME, SERVICES], ...C.index.hero }),
    `<section class="pad" style="background:var(--paper);">
  <div class="wrap">
    <div class="hub-grid reveal-group">
      ${C.index.hubCards.map(c => `<a class="hub-card" href="${c.href}">
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

export const pricing = page({
  slug: 'services/pricing',
  nav: 'services',
  title: C.pricing.seo.title,
  description: C.pricing.seo.description,
  trail: [HOME, SERVICES, { name: 'Pricing', href: '/services/pricing' }],
  schema: [serviceSchema({
    serviceType: 'Pet waste garden clean-up',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'GBP',
      lowPrice: GARDEN_CLEAN_PRICE_RANGE.low,
      highPrice: GARDEN_CLEAN_PRICE_RANGE.high,
      offerCount: GARDEN_CLEAN_PRICE_RANGE.offerCount,
    },
  })],
  body: [
    pageHero({ trail: [HOME, SERVICES, { name: 'Pricing', href: '/services/pricing' }], ...C.pricing.hero }),
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
      ${C.pricing.priceFactors.map(f => `<div class="factor-card">
        <h3><span aria-hidden="true">${f.icon}</span> ${f.heading}</h3>
        <p>${f.body}</p>
      </div>`).join('\n      ')}
    </div>
  </div>
</section>`,
    `<section class="pad tight" style="background:var(--paper);">
  <div class="wrap">
    ${sectionHead({ kicker: 'More ways we can help', h2: 'Other services and pricing' })}
    <div class="related-grid reveal-group">
      <a class="related-card" href="/services/pet-waste-collection">
        <b>Pet waste collection, from £10</b>
        <p>Already bag your own waste? We'll collect it and dispose of it legally. Small bags from £10, standard black bags £12–£15, larger bags and bins quoted individually.</p>
        <span>See collections →</span>
      </a>
      <a class="related-card" href="/services/pet-waste-collection#cat-litter">
        <b>Cat litter add-on, £3 per bag</b>
        <p>Bagged cat litter collected alongside your scheduled garden clean. One visit, one less job.</p>
        <span>See the cat litter add-on →</span>
      </a>
    </div>
    <div class="price-note" style="margin-top:26px;">
      🏢 <strong>Commercial sites are quoted individually</strong>. It depends on site size, waste volume and how often you need us. <a class="text-link" href="/commercial">See Commercial Services →</a>
    </div>
  </div>
</section>`,
    `<section class="pad tight">
  <div class="wrap wrap-narrow">
    ${sectionHead({ kicker: 'Quick questions', h2: 'Pricing FAQs' })}
    <div class="faq-list">
      ${C.pricing.faq.map(item => `<div class="faq-item"><h3>${item.q}</h3><p>${item.a}</p></div>`).join('\n      ')}
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

export const gardenCleans = page({
  slug: 'services/garden-cleans',
  nav: 'services',
  title: C.gardenCleans.seo.title,
  description: C.gardenCleans.seo.description,
  trail: [HOME, SERVICES, { name: 'Pet Waste Garden Cleans', href: '/services/garden-cleans' }],
  schema: [serviceSchema({
    serviceType: 'Pet waste garden clean-up',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'GBP',
      lowPrice: GARDEN_CLEAN_PRICE_RANGE.low,
      highPrice: GARDEN_CLEAN_PRICE_RANGE.high,
      offerCount: GARDEN_CLEAN_PRICE_RANGE.offerCount,
    },
  })],
  body: [
    pageHero({ trail: [HOME, SERVICES, { name: 'Pet Waste Garden Cleans', href: '/services/garden-cleans' }], ...C.gardenCleans.hero }),
    `<section class="pad tight" style="background:var(--paper);">
  <div class="wrap wrap-narrow">
    ${sectionHead({ kicker: 'What you get', h2: 'What a clean actually includes' })}
    <div class="prose">
      <p>${C.gardenCleans.whatIncluded.lead}</p>
      <ul class="tick-list">
        ${C.gardenCleans.whatIncluded.items.map(i => `<li>${i}</li>`).join('\n        ')}
      </ul>
    </div>
  </div>
</section>`,
    whatToExpect(),
    `<section class="pad tight" style="background:var(--paper);">
  <div class="wrap">
    ${sectionHead({ kicker: 'How often', h2: 'Weekly, fortnightly or one-off' })}
    <div class="factor-grid factor-grid-3 reveal-group">
      ${C.gardenCleans.frequencyCards.map(f => `<div class="factor-card"><h3>${f.heading}</h3><p>${f.body}</p></div>`).join('\n      ')}
    </div>
    <div class="price-note" style="margin-top:26px;">
      ${C.gardenCleans.firstCleansNote}
    </div>
    <p class="section-foot"><a class="text-link" href="/services/pricing">See full pricing →</a></p>
  </div>
</section>`,
    `<section class="pad tight" id="surfaces">
  <div class="wrap wrap-narrow">
    ${sectionHead({ kicker: 'Surfaces', h2: 'Patios, decking and artificial grass' })}
    <div class="prose">
      <p>${C.gardenCleans.surfaces.lead1}</p>
      <p>${C.gardenCleans.surfaces.lead2}</p>
      <div class="callout">
        <h3>${C.gardenCleans.surfaces.calloutHeading}</h3>
        <p>${C.gardenCleans.surfaces.calloutP1}</p>
        <p>${C.gardenCleans.surfaces.calloutP2}</p>
      </div>
    </div>
  </div>
</section>`,
    `<section class="pad tight" style="background:var(--paper);">
  <div class="wrap wrap-narrow">
    ${sectionHead({ kicker: 'All year round', h2: 'We clean through winter too' })}
    <div class="prose">
      <p>${C.gardenCleans.winter.lead}</p>
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
  title: C.petWasteCollection.seo.title,
  description: C.petWasteCollection.seo.description,
  trail: [HOME, SERVICES, { name: 'Pet Waste Collection', href: '/services/pet-waste-collection' }],
  schema: [
    serviceSchema({
      serviceType: 'Pet waste collection',
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GBP',
        // Derived from the pricing table below, not hardcoded, so it can't drift.
        lowPrice: String(Math.min(...C.petWasteCollection.pricingRows.flatMap(r => [...r.price.matchAll(/£(\d+)/g)].map(m => Number(m[1]))))),
        offerCount: String(C.petWasteCollection.pricingRows.length),
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
    pageHero({ trail: [HOME, SERVICES, { name: 'Pet Waste Collection', href: '/services/pet-waste-collection' }], ...C.petWasteCollection.hero }),
    `<section class="pad tight" style="background:var(--paper);">
  <div class="wrap wrap-narrow">
    ${sectionHead({ kicker: 'Pricing', h2: 'Simple, per-collection pricing' })}
    <div class="table-scroll">
      <table class="price-table">
        <thead><tr><th scope="col">Service</th><th scope="col">Price</th></tr></thead>
        <tbody>
          ${C.petWasteCollection.pricingRows.map(r => `<tr><td>${r.service}</td><td class="tag-cell">${r.price}</td></tr>`).join('\n          ')}
        </tbody>
      </table>
    </div>
    <div class="prose" style="margin-top:26px;">
      <h3>${C.petWasteCollection.regularOrOneOff.heading}</h3>
      <p>${C.petWasteCollection.regularOrOneOff.body}</p>
      <h3>${C.petWasteCollection.whoItsFor.heading}</h3>
      <p>${C.petWasteCollection.whoItsFor.body}</p>
    </div>
  </div>
</section>`,
    `<section class="pad tight">
  <div class="wrap wrap-narrow">
    ${sectionHead({ kicker: 'Legal disposal', h2: C.petWasteCollection.legal.heading })}
    <div class="prose">
      <div class="callout callout-green">
        <p>${NRW_FULL}</p>
        <p><strong>${NRW_MEANS}</strong></p>
      </div>
      <p>${C.petWasteCollection.legal.body}</p>
    </div>
  </div>
</section>`,
    `<section class="pad tight" id="cat-litter" style="background:var(--paper);">
  <div class="wrap wrap-narrow">
    ${sectionHead({ kicker: 'Add-on', h2: 'Cat litter collection add-on' })}
    <div class="prose">
      <p>${C.petWasteCollection.catLitter.intro}</p>
      <h3>How it works</h3>
      <p>${C.petWasteCollection.catLitter.howItWorks}</p>
      <h3>What it costs</h3>
      <p>${C.petWasteCollection.catLitter.cost}</p>
      <div class="callout">
        <p>${C.petWasteCollection.catLitter.calloutBody}</p>
      </div>
    </div>
  </div>
</section>`,
    ctaBand(C.petWasteCollection.cta),
  ].join('\n\n'),
});
