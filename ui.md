---
version: alpha
name: Yashb
description: |
  Yash Bharadwaj's design system embodies a playful yet professional aesthetic
  rooted in warm, organic minimalism. The palette centers on a soft beige canvas
  (#EFECE4) paired with bold, high-contrast typography and vibrant accents. The
  visual language is deliberately whimsical—3D rendered illustrations, casual
  iconography, and rotated elements create a sense of approachability and
  creative energy. Despite the playfulness, the interaction model remains
  precise and intentional, with delicate shadow work and micro-animations that
  reward exploration. The overall mood is confident but not corporate: a design
  engineer who ships polished work without sacrificing personality.
source:
  url: "https://yashb.xyz/"
  pagesAnalyzed: 1
  extractedAt: 2026-10-22
  tokensMeasured: true
colors:
  primary: "#111111"
  canvas: "#EFECE4"
  ink: "#45433D"
  accent-1: "#6A6253"
  accent-2: "#2B2620"
  accent-3: "#C4CCF6"
  accent-4: "#4B63FF"
  neutral-1: "#E7E1D2"
  neutral-2: "#FFFFFF"
  neutral-3: "#FAF7EF"
typography:
  display-xl:
    fontFamily: "Shantell Sans"
    fontSize: 68px
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: -0.68px
  display-lg:
    fontFamily: "Shantell Sans"
    fontSize: 48px
    fontWeight: 800
    lineHeight: 1.16
    letterSpacing: -0.24px
  display-md:
    fontFamily: "Shantell Sans"
    fontSize: 46px
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -0.46px
  body-xl:
    fontFamily: "Shantell Sans"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0px
  body-lg:
    fontFamily: "Shantell Sans"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0px
  body-md:
    fontFamily: "Shantell Sans"
    fontSize: 21px
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: 0px
  body-sm:
    fontFamily: "Shantell Sans"
    fontSize: 17px
    fontWeight: 800
    lineHeight: 1.5
    letterSpacing: 0.34px
    textTransform: uppercase
  body-xs:
    fontFamily: "Shantell Sans"
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0px
  body-xs-2:
    fontFamily: "Shantell Sans"
    fontSize: 14.4px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0px
  button:
    fontFamily: Inter
    fontSize: 14.5px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: -0.07px
  code-md:
    fontFamily: "Space Mono"
    fontSize: 12.5px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.13px
  code-md-uppercase:
    fontFamily: "Space Mono"
    fontSize: 12.5px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 1.5px
    textTransform: uppercase
  code-sm:
    fontFamily: "Space Mono"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  code-sm-2:
    fontFamily: "Space Mono"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.24px
  code-sm-uppercase:
    fontFamily: "Space Mono"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 1.92px
    textTransform: uppercase
  code-xs:
    fontFamily: "Space Mono"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 1.1px
    textTransform: uppercase
rounded:
  none: 0px
  xs: 15px
  sm: 18px
  md: 24px
  lg: 30px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 28px
  xxxl: 32px
  section: 36px
  band: 40px
borderWidths:
  thin: 1px
shadows:
  sm: "rgba(255, 255, 255, 0.95) 0px 2px 5px 0px inset, rgba(150, 138, 116, 0.26) 0px -4px 9px 0px inset, rgba(45, 40, 32, 0.55) 0px 18px 28px -16px"
  md: "rgba(40, 34, 22, 0.45) 0px 24px 48px -30px"
  lg: "rgba(40, 34, 22, 0.1) 0px 1px 0px 0px, rgba(40, 34, 22, 0.5) 0px 10px 30px -22px"
elevationStrategy: layered-micro
themes:
  derived: dark   # the other theme is the site's measured palette
  light:
    bg: "#EFECE4"
    surface: "#E8E5DD"
    surfaceRaised: "#E1DFD7"
    text: "#45433D"
    textMuted: "#817E77"
    border: "#DBD8D0"
    accent: "#111111"
    accentFg: "#FFFFFF"
    focusRing: "#111111"
    elevation: shadow
  dark:
    bg: "#0F0F10"
    surface: "#1D1D1E"
    surfaceRaised: "#29292A"
    text: "#F5F5F5"
    textMuted: "#9E9E9E"
    border: "#353536"
    accent: "#818181"
    accentFg: "#0B0B0C"
    focusRing: "#636363"
    elevation: "border+surface"
  contrastFailures:
    - "light: muted on bg = 3.43:1 (needs 4.5:1)"
gradients:
  - context: section
    kind: radial
    value: "radial-gradient(120% 130% at 38% 14%, rgb(254, 253, 249) 0%, rgb(241, 236, 225) 60%, rgb(226, 216, 198) 100%)"
  - context: section
    kind: linear
    value: "linear-gradient(165deg, rgb(59, 54, 47) 0%, rgb(34, 30, 24) 47%, rgb(16, 14, 11) 100%)"
  - context: section
    kind: radial
    value: "radial-gradient(120% 110% at 40% 20%, rgb(255, 253, 248) 0%, rgb(239, 232, 218) 100%)"
  - context: section
    kind: radial
    value: "radial-gradient(120% 110% at 37% 12%, rgb(254, 253, 249) 0%, rgb(241, 236, 225) 52%, rgb(224, 215, 196) 100%)"
  - context: section
    kind: radial
    value: "radial-gradient(125% 125% at 50% 22%, rgb(255, 253, 248) 0%, rgb(243, 236, 221) 66%, rgb(231, 221, 202) 100%)"
  - context: section
    kind: linear
    value: "linear-gradient(rgb(255, 253, 248) 0%, rgb(244, 238, 222) 100%)"
components:
  button-text:
    typography: "{typography.button}"
    textColor: "{colors.neutral-3}"
    height: 45.75px
    padding: "12px 22px 12px 22px"
  button-text-2:
    typography: "{typography.button}"
    textColor: "rgb(74, 68, 58)"
    height: 45.75px
    padding: "12px 22px 12px 22px"
  card:
    textColor: "{colors.primary}"
    border: "1px solid rgba(40, 34, 22, 0.12)"
    padding: "28px 28px 28px 28px"
    fontSize: 16px
    boxShadow: "rgba(40, 34, 22, 0.45) 0px 24px 48px -30px"
    fontFamily: Inter
    fontWeight: 400
    lineHeight: 1.5
    rounded: "{rounded.sm}"
  card-sm:
    textColor: "{colors.primary}"
    padding: "8px 8px 0px 8px"
    fontSize: 16px
    boxShadow: "rgba(255, 255, 255, 0.95) 0px 2px 5px 0px inset, rgba(150, 138, 116, 0.26) 0px -4px 9px 0px inset, rgba(45, 40, 32, 0.55) 0px 18px 28px -16px"
    fontFamily: Inter
    fontWeight: 400
    lineHeight: 1.5
    rounded: "{rounded.md}"
  navigation:
    textColor: "{colors.primary}"
    height: 71.75px
    padding: "11px 0px 11px 0px"
    fontSize: 16px
    boxShadow: "rgba(40, 34, 22, 0.1) 0px 1px 0px 0px, rgba(40, 34, 22, 0.5) 0px 10px 30px -22px"
    fontFamily: Inter
    fontWeight: 400
    lineHeight: 1.5
    backgroundColor: "rgba(239, 236, 228, 0.82)"
  link:
    textColor: "{colors.primary}"
    fontSize: 16px
    boxShadow: "rgba(45, 40, 32, 0.5) 0px 40px 64px -28px, rgba(255, 255, 255, 0.9) 0px 16px 30px 0px inset, rgba(150, 138, 116, 0.3) 0px -20px 34px 0px inset"
    fontFamily: Inter
    fontWeight: 400
    lineHeight: 1.5
    rounded: 28px
  link-sm:
    textColor: "{colors.neutral-2}"
    padding: "0px 38px 0px 38px"
    fontSize: 18px
    fontFamily: "Space Mono"
    fontWeight: 400
    lineHeight: 1.5
states:
  other-hover:
    target: other
    state: hover
    opacity: 1
  other-focus-visible:
    target: other
    state: focus-visible
    borderColor: "rgb(243, 213, 163)"
  link-hover:
    target: link
    state: hover
    textColor: "{colors.accent-4}"
breakpoints:
  - width: 375
    containerWidth: 339
    gridColumns: 1
    navLinksVisible: 1
    menuToggleVisible: true
    headingPx: 28
    bodyPx: 16
    sectionPaddingX: 22
  - width: 768
    containerWidth: 691
    gridColumns: 1
    navLinksVisible: 1
    menuToggleVisible: true
    headingPx: 40
    bodyPx: 16
    sectionPaddingX: 54
  - width: 1024
    containerWidth: 928
    gridColumns: 1
    navLinksVisible: 6
    menuToggleVisible: false
    headingPx: 53
    bodyPx: 16
    sectionPaddingX: 72
  - width: 1280
    containerWidth: 1140
    gridColumns: 1
    navLinksVisible: 6
    menuToggleVisible: false
    headingPx: 67
    bodyPx: 16
    sectionPaddingX: 90
  - width: 1440
    containerWidth: 1140
    gridColumns: 1
    navLinksVisible: 6
    menuToggleVisible: false
    headingPx: 68
    bodyPx: 16
    sectionPaddingX: 101
coverage:
  statesFound: 32
  gradientsFound: 6
  rolesUnassigned: 7
  archetypesUnnamed: 0
  archetypesDetected: 0
  responsiveMeasured: true
  stylesheetsBlocked: true
  semanticRampDeclared: false
---

# Design System Inspired by Yash Bharadwaj

## 1. Visual Theme & Atmosphere

Yash Bharadwaj's design system embodies a playful yet professional aesthetic rooted in warm, organic minimalism. The palette centers on a soft beige canvas (`{colors.canvas}` — `#EFECE4`) paired with bold, high-contrast typography and vibrant accents. The visual language is deliberately whimsical—3D rendered illustrations, casual iconography, and rotated elements create a sense of approachability and creative energy. Despite the playfulness, the interaction model remains precise and intentional, with delicate shadow work and micro-animations that reward exploration. The overall mood is confident but not corporate: a design engineer who ships polished work without sacrificing personality.

**Key Characteristics**

- Warm neutral palette anchored by soft beige and warm grays
- High-weight, geometric typography (Shantell Sans as the primary display font)
- Vibrant accent colors—electric blue and purple—used sparingly for emphasis and links
- Organic 3D illustration style with soft shadows and subtle depth
- Sharp, no-radius button and component styling paired with rounded cards
- Micro-interactions: subtle lifts, rotations, and color shifts on hover
- Asymmetric, conversational layout with decorative floating elements
- Inset and layered shadow work for tactile depth without floating cards

---

## 2. Color Palette & Roles

### Primary
- **Primary / Brand** (`{colors.primary}` — `#111111`): Deep black used for primary CTAs, brand mark, active states, and dominant text. The defining neutral anchor and highest contrast element.

### Accent Colors
- **Accent Decorative** (`{colors.accent-1}` — `#6A6253`): Warm brown tone for decorative elements and contextual highlighting.
- **Accent Decorative** (`{colors.accent-2}` — `#2B2620`): Very dark brown, used decoratively in illustrations and backgrounds.
- **Accent Decorative** (`{colors.accent-3}` — `#C4CCF6`): Soft lavender, reserved for decorative UI elements and visual accents.
- **Accent Decorative** (`{colors.accent-4}` — `#4B63FF`): Electric vibrant blue, used for link underlines, focus outlines, and interactive highlights.

### Neutral Scale
- **Canvas** (`{colors.canvas}` — `#EFECE4`): The default page background; warm beige providing the foundational visual surface.
- **Ink** (`{colors.ink}` — `#45433D`): Primary text color for headings and body copy; warm dark gray with depth.
- **Neutral Light** (`{colors.neutral-1}` — `#E7E1D2`): Subtle light neutral used in borders and reduced-contrast surfaces.
- **Neutral Surface** (`{colors.neutral-2}` — `#FFFFFF`): Pure white for card backgrounds and high-contrast surfaces.
- **Neutral Off-White** (`{colors.neutral-3}` — `#FAF7EF`): Off-white for subtle surface variation and container backgrounds.

---

## 3. Typography Rules

### Font Family

**Primary Display Font:**  
Shantell Sans (https://fonts.googleapis.com/) — geometric, high-weight display typeface with distinctive character. Fallback: `system-ui, -apple-system, sans-serif`

**Secondary Body Font:**  
Inter (https://fonts.googleapis.com/) — clean, modern sans-serif for interface copy and buttons. Fallback: `system-ui, -apple-system, sans-serif`

**Code / Monospace Font:**  
Space Mono (https://fonts.googleapis.com/) — monospaced typeface for code blocks and technical text. Fallback: `monospace`

**Decorative Font:**  
Bagel Fat One (https://fonts.googleapis.com/) — reserved for special display moments and brand expression.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| Display XL | Shantell Sans | 68px | 800 | 1.04 | -0.68px | Hero headline; maximum impact |
| Display LG | Shantell Sans | 48px | 800 | 1.16 | -0.24px | Section heading; secondary hero |
| Display MD | Shantell Sans | 46px | 800 | 1.05 | -0.46px | Large heading; feature title |
| Heading LG | Shantell Sans | 24px | 700 | 1.4 | 0px | Subsection heading |
| Heading MD | Shantell Sans | 22px | 700 | 1.5 | 0px | Card title; module heading |
| Body MD | Shantell Sans | 21px | 800 | 1.1 | 0px | Rich body text; emphasis |
| Body SM | Shantell Sans | 17px | 800 | 1.5 | 0.34px | Uppercase accent label |
| Body XS | Shantell Sans | 15px | 700 | 1.5 | 0px | Small body copy |
| Body XS-2 | Shantell Sans | 14.4px | 700 | 1.5 | 0px | Compact label |
| Button | Inter | 14.5px | 500 | 1.5 | -0.07px | Interactive button text |
| Code MD | Space Mono | 12.5px | 400 | 1.5 | 0px | Code block; standard monospace |
| Code SM | Space Mono | 12px | 400 | 1.5 | 0px | Inline code |
| Code XS Uppercase | Space Mono | 11px | 400 | 1.5 | 1.1px | Uppercase code label; high tracking |

### Principles

- Display sizes (Display XL through Display MD) use negative letter-spacing (`-0.68px` to `-0.24px`), creating visual tightness and impact.
- Shantell Sans dominates the visual hierarchy—all display and heading roles use this distinctive typeface, establishing brand voice.
- Body copy in Shantell Sans (especially at `{typography.body-md}` — 21px, 800 weight) balances personality with legibility.
- Inter is reserved for interface affordances (buttons, navigation) where neutrality and clarity are valued.
- Space Mono appears in code contexts and technical accents; tracking is generous (up to 1.92px) for uppercase variants, adding formality to system labels.
- Line heights are consistently tight (1.04–1.16) on display, generous (1.4–1.5) on body, balancing readability with hierarchy distinction.

---

## 4. Component Stylings

### Buttons

**Primary Button**
- Background: `{colors.primary}` (`#111111`)
- Text Color: `{colors.neutral-3}` (`#FAF7EF`)
- Padding: `12px 22px`
- Height: `45.75px`
- Font: `{typography.button}` (Inter, 14.5px, weight 500)
- Border Radius: `{rounded.none}` (0px) — sharp corners
- Border: `0px none`
- Box Shadow: none
- Letter Spacing: -0.07px
- Line Height: 1.5
- Hover: background becomes `var(--text-muted)` with opacity adjustments
- Focus Visible: focus outline in `{colors.accent-4}` (`#4B63FF`), 2px solid

**Secondary Button (Text)**
- Background: transparent (rgba(0, 0, 0, 0))
- Text Color: `{colors.ink}` (`#45433D`)
- Padding: `12px 22px`
- Height: `45.75px`
- Font: `{typography.button}` (Inter, 14.5px, weight 500)
- Border Radius: `{rounded.none}` (0px)
- Border: `0px none`
- Box Shadow: none
- Hover: text color shifts, optional transform translateY(-2px)

### Cards & Containers

**Card (Default / Large)**
- Background: transparent (rgba(0, 0, 0, 0))
- Border: `1px solid rgba(40, 34, 22, 0.12)` — hairline border
- Padding: `28px 28px 28px 28px`
- Border Radius: `{rounded.sm}` (18px)
- Box Shadow: `rgba(40, 34, 22, 0.45) 0px 24px 48px -30px` — soft drop shadow
- Width: Variable (1140px max on desktop)
- Height: Variable (227.25px measured)
- Color: `{colors.ink}` (`#111111`)
- Font: Inter, 16px, weight 400
- Line Height: 1.5
- Hover: shadow intensifies with lift transform translateY(-26px)

**Card (Small / Compact)**
- Background: transparent (rgba(0, 0, 0, 0))
- Border: `0px solid {colors.primary}` — no border
- Padding: `8px 8px 0px 8px`
- Border Radius: `{rounded.md}` (24px) — more rounded than default card
- Box Shadow: `rgba(255, 255, 255, 0.95) 0px 2px 5px 0px inset, rgba(150, 138, 116, 0.26) 0px -4px 9px 0px inset, rgba(45, 40, 32, 0.55) 0px 18px 28px -16px` — complex layered inset shadow
- Width: 201.594px (measured)
- Height: 186.797px (measured)
- Color: `{colors.primary}` (`#111111`)
- Font: Inter, 16px, weight 400
- Hover: shadow becomes `rgba(255, 255, 255, 0.98) 0px 18px 30px inset, rgba(150, 138, 116, 0.38) 0px -24px 38px inset, rgba(255, 255, 255, 0.5) 16px 0px 30px inset, rgba(150, 138, 116, 0.22) -18px 0px 32px inset, rgba(45, 40, 32, 0.56) 0px 50px 72px -26px` with transform translateY(-8px)

### Navigation

**Navigation Bar**
- Background: `rgba(239, 236, 228, 0.82)` — semi-transparent canvas
- Border: `0px solid {colors.primary}`
- Padding: `11px 0px 11px 0px`
- Height: `71.75px`
- Border Radius: `{rounded.none}` (0px)
- Box Shadow: `rgba(40, 34, 22, 0.1) 0px 1px 0px 0px, rgba(40, 34, 22, 0.5) 0px 10px 30px -22px` — subtle layered shadow
- Color: `{colors.primary}` (`#111111`)
- Font: Inter, 16px, weight 400
- Line Height: 1.5
- Navigation Links: collapse to hamburger menu at 768px and below

**Navigation Link (Default)**
- Color: `{colors.primary}` (`#111111`)
- Hover: color shifts to `{colors.accent-4}` (`#4B63FF`) with optional transform translate(8px)
- Font: Inter, 16px, weight 400

### Links

**Link (Default / Large)**
- Color: `{colors.primary}` (`#111111`)
- Hover: color shifts to `{colors.accent-4}` (`#4B63FF`)
- Border Radius: `{rounded.lg}` (28px)
- Box Shadow: `rgba(45, 40, 32, 0.5) 0px 40px 64px -28px, rgba(255, 255, 255, 0.9) 0px 16px 30px 0px inset, rgba(150, 138, 116, 0.3) 0px -20px 34px 0px inset`
- Hover: shadow intensifies and becomes `rgba(45, 40, 32, 0.56) 0px 48px 70px -26px, rgba(255, 255, 255, 0.98) 0px 17px 30px inset, rgba(150, 138, 116, 0.38) 0px -22px 36px inset, rgba(255, 255, 255, 0.46) 15px 0px 28px inset, rgba(150, 138, 116, 0.2) -16px 0px 30px inset` with transform translateY(-8px)

**Link (Small / CTA)**
- Color: `{colors.neutral-2}` (`#FFFFFF`)
- Font: Space Mono, 18px, weight 400
- Background: `{colors.primary}` (`#111111`)
- Padding: `0px 38px 0px 38px`
- Height: `62px`
- Border Radius: `{rounded.none}` (0px)
- Box Shadow: none

---

## 5. Layout Principles

### Spacing System

The spacing system uses a base unit of 4px, scaled into a 10-value progression:

- `{spacing.xxs}` = 4px — micro gaps, icon spacing
- `{spacing.xs}` = 8px — tight element spacing
- `{spacing.sm}` = 12px — small padding, button margins
- `{spacing.md}` = 16px — default body padding, standard gaps
- `{spacing.lg}` = 20px — generous component margins
- `{spacing.xl}` = 24px — heading margins, card padding
- `{spacing.xxl}` = 28px — section dividers, large padding
- `{spacing.xxxl}` = 32px — substantial spacing between major sections
- `{spacing.section}` = 36px — section top/bottom padding
- `{spacing.band}` = 40px — full-width band padding

### Grid & Container

- **Max Width (Desktop):** `1140px` — content column width
- **Desktop Padding:** `90px–101px` horizontal (section padding-x scales with viewport)
- **Tablet Padding:** `54px` horizontal
- **Mobile Padding:** `22px` horizontal
- **Grid Columns:** Single-column layout across all breakpoints (no multi-column grid)
- **Section Pattern:** Full-width bands with centered content, wrapped in radial gradients for visual interest

### Whitespace Philosophy

Whitespace is generous and intentional, emphasizing content hierarchy through breathing room rather than borders. Cards float within white space with inset shadows, creating depth through containment rather than overlays. Vertical rhythm is maintained via consistent section spacing (`{spacing.section}` and `{spacing.band}`), while horizontal margins grow progressively with viewport to maintain comfortable readability at all scales.

### Border Radius Scale

- `{rounded.none}` = 0px — buttons, navigation, sharp CTA elements
- `{rounded.xs}` = 15px — subtle container softening
- `{rounded.sm}` = 18px — default card radius; friendly but not rounded
- `{rounded.md}` = 24px — compact card components; more approachable
- `{rounded.lg}` = 30px — large interactive surfaces; maximum friendliness without pill shape

### Border Widths

- **Thin** = 1px — hairline card borders and subtle dividers (measured on buttons and card components)

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow; background color only | Buttons, text elements |
| Micro Inset | `rgba(255, 255, 255, 0.95) 0px 2px 5px 0px inset, rgba(150, 138, 116, 0.26) 0px -4px 9px 0px inset, rgba(45, 40, 32, 0.55) 0px 18px 28px -16px` | Small cards; subtle lift |
| Standard Drop | `rgba(40, 34, 22, 0.45) 0px 24px 48px -30px` | Default cards; gentle elevation |
| Navigation | `rgba(40, 34, 22, 0.1) 0px 1px 0px 0px, rgba(40, 34, 22, 0.5) 0px 10px 30px -22px` | Navigation bar; thin top line + soft drop |
| Elevated Inset | `rgba(255, 255, 255, 0.98) 0px 18px 30px inset, rgba(150, 138, 116, 0.38) 0px -24px 38px inset, rgba(255, 255, 255, 0.5) 16px 0px 30px inset, rgba(150, 138, 116, 0.22) -18px 0px 32px inset, rgba(45, 40, 32, 0.56) 0px 50px 72px -26px` | Hover state; dramatic inset shift |

**Shadow Philosophy:**  
This system employs **layered-micro** elevation—shadows are built from stacked, nearly transparent layers rather than a single strong drop. Inset shadows (especially on small cards) create the illusion of recess or embossing, while soft drop shadows appear only at significant depth changes. The approach avoids floating-card aesthetics in favor of tactile, almost physical impression. Color-blocking (background surface changes) is as important as shadows in signaling depth.

### Opacity Levels

- 38% (`0.38`) — subtle disabled or secondary state
- 46% (`0.46`) — slight reduction for muted elements
- 47% (`0.47`) — near-half transparency for overlays
- 60% (`0.60`) — noticeable reduction; tertiary emphasis
- 78% (`0.78`) — minor fade for hover/focus transitions
- 90% (`0.90`) — almost-opaque, barely perceptible reduction

### Z-index / Layering

- **Base:** 1–6 — default stacking for page content
- **Dropdown:** 50 — above base content; menus and popovers
- **Sticky:** 100 — navigation and sticky headers; above dropdowns

---

## 7. Do's and Don'ts

### Do

- **Use Shantell Sans for all headings and display text.** It is the defining brand voice and must remain consistent across the system.
- **Pair high-weight typography (700–800) with generous line heights (1.4–1.5).** This balances personality with legibility.
- **Apply negative letter-spacing on display sizes.** The -0.68px to -0.24px range is intentional and creates the brand's visual tightness.
- **Use `{colors.accent-4}` (`#4B63FF`) sparingly for links, focus states, and interactive highlights.** It is the visual "pop" that guides user attention.
- **Build depth through layered inset shadows, not floating overlays.** Micro-layers create tactile, dimensional surfaces without the floating-card aesthetic.
- **Scale horizontal padding with viewport width.** Grow padding from 22px (mobile) → 54px (tablet) → 90px–101px (desktop) to maintain proportional margins.
- **Use `{rounded.none}` (0px) for primary CTAs and navigation; reserve `{rounded.md}` and `{rounded.lg}` for secondary containers.** Sharp buttons feel intentional; rounded cards feel friendly.
- **Maintain single-column layout across all breakpoints** unless a multi-column need emerges; the current design favors vertical rhythm over grid complexity.
- **Animate micro-interactions subtly:** slight lifts (translateY -2px to -8px), gentle rotations (-3deg to -4deg), and scale boosts (1.035 to 1.05) reward exploration without overwhelming.

### Don't

- **Do not invent new font families.** Stick to Shantell Sans (display), Inter (UI), Space Mono (code), and Bagel Fat One (special moments only).
- **Do not round buttons or primary CTAs.** The 0px radius is intentional; reserve rounded corners for secondary containers and cards.
- **Do not use `{colors.accent-1}`, `{colors.accent-2}`, or `{colors.accent-3}` as interactive affordances.** These are decorative only; interactive affordances must use `{colors.primary}` or `{colors.accent-4}`.
- **Do not create multi-tier shadow hierarchies beyond what is measured.** The system uses exactly 5 shadow treatments; introducing new shadows muddies depth semantics.
- **Do not apply letterSpacing to body text below 15px.** The tracking is reserved for display and code roles; body text remains un-tracked.
- **Do not float cards above the canvas with only a drop shadow.** Always pair drop shadows with inset layering or color-blocking for the tactile, embossed feel.
- **Do not collapse the navigation menu above 768px.** Nav links remain visible and inline until 768px viewport width, where the toggle appears.
- **Do not introduce new opacity values.** Use only the 6 established levels (0.38, 0.46, 0.47, 0.60, 0.78, 0.90); do not interpolate intermediate values.
- **Do not use `{colors.neutral-2}` (`#FFFFFF`) as a background on the canvas.** White is reserved for high-contrast card surfaces; the default background is always `{colors.canvas}` (`#EFECE4`).

---

## 8. Responsive Behavior

### Breakpoints

| Viewport | Content Width | Column Count | Nav Links Visible | Menu Toggle | Display XL | Body | Section Padding-X |
|---|---|---|---|---|---|---|---|
| 375px (Mobile) | 339px | 1 | Hidden | Yes | 28px | 16px | 22px |
| 768px (Tablet) | 691px | 1 | Hidden | Yes | 40px | 16px | 54px |
| 1024px (Desktop) | 928px | 1 | 6 links | No | 53px | 16px | 72px |
| 1280px (Desktop+) | 1140px | 1 | 6 links | No | 67px | 16px | 90px |
| 1440px (Large) | 1140px | 1 | 6 links | No | 68px | 16px | 101px |

**Key Changes:**
- **375px → 768px:** Heading scales 28px → 40px; padding grows 22px → 54px; menu becomes toggle-only.
- **768px → 1024px:** Content width jumps 691px → 928px; heading becomes 53px; navigation links reappear; toggle disappears.
- **1024px → 1280px:** Content max-width reaches 1140px; heading scales 53px → 67px; section padding grows 72px → 90px.
- **1280px → 1440px:** Max-width remains 1140px; heading reaches 68px; padding expands to 101px (maximum); display text stabilizes.

### Touch Targets

- **Minimum Interactive Height:** 45.75px (measured on buttons)
- **Minimum Interactive Width:** 160px (measured on button components)
- **Minimum Tap Area:** 48px × 48px (emergent from 45.75px button height + margin)
- **Link Padding:** Buttons and CTAs use `12px 22px` (vertical × horizontal) to ensure comfortable touch targets on mobile

### Collapsing Strategy

- **Mobile (≤ 768px):** Navigation collapses to hamburger menu; headings scale down to 28px–40px; section padding reduces to 22px–54px. Single-column layout remains consistent. Button width may constrain to fit viewport.
- **Tablet (768px–1024px):** Navigation remains hidden; heading scales 40px → 53px; content column grows to 691px → 928px. Section padding increases to 54px → 72px. No multi-column layout emerges.
- **Desktop (≥ 1024px):** Navigation links reappear inline; heading reaches 53px–68px; max-width stabilizes at 1140px; section padding grows to 72px–101px. All interactive elements remain accessible at full viewport.

---

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA & Brand:** Primary (`#111111`) — use for button fills, brand mark, and high-contrast text
- **Interactive Highlight:** Accent-4 (`#4B63FF`) — electric blue for links, focus outlines, and hover states
- **Page Background:** Canvas (`#EFECE4`) — warm beige default surface
- **Primary Text:** Ink (`#45433D`) — dark gray for headings and body copy
- **Secondary Surface:** Neutral-2 (`#FFFFFF`) — white for card backgrounds and high-contrast containers
- **Decorative Accents:** Accent-1 (`#6A6253`), Accent-2 (`#2B2620`), Accent-3 (`#C4CCF6`) — use for illustrations, backgrounds, and non-interactive visual elements only

### Iteration Guide

1. **Typography Foundation:** All display and heading text uses Shantell Sans (weight 700–800) with negative letter-spacing on display sizes. Body copy in Inter or Shantell Sans depending on hierarchy level. Code text always uses Space Mono, 400 weight, with generous tracking on uppercase variants.

2. **Color Discipline:** Primary (`#111111`) is reserved for CTAs, brand elements, and dominant text. Accent-4 (`#4B63FF`) is the only interactive accent; it appears on link hover, focus outlines, and specific highlights. Decorative accents (1–3) do not trigger any interactive behavior.

3. **Shadow & Depth:** Layered inset shadows create the tactile, embossed feel; avoid single drop shadows on cards. Navigation uses a thin top line + soft drop. Hover states amplify shadow complexity while maintaining the micro-layer approach. No floating-card aesthetic.

4. **Spacing & Layout:** Single-column layout across all breakpoints. Horizontal padding scales with viewport (22px mobile → 54px tablet → 72px–101px desktop). Vertical rhythm maintains consistent section gaps using `{spacing.section}` (36px) and `{spacing.band}` (40px).

5. **Button & Interactive Styling:** Buttons use 0px border-radius (sharp) with `{typography.button}` (Inter, 14.5px, 500 weight). Primary buttons fill with `#111111`; secondary buttons remain transparent with text-only. Hover states apply subtle transforms (translateY -2px to -8px) and opacity shifts. Focus states outline in `#4B63FF`, 2px solid.

6. **Responsive Collapse:** Navigation menu hides on viewports ≤ 768px and reappears inline at ≥ 1024px. Heading sizes scale in distinct steps: 28px (mobile) → 40px (tablet) → 53px–68px (desktop). Content column max-width is 1140px; do not exceed this on any viewport.

7. **Card & Container Styling:** Default card uses `{rounded.sm}` (18px), `1px solid` hairline border, and standard drop shadow. Compact cards use `{rounded.md}` (24px), no border, and complex inset shadow. Hover lifts cards with transform and shadow amplification.

8. **Text Treatment:** Body text in Shantell Sans at 21px (weight 800) for emphasis, 15px–17px (weight 700) for standard. Inter at 16px for interface text (navigation, buttons). No letter-spacing on body; reserve tracking for display (negative) and code (positive, up to 1.92px).

9. **Micro-Interactions:** Hover states include gentle transforms (scale 1.035–1.05, rotate -3deg to -4deg, translateY -2px to -8px) paired with shadow shifts. Focus states outline in `#4B63FF`. Transitions are implicit; provide CSS transition: all 200ms easing.

10. **Known Constraint:** The system does not define explicit interaction states (active, disabled, error) beyond hover and focus. Do not invent these; if a new state is needed, it belongs in "Known Gaps" for future expansion.

---

## 10. Known Gaps

- **Semantic Status Colors:** The site does not declare error, success, warning, or info color roles. No semantic ramp exists; status communication relies on text and icon variations only.
- **Disabled State Styling:** No explicit disabled styles were measured. Opacity and reduced contrast rules exist but apply to hover/focus contexts; disabled button treatment is not formally defined.
- **Active State (Navigation/Tabs):** Active navigation link styling was not observed in the captured markup. Assume color change or underline, but exact treatment is unmeasured.
- **Dark Mode / Themes:** The extraction measured only a light (warm beige) theme. The site does not ship a dark mode or alternate theme that was captured.
- **Animation / Transition Timings:** Specific transition-duration, animation-duration, and easing functions (e.g., cubic-bezier values) were not extracted. Micro-interaction transforms are present, but timing details belong in component CSS.
- **Decorative Accent Colors (7 measured values):** Colors Accent-1, Accent-2, and Accent-3 have no measured interactive role and appear only in illustrations, backgrounds, and decorative elements. They do not function as semantic affordances.
- **Breakpoint Behavior Below 375px:** The smallest captured viewport is 375px. Ultra-small devices (watches, legacy phones) are not addressed.
- **Form Input Styling:** Input fields, checkboxes, radio buttons, and form validation states were not measured on the homepage. These components may exist elsewhere on the site but are not represented here.
- **Accessibility Focus / ARIA:** Focus management, tab order, and ARIA labeling strategies were not extracted from CSS. Visible focus outlines exist (`#4B63FF`, 2px) but keyboard navigation flow is not documented.
- **Print Styles:** No print-specific styles were detected. Print behavior is not defined by this system.
- **Cross-Origin Stylesheets:** Some CSS from external sources may not have been fully accessible during extraction, so component detail in external libraries or shadow DOM may be incomplete.