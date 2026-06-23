# Deployment Guide for OxyCore Health

This guide details how to deploy the OxyCore Health website to production and connect it to your custom domain **`oxycorehealth.com`** hosted on GoDaddy.

Since the website is configured as a static export, it can be hosted on modern, fast, and secure platforms (like Vercel or GitHub Pages) for free or at very low cost.

---

## Option A: Deploying on Vercel (Recommended)

Vercel is the creator of Next.js and provides the easiest, most robust deployment.

### Step 1: Create a Vercel Account & Import Project
1. Go to [Vercel](https://vercel.com) and sign up/log in using your **GitHub account**.
2. Click **Add New** -> **Project**.
3. Import the `Arjun-Daya999/oxycore-health` repository.

### Step 2: Configure Environment Variables
Before clicking "Deploy", expand the **Environment Variables** section and add the following keys from your `.env.local` file:
* **`NEXT_PUBLIC_SUPABASE_URL`**: `https://peduhhmcubdqunradbdc.supabase.co`
* **`NEXT_PUBLIC_SUPABASE_ANON_KEY`**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (your full anon key)

Click **Deploy**. Your site will build and be live on a temporary Vercel domain (e.g. `oxycore-health.vercel.app`).

### Step 3: Link GoDaddy Domain
1. In your Vercel project dashboard, go to **Settings** -> **Domains**.
2. Type **`oxycorehealth.com`** and click **Add**.
3. Vercel will ask you to add two DNS records in your GoDaddy account:
   * **`A` Record**:
     * **Name/Host**: `@`
     * **Value/Points to**: `76.76.21.21`
   * **`CNAME` Record**:
     * **Name/Host**: `www`
     * **Value/Points to**: `cname.vercel-dns.com`

---

## Option B: Deploying on GitHub Pages (Self-contained)

We have already configured a GitHub Actions workflow that compiles your site and deploys it automatically on every push.

### Step 1: Add GitHub Repository Secrets
To allow the build script to access Supabase during deployment, you need to add your environment variables to GitHub:
1. Go to your GitHub repository: `https://github.com/Arjun-Daya999/oxycore-health`.
2. Click **Settings** -> **Secrets and variables** -> **Actions**.
3. Click **New repository secret** and add:
   * **`NEXT_PUBLIC_SUPABASE_URL`**: `https://peduhhmcubdqunradbdc.supabase.co`
   * **`NEXT_PUBLIC_SUPABASE_ANON_KEY`**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (your full anon key)

### Step 2: Enable GitHub Pages with Actions
1. In your GitHub repository settings, go to **Pages** (under the Code and automation section).
2. Under **Build and deployment** -> **Source**, select **GitHub Actions** from the dropdown menu.
3. This will trigger the deployment workflow we created. You can monitor the progress under the **Actions** tab of your repository.

### Step 3: Configure Custom Domain in GitHub & GoDaddy
1. In your GitHub Pages settings page (Settings -> Pages), scroll down to **Custom domain**.
2. Enter **`oxycorehealth.com`** and click **Save**. (Keep "Enforce HTTPS" checked once DNS resolves).
3. Log in to your **GoDaddy account** and navigate to your domain DNS settings.
4. Add the following records:
   * **`A` Records** (add all 4 pointing to GitHub Pages IPs):
     * Type: `A`, Name: `@`, Value: `185.199.108.153`
     * Type: `A`, Name: `@`, Value: `185.199.109.153`
     * Type: `A`, Name: `@`, Value: `185.199.110.153`
     * Type: `A`, Name: `@`, Value: `185.199.111.153`
   * **`CNAME` Record**:
     * Type: `CNAME`, Name: `www`, Value: `Arjun-Daya999.github.io` (representing your github username URL)

---

## How to update DNS on GoDaddy
1. Log in to your **GoDaddy Control Center**.
2. Click on **My Products** and find `oxycorehealth.com`.
3. Click on the three dots next to the domain name and select **Manage DNS**.
4. Edit or Add the records according to the hosting platform chosen above (Vercel or GitHub Pages).
5. **Note**: DNS changes can take anywhere from a few minutes to 24-48 hours to propagate globally, though they usually work within 15-30 minutes.

---

## Post-Deployment Checklist
- [ ] Visit `https://oxycorehealth.com` and ensure the site loads securely with the SSL certificate (`https://`).
- [ ] Test the contact form with a mock entry and verify that the data appears in your Supabase `leads` table.
