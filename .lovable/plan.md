## Ziel
Auf **Mobile** die 3 Preis-Karten wieder **nebeneinander** (`grid-cols-3`) — aber mit allen jetzt sichtbaren wichtigen Infos in einer sehr dichten, gut lesbaren Form. Desktop bleibt unverändert.

## Änderungen in `src/routes/preise.tsx`

### 1. Grid
- `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` → `grid-cols-3`
- `gap-4` → `gap-2 sm:gap-6`

### 2. Header pro Karte (Mobile kompakt)
- Icon oben zentriert (kleiner: `h-9 w-9`), Titel darunter, Tagline weg auf Mobile
- Badge als Punkt/Mini-Chip oben rechts der Karte (absolute), nicht in Header-Zeile
- „Führerschein"-Label weg auf Mobile

### 3. Info-Block (Mobile ultra-kompakt)
- Sonderfahrten-Grid: 3 Mini-Pills nur mit Zahl + Icon (kein Label auf Mobile)
- Theorie/Alter/Prüfung/Voraussetzungen: als 4 kleine Icon-Zeilen mit **verkürztem Text** (nur Werte, keine Labels wie „Theorie:") — `text-[9px]`
- `extraNote`: nur bei featured/B78 als winzige Zeile mit `line-clamp-2`

### 4. Preisliste
- Titel `text-[10px]`, Preis-Chip `text-[10px] px-1.5`, `py-1`
- Beschreibung + Alt-Preis versteckt auf Mobile (zu eng), Angebots-Badge als Punkt-Marker
- Auf Mobile Titel vertikal gestapelt, Preis rechts (Zeile bleibt eng)

### 5. CTA
- Nur WhatsApp-Icon-Button (rund, kompakt), „Filiale" versteckt auf Mobile
- Ab `sm:` beide Buttons mit Text

## Technisch
- Nur `src/routes/preise.tsx`
- Alle Desktop-Styles bleiben unverändert (nur die `sm:`-Breakpoints greifen ab 640px)
