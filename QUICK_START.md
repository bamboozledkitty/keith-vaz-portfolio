# Quick Start Guide - Admin Access

## What Changed?

Your portfolio now has two modes:

- **Public**: Anyone can view (read-only) - `/`
- **Admin**: Only you can edit - `/#/admin`

## Try It Now

### Development

```bash
# Start dev server
npm run dev

# Public mode: http://localhost:3001/keith-vaz-portfolio/
# Admin mode: http://localhost:3001/keith-vaz-portfolio/#/admin

# Click "Use Test Account (Dev Only)" to test editing
```

### Testing Features

1. **View-Only Mode**
   - Go to `/`
   - See portfolio with no edit controls
   - No toolbar visible

2. **Admin Login**
   - Go to `/#/admin`
   - Click "Use Test Account (Dev Only)"
   - See admin header and edit controls appear

3. **Editing**
   - Hover over any card to see edit/delete buttons
   - Click card to edit content
   - Click toolbar buttons to add new items
   - Drag cards to reorder (when admin)

4. **Logout**
   - Click "Logout" button in admin header
   - Returns to view-only mode

## Production Setup

### Step 1: Create GitHub OAuth App

1. Go to [GitHub Settings](https://github.com/settings/developers)
2. Click **OAuth Apps** → **New OAuth App**
3. Fill in:
   - **App name**: `Keith Vaz Portfolio`
   - **Homepage URL**: `https://your-username.github.io/keith-vaz-portfolio/`
   - **Callback URL**: `https://your-username.github.io/keith-vaz-portfolio/#/admin/callback`
4. Copy the **Client ID**

### Step 2: Set Your Admin Username

Edit `config/auth.ts`:
```typescript
export const ADMIN_USERNAME = 'your-github-username';
```

### Step 3: Configure Environment

Create `.env.local`:
```
VITE_GITHUB_CLIENT_ID=your_client_id_here
```

### Step 4: Build & Deploy

```bash
# Test build
npm run build

# Commit and push to GitHub
git add .
git commit -m "Add GitHub OAuth admin authentication"
git push
```

## Important Notes

⚠️ **Backend Required for Production**

The test mode works without a backend, but for real GitHub OAuth you need:

- A backend server to safely exchange the OAuth code for a token
- Never expose your Client Secret in client code
- See `ADMIN_SETUP.md` for backend setup options

## URLs

- **Public Portfolio**: `https://your-username.github.io/keith-vaz-portfolio/`
- **Admin Login**: `https://your-username.github.io/keith-vaz-portfolio/#/admin`
- **Admin Dashboard**: `https://your-username.github.io/keith-vaz-portfolio/#/admin` (after login)

## Troubleshooting

**Test mode not working?**
- Clear browser localStorage: DevTools → Application → Clear Site Data
- Refresh page

**OAuth redirect not working?**
- Check GitHub OAuth App settings match exactly
- Verify Client ID in `.env.local`
- Check browser console for errors

**Need real OAuth?**
- See `ADMIN_SETUP.md` for backend setup
- Use Vercel serverless functions (easiest)
- Or deploy separate backend service

## Files to Read

- **`ADMIN_SETUP.md`** - Complete setup guide (read this first)
- **`IMPLEMENTATION_SUMMARY.md`** - Technical details
- **`README.md`** - Original portfolio documentation

---

**Questions?** See `ADMIN_SETUP.md` for detailed troubleshooting.

