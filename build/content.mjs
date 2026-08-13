// Loads editable content from the repo-root content/ directory (JSON files
// managed via the Decap CMS admin at /admin, or hand-edited directly).
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from './vendor/marked.mjs';

// Vendored rather than an npm dependency (see build/vendor/marked.mjs header
// for why, and HANDOFF.md) — a single self-contained file, no `npm install`
// needed either on this machine or in Cloudflare's build step.
// breaks:true matches the plain-text convention CMS fields were already
// authored with: a single newline inside a paragraph becomes <br>, not just
// a soft wrap, so existing content renders unchanged.
marked.setOptions({ breaks: true, gfm: true });

const CONTENT_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'content');

function load(name) {
  return JSON.parse(readFileSync(join(CONTENT_DIR, `${name}.json`), 'utf8'));
}

export const reviews = load('reviews').reviews;
export const beforeAfter = load('before-after').pairs;
export const nav = load('nav');
export const footerContent = load('footer');
export const homepage = load('homepage');
export const services = load('services');
export const commercial = load('commercial');
export const faq = load('faq');
export const contact = load('contact');
export const legal = load('legal');

// Returns {data, file} pairs — `file` is the repo-relative path, needed so
// build.mjs can look up each page's own git history for its sitemap lastmod.
export function loadPagesDir() {
  const dir = join(CONTENT_DIR, 'pages');
  let files;
  try {
    files = readdirSync(dir).filter(f => f.endsWith('.json'));
  } catch {
    return [];
  }
  return files.map(f => ({
    data: JSON.parse(readFileSync(join(dir, f), 'utf8')),
    file: `content/pages/${f}`,
  }));
}

// Renders CMS-authored body copy (real markdown: **bold**, [links](url),
// blank line = new paragraph, "- " = bullet list, # for headings) to HTML.
// Raw HTML blocks (the legal pages' <table> data tables, stray <h3>s) pass
// through untouched, per CommonMark's normal handling of embedded HTML.
export function richText(str) {
  if (!str) return '';
  return marked.parse(String(str)).trim();
}
