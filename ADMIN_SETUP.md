# Admin Access Setup Guide

This portfolio now uses GitHub OAuth authentication to restrict editing to admin users only. Here's how to set it up.

## Overview

- **Public Route (`/`)**: View-only mode - anyone can view your portfolio
- **Admin Route (`/#/admin`)**: Requires GitHub login - only authorized users can edit
- Editing capabilities include: adding items, editing content, resizing, and deleting

## Setup Instructions

### Step 1: Create GitHub OAuth App

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click **OAuth Apps** → **New OAuth App**
3. Fill in the form:
   - **Application name**: `Keith Vaz Portfolio` (or your preferred name)
   - **Homepage URL**: `https://{your-username}.github.io/keith-vaz-portfolio/`
   - **Authorization callback URL**: `https://{your-username}.github.io/keith-vaz-portfolio/#/admin/callback`
   - **Application description**: (optional) `Admin interface for my portfolio`

4. Click **Register application**
5. You'll see your **Client ID** - copy this value

### Step 2: Configure Local Environment

1. Create a `.env.local` file in the project root:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your Client ID:
   ```
   VITE_GITHUB_CLIENT_ID=your_copied_client_id_here
   ```

3. Update your admin username in `config/auth.ts`:
   ```typescript
   export const ADMIN_USERNAME = 'your-github-username';
   ```

### Step 3: Setup Authentication Backend (Production Only)

⚠️ **Important**: The current implementation uses a test/demo mode that works without a backend. For production deployment, you need a backend server to securely exchange the OAuth code for an access token.

**Why?** GitHub OAuth requires the Client Secret to be kept server-side. Never expose your Client Secret in client-side code.

#### Option A: Use a Serverless Function (Recommended)

Example with Vercel serverless function:

```typescript
// api/github-callback.ts
import { createOAuth2Session } from 'arctic'; // or similar library

export default async function handler(req, res) {
  const { code, state } = req.query;
  
  // Verify state and exchange code for token
  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github.v3+json',
    },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
      state,
    }),
  });

  const tokenData = await tokenResponse.json();
  
  // Return token to frontend
  res.json({ token: tokenData.access_token });
}
```

Update your `lib/auth.ts` to call your backend endpoint instead:

```typescript
export const requestAccessToken = async (code: string, state: string): Promise<string> => {
  const response = await fetch('/api/github-callback', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code, state }),
  });
  
  const data = await response.json();
  return data.token;
};
```

#### Option B: Deploy with Backend Support

Use platforms that support environment variables:
- **Vercel** (with serverless functions)
- **Netlify** (with functions)
- **AWS Lambda** + **CloudFront**
- Any Node.js/Python/Go backend

### Step 4: Test Development Mode

For local development, use the "Use Test Account" button on the login page to test without GitHub OAuth setup.

```bash
npm run dev
# Visit http://localhost:3000/#/admin
# Click "Use Test Account (Dev Only)"
```

### Step 5: Build & Deploy

```bash
npm run build
git add .
git commit -m "Add GitHub OAuth admin authentication"
git push origin main
```

GitHub Pages will automatically deploy from your repository.

## How It Works

### Authentication Flow

1. **View-Only Mode** (`/`): 
   - No authentication needed
   - See read-only portfolio
   - No edit controls visible

2. **Admin Login** (`/#/admin/login`):
   - Click "Login with GitHub"
   - Redirected to GitHub authorization
   - GitHub redirects back with code

3. **Token Exchange**:
   - Code sent to backend (in production)
   - Backend securely exchanges for access token
   - Token returned to frontend
   - Token stored in localStorage

4. **Admin Mode** (`/#/admin`):
   - Full editing capabilities
   - Toolbar visible for adding content
   - Edit controls on all cards
   - Drag-and-drop enabled

5. **Logout**:
   - Click "Logout" in admin header
   - Token removed from localStorage
   - Redirected to home page

### Security Notes

- ✅ Admin username is verified on each login
- ✅ Token is validated periodically
- ✅ Tokens can be revoked in GitHub settings
- ✅ Client Secret never exposed to frontend
- ⚠️ Test mode should only be used in development

## Configuration Reference

### `config/auth.ts`

```typescript
export const ADMIN_USERNAME = 'keithvaz'; // Change to your GitHub username
export const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID || '';
export const GITHUB_OAUTH_SCOPES = 'user:email'; // Required scopes
```

### `lib/auth.ts`

Key functions:
- `getAuthState()` - Get current auth status
- `saveAuthState(token, user)` - Save authentication
- `clearAuthState()` - Logout
- `fetchGitHubUser(token)` - Verify token validity

### Routes

- `/` - Public portfolio (view-only)
- `/#/admin` - Admin dashboard (requires login)
- `/#/admin/login` - GitHub login page
- `/#/admin/callback` - OAuth callback handler

## Environment Variables

### Development (`.env.local`)
```
VITE_GITHUB_CLIENT_ID=your_client_id
VITE_GITHUB_CLIENT_SECRET=never_use_this_on_frontend
```

### Production (GitHub Secrets)
Set these in your GitHub Pages deployment:
```
GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=... (if using backend)
```

## Troubleshooting

### "Invalid state parameter"
- Clear browser localStorage and try again
- Ensure redirect URI matches GitHub OAuth App settings exactly

### "Failed to fetch GitHub user"
- Check that Client ID is correct in `.env.local`
- Verify token is still valid (tokens expire after 8 hours)
- Check network requests in browser DevTools

### "User is not admin"
- Verify GitHub username matches `ADMIN_USERNAME` in `config/auth.ts`
- Logout and log back in

### Test Mode Not Working
- Test mode is for development only
- In production, implement the backend token exchange

## Additional Resources

- [GitHub OAuth Documentation](https://docs.github.com/en/developers/apps/building-oauth-apps)
- [GitHub API User Endpoint](https://docs.github.com/en/rest/users/users)
- [Arctic (OAuth Library)](https://github.com/pilcrow/arctic)
- [GitHub Pages Documentation](https://pages.github.com/)

## Support

For issues or questions:
1. Check browser console for errors
2. Review network requests in DevTools
3. Verify `.env.local` configuration
4. Test with the dev account first
5. Check GitHub OAuth App settings

---

**Last Updated**: December 2024

