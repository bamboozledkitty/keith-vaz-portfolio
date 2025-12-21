# Deployment Checklist

Use this checklist to ensure your admin authentication is properly set up before deployment.

## Phase 1: Local Testing ✅

- [ ] Verified that `npm run dev` starts the dev server
- [ ] Tested view-only mode at `/`
- [ ] Tested admin login at `/#/admin`
- [ ] Tested "Use Test Account (Dev Only)" for local testing
- [ ] Verified edit controls appear when logged in
- [ ] Verified edit controls disappear after logout
- [ ] Tested that cards are not editable in view-only mode
- [ ] Tested that toolbar is hidden in view-only mode

## Phase 2: Configuration

### Admin Username
- [ ] Updated `ADMIN_USERNAME` in `config/auth.ts` to your GitHub username
- [ ] Example: `export const ADMIN_USERNAME = 'keithvaz';`

### Environment Setup
- [ ] Created `.env.local` file in project root
- [ ] Added `VITE_GITHUB_CLIENT_ID=...` (you'll get this in Phase 3)

## Phase 3: GitHub OAuth App Creation

- [ ] Went to [GitHub Settings - OAuth Apps](https://github.com/settings/developers)
- [ ] Created new OAuth App with:
  - [ ] **Name**: `Keith Vaz Portfolio` (or preferred name)
  - [ ] **Homepage URL**: `https://your-username.github.io/keith-vaz-portfolio/`
  - [ ] **Callback URL**: `https://your-username.github.io/keith-vaz-portfolio/#/admin/callback`
- [ ] Copied the **Client ID** from the OAuth App page
- [ ] **IMPORTANT**: Did NOT copy or expose the Client Secret anywhere

### Add Client ID to Environment
- [ ] Pasted Client ID into `.env.local`:
  ```
  VITE_GITHUB_CLIENT_ID=copied_client_id_here
  ```

## Phase 4: Production Build Testing

```bash
npm run build
```

- [ ] Build succeeds with no errors
- [ ] Build output shows: `✓ built in XXXms`
- [ ] No TypeScript errors or warnings

## Phase 5: Backend Setup (Production Only)

Choose one approach:

### Option A: Vercel Serverless (Easiest)
- [ ] Created Vercel account (free)
- [ ] Created `api/github-callback.ts` serverless function
- [ ] Function handles code-to-token exchange
- [ ] Updated `lib/auth.ts` `requestAccessToken()` to call your endpoint
- [ ] Tested token exchange in development

### Option B: Custom Backend
- [ ] Deployed backend service (Node.js/Python/Go)
- [ ] Backend endpoint exchanges code for token
- [ ] Backend keeps Client Secret secure (never expose in frontend)
- [ ] Updated `lib/auth.ts` to call your backend

### Option C: Development Only (Not Recommended)
- [ ] Using test mode only (test account feature)
- [ ] ⚠️ Real GitHub OAuth will not work
- [ ] ⚠️ Suitable only for personal testing

## Phase 6: GitHub Pages Configuration

### Repository Settings
- [ ] Repository name: `{username}.github.io` or has GitHub Pages enabled
- [ ] GitHub Pages source: Main branch (or gh-pages depending on setup)
- [ ] Custom domain: (optional) set up if you have one

### Environment Variables (GitHub Secrets)
If using GitHub Actions to deploy:
- [ ] Added `VITE_GITHUB_CLIENT_ID` secret to repository
  - Go to: Settings → Secrets and variables → Actions
  - Click "New repository secret"
  - Add `VITE_GITHUB_CLIENT_ID` with your Client ID value

## Phase 7: Pre-Deployment Code Review

- [ ] Reviewed modified files for sensitive data
- [ ] Verified no Client Secret in any source files
- [ ] Verified `.gitignore` includes `.env.local` (if using one)
- [ ] No hardcoded credentials in code

### Files Modified:
- [ ] `config/auth.ts` - Only has public config
- [ ] `lib/auth.ts` - Has comments but no secrets
- [ ] `contexts/AuthContext.tsx` - Auth logic only
- [ ] `components/LoginPage.tsx` - UI for OAuth
- [ ] `components/ProtectedRoute.tsx` - Route protection
- [ ] `App.tsx` - Integration with auth context
- [ ] `components/BentoCard.tsx` - Conditional edit controls
- [ ] `components/SortableItem.tsx` - Drag protection
- [ ] `components/Toolbar.tsx` - Conditional toolbar
- [ ] `index.tsx` - Router setup
- [ ] `package.json` - Added react-router-dom

## Phase 8: Deployment

### Commit & Push
```bash
git add .
git commit -m "Add GitHub OAuth admin authentication"
git push origin main
```

- [ ] All files committed
- [ ] Pushed to main branch
- [ ] GitHub Actions running (if set up)
- [ ] Wait for deployment to complete

### Verify Deployment
- [ ] Public site loads: `https://your-username.github.io/keith-vaz-portfolio/`
- [ ] Admin login accessible: `https://your-username.github.io/keith-vaz-portfolio/#/admin/login`
- [ ] Edit controls hidden in public mode
- [ ] Can click "Login with GitHub" (if backend set up)

## Phase 9: Testing in Production

### Public Mode
- [ ] Visit main portfolio URL
- [ ] No edit controls visible
- [ ] No toolbar shown
- [ ] Portfolio displays correctly

### Admin Mode
- [ ] Visit `/#/admin`
- [ ] If no backend: Use test account or implement backend first
- [ ] If with backend: Test GitHub OAuth login flow
- [ ] Verify username check works
- [ ] If not admin username: Should redirect to login or show error

### Edit Testing (if authenticated)
- [ ] Hover over card: Edit controls appear
- [ ] Click card: Edit modal opens
- [ ] Drag cards: Reordering works
- [ ] Toolbar buttons: Add new items work
- [ ] Delete button: Remove items works
- [ ] Resize buttons: Change card size works

## Phase 10: Final Verification

- [ ] Admin username is your GitHub username
- [ ] Only you can login and edit
- [ ] Logout button works
- [ ] Public visitors see read-only mode
- [ ] No Client Secret exposed anywhere
- [ ] Build is optimized for production

## Known Limitations (As Of Now)

- [ ] Portfolio data stored client-side (not persistent across sessions/devices)
  - To persist: Implement backend database
- [ ] Only one admin user supported
  - To extend: Modify auth logic to check array of usernames
- [ ] Test mode available (dev only)
  - Use for local development, remove before production

## Rollback Plan

If something goes wrong:

1. **Revert code**: `git revert HEAD`
2. **Restore backup**: Check your git history
3. **Check logs**: Review GitHub Actions logs for errors
4. **Clear cache**: Users may need to hard refresh (Ctrl+Shift+R)

## Still Need Help?

Read these files in order:

1. **`QUICK_START.md`** - Basic setup overview
2. **`ADMIN_SETUP.md`** - Detailed setup instructions
3. **`IMPLEMENTATION_SUMMARY.md`** - Technical deep dive

---

## Status Tracking

```
Phase 1: Local Testing          [ ] → [✓]
Phase 2: Configuration          [ ] → [✓]
Phase 3: GitHub OAuth App       [ ] → [✓]
Phase 4: Production Build       [ ] → [✓]
Phase 5: Backend Setup          [ ] → [✓]
Phase 6: GitHub Pages Config    [ ] → [✓]
Phase 7: Code Review            [ ] → [✓]
Phase 8: Deployment             [ ] → [✓]
Phase 9: Production Testing     [ ] → [✓]
Phase 10: Final Verification    [ ] → [✓]
```

When all phases are complete, your GitHub OAuth admin authentication is ready! 🚀

---

**Last Updated**: December 2024

