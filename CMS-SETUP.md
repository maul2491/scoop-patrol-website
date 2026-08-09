# Setting up the content dashboard (Decap CMS)

This gives Myles and Sabrina a login page at `/admin` to edit text, headings,
images, reviews, before/after photos, navigation and the footer, without
touching code. Saving a change there creates a commit to GitHub, which
Cloudflare then rebuilds and deploys automatically, same as pushing from a
laptop.

Three one-time setup steps are needed before `/admin` will actually let
anyone log in. None of them can be done by Claude, they require your own
GitHub and Cloudflare accounts.

## 1. Point Cloudflare at the build script

Right now Cloudflare serves the committed `.html` files as-is; nothing on
Cloudflare's side runs `node build.mjs`. For the dashboard to work, editing a
JSON file needs to regenerate the HTML automatically, so Cloudflare has to
start doing the build:

1. Cloudflare dashboard → Workers & Pages → your site → **Settings → Builds**.
2. Build command: `node build.mjs`
3. Build output directory: `/` (repo root — that's where `build.mjs` writes
   the generated HTML).
4. Save, then trigger a redeploy to confirm it still builds the site
   correctly.

After this, you can stop committing the regenerated `index.html` files
yourself if you want (Cloudflare will always produce them fresh on push), but
leaving them committed doesn't hurt anything either.

## 2. Create a GitHub OAuth App

This is what lets Decap CMS confirm "yes, this is really Myles/Sabrina" via
GitHub login, rather than a separate password system.

1. GitHub → Settings → Developer settings → OAuth Apps → **New OAuth App**.
2. Application name: `Scoop Patrol CMS` (anything recognisable).
3. Homepage URL: your site's domain.
4. Authorization callback URL: `https://<your-worker-subdomain>.workers.dev/callback`
   (you'll get the exact worker URL in step 3 below — come back and fill this
   in once you have it).
5. Save, then generate a **Client Secret**. Keep the Client ID and Client
   Secret somewhere safe, you'll paste them into Cloudflare next, not into
   this repo.

## 3. Deploy the OAuth proxy worker

GitHub's OAuth exchange needs a client secret, which must never sit in
browser-side code. `cms-oauth-worker/worker.js` in this repo is a small,
self-contained Cloudflare Worker that does that exchange server-side. Deploy
it:

1. Cloudflare dashboard → Workers & Pages → **Create → Worker**.
2. Paste the contents of `cms-oauth-worker/worker.js` into the editor (or, if
   you prefer the CLI: `cd cms-oauth-worker && npx wrangler deploy`).
3. Worker → Settings → Variables and Secrets, add:
   - `GITHUB_CLIENT_ID` — plain text, from step 2.
   - `GITHUB_CLIENT_SECRET` — click "Encrypt", from step 2.
4. Note the worker's URL, e.g. `https://scoop-patrol-cms-auth.<you>.workers.dev`.
5. Go back to the GitHub OAuth App from step 2 and set its callback URL to
   `<that worker URL>/callback`.
6. Edit `admin/config.yml` in this repo: replace `REPLACE_OAUTH_WORKER_URL`
   under `backend.base_url` with the worker's URL (no trailing slash, no
   `/callback`). Commit and push.

## Using it

Once all three steps are done, visit `yourdomain.co.uk/admin`, log in with
GitHub, and edit away. Changes to reviews, before/after photos, navigation,
footer links, and the homepage hero/why-us/areas text are all live-editable.
Everything else (pricing tables, FAQ answers, legal pages, service page copy)
is still code-only for now, ping a future Claude Code session to wire up any
of those the same way if it'd help.

Image uploads go into `assets/` and are used at whatever size/format they're
uploaded in, they won't automatically get the WebP + resize treatment the
original launch photos went through. If a photo looks huge or slow, resize it
before uploading (any online image compressor, aim under ~300KB).
