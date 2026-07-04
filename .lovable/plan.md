## Problem
Beim Reload einer Unterseite (z.B. `/team`, `/preise`, `/erste-hilfe-kurs`, `/`) läuft der TanStack-Loader auf dem Server (SSR). Die Loader benutzen aber den Browser-Supabase-Client (`@/integrations/supabase/client`), der beim Init in Node 20 den Realtime-Client zu laden versucht → Fehler „Node.js 20 detected without native WebSocket support" → SSR bricht ab („Inhalt konnte nicht geladen werden"). Das ist auch der Grund, warum die Team-Seite live hängt.

## Lösung
Für alle öffentlichen Lesezugriffe einen **Server-Function-basierten Publishable-Client** einführen, der ohne Session und ohne Realtime auskommt, und die Loader darauf umstellen.

### Änderungen

1. **Neu: `src/lib/public-data.functions.ts`** – enthält vier `createServerFn`s (GET):
   - `getActivePrices` → `prices` (öffentliche Felder, `active=true`)
   - `getActiveTeamMembers` → `team_members` (alle Felder, `active=true`, sortiert)
   - `getTeamPreview` → `team_members` (id, name, role, image_url, `active=true`, limit 4)
   - `getFirstAidInfo` → `first_aid_info` (aktiv, neuester Eintrag)
   
   Jede Function erzeugt lokal per `@supabase/supabase-js` einen Client mit `process.env.SUPABASE_URL` + `process.env.SUPABASE_PUBLISHABLE_KEY` und `auth: { storage: undefined, persistSession: false, autoRefreshToken: false }`. Kein Realtime, keine WS.

2. **`src/routes/team.tsx`** – `queryFn` ruft `getActiveTeamMembers` statt Browser-Client.
3. **`src/routes/preise.tsx`** – `queryFn` ruft `getActivePrices`.
4. **`src/routes/erste-hilfe-kurs.tsx`** – `queryFn` ruft `getFirstAidInfo`.
5. **`src/routes/index.tsx`** – die drei Public-Queries (`prices`, `team_members preview`, `first_aid_info`) auf die Server-Fns umstellen.

Keine Änderungen an:
- `Navbar.tsx`, `auth.tsx`, `_authenticated/*` (dort ist der Browser-Client korrekt, weil clientseitig / auth-abhängig)
- UI, Layout, Design, Texten
- RLS/Migrationen (bestehende Anon-Policies auf den vier Tabellen genügen)

## Ergebnis
- SSR-Reload auf allen Unterseiten funktioniert wieder.
- Live-Team-Seite hängt nicht mehr.
- Realtime wird auf dem Server nie initialisiert → keine WS-Warnung mehr.