## Ziel
Auf `/preise` sollen pro Klasse (B, B197, B78) die Ausbildungs-Details aus den PDFs sichtbar werden – Sonderfahrten, Theorie-Doppelstunden, Mindestalter, Voraussetzungen. So wird der Unterschied zwischen den Klassen klar, auch wenn die Preise gleich sind.

## Inhalte je Klasse (aus PDF + Standardwerte)

**Klasse B (Schalter)**
- Mindestalter: 18 J. (17 bei BF17)
- Sonderfahrten: 5 Überland · 4 Autobahn · 3 Dunkel
- Theorie: 12 Grundstoff + 2 Zusatzstoff (Doppelstunden à 90 Min.)
- Übungsstunden: nach Bedarf
- Voraussetzungen: Lichtbildausweis, Sehtest, Erste-Hilfe-Kurs
- Prüfung: Theorie + Praxis

**Klasse B197 (Automatik-Ausbildung, gilt für Schalter)**
- Wie Klasse B, zusätzlich: mind. 10 Schaltstunden + Test­fahrt beim Fahrlehrer (kein TÜV-Termin extra)
- Sonderfahrten: 5/4/3 · Theorie: 12+2

**Klasse B78 (reine Automatik)**
- Wie Klasse B, Führerschein gilt nur für Automatik
- Sonderfahrten: 5/4/3 · Theorie: 12+2

## Umsetzung
- In `src/routes/preise.tsx`: `CATEGORIES` um ein Feld `details` erweitern (Sonderfahrten, Theorie, Mindestalter, Voraussetzungen, Hinweis).
- Im Karten-Header bleibt alles wie es ist. Direkt unter dem Tagline-Bereich (vor der Preisliste) ein neuer kompakter Info-Block mit Icons:
  - Zeile 1: drei kleine Stat-Pills „5 Überland · 4 Autobahn · 3 Dunkel" (B197/B78: zusätzlich Hinweis-Badge)
  - Zeile 2: „Theorie: 12 + 2 Doppelstunden · Mindestalter 18 (17 BF17)"
  - Klappbarer Bereich „Voraussetzungen" mit Lichtbildausweis, Sehtest, Erste-Hilfe-Kurs
- Klasse B197 bekommt zusätzlich eine Zeile „+ 10 Schaltstunden inkl. interner Testfahrt".
- Klasse B78 bekommt Zeile „Führerschein nur für Automatik".
- Styling konsistent mit bestehender Karte: bei `featured` (B197) Text weiß/transparent, sonst dunkel auf weiß.
- Keine DB-Änderung, keine neuen Dateien – nur `src/routes/preise.tsx` anpassen.

## Offene Punkte
Wenn ok, baue ich es direkt so. Bei BE sehe ich aktuell keine Klasse in den Preisen – soll BE als vierte Karte ergänzt werden oder ist das aktuell nicht im Angebot?