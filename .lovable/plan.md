
# MIRO-DRIVE Fahrschule – Premium Website + Admin Panel

Komplette Multi-Page-Website im Branding **Weiß / Rot / Schwarz** mit dynamischem Backend für Preise, Angebote, Team und Anfragen.

## Design-Sprache

- Farben: Weiß `#ffffff`, Schwarz `#0a0a0a`, Signal-Rot `#e30613` (passend zum Logo)
- Typografie: starke schwarze Display-Headlines (z. B. Archivo Black / Bebas-ähnlich), klare Body-Schrift (Inter/Manrope)
- Diagonale rote Akzentflächen & Pfeil-Elemente (inspiriert vom Fahrzeug-Wrap)
- Große Weißräume, abgerundete Karten, dezente Schatten, Hover- & Scroll-Animationen
- Logo + Fahrzeugbild prominent im Hero (via Lovable Assets aus den Uploads)

## Seitenstruktur (TanStack Router)

```
/                       Startseite (Hero, Trust-Bar, Warum, CTA)
/preise                 Dynamische Preis-Karten (4 Kategorien)
/leistungen             8 Leistungs-Karten mit Icons
/erste-hilfe-kurs       Info + Anfrageformular
/angebote               Dynamische aktive Angebote + Formular
/team                   Dynamische Team-Karten
/kontakt                Formular, Maps-Platzhalter, Kontaktdaten
/ueber-uns              Mission, Anspruch, Vorteile
/faq                    Akkordeon
/auth                   Login (für Admin)
/admin                  Geschütztes Dashboard
  ├─ Preise verwalten
  ├─ Angebote verwalten
  ├─ Team verwalten
  ├─ Erste-Hilfe-Kurs verwalten
  └─ Anfragen verwalten
```

Sticky Navigation (Logo links, Menü rechts, roter „Jetzt anmelden“-Button).
Floating WhatsApp-Button auf allen Seiten (unten rechts).
Hochwertiger Footer mit Nav, Kontakt, Social, Öffnungszeiten, Impressum/Datenschutz.

## Backend (Lovable Cloud)

Aktivierung von Lovable Cloud für Datenbank + Auth + Server Functions.

**Tabellen:**
- `prices` (id, category, title, description, price, sort, active)
- `offers` (id, title, short_desc, items[], price_label, button_text, active, sort)
- `team_members` (id, name, role, description, image_url, active, sort)
- `first_aid_info` (singleton: description, price, duration, dates, active)
- `inquiries` (id, type, name, phone, email, license_class, first_aid_interest, contact_pref, message, status, created_at)
- `user_roles` + `has_role()` Security-Definer (Admin-Rolle)

**RLS:**
- Public SELECT auf aktive Einträge in `prices`, `offers`, `team_members`, `first_aid_info`
- Public INSERT in `inquiries` (mit Validierung)
- Admin-only auf alle Mutationen + Anfragen-Lesen

**Server Functions:**
- `submitInquiry` (Zod-validiert, public)
- CRUD-Functions für jede Admin-Ressource (`requireSupabaseAuth` + `has_role('admin')`)

## Admin-Panel

- Login über `/auth`, Redirect auf `/admin`
- Tab-Layout: Preise | Angebote | Team | Erste-Hilfe | Anfragen
- Tabellen mit Inline-Edit-Dialogen (shadcn), Aktiv/Inaktiv-Toggle, Sortierung
- Anfragen mit Status-Workflow (Neu / In Bearbeitung / Erledigt)

## Formulare

Alle Formulare (Kontakt, Angebot, Erste-Hilfe) mit Zod-Validierung, einheitliche Erfolgsmeldung („Danke für deine Anfrage…"), Speicherung in `inquiries`.

## Assets

- Logo und Fahrzeugbild aus Uploads via `lovable-assets create` einbinden
- Platzhalter-Profilbilder fürs Team generieren

## Technisches

- TanStack Start + Tailwind v4 Design Tokens in `src/styles.css`
- Pro Route eigenes `head()` mit Title/Description/OG
- Floating WhatsApp + Social-Buttons als shared Komponenten
- Mobile-first, responsive, SEO-freundlich
- Seed-Migration mit Platzhalter-Preisen, 3 Angeboten, 3 Teammitgliedern

## Offene Punkte (Platzhalter, später vom Chef ersetzbar)

- Echte Telefonnummer, WhatsApp, Adresse, Social-Handles
- Echte Preise (im Admin pflegbar)
- Echte Team-Fotos
- Impressum & Datenschutz-Text

Nach Freigabe baue ich alles in einem Rutsch: Cloud aktivieren → Schema + Seed → Layout/Nav/Footer → alle öffentlichen Seiten → Auth + Admin-Panel → Assets & Polish.
