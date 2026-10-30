# Online Instruments Home Page v3 — Engineering Notes

## Design System Tokens (Strict 60 / 30 / 10)
- `--ink`: `#071A1A` (Dark sections, all text on light and on teal)
- `--teal`: `#00A99D` (Vivid brand teal for full-bleed sections)
- `--white`: `#FFFFFF` (Light sections)
- `--coral`: `#FF5A36` (Buttons and single highlights only)
- `--ink-70`: `rgba(7, 26, 26, 0.7)`
- `--white-70`: `rgba(255, 255, 255, 0.7)`

## Strict Rules Enforced
1. Text on teal is ALWAYS ink (`#071A1A`), never white.
2. Text on coral is ALWAYS ink (`#071A1A`).
3. No gradients, glows, or drop shadows; flat color only.
4. Hard alternating sections: Teal (Hero) → Ink (Scale) → White (Services) → Teal (Spaces) → Ink (Projects) → White (Racks) → Ink (Where We Work) → White (Brands) → Teal (Contact) → Ink (Footer).
5. Bebas Neue for headlines and big figures (>= 40px); DM Sans for everything else.
6. Square corners everywhere (`rounded-none`); border radius is `0` everywhere except buttons (`rounded-full`).

- Hero Meeting Room Photo: Replaced corner-bleed corridor picture with an architecturally striking executive boardroom card featuring rounded corners (`rounded-3xl`), glassmorphic status badge, and calibrated room specification details.
- Space Types Collage: 6 distinct space archetypes (Meeting rooms, Command centres, Training rooms, Auditoriums, Customer experience centres, Digital signage).
- Rack Staging Photo: Clean commercial AV pre-assembly and staging photo in Bengaluru facility.
- Logos Registry: Authentic SVG wordmarks and marks for 8 Hero clients, enterprise ledger clients, hardware partners, distributors, and certified organizations.
- In-Progress Certifications: ISO 27001, 45001, 14001 are flagged as in-progress and omitted from achieved credentials display per specification.
