import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Nav } from "@/components/havkit/Nav";
import { Footer } from "@/components/havkit/Sections";

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
    links: [{ rel: "canonical", href: "/treats" }],
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
        icon: "🐟",
        title: "Риба",
        body: "Кубики зі 100% риби. М’який, гіпоалергенний варіант для чутливих собак.",
      },
      {
        icon: "🐑",
        title: "Ягня",
        body: "В’ялена ягнятина без злаків і барвників. Підходить для щоденного заохочення.",
      },
      {
        icon: "🐟",
        title: "Лосось",
        body: "В’ялений лосось, джерело Омега-3 для шерсті та шкіри.",
      },
      {
        icon: "🦆",
        title: "Качка",
        body: "90% качки, м’яка текстура: зручно для інтенсивних тренувань.",
      },
      {
        icon: "🦴",
        title: "Кісточки з яловичиною",
        body: "Жувальні смаколики з начинкою. Добре тримають увагу на прогулянці.",
      },
      {
        icon: "🍌",
        title: "Ягня з бананом",
        body: "Функціональний снек для активних собак, збагачений L-карнітином.",
      },
      {
        icon: "🦐",
        title: "Креветки з коноплею",
        body: "Заспокійлива формула на трав’яній основі. Гарний вибір для тривожних собак.",
      },
      {
        icon: "🐦",
        title: "Перепілка з орегано",
        body: "Без зерна та картоплі, збагачені трав’яними екстрактами.",
      },
      {
        icon: "🥭",
        title: "Кролик з папаєю",
        body: "Легка формула для собак, які стежать за вагою.",
      },
    ],
    note: "Фото власних смаколиків з’являться тут незабаром.",
    ctaTitle: "Хочете дізнатися більше?",
    ctaBody:
      "Напишіть мені в Telegram, якщо маєте питання про смаколики чи їх наявність.",
    ctaButton: "Написати в Telegram",
  },
  en: {
    eyebrow: "Treats",
    title: "Treats I recommend",
    lede: "Quality reinforcement matters just as much as the training method itself. Here are the treats I personally use and recommend during sessions.",
    items: [
      {
        icon: "🐟",
        title: "Fish",
        body: "100% fish cubes. A soft, hypoallergenic option for sensitive dogs.",
      },
      {
        icon: "🐑",
        title: "Lamb",
        body: "Air-dried lamb, no grain or dyes. Great for everyday reinforcement.",
      },
      {
        icon: "🐟",
        title: "Salmon",
        body: "Air-dried salmon, a source of Omega-3 for skin and coat.",
      },
      {
        icon: "🦆",
        title: "Duck",
        body: "90% duck, soft texture: easy to use during intensive training.",
      },
      {
        icon: "🦴",
        title: "Beef bones",
        body: "Filled chew treats. Good for keeping focus on walks.",
      },
      {
        icon: "🍌",
        title: "Lamb with banana",
        body: "A functional snack for active dogs, enriched with L-carnitine.",
      },
      {
        icon: "🦐",
        title: "Shrimp with hemp",
        body: "A calming, herb-based blend. A good choice for anxious dogs.",
      },
      {
        icon: "🐦",
        title: "Quail with oregano",
        body: "Grain- and potato-free, enriched with herbal extracts.",
      },
      {
        icon: "🥭",
        title: "Rabbit with papaya",
        body: "A light formula for dogs watching their weight.",
      },
    ],
    note: "Photos of the actual treats will be added here soon.",
    ctaTitle: "Want to know more?",
    ctaBody:
      "Message me on Telegram if you have questions about the treats or availability.",
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
              key={it.title}
              className="rounded-3xl border border-border bg-card p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="text-3xl">{it.icon}</div>
              <h3 className="mt-6 text-xl text-foreground">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {it.body}
              </p>
            </article>
          ))}
        </div>

        <p className="container-narrow mt-10 text-center text-sm text-muted-foreground">
          {c.note}
        </p>

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
