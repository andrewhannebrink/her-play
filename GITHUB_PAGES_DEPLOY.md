# GitHub Pages Deployment Guide

## Prerequisites
- GitHub account (free)
- Node.js installed locally
- Git installed

## Initial Setup

### 1. Update Configuration
First, update the following files with your GitHub username and repository name:

**package.json:**
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME"
```

**vite.config.js:**
```js
base: '/YOUR_REPO_NAME/'
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Test Locally
```bash
npm run dev
```
Visit http://localhost:5173 to see your site

## GitHub Repository Setup

### 1. Create Repository on GitHub
1. Go to https://github.com/new
2. Name your repository (e.g., `her-play-book`)
3. Make it **Public** (required for free GitHub Pages)
4. Don't initialize with README (you already have files)
5. Click "Create repository"

### 2. Push Your Code
```bash
# Add all files
git add .

# Create first commit
git commit -m "Initial commit: HER PLAY marketing page"

# Add GitHub remote (replace with your URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

## Deploy to GitHub Pages

### Option 1: Automatic Deployment (Recommended)
The GitHub Actions workflow is already set up. Just:

1. Push to main branch
2. Go to your repo on GitHub
3. Click "Actions" tab
4. Watch the deployment run
5. Once complete, visit: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

### Option 2: Manual Deployment
```bash
# Build and deploy
npm run deploy
```

This uses `gh-pages` package to:
1. Build your React app
2. Push the `dist` folder to `gh-pages` branch
3. GitHub Pages serves from this branch

## Enable GitHub Pages

### First Time Setup:
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll to "Pages" section
4. Under "Source", select:
   - Deploy from a branch: `gh-pages`
   - Folder: `/ (root)`
5. Click "Save"

Your site will be available at:
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Updating Content

### To Edit Text Content:
1. Open `src/content/bookContent.json`
2. Edit any text
3. Save the file
4. Commit and push:
```bash
git add .
git commit -m "Update content"
git push
```

### To Update Images:
1. Replace `public/cover_image.png`
2. Commit and push

### Automatic Deployment:
Every push to `main` branch triggers automatic deployment via GitHub Actions.

## Custom Domain (Optional)

To use a custom domain like `herplay.com`:

1. In repository Settings > Pages
2. Add custom domain
3. Create CNAME file in `public/` folder:
```
herplay.com
```

4. Update DNS records at your domain registrar:
   - A record: `185.199.108.153`
   - A record: `185.199.109.153`
   - A record: `185.199.110.153`
   - A record: `185.199.111.153`
   - OR CNAME: `YOUR_USERNAME.github.io`

## Troubleshooting

### Site Not Showing?
1. Check Actions tab for build errors
2. Ensure repository is public
3. Wait 5-10 minutes for first deployment
4. Check correct URL format

### 404 Error?
1. Verify `base` in `vite.config.js` matches your repo name
2. Ensure `gh-pages` branch exists
3. Check GitHub Pages is enabled in Settings

### Build Failing?
1. Run `npm run build` locally to test
2. Check Node version in workflow matches local
3. Ensure all dependencies are in package.json

## Local Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Making Changes

1. Edit components in `src/components/`
2. Update content in `src/content/bookContent.json`
3. Test locally with `npm run dev`
4. Commit and push to deploy

## Content Management for Non-Developers

For Karolina or others who want to update content:

1. Use GitHub's web interface
2. Navigate to `src/content/bookContent.json`
3. Click the pencil icon to edit
4. Make changes
5. Click "Commit changes"
6. Deployment happens automatically!

That's it! Your React app is now live on GitHub Pages with free hosting and automatic deployments.