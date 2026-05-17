# JG University - Project Context & Architecture

This document provides a comprehensive overview of the JG University Next.js application codebase. It is designed to quickly onboard AI assistants (like Claude) to the structural conventions, routing methodologies, and tech stack utilized in this project.

## 1. Tech Stack

- **Framework**: Next.js 16.2.6 (App Router, Turbopack)
- **UI Library**: React 19.2.4
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Language**: TypeScript 5
- **Animations/Interactions**: Framer Motion (`framer-motion`)
- **Icons**: Lucide React (`lucide-react`)
- **E2E / Browser Validation**: Playwright / Chromium (For structural testing if needed)

## 2. Folder Structure

```text
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx                # Global layout wrapping all pages (contains <Navbar /> and <Footer />)
│   ├── page.tsx                  # Landing / Home Page
│   │
│   ├── admission-open/           # Standalone static route
│   │   └── page.tsx
│   ├── campus/                   # Standalone static route
│   │   └── page.tsx
│   ├── collaborations/           # Standalone static route
│   │   └── page.tsx
│   ├── faculty/                  # Standalone static route
│   │   └── page.tsx
│   ├── faq/                      # Standalone static route
│   │   └── page.tsx
│   ├── our-dna/                  # Standalone static route
│   │   └── page.tsx
│   ├── why-us/                   # Standalone static route
│   │   └── page.tsx
│   │
│   └── [slug]/                   # Dynamic Template Route (Crucial Architecture Piece)
│       └── page.tsx              # Universal template handling 40+ dynamic programme subpages
│
├── components/
│   ├── layout/                   # Global layout components (Navbar, Footer, Modals)
│   │   ├── AdmissionPopup.tsx
│   │   ├── AnnouncementBanner.tsx
│   │   ├── FloatingWidgets.tsx
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx            # Note: Hover state logic runs client-side here
│   │
│   ├── sections/                 # Reusable page sections (primarily used by Home Page)
│   │   ├── AboutSection.tsx
│   │   ├── CampusSection.tsx
│   │   ├── CtaSection.tsx
│   │   ├── FacultySection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LeadershipSection.tsx
│   │   ├── OurStrengths.tsx
│   │   ├── PartnersMarquee.tsx
│   │   ├── PartnersSection.tsx
│   │   ├── ProgrammesSection.tsx
│   │   ├── SalientFeatures.tsx
│   │   ├── StatsBar.tsx
│   │   └── TestimonialsSection.tsx
│   │
│   └── ui/                       # Low-level UI elements
│       └── Button.tsx
│
└── data/
    └── programmes.ts             # Centralized Data Registry for dynamic programme pages
```

## 3. Core Architecture Details

### A. Dynamic Routing (`[slug]`) vs Static Routing
- The site has ~50 mapped URLs (found in `site.txt`), mostly consisting of degree programmes (e.g. `/bba`, `/mba`, `/bca`, `/b-tech`).
- **DO NOT** create individual hardcoded page directories for degree programmes (e.g., do not build `src/app/bba/page.tsx`). 
- Instead, **all 40+ programme URLs are caught by `src/app/[slug]/page.tsx`**.
- Only unique, administrative-style pages (like `/faculty`, `/campus`, `/why-us`, `/admission-open`) get their own static folder routes.

### B. The Centralized Data Registry (`src/data/programmes.ts`)
- `src/app/[slug]/page.tsx` renders data fetched from the `src/data/programmes.ts` data dictionary.
- The `programmes.ts` dictionary utilizes a structured `Programme` TypeScript schema.
- The schema supports both *generic arrays* (e.g., `specializationsStr`) for simple string lists, and *high-fidelity object arrays* (e.g., `specializationsObj`, `highlightsObj`) containing customized Tailwind icon background colors, descriptions, and list elements.
- It also supports an `eligibilityType: 'split-boxes'` flag to explicitly render highly customized UI patterns exactly as per the client's reference designs for specific courses.

### C. Global Layouts & Hydration Consistency
- Previously, `Navbar.tsx` and `Footer.tsx` were mistakenly imported into individual subpages. This caused hydration mismatch errors and functionally broke the absolute-positioned hover state menus in the Navbar.
- **Rule**: `Navbar` and `Footer` are rendered *exclusively* inside `src/app/layout.tsx`. No subpage (`page.tsx`) should manually import or render them.

### D. CSS and Styling Overrides
- Tailwind CSS v4 is used with `@tailwindcss/postcss`.
- Avoid using custom arbitrary values (e.g., `w-[1140px]`) unless specifically matching reference site parity. Use standard Tailwind tokens where possible.
- The user enforces maintaining the exact styling structure of existing documents and prefers new UI code strictly isolated using `// ??$$$ newer code` comments for reference.

## 4. Operational Rules

1. **Rule of Parity**: Maintain 100% route-level parity with the live `jguni.in` site.
2. **Rule of Subpages**: When asked to create or edit a "course" or "programme" page, modify the dataset in `src/data/programmes.ts` and conditionally enhance the `[slug]/page.tsx` UI if necessary. Do not scaffold new folders.
3. **Rule of Preservation**: Never aggressively refactor existing logic out of pursuit of optimization if it compromises established functional parity. 
4. **Code Commenting Protocol**: Always label new logical blocks that replace older ones with `// ??$$$ newer code`. Leave old commented-out code present for traceability unless explicitly instructed to clean it.
