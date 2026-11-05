# Local implementation report

## Official LinkedIn update

The official LinkedIn URL is now stored in `src/data/socials.js`, shared by the hero icon, Contact card, and new footer icon. All three links use `target="_blank"` and `rel="noopener noreferrer"`, with accessible names and orange hover styles. Lucide React is pinned to 0.468.0 because the previously installed 1.x release does not export its LinkedIn brand icon. Build and lint passed. LinkedIn's public endpoint returned status 999 to automated fetching, so destination page content could not be independently inspected. Earlier notes about a missing LinkedIn URL are superseded by this update. No portrait or project assets were modified, and nothing was deployed or pushed.

## Latest targeted engineering revision

The homepage now leads with Full-Stack Software Engineer. Hero, About, skills, project descriptions, contact copy and page metadata reflect engineering-first positioning. UI/UX remains a complementary skill. About retains education from the supplied data. The homepage timeline has been replaced with How I Build Software and its four Understand / Architect / Build / Validate cards. Header and footer now use Approach and `#approach`.

The black/orange theme, portrait, typography, existing interactions, project cards, project screenshot files and CV were preserved. The portrait SHA-256 matches the original supplied file exactly. No assets were deleted or overwritten during this revision.

Modified: `src/pages/Home.jsx`, `src/components/Layout.jsx`, `src/data/profile.js`, `src/data/skills.js`, `src/data/projects.js`, `src/App.jsx`, `src/index.css`, `index.html`, `playwright.config.js`, existing responsive tests and README. Added `src/data/approach.js` and `tests/engineering.spec.js`.

Checks: production build and lint passed. The full browser suite passed all 3 tests against a separate local production preview, covering navigation, the new approach anchor, contact links, CV download bytes, project assets and routes, and overflow at 320 / 375 / 390 / 768 / 1024 / 1440px. Earlier checks against an occupied development server timed out; the production-preview run passed using a single browser worker. GitHub returned HTTP 200. Email matches the supplied CV; inbox delivery was not tested. LinkedIn remains hidden because its URL is missing. The supplied CV download is intact. Project contribution gaps and the unconfirmed AMC/CV relationship remain documented. Nothing was deployed or pushed.

The earlier report below describes the initial implementation and is retained as historical context; this revision supersedes its UI/UX-first positioning and homepage timeline details.

## Delivered

React 19 / Vite 8 / Tailwind CSS 4 frontend with React Router 7 and Lucide icons. UI/UX-first positioning follows the user's clarification. Black/orange responsive design, supplied portrait, sticky navigation, mobile menu, project cards, six reusable project detail routes, About, skills, education timeline, contact, CV download, footer and 404 route are implemented. Reduced-motion support, keyboard focus styles, skip navigation, metadata, favicon and future Vercel SPA rewrites are included. Motion was not needed for the restrained CSS interactions.

Content lives in `src/data`; reusable components in `src/components`; route views in `src/pages`. Assets live in `public/images` and `public/cv`. Root configuration covers Vite, ESLint, Playwright and future Vercel routing. `README.md` documents editing and running the project. Earlier deletion of the original HTML/CSS assets was explicitly requested before this implementation; Git history is preserved.

## Checks executed

- `npm install`: completed, with a package lock saved locally (no Git commit or push performed).
- JavaScript syntax checks: Vite config, ESLint config, capture script and projects data passed.
- `npm run build`: passed. Output: `dist`; approximately 283.61 kB JS (90.13 kB gzip), 20.50 kB CSS (5.54 kB gzip).
- `npm run lint`: passed, no reported errors or warnings.
- `npm test`: **2 passed**, final command exited with code 0. Verified homepage, actual portrait loading, CV HTTP availability, project navigation, six direct project routes, nested route refresh, 404, no runtime page errors during route tests, responsive overflow checks at 320/375/390/768/1024/1440px, menu state, Escape, focus restoration, and mobile section navigation.
- Desktop and mobile full-page screenshots were visually inspected and compared with the supplied design direction. Reference style was retained, while Work was moved earlier for UI/UX applications.
- All three public project URLs returned HTTP 200 through Chromium. Real viewport screenshots are saved locally. See `project-verification.json` for read-only inspection results. No live project was modified.

The first build found missing brand icon exports in the installed Lucide release; imports were corrected. The first responsive test used an accessible-name locator that changed when the menu opened; the test locator was corrected and the suite rerun successfully. Network restrictions required a retry for dependency installation and external screenshots. Browser tests used the existing local Chromium executable via `PLAYWRIGHT_CHROMIUM_EXECUTABLE`.

## Remaining review items

- Draft CV remains unchanged; replace it when ready. The site leads with UI/UX while the supplied CV leads with full-stack engineering.
- LinkedIn is empty and hidden. No individual repository links or Figma links were invented.
- Confirm AMC's relationship to the differently linked real estate project in the CV, its contribution details and stack.
- FloodWatch and the three additional projects need verified contributions, stacks, dates, design artifacts, and fuller case-study documentation. Those pages explicitly mark missing documentation; unsupported research, testimonials, employment or metrics are omitted.
- Confirm current education status before publishing.
- Captures reflect the pages as loaded: AMC's external background imagery and FloodWatch map tiles were not visible in the captured session. Replace captures with fully loaded approved images if desired. Live project data availability was not exhaustively tested.
- Production domain, absolute social-sharing URL, canonical metadata and sitemap remain to be configured once hosting is approved. The portfolio itself has not been deployed, and nothing has been pushed to GitHub.

## Local preview

`npm run dev` starts the frontend. The review server was launched at `http://127.0.0.1:5173/`. Use `npm run build` and `npm run preview` for a local production preview. Tests can use an already-running server with `PORTFOLIO_SERVER_EXTERNAL=1` if needed.
