import { createFileRoute, Link } from "@tanstack/react-router";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Nav } from "@/components/havkit/Nav";
import { Footer } from "@/components/havkit/Sections";

export const Route = createFileRoute("/prep")({
  head: () => ({
    meta: [
      { title: "Підготовка до першого заняття · HAVKIT" },
      {
        name: "description",
        content:
          "Як підготуватися і чого очікувати від першого заняття з дресирування собаки.",
      },
    ],
    links: [{ rel: "canonical", href: "/prep" }],
  }),
  component: () => (
    <I18nProvider>
      <PrepPage />
    </I18nProvider>
  ),
});

type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "h3"; text: string };

type Section = { heading: string; blocks: Block[] };

const content: Record<
  "uk" | "en",
  {
    eyebrow: string;
    title: string;
    intro: string;
    sections: Section[];
    closing: string;
    back: string;
  }
> = {
  uk: {
    eyebrow: "Перше заняття",
    title: "Підготовка до першого заняття 🐾",
    intro:
      "Дуже рада знайомству! Щоб наше перше заняття пройшло максимально продуктивно та комфортно для вас і вашої собаки, будь ласка, ознайомтеся з цими рекомендаціями.",
    sections: [
      {
        heading: "Що взяти із собою",
        blocks: [
          {
            type: "ul",
            items: [
              "ласощі, які дуже подобаються собаці (невеликі шматочки, м’які, швидко з’їдаються)",
              "улюблену іграшку (якщо собака любить гратися)",
              "звичайний повідець 2–3 метри",
              "нашийник або шлею, до яких собака звикла",
              "воду та миску (особливо у спекотну погоду)",
              "пакетики для прибирання за собакою",
              "за потреби: намордник (якщо собака вже привчена до нього)",
            ],
          },
        ],
      },
      {
        heading: "Перед заняттям важливо закрити базові потреби собаки",
        blocks: [
          {
            type: "p",
            text: "Собаки навчаються найкраще тоді, коли почуваються комфортно, безпечно та фізично добре. Перед заняттям, будь ласка, зверніть увагу на кілька важливих моментів.",
          },
          { type: "h3", text: "Фізичний комфорт" },
          { type: "p", text: "Перед тренуванням собака повинна:" },
          {
            type: "ul",
            items: [
              "бути здоровою та добре себе почувати",
              "не відчувати болю чи дискомфорту",
              "не мати сильного перегріву або переохолодження",
              "мати доступ до свіжої води",
            ],
          },
          {
            type: "p",
            text: "Якщо собака захворіла, отримала травму або почувається незвично, краще перенести заняття.",
          },
          { type: "h3", text: "Харчування" },
          {
            type: "p",
            text: "Собака не повинна бути дуже голодною або ситою.",
          },
          {
            type: "p",
            text: "Найкраще, якщо вона трохи голодна, тоді ласощі будуть для неї цінною винагородою. Водночас важливо, щоб вона не була настільки голодною, що не може зосередитися на навчанні.",
          },
          { type: "h3", text: "Прогулянка та природна поведінка" },
          { type: "p", text: "Перед заняттям дайте собаці можливість:" },
          {
            type: "ul",
            items: [
              "спокійно погуляти",
              "сходити в туалет",
              "понюхати навколишнє середовище",
              "трохи порухатися у власному темпі",
            ],
          },
          {
            type: "p",
            text: "Не потрібно спеціально «втомлювати» собаку довгими пробіжками чи активними іграми. Мета прогулянки: задовольнити її потреби, а не виснажити.",
          },
          { type: "h3", text: "Емоційний стан" },
          {
            type: "p",
            text: "Для ефективного навчання собака має почуватися у безпеці.",
          },
          {
            type: "p",
            text: "Якщо перед заняттям її налякали, покарали, вона пережила сильний стрес або конфлікт з іншими собаками, їй буде значно важче концентруватися та засвоювати нову інформацію.",
          },
          { type: "h3", text: "Відпочинок" },
          {
            type: "p",
            text: "Як і люди, собаки краще навчаються, коли виспалися.",
          },
          {
            type: "p",
            text: "Особливо це стосується цуценят та молодих собак, яким необхідно багато сну протягом дня. Перевтомлена собака часто стає більш збудженою, менш уважною та гірше справляється із завданнями.",
          },
          {
            type: "p",
            text: "Простіше кажучи, перед заняттям собака має бути:",
          },
          {
            type: "ul",
            items: [
              "здоровою",
              "у комфортному фізичному стані",
              "напоєною",
              "не дуже голодною і не переїденою",
              "вигуляною та такою, що мала можливість дослідити навколишній світ за допомогою нюху",
              "достатньо відпочилою",
              "спокійною та емоційно готовою до навчання",
            ],
          },
          {
            type: "p",
            text: "Мета перед заняттям: не втомити собаку, а створити умови, у яких їй буде легко навчатися.",
          },
        ],
      },
      {
        heading: "Одяг власника",
        blocks: [
          { type: "p", text: "Одягайтеся так, щоб було комфортно рухатися." },
          { type: "p", text: "Рекомендую:" },
          {
            type: "ul",
            items: [
              "зручне взуття",
              "одяг, який не шкода забруднити",
              "кишені або поясну сумку для ласощів",
            ],
          },
        ],
      },
      {
        heading: "Під час заняття",
        blocks: [
          { type: "p", text: "Будь ласка:" },
          {
            type: "ul",
            items: [
              "не хвилюйтеся, якщо щось не виходить одразу: це абсолютно нормально",
              "ставте будь-які запитання",
              "повідомляйте, якщо вам або собаці потрібна перерва",
            ],
          },
          {
            type: "p",
            text: "Моя задача: не оцінювати вас, а допомогти знайти спосіб навчання, який буде комфортним саме для вас і вашої собаки.",
          },
        ],
      },
      {
        heading: "Якщо ви запізнюєтеся або не можете прийти",
        blocks: [
          { type: "p", text: "Будь ласка, повідомте мене якомога раніше." },
        ],
      },
      {
        heading: "Найголовніше",
        blocks: [
          { type: "p", text: "Не хвилюйтеся, якщо ваша собака:" },
          {
            type: "ul",
            items: [
              "хвилюється",
              "не слухається",
              "гавкає",
              "боїться",
              "відволікається",
            ],
          },
          {
            type: "p",
            text: "Саме для цього ми й зустрічаємося. Моє завдання: допомогти вам краще зрозуміти свою собаку, навчитися ефективно взаємодіяти з нею та зробити ваше спільне життя комфортнішим і щасливішим.",
          },
        ],
      },
    ],
    closing: "До зустрічі! 🐶💛",
    back: "На головну",
  },
  en: {
    eyebrow: "First session",
    title: "Preparing for your first session 🐾",
    intro:
      "So glad we're connecting! To make our first session as productive and comfortable as possible for you and your dog, please take a moment to go through these recommendations.",
    sections: [
      {
        heading: "What to bring",
        blocks: [
          {
            type: "ul",
            items: [
              "treats your dog really loves (small, soft, quick to eat)",
              "a favorite toy (if your dog enjoys playing)",
              "a regular leash, 2–3 meters",
              "the collar or harness your dog is used to",
              "water and a bowl (especially in hot weather)",
              "poop bags",
              "a muzzle if needed (if your dog is already used to wearing one)",
            ],
          },
        ],
      },
      {
        heading: "Before the session, your dog's basic needs should be met",
        blocks: [
          {
            type: "p",
            text: "Dogs learn best when they feel comfortable, safe, and physically well. Before the session, please keep a few important things in mind.",
          },
          { type: "h3", text: "Physical comfort" },
          { type: "p", text: "Before training, your dog should:" },
          {
            type: "ul",
            items: [
              "be healthy and feeling well",
              "not be in pain or discomfort",
              "not be overheated or too cold",
              "have access to fresh water",
            ],
          },
          {
            type: "p",
            text: "If your dog is sick, injured, or acting unusual, it's better to reschedule the session.",
          },
          { type: "h3", text: "Feeding" },
          {
            type: "p",
            text: "Your dog shouldn't be very hungry or completely full.",
          },
          {
            type: "p",
            text: "It's best if they're a little hungry, that way treats become a meaningful reward. At the same time, they shouldn't be so hungry that they can't focus on learning.",
          },
          { type: "h3", text: "Walk & natural behavior" },
          {
            type: "p",
            text: "Before the session, give your dog a chance to:",
          },
          {
            type: "ul",
            items: [
              "walk calmly",
              "relieve themselves",
              "sniff their surroundings",
              "move a little at their own pace",
            ],
          },
          {
            type: "p",
            text: 'There\'s no need to deliberately "tire out" your dog with long runs or intense play. The goal of the walk is to meet their needs, not exhaust them.',
          },
          { type: "h3", text: "Emotional state" },
          {
            type: "p",
            text: "Effective learning requires your dog to feel safe.",
          },
          {
            type: "p",
            text: "If your dog was scared, punished, or went through a stressful conflict with another dog before the session, it will be much harder for them to concentrate and absorb new information.",
          },
          { type: "h3", text: "Rest" },
          {
            type: "p",
            text: "Like people, dogs learn better when they're well rested.",
          },
          {
            type: "p",
            text: "This especially applies to puppies and young dogs, who need a lot of sleep during the day. An overtired dog often becomes more excitable, less attentive, and struggles more with tasks.",
          },
          {
            type: "p",
            text: "Put simply, before the session your dog should be:",
          },
          {
            type: "ul",
            items: [
              "healthy",
              "physically comfortable",
              "hydrated",
              "not too hungry and not overfed",
              "walked, with a chance to explore the world through scent",
              "sufficiently rested",
              "calm and emotionally ready to learn",
            ],
          },
          {
            type: "p",
            text: "The goal before a session is not to tire your dog out, but to create conditions where learning comes easily.",
          },
        ],
      },
      {
        heading: "What to wear",
        blocks: [
          { type: "p", text: "Dress so you can move comfortably." },
          { type: "p", text: "I recommend:" },
          {
            type: "ul",
            items: [
              "comfortable shoes",
              "clothes you won't mind getting dirty",
              "pockets or a treat pouch",
            ],
          },
        ],
      },
      {
        heading: "During the session",
        blocks: [
          { type: "p", text: "Please:" },
          {
            type: "ul",
            items: [
              "don't worry if something doesn't work right away, that's completely normal",
              "ask any questions",
              "let me know if you or your dog need a break",
            ],
          },
          {
            type: "p",
            text: "My job isn't to judge you. It's to help find a training approach that's comfortable for you and your dog.",
          },
        ],
      },
      {
        heading: "If you're running late or can't make it",
        blocks: [
          { type: "p", text: "Please let me know as early as possible." },
        ],
      },
      {
        heading: "Most importantly",
        blocks: [
          { type: "p", text: "Don't worry if your dog:" },
          {
            type: "ul",
            items: [
              "gets anxious",
              "doesn't listen",
              "barks",
              "gets scared",
              "gets distracted",
            ],
          },
          {
            type: "p",
            text: "That's exactly why we're meeting. My goal is to help you understand your dog better, learn to work with them effectively, and make life together more comfortable and happier for both of you.",
          },
        ],
      },
    ],
    closing: "See you soon! 🐶💛",
    back: "Back to home",
  },
};

function BlockView({ block }: { block: Block }) {
  if (block.type === "h3") {
    return <h3 className="mt-6 text-base text-foreground">{block.text}</h3>;
  }
  if (block.type === "ul") {
    return (
      <ul className="mt-3 space-y-2.5">
        {block.items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-base leading-relaxed text-foreground/80"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p className="mt-3 text-base leading-relaxed text-foreground/80">
      {block.text}
    </p>
  );
}

function PrepPage() {
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
          <p className="mt-6 text-xs tracking-[0.25em] uppercase text-secondary">
            {c.eyebrow}
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl leading-[1.1] text-foreground">
            {c.title}
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/80">
            {c.intro}
          </p>

          <div className="mt-12 space-y-10">
            {c.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-xl md:text-2xl text-foreground">
                  {s.heading}
                </h2>
                <div>
                  {s.blocks.map((b, i) => (
                    <BlockView key={i} block={b} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-lg text-foreground">{c.closing}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
