import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { InquiryForm } from "@/components/site/InquiryForm";
import { CONTACT } from "@/lib/contact";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – MIRO-DRIVE Fahrschule" },
      { name: "description", content: "Starte jetzt deinen Führerschein bei MIRO-DRIVE – WhatsApp, Telefon, E-Mail oder Kontaktformular." },
      { property: "og:title", content: "Kontakt – MIRO-DRIVE" },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Kontakt" title="Starte jetzt deinen Führerschein bei MIRO-DRIVE." subtitle="Schreib uns direkt über WhatsApp oder nutze das Kontaktformular. Wir melden uns schnellstmöglich bei dir." />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <div className="space-y-6">
          <div className="rounded-2xl border bg-white p-6">
            <h3 className="font-display text-lg uppercase">Direktkontakt</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-primary" /><span>{CONTACT.address}</span></li>
              <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /><a className="hover:text-primary" href={`tel:${CONTACT.phone}`}>{CONTACT.phoneDisplay}</a></li>
              <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /><a className="hover:text-primary" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener" className="inline-flex rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white">WhatsApp öffnen</a>
              <a href={`tel:${CONTACT.phone}`} className="inline-flex rounded-full bg-foreground px-4 py-2 text-xs font-bold text-white">Anrufen</a>
              <a href={CONTACT.instagram} target="_blank" rel="noopener" className="inline-flex items-center gap-1 rounded-full border px-4 py-2 text-xs font-bold"><Instagram className="h-3.5 w-3.5" /> Instagram</a>
              <a href={CONTACT.tiktok} target="_blank" rel="noopener" className="inline-flex rounded-full border px-4 py-2 text-xs font-bold">TikTok</a>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6">
            <h3 className="font-display text-lg uppercase">Öffnungszeiten</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {CONTACT.hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between border-b pb-2 last:border-0">
                  <span className="flex items-center gap-2 text-muted-foreground"><Clock className="h-4 w-4" /> {h.day}</span>
                  <span className="font-bold">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border bg-muted">
            <div className="flex h-56 items-center justify-center text-sm text-muted-foreground">Google Maps Platzhalter</div>
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl uppercase">Kontaktformular</h2>
          <p className="mt-2 text-sm text-muted-foreground">Wir antworten in der Regel innerhalb weniger Stunden.</p>
          <div className="mt-6">
            <InquiryForm
              type="kontakt"
              fields={["phone", "email", "license_class", "first_aid_interest", "contact_pref", "message"]}
              submitLabel="Nachricht senden"
            />
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}