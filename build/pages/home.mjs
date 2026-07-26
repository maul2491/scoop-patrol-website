import { page, ctaBand, icons, AREAS, WA_LINK, serviceSchema } from '../site.mjs';
import {
  sectionHead, trustStrip, trustBar, pricingTabs, priceNote, compareSlider,
  reviewsSection, whoWeWorkWith, whatToExpect, quoteForm, squiggle,
} from '../components.mjs';

const WHY_POINTS = [
  'Local &amp; two-person run',
  'No contracts, cancel anytime',
  'Recurring or one-off cleans',
  'Fair, upfront pricing',
  'Pet-safe &amp; biodegradable',
  'Only a message away to start today!',
];

function hero() {
  return `<section class="hero" id="top">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <h1>Pet Waste Garden Clean-ups and Collections in <span class="green">Rhondda Cynon Taf</span></h1>
      <p class="lead">Regular and flexible one-off garden clean-ups and collections for pet owners across Aberdare and Rhondda Cynon Taf.</p>
      <div class="hero-ctas">
        <a href="/contact" class="btn btn-green">Get a free quote</a>
        <a href="/services/pricing" class="btn btn-outline btn-outline-light">See our prices</a>
      </div>
    </div>
    <div class="hero-art">
      <div class="hero-photo-frame">
        <picture>
          <source srcset="/assets/dog-and-cat-in-clean-garden-aberdare.webp" type="image/webp">
          <img src="/assets/dog-and-cat-in-clean-garden-aberdare.jpg"
               alt="A dog and a cat sitting together on a clean, freshly cleared garden lawn in Aberdare"
               width="900" height="603" fetchpriority="high" decoding="async">
        </picture>
      </div>
      <div class="hero-badge-chip">
        <span class="paw-ic" aria-hidden="true">🐾</span>
        <span>Your garden, fresh, safe, paws and feet ready.</span>
      </div>
    </div>
  </div>
</section>`;
}

function pricing() {
  return `<section class="pad" id="pricing" style="background:var(--paper);position:relative;">
  <div class="paw-trail" id="trail2"></div>
  <div class="wrap" style="position:relative;z-index:2;">
    ${sectionHead({
      kicker: 'Our pricing',
      h2: 'Tailored pricing for your garden\'s unique needs',
      lead: 'We consider pets, garden size, clean-up frequency and even big build-ups. Ensuring a fair quote every time.',
    })}
    ${pricingTabs()}
    ${priceNote()}
    <p class="section-foot"><a class="text-link" href="/services/pricing">See the full pricing breakdown →</a></p>
  </div>
</section>`;
}

function spotTheDifference() {
  return `<section class="pad" style="padding-bottom:0;">
  <div class="wrap">
    ${sectionHead({ kicker: 'Before &amp; after', h2: 'From Mess to Fresh: Results You Can Trust' })}
    ${compareSlider()}
  </div>
</section>`;
}

function whyScoopPatrol() {
  const points = WHY_POINTS.map(p =>
    `<li><span class="check-ic-wrap">${icons.check}</span>${p}</li>`).join('\n          ');
  return `<section class="pad" id="why" style="background:var(--paper);">
  <div class="wrap">
    <div class="why-split">
      <div class="why-copy reveal">
        <span class="kicker">Why Scoop Patrol</span>
        <h2>For Families, Busy Schedules and those who need Support</h2>
        ${squiggle()}
        <p class="lead-sm">We started Scoop Patrol because we saw the community needed a helping hand. Especially for those struggling on their own. That's why we do what we do, to keep every space clean and every neighbour supported.</p>
        <ul class="check-list">
          ${points}
        </ul>
        <a href="/about" class="btn btn-green">More about us</a>
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
</section>`;
}

function whereWePatrol() {
  const half = Math.ceil(AREAS.length / 2);
  const col = list => list.map(a =>
    `<li><span class="area-pin" aria-hidden="true">${icons.pin}</span>${a}</li>`).join('\n          ');
  return `<section class="pad" id="areas" style="position:relative;background:var(--paper);">
  <div class="paw-trail" id="trail3"></div>
  <div class="wrap" style="position:relative;z-index:2;">
    ${sectionHead({
      kicker: 'Where we patrol',
      h2: 'Aberdare and the surrounding areas',
      lead: 'If you\'re local to any of these areas, we can likely fit your garden onto a regular route.',
    })}
    <div class="areas-columns reveal-group">
      <ul>
          ${col(AREAS.slice(0, half))}
      </ul>
      <ul>
          ${col(AREAS.slice(half))}
      </ul>
    </div>
    <p class="section-foot muted">Just outside the area? <a class="text-link" href="${WA_LINK}">Message us anyway</a>, we're expanding the round regularly.</p>
  </div>
</section>`;
}

function howToBook() {
  return `<section class="pad tight" id="how-to-book">
  <div class="wrap">
    ${sectionHead({
      kicker: 'How to book',
      h2: 'Getting started takes one message',
      lead: 'Two ways in, depending on what you need.',
    })}
    <div class="book-split reveal-group">
      <div class="book-card">
        <h3>Booking a garden clean</h3>
        <ol>
          <li>Message us or fill in the quote form with your postcode, garden size and number of pets</li>
          <li>Send a photo if you can — it helps us quote fairly, especially for first cleans</li>
          <li>We confirm your price and a first visit date, usually the same day</li>
          <li>Choose weekly, fortnightly or a one-off</li>
        </ol>
      </div>
      <div class="book-card">
        <h3>Booking a collection</h3>
        <ol>
          <li>Tell us roughly how much you need collected and how often</li>
          <li>We confirm a price and a collection day</li>
          <li>Leave your bagged waste out on the day — you don't need to be home</li>
          <li>We collect, dispose of it legally, and you're done</li>
        </ol>
      </div>
    </div>
  </div>
</section>`;
}

function quoteSection() {
  return `<section class="pad" id="quote" style="background:var(--paper);">
  <div class="wrap wrap-form">
    ${sectionHead({
      kicker: 'Get a free quote',
      h2: 'Tell us about your garden',
      lead: 'Fill this in and it opens WhatsApp with your details ready to send. We\'ll come back with a fair price the same day.',
    })}
    ${quoteForm({ id: 'quoteFormHome' })}
  </div>
</section>`;
}

export default page({
  slug: '',
  nav: 'home',
  title: 'Pet Waste Clean-ups & Collections in Aberdare | Scoop Patrol',
  description: 'Weekly, fortnightly and one-off pet waste garden clean-ups and collections across Aberdare and Rhondda Cynon Taf. From £10 per clean. NRW registered.',
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
    hero(),
    trustStrip(),
    pricing(),
    spotTheDifference(),
    reviewsSection(),
    trustBar(),
    whyScoopPatrol(),
    whoWeWorkWith(),
    whatToExpect(),
    whereWePatrol(),
    howToBook(),
    quoteSection(),
    ctaBand(),
  ].join('\n\n'),
});
