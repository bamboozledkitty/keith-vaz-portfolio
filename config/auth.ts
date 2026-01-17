// Admin configuration - your GitHub username
export const ADMIN_USERNAME = 'bamboozledkitty';

// GitHub OAuth configuration
// Client ID is safe to expose (only Client Secret must be kept private)
export const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || '';

// Warn if Client ID is not configured
if (!GITHUB_CLIENT_ID && typeof window !== 'undefined') {
  console.warn('[Auth] NEXT_PUBLIC_GITHUB_CLIENT_ID not set - OAuth login will fail');
}

// Scopes: user:email for auth, repo for content writing
export const GITHUB_OAUTH_SCOPES = 'user:email repo';

