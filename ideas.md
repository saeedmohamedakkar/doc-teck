# DocTeck — Design Direction

## Three possible approaches

### 1. Obsidian Clinic Ledger
**Very Brief Intro:** A calm, concierge-like clinical workspace built from near-black panels, confident serif accents, and selective champagne-gold indicators. The experience feels precise and discrete rather than decorative.

**Probability:** 0.06

### 2. Midnight Gallery
**Very Brief Intro:** A contemporary medical control room with art-gallery negative space, charcoal surfaces, and editorial typography. Information is staged like curated objects in a dark exhibition.

**Probability:** 0.03

### 3. Darkroom Command Center
**Very Brief Intro:** A high-contrast operational interface that treats appointments and availability as a live schedule system, with compact intelligence and purposeful gold signals.

**Probability:** 0.08

---

## Chosen approach: Obsidian Clinic Ledger

### Design Movement
**Quiet luxury editorial design** translated into a medical operations dashboard. The work should feel closer to a discreet private clinic’s concierge ledger than a conventional SaaS template.

### Core Principles
1. **Measured hierarchy:** Important clinical decisions use scale, warm highlights, and dedicated breathing room—not visual noise.
2. **Architectural restraint:** Dense administrative data is contained within framed surfaces, fine dividers, and disciplined spacing.
3. **Warm precision:** Deep black and graphite grounds are balanced by muted ivory text and carefully rationed antique gold.
4. **Human operational rhythm:** Schedules, faces, and patient context carry the flow; interaction feedback is calm and concise.

### Color Philosophy
The base is an almost-black **#0A0A0D**, chosen to create focus and discretion. Charcoal surfaces **#121214** and **#1E1E22** establish depth without relying on gradients. Antique gold **#D4AF37** appears only at moments of authority—selected navigation, primary action, and key metrics—while pearl **#F5E9C9** softens editorial labels and premium detail. Clinical reading remains comfortable through **#EDEDED** primary copy and **#A1A1AA** secondary metadata.

### Layout Paradigm
The product uses a **ledger-and-rail composition**: a narrow, branded navigation rail at left; a broad operational canvas; and contextual right-side detail panels or drawers when decision-making needs focus. Dashboard modules are intentionally offset with a weighted first column rather than a uniform card grid. On compact screens, the rail becomes a controlled drawer and summary information collapses into stacked, chronological modules.

### Signature Elements
1. **Ledger lines:** hairline gold or graphite rules that segment data like a well-kept appointment book.
2. **Halo metrics:** reserved circular progress and thin gold rings to signal priority, never loud charts.
3. **Monogram seal:** a geometric gold stethoscope-and-doorway mark, used large enough to function as a recognizable institutional emblem.

### Interaction Philosophy
Interactions should reward deliberate work. Buttons have firm, short press states; appointment rows open into focused detail panels; status edits use immediately understandable popovers; destructive actions require a calm confirmation layer. The gold accent confirms selection and action rather than calling attention to every control.

### Animation
Motion should be deliberate and quiet. Drawers and modals enter with a 220–280ms opacity-and-translate transition using `cubic-bezier(0.23, 1, 0.32, 1)`. Lists can cascade in 40ms steps on page entry. Selected rows receive a subtle gold-line reveal, while cards lift no more than 2px on hover. No looping decorative animation or attention-seeking glow is used. All nonessential motion respects reduced-motion preferences.

### Typography System
**Cormorant Garamond** provides discerning editorial emphasis for brand moments, page titles, and featured time blocks; **Manrope** is the high-legibility operational sans for navigation, tables, forms, and body copy. Display headings use tight tracking and medium weight, while interface labels use small caps or restrained uppercase tracking. Numeric appointment times use tabular figures where possible.

### Brand Essence
**DocTeck is the discreet command desk for private clinics that need scheduling control without operational clutter.**

**Personality:** Discreet, Precise, Assured.

### Brand Voice
Headlines are confident and concise; CTAs are specific to the task; microcopy communicates operational certainty without generic filler.

Examples: “Your day, accounted for.” and “Confirm the time that works for care.”

### Wordmark & Logo
The wordmark pairs a high-contrast serif “Doc” with a clean, modern “Teck,” framed by a custom emblem: a pair of gold vertical arches that reference both an open clinical doorway and a stylized stethoscope. The logo is a bold, text-free geometric mark for app icon and sidebar use, supported by the bespoke wordmark in lockup contexts.

### Signature Brand Color
**Ledger Gold — #D4AF37.** This restrained antique gold is DocTeck’s ownable signal of control, care, and clinically precise action.

## Style Decisions

- Authentication and transition screens retain explicit operational context through refined appointment-ledger snippets, timing metadata, and confirmation signals.
- Ledger Gold acts chiefly as an authority mark: it is reserved for primary actions, selected states, fine rules, seals, and key operational numerals rather than broad decoration.
- Supporting imagery is always framed by clearly clinical scheduling, availability, or patient-care context so the atmosphere remains concierge medicine rather than hospitality.
