import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n";

export function Nav() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { href?: string; to?: string; label: string }[] = [
    { href: "/#help", label: t.nav.help },
    { href: "/#approach", label: t.nav.approach },
    { href: "/#about", label: t.nav.about },
    { href: "/#stories", label: t.nav.stories },
    { to: "/treats", label: t.nav.treats },
    { href: "/#faq", label: t.nav.faq },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex h-16 md:h-20 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) =>
            l.to ? (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden sm:flex items-center rounded-full border border-border bg-background/60 p-0.5 text-xs">
            <button
              onClick={() => setLang("uk")}
              className={`px-2.5 py-1 rounded-full transition ${
                lang === "uk"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/60"
              }`}
              aria-pressed={lang === "uk"}
            >
              UK
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-full transition ${
                lang === "en"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/60"
              }`}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>

          <a
            href="/#contact"
            className="hidden md:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-primary/90"
          >
            {t.nav.cta}
          </a>

          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-narrow py-6 flex flex-col gap-4">
            {links.map((l) =>
              l.to ? (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-base text-foreground/80"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-foreground/80"
                >
                  {l.label}
                </a>
              ),
            )}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setLang("uk")}
                className={`px-3 py-1.5 rounded-full text-xs border ${
                  lang === "uk"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border"
                }`}
              >
                Українська
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 rounded-full text-xs border ${
                  lang === "en"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border"
                }`}
              >
                English
              </button>
            </div>
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
