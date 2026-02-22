import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';

const SITE_URL = 'https://nancythehealthcoach.com';

// Extract blog slugs from the data file
const blogData = readFileSync('src/data/blogPosts.ts', 'utf-8');
const slugMatches = blogData.matchAll(/slug:\s*'([^']+)'/g);
const slugs = [...slugMatches].map(m => m[1]);

const today = new Date().toISOString().split('T')[0];

const urls = [
  { loc: '/', priority: '1.0', changefreq: 'weekly', lastmod: today },
  { loc: '/blog', priority: '0.8', changefreq: 'weekly', lastmod: today },
  { loc: '/starter-kit', priority: '0.7', changefreq: 'monthly', lastmod: today },
  ...slugs.map(slug => ({
    loc: `/blog/${slug}`,
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: today,
  })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${SITE_URL}${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write to both public/ (source of truth) and dist/ (build output)
writeFileSync('public/sitemap.xml', sitemap);
if (existsSync('dist')) {
  writeFileSync('dist/sitemap.xml', sitemap);
}
console.log(`Generated sitemap.xml with ${urls.length} URLs`);
