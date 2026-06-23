## Hero: Bild & Text nebeneinander (auch mobil) + größeres Bild

Anpassungen in `src/routes/index.tsx` im HERO-Block:

1. **Grid auf allen Breakpoints zweispaltig**
   - Aktuell: `grid` mit `lg:grid-cols-[1.05fr_1.25fr]` → mobil einspaltig.
   - Neu: `grid-cols-[1.1fr_1fr]` schon ab Mobile, `gap-4 sm:gap-8 lg:gap-12`, `px-3 sm:px-6 lg:px-8`, `py-10 sm:py-16 lg:py-24`.

2. **Text-Spalte mobilfreundlich verkleinern** (damit beide Spalten Platz haben)
   - `h1`: `text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl`, `leading-[1.05]`.
   - Badge, Paragraph, Buttons: kleinere Mobile-Größen (`text-[10px] sm:text-xs`, `text-sm sm:text-base`, Button-Padding `px-4 py-2.5 sm:px-6 sm:py-3.5`, `text-xs sm:text-sm`, `flex-col sm:flex-row` für Buttons, damit sie nicht zu viel Breite ziehen).
   - Google-Bewertungs-Zeile bleibt, kleinere Schrift mobil.

3. **Bild-Spalte: größer & nebeneinander**
   - Wrapper: `-mr-4 sm:-mr-6 lg:-mr-12 xl:-mr-24` (Bild läuft am rechten Rand raus, wirkt größer).
   - `<img>`: `w-full scale-110 sm:scale-100` für mehr Mobile-Präsenz, `object-contain`.
   - Glow/Streifen-Deko: auch mobil sichtbar machen (block statt hidden) für den Bild-Akzent.

4. **Min-Heights anpassen**
   - `min-h-[480px] sm:min-h-[600px] lg:min-h-[720px]` damit es mobil nicht überdimensioniert wird.

Keine Änderungen an Logik, Daten, weiteren Sections oder anderen Routen.