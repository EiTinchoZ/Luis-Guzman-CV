# Install and Deploy

## 1. Install locally

```bash
npm install
```

## 2. Configure environment

Create `.env.local` from `.env.example`.

Minimum setup:

```bash
GROQ_API_KEY=your_groq_key
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

Optional contact email delivery:

```bash
RESEND_API_KEY=re_your_key
CONTACT_EMAIL=luiseudoro@gmail.com
RESEND_FROM=Luis Guzman Portfolio <onboarding@resend.dev>
```

## 3. Run locally

```bash
npm run dev
```

## 4. Build locally

```bash
npm run build
```

## 5. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Luis Guzman portfolio"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

## 6. Deploy on Vercel

- Import the GitHub repository
- Select `Next.js`
- Add the environment variables
- Deploy

If the repository root is above this app folder, set the Vercel root directory to `portfolio`.
