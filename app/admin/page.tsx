'use client';

import { useEffect, useState } from 'react';
import { PortfolioContent } from '@/components/PortfolioContent';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();
    const [portfolioData, setPortfolioData] = useState(null);

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push('/admin/login');
        }
    }, [isAuthenticated, isLoading, router]);

    useEffect(() => {
        // Load portfolio data client-side for admin to ensure freshness
        fetch('/content/data.json')
            .then((res) => res.json())
            .then(setPortfolioData)
            .catch(err => console.error('Error fetching data in admin:', err));
    }, []);

    if (isLoading || !portfolioData) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="text-lg">Loading...</div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    return <PortfolioContent initialData={portfolioData} isAdmin={true} />;
}
