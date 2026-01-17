import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.join(__dirname, '../public/content/data.json');
const METADATA_PATH = path.join(__dirname, '../metadata.json');
const OUTPUT_PATH = path.join(__dirname, '../public/llms.txt');

async function generateLLMsTxt() {
    try {
        console.log('Generating llms.txt...');

        // Read data and metadata
        const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
        const metadata = JSON.parse(fs.readFileSync(METADATA_PATH, 'utf8'));

        let content = `# ${metadata.name}\n\n`;
        content += `> ${metadata.description}\n\n`;

        // Initialize items grouping
        let currentSection = '';
        const itemsBySection = [];

        // Process items in order
        // Note: We'll follow the order defined in the data.json
        // because that reflects the user's curated layout.
        data.items.forEach(item => {
            if (item.type === 'heading') {
                currentSection = item.title;
                itemsBySection.push({ section: currentSection, items: [] });
            } else if (currentSection) {
                const lastSection = itemsBySection[itemsBySection.length - 1];
                lastSection.items.push(item);
            } else {
                // Handle items before the first heading if any
                if (itemsBySection.length === 0) {
                    itemsBySection.push({ section: 'General', items: [] });
                }
                itemsBySection[0].items.push(item);
            }
        });

        // Build the Markdown content
        itemsBySection.forEach(sectionGroup => {
            if (sectionGroup.items.length === 0) return;

            content += `## ${sectionGroup.section}\n\n`;

            sectionGroup.items.forEach(item => {
                if (item.type === 'link') {
                    content += `- [${item.title}](${item.url}): ${item.subtitle || ''}\n`;
                } else if (item.type === 'text') {
                    content += `- ${item.title}: ${item.content}\n`;
                }
            });
            content += '\n';
        });

        // Write to public/llms.txt
        fs.writeFileSync(OUTPUT_PATH, content);
        console.log(`Successfully generated ${OUTPUT_PATH}`);

    } catch (error) {
        console.error('Error generating llms.txt:', error);
        process.exit(1);
    }
}

generateLLMsTxt();
