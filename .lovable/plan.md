## Plan

### 1. Navbar – Logo zentrieren
In `src/components/site/Navbar.tsx` das Layout anpassen:
- Derzeit: `justify-between` mit Logo links, Nav rechts.
- Ziel: Logo in die Mitte des Headers.
- Umsetzung: Header-Inhalt in 3 Spalten aufteilen (leer / Logo / Hamburger + Desktop-Nav). Logo mit `mx-auto` oder `justify-center` zentrieren. Desktop-Navigation bleibt rechts, Mobile-Menü-Button bleibt rechts.

### 2. Logo-Click smooth-scroll auf Startseite
In `src/routes/index.tsx`:
- Das Logo im Hero-Bereich (Logo-Panel) mit einem `onClick` versehen.
- Bei Klick: `window.scrollTo({ top: 0, behavior: 'smooth' })` ausführen.
- Cursor auf `cursor-pointer` setzen, damit es klickbar wirkt.

### 3. Mobile Menü fullscreen
In `src/components/site/Navbar.tsx`:
- Das mobile Dropdown (`open && ...`) von einem kleinen Dropdown zu einem **Fullscreen-Overlay** umbauen.
- Overlay deckt die gesamte Viewport-Höhe ab (`fixed inset-0 z-50 bg-white flex flex-col items-center justify-center`).
- Menü-Links zentriert und größer darstellen.
- Schließen-Button (X) oben rechts fixieren.
- `overflow-hidden` auf `<body>` toggeln, damit man nicht im Hintergrund scrollen kann.