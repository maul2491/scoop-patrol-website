// Static site generator for scooppatrolaberdare.
//
//   node build.mjs
//
// Writes plain static HTML into the repo root, so Cloudflare serves the output
// directly with no build step configured on their side. Edit files in build/,
// never the generated *.html — regenerating overwrites them.

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { SITE } from './build/site.mjs';
import home from './build/pages/home.mjs';
import { servicesIndex, pricing, gardenCleans, petWasteCollection } from './build/pages/services.mjs';
import { commercial, faq, contact } from './build/pages/pages.mjs';
// `about` is deliberately not built. It was dropped from pages.mjs during the
// CMS content migration (2026-08-12) rather than converted, since it's
// pending a full redesign anyway — see git history to resurrect the old
// version. Not linked from nav/footer/home; /about redirects to / via
// _redirects in the meantime.
import { privacyPolicy, cookiePolicy, terms } from './build/pages/legal.mjs';
import { genericPage } from './build/pages/generic.mjs';
import { loadPagesDir } from './build/content.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));

// slug -> html, plus sitemap priority/changefreq
const PAGES = [
  ['', home, 1.0],
  ['services', servicesIndex, 0.7],
  ['services/pricing', pricing, 0.9],
  ['services/garden-cleans', gardenCleans, 0.9],
  ['services/pet-waste-collection', petWasteCollection, 0.9],
  ['commercial', commercial, 0.8],
  ['faq', faq, 0.7],
  ['contact', contact, 0.8],
  ['privacy-policy', privacyPolicy, 0.2],
  ['terms', terms, 0.2],
  ['cookie-policy', cookiePolicy, 0.2],
];

// Generic pages created/duplicated from /admin (content/pages/*.json), each
// rendered through build/pages/generic.mjs's block palette. Slugs are
// checked against the hardcoded pages above so a new page can't silently
// clobber a real one.
//
// The CMS field hints editors to use "letters, numbers, hyphens only", but
// nothing stops someone typing "Summer Offer!" by hand — normalise here so a
// stray space/capital/leading-slash can't produce a broken or duplicate URL.
function normalizeSlug(raw) {
  return String(raw).trim().toLowerCase()
    .replace(/^\/+|\/+$/g, '')
    .replace(/[^a-z0-9/]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '');
}

const RESERVED_SLUGS = new Set(PAGES.map(([slug]) => slug));
for (const data of loadPagesDir()) {
  if (!data.slug) {
    console.warn(`  ⚠  content/pages/*.json entry with no slug, skipping: ${data.title || '(untitled)'}`);
    continue;
  }
  data.slug = normalizeSlug(data.slug);
  if (!data.slug) {
    console.warn(`  ⚠  content/pages/*.json entry has a slug that normalises to empty, skipping: ${data.title || '(untitled)'}`);
    continue;
  }
  if (RESERVED_SLUGS.has(data.slug)) {
    console.warn(`  ⚠  content/pages entry "${data.slug}" collides with a built-in page, skipping.`);
    continue;
  }
  PAGES.push([data.slug, genericPage(data), data.priority || 0.5]);
  RESERVED_SLUGS.add(data.slug);
}

function write(relPath, contents) {
  const full = join(ROOT, relPath);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, contents, 'utf8');
  return contents.length;
}

let total = 0;
for (const [slug, html] of PAGES) {
  const out = slug ? `${slug}/index.html` : 'index.html';
  const bytes = write(out, html);
  total += bytes;
  console.log(`  ${out.padEnd(44)} ${(bytes / 1024).toFixed(1)} KB`);
}

// --- sitemap.xml -----------------------------------------------------------
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(([slug, , priority]) => `  <url>
    <loc>${SITE.origin}/${slug}${slug ? '/' : ''}</loc>
    <lastmod>${today}</lastmod>
    <priority>${priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>
`;
write('sitemap.xml', sitemap);
console.log('  sitemap.xml');

// --- robots.txt ------------------------------------------------------------
write('robots.txt', `User-agent: *
Allow: /

Sitemap: ${SITE.origin}/sitemap.xml
`);
console.log('  robots.txt');

// --- _redirects ------------------------------------------------------------
// URLs from the previous single-page and area-page structure. Kept so anything
// already shared on Facebook or WhatsApp still lands somewhere sensible.
write('_redirects', `# Old structure -> new. See build.mjs.
/pricing                  /services/pricing                      301
/cat-litter-collection    /services/pet-waste-collection#cat-litter  301
/bag-collection-only      /services/pet-waste-collection         301
/areas                    /#areas                                301
/areas/*                  /#areas                                301

# /about is temporarily hidden pending a redesign, not a permanent removal.
/about                     /                                      302
/about/                    /                                      302
`);
console.log('  _redirects');

console.log(`\n${PAGES.length} pages, ${(total / 1024).toFixed(0)} KB of HTML.`);

if (SITE.origin.includes('REPLACE_DOMAIN')) {
  console.log('\n  ⚠  SITE.origin is still a placeholder. Canonicals, schema @id and');
  console.log('     sitemap URLs are not live-ready until it is set in build/site.mjs.');
}
