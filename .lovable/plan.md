## Ziel
Mobile Preise-Karten (`/preise`) neu strukturieren: keine Überlappung von Text und Preis, wichtige Infos sichtbar, Icons deutlich aufgewertet — Desktop bleibt wie er ist.

## Änderungen in `src/routes/preise.tsx`

### 1. Layout der Preiszeilen (Overlap-Fix)
Von horizontalem `flex justify-between` auf **vertikalen Stack** auf Mobile umstellen:
- Titel oben, volle Breite, 2 Zeilen erlaubt (`line-clamp-2`, kein `truncate`)
- Preis darunter als eigener Chip, rechtsbündig
- `gap-1`, `py-2`, klare Trennlinien
- Ab `sm:` zurück auf die bestehende Zweispalten-Zeile

### 2. Wichtige Infos wieder einblenden (Mobile)
Aktuell komplett versteckt — jetzt kompakt zeigen:
- **Tagline** der Klasse: 2-zeilig unter dem Titel (`text-[10px] text-white/75`)
- **Info-Box** (Sonderfahrten, Theorie, Voraussetzungen): als 3 winzige Stat-Pills nebeneinander unter dem Header (`grid-cols-3`, nur Zahl + 1-Wort-Label, z.B. „12 Sonder" / „14 Theorie" / „17+ Alter")
- **Angebots-Badge** und **durchgestrichener Alt-Preis**: klein aber sichtbar (nicht mehr `hidden`)
- Item-Beschreibungen bleiben versteckt (zu lang), aber Angebots-Label wird angezeigt

### 3. Icons aufwerten (Desktop + Mobile)
Aktuell nur ein Lucide-Icon in einem grauen Kasten. Neu:
- Icon-Container: **Gradient-Ring** (Primary → Weiß-Glow), inner `bg-white/15 backdrop-blur`
- **Rotierender/pulsierender Glow** hinter dem Icon (radial-gradient, `animate-pulse` oder custom `@keyframes`)
- Icon selbst: `drop-shadow` + leichte Größensteigerung
- Auf `featured`-Karte: goldener Akzent-Ring statt weiß
- Mobile: `h-10 w-10` (statt 8) mit demselben Premium-Look

### 4. CTA-Bereich Mobile
- „Anfragen" Button bleibt, aber mit sichtbarem WhatsApp-Icon und `font-black`
- Kleine „Details"-Link darunter statt komplett versteckt

## Technisch
- Nur `src/routes/preise.tsx`
- Neue Keyframe-Animation für Icon-Glow evtl. in `src/styles.css` (`@keyframes icon-glow`)
- Kein Business-Logic-Change
