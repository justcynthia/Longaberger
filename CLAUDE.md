# Tebbetts Community Club — Website

Static site for the Tebbetts Community Club, hosted on GitHub Pages.

## Why this repo exists

The club's existing site is on WordPress.com's **free** plan, which blocks
plugins, SFTP, custom CSS, and Application Passwords — so there is no way to
manage a custom-designed page through the WordPress admin or REST API.
This repo hosts the real page instead; the WordPress site links to it.

## Stack

Plain HTML/CSS/JS. No build step, no framework, no dependencies.
Open `index.html` in a browser to preview locally.

## Layout

- `index.html` — main page
- `assets/css/` — stylesheets
- `assets/js/` — scripts
- `assets/img/` — images
- `.nojekyll` — tells GitHub Pages to serve files as-is (no Jekyll processing)

## Deploying

Push to `main`. GitHub Pages rebuilds in roughly 30 seconds.

```bash
git add -A && git commit -m "Describe the change" && git push
```

## Conventions

- Keep it dependency-free — no npm, no CDN frameworks unless there's a clear reason.
- Relative asset paths only (`assets/css/style.css`, not `/assets/css/style.css`),
  so the site works both at the Pages subpath and at a custom domain.
- Mobile-first; many club visitors will be on phones.
