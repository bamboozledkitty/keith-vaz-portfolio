# Authentication & Authorization

This document describes the authentication and authorization system for the portfolio admin interface.

## Overview

The portfolio uses **GitHub OAuth 2.0** for authentication and a simple **admin username check** for authorization.

```
┌─────────────────────────────────────────────────────────────┐
│                      Portfolio Application                  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐                  ┌──────────────────┐    │
│  │  Public ("/") │                  │  Admin ("/#/admin") │  │
│  │  View-Only   │◄────────────────►│  Edit Mode      │    │
│  └──────────────┘  Requires Auth    └──────────────────┘    │
│                                                              │
│                  ┌─────────────────────┐                     │
│                  │ GitHub OAuth 2.0    │                     │
│                  │ Authentication      │                     │
│                  └─────────────────────┘                     │
│                           │                                  │
│                    Admin Username Check                      │
│                    (user.login === ADMIN_USERNAME)           │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Authentication Flow

### 1. User Navigation

**Public Mode** (`/`)
```
User opens main link
    ↓
No authentication needed
    ↓
View-only portfolio displayed
    ↓
No edit controls, no toolbar
```

**Admin Mode** (`/#/admin`)
```
User clicks "Go to Admin" or navigates to /#/admin
    ↓
Check if authenticated
    ├─ YES → Check if admin
    │        ├─ YES → Show admin dashboard
    │        └─ NO → Redirect to home (not authorized)
    └─ NO → Redirect to login page
```

### 2. GitHub OAuth Flow

When user clicks "Login with GitHub":

```
1. Generate OAuth Request
   ├─ Generate state parameter (CSRF protection)
   ├─ Build OAuth URL
   └─ Redirect to GitHub

2. User Authorization
   ├─ GitHub shows permission request
   ├─ User clicks "Authorize"
   └─ GitHub redirects back with code + state

3. Code Exchange (Requires Backend)
   ├─ Verify state parameter matches (CSRF check)
   ├─ Send code to backend
   ├─ Backend exchanges code for access token
   │  (Client Secret kept secure on backend)
   └─ Return token to frontend

4. User Verification
   ├─ Fetch user info using access token
   ├─ Verify username matches ADMIN_USERNAME
   └─ Store token + user info in localStorage

5. Grant Access
   ├─ Token validated
   ├─ User is admin
   └─ Redirect to admin dashboard
```

### 3. Session Management

```
Token Storage
├─ localStorage key: 'github_oauth_token'
├─ Persists across browser sessions
└─ Can be cleared with logout

User Storage
├─ localStorage key: 'github_user'
├─ Contains: { login, id, avatar_url, name }
├─ Used for admin check
└─ Updated on token validation

Token Validation
├─ On every route change to /admin
├─ Fetch user info to verify token still valid
├─ Clear auth if token expired/invalid
└─ Automatic re-authentication on next login
```

### 4. Logout Flow

```
User clicks "Logout"
    ↓
Clear localStorage
├─ Delete github_oauth_token
└─ Delete github_user
    ↓
Clear auth context state
    ↓
Redirect to home page
    ↓
Back to view-only mode
```

## Authorization Levels

### Level 0: Anonymous User (Public)
- **Access**: View-only portfolio
- **Permissions**:
  - ✅ View all content
  - ✅ See portfolio layout
  - ✅ Follow links
  - ❌ Edit any content
  - ❌ Add items
  - ❌ Delete items
  - ❌ Access admin panel

### Level 1: Authenticated Non-Admin
- **Access**: Can login but not authorized
- **Permissions**:
  - ✅ Login with GitHub
  - ❌ Edit portfolio
  - ❌ Access admin panel
- **Action**: Redirected to home or login page

### Level 2: Authenticated Admin
- **Access**: Full admin interface
- **Permissions**:
  - ✅ View admin dashboard
  - ✅ Edit all items
  - ✅ Add new items
  - ✅ Delete items
  - ✅ Resize items
  - ✅ Reorder items (drag-drop)
  - ✅ Logout

## Security Implementation

### CSRF Protection
```typescript
// 1. Generate random state
const state = generateState(); // Stored in sessionStorage

// 2. Include in OAuth URL
const oauthUrl = `${GITHUB_OAUTH_ENDPOINT}?state=${state}...`;

// 3. Verify on callback
const callbackState = params.get('state');
if (!verifyState(callbackState)) {
  throw new Error('Invalid state parameter');
}
```

### Token Handling
```typescript
// Secure storage in localStorage
const saveAuthState = (token: string, user: GitHubUser) => {
  localStorage.setItem('github_oauth_token', token);
  localStorage.setItem('github_user', JSON.stringify(user));
};

// Validation on each admin access
const authState = getAuthState();
if (!authState.token || !authState.user) {
  redirectToLogin();
}
```

### Authorization Check
```typescript
// Check before each edit operation
if (!isAuthenticated || !isAdmin) {
  return; // Operation blocked
}

// Is equivalent to:
if (!authState.token || authState.user?.login !== ADMIN_USERNAME) {
  return; // Operation blocked
}
```

## Configuration

### Environment Variables

```typescript
// config/auth.ts
export const ADMIN_USERNAME = 'keithvaz'; // Change this to your username
export const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
export const GITHUB_OAUTH_SCOPES = 'user:email';
```

### Required Environment Variable
```bash
# .env.local (development)
# or GitHub Secrets (production)
VITE_GITHUB_CLIENT_ID=your_oauth_app_client_id
```

## Test Mode

For development without GitHub OAuth setup:

```typescript
// LoginPage.tsx includes a "Use Test Account (Dev Only)" button
// Clicking it:
// 1. Creates mock user with ADMIN_USERNAME
// 2. Generates test token
// 3. Stores in localStorage
// 4. Bypasses GitHub OAuth flow

// This is for development/testing only
// Real OAuth requires GitHub OAuth App + backend setup
```

## Backend Requirements (Production)

Current implementation works for:
- ✅ Development (test mode)
- ✅ View-only mode (no auth needed)
- ❌ Production with real GitHub OAuth

For production GitHub OAuth, you need:

### Backend Server
```typescript
// POST /api/github/callback
// Receives: { code, state }
// Does:
//   1. Verify state (CSRF check)
//   2. Exchange code for token using Client Secret
//   3. Return token to frontend
// Returns: { token }

// Why?
// - Client Secret must be kept secure
// - Frontend code is visible to users
// - Token exchange happens server-side only
```

### Option: Serverless Function (Vercel)
```typescript
// api/github-callback.ts
import { headers } from 'next/headers';

export default async function handler(req, res) {
  const { code, state } = req.body;
  
  // Verify state...
  // Exchange code for token using Client Secret
  // Return token
}
```

## API Integration

### GitHub API Usage

```typescript
// Endpoint: GET https://api.github.com/user
// Headers:
//   Authorization: Bearer {access_token}
//   Accept: application/vnd.github.v3+json
// Returns:
//   {
//     login: string,
//     id: number,
//     avatar_url: string,
//     name?: string,
//     ...
//   }
```

### Rate Limits
- Authenticated requests: 5,000 per hour per user
- Used for: Fetching user info (once per admin access)
- Typical usage: <<100 per day

## Hooks & Context

### useAuth Hook
```typescript
const {
  isAuthenticated,    // boolean - token exists and valid
  isAdmin,           // boolean - user is admin
  user,              // GitHubUser | null
  token,             // string | null
  setAuth,           // (token, user) => void
  logout,            // () => void
  isLoading,         // boolean - verifying token
} = useAuth();
```

### AuthProvider Component
```typescript
<AuthProvider>
  <YourApp />
</AuthProvider>
```
- Provides auth context
- Verifies token on mount
- Manages auth state
- Available to all children via useAuth()

## Files Involved

```
Authentication System Files:
├── config/auth.ts              - Configuration
├── lib/auth.ts                 - Auth utilities
├── contexts/AuthContext.tsx    - Auth provider & hook
├── components/LoginPage.tsx    - Login UI
├── components/ProtectedRoute.tsx - Route guard
│
Integration Files:
├── index.tsx                   - Router setup
├── App.tsx                     - Auth checks
├── components/BentoCard.tsx    - Edit control checks
├── components/SortableItem.tsx - Drag protection
└── components/Toolbar.tsx      - Toolbar rendering
```

## Troubleshooting

### Invalid State Parameter Error
**Cause**: OAuth state mismatch (CSRF check failed)
**Solution**:
- Clear browser localStorage
- Clear sessionStorage
- Hard refresh page (Ctrl+Shift+R)
- Try logging in again

### Failed to Fetch GitHub User
**Cause**: Token invalid or GitHub API error
**Solution**:
- Check Client ID in environment
- Verify token is returned from backend
- Check network tab for API errors
- Verify GitHub API is accessible

### User is Not Admin
**Cause**: GitHub username doesn't match ADMIN_USERNAME
**Solution**:
- Check config/auth.ts for correct username
- Verify your GitHub username is exact
- Rebuild and redeploy
- Test with correct admin account

### Logout Not Working
**Cause**: Session state not cleared
**Solution**:
- Clear browser storage (DevTools → Application)
- Refresh page
- Check browser console for errors

## Security Best Practices

✅ **Do This**
- Keep Client Secret on backend only
- Validate tokens on each admin request
- Use HTTPS in production
- Implement token expiration
- Log authentication events
- Rate limit login attempts

❌ **Don't Do This**
- Never expose Client Secret in frontend code
- Don't hardcode tokens
- Don't skip CSRF state verification
- Don't trust client-side auth alone
- Don't store sensitive data in localStorage

## Future Enhancements

- [ ] Multiple admin users
- [ ] Role-based access (editor, viewer, etc.)
- [ ] Token refresh mechanism
- [ ] Login history/audit log
- [ ] Two-factor authentication
- [ ] Session timeout warnings
- [ ] Device management (logout all devices)
- [ ] IP whitelisting

---

For detailed setup instructions, see: `ADMIN_SETUP.md`

