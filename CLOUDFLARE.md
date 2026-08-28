# Deploy to Cloudflare Pages (no local install needed)

Everything runs in the **browser** and on **Cloudflare's servers**. You do not need WSL, Git, or free disk space on your PC.

## Step 1 — Import code into GitHub (browser only)

1. Open **https://github.com/new/import**
2. **Old repository's clone URL:**
   ```
   https://origin.cursor.com/shamarya88/ewg-home.git
   ```
3. **Owner:** `AseelBasheer`
4. **Repository name:** `ewg-home`
5. Set visibility (Public or Private) and click **Begin import**
6. Wait until import finishes — you should see files like `src/`, `package.json`, `README.md`

> If import asks you to sign in, use your Cursor/Origin account.

---

## Step 2 — Create Cloudflare Pages project (browser only)

1. Sign in at **https://dash.cloudflare.com**
2. Go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Connect your **GitHub** account and authorize Cloudflare
4. Select repository: **`AseelBasheer/ewg-home`**
5. Configure build settings:

   | Setting | Value |
   |---------|-------|
   | **Framework preset** | Next.js (Static HTML Export) |
   | **Build command** | `npm run build` |
   | **Build output directory** | `out` |
   | **Root directory** | `/` |

6. Click **Save and Deploy**
7. Wait 2–5 minutes for the first deploy to complete

Your site will be live at a URL like: `https://ewg-home.pages.dev`

---

## Step 3 — Connect your domain `ewglobal-llc.com`

1. In your Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter **`ewglobal-llc.com`** and also add **`www.ewglobal-llc.com`**
4. Because the domain is already on Cloudflare, DNS is configured automatically
5. Wait a few minutes for SSL — your site will be live at **https://ewglobal-llc.com**

---

## Updating the site later

When changes are pushed to the `main` branch on GitHub, Cloudflare rebuilds and deploys automatically.

To push updates from Cursor Cloud Agent, the agent commits to Origin; re-import or sync to GitHub, or ask the agent to push to GitHub if you add a deploy token.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Import fails | Make sure you're logged into Cursor/Origin in the browser |
| Build fails on Cloudflare | Check build logs; ensure **output directory** is `out` |
| Domain not working | Confirm domain is in the same Cloudflare account under **Websites** |
| Blank page after deploy | Hard-refresh or clear cache; check Cloudflare build succeeded |

---

## Optional: deploy from Cloudflare dashboard without GitHub

If GitHub import does not work:

1. Ask the Cursor agent to run a production build
2. In Cloudflare: **Workers & Pages** → **Create** → **Pages** → **Upload assets**
3. Upload the `out` folder contents (agent can prepare this)

This project is configured for static export (`output: "export"`) so it works on Cloudflare Pages without a Node server.
