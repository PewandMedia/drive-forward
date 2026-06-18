Datenbank-Update: Preisliste auf echte MIRO-DRIVE Preise setzen

## Was truncated summary
Die Preistabelle `prices` wird von Platzhalterdaten auf die tatsächlichen Preise aktualisiert, die vom Betreiber genannt wurden.

## Änderungen

### Schritt 1: Alte Preise entfernen
Alle bestehenden Einträge in der Tabelle `prices` werden gelöscht, damit keine veralteten Platzhalterpreise mehr angezeigt werden.

### Schritt 2: Neue Preise einfügen
Folgende Positionen werden als aktive Einträge neu angelegt:

| Titel | Preis | Kategorie | Beschreibung |
|-------|-------|-----------|-------------|
| Grundbetrag | 299 € | Klasse B | Einmaliger Grundbetrag für die Anmeldung |
| Lernprogramm | 80 € | Klasse B | Digitales Lernprogramm |
| Übungsstunde | 65 € | Klasse B | Reguläre Fahrstunde (45 Min.) |
| Sonderfahrten | 65 € | Klasse B | Autobahn, Überland, Nacht (45 Min.) |
| Vorstellung Theorieprüfung | 85 € | Klasse B | Gebühr für Vorstellung zur Theorieprüfung |
| Vorstellung Praxisprüfung | 240 € | Klasse B | Gebühr für Vorstellung zur Praxisprüfung |
| Externe TÜV-Gebühren Theorieprüfung | 24,99 € | TÜV Gebühren | Externe Gebühren für die Theorieprüfung |
| Externe TÜV-Gebühren Praxisprüfung | 129,83 € | TÜV Gebühren | Externe Gebühren für die Praxisprüfung |

Die Preise werden nach Kategorie gruppiert (Klasse B, TÜV Gebühren) und mit aufsteigender Sortierung angelegt, damit sie auf der Preis-Seite übersichtlich dargestellt werden.

### Schritt 3: Verifikation
Nach dem Einspielen wird geprüft, ob alle 8 Einträge korrekt in der Datenbank vorhanden sind und die Preis-Seite sie korrekt rendert.