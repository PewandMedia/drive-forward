## Ziel
Die gesamte Seite soll eine einheitlich klassische, serifenbetonte Schrift erhalten — nicht nur die Headlines, sondern auch Fließtext, Navigation, Buttons und UI-Elemente.

## Aktueller Stand
- Headlines: `Playfair Display` (Serif)
- Body/UI: `Inter` (Sans-Serif)

## Geplante Änderungen

### 1. Google Fonts in `src/routes/__root.tsx`
- Entfernen: `Inter`
- Erweitern: `Playfair Display` um die Gewichte 400, 500, 600, 700, 800 (damit alle Schriftstufen von dünn bis fett abgedeckt sind)
- Ein einzelner Font-Request für `Playfair Display` reicht dann für die komplette Seite

### 2. Design-Tokens in `src/styles.css`
- `--font-sans` auf `"Playfair Display", Georgia, "Times New Roman", serif` setzen
- `--font-display` bleibt auf `Playfair Display` (keine Änderung nötig)
- Body-Font in `@layer base` auf `var(--font-sans)` belassen — dadurch wird automatisch die Serif überall angewendet
- Headline-Styles (h1, h2, h3, .font-display) bleiben erhalten

### 3. Visuelle Feinabstimmung (optional, falls nötig)
- Falls Buttons/Navigation mit Serif zu "buchstäblich" wirken, leichte Anpassung der `letter-spacing`-Werte oder `font-weight` prüfen

## Was sich NICHT ändert
- Farben, Layout, Spacing, Hero-Bild, Komponenten-Struktur
- Dark-Mode-Variablen