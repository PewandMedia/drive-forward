## Ziel
Die drei Preis-Teaser-Karten (Klasse B / B197 / B78) auf der Startseite sollen aufgewertet werden – mehr Kontrast, klarere Typografie, kräftigere Interaktion.

## Ausgangspunkt
Aktuell befindet sich die Sektion in `src/routes/index.tsx`, Zeilen 181–223. Die Karten sind gleichförmig weiß mit abgerundeten Ecken und wirken austauschbar.

## Umsetzung

### 1. Card-Redesign (Kinetic Editorial)
- **Layout**: 3 Spalten beibehalten (`md:grid-cols-3`)
- **Klasse B & B78** (nicht featured):
  - Weißer Hintergrund, scharfe / nur leicht abgerundete Ecken
  - 2px Rahmen in `border-black/5`, bei Hover auf `border-foreground` (schwarz)
  - Schatten nur bei Hover (`hover:shadow-xl`)
  - Icon-Chip: schwarzer Kreis (`bg-foreground`)
  - Titel: `font-display text-3xl uppercase tracking-tighter`
  - Tagline: uppercase, klein, `text-muted-foreground`
  - Highlights: größere rote Punkte (`bg-primary`), fettere Texte
  - Preis: „GRUNDBETRAG AB“ als sehr kleine Eyebrow, Preis in `text-4xl text-primary`
  - Arrow-Button: quadratisch, Rahmen `border-black/10`, bei Hover komplett rot gefüllt mit weißem Pfeil
- **Klasse B197** (featured):
  - Komplett schwarzer Hintergrund (`bg-foreground text-white`)
  - „BELIEBT“-Badge oben rechts in rot
  - Icon-Chip in rot (`bg-primary`)
  - Weiße Texte, rote Punkte, roter Preis
  - Arrow-Button: `bg-white/10`, bei Hover rot gefüllt
  - Leichte Skalierung (`scale-[1.03]`) und höherer Schatten (`shadow-2xl`) für Dominanz
  - Kein sichtbarer Rahmen

### 2. Sektions-Header anpassen
- Titel und Eyebrow beibehalten, aber mehr Abstand (`mb-12` statt `mb-10`)
- „Alle Preise ansehen“-Link beibehalten

### 3. Technische Details
- Keine neuen Abhängigkeiten
- Keine Änderung an Datenlogik (`PRICE_CLASSES`, `priceFor`, Supabase-Query)
- Tailwind-Klassen ausschließlich über existierende Design-Tokens (`primary`, `foreground`, `font-display`, `muted-foreground`, `border`)
- Keine hartkodierten Farben (z. B. kein `#e11d2a`)

## Dateien
- `src/routes/index.tsx` – nur der PREISE TEASER-Kartenbereich (ca. Zeilen 181–223)

## Nicht im Scope
- Keine Änderungen an `/preise` (die Detail-Preisseite bleibt wie bisher)
- Keine Änderungen an Animationen oder JavaScript-Logik
- Keine neuen Komponenten oder Assets