# Deploy Portfolio to Vercel - Step by Step Guide

This guide will walk you through deploying your Gatsby portfolio to Vercel.

## Prerequisites

- ✅ GitHub account (or GitLab/Bitbucket)
- ✅ Vercel account (free tier available)
- ✅ Node.js installed locally (for testing)
- ✅ Git installed and configured

---

## Step 1: Prepare Your Project

### 1.1 Check Your Project Structure

Ensure your project is ready:

- ✅ All dependencies are in `package.json`
- ✅ Build script exists: `"build": "gatsby build"`
- ✅ No sensitive data in code (use environment variables if needed)

### 1.2 Update Site URL (if needed)

Check `gatsby-config.js` and update the `siteUrl` if you have a custom domain:

```javascript
siteUrl: 'https://your-domain.vercel.app', // or your custom domain
```

### 1.3 Test Build Locally

Before deploying, test that your build works:

```bash
# Navigate to project directory
cd portfolio/v4

# Install dependencies (if not already done)
npm install
# or
yarn install

# Clean previous builds
npm run clean
# or
yarn clean

# Build the project
npm run build
# or
yarn build

# Test the production build locally
npm run serve
# or
yarn serve
```

If the build succeeds and the site loads at `http://localhost:9000`, you're ready to deploy!

---

## Step 2: Push to GitHub

### 2.1 Initialize Git Repository (if not already done)

```bash
# Navigate to project directory
cd portfolio/v4

# Check if git is initialized
git status

# If not initialized, run:
git init
```

### 2.2 Create .gitignore (if not exists)

Ensure `.gitignore` includes:

```
node_modules/
.cache/
public/
.DS_Store
.env
.env.local
```

### 2.3 Commit Your Code

```bash
# Add all files
git add .

# Commit
git commit -m "Ready for deployment"
```

### 2.4 Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click **"New repository"** (or the **+** icon)
3. Name it (e.g., `portfolio-v4`)
4. Choose **Public** or **Private**
5. **Don't** initialize with README (you already have files)
6. Click **"Create repository"**

### 2.5 Push to GitHub

```bash
# Add remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Example:**

```bash
git remote add origin https://github.com/Samarth1015/portfolio-v4.git
git push -u origin main
```

---

## Step 3: Deploy to Vercel

### 3.1 Sign Up / Login to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"** (recommended for easy integration)

### 3.2 Import Your Project

1. After logging in, click **"Add New..."** → **"Project"**
2. You'll see your GitHub repositories
3. Find and click **"Import"** next to your portfolio repository

### 3.3 Configure Project Settings

Vercel will auto-detect Gatsby, but verify these settings:

**Framework Preset:** `Gatsby` (should be auto-detected)

**Root Directory:**

- Leave empty if your `package.json` is in the root
- Or set to `portfolio/v4` if your repo contains multiple projects

**Build Command:**

```
npm run build
```

or

```
yarn build
```

**Output Directory:**

```
public
```

(This is Gatsby's default output directory)

**Install Command:**

```
npm install
```

or

```
yarn install
```

### 3.4 Environment Variables (if needed)

If you have any environment variables:

1. Click **"Environment Variables"**
2. Add each variable:
   - **Name:** `VARIABLE_NAME`
   - **Value:** `your_value`
   - **Environment:** Select (Production, Preview, Development)

**Note:** For this portfolio, you likely don't need any environment variables.

### 3.5 Deploy!

1. Click **"Deploy"** button
2. Wait 2-3 minutes for the build to complete
3. You'll see a success message with your deployment URL!

Your site will be live at: `https://your-project-name.vercel.app`

---

## Step 4: Post-Deployment Configuration

### 4.1 Update Site URL in gatsby-config.js

After deployment, update your `siteUrl` in `gatsby-config.js`:

```javascript
siteUrl: 'https://your-project-name.vercel.app',
```

Then commit and push:

```bash
git add gatsby-config.js
git commit -m "Update site URL for Vercel"
git push
```

Vercel will automatically redeploy!

### 4.2 Custom Domain (Optional)

1. Go to your project in Vercel dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (e.g., `samarth-acharya.com`)
4. Follow Vercel's DNS configuration instructions
5. Update `siteUrl` in `gatsby-config.js` to match

### 4.3 Update Resume PDF Path (if needed)

If your resume is in the `static` folder, ensure the path in `nav.js` and `menu.js` is correct:

```javascript
href = '/resume.pdf'; // or "/samarth_Resume_v1.0.pdf"
```

---

## Step 5: Continuous Deployment

### 5.1 Automatic Deployments

Vercel automatically deploys:

- ✅ Every push to `main` branch → **Production**
- ✅ Every pull request → **Preview deployment**
- ✅ Every branch push → **Preview deployment**

### 5.2 Manual Deployment

You can also trigger deployments manually:

1. Go to your project dashboard
2. Click **"Deployments"** tab
3. Click **"Redeploy"** on any deployment

---

## Step 6: Verify Deployment

### 6.1 Check Your Live Site

Visit your Vercel URL and verify:

- ✅ Homepage loads correctly
- ✅ All sections are visible (About, Experience, Projects, etc.)
- ✅ Links work (GitHub, LinkedIn, etc.)
- ✅ Images load properly
- ✅ Contact form/links work
- ✅ Resume PDF is accessible

### 6.2 Test on Different Devices

- Desktop browser
- Mobile browser
- Tablet

### 6.3 Check Build Logs

If something doesn't work:

1. Go to Vercel dashboard
2. Click on the deployment
3. Check **"Build Logs"** for errors

---

## Troubleshooting

### Build Fails

**Error: "Module not found"**

```bash
# Solution: Ensure all dependencies are in package.json
npm install
git add package.json package-lock.json
git commit -m "Update dependencies"
git push
```

**Error: "Build command failed"**

- Check build logs in Vercel dashboard
- Test build locally first: `npm run build`
- Ensure Node.js version is compatible (Vercel uses Node 18.x by default)

**Error: "Image not found"**

- Ensure images are in `src/images/` or `static/`
- Check image paths in your components
- Use `gatsby-plugin-image` for optimized images

### Site Not Loading

**404 Errors:**

- Check `gatsby-config.js` siteUrl
- Ensure all routes are properly configured
- Check if `gatsby-plugin-sitemap` is configured

**Styling Issues:**

- Clear Vercel cache: Redeploy
- Check if `styled-components` is properly configured
- Verify CSS is being generated

### Environment Variables Not Working

- Ensure variables are set in Vercel dashboard
- Restart deployment after adding variables
- Check variable names match exactly (case-sensitive)

---

## Quick Reference Commands

```bash
# Local Development
npm run develop          # Start dev server
npm run build            # Build for production
npm run serve            # Serve production build locally
npm run clean            # Clean cache and public folder

# Git Commands
git add .                # Stage all changes
git commit -m "message"  # Commit changes
git push                 # Push to GitHub (triggers Vercel deploy)

# Vercel CLI (Optional)
npm i -g vercel          # Install Vercel CLI
vercel                   # Deploy from command line
vercel --prod            # Deploy to production
```

---

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Gatsby Deployment Guide](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-vercel/)
- [Vercel Support](https://vercel.com/support)

---

## Summary Checklist

Before deploying:

- [ ] Project builds locally (`npm run build`)
- [ ] All dependencies are in `package.json`
- [ ] Code is pushed to GitHub
- [ ] `.gitignore` is configured
- [ ] No sensitive data in code

During deployment:

- [ ] Vercel account created
- [ ] GitHub repository connected
- [ ] Project imported to Vercel
- [ ] Build settings configured
- [ ] Deployment successful

After deployment:

- [ ] Site is accessible
- [ ] All pages load correctly
- [ ] Links and images work
- [ ] Mobile responsive
- [ ] Custom domain configured (if applicable)

---

**🎉 Congratulations! Your portfolio is now live on Vercel!**

Your site URL: `https://your-project-name.vercel.app`

Share it with the world! 🚀
