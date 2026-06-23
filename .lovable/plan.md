## Ziel
Unter dem Google-Bewertungsbereich auf der Startseite einen Instagram-Bereich einbauen, der die neuesten Beiträge von [@miro_drive](https://www.instagram.com/miro_drive/) zeigt (typischerweise die Posts der frisch bestandenen Führerscheine). Jeder Beitrag ist klickbar und führt zum Instagram-Profil/Post.

## Lösungsweg

Instagram erlaubt keinen direkten öffentlichen Feed-Abruf ohne API-Token. Für eine wartungsarme Lösung schlage ich vor:

**Variante A (empfohlen): Manuell gepflegte Galerie**
- Neue Komponente `InstagramSection.tsx` unter Reviews
- Zeigt 6 Beitragskacheln (Bild + Caption-Snippet) in einem Grid
- Beiträge kommen aus einer neuen Tabelle `instagram_posts` (image_url, caption, post_url, sort_order) — so kannst du sie im Admin-Bereich pflegen, ohne Code anzufassen
- Jede Kachel ist ein Link zum jeweiligen Instagram-Post (oder zum Profil als Fallback)
- Ein großer "Auf Instagram folgen"-Button unter dem Grid → `https://www.instagram.com/miro_drive/`
- Hover-Effekt mit Instagram-Gradient-Overlay

**Variante B: Drittanbieter-Widget (z. B. EmbedSocial, SnapWidget, Elfsight)**
- Automatischer Sync mit dem echten Instagram-Account
- Benötigt aber meist einen kostenpflichtigen Account beim Anbieter und ein Embed-Script
- Du müsstest dich dort anmelden und mir den Embed-Code geben

**Variante C: Instagram Graph API**
- Echter Live-Feed, aber benötigt Facebook Business Account, App-Setup, Access Token mit Refresh-Logik (Server-Function + Cron). Aufwendig.

## Empfehlung
Variante A: schnell, kostenlos, du hast volle Kontrolle, passt zum bestehenden Design (rote Marken-Akzente, abgerundete Karten wie bei den Reviews).

## Frage an dich
Welche Variante möchtest du? Und falls A: soll ich die ersten 6 aktuellen Posts von @miro_drive einmalig per Screenshot/Download holen und als Startbestand einpflegen, oder lieber leer beginnen und du fügst sie selbst über den Admin-Bereich hinzu?
