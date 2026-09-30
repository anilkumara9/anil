---
name: design-system-observe-ai-purpose-built-ai-agents-one-cx-platform
description: >
  Apply the Observe.AI | Purpose-Built AI Agents. One CX Platform. design system when building or updating UI.
  Use when creating components, choosing colors or typography,
  or reviewing designs for marketing interfaces.
---

# Observe.AI | Purpose-Built AI Agents. One CX Platform. — Design System Skill

## When to Use

- Building new UI components for Observe.AI | Purpose-Built AI Agents. One CX Platform..
- Reviewing or updating existing component styles.
- Choosing colors, typography, or spacing for marketing pages.
- Checking designs against the extracted token set.

## Context

- **Product:** Observe.AI | Purpose-Built AI Agents. One CX Platform. — https://www.observe.ai/
- **Surface:** marketing
- **Audience:** Developers and technical decision-makers
- **Character:** Conversion-focused marketing presence with a rich, diverse color palette and 3 typefaces.

## Tokens

### Colors

| Token | Value | Role |
|-------|-------|------|
| --color | `#FC535B` | Accent |
| color-6 | `#EDEDED` | Surface |
| color-1 | `#000000` | Text Primary |
| color-4 | `#E6E6E6` | Border |
| color-3 | `#B2B2B4` | Text Light |
| color-5 | `#F2F536` | Text Light |
| color-7 | `#FFFFFF` | Text Light |

### Typography

**Font stack:** Orbikular, Aeonik, sans-serif

| Level | Size | Usage |
|-------|------|-------|
| text-xs | 10px | Captions, metadata |
| text-sm | 13px | Labels, secondary text |
| text-base | 16px | Body text (default) |
| text-lg | 18px | Subheadings, emphasis |
| text-xl | 24px | Section headings |
| text-2xl | 70px | Section headings |
| text-3xl | 80px | Section headings |

**Weight scale:** 300 · 400 · 500 · 600
**Line heights:** 86.4px · 68.6784px · 27.12px · 36px · 24px · 14.4px · 21.696px · 19.2px · 19.44px

### Spacing

**Base unit:** 8px

`space-1: 3px` · `space-2: 6px` · `space-3: 8px` · `space-4: 10px` · `space-5: 12px` · `space-6: 16px` · `space-7: 32px` · `space-8: 40px` · `space-9: 64px` · `space-10: 80px` · `space-11: 96px` · `space-12: 101px` · `space-13: 176px` · `space-14: 182px` · `space-15: 400px`

### Shapes

**Border radius:** `radius-sm: 100px` · `radius-md: 100%` · `radius-lg: 112px` · `radius-xl: 640px` · `radius-full: 800px`

### Elevation

- **shadow-sm:** `rgba(244, 247, 46, 0.4) 0px 1px 80px -24px inset, rgba(242, 245, 54, 0.7) 0px 40px 80px -64px inset, rgb(242, 245, 54) 0px 16px 8px -16px inset`

### Motion

- **duration-fast:** `all`
- **duration-fast:** `none`
- **duration-base:** `color 0.2s`
- **duration-base:** `0.2s`
- **duration-base:** `opacity 0.2s ease-in`
- **duration-base:** `transform 0.3s, opacity 0.2s`
- **duration-base:** `0.3s ease-out 0.4s both slideup`
- **duration-slow:** `box-shadow 0.35s`
- **duration-slow:** `0.4s ease-out both slideup`
- **duration-slow:** `box-shadow 0.5s`
- **duration-slow:** `0.7s cubic-bezier(0.17, 0.67, 0.2, 0.99) 0.1s both slideup`
- **duration-slow:** `0.7s cubic-bezier(0.17, 0.67, 0.2, 0.99) 0.18s both slideup`
- **duration-slow:** `1.2s cubic-bezier(0, 0, 0.26, 1) 0.05s both slideup`
- **duration-slow:** `1.5s ease-out both slideup`
- **duration-slow:** `3s cubic-bezier(0, 0, 0.05, 0.99) 0.4s both slideup`

## Component Inventory

- **Buttons:** 18 detected
- **Links:** 125 detected
- **Inputs:** 3 detected
- **Navigation:** 11 elements
- **Forms:** 1 detected
- **Images:** 146 detected

## Constraints

### Always

- Use tokens from the tables above — do not introduce new values.
- Include hover, focus-visible, and disabled states for interactive elements.
- Follow the 8px spacing grid.
- Meet WCAG 2.2 AA contrast minimums.

### Never

- Do not introduce colors outside the extracted palette.
- Do not use arbitrary spacing values — stick to the scale.
- Do not mix border-radius values. Pin to the detected set (100px, 100%, 112px, 640px, 800px).
- Do not use full-uppercase text for body or paragraph content.
- Do not nest interactive elements (e.g. buttons inside links).
- Do not ship components without defining hover, focus-visible, and disabled states.

## Tone

Concise, confident, implementation-focused. Avoid filler preambles.

## Authoring Workflow

When creating or documenting a component for this system:

1. State intent — one sentence on purpose.
2. Map tokens — list every token the component uses.
3. Define anatomy — named parts with token assignments.
4. Specify states — default, hover, focus-visible, active, disabled, loading, error, empty.
5. Describe interactions — keyboard, pointer, touch, edge cases.
6. Add a11y criteria — testable pass/fail checks.
7. List anti-patterns — concrete misuse examples.
8. Close with the Definition of Done checklist.

## Output Structure

Component guidelines must contain, in order:

1. Overview (purpose, when to use, when not to use)
2. Tokens and foundations
3. Anatomy, variants, responsive behavior
4. States and interactions
5. Accessibility (ARIA, contrast, focus, screen reader)
6. Content guidelines (copy rules, tone)
7. Anti-patterns with reasoning

## Component Requirements

- Reference only tokens from the tables above.
- Define all states: default, hover, focus-visible, active, disabled, loading, error.
- Handle edge cases: empty, overflow, truncation, max content.
- Include keyboard navigation behavior.
- Document ARIA roles and labels.

## Definition of Done

- Default state renders (smoke test).
- All states visually verified.
- Zero hardcoded visual values — tokens only.
- Keyboard navigation works without pointer.
- No critical a11y violations.
- Tested at min and max breakpoint.
- At least one anti-pattern documented.
- Purpose, usage, and limitations documented.
