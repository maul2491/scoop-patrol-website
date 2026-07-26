// Legal pages, transcribed from scoop-patrol-legal-policies.md.
// Unresolved values are rendered via todo() so they are visually obvious and
// greppable, nothing here is invented.
import { page, pageHero, ctaBand, SITE, TEL_LINK } from '../site.mjs';

const HOME = { name: 'Home', href: '/' };

// Renders an unfilled placeholder from the source document.
const todo = label => `<mark class="todo-token" title="Placeholder, replace before publishing">[${label}]</mark>`;

const EMAIL = todo('EMAIL ADDRESS');
const ADDRESS = todo('BUSINESS ADDRESS');
const STRUCTURE = todo('LEGAL STRUCTURE');
const ICO = todo('ICO REGISTRATION NUMBER');

const updated = `<p class="legal-updated">Last updated: ${SITE.legalUpdated}</p>`;

function legalPage({ slug, navTitle, title, description, h1, kicker, body, toc }) {
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
  body: `
      <h2>Who we are</h2>
      <p>Scoop Patrol Aberdare (“we”, “us”, “our”) is ${STRUCTURE}, providing pet waste garden clean-ups and collections across Rhondda Cynon Taf.</p>
      <p>We are the data controller for the personal information described in this policy.</p>
      <p><strong>Contact us about anything in this policy:</strong><br>
      Email: ${EMAIL}<br>
      Phone / WhatsApp: <a href="${TEL_LINK}">${SITE.phoneDisplay}</a><br>
      Post: ${ADDRESS}</p>
      <p>We are registered with the Information Commissioner's Office, registration number ${ICO}.</p>

      <h2>What we collect, and when</h2>
      <h3>When you use our quote form</h3>
      <p>Your name, phone number, email address (if you give one), your location and postcode, the service you're asking about, garden size, number of dogs and cats, how often you'd like us to visit, any access details you share, anything you write in the additional information box, and how you heard about us.</p>
      <h3>When you message us on WhatsApp or call us</h3>
      <p>Your phone number, your name, and whatever you tell us in the conversation. WhatsApp messages are handled through WhatsApp itself. See “Messaging us on WhatsApp” below.</p>
      <h3>When you become a customer</h3>
      <p>The above, plus your address, your visit schedule, what we did on each visit, and a record of payments.</p>
      <h3>When you visit our website</h3>
      <p>Anonymous, aggregated statistics only: pages viewed, roughly where in the world visitors are, what device they used, and which site referred them. We don't use tracking cookies and we can't identify you from this. Full detail is in our <a class="text-link" href="/cookie-policy">Cookie Policy</a>.</p>
      <h3>Photos</h3>
      <p>If you send us a photo of your garden to help us quote, we keep it only as long as we need it to give you a price and complete the work.</p>
      <p><strong>We don't collect</strong> any special category data (health, ethnicity, beliefs and so on), and we don't buy personal data from third parties.</p>

      <h2>Why we use it, and our lawful basis</h2>
      <div class="table-scroll">
        <table class="price-table">
          <thead><tr><th scope="col">What we do</th><th scope="col">Why</th><th scope="col">Lawful basis</th></tr></thead>
          <tbody>
            <tr><td>Reply to your enquiry and give you a quote</td><td>You asked us to</td><td>Consent, and steps taken at your request before entering a contract</td></tr>
            <tr><td>Schedule and carry out your visits</td><td>To do the job you've booked</td><td>Performance of a contract</td></tr>
            <tr><td>Take payment and keep accounting records</td><td>To run the business and meet HMRC obligations</td><td>Contract, and legal obligation</td></tr>
            <tr><td>Keep waste transfer records</td><td>We're legally required to as a registered waste carrier</td><td>Legal obligation</td></tr>
            <tr><td>Understand how our website is used</td><td>To improve the site</td><td>Legitimate interests, and the data is anonymous and aggregated</td></tr>
            <tr><td>Contact you about your existing service</td><td>To keep you informed about visits you've booked</td><td>Contract</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>We won't send you marketing</strong> unless you've asked us to. If we ever do, every message will have a clear way to opt out.</p>

      <h2>Who we share it with</h2>
      <p>We don't sell your information, and we don't share it for anyone else's marketing.</p>
      <p>We share it only with:</p>
      <ul>
        <li><strong>Our accountant and HMRC</strong>, for tax and accounting records</li>
        <li><strong>Our website and analytics provider (Cloudflare)</strong>, which hosts the site and provides anonymous visitor statistics</li>
        <li><strong>Waste disposal facilities</strong>, where a Waste Transfer Note legally requires the producer's details. This applies to commercial customers</li>
        <li><strong>Anyone we're legally required to share it with</strong>, such as a regulator or a court order</li>
      </ul>

      <h2>Messaging us on WhatsApp</h2>
      <p>If you contact us through WhatsApp, that conversation is carried over WhatsApp's own service, which is operated by Meta. Your message is handled under WhatsApp's terms and privacy policy as well as this one. We keep the conversation as a record of your enquiry and your booking. If you'd rather not use WhatsApp, you can email or phone us instead.</p>

      <h2>How long we keep it</h2>
      <div class="table-scroll">
        <table class="price-table">
          <thead><tr><th scope="col">Information</th><th scope="col">Kept for</th></tr></thead>
          <tbody>
            <tr><td>Enquiries that don't become bookings</td><td>12 months, then deleted</td></tr>
            <tr><td>Customer records, invoices and payments</td><td>6 years after your last transaction, as required for tax records</td></tr>
            <tr><td>Waste transfer records</td><td>As required by waste regulations</td></tr>
            <tr><td>Photos you send us</td><td>Deleted once the quote or job is complete, unless you've given us permission to use them</td></tr>
            <tr><td>Website statistics</td><td>Aggregated and anonymous, not linked to you at any point</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Photos of your garden</h2>
      <p>If we'd like to use a photo of your garden on our website or social media, <strong>we'll ask you first, every time.</strong> We won't publish a photo of your property without your permission, and you can withdraw that permission at any time by telling us.</p>

      <h2>Your rights</h2>
      <p>Under UK data protection law you have the right to:</p>
      <ul>
        <li><strong>Ask what we hold about you</strong>, and get a copy</li>
        <li><strong>Have mistakes corrected</strong></li>
        <li><strong>Ask us to delete your information</strong>, where we don't need to keep it for legal or accounting reasons</li>
        <li><strong>Ask us to restrict how we use it</strong></li>
        <li><strong>Object to us using it</strong>, where we're relying on legitimate interests</li>
        <li><strong>Ask for your information in a portable format</strong></li>
        <li><strong>Withdraw consent</strong> at any time, where consent is what we're relying on</li>
      </ul>
      <p>To exercise any of these, email us at ${EMAIL}. We'll respond within one month, and it's free.</p>

      <h2>Complaints</h2>
      <p>If you're unhappy with how we've handled your information, please tell us first, we'd rather put it right. If you're still not satisfied, you can complain to the Information Commissioner's Office at <a class="text-link" href="https://ico.org.uk" rel="noopener" target="_blank">ico.org.uk</a>, or by calling 0303 123 1113.</p>

      <h2>Keeping your information safe</h2>
      <p>We keep customer records in access-controlled accounts protected by strong passwords and two-factor authentication. Only Myles and Sabrina have access. We don't keep paper records of customer details beyond what's needed for a day's round, and those are destroyed afterwards.</p>

      <h2>Children</h2>
      <p>Our service is for adults. We don't knowingly collect information about anyone under 18. If you think we have, please tell us and we'll delete it.</p>

      <h2>Changes to this policy</h2>
      <p>If we change this policy we'll update the date at the top. If the change is significant, we'll tell existing customers directly.</p>`,
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
  body: `
      <h2>The short version</h2>
      <p><strong>We don't use tracking or advertising cookies.</strong> We don't build a profile of you, we don't follow you across other websites, and we don't share anything with advertisers. That's why you won't see a cookie consent banner on this site, there's nothing to consent to.</p>

      <h2>How we measure website visits</h2>
      <p>We use <strong>Cloudflare Web Analytics</strong> to understand how the site is being used. It's cookieless: it doesn't store anything on your device and doesn't use any persistent identifier to recognise you.</p>
      <p><strong>What it tells us:</strong></p>
      <ul>
        <li>How many people visited, and which pages they looked at</li>
        <li>Which site or search engine they came from</li>
        <li>Roughly what country or region they're in</li>
        <li>What kind of device and browser they used</li>
        <li>Whether people clicked our WhatsApp button or submitted the quote form</li>
      </ul>
      <p><strong>What it doesn't tell us:</strong></p>
      <ul>
        <li>Who you are</li>
        <li>Your precise location or IP address</li>
        <li>Anything about you across other websites</li>
        <li>Anything that could be linked back to you personally</li>
      </ul>
      <p>The statistics are aggregated. We can see that thirty people looked at our pricing page last week; we cannot see that you were one of them.</p>

      <h2>Cookies our hosting provider sets</h2>
      <p>Our site runs on Cloudflare, which may set a small number of <strong>strictly necessary</strong> cookies to keep the site secure and working, for example, telling genuine visitors apart from automated bots and blocking malicious traffic.</p>
      <p>These are security and functionality cookies, not tracking cookies. They don't collect information for advertising and aren't used to build a profile of you. Cookies of this kind are exempt from the consent requirement, which is the other reason there's no banner on this site.</p>

      <h2>Why there's no cookie banner</h2>
      <p>Cookie banners exist because the law requires your consent before a website stores information on your device for non-essential purposes, such as advertising or analytics profiling. Since our analytics is cookieless and stores nothing on your device, and the only cookies present are strictly necessary security ones, that consent requirement doesn't apply.</p>
      <p>We think that's the better arrangement anyway: no interruption for you, and no tracking to worry about.</p>

      <h2>Managing cookies yourself</h2>
      <p>You can block or delete cookies through your browser settings at any time. Doing so won't affect your use of this site, though blocking strictly necessary cookies may affect how some websites function generally.</p>

      <h2>If this changes</h2>
      <p>If we ever add something that requires consent, advertising pixels, an embedded video player, a live chat widget, we'll add a proper consent banner and update this page before it goes live. We'll never quietly start tracking you.</p>

      <h2>Questions</h2>
      <p>Email ${EMAIL}.</p>`,
});

// ---------------------------------------------------------------------------
// /terms
// ---------------------------------------------------------------------------

const TERMS = [
  ['Who we are', `<p>Scoop Patrol Aberdare is ${STRUCTURE}, trading from ${ADDRESS}. We're a registered upper tier waste carrier with Natural Resources Wales, registration number ${SITE.nrwNumber}, and we're fully insured.</p>
      <p>Contact: ${EMAIL} · <a href="${TEL_LINK}">${SITE.phoneDisplay}</a></p>`],

  ['What these terms cover', `<p>These terms apply when you book any of our services, garden clean-ups, pet waste collection, or the cat litter add-on. By booking, you're agreeing to them. Please read them before you book.</p>
      <p>Nothing in these terms affects your legal rights as a consumer.</p>`],

  ['Quotes and prices', `<ul>
        <li>Quotes are based on the information you give us, garden size, number of pets, how often you'd like us to visit, and any photos you send.</li>
        <li><strong>If what we find on arrival is significantly different from what was described</strong>, we'll tell you before starting and either agree a revised price with you or reschedule. We won't do extra work and bill you for it afterwards without asking.</li>
        <li>Prices are shown “from” a figure because every garden is different. Your actual price is the one we confirm to you directly, and that's the price that applies.</li>
        <li>First cleans on a garden with a build-up are quoted separately.</li>
        <li>Commercial sites are quoted individually.</li>
      </ul>`],

  ['Booking and your right to cancel', `<p><strong>Your 14-day cancellation right.</strong> Because you book with us remotely, by message, phone or through our website, you have the right to cancel within 14 days of booking, without giving a reason.</p>
      <p><strong>If you want us to start sooner than that</strong>, which most people do, just tell us. By asking us to begin within the 14-day period, you're agreeing that:</p>
      <ul>
        <li>If we've fully completed the service before the 14 days are up, you lose the right to cancel that service</li>
        <li>If you cancel partway through, you'll pay for the work already done, in proportion to what was completed</li>
      </ul>
      <p><strong>To cancel</strong>, message, email or phone us. We'll confirm and refund anything due within 14 days.</p>`],

  ['Ongoing visits, changing and cancelling', `<ul>
        <li><strong>No contracts.</strong> Weekly and fortnightly arrangements continue until you tell us otherwise.</li>
        <li><strong>Cancel or change any time</strong> by giving us at least 24 hours' notice before a scheduled visit.</li>
        <li><strong>Less than 24 hours' notice</strong>, or we arrive and can't get access, and we may charge for the visit. We'll always try to be reasonable, one-off mishaps happen and we'd rather keep a customer than charge for a wasted trip.</li>
        <li>You can switch between weekly, fortnightly and one-off whenever you like.</li>
      </ul>`],

  ['Getting access', `<p>To do the job we need to reach your garden. Please make sure that:</p>
      <ul>
        <li>Gates are unlocked, or we have the code or key arrangement agreed in advance</li>
        <li>The route to the garden is clear and safe</li>
        <li>We know about anything we should be aware of, a broken step, a fragile gate, works in progress</li>
      </ul>
      <p><strong>You don't need to be home.</strong> If we arrive and can't get access, we'll message you before leaving and section 5 applies.</p>`],

  ['Your pets', `<ul>
        <li><strong>Please secure dogs indoors during our visit.</strong> Not because we don't like them, we very much do, but because loose dogs make it harder to do the job properly and safely, and we'd rather not risk a gate being left open.</li>
        <li>Tell us in advance if a pet is nervous, reactive, or has any history of biting.</li>
        <li>We're not responsible for a pet escaping through a gate or door that was left open by someone else, or for a pet's behaviour towards us.</li>
      </ul>`],

  ['Pet health and cross-contamination', `<p>Please tell us in advance if your dog has, or recently had, a contagious illness, parvovirus, kennel cough, giardia, a worm infestation or similar.</p>
      <p>This isn't us being fussy. We visit several gardens a day, and some of those homes have puppies, elderly dogs or dogs with weak immune systems. Knowing in advance lets us disinfect our equipment thoroughly between properties, or reschedule you to the end of the round. We'd never turn you away for it, we just need to know.</p>
      <p>We disinfect our tools and footwear between properties as standard.</p>`],

  ['Sanitiser and surfaces', `<p>Every clean includes treating the area with our pet-safe deodorising and sanitising spray.</p>
      <ul>
        <li><strong>Please keep pets and children off the treated area until it's dry</strong>, usually around 20–30 minutes, longer in cold or damp weather. Pet-safe means safe once dry, not safe to lick straight off the grass.</li>
        <li>Tell us in advance about delicate planting, treated timber, or anything else you'd rather we didn't treat, and we'll work around it.</li>
        <li>We're not responsible for discolouration or damage to surfaces or planting we weren't told about.</li>
      </ul>
      <p><strong>Patios, decking and artificial grass.</strong> These are cleared and treated as part of your clean at no extra charge. Please tell us what type of artificial grass you have before your first visit so we can confirm the treatment is suitable.</p>
      <p>To be clear about what this is: it's regular cleaning and sanitising, not a deep-clean or restoration service. Regular visits stop odour building up. Where artificial grass has been left a long time and urine has reached the infill or sub-base beneath, regular treatment will help but may not fully resolve it, that usually needs specialist restoration or infill replacement, which we don't offer. We'll tell you honestly if that's what we find rather than take payment for visits that won't fix the underlying problem.</p>`],

  ['Before we arrive', `<p>To let us work quickly and safely, please clear the garden of children's toys, garden furniture, tools and anything else in the way. We'll work around what's there, but we won't move or lift your belongings, and we're not responsible for anything left out that gets in the way of the job.</p>`],

  ['What we won\'t handle', `<p>We clear pet waste. If we find any of the following, we'll stop, leave it where it is, and message you straight away so you can arrange the right service:</p>
      <ul>
        <li>Needles, syringes or other sharps</li>
        <li>Human waste</li>
        <li>Dead animals</li>
        <li>Chemicals, asbestos or anything else hazardous</li>
        <li>Anything else that isn't pet waste and wasn't agreed beforehand</li>
      </ul>
      <p>We may charge for the visit if the garden couldn't be cleaned for one of these reasons.</p>`],

  ['Holidays and pauses', `<ul>
        <li><strong>Going away?</strong> Tell us and we'll pause your visits for as long as you need, at no charge. Just let us know when you're back.</li>
        <li><strong>When we're away</strong>, we'll give you as much notice as we can and either move your visit or skip it with no charge.</li>
      </ul>`],

  ['Keys and access codes', `<p>If you give us a gate code or key arrangement, we keep it securely and share it with nobody outside Scoop Patrol. Tell us if it changes. If you stop using us, we'll delete the code and return any key.</p>`],

  ['When we might decline or end the service', `<p>We'd rather not, and it's rare, but we reserve the right to decline or stop a booking if:</p>
      <ul>
        <li>A pet behaves aggressively towards us, or we can't work safely</li>
        <li>Access is unsafe or the garden presents a hazard we weren't told about</li>
        <li>An account remains unpaid after reminders</li>
        <li>Anyone is abusive towards us</li>
      </ul>
      <p>We'll always explain why, and you'll only ever be charged for work already done.</p>`],

  ['What we do, and what we can\'t promise', `<p>We clear the <strong>visible</strong> pet waste from your garden, lawn, patio, decking and artificial grass, and take it away with us. Every clean includes treating the area with our pet-safe deodorising and sanitising spray.</p>
      <p>We'll be thorough, but in fairness we should say plainly:</p>
      <ul>
        <li>In long grass, dense planting, deep gravel, snow, leaf cover or poor light, some waste may not be visible. We can't guarantee finding every last piece.</li>
        <li><strong>If we do miss something and you're on a regular round, we'll pick it up on your next visit at no extra charge.</strong> If you'd rather not wait, tell us and we'll come back.</li>
        <li>We clear pet waste. We're not a general garden clearance or landscaping service, so we won't remove general rubbish, garden waste or anything that isn't pet waste unless we've agreed it beforehand.</li>
        <li>We can't remove staining or damage that waste has already caused to grass, decking or artificial surfaces.</li>
      </ul>`],

  ['Weather and rescheduling', `<p>We work all year round, rain or shine. Occasionally severe weather, ice, storms, flooding, makes a visit unsafe or pointless. If that happens we'll message you, and either move the visit to the next available slot or skip it with no charge. We won't charge you for a visit we didn't make.</p>`],

  ['Payment', `<ul>
        <li><strong>Payment is due at the end of each visit.</strong> If you're not able to pay on the day, that's fine, a bank transfer shortly afterwards works just as well. We'll give you our details.</li>
        <li>We accept cash and bank transfer.</li>
        <li>If a payment is outstanding we'll send you a friendly reminder first. If an account stays overdue we may pause further visits until it's settled, and we'll tell you before we do.</li>
      </ul>`],

  ['Changing our prices', `<p>If we need to change your price, we'll tell you at least <strong>two weeks</strong> before it takes effect. You're free to cancel at that point with no penalty. We won't change a price without telling you first.</p>`],

  ['Waste and disposal', `<p>All waste we collect is transported and disposed of legally under our Natural Resources Wales registration (${SITE.nrwNumber}). We do not fly-tip, and we do not put commercial waste into household collections.</p>
      <p><strong>Commercial customers:</strong> you have a duty of care for waste produced at your premises. We'll provide Waste Transfer Notes for every collection, and you should keep them as evidence of compliance. Our registration can be verified on the NRW public register.</p>`],

  ['If something goes wrong', `<p>We'll carry out our services with reasonable care and skill, as the law requires.</p>
      <p><strong>If you're not happy with a visit, tell us within 48 hours</strong> and we'll come back and put it right at no charge. We'd much rather fix it than argue about it.</p>
      <p>If we damage something through our negligence, we're insured and we'll put it right. We're not liable for:</p>
      <ul>
        <li>Damage that was already there</li>
        <li>Loss that isn't a foreseeable result of us breaking these terms</li>
        <li>Anything caused by inaccurate information about your property or pets</li>
      </ul>
      <p>Nothing here limits our liability for death or personal injury caused by our negligence, for fraud, or for anything else the law doesn't allow us to limit.</p>`],

  ['Complaints', `<p>Email ${EMAIL} or phone <a href="${TEL_LINK}">${SITE.phoneDisplay}</a>. We'll acknowledge within 2 working days and aim to resolve things within 14 days.</p>`],

  ['Your information', `<p>We handle your personal information as set out in our <a class="text-link" href="/privacy-policy">Privacy Policy</a>.</p>`],

  ['Changes to these terms', `<p>We may update these terms. The version on our website at the time you book is the one that applies. For ongoing customers, we'll tell you about any significant change before it takes effect.</p>`],

  ['Governing law', `<p>These terms are governed by the law of England and Wales, and disputes fall to the courts of England and Wales. If you live in Wales, Scotland or Northern Ireland, you can bring proceedings in your own country.</p>`],
];

const termsToc = `<nav class="legal-toc" aria-label="On this page">
      <h2>On this page</h2>
      <ol>
        ${TERMS.map(([h], i) => `<li><a href="#term-${i + 1}">${h}</a></li>`).join('\n        ')}
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
  body: TERMS.map(([h, b], i) =>
    `      <h2 id="term-${i + 1}"><span class="term-num">${i + 1}.</span> ${h}</h2>\n      ${b}`
  ).join('\n\n'),
});
