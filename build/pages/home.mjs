import { page, ctaBand, icons, AREAS, WA_LINK, serviceSchema } from '../site.mjs';
import {
  sectionHead, trustStrip, trustBar, pricingTabs, priceNote, compareSlider,
  reviewsSection, whoWeWorkWith, whatToExpect, quoteForm, squiggle,
  GARDEN_CLEAN_PRICE_RANGE,
} from '../components.mjs';
import { homepage as HOME_CONTENT } from '../content.mjs';

const {
  hero: HERO, why: WHY, areas: AREAS_CONTENT, pricing: PRICING_CONTENT,
  spotTheDifference: SPOT_CONTENT, reviews: REVIEWS_CONTENT,
  whoWeWorkWith: WHO_CONTENT, whatToExpect: EXPECT_CONTENT,
  howToBook: BOOK_CONTENT, quoteSection: QUOTE_CONTENT, finalCta: CTA_CONTENT,
} = HOME_CONTENT;

function hero() {
  return `<section class="hero" id="top">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <h1>${HERO.headingPrefix} <span class="green">${HERO.headingHighlight}</span></h1>
      <p class="lead">${HERO.lead}</p>
      <div class="hero-ctas">
        <a href="/contact" class="btn btn-green">Get a free quote</a>
        <a href="/services/pricing" class="btn btn-outline btn-outline-light">See our prices</a>
      </div>
    </div>
    <div class="hero-art">
      <div class="hero-photo-frame">
        <picture>
          <source srcset="${HERO.imageWebp}" type="image/webp">
          <img src="${HERO.image}"
               alt="${HERO.imageAlt}"
               width="900" height="603" fetchpriority="high" decoding="async">
        </picture>
      </div>
      <div class="hero-badge-chip">
        <span class="paw-ic" aria-hidden="true">🐾</span>
        <span>${HERO.badgeText}</span>
      </div>
    </div>
  </div>
</section>`;
}

function pricing() {
  return `<section class="pad" id="pricing" style="background:var(--paper);">
  <div class="wrap">
    ${sectionHead({ kicker: PRICING_CONTENT.kicker, h2: PRICING_CONTENT.heading, lead: PRICING_CONTENT.lead })}
    ${pricingTabs()}
    ${priceNote()}
    <p class="section-foot"><a class="text-link" href="/services/pricing">See the full pricing breakdown →</a></p>
  </div>
</section>`;
}

function spotTheDifference() {
  return `<section class="pad" style="padding-bottom:0;">
  <div class="wrap">
    ${sectionHead({ kicker: SPOT_CONTENT.kicker, h2: SPOT_CONTENT.heading })}
    ${compareSlider()}
  </div>
</section>`;
}

function whyScoopPatrol() {
  const points = WHY.points.map(p =>
    `<li><span class="check-ic-wrap">${icons.check}</span>${p}</li>`).join('\n          ');
  return `<section class="pad" id="why" style="background:var(--paper);">
  <div class="wrap">
    <div class="why-split">
      <div class="why-copy reveal">
        <span class="kicker">${WHY.kicker}</span>
        <h2>${WHY.heading}</h2>
        ${squiggle()}
        <p class="lead-sm">${WHY.lead}</p>
        <ul class="check-list">
          ${points}
        </ul>
        <a href="/contact" class="btn btn-green">Get in touch</a>
      </div>
      <div class="why-art reveal">
        <div class="why-art-frame family-crossfade" data-crossfade>
          <picture class="fx-img fx-a">
            <source srcset="${WHY.imageSummerWebp}" type="image/webp">
            <img src="${WHY.imageSummer}"
                 alt="${WHY.imageAlt}"
                 width="1200" height="960" loading="lazy" decoding="async">
          </picture>
          <picture class="fx-img fx-b" aria-hidden="true">
            <source srcset="${WHY.imageAutumnWebp}" type="image/webp">
            <img src="${WHY.imageAutumn}"
                 alt="" width="1200" height="960" loading="lazy" decoding="async">
          </picture>
        </div>
      </div>
    </div>
  </div>
</section>`;
}

function whereWePatrol() {
  const half = Math.ceil(AREAS.length / 2);
  const col = list => list.map(a =>
    `<li><span class="area-pin" aria-hidden="true">${icons.pin}</span>${a}</li>`).join('\n          ');
  return `<section class="pad" id="areas" style="background:var(--paper);">
  <div class="wrap">
    <div class="areas-split">
      <div class="areas-copy">
        ${sectionHead({
          kicker: AREAS_CONTENT.kicker,
          h2: AREAS_CONTENT.heading,
          lead: AREAS_CONTENT.lead,
        })}
        <p class="section-foot muted">Just outside the area? <a class="text-link" href="${WA_LINK}">Message us anyway</a>, we're expanding the round regularly.</p>
      </div>
      <div class="areas-columns reveal-group">
        <ul>
            ${col(AREAS.slice(0, half))}
        </ul>
        <ul>
            ${col(AREAS.slice(half))}
        </ul>
      </div>
    </div>
  </div>
</section>`;
}

function howToBook() {
  const cards = BOOK_CONTENT.cards.map(c => `<div class="book-card">
        <h3>${c.heading}</h3>
        <ol>
          ${c.steps.map(s => `<li>${s}</li>`).join('\n          ')}
        </ol>
      </div>`).join('\n      ');
  return `<section class="pad tight" id="how-to-book">
  <div class="wrap">
    ${sectionHead({ kicker: BOOK_CONTENT.kicker, h2: BOOK_CONTENT.heading, lead: BOOK_CONTENT.lead })}
    <div class="book-split reveal-group">
      ${cards}
    </div>
  </div>
</section>`;
}

function quoteSection() {
  return `<section class="pad" id="quote" style="background:var(--paper);">
  <div class="wrap wrap-form">
    ${sectionHead({ kicker: QUOTE_CONTENT.kicker, h2: QUOTE_CONTENT.heading, lead: QUOTE_CONTENT.lead })}
    ${quoteForm({ id: 'quoteFormHome' })}
  </div>
</section>`;
}

export default page({
  slug: '',
  nav: 'home',
  title: HOME_CONTENT.seo.title,
  description: HOME_CONTENT.seo.description,
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
    hero(),
    trustStrip(),
    pricing(),
    spotTheDifference(),
    reviewsSection({ kicker: REVIEWS_CONTENT.kicker, h2: REVIEWS_CONTENT.heading }),
    trustBar(),
    whyScoopPatrol(),
    whoWeWorkWith({ kicker: WHO_CONTENT.kicker, h2: WHO_CONTENT.heading, lead: WHO_CONTENT.lead }),
    whatToExpect({ kicker: EXPECT_CONTENT.kicker, h2: EXPECT_CONTENT.heading, lead: EXPECT_CONTENT.lead }),
    whereWePatrol(),
    howToBook(),
    quoteSection(),
    ctaBand(CTA_CONTENT),
  ].join('\n\n'),
});
