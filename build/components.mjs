// Reusable page sections shared across more than one page.
import { icons, AREAS, WA_LINK, TEL_LINK, SITE, NRW_SHORT } from './site.mjs';
import { reviews as REVIEWS, beforeAfter as BEFORE_AFTER } from './content.mjs';

export function squiggle() {
  return `<svg class="squiggle" viewBox="0 0 72 10" width="72" height="10" aria-hidden="true"><path d="M2 6 Q8 1 14 6 T26 6 T38 6 T50 6 T62 6" fill="none" stroke="#3F8F29" stroke-width="2.4" stroke-linecap="round"/></svg>`;
}

export function sectionHead({ kicker, h2, lead, center = false, level = 2 }) {
  return `<div class="section-head${center ? ' section-head-center' : ''} reveal">
      ${kicker ? `<span class="kicker">${kicker}</span>` : ''}
      <h${level}>${h2}</h${level}>
      ${squiggle()}
      ${lead ? `<p>${lead}</p>` : ''}
    </div>`;
}

// --- Trust strip: eight signals (plan §6.2) --------------------------------

const TRUST_SIGNALS = [
  { icon: icons.leaf, label: NRW_SHORT },
  { icon: icons.shield, label: 'Fully insured' },
  { icon: icons.badgeCheck, label: 'DBS checked' },
  { icon: icons.catdog, label: 'Pet-safe products' },
  { icon: icons.unlock, label: 'No contracts required' },
  { icon: icons.clock, label: 'Same-day quotes' },
  { icon: icons.weather, label: 'All year round, rain or shine' },
  { icon: icons.pin, label: 'Local business, serving our own valley' },
];

export function trustStrip() {
  const items = TRUST_SIGNALS.map(s =>
    `<li class="trust-signal"><span class="trust-signal-ic">${s.icon}</span><span>${s.label}</span></li>`
  ).join('\n      ');
  return `<section class="trust-strip-band">
  <div class="wrap">
    <ul class="trust-strip reveal-group">
      ${items}
    </ul>
  </div>
</section>`;
}

// --- Trust bar: slim navy strip (plan §6.6) --------------------------------

export function trustBar() {
  return `<section class="pad trust-band" style="padding:56px 0;">
  <div class="wrap">
    <div class="trust-bar">
      <div class="trust-item reveal">
        <span class="trust-ic">📸</span>
        <div><b>Photos help us quote fairly</b><span>Send a snap for an accurate price</span></div>
      </div>
      <div class="trust-item reveal">
        <span class="trust-ic">🌿</span>
        <div><b>Waste taken away, always</b><span>${NRW_SHORT}</span></div>
      </div>
      <div class="trust-item reveal">
        <span class="trust-ic trust-ic-svg">${icons.catdog}</span>
        <div><b>Pet-safe &amp; biodegradable</b><span>Kind to gardens, pets and the planet</span></div>
      </div>
    </div>
  </div>
</section>`;
}

// --- Pricing grids (plan §6.3) ---------------------------------------------

const WEEKLY = [
  ['🏡', 'Small garden, 1 pet', 'From £10'],
  ['🏡', 'Small garden, 2 pets', 'From £12'],
  ['🏠', 'Medium garden, 1 pet', 'From £12'],
  ['🏠', 'Medium garden, 2 pets', 'From £15'],
  ['🌳', 'Larger gardens, multiple pets or trickier areas', 'From £18'],
];

const FORTNIGHTLY = [
  ['🏡', 'Small garden, 1 pet', '£12 – £15'],
  ['🏡', 'Small garden, 2 pets', '£15 – £18'],
  ['🏠', 'Medium garden, 1 pet', '£15 – £18'],
  ['🏠', 'Medium garden, 2 pets', 'From £20'],
  ['🌳', 'Larger gardens, multiple pets or trickier areas', 'From £25'],
];

// Derived from the two grids above rather than hardcoded a third time, so
// the garden-clean Service schema (home.mjs, services.mjs) can't drift out
// of sync with what the pricing tables actually show.
export const GARDEN_CLEAN_PRICE_RANGE = (() => {
  const nums = [...WEEKLY, ...FORTNIGHTLY]
    .flatMap(([, , tag]) => [...tag.matchAll(/£(\d+)/g)].map(m => Number(m[1])));
  return {
    low: String(Math.min(...nums)),
    high: String(Math.max(...nums)),
    offerCount: String(WEEKLY.length + FORTNIGHTLY.length),
  };
})();

function priceCards(rows) {
  const cards = rows.map(([ic, label, tag]) =>
    `<div class="price-card"><span class="label"><span class="tier-ic" aria-hidden="true">${ic}</span>${label}</span><span class="tag">${tag}</span></div>`
  ).join('\n        ');
  // Collections card fills the previously-empty bottom-right slot
  const collections = `<a class="price-card price-card-link" href="/services/pet-waste-collection">
          <span class="label"><span class="tier-ic" aria-hidden="true">🗑️</span><strong>Collections</strong><br><span class="price-card-sub">You bag it, we take it away.</span></span>
          <span class="tag">From £10</span>
        </a>`;
  return `${cards}\n        ${collections}`;
}

export function pricingTabs() {
  return `<div class="price-tabs" role="tablist" aria-label="Visit frequency">
      <button class="tab-btn active" data-tab="weekly" role="tab" aria-selected="true" aria-controls="weekly" id="tab-weekly">Weekly clean-ups</button>
      <button class="tab-btn" data-tab="fortnightly" role="tab" aria-selected="false" aria-controls="fortnightly" id="tab-fortnightly">Fortnightly clean-ups</button>
    </div>

    <div class="price-panel active" id="weekly" role="tabpanel" aria-labelledby="tab-weekly">
      <div class="price-cards">
        ${priceCards(WEEKLY)}
      </div>
    </div>
    <div class="price-panel" id="fortnightly" role="tabpanel" aria-labelledby="tab-fortnightly">
      <div class="price-cards">
        ${priceCards(FORTNIGHTLY)}
      </div>
    </div>`;
}

export function priceNote() {
  return `<div class="price-note">
      🧾 <strong>First cleans</strong> usually start from £20, depending on build-up, long grass, decking, stones, slate or artificial grass. <strong>Bag collection only</strong> starts from £10, standard black bag £12–£15, larger bags and bins quoted individually.
    </div>`;
}

// --- Before / after comparison slider (plan §6.4) ---------------------------
// Pairs are edited via /admin (content/before-after.json). One pair renders as
// a single drag slider; more than one becomes a carousel of drag sliders.

function img(src, srcWebp, alt) {
  if (!srcWebp) return `<img src="${src}" alt="${alt}" width="1000" height="667" loading="lazy" decoding="async">`;
  return `<picture>
          <source srcset="${srcWebp}" type="image/webp">
          <img src="${src}" alt="${alt}" width="1000" height="667" loading="lazy" decoding="async">
        </picture>`;
}

function compareSlide(pair) {
  return `<li class="compare-slide">
        <div class="compare-slider" data-compare-slider>
          <div class="compare-layer after-layer">
            ${img(pair.after, pair.afterWebp, pair.afterAlt || '')}
          </div>
          <div class="compare-layer before-layer" data-before-layer>
            ${img(pair.before, pair.beforeWebp, pair.beforeAlt || '')}
          </div>
          <span class="compare-tag-float before-tag">Before</span>
          <span class="compare-tag-float after-tag">After</span>
          <div class="compare-handle" data-compare-handle>
            <div class="compare-handle-btn" data-compare-handle-btn tabindex="0" role="slider"
                 aria-label="Drag to compare the garden before and after a clean" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">⟷</div>
          </div>
        </div>
        <p class="compare-cap">Drag the handle to compare</p>
      </li>`;
}

export function compareSlider(pairs = BEFORE_AFTER) {
  if (!pairs.length) return '';
  return `<div class="carousel reveal" data-carousel>
      <ul class="carousel-track carousel-track-single" data-carousel-track>
        ${pairs.map(compareSlide).join('\n        ')}
      </ul>
      <div class="carousel-controls">
        <button class="carousel-btn" data-carousel-prev aria-label="Previous photo">‹</button>
        <div class="carousel-dots" data-carousel-dots></div>
        <button class="carousel-btn" data-carousel-next aria-label="Next photo">›</button>
      </div>
    </div>`;
}

// --- Reviews (plan §6.5) ----------------------------------------------------
// Genuine 5-star ratings left on external platforms, edited via /admin
// (content/reviews.json). Displayed only, no Review or AggregateRating
// schema, deliberately (see plan §6.5).

function reviewCard(r) {
  const platformIcon = r.platform === 'Google' ? icons.google : icons.facebook;
  return `<li class="review-card">
          <div class="review-stars" role="img" aria-label="5 out of 5 stars">${icons.star.repeat(5)}</div>
          <p>“${r.text}”</p>
          <div class="review-who">
            <span class="review-avatar" aria-hidden="true">${r.name[0]}</span>
            <div>
              <b>${r.name}</b>
              <span class="review-platform">${platformIcon} ${r.platform} review</span>
            </div>
          </div>
        </li>`;
}

export function reviewsSection({
  kicker = 'What customers say',
  h2 = 'Trusted by dog owners across The Valleys',
} = {}) {
  return `<section class="pad" style="background:var(--paper);">
  <div class="wrap">
    ${sectionHead({ kicker, h2 })}
    <div class="carousel reveal" data-carousel>
      <ul class="carousel-track" data-carousel-track>
        ${REVIEWS.map(reviewCard).join('\n        ')}
      </ul>
      <div class="carousel-controls">
        <button class="carousel-btn" data-carousel-prev aria-label="Previous review">‹</button>
        <div class="carousel-dots" data-carousel-dots></div>
        <button class="carousel-btn" data-carousel-next aria-label="Next review">›</button>
      </div>
    </div>
  </div>
</section>`;
}

// --- Who we work with (plan §6.8) ------------------------------------------

const SECTORS = [
  ['🏡', 'Homeowners'],
  ['🔑', 'Landlords'],
  ['🐕', 'Dog daycare'],
  ['🌳', 'Dog walking fields'],
  ['✂️', 'Pet groomers'],
  ['🐾', 'Dog breeders'],
];

export function whoWeWorkWith({
  kicker = 'Who we work with',
  h2 = 'From family gardens to commercial sites',
  lead = 'Whether it\'s a family garden or a commercial site, we clean and collect all year round.',
} = {}) {
  const cards = SECTORS.map(([ic, label]) =>
    `<li class="who-card"><span class="who-ic" aria-hidden="true">${ic}</span><span>${label}</span></li>`
  ).join('\n      ');
  return `<section class="pad tight">
  <div class="wrap">
    ${sectionHead({ kicker, h2, lead })}
    <ul class="who-grid reveal-group">
      ${cards}
    </ul>
    <p class="section-foot"><a class="text-link" href="/commercial">See our commercial services →</a></p>
  </div>
</section>`;
}

// --- What to expect: four steps (plan §6.9) --------------------------------

const STEPS = [
  ['01', 'Arrival and Greeting', 'We always knock and say hi before we begin so you know we\'re here.'],
  ['02', 'Waste Cleared', 'We carefully remove all pet waste to leave your garden clean and ready across lawn, patio, decking and artificial grass alike.'],
  ['03', 'Pet-Safe Sanitising', 'We treat the area with our pet-safe deodorising and sanitising spray to help remove germs, reduce the risk of infection and keep your garden fresh.'],
  ['04', 'Fresh Finish', 'All waste is removed, the area is fresh and clean and you can enjoy your garden worry-free.'],
];

export function whatToExpect({
  heading = true,
  kicker = 'What to expect',
  h2 = 'Simple and easy for you, whether cleaning or collecting',
  lead = 'Just contact us, get a price, make an appointment and we\'re on patrol!',
} = {}) {
  const steps = STEPS.map(([n, h, p]) =>
    `<div class="step"><div class="step-num">${n}</div><h3>${h}</h3><p>${p}</p></div>`
  ).join('\n      ');
  return `<section class="pad" id="what-to-expect">
  <div class="wrap">
    ${heading ? sectionHead({ kicker, h2, lead }) : ''}
    <div class="steps steps-4 reveal-group">
      ${steps}
    </div>
  </div>
</section>`;
}

// --- Quote form (plan §9) ---------------------------------------------------

const SELECTS = {
  location: [...AREAS, 'Somewhere else nearby'],
  need: ['Garden clean', 'Collection', 'Not sure yet'],
  gardenSize: ['Small', 'Medium', 'Larger', 'Not sure'],
  count: ['0', '1', '2', '3', '4+'],
  frequency: ['Weekly', 'Fortnightly', 'One-off'],
  bags: ['1–2 bags', '3–5 bags', '6+ bags / a bin', 'Not sure'],
  source: ['Google', 'Facebook', 'Recommendation', 'Saw the van/flyer', 'Other'],
};

function select(id, label, options, required, placeholder = 'Please choose…') {
  const opts = options.map(o => `<option value="${o}">${o}</option>`).join('');
  return `<div class="field">
        <label for="${id}">${label}${required ? ' <span class="req" aria-hidden="true">*</span>' : ''}</label>
        <select id="${id}" name="${id}"${required ? ' required' : ''}>
          <option value="" disabled selected>${placeholder}</option>
          ${opts}
        </select>
        <p class="field-error" data-error-for="${id}" hidden></p>
      </div>`;
}

function input(id, label, type, required, attrs = '', hint = '') {
  return `<div class="field">
        <label for="${id}">${label}${required ? ' <span class="req" aria-hidden="true">*</span>' : ''}</label>
        <input type="${type}" id="${id}" name="${id}"${required ? ' required' : ''} ${attrs}>
        ${hint ? `<p class="field-hint">${hint}</p>` : ''}
        <p class="field-error" data-error-for="${id}" hidden></p>
      </div>`;
}

function textarea(id, label, required, hint = '', rows = 4) {
  return `<div class="field">
        <label for="${id}">${label}${required ? ' <span class="req" aria-hidden="true">*</span>' : ''}</label>
        <textarea id="${id}" name="${id}" rows="${rows}"${required ? ' required' : ''}></textarea>
        ${hint ? `<p class="field-hint">${hint}</p>` : ''}
        <p class="field-error" data-error-for="${id}" hidden></p>
      </div>`;
}

// Progressive-disclosure branches: only the fields for the chosen "What do you
// need?" answer are shown (and required), toggled client-side in site.js by
// data-need-branch / data-need value. Each branch starts hidden.
export function quoteForm({ id = 'quoteForm' } = {}) {
  return `<form class="quote-form" id="${id}" novalidate>
      <div class="form-grid">
        ${input('name', 'Your name', 'text', true, 'autocomplete="name"')}
        ${input('phone', 'Phone number', 'tel', true, 'autocomplete="tel"')}
        ${input('email', 'Email', 'email', false, 'autocomplete="email"', 'Optional')}
        ${select('location', 'Your area', SELECTS.location, true)}
        ${input('postcode', 'Postcode', 'text', true, 'maxlength="8" autocomplete="postal-code"', 'The first part is enough, e.g. CF44')}
        ${select('need', 'What do you need?', SELECTS.need, true)}
      </div>

      <div class="form-grid form-branch" data-need-branch="Garden clean" hidden>
        ${select('gardenSize', 'Garden size', SELECTS.gardenSize, true)}
        ${select('dogs', 'Number of dogs', SELECTS.count, true)}
        ${select('frequency', 'How often?', SELECTS.frequency, true)}
      </div>

      <div class="form-grid form-branch" data-need-branch="Collection" hidden>
        ${select('bags', 'Number of bags', SELECTS.bags, true)}
        ${select('collectionFrequency', 'How often?', SELECTS.frequency, true)}
        ${input('collectionSpecifics', 'Collection specifics', 'text', false, 'maxlength="160"', 'e.g. where to find them, loose or bagged. Optional')}
      </div>

      <div class="form-grid form-grid-wide form-branch" data-need-branch="Not sure yet" hidden>
        ${textarea('unsureDetails', 'Tell us a bit about what you need', true, 'No need to know exactly, just a rough idea is fine.')}
      </div>

      <div class="form-grid form-grid-wide">
        <div class="field">
          <label for="notes">Anything else we should know?</label>
          <textarea id="notes" name="notes" rows="4" maxlength="500"></textarea>
          <p class="field-hint"><span data-char-count>0</span>/500 characters</p>
        </div>
        ${select('source', 'How did you hear about us?', SELECTS.source, false, 'Optional')}
        <div class="field" data-source-other hidden>
          <label for="sourceOther">Where did you hear about us?</label>
          <input type="text" id="sourceOther" name="sourceOther" maxlength="80">
        </div>
      </div>

      <p class="form-photo-note">📷 Send us a photo of your garden on WhatsApp once you've submitted, it helps us quote fairly, especially for first cleans.</p>

      <div class="field field-consent">
        <label class="consent">
          <input type="checkbox" id="consent" name="consent" required>
          <span>I'm happy for Scoop Patrol to contact me about my quote. <a href="/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a> <span class="req" aria-hidden="true">*</span></span>
        </label>
        <p class="field-error" data-error-for="consent" hidden></p>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn btn-green" data-analytics="quote-form-submit">${icons.whatsapp} Send via WhatsApp</button>
        <a href="${TEL_LINK}" class="btn btn-outline">${icons.phone} Call us instead</a>
      </div>
      <p class="form-fallback">No WhatsApp? Give us a ring on <a href="${TEL_LINK}">${SITE.phoneDisplay}</a> and we'll take your details over the phone.</p>
      <p class="form-status" data-form-status role="status" aria-live="polite" hidden></p>
    </form>`;
}
