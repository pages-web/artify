# Business Requirements Document — Artify

> **Version:** 1.0
> **Date:** 2026-07-02
> **Author:** Business Analyst (AI)
> **Status:** Draft

---

## 1. Executive Summary

Artify нь барилга, орон сууц, олон улсын стандарт бүхий инженерчлэлийн компани юм. Энэхүү вэбсайт нь компанийн итгэлцэл, төслийн чадвар, хамтран ажилладаг байгууллагуудыг харуулах, шинэ харилцагчдыг татах, борлуулалтын хандалтыг бий болгох зорилготой. Вэбсайт нь орчин үеийн (modern), цэвэр, мэргэжлийн өнгө төрхтэй, үндсэн өнгө нь цагаан, хар хоёрдогч, хөх/ногоон өнгөөр илүүд үзэгдэхээр бэлдэгдэнэ. Дотоодын (mn) болон англи (en) хэл дээр харуулна.

## 2. Business Objectives & Success Metrics

| # | Objective | Success Metric | Target |
|---|-----------|---------------|--------|
| 1 | Шинэ харилцагч болон төслийн хандалт авах | Холбоо барих хүсэлтийн тоо | Сар бүр ≥ 10 |
| 2 | Компанийн итгэлцэл, чадварыг харуулах | Төсөл/хамтрагч хэсгийг үзэх хугацаа | Дунджаар ≥ 45 сек |
| 3 | Хайлтын системээс зөв хүн татах | Organic traffic growth | Сар бүр 15% өсөлт |
| 4 | Хэлний хуваарийн дагуу мэдээлэл хүргэх | Хэл солих ашиглалт | Дундаж 20% англи хэл рүү |

## 3. Stakeholder Analysis

| Role | Name/Department | Responsibility |
|------|----------------|---------------|
| Project Owner | Artify Management | Стратеги, зөвшөөрөл, контент |
| Marketing Lead | Marketing Team | Бренд мессеж, SEO, CTA |
| Development Lead | Web Team | Техник хэрэгжилт, CMS холболт |
| Content Manager | Operations | CMS контент шинэчлэл |

## 4. Scope

### 4.1 In-scope
- Нүүр хуудас: hero, about, testimonials, footer
- Дотоод хуудас: About, Services, Testimonials, Contact
- erxes CMS холболт, хэл солих (mn/en)
- Vercel дээр deploy

### 4.2 Out-of-scope
- E-commerce catalog, cart, checkout
- User authentication / accounts
- Booking calendar
- Custom admin panel outside erxes

## 5. Target Audience & User Personas

### Primary Persona
- **Demographics:** 30–55 нас, Улаанбаатар, төслийн менежер, барилгын компанийн эзэн, хөрөнгө оруулагч
- **Goals:** Итгэл үүсгэх компани сонгох, төслийн чадвар шалгах, холбоо барих
- **Pain Points:** Барилгын чанар, хугацаа хэтрэлт, ил тод бус мэдээлэл
- **Tech Proficiency:** Дунд

### Secondary Persona
- **Demographics:** 25–40 нас, англи хэлээр хайдаг дотоодын болон олон улсын харилцагч
- **Goals:** Partnership, portfolio үзэх
- **Pain Points:** Хэлний хязгаарлалт, удаан ачаалалтай сайт
- **Tech Proficiency:** Өндөр

## 6. Site Information Architecture & Sitemap

### 6.1 Page Hierarchy
```text
Home
├── About (Бидний тухай)
├── Services (Үйлчилгээ)
├── Testimonials (Үйлчлүүлэгчдийн сэтгэгдэл)
└── Contact (Холбоо барих)
    └── Footer
```

### 6.2 Navigation Structure
- **Header:** Нүүр, Бидний тухай, Үйлчилгээ, Сэтгэгдэл, Холбоо барих, MN/EN
- **Footer:** Хаяг, утас, имэйл, нийгмийн холбоос, журам
- **Mobile:** Hamburger меню, доорхи бүх цэс

## 7. Functional Requirements

### 7.1 Section-specific Requirements

#### Hero
- **Purpose:** Анхны сэтгэгдэл, бренд мессеж
- **Content:** Том гарчиг, тайлбар, гол CTA, фон зураг
- **CTA:** "Төслөө эхлүүлэх" / "Start your project"
- **Interactions:** Scroll-down hint, fade-in animation

#### About
- **Purpose:** Компанийн танилцуулга, алсын хараа
- **Content:** Богино түүх, эрхэм зорилго, үнэт зүйлс
- **CTA:** "Дэлгэрэнгүй" / "Learn more"
- **Interactions:** Timeline or stats counter

#### Testimonials
- **Purpose:** Итгэлцэл бий болгох
- **Content:** Харилцагчдын сэтгэгдэл, лого
- **CTA:** "Бүх сэтгэгдэл" / "All testimonials"
- **Interactions:** Slider/carousel, auto-rotate

#### Footer
- **Purpose:** Холбоо барих, зохиогчийн эрх, нэмэлт холбоос
- **Content:** Хаяг, утас, имэйл, нийгмийн хаягууд
- **CTA:** Байршлын газрын зураг холбоос
- **Interactions:** Hover states

### 7.2 E-commerce Requirements
- Not applicable

### 7.3 Content Management Requirements
- erxes CMS-ээр бүх хуудас, цэс, блог удирдана
- Хуудас бүр хэлний хоёр хувилбартай

### 7.4 Multi-language Requirements
- Default: Mongolian (mn)
- Secondary: English (en)
- URL pattern: `/mn/about`, `/en/about`
- Slug stays identical across languages

### 7.5 User Account & Authentication
- Not required

### 7.6 Search & Filtering
- Not required for MVP

## 8. Non-functional Requirements

### 8.1 Performance
- Page load time: < 3 seconds
- Time to First Byte (TTFB): < 200ms
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1

### 8.2 SEO
- Semantic HTML, meta tags per page
- Open Graph / Twitter cards
- Sitemap generation
- lang attribute per locale

### 8.3 Accessibility
- WCAG 2.1 Level AA
- Keyboard navigation
- Alt text for images
- Sufficient color contrast

### 8.4 Security
- No secrets in client bundle
- x-app-token server-side only

### 8.5 Browser & Device Support
- Chrome, Safari, Firefox, Edge (latest 2 versions)
- Mobile-first responsive design

## 9. Design Direction

### 9.1 Visual Style
Modern, minimal, spacious. White-dominant with strong black typography. Premium construction feel inspired by Montblanc's clean luxury aesthetic.

### 9.2 Color Palette
- Primary: #FFFFFF (white)
- Secondary: #000000 (black)
- Accent 1: #3B4CCA (blue)
- Accent 2: #7C3AED (purple)
- Neutral: #F5F5F5, #1A1A1A

### 9.3 Typography
- Headings: Inter / Geist (bold, uppercase for section labels)
- Body: Inter / system sans
- Large hero type for impact

### 9.4 Imagery & Photography
- High-resolution construction sites, architecture, team in action
- Desaturated, premium editorial feel
- Geometric lines and symmetry

## 10. CTA Strategy & Conversion Goals

| Location | CTA Text | Destination | Goal |
|----------|----------|------------|------|
| Hero | "Төслөө эхлүүлэх" / "Start your project" | /contact | Lead capture |
| About | "Дэлгэрэнгүй" / "Learn more" | /about | Engagement |
| Testimonials | "Бидэнтэй холбогдох" / "Contact us" | /contact | Conversion |
| Footer | "Имэйл илгээх" / "Email us" | mailto: | Direct contact |

## 11. Success Metrics & Acceptance Criteria

### 11.1 Quantitative Metrics
- Contact form submissions: ≥ 10/month
- Bounce rate: < 45%
- Mobile traffic share: ≥ 55%

### 11.2 Qualitative Criteria
- Professional first impression
- Easy language switching
- Clear navigation and CTAs

## 12. Assumptions & Constraints

### Assumptions
- erxes credentials are valid and persistent
- Content will be seeded in mn/en
- Starter repo is accessible

### Constraints
- CMS ID must be used from generated erxes CMS
- No ecommerce features
- Two-language limit for launch

## 13. References & Appendices

### 13.1 Reference Documents
- site.config.json: `output/artify/site.config.json`
- Montblanc color reference: https://www.montblanc.com/en-us

### 13.2 Competitor Analysis
- TBD

### 13.3 Glossary

| Term | Definition |
|------|-----------|
| erxes CMS | Content management system for pages, posts, menus |
| CTA | Call-to-action button or link |
| LCP | Largest Contentful Paint |
