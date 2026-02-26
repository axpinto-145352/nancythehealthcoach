/**
 * Pre-render script — generates static HTML snapshots for AI crawlers and search engines.
 *
 * This injects a <noscript> block into each page's index.html with the essential
 * text content so that crawlers that don't execute JavaScript can still read
 * the page's main information (titles, descriptions, services, FAQs, blog content).
 *
 * How it works:
 * 1. Reads the blog post data from the source
 * 2. Generates a <noscript> block with semantic HTML for each route
 * 3. Copies dist/index.html to each route's directory (e.g., dist/blog/slug/index.html)
 * 4. Injects the noscript content into each page
 *
 * This runs after `vite build` and `generate-sitemap`.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname } from 'path';

const DIST = 'dist';
const BASE_HTML = readFileSync(`${DIST}/index.html`, 'utf-8');

// Extract blog posts data
const blogData = readFileSync('src/data/blogPosts.ts', 'utf-8');

// Helper to extract string values that may contain escaped single quotes
function extractField(fieldName) {
  const regex = new RegExp(`${fieldName}:\\s*'((?:[^'\\\\]|\\\\.)*)'`, 'g');
  return [...blogData.matchAll(regex)].map(m => m[1].replace(/\\'/g, "'"));
}

function extractBlogPosts() {
  const posts = [];
  const slugs = extractField('slug');
  const titles = extractField('title');
  const metaDescs = extractField('metaDescription');
  const excerpts = [...blogData.matchAll(/excerpt:\s*["]((?:[^"\\]|\\.)*)["]/g)].map(m => m[1].replace(/\\"/g, '"'));
  // Fallback for single-quoted excerpts
  if (excerpts.length === 0) {
    excerpts.push(...extractField('excerpt'));
  }
  const categories = extractField('category');
  const authors = extractField('author');

  // Extract content blocks (between backticks)
  const contentBlocks = [...blogData.matchAll(/content:\s*`([\s\S]*?)`/g)].map(m => m[1]);

  for (let i = 0; i < slugs.length; i++) {
    posts.push({
      slug: slugs[i],
      title: titles[i] || '',
      metaDescription: metaDescs[i] || '',
      excerpt: excerpts[i] || '',
      category: categories[i] || '',
      author: authors[i] || '',
      content: contentBlocks[i] || '',
    });
  }
  return posts;
}

function markdownToPlainHtml(md) {
  return md
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^\- (.+)$/gm, '<li>$1</li>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hlu])/gm, '')
    ;
}

function writeRoute(routePath, html) {
  const dir = `${DIST}${routePath}`;
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  writeFileSync(`${dir}/index.html`, html);
}

function injectNoscript(baseHtml, noscriptContent, metaOverrides = {}) {
  let html = baseHtml;

  // Override meta tags if provided
  if (metaOverrides.title) {
    html = html.replace(/<title>[^<]+<\/title>/, `<title>${metaOverrides.title}</title>`);
    html = html.replace(
      /content="Nancy The Health Coach — Brain Health Coaching for Busy Professionals"/,
      `content="${metaOverrides.title}"`
    );
  }
  if (metaOverrides.description) {
    html = html.replace(
      /(<meta name="description" content=")[^"]+(")/,
      `$1${metaOverrides.description}$2`
    );
    html = html.replace(
      /(<meta property="og:description" content=")[^"]+(")/,
      `$1${metaOverrides.description}$2`
    );
  }
  if (metaOverrides.ogType) {
    html = html.replace(
      /(<meta property="og:type" content=")[^"]+(")/,
      `$1${metaOverrides.ogType}$2`
    );
  }

  // Inject noscript block right after <div id="root"></div>
  const noscriptBlock = `<noscript>
<div id="static-content">
${noscriptContent}
</div>
</noscript>`;

  html = html.replace('</div>\n    <script', `</div>\n    ${noscriptBlock}\n    <script`);
  return html;
}

// ── Homepage ──
const homepageNoscript = `
<header>
  <h1>Nancy The Health Coach — Brain Health Coaching for Busy Professionals</h1>
  <p>Nancy Ryan — Elite Brain Health Coach Certified (Amen University). Based in San Diego, CA with virtual sessions available nationwide.</p>
</header>
<main>
  <section>
    <h2>About Nancy Ryan</h2>
    <p>Hi, I'm Nancy. I help caregivers boost focus and protect brain health — without relying on sugar.</p>
    <p>Whether you're struggling with brain fog, sugar cravings, or worried about cognitive decline — I've been where you are. As the mom of a high-functioning autistic adult, a daughter, and a brain health coach, I've seen firsthand how the right support can transform focus, energy, and overall well-being.</p>
    <p>Elite Brain Health Coach Certified through Amen University (January 2026). Master Certified Health Coach through Dr. Sears Wellness Institute (November 2021).</p>
  </section>
  <section>
    <h2>Brain Health Coaching Programs</h2>
    <h3>Brain Health Breakthrough — $150 (one session)</h3>
    <p>60-minute deep-dive consultation. Virtual or in-person in San Diego. Personalized action plan and resource list.</p>
    <h3>90-Day Transformation — $597 (payment plans available)</h3>
    <p>Initial 90-minute assessment, 12 weekly coaching sessions, personalized brain nutrition plan, sugar detox protocol, gut-brain optimization roadmap, and text/email support.</p>
    <h3>VIP Brain Health Intensive — $1,497 (payment plans available)</h3>
    <p>Everything in the 90-Day program plus 2-hour initial intensive, 24 bi-weekly sessions, priority access, custom meal plans, supplement protocol, and family coaching session.</p>
    <h3>Group Coaching Circles — Starting at $297/person</h3>
    <p>6-week brain health program in a small group of 6-10 people with community accountability.</p>
    <h3>Corporate &amp; Community Workshops</h3>
    <p>Interactive workshops for teams and organizations. Topics include Brain Food for Professionals, The Sugar-Focus Connection, Nutrition for Neurodiverse Adults.</p>
  </section>
  <section>
    <h2>Frequently Asked Questions</h2>
    <dl>
      <dt>Do I need to live in San Diego?</dt>
      <dd>Nope! I work with clients virtually all over the country. San Diego clients have the option of in-person sessions.</dd>
      <dt>Is this a diet program?</dt>
      <dd>No. This is brain health coaching focused on nutrition — but I don't put you on a restrictive diet.</dd>
      <dt>Will you tell me to stop taking my ADHD medication?</dt>
      <dd>Absolutely not. I'm a health coach, not a doctor. I work alongside your existing care team.</dd>
      <dt>How is this different from seeing a nutritionist?</dt>
      <dd>I specialize in the brain. Every recommendation is filtered through the lens of brain health.</dd>
      <dt>How fast will I see results?</dt>
      <dd>Most clients notice changes in energy and focus within 2-3 weeks. Deeper changes emerge over 6-12 weeks.</dd>
      <dt>What certifications do you have?</dt>
      <dd>Elite Brain Health Coach Certified (EBHCC) through Amen University (January 2026). Master Certified Health Coach (MCHC) through Dr. Sears Wellness Institute (November 2021).</dd>
    </dl>
  </section>
  <section>
    <h2>Contact</h2>
    <p>Email: nancythehealthcoach@gmail.com</p>
    <p>San Diego, CA — Virtual sessions available nationwide</p>
    <p><a href="https://calendly.com/nancythehealthcoach-1/15min">Book a Free 15-Minute Consultation</a></p>
  </section>
</main>`;

const homeHtml = injectNoscript(BASE_HTML, homepageNoscript);
writeFileSync(`${DIST}/index.html`, homeHtml);
console.log('Pre-rendered: / (homepage)');

// ── Blog listing page ──
const posts = extractBlogPosts();
const blogListNoscript = `
<header>
  <h1>Brain Health Blog — Nancy The Health Coach</h1>
  <p>Science-backed brain health articles by Nancy Ryan, Elite Brain Health Coach Certified (Amen University).</p>
</header>
<main>
${posts.map(p => `  <article>
    <h2><a href="/blog/${p.slug}">${p.title}</a></h2>
    <p>${p.excerpt}</p>
    <p>Category: ${p.category} | By ${p.author}</p>
  </article>`).join('\n')}
</main>`;

const blogListHtml = injectNoscript(BASE_HTML, blogListNoscript, {
  title: 'Brain Health Blog — Nancy The Health Coach',
  description: 'Science-backed brain health articles on ADHD, brain fog, sugar addiction, and cognitive wellness by Nancy Ryan, certified brain health coach.',
});
writeRoute('/blog', blogListHtml);
console.log('Pre-rendered: /blog');

// ── Individual blog posts ──
for (const post of posts) {
  const contentHtml = markdownToPlainHtml(post.content);
  const postNoscript = `
<article>
  <header>
    <h1>${post.title}</h1>
    <p>By ${post.author} | ${post.category}</p>
    <p>${post.excerpt}</p>
  </header>
  <div>${contentHtml}</div>
  <footer>
    <p>About the author: Nancy Ryan helps busy professionals reclaim focus, energy, and mental clarity through science-backed brain health coaching. Based in San Diego with virtual sessions available nationwide.</p>
    <p><a href="https://calendly.com/nancythehealthcoach-1/15min">Book a Free Consultation</a></p>
  </footer>
</article>`;

  const postHtml = injectNoscript(BASE_HTML, postNoscript, {
    title: `${post.title} | Nancy The Health Coach`,
    description: post.metaDescription,
    ogType: 'article',
  });
  writeRoute(`/blog/${post.slug}`, postHtml);
  console.log(`Pre-rendered: /blog/${post.slug}`);
}

// ── Starter Kit page ──
const starterKitNoscript = `
<main>
  <h1>Free: 7-Day Brain Health Starter Kit</h1>
  <p>Your complete roadmap to breaking the sugar cycle and giving your brain the fuel it needs to thrive.</p>
  <ul>
    <li>Day-by-day plan — exactly what to eat, do, and expect each day</li>
    <li>Brain timeline — what happens in your brain each day off sugar</li>
    <li>Printable shopping list with everything you need</li>
    <li>Sugar swaps for your favorite sugary foods</li>
  </ul>
  <p>By Nancy Ryan, Elite Brain Health Coach Certified (EBHCC) — Amen University</p>
</main>`;

const starterKitHtml = injectNoscript(BASE_HTML, starterKitNoscript, {
  title: '7-Day Brain Health Starter Kit — Nancy The Health Coach',
  description: 'Free 7-day brain health starter kit with a day-by-day plan, brain timeline, shopping list, and sugar swaps. By Nancy Ryan, certified brain health coach.',
});
writeRoute('/starter-kit', starterKitHtml);
console.log('Pre-rendered: /starter-kit');

// ── Privacy Policy page ──
const privacyNoscript = `
<main>
  <h1>Privacy Policy — Nancy The Health Coach</h1>
  <p>This Privacy Policy describes how Nancy Ryan / Nancy The Health Coach collects, uses, and shares information about you when you use our website at nancythehealthcoach.com.</p>
  <h2>Information We Collect</h2>
  <p>We collect email addresses when you subscribe, and usage data through Google Analytics.</p>
  <h2>Email Marketing</h2>
  <p>We use Kit (formerly ConvertKit) to manage our email list. You can unsubscribe at any time.</p>
  <h2>Contact</h2>
  <p>Email: nancythehealthcoach@gmail.com</p>
</main>`;

const privacyHtml = injectNoscript(BASE_HTML, privacyNoscript, {
  title: 'Privacy Policy — Nancy The Health Coach',
  description: 'Privacy policy for nancythehealthcoach.com — how we collect, use, and protect your information.',
});
writeRoute('/privacy-policy', privacyHtml);
console.log('Pre-rendered: /privacy-policy');

// ── Terms & Conditions page ──
const termsNoscript = `
<main>
  <h1>Terms &amp; Conditions — Nancy The Health Coach</h1>
  <p>By accessing or using nancythehealthcoach.com, you agree to be bound by these Terms &amp; Conditions.</p>
  <h2>Services</h2>
  <p>Nancy The Health Coach offers brain health coaching services, educational content, workshops, and digital products.</p>
  <h2>Contact</h2>
  <p>Email: nancythehealthcoach@gmail.com</p>
</main>`;

const termsHtml = injectNoscript(BASE_HTML, termsNoscript, {
  title: 'Terms & Conditions — Nancy The Health Coach',
  description: 'Terms and conditions for using nancythehealthcoach.com and purchasing coaching services.',
});
writeRoute('/terms', termsHtml);
console.log('Pre-rendered: /terms');

console.log(`\nPre-rendering complete! ${5 + posts.length} pages generated.`);
