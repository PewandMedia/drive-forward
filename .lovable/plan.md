Auf der Leistungen-Seite (`/leistungen`) führen die einzelnen Service-Cards aktuell unterschiedliche rote Link-Texte wie "Anmelden", "Beratung anfragen", "Termine erfragen", "Stunde buchen" und "Kurs anfragen". 

Änderung:
- In `src/routes/leistungen.tsx` werden alle `cta`-Werte im `services`-Array auf **"Mehr erfahren"** gesetzt, sodass jeder rote Button einheitlich beschriftet ist.

Das ist die einzige Datei, die angepasst wird.