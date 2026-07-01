## Plan: Preise-Seite – 3 Klassen nebeneinander auf Mobil

### Ziel
Die drei Führerschein-Klassen (B, B197, B78) auf der `/preise`-Seite bereits auf mobilen Viewports nebeneinander darstellen, um Scroll-Tiefe zu reduzieren und die Übersicht zu erhöhen – analog zur Startseite.

### Änderungen

**1. Grid-Breakpoint anpassen**
- `src/routes/preise.tsx`, Zeile ~121: Grid von `lg:grid-cols-3` auf `grid-cols-3` (ab mobil) umstellen.
- `gap` reduzieren für engeres Layout auf schmalen Screens.

**2. Karten-Inhalt komprimieren**
- Header-Bereich (Icon + Titel): Kleineres Padding und reduzierte Schriftgrößen auf mobil (`sm:`-Prefix entfernen oder verkleinern).
- Tagline: Auf mobilen Viewports ausblenden oder auf 1 Zeile begrenzen.
- Info-Box (Sonderfahrten + Theorie/Mindestalter/Prüfung/Voraussetzungen): Auf mobil ausblenden oder auf 3 Mini-Stat-Badges reduzieren.
- Preisliste (`items.map`): Nur Titel + Preis anzeigen, Beschreibung und Angebots-Badge auf mobil verstecken.
- CTAs (WhatsApp + Filiale): Buttons auf Icon-only oder einzeiligen kompakten Stil reduzieren.

**3. Featured-Karte (B197) beibehalten**
- Roter Header und "Am beliebtesten"-Badge bleiben erhalten.
- `lg:-translate-y-3 lg:scale-[1.02]` bleibt Desktop-only.

**4. TÜV-Gebühren & Bottom-CTAs**
- TÜV-Sektion (`sm:grid-cols-2`) und Bottom-Links bleiben unverändert.

### Ergebnis
- Mobile: 3 kompakte Spalten nebeneinander, essenzielle Infos sichtbar (Klasse, Basis-Preis, CTA), sekundäre Details ausgeblendet.
- Tablet/Desktop: Volle Darstellung wie bisher.