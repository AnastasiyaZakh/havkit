import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Nav } from "@/components/havkit/Nav";
import {
  Hero,
  Help,
  Approach,
  Process,
  About,
  Stories,
  Faq,
  FinalCta,
  Footer,
} from "@/components/havkit/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "HAVKIT — Гуманне навчання собак · Kind, evidence-based dog training",
      },
      {
        name: "description",
        content:
          "HAVKIT — приватний кінолог. Гуманне, науково обґрунтоване навчання. Допомагаю людям і собакам краще розуміти одне одного.",
      },
      { property: "og:title", content: "HAVKIT — Гуманне навчання собак" },
      {
        property: "og:description",
        content:
          "Навчання без страху. Довіра замість тиску. Індивідуальний план для вас і вашого собаки.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "HAVKIT",
          description:
            "Гуманне, науково обґрунтоване навчання собак. Приватний кінолог.",
          areaServed: "UA",
          email: "hello@havkit.com",
          url: "/",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground antialiased">
        <Nav />
        <main>
          <Hero />
          <Help />
          <Approach />
          <Process />
          <About />
          <Stories />
          <Faq />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
