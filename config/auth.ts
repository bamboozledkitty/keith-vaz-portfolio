// Admin configuration - update with your GitHub username
export const ADMIN_USERNAME = 'keithvaz';

// GitHub OAuth configuration
export const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID || '';
// Scopes: user:email for auth, repo for content writing
export const GITHUB_OAUTH_SCOPES = 'user:email repo';

