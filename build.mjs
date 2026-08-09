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
// `about` is deliberately not imported/built — the page exists in
// build/pages/pages.mjs but is hidden pending a redesign (not in PAGES below,
// not linked from nav/footer/home, /about redirects to / via _redirects).
import { privacyPolicy, cookiePolicy, terms } from './build/pages/legal.mjs';

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
`);
console.log('  _redirects');

console.log(`\n${PAGES.length} pages, ${(total / 1024).toFixed(0)} KB of HTML.`);

if (SITE.origin.includes('REPLACE_DOMAIN')) {
  console.log('\n  ⚠  SITE.origin is still a placeholder. Canonicals, schema @id and');
  console.log('     sitemap URLs are not live-ready until it is set in build/site.mjs.');
}
