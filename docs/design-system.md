# Design System - Zoftware V2

This design system is extracted from the new landing page design and can be used as a reference for building consistent UIs across projects (e.g., blog sites, documentation pages).

## Color Palette

### Primary Colors
- **Brand Blue**: `#1447E6` - Primary action color
- **Bright Blue**: `#007BEF` - Secondary blue for highlights
- **Dark Blue**: `#051D53` - Dark text and primary headings
- **Dark Sapphire**: `#2c4e9b` - Alternative dark blue

### Neutral Colors
- **Black Soft**: `#0A0A0A` - Text (highest contrast)
- **Charcoal Black**: `#101828` - Text (dark)
- **Charcoal**: `#282828` - Text (medium-dark)
- **Ultra Dark**: `#171717` - Background/dark sections
- **Deep Navy**: `#0F172B` - Alternative dark shade

### Gray Scale
- **Neutral Gray**: `#575757` - Standard text
- **Gray Neutral**: `#787878` - Standard text alternative
- **Gray Medium**: `#737373` - Secondary text
- **Gray Muted**: `#969696`, `#929292` - Disabled/muted states
- **Slate Secondary**: `#6A7282` - Secondary text
- **Slate Muted**: `#99A1AF`, `#4A5565` - Muted text
- **Light Gray**: `#E8EBEB`, `#A8A8A8` - Borders, backgrounds
- **Gray 200 Custom**: `#E5E7EB` - Light background
- **Soft Gray**: `#F6F6F6` - Very light background
- **Soft Slate**: `#E2E8F0` - Light section background
- **Section Color**: `#F9FAFB` - Default section background

### Text Colors
- **Text Secondary**: `#4A5565` - Secondary/supporting text
- **Slate Blue**: `#45556C` - Alternative secondary text

### Accent Colors
- **Brand Orange**: `#F54900` - Accent/warning
- **Electric Violet**: `#9810FA` - Accent highlight
- **Light Blue**: `#654CFF` - Accent
- **Ruby Red**: `#f14666` - Error/attention color
- **Light Green**: `#38C016` - Success color

### Borders
- **Border Muted**: `#D1D5DC` - Default borders

## Typography

### Font Family
- **Primary Font**: Poppins (configured in root via `--font-poppins`)

### Headings

#### H1 (Hero Title)
- Font Size: `1.875rem` (30px) on mobile, `3rem` (48px) on desktop
- Font Weight: `500` (medium)
- Line Height: `120%`
- Letter Spacing: `-1.5%`
- Color: `dark-blue-v2` (#051D53) for first line, `bright-blue-v2` (#007BEF) for second line
- Capitalization: `capitalize`

#### H3 (Section Titles)
- Font Size: `1rem` (16px)
- Font Weight: `600` (semibold)
- Line Height: `28px`
- Color: `charcoal-black-v2` (#101828)

### Body Text

#### Regular Paragraph
- Font Size: `1rem` (16px)
- Font Weight: `400` (normal)
- Line Height: `170%`
- Color: `dark-blue-v2` (#051D53) or `neutral-gray-v2` (#575757)

#### Small Text
- Font Size: `0.875rem` (14px)
- Font Weight: `400` (normal)
- Color: `text-secondary-v2` (#4A5565)

#### Extra Small (Labels, Tags)
- Font Size: `0.75rem` (12px)
- Font Weight: `500` (medium)
- Letter Spacing: `0.6px`
- Text Transform: `uppercase`
- Color: `slate-secondary-v2` (#6A7282)

### Feature Pill Text
- **Title**: Font Size `0.875rem` (14px), Font Weight `500`, Line Height `17.5px`
- **Subtitle**: Font Size `0.75rem` (12px), Font Weight `400`, Line Height `15px`, Color `slate-secondary-v2`

## Buttons & CTAs

### Primary CTA (Button)
```
Primary Button
Height: 40px (min-h-10)
Width: Minimum 181px
Padding: 0.875rem (14px) horizontal, 0.875rem (14px) vertical
Border Radius: 6.95px
Font Size: 12.16px
Font Weight: 500
Line Height: 17.38px
Background: White with subtle styling
Border: 1px solid #D1D5DC (border-muted-v2)
Text Color: rgba(10, 10, 10, 0.8) (black-soft-v2/80)
Focus State: ring-2 ring-border-muted-v2 with ring-offset-2
```

### CTA V2 (Enhanced Button)
```
Height: 32px (h-8)
Padding: 1.5rem (24px) horizontal, 0.125rem (2px) vertical
Border Radius: 11px (rounded-xl)
Font Size: 0.75rem (12px)
Font Weight: 500
Line Height: none
Display: inline-flex with centered content
Gap: 0.25rem between items
```

### Feature Pill (Small CTA)
```
Border Radius: 9999px (rounded-full)
Border: 1px solid #E5E7EB (gray-200-custom-v2)
Background: White
Padding: 0.375rem (6px) top/bottom, 0.375rem (6px) left/right (md: 0.5rem)
Box Shadow: shadow-sm
Hover: Not specified
```

## Cards & Components

### Feature Card (Pill)
```
Display: flex with gap
Border Radius: 9999px (rounded-full)
Border: 1px solid #E5E7EB
Background: White
Padding: 0.375rem (6px) mobile, 0.5rem (8px) desktop
Box Shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2)

Icon Container:
  - Size: 20px (5) mobile, 32px (8) desktop
  - Border Radius: 9999px
  - Background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)
  - Display: flex items-center justify-center
  - Icon Color: #1447E6
```

### Category Pill (Solutions)
```
Display: flex items-center
Border Radius: 9999px
Border: 0.56px solid #E5E7EB
Background: White
Padding: 0.375rem (6px) top/bottom, 1rem (16px) left/right
Box Shadow: shadow-sm
Icon: 12px size, Brand Blue (#1447E6)
Text: 0.75rem (12px), #364153
```

## Spacing & Layout

### Horizontal Spacing
- Container Max Width: `1200px`
- Standard Padding: `1.5rem` (24px)
- Small Gap: `0.25rem` (4px)
- Medium Gap: `0.5rem` (8px), `0.75rem` (12px)
- Large Gap: `1rem` (16px), `1.5rem` (24px)

### Vertical Spacing
- Section Margin: `3.5rem` (56px) top/bottom
- Hero Min Height: `726px`
- Title to Subtitle Gap: `0.75rem` (12px)
- Subtitle to CTA Gap: `1.75rem` (28px)

### Padding
- Hero Section: `2.5rem` (40px) top (md), `0.375rem` (6px) sides
- Feature Grid: `2rem` (32px) top

## Borders & Shadows

### Border Radius Usage Guide

#### Rounded Corners Application

| Element | Radius | Tailwind | Pixels | Usage |
|---------|--------|----------|--------|-------|
| **Buttons & CTAs** | Small | `rounded-[6.95px]` | 6.95px | Primary buttons, primary CTAs |
| **Buttons & CTAs** | Small-Med | `rounded-[11px]` | 11px | Secondary buttons, CTA V2 |
| **Cards** | Small | `rounded-[0.375rem]` | 6px | Blog post cards (default) |
| **Cards** | Medium | `rounded-[0.5rem]` | 8px | Feature cards, content cards |
| **Cards** | Large | `rounded-[0.75rem]` | 12px | Hero cards, featured content |
| **Cards** | Extra Large | `rounded-[1.125rem]` | 18px | Large feature sections |
| **Pills & Badges** | Full | `rounded-full` | 9999px | Category tags, status badges, pills |
| **Images** | Small | `rounded-[6px]` | 6px | Thumbnail images, small graphics |
| **Images** | Medium | `rounded-[8px]` | 8px | Article cover images |
| **Images** | Large | `rounded-[12px]` | 12px | Hero images, featured content |
| **Inputs & Forms** | Small | `rounded-[5px]` | 5px | Form inputs, text fields |
| **Section Corners** | Extra Large | `rounded-[18px]` | 18px | Main containers, sections |
| **Hero Section** | Large Top | `rounded-tl-[18px] rounded-tr-[18px]` | 18px | Hero section top corners |

#### Rounded Corners Decision Tree
```
Are you styling a...
├─ Interactive element (button, link)?
│  └─ Use: 6-12px (small to medium)
├─ Content card (blog post, feature)?
│  └─ Use: 6-8px (default), 12px (larger emphasis)
├─ Image or visual?
│  └─ Use: 6-8px (thumbnail), 8-12px (featured)
├─ Pill, badge, or tag?
│  └─ Use: rounded-full (9999px)
├─ Form input?
│  └─ Use: 5px
└─ Large section or container?
   └─ Use: 12-18px
```

### Box Shadows
- Small: `0px 0px 3px 0px rgba(0, 0, 0, 0.2)`
- Custom: `0px 4px 24px 5px rgba(155, 183, 255, 0.15)`
- 3D: `0 4px 6px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.3)`

## Backgrounds & Gradients

### Hero Section Background
```
linear-gradient(180deg, rgba(230, 239, 255, 0.8) 0%, #FFFFFF 100%)
```

### Primary Gradient (Buttons)
```
linear-gradient(85deg, #2c4e9b, #2289cc, #27b7e4, #2289cc, #2c4e9b)
Background Size: 200%
Hover: Background Position animates left
```

### Feature Icon Gradient
```
linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)
```

### Purple Gradient (Magic Cards)
```
linear-gradient(
  to bottom right,
  #ff8da6 1%,
  #c954ff 33%,
  #836bf1 66%,
  #c4b7ff 100%
)
```

## Animations

### Entrance Animations
- **Fade In Up**: 700ms, cubic-bezier(0.22, 0.9, 0.3, 1), 350ms delay
- **Fade In**: 300ms, ease-in-out
- **Float**: 4s infinite, translateY(0.5rem) at 50%

### Glow & Pulse
- **Glow Up**: 4s linear infinite, 5px box-shadow
- **Pulse Glow**: 2s ease-in-out infinite, opacity 0.5 to 1
- **Pulse Ring**: 2s ease-in-out infinite, scale 1 to 1.3

### Transition
- Default: 0.3s ease
- Gradient Button Hover: 0.5s

## Responsive Breakpoints

```
Mobile: < 500px
Small Mobile: 500px
Small/Medium: 620px
Tablet: 768px
Custom: 880px
Desktop: 1024px
Large Desktop: 1280px
Extra Large: 1536px
3XL: 2220px
```

## Form Elements

### Input Styling
- Border: 2px solid #e8ebeb
- Border Radius: 5px
- Background: Transparent
- Checked State: Background #38c016, No border
- Checkmark: White, 2px border

### Disabled State
- Opacity: 0.5
- Cursor: not-allowed

## Status & Feedback Components

### Success Badge (Trending)
```
Border Radius: 21px
Border: 0.8px solid #38c016
Background: linear-gradient(90deg, #e9ffe3 1.09%, #c3eea9 100.82%)
Font: 12px, 500 weight
Color: #3c8900
Padding: 2px 10px
```

### Latest Badge
```
Border Radius: 21px
Border: 0.8px solid #4d3cae
Background: linear-gradient(90deg, #eae7ff 1.09%, #cec8ed 100.82%)
Font: 12px, 500 weight
Color: #11016b
Padding: 2px 10px
```

### Error/Link Color
- Link Color: #f44767 (ruby-red)
- Text Decoration: underline

## Marquee & Logo Display

### Logo Image
```
Max Width: 101.55px
Max Height: 21.94px
Object Fit: contain
Aspect Ratio: 100 / 36
Filter: grayscale(100%)
Opacity: 0.55
Transition: 0.3s ease
```

### Logo Container (Marquee Item)
```
Width: 144px (9rem)
Height: Auto
Border: 1px solid default
Background: White
Padding: 0.625rem (10px) vertical
Display: flex items-center justify-center
```

## Accessibility

- Use `aria-labelledby`, `aria-label`, `aria-hidden` appropriately
- Icon size minimum: 5px (20px rendered)
- Focus states: ring-2 with ring-offset
- Semantic HTML: `<h1>`, `<h3>`, `<p>` tags
- Image alt text: Always provided
- Link titles: Provided for context

## Implementation Notes

### For Blog Site
1. Use **dark-blue-v2** (#051D53) for primary headings
2. Use **bright-blue-v2** (#007BEF) for accent text and highlights
3. Use **charcoal-black-v2** (#101828) for body headings
4. Use **brand-blue-v2** (#1447E6) for interactive elements (buttons, links)
5. Use **section-color-v2** (#F9FAFB) for section backgrounds
6. Use **soft-gray-v2** (#F6F6F6) for subtle backgrounds
7. Match button styles: white background with border-muted border
8. Feature pills: white background with gray-200-custom border and full border-radius
9. Maintain 120% line height for headings, 170% for body text
10. Use Poppins font family exclusively
11. Hero section should use the gradient background (light blue to white)
12. Apply animations for entrance effects (fadeInUp, fadeIn)

### Tailwind Config
All colors are defined in `tailwind.config.ts` with the `-v2` suffix. Use these class names directly:
- Text colors: `text-{color-v2}`
- Background colors: `bg-{color-v2}`
- Border colors: `border-{color-v2}`

---

## Blog Components & Patterns

This section provides ready-to-use patterns for building blog pages with consistent design alignment.

### Blog Post Card

**Usage**: List view, grid layout, archive pages

```tsx
<article className="rounded-[8px] bg-white border border-gray-200-custom-v2 shadow-sm overflow-hidden hover:shadow-custom-shadow transition-shadow duration-300">
  {/* Image */}
  <div className="relative h-48 md:h-56 overflow-hidden">
    <img 
      src="post-image.jpg" 
      alt="Post title"
      className="w-full h-full object-cover rounded-t-[8px]"
    />
    {/* Optional: Category badge overlay */}
    <span className="absolute top-4 left-4 rounded-full bg-brand-blue-v2 text-white text-xs font-medium px-3 py-1">
      Category
    </span>
  </div>

  {/* Content */}
  <div className="p-6">
    {/* Meta */}
    <div className="flex items-center gap-3 mb-3">
      <span className="text-xs font-medium text-slate-secondary-v2">Author Name</span>
      <span className="text-xs text-gray-muted-v2">•</span>
      <span className="text-xs text-gray-muted-v2">5 min read</span>
    </div>

    {/* Title */}
    <h3 className="text-lg md:text-xl font-semibold text-dark-blue-v2 mb-2 line-clamp-2">
      Blog Post Title Goes Here
    </h3>

    {/* Excerpt */}
    <p className="text-sm text-neutral-gray-v2 mb-4 line-clamp-2 leading-[170%]">
      Brief excerpt or summary of the blog post content...
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="rounded-full bg-soft-gray-v2 text-charcoal-black-v2 text-xs font-medium px-3 py-1">
        #Tag1
      </span>
      <span className="rounded-full bg-soft-gray-v2 text-charcoal-black-v2 text-xs font-medium px-3 py-1">
        #Tag2
      </span>
    </div>

    {/* CTA */}
    <a href="/blog/post-slug" className="inline-flex items-center text-brand-blue-v2 font-medium text-sm hover:underline">
      Read More
      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</article>
```

**Tailwind Classes Summary**:
- Card: `rounded-[8px] bg-white border border-gray-200-custom-v2 shadow-sm`
- Title: `text-lg md:text-xl font-semibold text-dark-blue-v2`
- Excerpt: `text-sm text-neutral-gray-v2 leading-[170%]`
- Tags: `rounded-full bg-soft-gray-v2 text-charcoal-black-v2`
- Link: `text-brand-blue-v2 font-medium hover:underline`

---

### Blog Post List Item (Minimal)

**Usage**: Blog list, latest posts, related posts

```tsx
<article className="py-6 border-b border-gray-200-custom-v2 last:border-b-0">
  <div className="flex gap-4">
    {/* Thumbnail */}
    <div className="flex-shrink-0">
      <img 
        src="post-thumb.jpg" 
        alt="Post title"
        className="w-24 h-24 md:w-32 md:h-32 rounded-[8px] object-cover"
      />
    </div>

    {/* Content */}
    <div className="flex-1 min-w-0">
      <p className="text-xs text-slate-secondary-v2 font-medium mb-1">CATEGORY</p>
      <h4 className="text-base md:text-lg font-semibold text-dark-blue-v2 mb-2 line-clamp-2">
        Blog Post Title
      </h4>
      <p className="text-sm text-neutral-gray-v2 mb-3 line-clamp-2">
        Post excerpt text...
      </p>
      <div className="flex items-center gap-4 text-xs text-gray-muted-v2">
        <span>5 min read</span>
        <span>•</span>
        <span>Jan 15, 2024</span>
      </div>
    </div>
  </div>
</article>
```

---

### Featured Blog Post (Hero)

**Usage**: Homepage, featured section, top of blog page

```tsx
<div className="rounded-[12px] bg-gradient-to-br from-soft-slate-v2 to-section-color-v2 overflow-hidden border border-gray-200-custom-v2">
  <div className="grid md:grid-cols-2 gap-0">
    {/* Image */}
    <div className="relative h-64 md:h-80 overflow-hidden">
      <img 
        src="featured-image.jpg" 
        alt="Featured post"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content */}
    <div className="p-8 flex flex-col justify-center">
      <span className="inline-block rounded-full bg-brand-blue-v2 text-white text-xs font-medium px-4 py-1 w-fit mb-4">
        Featured
      </span>
      
      <h2 className="text-2xl md:text-3xl font-semibold text-dark-blue-v2 mb-4">
        Featured Blog Post Title
      </h2>
      
      <p className="text-base text-neutral-gray-v2 leading-[170%] mb-6">
        This is a longer description of the featured blog post. It should provide enough context...
      </p>

      <div className="flex items-center gap-4 mb-6">
        <img src="author-avatar.jpg" alt="Author" className="w-10 h-10 rounded-full" />
        <div>
          <p className="text-sm font-medium text-charcoal-black-v2">Author Name</p>
          <p className="text-xs text-gray-muted-v2">Jan 15, 2024</p>
        </div>
      </div>

      <a href="/blog/post" className="inline-flex items-center justify-center h-10 px-6 rounded-[7px] bg-brand-blue-v2 text-white font-medium text-sm hover:opacity-90 transition-opacity w-fit">
        Read Article
      </a>
    </div>
  </div>
</div>
```

---

### Blog Category/Tag Card

**Usage**: Category browse page, tag clouds

```tsx
<a href="/blog/category/technology" className="group rounded-[8px] bg-white border border-gray-200-custom-v2 p-6 text-center hover:shadow-custom-shadow transition-shadow duration-300">
  {/* Icon or visual */}
  <div className="w-12 h-12 rounded-[8px] bg-linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%) flex items-center justify-center mx-auto mb-4">
    <svg className="w-6 h-6 text-brand-blue-v2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.753 2 16.5S6.5 26.747 12 26.747s10-4.5 10-10.247S17.5 6.253 12 6.253z" />
    </svg>
  </div>

  <h3 className="text-lg font-semibold text-dark-blue-v2 mb-2">Category Name</h3>
  <p className="text-sm text-neutral-gray-v2 mb-4">15 articles</p>

  <span className="inline-flex items-center text-sm font-medium text-brand-blue-v2 group-hover:underline">
    Browse
    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </span>
</a>
```

---

### Blog Article Content Container

**Usage**: Blog post detail page, article body

```tsx
<article className="max-w-3xl mx-auto">
  {/* Header */}
  <header className="mb-8">
    <p className="text-xs font-medium text-slate-secondary-v2 uppercase tracking-[0.6px] mb-3">
      TECHNOLOGY
    </p>
    
    <h1 className="text-3xl md:text-4xl font-semibold text-dark-blue-v2 mb-4 leading-[120%]">
      Full Blog Post Title Goes Here
    </h1>

    {/* Meta info */}
    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-muted-v2">
      <div className="flex items-center gap-2">
        <img src="author-avatar.jpg" alt="Author" className="w-8 h-8 rounded-full" />
        <span className="font-medium">Author Name</span>
      </div>
      <span>•</span>
      <span>Jan 15, 2024</span>
      <span>•</span>
      <span>8 min read</span>
      <span>•</span>
      <span>Last updated: Jan 20, 2024</span>
    </div>
  </header>

  {/* Featured image */}
  <div className="mb-8 rounded-[12px] overflow-hidden">
    <img 
      src="article-image.jpg" 
      alt="Article cover"
      className="w-full h-96 object-cover"
    />
  </div>

  {/* Content */}
  <div className="prose prose-lg max-w-none">
    <p className="text-base text-neutral-gray-v2 leading-[170%] mb-6">
      Opening paragraph of the blog post...
    </p>

    <h2 className="text-2xl font-semibold text-dark-blue-v2 mt-8 mb-4">Section Heading</h2>
    <p className="text-base text-neutral-gray-v2 leading-[170%] mb-6">
      Body text for the section...
    </p>

    {/* Blockquote */}
    <blockquote className="border-l-4 border-brand-blue-v2 bg-soft-gray-v2 p-6 rounded-[6px] my-6">
      <p className="text-base font-medium text-charcoal-black-v2 italic">
        A relevant quote or key takeaway from the article.
      </p>
    </blockquote>

    <h3 className="text-xl font-semibold text-charcoal-black-v2 mt-6 mb-3">Subsection</h3>
    <p className="text-base text-neutral-gray-v2 leading-[170%] mb-6">
      More detailed content...
    </p>

    {/* Code block example */}
    <pre className="bg-charcoal-black-v2 text-white p-6 rounded-[8px] overflow-x-auto mb-6">
      <code className="text-sm font-mono">
        {`const example = "code block";`}
      </code>
    </pre>

    {/* List */}
    <ul className="list-disc list-inside text-base text-neutral-gray-v2 space-y-2 mb-6">
      <li>First point</li>
      <li>Second point</li>
      <li>Third point</li>
    </ul>
  </div>

  {/* Footer */}
  <footer className="mt-12 pt-8 border-t border-gray-200-custom-v2">
    {/* Tags */}
    <div className="mb-8">
      <p className="text-xs font-medium text-slate-secondary-v2 uppercase mb-3">Tags</p>
      <div className="flex flex-wrap gap-2">
        <a href="/blog/tag/javascript" className="rounded-full bg-soft-gray-v2 text-charcoal-black-v2 text-xs font-medium px-4 py-2 hover:bg-gray-200-custom-v2 transition">
          #JavaScript
        </a>
        <a href="/blog/tag/web" className="rounded-full bg-soft-gray-v2 text-charcoal-black-v2 text-xs font-medium px-4 py-2 hover:bg-gray-200-custom-v2 transition">
          #Web Development
        </a>
      </div>
    </div>

    {/* Author bio */}
    <div className="bg-soft-gray-v2 rounded-[8px] p-6">
      <div className="flex gap-4">
        <img src="author-avatar.jpg" alt="Author" className="w-16 h-16 rounded-[8px] flex-shrink-0" />
        <div>
          <h4 className="text-base font-semibold text-charcoal-black-v2 mb-1">Author Name</h4>
          <p className="text-sm text-neutral-gray-v2">
            Brief author bio and description. This helps readers understand the author's expertise...
          </p>
        </div>
      </div>
    </div>
  </footer>
</article>
```

---

### Related Posts Section

**Usage**: End of blog post, sidebar

```tsx
<section className="mt-16">
  <h2 className="text-2xl font-semibold text-dark-blue-v2 mb-8">Related Articles</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Post card */}
    <article className="rounded-[8px] bg-white border border-gray-200-custom-v2 overflow-hidden hover:shadow-custom-shadow transition-shadow">
      <img src="related-1.jpg" alt="" className="w-full h-40 object-cover" />
      <div className="p-5">
        <p className="text-xs text-slate-secondary-v2 font-medium mb-2">5 min read</p>
        <h3 className="text-base font-semibold text-dark-blue-v2 mb-2 line-clamp-2">
          Related Article Title
        </h3>
        <a href="#" className="text-brand-blue-v2 text-sm font-medium hover:underline">
          Read More →
        </a>
      </div>
    </article>
  </div>
</section>
```

---

### Blog Pagination

**Usage**: Bottom of blog list, multiple pages

```tsx
<nav className="flex items-center justify-center gap-2 mt-12" aria-label="Pagination">
  <a href="/blog?page=1" className="px-4 py-2 rounded-[6px] border border-gray-200-custom-v2 text-charcoal-black-v2 hover:bg-soft-gray-v2 transition">
    Previous
  </a>

  <button className="px-4 py-2 rounded-[6px] bg-brand-blue-v2 text-white">1</button>
  <button className="px-4 py-2 rounded-[6px] border border-gray-200-custom-v2 text-charcoal-black-v2 hover:bg-soft-gray-v2 transition">2</button>
  <button className="px-4 py-2 rounded-[6px] border border-gray-200-custom-v2 text-charcoal-black-v2 hover:bg-soft-gray-v2 transition">3</button>

  <span className="px-2 text-gray-muted-v2">...</span>

  <button className="px-4 py-2 rounded-[6px] border border-gray-200-custom-v2 text-charcoal-black-v2 hover:bg-soft-gray-v2 transition">10</button>

  <a href="/blog?page=2" className="px-4 py-2 rounded-[6px] border border-gray-200-custom-v2 text-charcoal-black-v2 hover:bg-soft-gray-v2 transition">
    Next
  </a>
</nav>
```

---

### Blog Search/Filter Bar

**Usage**: Blog main page, blog navigation

```tsx
<div className="bg-soft-gray-v2 rounded-[8px] p-6 mb-8">
  <div className="flex flex-col md:flex-row gap-4">
    {/* Search */}
    <input 
      type="text"
      placeholder="Search articles..."
      className="flex-1 px-4 py-3 rounded-[6px] border border-gray-200-custom-v2 bg-white text-charcoal-black-v2 placeholder-gray-muted-v2 focus:outline-none focus:ring-2 focus:ring-brand-blue-v2"
    />

    {/* Category filter */}
    <select className="px-4 py-3 rounded-[6px] border border-gray-200-custom-v2 bg-white text-charcoal-black-v2 focus:outline-none focus:ring-2 focus:ring-brand-blue-v2">
      <option>All Categories</option>
      <option>Technology</option>
      <option>Design</option>
      <option>Business</option>
    </select>

    {/* Sort */}
    <select className="px-4 py-3 rounded-[6px] border border-gray-200-custom-v2 bg-white text-charcoal-black-v2 focus:outline-none focus:ring-2 focus:ring-brand-blue-v2">
      <option>Latest</option>
      <option>Popular</option>
      <option>Oldest</option>
    </select>
  </div>
</div>
```

---

### Newsletter Signup Card

**Usage**: Blog sidebar, bottom of article, dedicated section

```tsx
<div className="rounded-[12px] bg-gradient-to-br from-brand-blue-v2 to-bright-blue-v2 p-8 text-white">
  <h3 className="text-2xl font-semibold mb-2">Subscribe to Our Blog</h3>
  <p className="text-blue-100 mb-6 leading-[170%]">
    Get the latest articles and insights delivered to your inbox.
  </p>

  <form className="space-y-3">
    <input 
      type="email"
      placeholder="Your email address"
      className="w-full px-4 py-3 rounded-[6px] bg-white bg-opacity-90 text-charcoal-black-v2 placeholder-gray-muted-v2 focus:outline-none focus:ring-2 focus:ring-white"
    />
    <button 
      type="submit"
      className="w-full py-3 rounded-[6px] bg-white text-brand-blue-v2 font-semibold hover:bg-opacity-90 transition"
    >
      Subscribe
    </button>
  </form>

  <p className="text-xs text-blue-100 mt-4">
    We respect your privacy. Unsubscribe at any time.
  </p>
</div>
```

---

### Blog Comment Section (Container)

**Usage**: End of blog post

```tsx
<section className="mt-12 pt-12 border-t border-gray-200-custom-v2">
  <h3 className="text-2xl font-semibold text-dark-blue-v2 mb-8">Comments</h3>

  {/* Comment input */}
  <div className="bg-soft-gray-v2 rounded-[8px] p-6 mb-8">
    <h4 className="text-lg font-semibold text-charcoal-black-v2 mb-4">Leave a Comment</h4>
    <form className="space-y-4">
      <input 
        type="text"
        placeholder="Your Name"
        className="w-full px-4 py-3 rounded-[6px] border border-gray-200-custom-v2 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-v2"
      />
      <textarea 
        placeholder="Your comment..."
        rows={5}
        className="w-full px-4 py-3 rounded-[6px] border border-gray-200-custom-v2 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-v2"
      />
      <button className="px-6 py-3 rounded-[6px] bg-brand-blue-v2 text-white font-medium hover:opacity-90 transition">
        Post Comment
      </button>
    </form>
  </div>

  {/* Comments list */}
  <div className="space-y-6">
    {/* Single comment */}
    <div className="border-b border-gray-200-custom-v2 pb-6 last:border-b-0">
      <div className="flex gap-4">
        <img src="commenter-avatar.jpg" alt="" className="w-10 h-10 rounded-full flex-shrink-0" />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h5 className="font-semibold text-charcoal-black-v2">Commenter Name</h5>
            <span className="text-xs text-gray-muted-v2">2 days ago</span>
          </div>
          <p className="text-sm text-neutral-gray-v2 leading-[170%]">
            This is a great article! Really helpful and well written.
          </p>
          <a href="#" className="text-xs font-medium text-brand-blue-v2 mt-2 hover:underline">
            Reply
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### Typography Usage in Blog

**For Blog Headings**:

```tsx
{/* Page/Section Title (H1 equivalent) */}
<h1 className="text-4xl md:text-5xl font-semibold text-dark-blue-v2 leading-[120%]">
  Blog Title
</h1>

{/* Section Heading (H2) */}
<h2 className="text-3xl md:text-4xl font-semibold text-dark-blue-v2 mt-8 mb-6">
  Section Heading
</h2>

{/* Subsection Heading (H3) */}
<h3 className="text-2xl font-semibold text-charcoal-black-v2 mt-6 mb-4">
  Subsection
</h3>

{/* Small Section Title (H4) */}
<h4 className="text-lg font-semibold text-charcoal-black-v2 mt-4 mb-3">
  Small Heading
</h4>

{/* Paragraph Text */}
<p className="text-base text-neutral-gray-v2 leading-[170%] mb-6">
  Standard paragraph content. Maintains readability with 170% line height.
</p>

{/* Small/Secondary Text */}
<p className="text-sm text-slate-secondary-v2 mb-4">
  Secondary or smaller text. Used for metadata, bylines, and supporting info.
</p>

{/* Extra Small Text (Meta/Labels) */}
<p className="text-xs font-medium text-slate-secondary-v2 uppercase tracking-[0.6px]">
  LABEL OR CATEGORY
</p>

{/* Accent Text (Important) */}
<span className="text-bright-blue-v2 font-semibold">Important highlighted text</span>

{/* Code or Monospace */}
<code className="bg-charcoal-black-v2 text-white px-2 py-1 rounded-[4px] text-sm font-mono">
  code_snippet
</code>
```

---

### Quick Component Checklist for Blog Building

Use this when building blog pages to ensure design consistency:

```
Blog Post Card:
☐ Rounded corners: 8px (rounded-[8px])
☐ Border: gray-200-custom-v2
☐ Shadow: shadow-sm with hover:shadow-custom-shadow
☐ Title: dark-blue-v2, font-semibold, text-lg
☐ Excerpt: neutral-gray-v2, text-sm, line-clamp-2
☐ Tags: rounded-full, soft-gray-v2 background
☐ Link: brand-blue-v2, hover:underline

Featured Post:
☐ Rounded corners: 12px (rounded-[12px])
☐ Background: gradient or soft-slate-v2
☐ Title: dark-blue-v2, large (text-2xl+)
☐ Description: neutral-gray-v2, 170% line height
☐ Button: brand-blue-v2 background, white text

Article Content:
☐ Max width: max-w-3xl
☐ Paragraph margin: mb-6
☐ Line height: 170% (leading-[170%])
☐ Heading margins: mt-8 mb-4 (for H2), mt-6 mb-3 (for H3)
☐ Blockquotes: border-l-4 brand-blue-v2, soft-gray-v2 background
☐ Code blocks: charcoal-black-v2 background, white text

Pagination:
☐ Active button: brand-blue-v2 background
☐ Inactive buttons: gray border, hover:bg-soft-gray-v2
☐ Border radius: 6px (rounded-[6px])

Author Bio:
☐ Container: soft-gray-v2 background, rounded-[8px]
☐ Avatar: 64px, rounded-[8px]
☐ Name: charcoal-black-v2, font-semibold
☐ Bio text: neutral-gray-v2, text-sm
```
