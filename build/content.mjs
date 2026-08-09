// Loads editable content from the repo-root content/ directory (JSON files
// managed via the Decap CMS admin at /admin, or hand-edited directly).
import { readFileSync } from 'node:fs';
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
