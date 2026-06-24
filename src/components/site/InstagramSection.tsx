import { Instagram, ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { CONTACT } from "@/lib/contact";

type IgPost = {
  id: string;
  image_url: string;
  caption: string | null;
  post_url: string;
};

export function InstagramSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const { data = [] } = useQuery({
    queryKey: ["instagram-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("instagram_posts")
        .select("id,image_url,caption,post_url")
        .eq("active", true)
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return (data ?? []) as IgPost[];
    },
  });

  const scrollBy = (dx: number) => {
    trackRef.current?.scrollBy({ left: dx, behavior: "smooth" });
  };

  const hasPosts = data.length > 0;

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
            <Instagram className="h-4 w-4" /> Instagram
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">
            Frisch <span className="text-primary">bestanden</span> – unsere Fahrschüler bei Instagram.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Jede Woche feiern wir die nächsten frisch gebackenen Führerschein-Besitzer. Folge{" "}
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-foreground underline-offset-4 hover:underline"
            >
              @miro_drive
            </a>{" "}
            und sei dabei.
          </p>
        </div>

        {hasPosts ? (
          <div className="relative mt-12">
            <button
              type="button"
              aria-label="Zurück scrollen"
              onClick={() => scrollBy(-320)}
              className="absolute -left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-foreground shadow-md transition-transform hover:scale-105 md:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Weiter scrollen"
              onClick={() => scrollBy(320)}
              className="absolute -right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-foreground shadow-md transition-transform hover:scale-105 md:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div
              ref={trackRef}
              className="ig-scroll -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 sm:gap-5 sm:px-6"
            >
              {data.map((p) => (
                <a
                  key={p.id}
                  href={p.post_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-square w-[240px] shrink-0 snap-start overflow-hidden rounded-2xl bg-muted shadow-sm transition-transform hover:-translate-y-1 sm:w-[280px]"
                >
                  <img
                    src={p.image_url}
                    alt={p.caption ?? "Instagram-Beitrag von MIRO-DRIVE"}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#833ab4]/80 via-[#fd1d1d]/60 to-[#fcb045]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Instagram className="h-8 w-8 drop-shadow" />
                    {p.caption && (
                      <p className="line-clamp-3 text-xs font-semibold drop-shadow">{p.caption}</p>
                    )}
                    <span className="mt-1 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider">
                      Auf Instagram ansehen <ExternalLink className="h-3 w-3" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground md:hidden">
              ← Wische zur Seite für mehr Beiträge →
            </p>
          </div>
        ) : (
          <div className="mt-12 rounded-3xl border border-dashed border-primary/20 bg-primary/[0.03] p-10 text-center">
            <Instagram className="mx-auto h-10 w-10 text-primary" />
            <p className="mt-4 text-base font-semibold text-foreground">
              Schau direkt auf Instagram vorbei – dort feiern wir jede bestandene Prüfung.
            </p>
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.03]"
          >
            <Instagram className="h-4 w-4" />
            Auf Instagram folgen
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
      <style>{`
        .ig-scroll::-webkit-scrollbar { height: 6px; }
        .ig-scroll::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 9999px; }
        .ig-scroll::-webkit-scrollbar-track { background: transparent; }
      `}</style>
    </section>
  );
}