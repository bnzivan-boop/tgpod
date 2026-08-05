# Media slots

All renders below were recovered from the approved `TGPodEN.html` and are wired up already.
Replace any file with a higher-resolution version under the same name — no code changes needed.
If a file is deleted, the site renders a labelled placeholder instead of a broken image.

| id | file | used in | current size | recommended |
|---|---|---|---|---|
| hero-bg | `hero-bg.webp` | Hero background — moon scene with the pod | 5504×3072 (2× upscale + unsharp) | keep |
| hero-pod-cutout | `hero-pod-cutout.webp` | Hero — pod cutout layered over the wordmark; pixel-aligned with `hero-bg` | 5504×3072 RGBA | keep in sync with hero-bg |
| hero-pod | `hero-pod.jpg` | reserve (Red Bull co-brand render) | 1500×1674 | — |
| inside-work | `inside-work.webp` | Inside the pod — Work mode, Audience card 1 | ~1400×2000 | keep |
| inside-play | `inside-play.webp` | Inside the pod — Play mode | ~1600×2000 | keep |
| pod-exterior | `pod-exterior.webp` | Specification (production prototype), Audience card 3 | ~960×1280 | 1200×1600 |
| pod-airport | `pod-airport.jpg` | Demand screen, Audience card 2 | 1200×1186 | transparent webp preferred |
| wl-retail | `wl-retail.webp` | White-label rail — Retail concept | ~1600×1600 | keep |
| wl-sports | `wl-sports.webp` | White-label rail — Sports concept | ~1600×1600 | keep |
| wl-marketplace | `wl-marketplace.webp` | White-label rail — Marketplace concept | ~1600×1600 | keep |
| wl-financial | `wl-financial.webp` | White-label rail — Financial concept | ~1600×1600 | keep |
| og-image | `og-image.jpg` | Open Graph preview | 1500×1674 | 1200×630 crop recommended |

Slots that currently have **no** dedicated asset (placeholder or substitute in use):

| id | purpose |
|---|---|
| hero-bg | atmospheric hero background — currently CSS gradients; a dark venue photo 1920×1080 would upgrade it |
