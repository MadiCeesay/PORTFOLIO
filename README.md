# Madi Ceesay portfolio

A local React + Vite portfolio positioning Madi as a full-stack software engineer, with UI/UX as a complementary skill. Uses Tailwind CSS and custom CSS design tokens, React Router, and Lucide icons. No backend or deployment has been added.

## Run

Requires Node.js 22.12+ (or a newer supported release).

```sh
npm install
npm run dev
npm run lint
npm run build
npm run preview
npm test
```

The development server prints the local URL. Browser tests require Playwright Chromium (`npx playwright install chromium` if unavailable).

## Structure

```text
src/
  components/   Layout, navigation, buttons and image fallback
  pages/        Home, reusable ProjectDetails, NotFound
  data/         profile, projects, skills, experience, socials
  App.jsx       Routes, scroll restoration and page titles
  index.css     Responsive theme and component styling
public/
  images/       Original portrait and actual application screenshots
  cv/           Supplied CV download
```

## Edit content

- **Profile, headline, email and portrait/CV paths:** `src/data/profile.js`.
- **Portrait:** replace `public/images/portrait.jpg`. Keep the original face and aspect ratio. Crop is controlled by `.portrait-frame img` in `src/index.css`.
- **CV:** replace `public/Madi_Ceesay_CV.pdf`. All Download CV buttons use the centralized `profile.cv` value and the HTML download attribute.
- **Projects:** `src/data/projects.js` controls summaries, contributions, case-study sections, badges and live links. Add only verified details. Add a repository property and render a corresponding external link when individual repository URLs are provided.
- **Screenshots:** place genuine captures at `public/images/amc-gambia.png`, `car-rental-system.png`, and `floodwatch-gambia.png`. Missing images show a clearly labeled fallback.
- **Skills:** `src/data/skills.js`. No proficiency percentages or unsupported testing tools are shown.
- **Education:** `src/data/experience.js` supplies the education details displayed in About.
- **Approach:** `src/data/approach.js` controls the four cards in How I Build Software. Header and footer navigation use `#approach`.
- **Socials:** `src/data/socials.js`. The official LinkedIn profile is shared by the hero, Contact card, and footer icon. External social links open in a new tab.
- **Theme:** CSS variables in `src/index.css` and Tailwind's `@theme` define colors. Breakpoints cover 320px through large desktop layouts. Reduced motion is respected.
- **Metadata:** `index.html` contains the default title, description, Open Graph tags and favicon. Project page titles update on navigation.

## Content requiring review

The latest revision positions the portfolio for software engineering roles, with UI/UX as a complementary skill.

- Confirm whether AMC Gambia is the real estate application described in the CV. The CV links to `https://real-estate-project-two-rho.vercel.app/`, while the implementation prompt supplies `https://amc-gambia.vercel.app/`.
- Confirm project dates, individual contributions, design artifacts, user flows, research, testing and outcomes. No metrics or research findings have been invented.
- FloodWatch, LifeLink, RideCore and SkillLink need fuller documentation and verified stacks/repository links. Their pages state this clearly.
- Confirm the current education status and expected completion date before publishing.
- Optionally supply Figma/Behance links.
- Replace the draft CV when ready. It currently leads with full-stack engineering.

## Before any future deployment

### SkillLink and LifeLink screenshots

Their overview content is in `src/data/projects.js`. Both projects are marked In Development; listed features are planned scope and no live URL is configured. The shared overview renderer supports a portrait mobile frame for LifeLink and an uncropped web screenshot frame for SkillLink.

The project pages load `public/images/projects/lifelink-homepage.png` and `public/images/projects/skilllink-homepage.png`. Place the supplied PNG screenshots at those exact paths. A labeled fallback appears if a file is missing. Do not rename a JPEG as PNG; update each image path to match the actual file format when importing.

No deployment or Git push is authorized. `vercel.json` prepares SPA rewrites for future use. Review all draft documentation before publishing. Once a production domain is selected, add canonical URLs, an absolute Open Graph image URL, and a sitemap/robots configuration using that real domain. A guessed domain is intentionally not included.

