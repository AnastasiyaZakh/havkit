import { createFileRoute, Link } from "@tanstack/react-router";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Nav } from "@/components/havkit/Nav";
import { Footer } from "@/components/havkit/Sections";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — HAVKIT" },
      {
        name: "description",
        content: "How HAVKIT collects, uses and protects your personal data.",
      },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <I18nProvider>
      <PrivacyPage />
    </I18nProvider>
  ),
});

const content = {
  uk: {
    title: "Політика конфіденційності",
    updated: "Востаннє оновлено: 11 липня 2026",
    intro:
      "Ця Політика конфіденційності описує, які дані HAVKIT (далі — «ми») збирає під час запису на консультацію чи заняття, як ми їх використовуємо та захищаємо.",
    sections: [
      {
        heading: "1. Які дані ми збираємо",
        body: [
          "Коли ви записуєтесь на консультацію (через Telegram, Calendly або іншим способом), ми можемо отримати ваше ім’я та номер телефону.",
          "Ми не збираємо жодних інших персональних даних через цей сайт і не використовуємо форми на сайті для збору даних напряму — запис відбувається через сторонні сервіси (Telegram, Calendly).",
        ],
      },
      {
        heading: "2. Навіщо нам ці дані",
        body: [
          "Ім’я та номер телефону використовуються виключно для того, щоб зв’язатися з вами, підтвердити запис та узгодити деталі консультації чи заняття.",
          "Ми не використовуємо ваші дані для розсилок, реклами чи передачі третім особам з маркетинговою метою.",
        ],
      },
      {
        heading: "3. Сторонні сервіси",
        body: [
          "Для запису на консультацію ми можемо використовувати сторонні сервіси (наприклад, Telegram або Calendly). Ці сервіси мають власні політики конфіденційності, і ми рекомендуємо ознайомитися з ними окремо.",
        ],
      },
      {
        heading: "4. Файли cookie та локальне сховище",
        body: [
          "Сайт зберігає у локальному сховищі браузера (localStorage) лише одне значення — обрану мову інтерфейсу (українська/англійська). Це не є трекінговим cookie, дані нікуди не передаються.",
          "Наразі сайт не використовує аналітичні чи рекламні cookie.",
        ],
      },
      {
        heading: "5. Зберігання та захист даних",
        body: [
          "Дані, отримані під час запису, зберігаються лише стільки часу, скільки потрібно для надання послуги, і доступні лише HAVKIT.",
        ],
      },
      {
        heading: "6. Ваші права",
        body: [
          "Ви маєте право дізнатися, які дані ми про вас зберігаємо, попросити їх виправити або видалити. Для цього напишіть на hello@havkit.com.",
        ],
      },
      {
        heading: "7. Зміни до цієї політики",
        body: [
          "Ми можемо оновлювати цю політику. Актуальна версія завжди доступна на цій сторінці.",
        ],
      },
      {
        heading: "8. Контакти",
        body: ["З питань щодо конфіденційності: hello@havkit.com"],
      },
    ],
    back: "На головну",
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: July 11, 2026",
    intro:
      'This Privacy Policy explains what data HAVKIT ("we") collects when you book a consultation or session, and how we use and protect it.',
    sections: [
      {
        heading: "1. What data we collect",
        body: [
          "When you book a consultation (via Telegram, Calendly, or another channel), we may receive your name and phone number.",
          "We do not collect any other personal data through this website, and we do not use on-site forms to collect data directly — booking happens through third-party services (Telegram, Calendly).",
        ],
      },
      {
        heading: "2. Why we need this data",
        body: [
          "Your name and phone number are used solely to contact you, confirm your booking, and coordinate the details of a consultation or session.",
          "We do not use your data for newsletters, advertising, or share it with third parties for marketing purposes.",
        ],
      },
      {
        heading: "3. Third-party services",
        body: [
          "To manage bookings we may use third-party services (such as Telegram or Calendly). These services have their own privacy policies, which we recommend reviewing separately.",
        ],
      },
      {
        heading: "4. Cookies & local storage",
        body: [
          "The site stores exactly one value in your browser's local storage: your chosen interface language (Ukrainian/English). This is not a tracking cookie and nothing is transmitted anywhere.",
          "The site currently does not use analytics or advertising cookies.",
        ],
      },
      {
        heading: "5. Data storage & protection",
        body: [
          "Data collected during booking is kept only as long as needed to provide the service, and is accessible only to HAVKIT.",
        ],
      },
      {
        heading: "6. Your rights",
        body: [
          "You have the right to know what data we hold about you, and to request correction or deletion. Contact hello@havkit.com to do so.",
        ],
      },
      {
        heading: "7. Changes to this policy",
        body: [
          "We may update this policy from time to time. The current version is always available on this page.",
        ],
      },
      {
        heading: "8. Contact",
        body: ["For privacy questions: hello@havkit.com"],
      },
    ],
    back: "Back to home",
  },
};

function PrivacyPage() {
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
