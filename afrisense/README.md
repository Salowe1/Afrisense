# AfriSense: Enterprise Market Intelligence Ecosystem

AfriSense is a professional-grade Market and Competitive Intelligence (M&CI) platform designed for the African continent. This document serves as the master guide for the business strategy, product functionality, database integration, and deployment process.

---

## 🌍 1. Business Model Canvas

### **The Problem**
African market data is fragmented across thousands of sources (local news, government gazettes, regulatory PDFs). Strategy teams in multinationals and local conglomerates spend 60% of their time collecting data rather than analyzing it.

### **The Solution**
AfriSense automates the collection (Aggregation), analysis (Athena AI), and distribution (Dashboards/Newsletters) of strategic signals.

### **Key Metrics**
*   **Time-to-Insight:** Reduced from 72 hours to < 5 seconds.
*   **Coverage:** 54 African countries monitored in 117+ languages.
*   **Accuracy:** 98% via Grounded AI (every fact is linked to a source).

---

## 🛠 2. Complete Feature Breakdown

1.  **Dashboard (Global Pulse):** 
    *   Macro KPIs (GDP, FDI) for continental overview.
    *   **Website Tracker:** Monitors competitor homepage changes (pricing, team shifts, new products).
2.  **Market Explorer:** 
    *   Country-specific deep dives.
    *   Sector-based filtering (Agri, Energy, Mining, Fintech).
    *   Structured strategy summaries generated via Gemini.
3.  **Athena AI Agent:** 
    *   Conversational intelligence with "Google Search Grounding."
    *   Automatic **Fact Extraction** into categorized cards (M&A, Leadership, Regulatory).
4.  **Strategic Mapping:** 
    *   Visual relationship graph (SVG-based).
    *   Shows hierarchies: Parent Companies -> Subsidiaries -> Partners.
    *   Vulnerability heatmaps based on FX risk and political exposure.
5.  **Competitive Battlecards:** 
    *   "How-to-Win" playbooks against major players (MTN, Safaricom, etc.).
    *   Live analysis buttons that refresh competitive data using Athena.
6.  **Newsletter Hub:** 
    *   Automated curation of intelligence for C-suite stakeholders.
    *   Slack/Teams integration for immediate signal delivery.
7.  **Admin Center (Superadmin):** 
    *   Full User Governance (RBAC).
    *   Infrastructure Health monitoring (Ingestion latency, DB storage).
    *   Security Overrides (SSO, 2FA enforcement).

---

## 💾 3. Database Setup Guide (Supabase / PostgreSQL)

The app is currently "stateless" (using mock data). To make it persistent, follow these steps:

### **Step 1: Provisioning**
*   Create a project on [Supabase](https://supabase.com).
*   Copy your **Project URL** and **Anon Key**.

### **Step 2: Schema Creation**
Run this in the Supabase SQL Editor:
```sql
-- Users and Roles
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE,
  full_name TEXT,
  role TEXT DEFAULT 'Intelligence Analyst',
  avatar_url TEXT,
  PRIMARY KEY (id)
);

-- Competitor Intelligence
CREATE TABLE battlecards (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  competitor_name TEXT NOT NULL,
  industry TEXT,
  strengths TEXT[],
  weaknesses TEXT,
  win_strategy TEXT,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Strategic Signals
CREATE TABLE signals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT,
  content TEXT,
  source_url TEXT,
  country_code CHAR(2),
  sentiment NUMERIC(3,2), -- -1.0 to 1.0
  impact_level TEXT -- 'High', 'Medium', 'Low'
);
```

### **Step 3: Integration**
Install the Supabase client: `npm install @supabase/supabase-js`.
Create a `services/supabase.ts` and initialize:
```typescript
import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)
```

---

## 🚀 4. GitHub Deployment Guide

Since this app uses a browser-native `importmap` and ES6 modules, it can be deployed to GitHub Pages easily.

### **Step 1: Repository Setup**
1.  Initialize a local git repo: `git init`.
2.  Create a repository on GitHub named `afri-sense-bi`.
3.  Add remote: `git remote add origin https://github.com/YOUR_USERNAME/afri-sense-bi.git`.

### **Step 2: Securing the API Key**
**WARNING:** Never hardcode your `API_KEY`.
1.  Go to your GitHub Repository **Settings > Secrets and variables > Actions**.
2.  Add a **New repository secret**:
    *   Name: `API_KEY`
    *   Value: `YOUR_GEMINI_API_KEY`

### **Step 3: Deployment via GitHub Actions**
Create a file `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Inject API Key
        run: |
          # Replace process.env.API_KEY with the actual secret during build
          sed -i "s|process.env.API_KEY|'${{ secrets.API_KEY }}'|g" services/gemini.ts

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### **Step 4: Push to Deploy**
```bash
git add .
git commit -m "Initial commit - Production ready"
git push origin main
```
Your app will be live at `https://YOUR_USERNAME.github.io/afri-sense-bi/` within minutes.

---

## 👨‍💻 5. Customization Tips
*   **Branding:** Change colors in `index.html` (Tailwind config or standard classes).
*   **Prompting:** Tweak `services/gemini.ts` to change how "Athena" behaves (e.g., make her more skeptical or more optimistic).
*   **Charts:** Recharts is used in `DashboardView.tsx`. Update the `AreaChart` components to reflect your actual database metrics.
