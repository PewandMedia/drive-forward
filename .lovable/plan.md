## Problem
Die Team-Bilder werden nicht angezeigt, weil die `image_url`-Werte in der Datenbank auf alte UUID-Pfade zeigen (z.B. `/images/team/23bb85eb-...`), aber die tatsächlichen Bilddateien in `public/images/team/` nach Vornamen benannt sind (z.B. `ilkay.jpg`, `azad.jpg`). → 404 für jedes Bild.

## Lösung
Eine Migration ausführen, die die `image_url`-Werte in `team_members` auf die korrekten Dateipfade aktualisiert:

| Name    | Neuer image_url                  |
|---------|----------------------------------|
| Ilkay   | /images/team/ilkay.jpg           |
| Azad    | /images/team/azad.jpg            |
| Lukman  | /images/team/lukman.jpg          |
| Alan    | /images/team/alan.jpg            |
| Burak   | /images/team/burak.jpg           |
| Renas   | /images/team/renas.jpg           |
| Bahar   | /images/team/bahar.jpg           |
| Rawshan | /images/team/rawshan.jpg         |
| Dilan   | /images/team/dilan.png           |
| Jiyan   | /images/team/jiyan.jpg           |
| Birtan  | /images/team/birtan.webp         |

Keine Code- oder Design-Änderungen — nur Datenkorrektur per SQL-Migration.