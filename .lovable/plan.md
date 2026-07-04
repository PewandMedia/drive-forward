## Plan

1. **Header-Abfrage reparieren**
   - Die aktuelle Ursache steckt noch im Header: `Navbar` nutzt den browserseitigen Backend-Client für die kleine „Aktion“-Abfrage.
   - Diese Abfrage läuft beim Seitenwechsel mit und kann beim SSR/Reload den WebSocket-/Node.js-20-Fehler auslösen.

2. **Serverseitige, sichere Abfrage ergänzen**
   - In `src/lib/public-data.functions.ts` eine neue öffentliche Server-Funktion ergänzen, z. B. `hasActiveOffer`.
   - Sie prüft nur, ob es aktive Angebote gibt (`prices.active = true` und `offer_active = true`) und nutzt den bereits vorhandenen serverseitigen Public-Client ohne Realtime/WebSocket.

3. **Navbar umstellen**
   - `src/components/site/Navbar.tsx` entfernt den Import des browserseitigen Backend-Clients.
   - Der React-Query `queryFn` ruft stattdessen `hasActiveOffer()` auf.
   - UI und Design bleiben unverändert.

4. **Gegen weitere öffentliche Fehler absichern**
   - Prüfen, dass öffentliche Seiten (`/`, `/team`, `/preise`, `/erste-hilfe-kurs`, Header) keine browserseitigen Datenbankabfragen mehr beim SSR/Seitenwechsel verwenden.
   - Auth/Admin-Bereiche bleiben unverändert, weil sie clientseitig geschützt sind.

5. **Verifizieren**
   - Build/Typecheck laufen lassen.
   - Seitenwechsel über den Header und Reload auf Unterseiten testen, damit der Fehler nicht mehr erscheint.

## Ergebnis

Der Header soll auf allen öffentlichen Unterseiten sauber navigieren und reloaden, ohne „Node.js 20 detected without native WebSocket support“ oder „Inhalt konnte nicht geladen werden“.