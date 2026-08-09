// Minimal GitHub OAuth proxy for Decap CMS, deployed as a Cloudflare Worker.
//
// Decap CMS's "github" backend needs somewhere to run the OAuth Authorization
// Code exchange (GitHub requires a client SECRET for this step, which must
// never be shipped to the browser). This worker is that somewhere. It knows
// no site-specific logic beyond the two endpoints below.
//
// Deploy: Cloudflare dashboard -> Workers & Pages -> Create Worker -> paste
// this file -> Settings -> Variables -> add GITHUB_CLIENT_ID (plain) and
// GITHUB_CLIENT_SECRET (encrypted). Then set admin/config.yml's `base_url`
// to this worker's URL (e.g. https://scoop-patrol-cms-auth.<subdomain>.workers.dev).
// See HANDOFF.md for the full walkthrough, including creating the GitHub
// OAuth App this worker authenticates against.

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/auth') {
      const authorizeUrl = new URL('https://github.com/login/oauth/authorize');
      authorizeUrl.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
      authorizeUrl.searchParams.set('redirect_uri', `${url.origin}/callback`);
      authorizeUrl.searchParams.set('scope', 'repo,user');
      return Response.redirect(authorizeUrl.toString(), 302);
    }

    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      if (!code) return new Response('Missing code', { status: 400 });

      const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code,
        }),
      });
      const tokenData = await tokenRes.json();

      if (!tokenData.access_token) {
        return new Response(`OAuth error: ${tokenData.error_description || 'no access_token returned'}`, { status: 400 });
      }

      // Hands the token back to the Decap CMS popup via postMessage, per the
      // protocol Decap's github backend expects from an auth provider.
      const payload = JSON.stringify({ token: tokenData.access_token, provider: 'github' });
      const html = `<!DOCTYPE html><html><body>
<script>
(function () {
  function receiveMessage(e) {
    window.opener.postMessage('authorization:github:success:${payload}', e.origin);
    window.removeEventListener('message', receiveMessage, false);
  }
  window.addEventListener('message', receiveMessage, false);
  window.opener.postMessage('authorizing:github', '*');
})();
</script>
You can close this window.
</body></html>`;
      return new Response(html, { headers: { 'Content-Type': 'text/html' } });
    }

    return new Response('Scoop Patrol CMS auth proxy. Nothing to see at this URL.', { status: 404 });
  },
};
