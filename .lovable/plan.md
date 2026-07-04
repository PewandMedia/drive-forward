## Was auf deinem Screenshot auffällt

Auf dem hochgeladenen Screenshot ist noch die alte kaputte Team-Version sichtbar:

- Es steht noch „KLICK FÜR MEHR“ unter den Karten.
- Eine rote Rückseite/Flip-Karte hängt mitten über den anderen Karten.
- Genau diese alte 3D-Flip-Technik wurde im aktuellen Code bereits entfernt.

Das bedeutet: Die Laptop-/Desktop-Ansicht auf deiner Server-Domain lädt sehr wahrscheinlich noch einen alten Build oder gemischte gecachte Dateien. Mobile kann trotzdem normal aussehen, weil dort andere Assets/Chunks oder ein anderer Cache-Zustand geladen werden.

## Lösungsvorschlag

1. **Team-Seite noch härter absichern**
   - Die Team-Seite bleibt ohne Flip-/3D-Logik.
   - Zusätzlich mache ich das Desktop-Layout noch robuster: klare Section-Abstände, `overflow-visible/hidden` gezielt setzen, stabile Card-Höhen und ein weniger aggressives Desktop-Grid.
   - Ziel: Auch bei Laptop-Breiten wie 999–1200px kann nichts mehr in den Footer laufen.

2. **Alte Flip-Spuren komplett entfernen**
   - Prüfen, ob irgendwo noch alte Flip-Klassen, Texte wie „KLICK FÜR MEHR“, `rotate-y`, `backface`, `preserve-3d` oder `absolute inset-0` für Team-Karten übrig sind.
   - Falls ja: vollständig entfernen.

3. **Desktop gezielt testen**
   - Test mit Laptop-/Desktop-Breite ähnlich deinem Screenshot.
   - Prüfen:
     - keine Karte überlappt andere Karten,
     - keine Karte überlappt den Footer,
     - „KLICK FÜR MEHR“ ist komplett weg,
     - Bürokräfte starten erst nach den Fahrlehrer-Karten.

4. **Server-Deployment-Anweisung ergänzen**
   - Nach dem Code-Fix muss auf deinem Debian-Server wirklich ein frischer Build laufen.
   - Danach Browser-Cache hart löschen, weil dein Screenshot klar nach altem Code aussieht.

## Befehle für deinen Debian-Server nach dem Fix

```bash
cd /pfad/zu/deinem/projekt
git pull
rm -rf .output dist node_modules/.vite
npm install
npm run build
pm2 restart all
```

Wenn du nicht PM2 nutzt, statt `pm2 restart all` deinen systemd-Service neu starten.

Danach im Browser auf Laptop:

```text
Cmd + Shift + R auf Mac
oder
Strg + F5 auf Windows/Linux
```

## Erwartetes Ergebnis

Die Team-Seite zeigt auf Laptop/Desktop nur noch normale saubere Karten. Keine roten Flip-Rückseiten, kein „KLICK FÜR MEHR“, keine Überlappung mit dem Footer.