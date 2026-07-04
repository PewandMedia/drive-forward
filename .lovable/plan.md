## Plan

1. **Vite-Konfiguration prüfen**
   - Sicherstellen, dass `vite.config.ts` den Host `mirodrive.pewandmedia.de` in `server.allowedHosts` enthält.

2. **Host-Freigabe korrigieren**
   - Falls nötig, `server.allowedHosts` so setzen, dass diese Domains erlaubt sind:
     - `mirodrive.pewandmedia.de`
     - `.pewandmedia.de`
     - `.lovable.app`

3. **Preview neu laden**
   - Danach den Dev-Server neu starten bzw. Preview aktualisieren, damit die Änderung aktiv wird.

## Technische Details

Die Fehlermeldung kommt nicht von der Webseite selbst, sondern vom lokalen Vite-Server. Er blockiert Requests, deren Hostname nicht ausdrücklich erlaubt ist. Die Lösung ist eine Ergänzung in `vite.config.ts` unter `vite.server.allowedHosts`.