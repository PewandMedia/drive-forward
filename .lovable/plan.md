## Erste-Hilfe-Kurs Seite – Texte & Bild aktualisieren

**Datenbank-Update** (`first_aid_info`)
- Preis: `50 €` (bleibt)
- Dauer: `8:00–16:00 Uhr` (ersetzt „9 Unterrichtseinheiten")
- Termine: `Jeden Monat in der Fahrschule` (ersetzt „laufend nach Verfügbarkeit")
- Beschreibung: „Dein Erste-Hilfe-Kurs für den Führerschein – 8 Stunden an einem Tag, kompakt und verständlich. Bereit? Melde dich einfach bei uns."

**Frontend-Texte** (`src/routes/erste-hilfe-kurs.tsx`)
- PageHero subtitle: „Mach deinen Erste-Hilfe-Kurs direkt bei MIRO-DRIVE – 8 Stunden an einem Tag, jeden Monat in der Fahrschule."
- Hinweistext über Kursinfo: „Der Kurs läuft von 8:00 bis 16:00 Uhr. Sichere dir deinen Platz – schnell und unkompliziert per WhatsApp oder Anruf."

**Neues KI-Bild**
- `imagegen--generate_image` (premium, 1024×576) → `src/assets/erste-hilfe-hero.jpg`
- Prompt: Cinematic close-up eines weißen Erste-Hilfe-Koffers mit großem rotem Kreuz auf anthrazit-grauem Hintergrund, weiches Studiolicht, fein körnig, MIRO-DRIVE Signalrot Akzent, 16:9, fotorealistisch, edel/minimalistisch
- Einbindung: über dem „Was du bekommst"-Bereich als 16:9 Bild mit `rounded-2xl overflow-hidden`

**Unverändert**: Layout, Buttons, Standorte, Routing, Design-Tokens.
