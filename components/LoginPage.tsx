import React, { useEffect, useState } from 'react';
import { Github, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getGitHubOAuthUrl, verifyState, fetchGitHubUser, saveAuthState } from '../lib/auth';
import { ADMIN_USERNAME } from '../config/auth';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Handle OAuth callback
  useEffect(() => {
    const handleCallback = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      const state = params.get('state');
      const errorParam = params.get('error');

      if (errorParam) {
        setError(`GitHub authorization failed: ${errorParam}`);
        return;
      }

      if (!code || !state) {
        return;
      }

      if (!verifyState(state)) {
        setError('Invalid state parameter. Security verification failed.');
        return;
      }

      setIsLoading(true);

      try {
        // Since we're on GitHub Pages (static), we need to use a workaround
        // This demo uses localStorage to store a temporary token from GitHub's redirect
        // In production, you should use a backend to securely exchange the code for a token

        // For now, we'll show an error with instructions
        setError(
          `OAuth callback received (code: ${code.substring(0, 10)}...). To complete authentication, you need a backend server to exchange the code for an access token. See the plan for details.`
        );
      } finally {
        setIsLoading(false);
      }
    };

    handleCallback();
  }, [setAuth, navigate]);

  const handleLogin = async () => {
    setIsLoading(true);
    const redirectUri = new URL('/admin/callback', window.location.origin).toString();
    const oauthUrl = getGitHubOAuthUrl(redirectUri);
    window.location.href = oauthUrl;
  };

  const handleTestAuth = () => {
    // For testing purposes, allow setting a test token
    const testToken = 'test-token-' + Math.random().toString(36).substring(7);
    const testUser = {
      login: ADMIN_USERNAME,
      id: 12345,
      avatar_url: 'https://avatars.githubusercontent.com/u/12345?v=4',
      name: 'Test Admin',
    };

    saveAuthState(testToken, testUser);
    setAuth(testToken, testUser);
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-[#f7f6f3] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
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
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
              <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
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

            <Button
              onClick={handleTestAuth}
              variant="secondary"
              className="w-full border border-gray-200 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Use Test Account (Dev Only)
            </Button>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-bold text-sm text-blue-900 mb-2">Setup Instructions:</h3>
            <ol className="text-xs text-blue-800 space-y-2 list-decimal list-inside">
              <li>Create a GitHub OAuth App in your settings</li>
              <li>Set redirect URI to: {new URL('/admin/callback', window.location.origin).toString()}</li>
              <li>Add Client ID to environment variable VITE_GITHUB_CLIENT_ID</li>
              <li>Setup a backend to exchange code for access token</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

