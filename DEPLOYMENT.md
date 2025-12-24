# Hostinger Deployment Guide for Omix Solutions

This guide will walk you through deploying your Next.js website to Hostinger hosting.

## Prerequisites

- Hostinger account with hosting plan
- FTP/SFTP access or cPanel access
- Node.js installed locally (for building)
- Git installed (optional but recommended)

## Step-by-Step Deployment Process

### Option 1: Using Hostinger's Node.js Hosting (Recommended)

#### Step 1: Prepare Your Project

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **Test the build:**
   ```bash
   npm start
   ```
   Verify everything works on `http://localhost:3000`

#### Step 2: Configure Hostinger

1. **Login to Hostinger hPanel:**
   - Go to https://hpanel.hostinger.com
   - Login with your credentials

2. **Enable Node.js:**
   - Navigate to "Advanced" → "Node.js"
   - Enable Node.js and select version (use Node.js 18.x or 20.x)
   - Set Application Root to your domain root or subdirectory
   - Set Application Startup File to: `server.js` or `server/index.js`

#### Step 3: Upload Files

1. **Upload via File Manager:**
   - Go to "Files" → "File Manager"
   - Navigate to your domain's public_html folder
   - Upload all files EXCEPT:
     - `node_modules/` (will be installed on server)
     - `.next/` (will be rebuilt on server)
     - `.git/` (not needed)

2. **Or upload via FTP:**
   - Use FTP client (FileZilla, WinSCP, etc.)
   - Connect using FTP credentials from Hostinger
   - Upload project files to public_html

#### Step 4: Install Dependencies on Server

1. **Via SSH (if available):**
   ```bash
   ssh your-username@your-domain.com
   cd public_html
   npm install --production
   ```

2. **Or via Terminal in hPanel:**
   - Go to "Advanced" → "Terminal"
   - Navigate to your project directory
   - Run: `npm install --production`

#### Step 5: Build on Server

```bash
npm run build
```

#### Step 6: Create Server File

Create `server.js` in your project root:

```javascript
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
```

#### Step 7: Configure Environment

1. **Set Environment Variables in hPanel:**
   - Go to "Advanced" → "Node.js"
   - Add environment variables:
     - `NODE_ENV=production`
     - `PORT=3000` (or your assigned port)

#### Step 8: Start Application

1. **In Node.js settings:**
   - Set Application Startup File: `server.js`
   - Click "Save" and "Restart App"

### Option 2: Static Export (Alternative)

If Node.js hosting is not available, you can export as static site:

#### Step 1: Update next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // ... rest of your config
}

module.exports = nextConfig
```

#### Step 2: Build Static Site

```bash
npm run build
```

#### Step 3: Upload to Hostinger

1. Upload the `out/` folder contents to `public_html/`
2. Your site will be available immediately

**Note:** Static export has limitations:
- No server-side features
- No API routes
- No dynamic routes with `getServerSideProps`

### Option 3: Using Vercel (Easiest - Recommended)

If Hostinger doesn't support Node.js well, use Vercel (free):

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Next.js
   - Click "Deploy"
   - Your site will be live in minutes!

3. **Connect Custom Domain:**
   - In Vercel dashboard, go to your project
   - Settings → Domains
   - Add your Hostinger domain
   - Update DNS records in Hostinger:
     - Add CNAME: `@` → `cname.vercel-dns.com`
     - Or A record: `@` → Vercel IP

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify language switcher works
- [ ] Check all forms are functional
- [ ] Test on mobile devices
- [ ] Verify SSL certificate is active (HTTPS)
- [ ] Check page load speed
- [ ] Test contact forms
- [ ] Verify all images load
- [ ] Check navigation links

## Troubleshooting

### Issue: CSS not loading
- Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)
- Check if `globals.css` is in the build
- Verify Tailwind is processing correctly

### Issue: 500 Error
- Check server logs in hPanel
- Verify Node.js version compatibility
- Ensure all dependencies are installed

### Issue: Page not found
- Check routing configuration
- Verify file structure matches Next.js app directory structure
- Check `.htaccess` if using static export

### Issue: Slow loading
- Enable compression in Hostinger settings
- Optimize images
- Use CDN for static assets
- Enable caching

## Environment Variables

If you need environment variables, add them in:
- Hostinger hPanel → Advanced → Node.js → Environment Variables
- Or create `.env.local` file (for local development only)

## Support

For Hostinger-specific issues:
- Hostinger Support: https://www.hostinger.com/contact
- Hostinger Knowledge Base: https://support.hostinger.com

For Next.js deployment issues:
- Next.js Docs: https://nextjs.org/docs/deployment
- Vercel Docs: https://vercel.com/docs

## Quick Commands Reference

```bash
# Local development
npm run dev

# Build for production
npm run build

# Test production build locally
npm start

# Static export
npm run build  # (with output: 'export' in config)

# Install dependencies
npm install

# Check for updates
npm outdated
```

---

**Recommended:** Use Vercel for easiest deployment, then connect your Hostinger domain. This gives you:
- Free hosting
- Automatic SSL
- Global CDN
- Easy updates via Git
- Better performance

