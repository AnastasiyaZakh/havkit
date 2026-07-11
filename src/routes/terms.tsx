import { createFileRoute, Link } from "@tanstack/react-router";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Nav } from "@/components/havkit/Nav";
import { Footer } from "@/components/havkit/Sections";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — HAVKIT" },
      {
        name: "description",
        content: "Terms of Service for HAVKIT dog training consultations.",
      },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <I18nProvider>
      <TermsPage />
    </I18nProvider>
  ),
});

const content = {
  uk: {
    title: "Умови надання послуг",
    updated: "Востаннє оновлено: 11 липня 2026",
    intro:
      "Ці Умови регулюють користування сайтом HAVKIT та надання консультацій із навчання собак.",
    sections: [
      {
        heading: "1. Про послуги",
        body: [
          "HAVKIT надає консультації та заняття з гуманного, науково обґрунтованого навчання собак — очно та онлайн.",
          "Записуючись на консультацію, ви погоджуєтесь з цими Умовами.",
        ],
      },
      {
        heading: "2. Запис і скасування",
        body: [
          "Запис на консультацію відбувається через контактні канали, вказані на сайті (Telegram, Calendly тощо).",
          "Якщо вам потрібно перенести або скасувати заняття, будь ласка, повідомте якомога раніше — точні умови скасування узгоджуються індивідуально під час запису.",
        ],
      },
      {
        heading: "3. Характер послуг",
        body: [
          "Консультації з дресирування не є ветеринарною чи медичною послугою. У разі підозри на проблеми зі здоров’ям собаки, будь ласка, зверніться до ветеринарного лікаря.",
          "Результати навчання залежать від багатьох факторів, включно з послідовністю виконання рекомендацій, і не можуть бути гарантовані у вигляді конкретного результату чи строку.",
        ],
      },
      {
        heading: "4. Відповідальність",
        body: [
          "Власник собаки несе відповідальність за безпеку під час занять, включно з контролем собаки на прогулянках та в громадських місцях.",
          "HAVKIT не несе відповідальності за шкоду, спричинену недотриманням рекомендацій або форс-мажорними обставинами.",
        ],
      },
      {
        heading: "5. Оплата",
        body: [
          "Вартість та порядок оплати консультацій узгоджуються індивідуально до початку роботи.",
        ],
      },
      {
        heading: "6. Інтелектуальна власність",
        body: [
          "Матеріали цього сайту (тексти, дизайн, логотип) належать HAVKIT і не можуть використовуватися без дозволу.",
        ],
      },
      {
        heading: "7. Застосовне право",
        body: ["Ці Умови регулюються законодавством України."],
      },
      {
        heading: "8. Контакти",
        body: ["З питань щодо цих Умов: hello@havkit.com"],
      },
    ],
    back: "На головну",
  },
  en: {
    title: "Terms of Service",
    updated: "Last updated: July 11, 2026",
    intro:
      "These Terms govern your use of the HAVKIT website and booking of dog training consultations.",
    sections: [
      {
        heading: "1. About the service",
        body: [
          "HAVKIT provides humane, evidence-based dog training consultations and sessions — in person and online.",
          "By booking a consultation, you agree to these Terms.",
        ],
      },
      {
        heading: "2. Booking & cancellation",
        body: [
          "Consultations are booked through the contact channels listed on the site (Telegram, Calendly, etc.).",
          "If you need to reschedule or cancel a session, please let us know as early as possible — specific cancellation terms are agreed individually at the time of booking.",
        ],
      },
      {
        heading: "3. Nature of the service",
        body: [
          "Training consultations are not a veterinary or medical service. If you suspect a health issue with your dog, please consult a veterinarian.",
          "Training outcomes depend on many factors, including consistent follow-through on recommendations, and cannot be guaranteed as a specific result or timeline.",
        ],
      },
      {
        heading: "4. Liability",
        body: [
          "The dog's owner is responsible for safety during sessions, including controlling the dog on walks and in public spaces.",
          "HAVKIT is not liable for harm caused by failure to follow recommendations or by force-majeure circumstances.",
        ],
      },
      {
        heading: "5. Payment",
        body: [
          "Pricing and payment terms for consultations are agreed individually before work begins.",
        ],
      },
      {
        heading: "6. Intellectual property",
        body: [
          "The content of this site (text, design, logo) belongs to HAVKIT and may not be used without permission.",
        ],
      },
      {
        heading: "7. Governing law",
        body: ["These Terms are governed by the laws of Ukraine."],
      },
      {
        heading: "8. Contact",
        body: ["For questions about these Terms: hello@havkit.com"],
      },
    ],
    back: "Back to home",
  },
};

function TermsPage() {
  const { lang } = useI18n();
  const c = content[lang];
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main className="pt-32 pb-24">
        <div className="container-narrow max-w-3xl">
          <Link
            to="/"
            className="text-sm text-secondary hover:text-primary transition-colors"
          >
            ← {c.back}
          </Link>
          <h1 className="mt-6 text-3xl md:text-4xl text-foreground">
            {c.title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">{c.updated}</p>
          <p className="mt-8 text-base leading-relaxed text-foreground/80">
            {c.intro}
          </p>
          <div className="mt-10 space-y-8">
            {c.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-lg text-foreground">{s.heading}</h2>
                <div className="mt-2 space-y-3">
                  {s.body.map((p, i) => (
                    <p
                      key={i}
                      className="text-base leading-relaxed text-foreground/80"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
