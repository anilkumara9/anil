# Observe.AI | Purpose-Built AI Agents. One CX Platform.

## Overview

**Product:** Observe.AI | Purpose-Built AI Agents. One CX Platform.
**URL:** https://www.observe.ai/
**Surface type:** marketing
**Audience:** Developers and technical decision-makers
**Brand character:** Conversion-focused marketing presence with a rich, diverse color palette and 3 typefaces.

### Design Principles

- Consistency over novelty — reuse existing patterns before inventing new ones.
- Token-driven — every visual decision references a token, not a magic number.
- Accessible by default — compliance is a baseline, not a feature.

## Colors

| Token | Value | Role |
|-------|-------|------|
| --color | `#FC535B` | Accent |
| color-6 | `#EDEDED` | Surface |
| color-1 | `#000000` | Text Primary |
| color-4 | `#E6E6E6` | Border |
| color-3 | `#B2B2B4` | Text Light |
| color-5 | `#F2F536` | Text Light |
| color-7 | `#FFFFFF` | Text Light |

## Typography

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

## Spacing

**Base unit:** 8px

`space-1: 3px` · `space-2: 6px` · `space-3: 8px` · `space-4: 10px` · `space-5: 12px` · `space-6: 16px` · `space-7: 32px` · `space-8: 40px` · `space-9: 64px` · `space-10: 80px` · `space-11: 96px` · `space-12: 101px` · `space-13: 176px` · `space-14: 182px` · `space-15: 400px`

## Shapes

**Border radius:** `radius-sm: 100px` · `radius-md: 100%` · `radius-lg: 112px` · `radius-xl: 640px` · `radius-full: 800px`

## Elevation

- **shadow-sm:** `rgba(244, 247, 46, 0.4) 0px 1px 80px -24px inset, rgba(242, 245, 54, 0.7) 0px 40px 80px -64px inset, rgb(242, 245, 54) 0px 16px 8px -16px inset`

## Motion

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

## Components

- **Buttons:** 18 detected
- **Links:** 125 detected
- **Inputs:** 3 detected
- **Navigation:** 11 elements
- **Forms:** 1 detected
- **Images:** 146 detected

## Do's and Don'ts

### Do

- Reference tokens by name, not raw values — agents and developers should use `color.text.primary`, not `#171717`.
- Define all interactive states: default, hover, focus-visible, active, disabled.
- Use the spacing scale for all padding, margin, and gap values.
- Write content in sentence case. Reserve ALL CAPS for acronyms only.
- Test every component at the smallest and largest breakpoint before shipping.

### Don't

- Do not introduce colors outside the extracted palette.
- Do not use arbitrary spacing values — stick to the scale.
- Do not mix border-radius values. Pin to the detected set (100px, 100%, 112px, 640px, 800px).
- Do not use full-uppercase text for body or paragraph content.
- Do not nest interactive elements (e.g. buttons inside links).
- Do not ship components without defining hover, focus-visible, and disabled states.

## Writing Tone

Concise, confident, implementation-focused. Avoid filler preambles.

## Authoring Workflow

When creating or updating a component guideline for this system, follow this sequence:

1. **State the intent** — one sentence on what the component does and why it exists.
2. **Map tokens** — list every color, spacing, typography, and radius token the component uses. No raw values.
3. **Define anatomy** — break the component into named parts (container, label, icon, etc.) with their token assignments.
4. **Specify states** — document every state: default, hover, focus-visible, active, disabled, loading, error, empty.
5. **Describe interactions** — keyboard, pointer, and touch behavior, including edge cases (long content, overflow, truncation).
6. **Add accessibility criteria** — write testable pass/fail checks (e.g. "focus ring must be visible at 3:1 contrast").
7. **List anti-patterns** — concrete examples of misuse with a brief explanation of why each is wrong.
8. **Close with a QA checklist** — a mechanical list of verifiable items (see Definition of Done below).

## Required Output Structure

Every component guideline produced from this system must contain these sections, in order:

1. Overview — purpose, when to use, when not to use.
2. Tokens and foundations — all referenced tokens from the tables above.
3. Anatomy and variants — named parts, variant matrix, responsive behavior.
4. States and interactions — full state table, keyboard/pointer/touch behavior.
5. Accessibility — ARIA attributes, contrast requirements, focus management, screen reader behavior.
6. Content guidelines — copy length, tone, capitalisation, placeholder text rules.
7. Anti-patterns — explicit examples of what not to build, with reasoning.

## Component Requirements

Every component built against this system must:

- Reference only tokens defined in the tables above — no hardcoded hex, px, or font values.
- Define all interactive states: default, hover, focus-visible, active, disabled, loading, error.
- Specify responsive behavior at the smallest and largest supported breakpoint.
- Handle edge cases: empty state, overflow / truncation, maximum content length.
- Include keyboard navigation (Tab, Enter, Escape, Arrow keys where applicable).
- Document ARIA roles, labels, and live-region behavior where relevant.
- Include known page component density: - **Buttons:** 18 detected
- **Links:** 125 detected
- **Inputs:** 3 detected
- **Navigation:** 11 elements
- **Forms:** 1 detected
- **Images:** 146 detected

## Definition of Done

A component is not complete until every item below is checked:

- Renders correctly in its default state (smoke test).
- All states documented and visually verified (hover, focus, disabled, loading, error, empty).
- All visual values use design tokens — zero hardcoded values.
- Keyboard navigation works without a pointer.
- No critical accessibility violations (contrast, ARIA, focus order).
- Tested at smallest and largest breakpoint.
- Anti-patterns section lists at least one concrete misuse example.
- Documentation covers purpose, usage, props/API, and limitations.
