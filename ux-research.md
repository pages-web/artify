# UX Research Document — Artify

> **Version:** 1.0
> **Date:** 2026-07-02
> **Author:** UX Researcher (AI)
> **Based on:** business-requirements.md v1.0

---

## 1. Research Overview

### 1.1 Objectives
- Artify вэбсайтын хэрэглэгчдийн хэрэгцээ, зан төлөвийг тодорхойлох
- Мэдээллийн архитектур, навигацийг хэрэглэгч төвтэйгөөр төлөвлөх
- Хэлний хуваарь (mn/en), responsive дизайны шаардлагыг тодорхойлох
- Hero → About → Testimonials → Footer урсгалыг оновчтой болгох

### 1.2 Methodology
- Document analysis
- Stakeholder interview
- Competitive visual reference (Montblanc aesthetic)

### 1.3 Scope
- Business template (non-ecommerce)
- Homepage + About, Services, Testimonials, Contact pages
- Two-language UX
- Mobile-first responsive

### 1.4 Key Findings Summary
1. **Primary Finding:** Хэрэглэгч 5 секундын дотор компанийн итгэлцэл, чадварыг харахыг хүсдэг.
2. **Secondary Finding:** Мобайл төхөөрөмжөөр ханддаг харилцагчид хэл солих, холбоо барих хэсэгт хурдан хүрэхийг илүүд үздэг.
3. **Tertiary Finding:** Англи хэл дээрх харилцагчид portfolio, testimonials-ийг илүү анхаарч үздэг.

## 2. User Personas

### Persona 1: Gantulga, Project Manager

#### Demographics & Context
- **Age Range:** 32–48
- **Location:** Улаанбаатар
- **Occupation:** Барилгын төслийн менежер
- **Tech Proficiency:** Дунд
- **Primary Device:** Гар утас, оффис компьютер

#### Behavioral Patterns
- **Usage Frequency:** Төсөл эхлэхээс өмнө 1–2 удаа
- **Task Priorities:** 1) Компанийг танилцуулах 2) Төслийн жишээ үзэх 3) Холбоо барих
- **Decision Factors:** Чанар, хугацаа, итгэлцэл
- **Pain Points:** Мэдээлэл олдоцгүй, удаан ачаалалтай
- **Motivations:** Найдвартай түнш олох

#### Goals & Needs
- **Primary Goals:** Компанийн чадвар, туршлагыг хурдан ойлгох
- **Secondary Goals:** Холбоо барих мэдээлэл авах
- **Success Criteria:** 3 товчлоод холбоо барих

#### Context of Use
- **Environment:** Оффис эсвэл талбай дээр гар утсаар
- **Time Constraints:** Богино хугацаанд шийдвэр гаргана
- **Distractions:** И-мэйл, дуудлага

#### Quote
> "Би нүүр хуудас дээр ирээд 5 секундэнд энэ компани надад тохирох эсэхийг олж мэдмээр байна."

### Persona 2: Sarah, International Partner

#### Demographics & Context
- **Age Range:** 28–42
- **Location:** Europe / Asia
- **Occupation:** Business Development Manager
- **Tech Proficiency:** Өндөр
- **Primary Device:** Laptop

#### Behavioral Patterns
- **Usage Frequency:** Partnership судалгааны үед
- **Task Priorities:** 1) English content 2) Portfolio 3) Contact
- **Decision Factors:** Professionalism, bilingual support
- **Pain Points:** Poor translation, broken mobile layout
- **Motivations:** Expand regional presence

#### Goals & Needs
- **Primary Goals:** Clear English-language company overview
- **Secondary Goals:** Downloadable credentials / case studies
- **Success Criteria:** Find contact within 2 clicks

#### Context of Use
- **Environment:** Office or travel
- **Time Constraints:** Limited research window
- **Distractions:** Multiple tabs open

#### Quote
> "I need to see the work and trust the team quickly. English must feel native."

## 3. Customer Journey Mapping

### Journey Overview
**Stages:** Discovery → Consideration → Conversion → Retention

### Stage 1: Discovery
- **Touchpoints:** Google search, referral, social media
- **User Actions:** Search for construction companies in Ulaanbaatar
- **Emotions:** Curious, cautious
- **Pain Points:** Too many similar-looking companies
- **Opportunities:** Strong hero + SEO meta

### Stage 2: Consideration
- **Touchpoints:** Homepage, About, Testimonials
- **User Actions:** Scroll hero, read about, view testimonials
- **Emotions:** Evaluating, hopeful
- **Pain Points:** Missing proof of quality
- **Opportunities:** Stats, project images, client logos

### Stage 3: Conversion
- **Touchpoints:** Contact page/form, footer CTA
- **User Actions:** Click CTA, fill form, call
- **Emotions:** Ready, decisive
- **Pain Points:** Form errors, unclear next steps
- **Opportunities:** Simple form, WhatsApp/phone direct link

### Stage 4: Retention
- **Touchpoints:** Follow-up email, blog updates
- **User Actions:** Return for updates
- **Emotions:** Satisfied, loyal
- **Pain Points:** No fresh content
- **Opportunities:** News/blog section (future)

## 4. Information Architecture & Sitemap

### 4.1 Content Hierarchy
```text
Home
├── Hero
├── About (Бидний тухай)
├── Testimonials (Сэтгэгдэл)
└── Footer (Холбоо барих)

Standalone Pages:
├── /about
├── /services
├── /testimonials
└── /contact
```

### 4.2 Navigation Design
- **Primary Navigation:** Нүүр, Бидний тухай, Үйлчилгээ, Сэтгэгдэл, Холбоо барих
- **Secondary Navigation:** Language switcher (MN / EN)
- **Footer Navigation:** Холбоо барих мэдээлэл, нийгмийн холбоос, хуулийн мэдээлэл
- **Mobile Navigation:** Hamburger menu + close icon, full-screen overlay

### 4.3 Content Organization Principles
- Hero first: гол мессеж + CTA
- Social proof early: testimonials builds trust
- Contact always reachable: header + footer
- Language parity: every page has both mn and en

### 4.4 Search & Filter Strategy
- Not required for MVP

## 5. Wireframe Guidance

### 5.1 Global Layout Structure
- **Header:** Fixed/sticky, logo left, nav center/right, language switcher far right
- **Footer:** Multi-column on desktop, stacked on mobile
- **Content Width:** max-w-7xl (1280px), centered
- **Grid System:** 12-column grid, 24px gap desktop, 16px mobile

### 5.2 Section Layouts

#### Hero
- **Layout Type:** Full-width, centered or left-aligned content
- **Content Priority:** Headline > subheadline > CTA
- **Component Types:** Heading, paragraph, primary CTA button, background image/video
- **White Space:** Generous vertical padding (py-24 to py-32)
- **Responsive Behavior:** Text scales down, image may stack

#### About
- **Layout Type:** Two-column (text + image/stats)
- **Content Priority:** Mission statement > values > stats
- **Component Types:** Text block, icon list, stat cards
- **White Space:** Large section gap
- **Responsive Behavior:** Single column on mobile

#### Testimonials
- **Layout Type:** Horizontal slider or grid
- **Content Priority:** Quote > author > company
- **Component Types:** Card, avatar, navigation arrows/dots
- **White Space:** Consistent card padding
- **Responsive Behavior:** 1 card mobile, 2–3 desktop

#### Footer
- **Layout Type:** Multi-column
- **Content Priority:** Contact > links > social > copyright
- **Component Types:** Text, link list, social icons
- **White Space:** Compact but readable
- **Responsive Behavior:** Stack columns

### 5.3 Content Priority
1. **Homepage:** Hero → About → Testimonials → Footer

### 5.4 Component Patterns
- **Cards:** Subtle shadow, rounded corners (lg), white on white
- **Lists:** Icon bullets, generous line height
- **Forms:** Minimal labels, inline validation
- **Media:** Full-bleed images, object-cover

## 6. Accessibility Requirements

### 6.1 WCAG 2.1 Level AA Compliance

| Requirement | Implementation | Priority |
|-------------|---------------|----------|
| Keyboard Navigation | All interactive elements accessible via keyboard | High |
| Screen Reader Support | ARIA labels, landmarks, skip links | High |
| Color Contrast | 4.5:1 for normal text, 3:1 for large text | High |
| Focus Indicators | Visible focus states on all interactive elements | High |
| Alt Text | Descriptive alt text for all images | High |
| Form Labels | All form inputs have associated labels | High |
| Text Resizing | Support 200% zoom without loss of function | Medium |
| Motion Sensitivity | Respect `prefers-reduced-motion` | Medium |

### 6.2 Multi-language Accessibility
- Mongolian Cyrillic font rendering verified
- English content maintains grammar parity
- Language switcher clearly labeled

### 6.3 Mobile Accessibility
- Touch targets at least 44x44px
- Avoid hover-only interactions
- Allow pinch zoom

## 7. Responsive Design Strategy

### 7.1 Breakpoints

| Breakpoint | Width | Target Devices | Layout Changes |
|-----------|-------|---------------|----------------|
| Mobile | 375px | Smartphones | Single column, stacked nav |
| Tablet | 768px | Tablets | Two columns where useful |
| Desktop | 1280px | Laptops, desktops | Full multi-column layout |

### 7.2 Mobile-first Approach
- Base styles mobile
- Progressive enhancement for larger screens
- Touch-friendly targets

### 7.3 Content Adaptation
- Hero text size reduces on mobile
- Testimonials become single-column carousel
- Footer stacks vertically

### 7.4 Performance Budget
- Mobile: < 1MB initial load, < 3s load time
- Desktop: < 2MB initial load, < 2s load time

## 8. Interaction & Motion Design

### 8.1 Animation Principles
- Subtle, purposeful motion
- Avoid distracting effects
- Respect reduced motion preferences

### 8.2 Micro-interactions

| Element | Trigger | Animation | Duration |
|---------|---------|-----------|----------|
| Buttons | Hover | Scale 1.02, shadow increase | 200ms |
| Cards | Hover | Lift, shadow | 250ms |
| Links | Hover | Color transition, underline | 150ms |
| Language switcher | Hover/click | Background highlight | 150ms |
| Hero content | Load | Fade + translate Y | 600ms |

### 8.3 Page Transitions
- Simple fade between routes
- Next.js App Router native transitions where supported

### 8.4 Scroll Behaviors
- Smooth scroll to sections
- Optional scroll-triggered fade-ins for content blocks

## 9. Content Strategy & UX Writing

### 9.1 Tone of Voice
- Professional, confident, minimal
- Modern construction authority
- Avoid slang, keep sentences clear

### 9.2 Terminology

| Term | Usage | Avoid |
|------|-------|-------|
| Төсөл | Project/building work | "Ажил" (too vague) |
| Барилга | Construction | "Байгууламж" (overly formal) |
| Хамтрагч | Partner/client | "Хэрэглэгч" (too generic) |

### 9.3 CTA Copy Guidelines
- Action-oriented
- Short (1–3 words)
- Consistent across languages

### 9.4 Multi-language UX Writing
- Mongolian first, English mirror
- Maintain CTA hierarchy
- Avoid literal translation that loses meaning

### 9.5 Error Messages
- Clear, constructive
- Suggest next step

## 10. Usability Testing Plan

### 10.1 Test Scenarios
- Homepage-ээс холбоо барих хүртэлх зам
- Хэл солих
- Mobile navigation ашиглах

### 10.2 Testing Methods
- Moderated usability test
- Task completion rate
- Heatmap / scroll analysis

### 10.3 Success Metrics
- Task success rate ≥ 85%
- Time on task < 60 seconds
- Error rate < 10%

## 11. Competitive UX Analysis

| Competitor | Strengths | Weaknesses | Opportunities |
|-----------|-----------|------------|---------------|
| Local construction sites | Local trust signals | Outdated design, poor mobile | Modern premium feel |
| Montblanc reference | Clean luxury, white space | Product-focused, not service | Use color restraint and hierarchy |

## 12. Success Metrics & KPIs

### 12.1 UX Metrics
- Task success rate
- Bounce rate
- Mobile conversion rate

### 12.2 Business Metrics
- Contact form submissions
- Phone/email clicks
- Time on page

### 12.3 Technical Metrics
- LCP, FCP, CLS
- Mobile load time

## 13. Design Agent Collaboration

- Brand-first strategy requires visual direction approval before frontend build
- Pencil design previews should reflect white/black/purple/blue palette
- Motion level recommended: 2 (subtle scroll + hover)

## 14. Assumptions & Constraints

### Assumptions
- Content will be seeded in mn and en
- Images will be sourced or generated later
- erxes CMS supports required page/menu models

### Constraints
- No ecommerce
- Two languages only
- Static export / SSR per Next.js starter

## 15. Next Steps

1. Approve UX research
2. Move to Section B — Step 2 (Design) with Pencil
3. Lock motion level and visual direction
