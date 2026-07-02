Wenn man im mobilen Viewport auf das Hamburger-Menü tippt, soll die Navigation als **Fullscreen-Overlay** erscheinen – nicht mehr als schmales Dropdown unter dem Header.

### Was gemacht wird
1. **Datei**: `src/components/site/Navbar.tsx`
2. **Mobile Navigation wird zu einem Fullscreen-Overlay** umgebaut:
   - Overlay deckt die **gesamte Viewport-Höhe und -Breite** ab (`fixed inset-0 z-50`).
   - **Oben**: MIRO-DRIVE Logo + X-Schließen-Button (rechts).
   - **Mitte**: Alle Nav-Links in großer, klarer Darstellung (untereinander).
   - **Unten**: CTA-Button „Jetzt anmelden".
3. **Body-Scroll-Lock**: Sobald das Menü offen ist, kann man die Seite im Hintergrund nicht mehr scrollen.
4. **Animation**: Ein simpler Ein-/Ausblend-Effekt (z. B. `opacity` + `translate-y`) für ein modernes Gefühl.
5. **Desktop bleibt komplett unverändert**.

### Technische Details
- Nutzt ausschließlich Tailwind CSS Utilities (kein neues Paket).
- Scroll-Lock via `document.body.style.overflow = 'hidden'` beim Öffnen, Rücksetzen beim Schließen/Unmount.
- Overlay schließt sich auch beim Klick auf einen Link (bestehendes Verhalten bleibt).