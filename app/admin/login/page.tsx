'use client';

import LoginPage from '@/components/LoginPage';
import { Suspense } from 'react';

export default function AdminLoginPage() {
    return (
        <Suspense fallback={<div className="flex h-screen items-center justify-center text-lg">Loading...</div>}>
            <LoginPage />
        </Suspense>
    );
}
