import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

const BOOKING_URL = "https://calendar.app.google/Nmaa9qdSNMWyobUH6";
const TELEGRAM_URL = "https://t.me/AnastasiiaZakh";

/* ----------------------------- HERO ----------------------------- */
export function Hero() {
  const { t } = useI18n();
  return (
    <section
      id="top"
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden"
    >
      <div className="container-narrow">
        <div className="max-w-2xl fade-up">
          <p className="text-xs tracking-[0.25em] uppercase text-secondary mb-6">
            {t.hero.eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-foreground">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-elevated transition hover:bg-primary/90"
            >
              {t.hero.primary}
            </a>
            <a
              href="#help"
              className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground transition hover:border-primary/40"
            >
              {t.hero.secondary}
            </a>
          </div>

          <ul className="mt-10 flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-3">
            {t.hero.badges.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2 text-sm text-foreground/70"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent/25 text-accent-foreground">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- HELP ----------------------------- */
export function Help() {
  const { t } = useI18n();
  return (
    <section id="help" className="py-24 md:py-32">
      <div className="container-narrow">
        <SectionHeader
          eyebrow={t.help.eyebrow}
          title={t.help.title}
          lede={t.help.lede}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.help.items.map((it) => (
            <article
              key={it.title}
              className="group rounded-3xl border border-border bg-card p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="text-3xl">{it.icon}</div>
              <h3 className="mt-6 text-xl text-foreground">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {it.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- APPROACH ----------------------------- */
export function Approach() {
  const { t } = useI18n();
  return (
    <section id="approach" className="py-24 md:py-32 bg-soft">
      <div className="container-narrow">
        <SectionHeader
          eyebrow={t.approach.eyebrow}
          title={t.approach.title}
          lede={t.approach.lede}
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {t.approach.items.map((it) => (
            <article
              key={it.title}
              className="rounded-3xl bg-background p-10 shadow-soft"
            >
              <div className="text-3xl">{it.icon}</div>
              <h3 className="mt-6 text-2xl text-foreground">{it.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground max-w-lg">
                {it.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PROCESS ----------------------------- */
export function Process() {
  const { t } = useI18n();
  return (
    <section className="py-24 md:py-32">
      <div className="container-narrow">
        <SectionHeader eyebrow={t.process.eyebrow} title={t.process.title} />
        <ol className="mt-14 relative border-l border-border/70 pl-8 md:pl-12 space-y-10">
          {t.process.steps.map((s) => (
            <li key={s.n} className="relative">
              <span className="absolute -left-[43px] md:-left-[55px] top-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs tracking-widest">
                {s.n}
              </span>
              <h3 className="text-xl md:text-2xl text-foreground">{s.title}</h3>
              <p className="mt-2 text-muted-foreground max-w-2xl leading-relaxed">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ----------------------------- ABOUT ----------------------------- */
export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="py-24 md:py-32 bg-soft">
      <div className="container-narrow max-w-2xl">
        <p className="text-xs tracking-[0.25em] uppercase text-secondary">
          {t.about.eyebrow}
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl leading-tight text-foreground">
          {t.about.title}
        </h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/80">
          {t.about.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-background p-8 shadow-soft">
          <h3 className="text-sm tracking-[0.2em] uppercase text-secondary">
            {t.about.educationTitle}
          </h3>
          <ul className="mt-5 space-y-3">
            {t.about.education.map((e) => (
              <li
                key={e}
                className="flex items-start gap-3 text-sm text-foreground/80"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- STORIES ----------------------------- */
export function Stories() {
  const { t } = useI18n();
  return (
    <section id="stories" className="py-24 md:py-32">
      <div className="container-narrow max-w-3xl">
        <p className="text-xs tracking-[0.25em] uppercase text-secondary text-center">
          {t.stories.eyebrow}
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl text-center text-foreground">
          {t.stories.title}
        </h2>

        <blockquote className="mt-14 rounded-3xl bg-card border border-border p-10 md:p-14 shadow-soft relative text-center">
          <svg
            aria-hidden
            className="mx-auto text-accent/60"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7 7h4v4H7c0 3 2 5 4 5v2c-4 0-6-3-6-7V7Zm9 0h4v4h-4c0 3 2 5 4 5v2c-4 0-6-3-6-7V7Z" />
          </svg>
          <div
            className="mt-4 flex justify-center gap-1 text-accent"
            aria-hidden
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.5l2.9 6.1 6.6.7-4.9 4.5 1.3 6.6L12 17l-5.9 3.4 1.3-6.6-4.9-4.5 6.6-.7L12 2.5z" />
              </svg>
            ))}
          </div>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-foreground/85">
            {t.stories.quote}
          </p>
          <footer className="mt-8 text-sm text-secondary tracking-wide">
            {t.stories.author}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

/* ----------------------------- FAQ ----------------------------- */
export function Faq() {
  const { t } = useI18n();
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-24 md:py-32 bg-soft">
      <div className="container-narrow max-w-3xl">
        <SectionHeader
          eyebrow={t.faq.eyebrow}
          title={t.faq.title}
          align="center"
        />
        <div className="mt-12 divide-y divide-border/70 rounded-3xl bg-background shadow-soft">
          {t.faq.items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className="p-2">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-6 text-left px-6 py-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg text-foreground">
                    {it.q}
                  </span>
                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition ${
                      isOpen
                        ? "bg-primary text-primary-foreground border-primary"
                        : "text-foreground/60"
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      {isOpen ? (
                        <path d="M6 12h12" />
                      ) : (
                        <>
                          <path d="M12 6v12" />
                          <path d="M6 12h12" />
                        </>
                      )}
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-8 -mt-2 text-muted-foreground leading-relaxed max-w-2xl">
                    {it.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FINAL CTA ----------------------------- */
export function FinalCta() {
  const { t } = useI18n();
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
          <div className="relative px-6 py-20 md:px-16 md:py-28 max-w-3xl">
            <h2 className="text-3xl md:text-5xl leading-[1.15]">
              {t.finalCta.title}
              <br />
              <span className="text-accent">{t.finalCta.titleAccent}</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-primary-foreground/85 max-w-xl leading-relaxed">
              {t.finalCta.body}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-accent px-7 py-4 text-sm font-medium text-accent-foreground shadow-elevated transition hover:bg-accent/90"
              >
                {t.finalCta.button}
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-primary-foreground/30 px-7 py-4 text-sm font-medium text-primary-foreground transition hover:bg-primary-foreground/10"
              >
                {t.finalCta.telegramButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FOOTER ----------------------------- */
export function Footer() {
  const { t, lang, setLang } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 py-16">
      <div className="container-narrow grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-lg tracking-[0.18em] font-medium">HAVKIT</div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            {t.footer.tagline}
          </p>
        </div>
        <div>
          <div className="text-xs tracking-[0.2em] uppercase text-secondary">
            {t.footer.contact}
          </div>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li>
              <a href="mailto:hello@havkit.com" className="hover:text-primary">
                hello@havkit.com
              </a>
            </li>
            <li>
              <a href="tel:+380000000000" className="hover:text-primary">
                +380 00 000 00 00
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-[0.2em] uppercase text-secondary">
            {t.footer.social}
          </div>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                Telegram
              </a>
            </li>
          </ul>
          <div className="mt-6 inline-flex items-center rounded-full border border-border p-0.5 text-xs">
            <button
              onClick={() => setLang("uk")}
              className={`px-2.5 py-1 rounded-full ${lang === "uk" ? "bg-primary text-primary-foreground" : "text-foreground/60"}`}
            >
              UK
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-full ${lang === "en" ? "bg-primary text-primary-foreground" : "text-foreground/60"}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
      <div className="container-narrow mt-12 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>
          © {year} HAVKIT. {t.footer.rights}
        </span>
        <div className="flex items-center gap-4">
          <Link to="/privacy" className="hover:text-primary">
            {t.footer.privacy}
          </Link>
          <Link to="/terms" className="hover:text-primary">
            {t.footer.terms}
          </Link>
          <span>Kyiv · Ukraine</span>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------- shared ----------------------------- */
function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
}) {
  const a = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${a}`}>
      <p className="text-xs tracking-[0.25em] uppercase text-secondary">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl md:text-5xl leading-[1.1] text-foreground">
        {title}
      </h2>
      {lede && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          {lede}
        </p>
      )}
    </div>
  );
}
