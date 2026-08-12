// Loads editable content from the repo-root content/ directory (JSON files
// managed via the Decap CMS admin at /admin, or hand-edited directly).
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

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

export function loadPagesDir() {
  const dir = join(CONTENT_DIR, 'pages');
  let files;
  try {
    files = readdirSync(dir).filter(f => f.endsWith('.json'));
  } catch {
    return [];
  }
  return files.map(f => JSON.parse(readFileSync(join(dir, f), 'utf8')));
}

// Converts editor-friendly plain text into HTML for CMS-authored body copy.
// No markdown dependency by design (see HANDOFF.md — no npm deps in build/):
//   - a blank line starts a new paragraph
//   - a line starting "- " starts a bullet list (each following "- " line is
//     another item)
//   - a block that already starts with a block-level tag (<table>, <ul>,
//     <h2>, etc) passes through untouched, for hand-written HTML like the
//     legal pages' data tables
//   - inline HTML (<a>, <strong>, <mark>...) always passes through as typed
export function richText(str) {
  if (!str) return '';
  const blocks = String(str).trim().split(/\n\s*\n/);
  return blocks.map(block => {
    const trimmed = block.trim();
    if (!trimmed) return '';
    if (/^<table/i.test(trimmed)) return `<div class="table-scroll">\n${trimmed}\n</div>`;
    if (/^<(ul|ol|div|h[1-6]|section|blockquote|nav)/i.test(trimmed)) return trimmed;
    if (/^-\s+/.test(trimmed)) {
      const items = trimmed.split('\n').map(l => l.replace(/^-\s+/, '').trim()).filter(Boolean);
      return `<ul>\n${items.map(i => `  <li>${i}</li>`).join('\n')}\n</ul>`;
    }
    return `<p>${trimmed.replace(/\n/g, '<br>')}</p>`;
  }).filter(Boolean).join('\n');
}
