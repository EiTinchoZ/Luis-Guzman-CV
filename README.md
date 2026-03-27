# Luis Guzman Portfolio

Single-page portfolio and digital CV for Luis Eudoro Guzman Sanchez.

This is a standalone Next.js project prepared to live in its own GitHub repository and its own Vercel project.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Groq API for the portfolio assistant
- Optional Resend integration for contact form delivery

## What is included

- Dark premium landing page with liquid-glass styling
- ES / EN / PT language switcher
- Luis-specific content, services, methodology, fees, and contact flow
- AI chat endpoint scoped to Luis's profile
- Contact endpoint with optional Resend delivery
- Production build already verified locally

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Copy `.env.example` to `.env.local` and fill the values you want to use.

Required for AI chat:

- `GROQ_API_KEY`

Optional for contact email delivery:

- `RESEND_API_KEY`
- `CONTACT_EMAIL`
- `RESEND_FROM`

Recommended for metadata and deployment:

- `NEXT_PUBLIC_SITE_URL`

## Production build

```bash
npm run build
npm start
```

## GitHub setup

Inside this folder:

```bash
git init
git add .
git commit -m "Initial commit: Luis Guzman portfolio"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

## Vercel setup

1. Create a new Vercel project from this repository.
2. Framework preset: `Next.js`.
3. Root directory: repository root if this folder is the repo, otherwise point Vercel to `portfolio`.
4. Add the environment variables from `.env.example`.
5. Deploy.

## Important boundary

This project is a separate deliverable. Keep its branding, routes, deployment, and repository history independent.
