# ZELWICK Design Guidelines

## Design Approach
**Reference-Based Approach**: Dark-themed creative agency with inspiration from modern portfolio sites like Awwwards-featured agencies, combined with the polished aesthetics of Linear and Stripe's restraint.

## Core Design Elements

### Color Palette
- **Background**: Pure black (#000000)
- **Accent Primary**: Violet (#8B5CF6) with glow effects
- **Accent Secondary**: Blue (#60A5FA) with glow effects
- **Text**: White headings, light gray body text
- **Component Styling**: Subtle gradients, soft glows on interactive elements

### Typography
- **Font Family**: Inter or Manrope via Google Fonts
- **Hierarchy**: Large bold headings, medium subheadings, regular body text
- **Color Treatment**: White for headings, light gray for body content
- **Gradient Accent**: Apply violet/blue gradient to key accent words in headings

### Layout System
- **Max Content Width**: 1200px centered container
- **Spacing**: Generous vertical padding (py-16 to py-24), large section gaps
- **Corners**: Rounded corners on all cards and components
- **Grid**: Responsive multi-column grids that collapse to single column on mobile

## Component Library

### Header (Sticky Navigation)
- Logo positioned left
- Horizontal menu links: Work, Process, Pricing, About, FAQ
- Two CTA buttons right-aligned:
  - "Book a Call" - violet solid background with glow
  - "Get a Quote" - outlined violet border
- Sticky behavior on scroll with backdrop blur

### Hero Section
- Large bold heading with one word in violet/blue gradient
- Concise subtext below heading
- Two CTAs: "Book a Call" and "See Work"
- "Trusted by" row beneath with 4-6 logo placeholders (grayscale with subtle glow on hover)

### Social Proof Section
- Grid layout (3-4 columns desktop, 2 tablet, 1 mobile)
- Circular image placeholders
- Name labels beneath each image
- Subtle card hover effects

### Video Testimonials Section
- Title: "Hear it directly from our clients"
- 3-6 video cards in grid layout
- 16:9 aspect ratio video placeholders
- Quote text below each video
- Client name and role attribution
- Card lift effect on hover

### Services Section
- Title: "How can we help you?"
- **YouTube Videos**: 3-4 horizontal thumbnail placeholders in grid
- **Short Form Videos**: Grid of 6 vertical video placeholders (9:16 aspect ratio)
- **Additional Services**: 4 service cards for Podcast Editing, Ad Creatives & VSLs, Explainers, LinkedIn Videos
- Each card includes icon placeholder, title, and brief description

### Comparison Section
- Two-column layout (side-by-side desktop, stacked mobile)
- Left column: "Other Agencies" with gray/muted styling
- Right column: "Us" with violet glow border and accent
- 4-5 bullet points per column highlighting differences
- Visual distinction through background treatment and borders

### Reviews Section
- Grid of 4-6 testimonial cards
- Small circular client image
- Client name and company
- Short testimonial quote
- Card background with subtle violet/blue glow border

### Main CTA Section
- Large headline: "Ready to scale? Let's talk!"
- Prominent container for booking form placeholder
- Designed to accommodate Calendly embed or custom form
- High contrast violet glow treatment

### FAQ Section
- Accordion-style list with 5 questions
- Expandable/collapsible behavior
- Question in white, answer in light gray
- Subtle expand/collapse icons
- Smooth transitions

### Footer
- **Left Side**: Logo and mission statement/tagline
- **Right Side**: Three link columns
  - Company links
  - Services links
  - Legal links
- Social media icons row
- Subtle divider line above footer

## Interactions & Animations
- **Hover Effects**: Soft glow on interactive elements, slight card lift on hover
- **Smooth Scroll**: Implement smooth scrolling for navigation links
- **Transitions**: Subtle fade-ins and transforms, avoid aggressive animations
- **Card Behavior**: Gentle lift (4-8px) with increased glow on hover

## Media Placeholders
- All video and image slots must show placeholder boxes
- Video placeholders with play icon overlay
- Image placeholders with dimensions and aspect ratio clearly defined
- Designed for easy replacement with real assets

## Responsive Behavior
- **Desktop (1024px+)**: Full multi-column layouts, max 1200px content width
- **Tablet (768px-1023px)**: 2-column grids, adjusted spacing
- **Mobile (<768px)**: Single column, stacked layouts, full-width components
- Touch-optimized button sizes and spacing on mobile

## Accessibility
- High contrast white/light gray text on black background
- Focus states with violet outline
- Keyboard navigation support for all interactive elements
- Semantic HTML structure for screen readers