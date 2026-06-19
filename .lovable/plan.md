## Ziel
Die Erste-Hilfe-Kurs-Seite soll das Bild nicht mehr als riesiges Hero-Element nutzen, sondern dezent rechts neben den Informationen platzieren. Zusätzlich wird ein hochwertigeres KI-generiertes Bild erstellt.

## Änderungen

### 1. Neues KI-Bild generieren
- Prompt fokussiert auf: professioneller Erste-Hilfe-Kurs, rotes Kreuz, saubere minimalistische Ästhetik passend zum MIRO-DRIVE Design (Schwarz/Weiß/Rot)
- Format: 3:4 oder 4:3 (portrait/compact), nicht 16:9, damit es als Seitenbild funktioniert
- Speichern als `src/assets/erste-hilfe-hero-v2.jpg`

### 2. Layout-Umbau in `src/routes/erste-hilfe-kurs.tsx`
- Das bestehende 16:9-Vollbreiten-Bild (Zeile 49–51) wird entfernt
- Die 2-Spalten-Sektion (Zeile 52–90) wird erweitert zu einer 3-Spalten- oder breiteren 2-Spalten-Anordnung:
  - Linke Seite: "Was du bekommst" + "Anmeldung & Infos" gestapelt
  - Rechte Seite: Das neue Bild als kompaktes Seitenbild, z.B. `max-w-sm` oder `max-w-md`, mit `rounded-2xl` und `object-cover`
- Das Bild nimmt maximal ~40 % der Breite ein und ist auf gleicher Höhe wie die Info-Boxen

### 3. Keine Änderungen an
- PageHero (bleibt oben)
- Datenbank / first_aid_info
- Standorte-Sektion
- Kontakt-Buttons, Texte, Navigation

## Ergebnis
Die Seite wirkt aufgeräumter. Das Bild unterstützt statt zu dominieren. Das neue KI-Bild passt optisch besser zur Markenidentität.