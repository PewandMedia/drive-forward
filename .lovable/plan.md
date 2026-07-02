## Footer-Logo ohne weißen Kasten

**Problem:** Das MIRO-DRIVE Logo im Footer liegt aktuell in einem weißen Kasten (`bg-white`), was auf dem dunklen Footer-Hintergrund (#0a0a0a) optisch störend ist. Das Logo selbst ist dunkel und wäre ohne den Kasten nicht sichtbar.

**Lösung:**
1. In `src/components/site/Footer.tsx` den weißen Hintergrund-Container (`rounded-lg bg-white p-3`) um das Logo entfernen.
2. Auf das Logo-Bild einen CSS-Filter anwenden (`brightness-0 invert`), der das gesamte Logo in reines Weiß verwandelt. So liegt es direkt auf dem dunklen Footer-Hintergrund und bleibt trotzdem perfekt lesbar.
3. Keine neue Asset-Datei nötig – die bestehende SVG-Version wird wiederverwendet.

**Technische Details:**
- `filter: brightness(0) invert(1)` macht alle Farbanteile des SVGs zunächst schwarz und invertiert sie anschließend zu Weiß. Transparente Bereiche bleiben erhalten.
- Tailwind-Klassen: `brightness-0 invert` auf dem `<img>`-Tag.