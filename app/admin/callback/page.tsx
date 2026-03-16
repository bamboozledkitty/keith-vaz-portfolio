'use client';

import { useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { requestAccessToken, fetchGitHubUser, verifyState } from '@/lib/auth';
import { ADMIN_USERNAME } from '@/config/auth';
import { logError } from '@/lib/logger';

import { Suspense } from 'react';

function CallbackContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { setAuth } = useAuth();
    const hasHandled = useRef(false);

    useEffect(() => {
        if (hasHandled.current) return;

        const code = searchParams.get('code');
        const state = searchParams.get('state');

        if (code && state) {
            hasHandled.current = true;
            handleOAuthCallback(code, state);
        }
    }, [searchParams]);

    async function handleOAuthCallback(code: string, state: string) {
        try {
            // Verify CSRF state
            if (!verifyState(state)) {
                router.push('/admin/login?error=invalid_state');
                return;
            }

            // Exchange code for token via backend worker
            const token = await requestAccessToken(code, state);

            // Fetch user info
            const user = await fetchGitHubUser(token);

            // Verify admin
            if (user.login !== ADMIN_USERNAME) {
                router.push('/admin/login?error=not_authorized');
                return;
            }

            // Store auth state
            setAuth(token, user);

            // Redirect to admin dashboard
            router.push('/admin');
        } catch (error) {
            logError('OAuth callback error:', error);
            router.push('/admin/login?error=auth_failed');
        }
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                <div className="text-lg font-medium">Authenticating with GitHub...</div>
            </div>
        </div>
    );
}

export default function CallbackPage() {
    return (
        <Suspense fallback={
            <div className="flex h-screen items-center justify-center">
                <div className="text-lg">Loading...</div>
            </div>
        }>
            <CallbackContent />
        </Suspense>
    );
}
