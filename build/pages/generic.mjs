// Generic pages, created and duplicated from /admin as files in content/pages/
// (a Decap CMS folder collection — "Duplicate entry" clones one as a starting
// point). Each file assembles a page from a small block palette rather than
// bespoke code, so a new page needs no developer involvement. Existing
// bespoke pages (services, commercial, FAQ, legal...) are NOT built this way,
// their layouts are too specific for a generic palette to reproduce.
import { page, pageHero, ctaBand } from '../site.mjs';
import { sectionHead, squiggle } from '../components.mjs';
import { richText } from '../content.mjs';

const HOME = { name: 'Home', href: '/' };

function richTextBlock(b) {
  return `<section class="pad tight">
  <div class="wrap wrap-narrow">
    ${b.heading ? sectionHead({ h2: b.heading }) : ''}
    <div class="prose">
      ${richText(b.body)}
    </div>
  </div>
</section>`;
}

function imageTextBlock(b) {
  const imgSide = b.imagePosition === 'left' ? 'order:-1' : '';
  return `<section class="pad tight" style="background:var(--paper);">
  <div class="wrap">
    <div class="why-split">
      <div class="why-copy reveal">
        ${b.heading ? `<h2>${b.heading}</h2>${squiggle()}` : ''}
        <div class="prose">${richText(b.body)}</div>
      </div>
      <div class="why-art reveal" style="${imgSide}">
        <picture>
          <img src="${b.image}" alt="${b.imageAlt || ''}" width="1200" height="900" loading="lazy" decoding="async" style="border-radius:26px;width:100%;height:auto;display:block;">
        </picture>
      </div>
    </div>
  </div>
</section>`;
}

function faqListBlock(b) {
  return `<section class="pad tight" style="background:var(--paper);">
  <div class="wrap wrap-narrow">
    ${b.heading ? sectionHead({ h2: b.heading }) : ''}
    <div class="faq-list">
      ${(b.items || []).map(item => `<div class="faq-item"><h3>${item.q}</h3><p>${item.a}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>`;
}

function ctaBlock(b) {
  return ctaBand({ eyebrow: b.eyebrow, heading: b.heading, body: b.body });
}

const RENDERERS = {
  richText: richTextBlock,
  imageText: imageTextBlock,
  faqList: faqListBlock,
  cta: ctaBlock,
};

export function genericPage(data) {
  const trail = [HOME, { name: data.title, href: `/${data.slug}` }];
  return page({
    slug: data.slug,
    nav: null,
    title: data.title,
    description: data.description || '',
    trail,
    body: [
      pageHero({
        trail,
        kicker: data.hero?.kicker,
        h1: data.hero?.h1 || data.title,
        lead: data.hero?.lead,
      }),
      ...(data.blocks || []).map(b => {
        const render = RENDERERS[b.type];
        return render ? render(b) : '';
      }),
      ctaBand(),
    ].join('\n\n'),
  });
}
