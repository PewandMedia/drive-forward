## Ziel
Das echte Miro Drive Logo (SVG, bereits als Asset vorhanden) als Favicon verwenden – nicht die AI-generierte Version.

## Schritte
1. Original SVG von der CDN-URL herunterladen (`miro-drive-logo.svg`).
2. Auf das Emblem/Symbol zuschneiden (ohne Text), damit es bei 16–32 px lesbar bleibt – via ImageMagick/rsvg zu einer 512×512 PNG rendern.
3. `public/favicon.png` mit dieser neuen Datei überschreiben.
4. Sicherstellen, dass `src/routes/__root.tsx` weiterhin auf `/favicon.png` verweist (keine Änderung nötig).
5. Preview neu laden und Favicon visuell prüfen.

## Hinweis
Falls das SVG das Logo inklusive Textzeile enthält, wird nur der Emblem-Bereich (Wappen) für das Favicon verwendet, damit es bei kleinen Größen erkennbar bleibt.