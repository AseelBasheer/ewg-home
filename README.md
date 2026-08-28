# East West Global LLC Website

A professional business website for [ewglobal-llc.com](https://ewglobal-llc.com), built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- Responsive design for desktop and mobile
- Hero, About, Services, Vision, and Contact sections
- Contact form with success state
- SEO metadata and Open Graph tags
- Professional navy blue and gold branding
- Content focused on data automation and digital transformation of commercial attachments

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:43123](http://localhost:43123) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## GitHub

**Repository:** https://github.com/AseelBasheer/ewg-home.git

### Clone from Origin (WSL on Windows)

```bash
# Run in WSL (Origin CLI is not available in PowerShell)
curl -fsSL https://downloads.cursor.com/origin/install.sh | sh
origin auth login
origin repo clone shamarya88/ewg-home
```

If `origin` is not found after install:

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

### Push to GitHub

After cloning from Origin, add GitHub and push:

```bash
git remote add github https://github.com/AseelBasheer/ewg-home.git
git push -u github main
```

Or clone from GitHub directly:

```bash
git clone https://github.com/AseelBasheer/ewg-home.git
```

Origin CLI docs: https://cursor.com/docs/origin/cli

## Deploy to Cloudflare Pages (no local install)

**Full browser-only guide:** see [CLOUDFLARE.md](./CLOUDFLARE.md)

Quick steps:
1. Import repo at https://github.com/new/import from `https://origin.cursor.com/shamarya88/ewg-home.git`
2. Cloudflare Dashboard → Workers & Pages → Connect to Git → select `AseelBasheer/ewg-home`
3. Build command: `npm run build` · Output directory: `out`
4. Add custom domain: `ewglobal-llc.com`

## Customization

- **Content:** Edit the component files in `src/components/` to update copy, services, and contact details.
- **Branding:** Adjust colors in `src/app/globals.css` under the `:root` CSS variables.
- **Contact form:** The form currently shows a success message locally. Connect it to a backend service (e.g., Cloudflare Workers, Formspree, or Resend) for real email delivery.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout and metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles and theme
├── components/
│   ├── ui/             # shadcn/ui primitives
│   ├── header.tsx
│   ├── hero.tsx
│   ├── about.tsx
│   ├── services.tsx
│   ├── vision.tsx
│   ├── contact.tsx
│   └── footer.tsx
└── lib/
    └── utils.ts
```

## Tech Stack

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
