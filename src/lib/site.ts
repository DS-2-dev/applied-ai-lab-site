// Site-wide links and where the Worker is. The site is static (GitHub Pages,
// scripts/build-pages.mjs), so everything server-side, Ask the Lab and
// Projectum accounts, goes to the Cloudflare Worker (worker/).

import { copy } from "@/content/copy";

// The site's section links, for the header and footer. They are How it
// works' steps, so the lists cannot drift.
export const NAV = copy.how.steps.map((s) => ({ id: s.id, label: s.label, href: `/#${s.id}` }));

// The sub-path the site is served under, "" at a domain's root. GitHub Pages
// serves a repo at /<repo>, so its build sets NEXT_PUBLIC_BASE_PATH. Links
// get it from Next (basePath in next.config.ts); plain <img> and CSS urls
// to files in public/ need it added by hand.
export const BASE = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");

export const JOIN_HREF = "/signup";
export const LOGIN_HREF = "/login";

// The Worker. NEXT_PUBLIC_ASK_URL points any build at another copy of it,
// such as `wrangler dev` on http://localhost:8787.
const WORKER_URL = (process.env.NEXT_PUBLIC_ASK_URL || "https://appliedlab-ask.now-playing.workers.dev").replace(/\/$/, "");

// Where Ask the Lab sends questions.
export const ASK_URL = WORKER_URL;

// Projectum accounts and projects.
export const ACCOUNT_URL = WORKER_URL;
