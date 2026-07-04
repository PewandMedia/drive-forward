## Vorgehen

Die hochgeladene Grafik (Wappen mit Auto & Lenkrad, rot dominant) ist nur 37×66 px, deshalb Rekonstruktion per KI-Bildgenerierung anstelle von Hochskalieren.

### Schritte

1. **Emblem in Höchstauflösung neu bauen**
   - `imagegen--generate_image` mit `model: "premium"`, 1920×1920, `transparent_background: true`.
   - Prompt: rotes Wappen/Schild mit stilisiertem Auto von vorne, Lenkrad im Zentrum, schwarze Konturen, saubere Vektor-Ästhetik, keinerlei Text, zentriert, transparent.
   - Hinweis: Der Bild-Generator ist auf 1920 px pro Kante gedeckelt — echte 4K (3840 px) sind über das Tool nicht möglich. Für Favicon/Web reicht 1920 px vollständig.
   - Ziel: `src/assets/miro-emblem.png` → dann als CDN-Asset via `lovable-assets create` (Pointer `miro-emblem.png.asset.json`).

2. **Favicon ersetzen**
   - Dieselbe Grafik nach `public/favicon.png` kopieren (überschreibt den aktuellen MD-Favicon).
   - `src/routes/__root.tsx` bleibt unverändert (`{ rel: "icon", type: "image/png", href: "/favicon.png" }` ist bereits gesetzt).

3. **Optional**: Wenn du das neue Emblem auch irgendwo in der Site einsetzen willst (z. B. Navbar-Logo statt / neben dem MIRO-DRIVE-Schriftzug), sag Bescheid — sonst bleibt es reines Favicon-Asset.

### Verifikation

- Generiertes Bild ansehen und vergleichen; falls die KI die Form daneben trifft, mit `imagegen--edit_image` nachschärfen (statt neu würfeln).
- Browser-Tab zeigt neues rotes Emblem.
