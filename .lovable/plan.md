## Ziel
Unter den Google-Bewertungen auf der Startseite einen Instagram-Feed von @miro_drive einbauen, der die letzten Beiträge (vor allem „Führerschein bestanden"-Posts) zeigt, scrollbar ist und beim Klick zum jeweiligen Beitrag bzw. Profil führt – als Credibility-Booster.

## Aktueller Stand
- Tabelle `instagram_posts` existiert bereits (image_url, caption, post_url, sort_order, active).
- Komponente `src/components/site/InstagramSection.tsx` zeigt aktuell ein 3-Spalten-Grid mit max. 6 Posts und ist bereits unter den Reviews eingebunden.
- Admin-Tab „Instagram" existiert zum Pflegen der Beiträge.
- Aktuell sind keine Beiträge in der DB → Section rendert nichts.

## Neuer Ansatz
Da Instagram direktes Scraping blockiert und du keine Wahl getroffen hast, gehe ich mit der robustesten Lösung ohne laufende Kosten und ohne API-Setup:

**Quelle:** weiterhin eigene Uploads über den Admin-Bereich. Beim ersten Hochladen siehst du den Feed sofort live.
**Layout:** horizontal scrollbares Karussell (mobil wischen, Desktop seitlich scrollen + Pfeil-Buttons), zeigt ALLE aktiven Beiträge statt nur 6. Das passt am besten zu „runter/seitlich scrollen um mehr zu sehen" und wirkt wie ein echter Instagram-Streifen.

## Umsetzung
- `src/components/site/InstagramSection.tsx` umbauen:
  - Limit `.limit(6)` entfernen → alle aktiven Posts laden, nach `sort_order`.
  - Grid ersetzen durch horizontal scrollbaren Track (`flex overflow-x-auto snap-x snap-mandatory`), Karten mit fixer Breite (~240px mobil, ~280px Desktop), `aspect-square`.
  - Scrollbar dezent stylen, Snap-Verhalten für sauberes Wischen.
  - Desktop: dezente Pfeil-Buttons links/rechts (scrollBy ±320px), nur sichtbar wenn überlauf.
  - Hover/Tap-Overlay mit Instagram-Gradient + Caption + „Beitrag öffnen" wie bisher.
  - Jede Karte verlinkt auf `post_url`, externer Tab.
  - Header bleibt: „Frisch bestanden – unsere Fahrschüler bei Instagram", CTA-Button „@miro_drive folgen".
  - Fallback wenn keine Posts in DB: dezenter Hinweis-Block mit großem „Auf Instagram ansehen"-Button (statt komplett nichts zu rendern), damit die Sektion auch vor dem ersten Upload Wirkung hat.
- `src/routes/index.tsx`: keine Änderung nötig (Section ist bereits eingebunden).
- Keine DB-, keine Auth-, keine Routing-Änderungen.

## Offene Punkte
- Wenn du doch automatische Synchronisation willst (Elfsight-Widget kostenpflichtig, oder Graph API mit Facebook-Business-Konto), sag Bescheid – dann erweitere ich entsprechend.
- Erste Beiträge musst du einmalig im Admin-Bereich hochladen (Screenshot + Instagram-Link je Post). Soll ich dir dabei direkt 5–10 Platzhalter mit Beispieltexten einfügen, damit du nur Bilder austauschen musst?