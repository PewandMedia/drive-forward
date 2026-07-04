## Status

Sichtbarer App-Code enthält keine Lovable-Hinweise mehr. Verbleibende Stellen:

1. **„Edit with Lovable"-Badge** auf der veröffentlichten Seite (wird von der Plattform injiziert).
2. **Dev-Fehlermeldungen** in `src/integrations/supabase/{client,client.server,auth-middleware}.ts` erwähnen „Lovable Cloud" — nur sichtbar, wenn Env-Vars fehlen (Entwickler-Fehler, kein Endnutzer-Output).
3. **Build-Infrastruktur** (`vite.config.ts`, `bunfig.toml`, `package.json` → `@lovable.dev/*`) — nicht auslieferungsrelevant, nicht user-facing. Entfernen würde den Build brechen.

## Änderungen

1. **Badge ausblenden**: `publish_settings--set_badge_visibility({ hide_badge: true })`. Erfordert Pro-Plan; falls kein Pro-Plan aktiv ist, meldet der Aufruf einen Fehler und ich informiere dich.
2. **Supabase-Fehlermeldungen umformulieren**: In den drei Dateien den String `Connect Supabase in Lovable Cloud.` → `Configure Supabase environment variables.` ändern.
   - Hinweis: Diese Dateien sind laut Projektregeln auto-generiert. Änderungen dort können bei einer Regeneration überschrieben werden — das ist eine kosmetische Anpassung für den Fall, dass die Meldung mal geloggt wird.

## Nicht angerührt

- `vite.config.ts`, `bunfig.toml`, `package.json` (`@lovable.dev/*` Pakete) — Build/Runtime-Abhängigkeiten der Plattform.
- `AGENTS.md`, `.lovable/` — nur Repo-interne Metadaten, kein Auslieferungscode.
