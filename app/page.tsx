import { PortfolioContent } from '@/components/PortfolioContent';
import fs from 'fs';
import path from 'path';

// This runs at BUILD TIME for static export
export default async function HomePage() {
    // Read data.json at build time
    const dataPath = path.join(process.cwd(), 'public', 'content', 'data.json');
    let portfolioData = null;

    try {
        const fileContents = fs.readFileSync(dataPath, 'utf8');
        portfolioData = JSON.parse(fileContents);
    } catch (error) {
        console.error('Error reading portfolio data:', error);
    }

    return <PortfolioContent initialData={portfolioData} isAdmin={false} />;
}
