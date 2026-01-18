import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');
const BASE_URL = 'https://keithvaz.xyz';

async function generateSitemap() {
    try {
        console.log('Generating sitemap.xml...');

        const pages = [
            '', // root
            '/llms.txt'
        ];

        const date = new Date().toISOString();

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map(page => {
            const path = page.replace(/^\//, '');
            const url = path ? `${BASE_URL}/${path}` : BASE_URL;
            return `
    <url>
        <loc>${url}</loc>
        <lastmod>${date}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${path === '' ? '1.0' : '0.8'}</priority>
    </url>`;
        }).join('')}
</urlset>`;

        fs.writeFileSync(OUTPUT_PATH, sitemap);
        console.log(`Successfully generated ${OUTPUT_PATH}`);
    } catch (error) {
        console.error('Error generating sitemap:', error);
        process.exit(1);
    }
}

generateSitemap();
