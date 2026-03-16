import React, { useState } from 'react';
import { Github, AlertCircle } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { getGitHubOAuthUrl } from '../lib/auth';
import { Button } from './ui/button';
import { Squircle } from './ui/squircle';

const LoginPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  // Show error from callback redirect query params
  const errorParam = searchParams.get('error');
  const error = errorParam
    ? errorParam === 'invalid_state' ? 'Security verification failed. Please try again.'
    : errorParam === 'not_authorized' ? 'You are not authorized as admin.'
    : errorParam === 'auth_failed' ? 'Authentication failed. Please try again.'
    : `Authorization error: ${errorParam}`
    : null;

  const handleLogin = async () => {
    setIsLoading(true);
    // Use the root URL as the redirect URI to avoid 404 issues with fragments on GitHub Pages
    const redirectUri = new URL('/admin/callback/', window.location.origin).toString();
    const oauthUrl = getGitHubOAuthUrl(redirectUri);
    window.location.href = oauthUrl;
  };

  return (
    <div className="min-h-screen bg-[#f7f6f3] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Squircle cornerRadius={16} className="bg-white shadow-lg border border-gray-100 p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <Github size={32} className="text-white" />
            </div>
            <h1 className="text-3xl font-black mb-2 tracking-tight">Admin Access</h1>
            <p className="text-gray-500 text-lg">
              Sign in with GitHub to edit your portfolio
            </p>
          </div>

          {error && (
            <Squircle cornerRadius={8} className="mb-6 p-4 bg-red-50 border border-red-200 flex gap-3">
              <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </Squircle>
          )}

          <div className="space-y-4">
            <Button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full bg-black hover:bg-gray-900 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-3 transition-colors"
            >
              <Github size={20} />
              {isLoading ? 'Redirecting to GitHub...' : 'Login with GitHub'}
            </Button>

          </div>

          <Squircle cornerRadius={8} className="mt-8 p-4 bg-blue-50 border border-blue-200">
            <h3 className="font-medium text-sm text-blue-900 mb-2">Setup Instructions:</h3>
            <ol className="text-xs text-blue-800 space-y-2 list-decimal list-inside">
              <li>Create a GitHub OAuth App in your settings</li>
              <li>Set redirect URI to: <code className="bg-blue-100 px-1 rounded">{`${window.location.origin}/admin/callback/`}</code></li>
              <li>Add Client ID to environment variable NEXT_PUBLIC_GITHUB_CLIENT_ID</li>
              <li>Setup a backend to exchange code for access token</li>
            </ol>
          </Squircle>
        </Squircle>
      </div>
    </div>
  );
};

export default LoginPage;

