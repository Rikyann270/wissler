**WISSLER CARGO**

Product Requirements Document

Website - Next.js Implementation

Version 1.0 | Prepared for Development

| **Client**          | Wissler Cargo                                        |
| ------------------- | ---------------------------------------------------- |
| **Reference Site**  | viamaster-intl.com                                   |
| **Framework**       | Next.js (App Router)                                 |
| **Styling**         | Tailwind CSS                                         |
| **Document Status** | Ready for Development                                |
| **Scope**           | Full website clone - adapted for Wissler Cargo brand |

# **1\. Project Overview**

Wissler Cargo requires a professional logistics company website built in Next.js. The design language, layout patterns, section structure, and interaction model should closely mirror the Viamaster International website (viamaster-intl.com). All branding, copy, service names, and contact details will be adapted for Wissler Cargo.

The goal is a pixel-close structural clone that feels premium, trustworthy, and visually bold - with full-screen video heroes, dark navy and gold colour palette, clean typography, and service-focused page architecture.

## **1.1 Design Reference**

The reference site is Viamaster International (<https://www.viamaster-intl.com>). Key design attributes to replicate:

- Full-viewport hero section with background video and bold headline overlay
- Sticky navigation bar with transparent-to-solid scroll behaviour
- Dark navy (#1A3C5E) and gold (#C8A84B) as primary colour tokens
- Expandable mega-menu on hover for Services and Work With Us
- Marquee / ticker-tape scrolling text for industry sectors
- Large editorial photography blocks with overlapping layout
- Grid-based service discovery section with icon logo watermark
- Alternating content blocks on service interior pages
- Minimal footer with two-column layout, social links, and logo

## **1.2 Tech Stack**

| **Framework**  | Next.js 14+ with App Router                     |
| -------------- | ----------------------------------------------- |
| **Language**   | TypeScript                                      |
| **Styling**    | Tailwind CSS                                    |
| **Animations** | Framer Motion                                   |
| **Video**      | Native HTML5 &lt;video&gt; with poster fallback |
| **Forms**      | React Hook Form + server action or API route    |
| **SEO**        | Next.js Metadata API per page                   |
| **Deployment** | Vercel (recommended)                            |
| **Fonts**      | Google Fonts - Inter or similar sans-serif      |
| **Icons**      | Lucide React or custom SVGs                     |

# **2\. Site Map & Page Structure**

The site consists of the following pages, directly mirroring the Viamaster structure:

| **Route**                      | Page Name               |
| ------------------------------ | ----------------------- |
| **/**                          | Home                    |
| **/about**                     | About Us                |
| **/services/road-transport**   | Road & Land Transport   |
| **/services/sea-air**          | Sea & Air Freight       |
| **/services/customs**          | Customs & Documentation |
| **/services/special-services** | Special Services        |
| **/careers**                   | Careers (Work With Us)  |
| **/partners**                  | Partner Opportunities   |
| **/news**                      | News & Insights         |
| **/news/\[slug\]**             | News Article (dynamic)  |
| **/contact**                   | Contact                 |
| **/quick-quote**               | Quick Quote             |
| **/downloads**                 | Useful Downloads        |

# **3\. Navigation Component**

## **3.1 Behaviour**

- Fixed/sticky to the top of every page
- Background: transparent on page load when hero is visible; transitions to dark navy (#1A3C5E) with a subtle shadow on scroll (threshold: 80px)
- Logo: full-colour SVG version on dark backgrounds; white version on transparent state
- On mobile: collapses to hamburger icon; tapping opens full-screen slide-in drawer

## **3.2 Desktop Menu Structure**

| **Menu Item**    | Behaviour                   |
| ---------------- | --------------------------- |
| **Home**         | Direct link to /            |
| **About Us**     | Direct link to /about       |
| **Services**     | Hover opens mega-menu panel |
| **Work With Us** | Hover opens mega-menu panel |
| **News**         | Direct link to /news        |
| **Contact**      | Direct link to /contact     |

## **3.3 Mega-Menu Panel (Services)**

Triggered on hover (desktop) or tap (mobile). Panel slides down below the nav bar and contains:

- Contact sidebar on the left: phone number, general enquiries email, operations email, accounts email, careers link
- Service links on the right: each with a thumbnail image and service name
- Links: Road & Land Transport, Sea & Air Freight, Customs & Documentation, Special Services
- Click anywhere outside panel to close

## **3.4 CTA Buttons (Nav Right)**

- Log In - outlined button, links to client portal (configurable URL)
- Quick Quote - filled gold/accent button, links to /quick-quote

# **4\. Home Page - Section-by-Section**

## **Section 1: Hero**

| **Element**          | Specification                                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Layout**           | Full-viewport (100vw × 100vh)                                                                                    |
| **Background**       | Looping muted HTML5 video (mp4), autoplay, no controls. Poster image fallback for browsers without video support |
| **Overlay**          | Dark gradient overlay (linear-gradient bottom-left, opacity ~0.55) so text reads clearly                         |
| **Headline**         | Large white bold text: 'Logistics. The Right Way.' - H1, size ~80-100px desktop, responsive                      |
| **Sub-element**      | Wissler Cargo white logo mark centred below headline                                                             |
| **Scroll indicator** | Optional animated downward chevron at bottom centre                                                              |
| **Video source**     | Client-supplied .mp4 to be placed in /public/videos/hero.mp4                                                     |

## **Section 2: Brand Statement**

Two-column editorial block below the hero, full-width with slight asymmetry.

| **Element**         | Specification                                                                                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Left column**     | Large editorial heading: 'World Class. Global Reach.' (H2). Below: 3-4 sentences of company description copy. Two CTA buttons: 'About Us' (outlined) and 'Contact Us' (filled gold) |
| **Right column**    | Two stacked photography images - tall portrait crop (top-right) + landscape crop (bottom-left) - overlapping with slight negative margin for editorial effect                       |
| **Background**      | White                                                                                                                                                                               |
| **Section padding** | py-24 (desktop), py-16 (mobile)                                                                                                                                                     |

## **Section 3: Services Discovery Grid**

| **Element**    | Specification                                                                                                                          |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Background** | Light grey (#F4F6F9)                                                                                                                   |
| **Heading**    | 'Discover More' - centred, H2, with Wissler Cargo logo watermark icon above it in gold                                                 |
| **Grid**       | 2-column on desktop, 1-column on mobile. Each card: service image thumbnail + service name as an underlined link                       |
| **Cards**      | Road & Land Transport / Worldwide Sea & Air / Customs & Documentation / Special Services / Partner Opportunities / About Wissler Cargo |
| **Hover**      | Card lifts with box-shadow on hover; image slightly zooms (scale 1.04, transition 300ms)                                               |

## **Section 4: Industry Ticker**

| **Element**    | Specification                                                                                                                                                                     |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Layout**     | Full-width horizontal scrolling marquee / ticker tape                                                                                                                             |
| **Background** | Dark navy (#1A3C5E)                                                                                                                                                               |
| **Text**       | White, uppercase, spaced letters. Items: Automotive / Consumer Goods / Chemicals / Household / Engineering / Technology / Food & Beverage / Construction / Pharmaceuticals / FMCG |
| **Animation**  | Infinite left-scroll using CSS animation (no JS dependency). Duplicated text node to create seamless loop                                                                         |
| **Speed**      | ~40s for full loop. Pause on hover                                                                                                                                                |

## **Section 5: News & Insights**

| **Element**      | Specification                                                                                   |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| **Heading**      | 'News & Insights' - left aligned, H2                                                            |
| **Layout**       | Horizontal card row - 2 cards visible on desktop, 1 on mobile (horizontal scroll or carousel)   |
| **Card anatomy** | Category label (badge), article title, short excerpt, article thumbnail image, 'Read More' link |
| **Source**       | Content from /news dynamic pages. Can use static JSON initially                                 |
| **CTA**          | 'View All News' link at bottom right                                                            |

# **5\. Interior Service Pages**

All four service pages share an identical layout template. Content differs per service.

## **5.1 Service Page Template**

| **Section**             | Specification                                                                                                                                                                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Hero**                | Full-viewport video hero (service-specific video) with page title overlay and two CTA buttons: 'Contact Us' + 'View Services'                                                                                      |
| **Key Details Grid**    | Dark navy background. H2 'Key Details' or 'Key Regions'. Grid of cards (3 per row desktop, 1 mobile) - each with region/country name and bullet list of service attributes (frequency, coverage, transit, options) |
| **Our Services Blocks** | Alternating content sections: image or logo on one side, heading + body copy + 'Get In Touch' CTA button on the other. Alternates left/right. Minimum 3-4 blocks per page                                          |
| **Industry Ticker**     | Same as home page                                                                                                                                                                                                  |
| **Reliability & Reach** | Two-column: bullet list of service capabilities (left) + large portrait photograph (right)                                                                                                                         |
| **Contact CTA Banner**  | Full-width dark navy banner with phone + email links and 'Contact Us' button                                                                                                                                       |
| **Closing Image**       | Full-bleed editorial photograph                                                                                                                                                                                    |

## **5.2 Service Pages - Content Outline**

| **Road & Land Transport (/services/road-transport)**                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hero headline: 'Road Freight. Reliable. Scheduled. Europe-Wide.'                                                                                                        |
| Key Countries grid: Uganda, Kenya, Tanzania, Rwanda, DRC, South Sudan, Zambia, Ethiopia (adapt for African/regional focus)                                              |
| Service blocks: Reliable Transport Solutions / Service Without Compromise / Comprehensive Coverage / Every Load Covered                                                 |
| Capabilities list: Groupage, part and full loads / Express vans and dedicated trucks / Scheduled departures / Remote locations / Tail-lift deliveries / Dangerous goods |

| **Sea & Air Freight (/services/sea-air)**                                                                |
| -------------------------------------------------------------------------------------------------------- |
| Hero headline: 'Global Reach. Sea & Air Freight Solutions.'                                              |
| Capability cards: Full Container Load (FCL) / Less than Container Load (LCL) / Air Freight / Express Air |
| Partner network map or text list of partner ports and airports                                           |
| Service blocks: Global Network / Documentation Support / Real-Time Tracking / Flexible Routing           |

| **Customs & Documentation (/services/customs)**                                                      |
| ---------------------------------------------------------------------------------------------------- |
| Hero headline: 'Customs Cleared. Paperwork Handled.'                                                 |
| Services: Import/Export Declarations / Tariff Classification / Duty Management / Compliance Advisory |
| Service blocks: Expert Customs Team / Full Documentation / Regulatory Updates / Seamless Clearance   |

| **Special Services (/services/special-services)**                                                      |
| ------------------------------------------------------------------------------------------------------ |
| Hero headline: 'Beyond Standard. Special Cargo Solutions.'                                             |
| Services: Dangerous Goods (ADR) / Project Cargo / Exhibition & Event Logistics / Out-of-Hours Delivery |
| Service blocks: Specialist Handling / Project Management / Secure Transport / Flexible Scheduling      |

# **6\. About Us Page (/about)**

## **6.1 Sections**

- Hero: Static image or video, headline 'About Wissler Cargo', subtext tagline
- Company story: Two-column editorial block - heading + 3-4 paragraphs of company background copy (left) + editorial photo (right)
- Values section: 3-column icon grid - e.g. Reliability / Transparency / Partnership. Each with icon, heading, short description
- Team section (optional): Grid of team member photo cards with name and role
- Industry ticker: same component as home
- Contact CTA banner: same as service pages

# **7\. Contact & Quick Quote Pages**

## **7.1 Contact Page (/contact)**

| **Element**         | Specification                                                                                               |
| ------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Layout**          | Two-column: form on left, contact details on right                                                          |
| **Form fields**     | Full Name, Company Name, Email Address, Phone Number, Subject (dropdown), Message (textarea), Submit button |
| **Contact details** | Phone, General Enquiries email, Operations email, Accounts email, physical address (if applicable)          |
| **Map**             | Optional embedded Google Map or static map image                                                            |
| **Submission**      | Next.js API route or Server Action - sends email via nodemailer or third-party (Resend, SendGrid)           |

## **7.2 Quick Quote Page (/quick-quote)**

| **Element**       | Specification                                                                                                                                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Layout**        | Centred single-column form with branded heading                                                                                                                                                 |
| **Form fields**   | Full Name, Email, Phone, Service Type (select: Road, Sea/Air, Customs, Special), Origin, Destination, Cargo Description, Weight (kg), Volume (CBM), Preferred Collection Date, Additional Notes |
| **Submit**        | Sends quote request to operations email. Auto-reply confirmation email to user                                                                                                                  |
| **Success state** | Inline success message with next steps info                                                                                                                                                     |

# **8\. Footer Component**

The footer appears on every page and mirrors the Viamaster two-section structure.

## **8.1 Upper Footer**

- Dark navy background (#1A3C5E)
- Left: Wissler Cargo white logo + tagline
- Centre/Right: three columns - Accounts email / Operations email / Careers link
- Bottom row of upper footer: Useful Downloads link + Work With Us link
- Social media icons: LinkedIn, Facebook, Instagram (white icons)

## **8.2 Lower Footer**

- Very dark navy or charcoal background
- Left: copyright line - 'Wissler Cargo. All Rights Reserved.'
- Right: site navigation links - Home / About / Services (dropdown) / Work With Us / News / Contact
- Far right: Log In + Quick Quote buttons (same as nav)

# **9\. Design System & Tokens**

## **9.1 Colour Palette**

| **Token**            | Value / Usage                                                          |
| -------------------- | ---------------------------------------------------------------------- |
| **\--color-primary** | #1A3C5E - Dark navy. Nav, hero overlays, section backgrounds, headings |
| **\--color-accent**  | #C8A84B - Gold. CTA buttons, underlines, dividers, hover states        |
| **\--color-light**   | #F4F6F9 - Light grey. Alternating section backgrounds                  |
| **\--color-mid**     | #6B7C93 - Mid grey. Subheadings, meta text, nav link secondary states  |
| **\--color-white**   | #FFFFFF - White. Body text on dark, card backgrounds                   |
| **\--color-body**    | #333333 - Near black. Body copy on light backgrounds                   |

## **9.2 Typography**

| **Role**       | Spec                                                                   |
| -------------- | ---------------------------------------------------------------------- |
| **Hero H1**    | Inter Bold, 80-100px desktop / 42px mobile, white, letter-spacing -1px |
| **Section H2** | Inter Bold, 40px desktop / 28px mobile, navy                           |
| **Section H3** | Inter SemiBold, 24px desktop / 20px mobile, navy                       |
| **Body**       | Inter Regular, 16px, #333333, line-height 1.7                          |
| **Navigation** | Inter Medium, 14px, white (transparent nav) / navy (solid nav)         |
| **Button**     | Inter SemiBold, 14px uppercase, letter-spacing 1px                     |
| **Ticker**     | Inter Bold, 20px uppercase, white, letter-spacing 3px                  |
| **Card label** | Inter Medium, 12px uppercase, gold, letter-spacing 2px                 |

## **9.3 Spacing & Layout**

| **Token**                    | Value                                                             |
| ---------------------------- | ----------------------------------------------------------------- |
| **Max content width**        | 1280px (container)                                                |
| **Section vertical padding** | py-24 desktop / py-16 mobile                                      |
| **Component gap**            | gap-8 (32px) - between cards/columns                              |
| **Border radius**            | rounded-none for most elements; rounded-sm (4px) for pills/badges |
| **Transition speed**         | 300ms ease for all hover/interactive states                       |

# **10\. Component Library**

All components should be built as reusable, typed React components in /components/.

| **Component**                | Description                                                                                                                                         |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **&lt;Navbar /&gt;**         | Sticky header with scroll behaviour, mega-menu, mobile drawer. Props: transparent={bool}                                                            |
| **&lt;HeroVideo /&gt;**      | Full-viewport hero with video, overlay, headline, optional subheadline, CTA buttons. Props: videoSrc, posterSrc, headline, subheadline, buttons\[\] |
| **&lt;HeroImage /&gt;**      | Same as HeroVideo but with a static image background for pages without video                                                                        |
| **&lt;MegaMenu /&gt;**       | Dropdown panel for Services/Work With Us nav items. Props: items\[\], contactInfo                                                                   |
| **&lt;ServiceCard /&gt;**    | Image thumbnail + title link card. Props: imageSrc, title, href                                                                                     |
| **&lt;EditorialBlock /&gt;** | Two-column block with image and text. Props: imageSrc, imagePosition ('left'\|'right'), heading, body, ctaLabel, ctaHref, darkMode={bool}           |
| **&lt;Ticker /&gt;**         | Horizontal infinite scroll marquee. Props: items: string\[\]                                                                                        |
| **&lt;CountryCard /&gt;**    | Card in the 'Key Countries' grid. Props: country, bullets: string\[\]                                                                               |
| **&lt;NewsCard /&gt;**       | Article preview card. Props: title, excerpt, category, imageSrc, slug, date                                                                         |
| **&lt;ContactBanner /&gt;**  | Full-width CTA section. Props: phone, email, darkMode={bool}                                                                                        |
| **&lt;QuoteForm /&gt;**      | Full quote request form with validation                                                                                                             |
| **&lt;ContactForm /&gt;**    | Contact page form                                                                                                                                   |
| **&lt;Footer /&gt;**         | Site footer - upper + lower sections                                                                                                                |
| **&lt;SectionHeading /&gt;** | Reusable section title with optional icon. Props: title, subtitle, icon={bool}, align                                                               |
| **&lt;Button /&gt;**         | CTA button. Props: variant ('primary'\|'outline'\|'ghost'), size, href, onClick                                                                     |

# **11\. Animations & Interactions**

| **Interaction**             | Implementation                                                                            |
| --------------------------- | ----------------------------------------------------------------------------------------- |
| **Nav scroll transparency** | useScrollPosition hook - toggle class at 80px scroll threshold                            |
| **Section fade-in**         | Framer Motion whileInView with opacity 0→1, y 20→0, delay stagger on grids                |
| **Mega-menu**               | Framer Motion AnimatePresence - slide down with opacity. Overlay blur on background       |
| **Service card hover**      | Tailwind hover:shadow-lg + inner image scale-105 (group-hover)                            |
| **Hero ticker**             | CSS @keyframes marquee - translate(-50%, 0) loop. Pause on hover via animation-play-state |
| **Button hover**            | Background colour shift + slight translateY(-1px) shadow lift                             |
| **Mobile drawer**           | Framer Motion x: '-100%' → 0 slide-in from left                                           |
| **Editorial image overlap** | Negative margin / absolute positioning for stacked image layout on home page              |

# **12\. SEO & Performance**

## **12.1 Metadata**

- Each page exports a generateMetadata() function via Next.js App Router
- Title format: 'Page Name | Wissler Cargo'
- Unique meta description per page (150-160 characters)
- Open Graph image per page (1200×630px) - use hero image as default
- robots.txt and sitemap.xml auto-generated via next-sitemap

## **12.2 Performance**

- All images served via Next.js &lt;Image /&gt; component (automatic WebP, lazy loading, priority={true} on hero)
- Video served from /public/videos/ - consider CDN for production
- Font loading: next/font with display='swap'
- Target: Lighthouse score 90+ on desktop, 80+ on mobile
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms

## **12.3 Accessibility**

- All interactive elements keyboard-navigable with visible focus ring
- Videos: aria-hidden=true, role=presentation on decorative video
- Skip to main content link as first focusable element
- Colour contrast: minimum 4.5:1 for body text, 3:1 for large text
- Form fields: associated &lt;label&gt; elements, aria-describedby for errors

# **13\. Content & Assets**

## **13.1 Assets Required from Client**

- Company logo - SVG format (full colour, white version, icon-only mark)
- Hero video files per page (.mp4, H.264, max 20MB each, 1920×1080 or 1280×720)
- Photography - minimum 2 editorial images for home page, 1 per service page, 1 for about page
- Service-specific imagery - trucks, ships, aircraft, warehouses, customs documents
- Company story copy - About Us page (300-500 words)
- Service descriptions - 200-300 words per service, 4-6 bullet capabilities per service
- Team photos & bios (optional)
- News articles - minimum 2 for launch

## **13.2 Placeholder Strategy**

During development, use:

- Videos: royalty-free logistics stock video from Pexels or Pixabay
- Images: Unsplash logistics/freight photos
- Copy: client-provided draft or lorem ipsum with content structure intact
- All placeholders clearly marked in code with // TODO: REPLACE WITH CLIENT ASSET comments

# **14\. Project Folder Structure**

**wissler-cargo/**

├── app/

│ ├── layout.tsx # Root layout, Navbar, Footer

│ ├── page.tsx # Home page

│ ├── about/page.tsx

│ ├── services/

│ │ ├── road-transport/page.tsx

│ │ ├── sea-air/page.tsx

│ │ ├── customs/page.tsx

│ │ └── special-services/page.tsx

│ ├── news/

│ │ ├── page.tsx # News index

│ │ └── \[slug\]/page.tsx # Article

│ ├── contact/page.tsx

│ ├── quick-quote/page.tsx

│ ├── careers/page.tsx

│ └── partners/page.tsx

├── components/

│ ├── layout/ # Navbar, Footer, MegaMenu

│ ├── ui/ # Button, SectionHeading, Badge

│ ├── sections/ # HeroVideo, EditorialBlock, Ticker...

│ └── forms/ # QuoteForm, ContactForm

├── lib/ # Helpers, data fetching, constants

├── public/

│ ├── images/

│ └── videos/

├── styles/globals.css # Tailwind base + CSS variables

├── tailwind.config.ts

└── next.config.js

# **15\. Acceptance Criteria**

The site will be considered complete when all of the following are met:

| **#**  | Criterion                                                                                  |
| ------ | ------------------------------------------------------------------------------------------ |
| **1**  | All pages listed in Section 2 are implemented and accessible via their routes              |
| **2**  | Navigation scroll transparency works correctly on all pages                                |
| **3**  | Mega-menu opens/closes correctly on hover (desktop) and tap (mobile)                       |
| **4**  | Mobile responsive: all pages render correctly at 375px, 768px, 1280px, 1440px widths       |
| **5**  | Hero video autoplays muted and loops on all major browsers (Chrome, Firefox, Safari, Edge) |
| **6**  | Ticker marquee scrolls infinitely without visible reset gap                                |
| **7**  | Quick Quote form validates all fields and shows success message on submit                  |
| **8**  | Contact form validates and sends email via configured mailer                               |
| **9**  | All pages pass Lighthouse accessibility audit with score ≥ 80                              |
| **10** | All images use Next.js &lt;Image /&gt; component with alt text                             |
| **11** | No console errors in production build                                                      |
| **12** | next build completes without TypeScript errors                                             |
| **13** | Vercel deployment preview URL provided for QA                                              |
| **14** | robots.txt and sitemap.xml present and valid                                               |
| **15** | All client placeholder assets replaced before final handoff                                |

# **16\. Out of Scope**

- CMS or headless CMS integration (Phase 2 if required)
- Shipment tracking portal or client login system
- Multilingual / i18n support
- E-commerce or online payment
- Live chat widget
- Custom analytics dashboard
- Native mobile applications

# **17\. Notes for the Development Team**

The closest structural and visual reference is viamaster-intl.com. Study it carefully before beginning - particularly the navigation scroll behaviour, hero video treatment, editorial image overlap on the home page, and the alternating content blocks on interior service pages.

The Wissler Cargo brand should feel equally premium and trustworthy. If the client provides updated branding guidelines (logo files, brand colours, fonts), defer to those over the defaults defined in this document.

When in doubt about layout: favour whitespace, bold typography, and dark navy + gold contrast. This is not a cluttered site - it is confident, clean, and editorial.

_- End of Document -_