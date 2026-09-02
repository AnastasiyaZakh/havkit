import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Nav } from "@/components/havkit/Nav";
import { Footer } from "@/components/havkit/Sections";
import { withBase } from "@/lib/base-path";

import realNatureLamb from "@/assets/treats/real-nature-lamb.jpg";
import escapureSalmon from "@/assets/treats/escapure-salmon.jpg";
import realNatureDuck from "@/assets/treats/real-nature-duck.jpg";
import britEndurance from "@/assets/treats/brit-endurance-lamb-banana.jpg";
import britAntistress from "@/assets/treats/brit-antistress-shrimp-hemp.jpg";
import savoryImmunity from "@/assets/treats/savory-immunity-duck-rosehips.jpg";
import carnilove from "@/assets/treats/carnilove-quail.jpg";
import britLight from "@/assets/treats/brit-light-rabbit-papaya.jpg";
import grancarnoMeatChunks from "@/assets/treats/grancarno-meat-chunks-lamb.jpg";

const TELEGRAM_URL = "https://t.me/AnastasiiaZakh";

export const Route = createFileRoute("/treats")({
  head: () => ({
    meta: [
      { title: "Смаколики · HAVKIT" },
      {
        name: "description",
        content:
          "Смаколики, які HAVKIT використовує й рекомендує на заняттях із дресирування.",
      },
    ],
    links: [{ rel: "canonical", href: withBase("/treats") }],
  }),
  component: () => (
    <I18nProvider>
      <TreatsPage />
    </I18nProvider>
  ),
});

const content = {
  uk: {
    eyebrow: "Смаколики",
    title: "Смаколики, які я рекомендую",
    lede: "Якісне заохочення важливе не менше, ніж сам метод навчання. Ось смаколики, які я особисто використовую й радимо на заняттях.",
    items: [
      {
        img: realNatureLamb,
        brand: "Real Nature Wilderness · Pure Lamb",
        body: "100% ягня, м’яко висушене.",
      },
      {
        img: escapureSalmon,
        brand: "Escapure · Lachs",
        body: "98% м’яса, лосось.",
      },
      {
        img: realNatureDuck,
        brand: "Real Nature Wilderness · Pure Duck",
        body: "90% качки, для щоденних тренувань.",
      },
      {
        img: britEndurance,
        brand: "Brit Endurance",
        body: "Ягня з бананом, для активних собак.",
      },
      {
        img: britAntistress,
        brand: "Brit Antistress",
        body: "Креветки з коноплею, заспокійлива формула.",
      },
      {
        img: savoryImmunity,
        brand: "Savory Immunity Support",
        body: "Качка з шипшиною, для імунітету.",
      },
      {
        img: carnilove,
        brand: "Carnilove Soft Quail",
        body: "Перепілка з орегано, без зерна.",
      },
      {
        img: britLight,
        brand: "Brit Light",
        body: "Кролик з папаєю, легка формула.",
      },
      {
        img: grancarnoMeatChunks,
        brand: "Animonda GranCarno · Meat Chunks",
        body: "97% ягняти, шматочки м’яса, ніжно висушені.",
      },
    ],
    ctaTitle: "Хочете дізнатися більше?",
    ctaBody: "Напишіть мені в Telegram, якщо маєте питання про смаколики.",
    ctaButton: "Написати в Telegram",
  },
  en: {
    eyebrow: "Treats",
    title: "Treats I recommend",
    lede: "Quality reinforcement matters just as much as the training method itself. Here are the treats I personally use and recommend during sessions.",
    items: [
      {
        img: realNatureLamb,
        brand: "Real Nature Wilderness · Pure Lamb",
        body: "100% lamb, gently air-dried.",
      },
      {
        img: escapureSalmon,
        brand: "Escapure · Lachs",
        body: "98% meat, salmon.",
      },
      {
        img: realNatureDuck,
        brand: "Real Nature Wilderness · Pure Duck",
        body: "90% duck, for daily training.",
      },
      {
        img: britEndurance,
        brand: "Brit Endurance",
        body: "Lamb with banana, for active dogs.",
      },
      {
        img: britAntistress,
        brand: "Brit Antistress",
        body: "Shrimp with hemp, a calming blend.",
      },
      {
        img: savoryImmunity,
        brand: "Savory Immunity Support",
        body: "Duck with rosehips, for immunity.",
      },
      {
        img: carnilove,
        brand: "Carnilove Soft Quail",
        body: "Quail with oregano, grain-free.",
      },
      {
        img: britLight,
        brand: "Brit Light",
        body: "Rabbit with papaya, a light formula.",
      },
      {
        img: grancarnoMeatChunks,
        brand: "Animonda GranCarno · Meat Chunks",
        body: "97% lamb, gently air-dried meat chunks.",
      },
    ],
    ctaTitle: "Want to know more?",
    ctaBody: "Message me on Telegram if you have questions about the treats.",
    ctaButton: "Message on Telegram",
  },
};

function TreatsPage() {
  const { lang } = useI18n();
  const c = content[lang];
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main className="pt-32 pb-24">
        <div className="container-narrow max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-secondary">
            {c.eyebrow}
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl leading-[1.1] text-foreground">
            {c.title}
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            {c.lede}
          </p>
        </div>

        <div className="container-narrow mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {c.items.map((it) => (
            <article
              key={it.brand}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="aspect-square overflow-hidden bg-soft">
                <img
                  src={it.img}
                  alt={it.brand}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-base text-foreground">{it.brand}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {it.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="container-narrow mt-16">
          <div className="rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground px-6 py-14 md:px-16 md:py-20 text-center">
            <h2 className="text-2xl md:text-3xl">{c.ctaTitle}</h2>
            <p className="mt-4 text-base text-primary-foreground/85 max-w-xl mx-auto leading-relaxed">
              {c.ctaBody}
            </p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center rounded-full bg-accent px-7 py-4 text-sm font-medium text-accent-foreground shadow-elevated transition hover:bg-accent/90"
            >
              {c.ctaButton}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
