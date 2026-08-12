// Legal pages, transcribed from scoop-patrol-legal-policies.md, now editable
// via /admin (content/legal.json). Unresolved values are rendered via the
// todo-token mark so they stay visually obvious and greppable, nothing here
// is invented — editors should only overwrite a mark once the real value
// (email, business address, legal structure, ICO number) exists.
import { page, pageHero, ctaBand, SITE } from '../site.mjs';
import { legal as C, richText } from '../content.mjs';

const HOME = { name: 'Home', href: '/' };

const updated = `<p class="legal-updated">Last updated: ${SITE.legalUpdated}</p>`;

function legalPage({ slug, navTitle, title, description, h1, kicker, sections, toc }) {
  const body = sections.map((s, i) => {
    const anchor = toc ? ` id="term-${i + 1}"` : '';
    const num = toc ? `<span class="term-num">${i + 1}.</span> ` : '';
    return `      <h2${anchor}>${num}${s.heading}</h2>\n      ${richText(s.body)}`;
  }).join('\n\n');

  return page({
    slug,
    nav: null,
    title,
    description,
    trail: [HOME, { name: navTitle, href: `/${slug}` }],
    body: [
      pageHero({
        trail: [HOME, { name: navTitle, href: `/${slug}` }],
        kicker,
        h1,
      }),
      `<section class="pad" style="background:var(--paper);">
  <div class="wrap wrap-narrow">
    ${updated}
    ${toc || ''}
    <div class="prose legal-prose">
${body}
    </div>
  </div>
</section>`,
      ctaBand(),
    ].join('\n\n'),
  });
}

// ---------------------------------------------------------------------------
// /privacy-policy
// ---------------------------------------------------------------------------

export const privacyPolicy = legalPage({
  slug: 'privacy-policy',
  navTitle: 'Privacy Policy',
  title: 'Privacy Policy, Scoop Patrol Aberdare',
  description: 'How Scoop Patrol Aberdare collects, uses and protects your personal information.',
  kicker: 'Legal',
  h1: 'Privacy Policy',
  sections: C.privacyPolicy.sections,
});

// ---------------------------------------------------------------------------
// /cookie-policy
// ---------------------------------------------------------------------------

export const cookiePolicy = legalPage({
  slug: 'cookie-policy',
  navTitle: 'Cookie Policy',
  title: 'Cookie Policy, Scoop Patrol Aberdare',
  description: 'Scoop Patrol Aberdare uses no tracking or advertising cookies. Here\'s what we do use, and why there\'s no cookie banner.',
  kicker: 'Legal',
  h1: 'Cookie Policy',
  sections: C.cookiePolicy.sections,
});

// ---------------------------------------------------------------------------
// /terms
// ---------------------------------------------------------------------------

const termsToc = `<nav class="legal-toc" aria-label="On this page">
      <h2>On this page</h2>
      <ol>
        ${C.terms.sections.map((s, i) => `<li><a href="#term-${i + 1}">${s.heading}</a></li>`).join('\n        ')}
      </ol>
    </nav>`;

export const terms = legalPage({
  slug: 'terms',
  navTitle: 'Terms & Conditions',
  title: 'Terms & Conditions, Scoop Patrol Aberdare',
  description: 'The terms that apply when you book pet waste garden clean-ups or collections with Scoop Patrol Aberdare.',
  kicker: 'Legal',
  h1: 'Terms & Conditions',
  toc: termsToc,
  sections: C.terms.sections,
});
