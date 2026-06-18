import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import carAsset from "@/assets/miro-car.png.asset.json";
import { Target, Award, Sparkles } from "lucide-react";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns – MIRO-DRIVE Fahrschule" },
      { name: "description", content: "MIRO-DRIVE – moderne Fahrschule mit persönlicher Betreuung, klarer Kommunikation und Erfahrung." },
      { property: "og:title", content: "Über uns – MIRO-DRIVE" },
      { property: "og:url", content: "/ueber-uns" },
    ],
    links: [{ rel: "canonical", href: "/ueber-uns" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Über uns" title="MIRO-DRIVE – moderne Fahrschule mit persönlicher Betreuung." />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-lg leading-relaxed text-foreground/80">
            Bei MIRO-DRIVE steht eine moderne, verständliche und stressfreie Fahrausbildung im Mittelpunkt. Wir begleiten unsere Fahrschüler von der ersten Anmeldung bis zur erfolgreichen Prüfung mit Geduld, Erfahrung und klarer Kommunikation.
          </p>
          <div className="mt-8 space-y-6">
            <div className="flex gap-4 rounded-2xl border bg-white p-6">
              <Target className="h-8 w-8 shrink-0 text-primary" />
              <div><h3 className="font-display text-lg">Unsere Mission</h3><p className="mt-1 text-sm text-muted-foreground">Wir möchten Fahrschüler sicher, selbstbewusst und professionell auf den Straßenverkehr vorbereiten.</p></div>
            </div>
            <div className="flex gap-4 rounded-2xl border bg-white p-6">
              <Award className="h-8 w-8 shrink-0 text-primary" />
              <div><h3 className="font-display text-lg">Unser Anspruch</h3><p className="mt-1 text-sm text-muted-foreground">Moderne Ausbildung, faire Beratung, transparente Preise und persönliche Betreuung.</p></div>
            </div>
            <div className="flex gap-4 rounded-2xl border bg-white p-6">
              <Sparkles className="h-8 w-8 shrink-0 text-primary" />
              <div><h3 className="font-display text-lg">Dein Vorteil</h3><p className="mt-1 text-sm text-muted-foreground">Du bekommst nicht nur Fahrstunden, sondern eine klare Begleitung bis zum Führerschein.</p></div>
            </div>
          </div>
          <Link to="/kontakt" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground">Jetzt anmelden</Link>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/15 to-transparent" />
          <img src={carAsset.url} alt="MIRO-DRIVE Fahrzeug" className="w-full" />
        </div>
      </div>
    </SiteLayout>
  );
}