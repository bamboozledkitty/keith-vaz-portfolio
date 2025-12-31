// Admin configuration - update with your GitHub username
export const ADMIN_USERNAME = 'keithvaz';

// GitHub OAuth configuration
// Client ID is safe to expose (only Client Secret must be kept private)
export const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID || 'Ov23lijyj0hLWwcEcVpH';
// Scopes: user:email for auth, repo for content writing
export const GITHUB_OAUTH_SCOPES = 'user:email repo';

