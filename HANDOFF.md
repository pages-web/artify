# HANDOFF — Artify

## 0. Approval Record

- Homepage options shown: Option A (Neon Grid), Option B (Asymmetric Split), Option C (Cinematic Dark), Option D (Light Mode Brutalist), Option E (Editorial Minimal)
- Selected option: **Editorial Minimal adapted to dark navy + gold brand identity**
- Preview artifact file paths:
  - `output/artify/designs/homepage-option-a.png`
  - `output/artify/designs/homepage-option-b.png`
  - `output/artify/designs/homepage-option-c.png`
- Pencil project paths used:
  - `output/artify/designs/homepage-directions.pen`
  - `output/artify/designs/design.pen`
- Full design export: `output/artify/designs/design.png`
- Design tokens: `output/artify/design-tokens.json`
- UI libraries: `output/artify/ui-libraries.json`
- Homepage preview covered full section flow: hero → about → testimonials → products → blog → footer
- All design artifacts came from the approved `.pen` path for this site

## 1. Design Summary

Artify is a Mongolian construction company showcase site with an editorial, minimal aesthetic. The design now uses a dark navy background, crisp light text, and warm gold accents. Layout remains spacious and grid-based, inspired by editorial magazine design.

Key principles:
- Dark navy-dominant backgrounds (`#0A0F1E`)
- Large, light-weight typography for headings in light text
- Gold accent lines and hover states (`#C9A227`)
- 80px desktop page padding, max-width 1280px
- Zero border-radius (sharp, architectural feel)
- Footer uses the same dark navy background

## 2. Approved Visual Direction

- **Direction name:** Editorial Minimal
- **Color system:**
  - Background: `#0A0F1E`
  - Surface alternate: `#111827`
  - Primary text/CTA: `#F8FAFC`
  - Muted text: `#94A3B8`
  - Primary accent: `#C9A227` (gold section lines, buttons, highlights)
  - Borders: `#1E293B`
- **Typography:** Inter for all text
- **Motion level:** 2 — subtle fade-in-up on scroll, hover transitions

## 3. Frontend Build Map

### Pages

| Route | Sections / Content |
|-------|-------------------|
| `/` (Home) | Header → Hero → About → Testimonials → Products → Blog → Footer |
| `/about` | Header → About Hero → Mission/Vision → Values → Footer |
| `/products` | Header → Products Hero → Block Academy → Tech Invent → Custom Materials → Footer |
| `/blog` | Header → Blog Hero → Blog Grid → Footer |
| `/contact` | Header → Contact Hero → Contact Info + Form → Footer |

### Header

- Logo left: "Artify®"
- Nav center/right: Нүүр, Бүтээгдэхүүн, Мэдээ, Холбоо барих
- Language switcher far right: MN / EN
- Sticky on scroll, dark navy background

### Hero

- Left: Section index label "Artify" with letter-spacing
- Large stacked heading: "We build / structures / that endure"
- Body copy + two CTAs (primary filled gold + outline)
- Right: construction imagery placeholder + large "01" watermark + "EST. 2014" vertical label
- Gold accent line above heading

### About Section

- Section label: "01 — About"
- Heading: "Precision in every structure"
- Gold accent line
- Left: two paragraphs
- Right: 2x2 stats grid (150+ projects, 12 years, 48 experts, 20+ partners)

### Testimonials Section

- Section label: "02 — Testimonials"
- Heading: "Trusted by industry leaders"
- Left: large featured quote + author
- Right: two smaller quotes stacked

### Products Section

- Section label: "03 — Бүтээгдэхүүн"
- Heading: "Барилгын шийдлүүд"
- Three product cards:
  1. Block Academy (internal/external link)
  2. Tech Invent (links to https://tech-invent.vercel.app/mn)
  3. Custom Materials (contact/order CTA)

### Blog Section

- Section label: "04 — Мэдээ"
- Heading: "Сүүлийн нийтлэлүүд"
- Three blog cards with image placeholder, title, date

### Footer

- Dark navy background (`#0A0F1E`)
- Three columns: brand + tagline, company links, contact info
- Gold divider line + copyright

## 4. erxes CMS Field Map

### Pages to seed

- `about` — About page content
- `products` — Product descriptions (Block Academy, Tech Invent, Custom Materials)
- `testimonials` — Testimonial quotes
- `blog` — Blog posts
- `contact` — Contact info

### Menu structure

Header (`kind: header`):
1. Нүүр → `/`
2. Бүтээгдэхүүн → `/products`
3. Мэдээ → `/blog`
4. Холбоо барих → `/contact`

Footer (`kind: footer`):
1. Бидний тухай → `/about`
2. Бүтээгдэхүүн → `/products`
3. Мэдээ → `/blog`
4. Холбоо барих → `/contact`

### Languages

- Primary: `mn`
- Secondary: `en`
- Slugs remain identical across languages

## 5. External Links

- Tech Invent card links to: `https://tech-invent.vercel.app/mn`
- Open in new tab

## 6. Animation Rules

- Fade-in-up on scroll for section content
- Button hover: background/color transition 250ms
- Link hover: gold accent color transition
- Respect `prefers-reduced-motion`

## 7. Responsive Behavior

- Desktop: 80px desktop padding, multi-column grids
- Tablet: reduce to 2 columns
- Mobile: single column, 24px mobile padding, hamburger menu

## 8. Accessibility

- WCAG 2.1 AA contrast
- Semantic headings
- Alt text for all images
- Keyboard navigable header/footer

## 9. Exact Items That Must Not Change

- Header nav order and labels
- Section index numbering (01, 02, 03, 04)
- Zero border-radius on buttons and cards
- 80px desktop padding / 24px mobile padding
- External link to Tech Invent must open in new tab
- Slugs identical across mn/en
- Dark navy + gold color system

## 10. Setup Commands

```bash
# From output/artify/
pnpm install
pnpm add framer-motion lucide-react clsx tailwind-merge
```
