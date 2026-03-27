# Vercel Setup

## Project

- Repository: `https://github.com/EiTinchoZ/Luis-Guzman-CV.git`
- Framework: `Next.js`
- Branch: `main`

## Recommended Vercel configuration

Create a new Vercel project and import the GitHub repository above.

Use these settings:

- Framework preset: `Next.js`
- Root directory: `.`
- Build command: `npm run build`
- Install command: `npm install`
- Output directory: leave empty

## Environment variables

Add these in the Vercel project settings:

### Required

- `GROQ_API_KEY`
- `NEXT_PUBLIC_SITE_URL`

### Optional

- `RESEND_API_KEY`
- `CONTACT_EMAIL`
- `RESEND_FROM`

## Suggested values

If Luis will use the default Vercel domain first:

```env
NEXT_PUBLIC_SITE_URL=https://your-vercel-project.vercel.app
CONTACT_EMAIL=luiseudoro@gmail.com
RESEND_FROM=Luis Guzman Portfolio <onboarding@resend.dev>
```

When Luis has a custom domain, update `NEXT_PUBLIC_SITE_URL` to that final domain.

## First deployment flow

1. Import `EiTinchoZ/Luis-Guzman-CV`
2. Add environment variables
3. Deploy
4. Open the site
5. Test:
   - language switcher
   - chat widget
   - contact section
   - metadata preview
   - mobile layout

## Post-deploy checks

After deploy, verify:

- homepage loads correctly
- `robots.txt` responds
- `sitemap.xml` responds
- chat works if `GROQ_API_KEY` is present
- contact route works if `RESEND_API_KEY` is present
- OG image works at `/og`

## Local preview

To preview locally from this folder:

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```
