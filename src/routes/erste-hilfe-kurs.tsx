import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { InquiryForm } from "@/components/site/InquiryForm";
import { supabase } from "@/integrations/supabase/client";
import { ErrorBox } from "@/components/site/QueryFallbacks";
import { CONTACT } from "@/lib/contact";
import { Heart, Calendar, Clock, FileText, GraduationCap } from "lucide-react";

const faQuery = queryOptions({
  queryKey: ["first_aid_info"],
  queryFn: async () => {
    const { data, error } = await supabase.from("first_aid_info").select("*").eq("active", true).order("updated_at", { ascending: false }).limit(1);
    if (error) throw error;
    return data?.[0] ?? null;
  },
});

export const Route = createFileRoute("/erste-hilfe-kurs")({
  head: () => ({
    meta: [
      { title: "Erste-Hilfe-Kurs – MIRO-DRIVE Fahrschule" },
      { name: "description", content: "Erste-Hilfe-Kurs für Führerscheinbewerber – kompakt, verständlich, jederzeit per WhatsApp anfragen." },
      { property: "og:title", content: "Erste-Hilfe-Kurs – MIRO-DRIVE" },
      { property: "og:url", content: "/erste-hilfe-kurs" },
    ],
    links: [{ rel: "canonical", href: "/erste-hilfe-kurs" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(faQuery),
  component: FAPage,
  errorComponent: ErrorBox,
});

function FAPage() {
  const { data: info } = useSuspenseQuery(faQuery);
  const benefits = [
    { icon: Heart, label: "Erste-Hilfe-Kurs für den Führerschein" },
    { icon: GraduationCap, label: "Kompakte und verständliche Schulung" },
    { icon: Calendar, label: "Einfache Anmeldung" },
    { icon: FileText, label: "Beratung zu allen notwendigen Unterlagen" },
    { icon: Clock, label: "Unterstützung beim Start deiner Fahrausbildung" },
  ];
  return (
    <SiteLayout>
      <PageHero eyebrow="Erste-Hilfe-Kurs" title="Erste-Hilfe-Kurs für deinen Führerschein" subtitle="Bei MIRO-DRIVE kannst du dich einfach über Erste-Hilfe-Kurse informieren und direkt eine Anfrage stellen." />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-2xl uppercase sm:text-3xl">Was du bekommst</h2>
          <ul className="mt-6 space-y-3">
            {benefits.map((b) => (
              <li key={b.label} className="flex items-start gap-3 rounded-xl border bg-white p-4">
                <b.icon className="mt-0.5 h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{b.label}</span>
              </li>
            ))}
          </ul>

          {info && (
            <div className="mt-8 rounded-2xl border bg-muted/30 p-6">
              <h3 className="font-display text-lg">Kursinfo</h3>
              <p className="mt-2 text-sm text-muted-foreground">{info.description}</p>
              <dl className="mt-4 grid grid-cols-3 gap-3 text-sm">
                {info.price && <div><dt className="text-xs uppercase text-muted-foreground">Preis</dt><dd className="font-bold text-primary">{info.price}</dd></div>}
                {info.duration && <div><dt className="text-xs uppercase text-muted-foreground">Dauer</dt><dd className="font-bold">{info.duration}</dd></div>}
                {info.dates && <div><dt className="text-xs uppercase text-muted-foreground">Termine</dt><dd className="font-bold">{info.dates}</dd></div>}
              </dl>
            </div>
          )}

          <a href={CONTACT.whatsapp} target="_blank" rel="noopener" className="mt-8 inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white">
            Per WhatsApp Kurs anfragen
          </a>
        </div>

        <div>
          <h2 className="font-display text-2xl uppercase sm:text-3xl">Anfrageformular</h2>
          <p className="mt-2 text-sm text-muted-foreground">Wir melden uns schnellstmöglich bei dir.</p>
          <div className="mt-6">
            <InquiryForm
              type="erste_hilfe"
              fields={["phone", "email", "preferred_period", "message"]}
              submitLabel="Erste-Hilfe-Kurs anfragen"
            />
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}