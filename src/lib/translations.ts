export type Lang = "uk" | "en";

export type Dict = {
  nav: {
    help: string;
    approach: string;
    about: string;
    stories: string;
    faq: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
    badges: string[];
  };
  help: {
    eyebrow: string;
    title: string;
    lede: string;
    items: { icon: string; title: string; body: string }[];
  };
  approach: {
    eyebrow: string;
    title: string;
    lede: string;
    items: { icon: string; title: string; body: string }[];
  };
  process: {
    eyebrow: string;
    title: string;
    steps: { n: string; title: string; body: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    body: string[];
    educationTitle: string;
    education: string[];
  };
  stories: {
    eyebrow: string;
    title: string;
    quote: string;
    author: string;
  };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  finalCta: {
    title: string;
    titleAccent: string;
    body: string;
    button: string;
    telegramButton: string;
  };
  footer: {
    tagline: string;
    social: string;
    lang: string;
    rights: string;
    privacy: string;
    terms: string;
  };
};

export const translations: Record<Lang, Dict> = {
  uk: {
    nav: {
      help: "Чим я можу допомогти",
      approach: "Мій підхід",
      about: "Про мене",
      stories: "Відгуки",
      faq: "FAQ",
      contact: "Контакти",
      cta: "Записатися на консультацію",
    },
    hero: {
      eyebrow: "HAVKIT · Кінолог",
      title: "Допомагаю людям і собакам краще розуміти одне одного.",
      subtitle:
        "Навчання без страху. Сучасний гуманний підхід, заснований на сучасних наукових дослідженнях. Разом ми зробимо життя з вашим собакою спокійнішим, зрозумілішим і комфортнішим.",
      primary: "Записатися на консультацію",
      secondary: "Дізнатися більше",
      badges: [
        "Сучасний гуманний підхід",
        "Evidence-based методи",
        "Індивідуальний план для кожної команди",
      ],
    },
    help: {
      eyebrow: "Ситуації",
      title: "Чим я можу допомогти",
      lede: "Це не список послуг, а знайомі ситуації, у яких ви можете себе впізнати і в яких я поруч.",
      items: [
        {
          icon: "🐶",
          title: "Підготовка до появи цуценяти",
          body: "Допоможу створити м’який, зрозумілий старт спільного життя, щоб перші тижні стали фундаментом довіри, а не хаосу.",
        },
        {
          icon: "🌿",
          title: "Спокійні прогулянки без стресу",
          body: "Допоможу зробити прогулянки спокійнішими та приємнішими для вас обох, без напруги в руці й у голові.",
        },
        {
          icon: "❤️",
          title: "Реактивність",
          body: "Разом розберемося, що стоїть за гавканням і випадами, і крок за кроком повернемо вашому собаці відчуття безпеки.",
        },
        {
          icon: "🏡",
          title: "Побутові труднощі",
          body: "Пожування речей, стрибки на людей, самотність вдома: знайдемо м’які рішення, які працюють у вашому реальному житті.",
        },
        {
          icon: "🎓",
          title: "Базове навчання",
          body: "Прості й корисні навички для щоденного життя, щоб ви розуміли одне одного з півслова, а не з примусу.",
        },
        {
          icon: "💻",
          title: "Онлайн консультації",
          body: "Для тих, хто живе в іншому місті. Розберемо вашу ситуацію та складемо покроковий план на зв’язку.",
        },
      ],
    },
    approach: {
      eyebrow: "Філософія",
      title: "Мій підхід",
      lede: "Я не працюю зі страхом, тиском чи покараннями. Я вірю, що навчання починається там, де собака відчуває себе в безпеці.",
      items: [
        {
          icon: "❤️",
          title: "Довіра важливіша за страх",
          body: "Собака, який довіряє, вчиться швидше й глибше. Страх дає слухняність на мить, а довіра дає зв’язок на роки.",
        },
        {
          icon: "📚",
          title: "Сучасні дослідження",
          body: "Спираюся лише на методи, ефективність і безпечність яких підтверджена сучасною наукою про поведінку тварин.",
        },
        {
          icon: "🐾",
          title: "Кожен собака унікальний",
          body: "Немає універсальних технік. Є ваш собака, ваш дім, ваш ритм, і план будується саме навколо цього.",
        },
        {
          icon: "🌿",
          title: "Навчання має покращувати життя",
          body: "Якщо після заняття вам і собаці стає легше жити разом, ми на правильному шляху. Це головний критерій.",
        },
      ],
    },
    process: {
      eyebrow: "Як ми працюємо",
      title: "Спокійний, зрозумілий шлях разом",
      steps: [
        {
          n: "01",
          title: "Познайомимося",
          body: "Поговоримо про вас, ваш дім і вашого собаку. Без оцінок і поспіху.",
        },
        {
          n: "02",
          title: "Зрозуміємо причину труднощів",
          body: "Подивимося глибше за симптом: що саме стоїть за поведінкою.",
        },
        {
          n: "03",
          title: "Створимо індивідуальний план",
          body: "Покрокові, реалістичні дії, які вписуються у ваше життя.",
        },
        {
          n: "04",
          title: "Працюємо у комфортному темпі",
          body: "Без тиску й дедлайнів. Стільки часу, скільки потрібно саме вам.",
        },
        {
          n: "05",
          title: "Радіємо вашим успіхам",
          body: "Кожен маленький крок означає велику зміну для вас обох.",
        },
      ],
    },
    about: {
      eyebrow: "Про мене",
      title: "Мене звати Анастасія.",
      body: [
        "Я закінчила навчання в Одеській школі службового собаківництва.",
        "Я постійно проходжу українські та американські курси, читаю сучасну літературу з кінології та стежу за новими дослідженнями. Мені важливо працювати лише з методами, ефективність яких підтверджена сучасною наукою.",
        "Я вірю, що хороше навчання не про контроль, а навпаки про довіру, взаєморозуміння та комфортне життя людини та собаки разом.",
      ],
      educationTitle: "Освіта та практика",
      education: [
        "Одеська школа службового собаківництва",
        "Постійне професійне навчання",
        "Українські курси з поведінки собак",
        "Американські курси (evidence-based підхід)",
        "Сучасна кінологічна література",
        "Практика з реактивними та тривожними собаками",
      ],
    },
    stories: {
      eyebrow: "Відгуки",
      title: "Що кажуть клієнти",
      quote:
        "Нам сподобалося абсолютно все! 🥹 Дуже сподобалася ти як людина, твоє ставлення до Мії та твій підхід до роботи. Видно, що ти дуже любиш свою справу й справді хочеш допомогти. Після наших занять ми можемо набагато спокійніше гуляти майже без постійного гавкання, і для мене це просто величезний результат. Команди, яких ти нас навчила, дуже корисні, і найголовніше, вони дійсно працюють. Нам стало набагато легше розуміти Мію та правильно поводитися в різних ситуаціях. Ми безмежно задоволені результатом і дуже вдячні тобі за терпіння, підтримку та всі поради. Дуже раді, що обрали саме тебе. 💞",
      author: "Крістіна, власниця Мії",
    },
    faq: {
      eyebrow: "Питання",
      title: "Що зазвичай хочуть спитати",
      items: [
        {
          q: "Чи використовуєте ви покарання?",
          a: "Ні. У моїй роботі немає місця для страху, болю чи залякування. Я працюю через довіру, зрозумілі правила та підкріплення бажаної поведінки. Саме такий підхід підтверджений сучасною наукою як найбільш ефективний і безпечний для психіки собаки.",
        },
        {
          q: "З якого віку можна починати?",
          a: "Починати можна з перших днів удома. Для цуценят це м’яка адаптація, знайомство зі світом і формування здорових звичок. Для дорослих собак ніколи не пізно: я працювала з собаками різного віку та історії.",
        },
        {
          q: "Скільки потрібно занять?",
          a: "Це залежить від вашої ситуації. Іноді достатньо однієї консультації, щоб зняти основну напругу. Іноді ми працюємо кілька місяців у комфортному для вас темпі. Я ніколи не продаю “пакети” заради пакетів.",
        },
        {
          q: "Чи працюєте онлайн?",
          a: "Так. Онлайн-формат добре підходить для розбору ситуацій, побудови плану та супроводу між очними заняттями. Ми зідзвонюємось, ви показуєте вашу ситуацію, і разом рухаємось далі.",
        },
        {
          q: "Чи можна звернутися лише за консультацією?",
          a: "Звичайно. Іноді достатньо однієї глибокої розмови, щоб ви побачили ситуацію по-новому та зрозуміли наступні кроки. Ніяких зобов’язань продовжувати немає.",
        },
      ],
    },
    finalCta: {
      title: "Готові почати?",
      titleAccent: "Напишіть мені, і ми разом розберемось, із чого почати.",
      body: "Розкажіть коротко про себе й свого собаку, я підкажу перші кроки.",
      button: "Записатися на консультацію",
      telegramButton: "Написати в Telegram",
    },
    footer: {
      tagline: "Гуманне навчання. Довіра замість страху.",
      social: "Соцмережі",
      lang: "Мова",
      rights: "Усі права захищені.",
      privacy: "Політика конфіденційності",
      terms: "Умови надання послуг",
    },
  },

  en: {
    nav: {
      help: "How I can help",
      approach: "My approach",
      about: "About me",
      stories: "Stories",
      faq: "FAQ",
      contact: "Contact",
      cta: "Book a consultation",
    },
    hero: {
      eyebrow: "HAVKIT · Dog trainer",
      title: "Helping people and dogs understand each other.",
      subtitle:
        "Training without fear. A modern, humane approach grounded in current scientific research. Together we make life with your dog calmer, clearer, and more comfortable.",
      primary: "Book a consultation",
      secondary: "Learn more",
      badges: [
        "Modern humane approach",
        "Evidence-based methods",
        "An individual plan for every team",
      ],
    },
    help: {
      eyebrow: "Situations",
      title: "How I can help",
      lede: "Not a list of services, but a set of familiar moments you might recognise, and where I can walk beside you.",
      items: [
        {
          icon: "🐶",
          title: "Preparing for a puppy",
          body: "A soft, clear start to life together, so the first weeks become the foundation of trust, not chaos.",
        },
        {
          icon: "🌿",
          title: "Calm walks without stress",
          body: "Walks that feel lighter for both of you, without tension in the leash or in your head.",
        },
        {
          icon: "❤️",
          title: "Reactivity",
          body: "We look beneath the barking and lunging, and step by step return a feeling of safety to your dog.",
        },
        {
          icon: "🏡",
          title: "Everyday difficulties",
          body: "Chewing, jumping, being alone at home: gentle solutions that actually fit your real life.",
        },
        {
          icon: "🎓",
          title: "Foundation skills",
          body: "Simple, useful skills for daily life, so you understand each other easily, without pressure.",
        },
        {
          icon: "💻",
          title: "Online consultations",
          body: "For those who live in another city. We look at your situation and build a step-by-step plan together, remotely.",
        },
      ],
    },
    approach: {
      eyebrow: "Philosophy",
      title: "My approach",
      lede: "I don’t work with fear, pressure or punishment. I believe learning begins where a dog feels safe.",
      items: [
        {
          icon: "❤️",
          title: "Trust matters more than fear",
          body: "A dog who trusts learns faster and deeper. Fear buys obedience for a moment; trust builds a bond for years.",
        },
        {
          icon: "📚",
          title: "Modern research",
          body: "I rely only on methods whose effectiveness and safety are backed by current animal behaviour science.",
        },
        {
          icon: "🐾",
          title: "Every dog is unique",
          body: "There are no universal techniques. There is your dog, your home, your rhythm, and a plan built around that.",
        },
        {
          icon: "🌿",
          title: "Training should improve life",
          body: "If life together feels easier after a session, we’re on the right path. That is the real measure.",
        },
      ],
    },
    process: {
      eyebrow: "How we work together",
      title: "A calm, clear path together",
      steps: [
        {
          n: "01",
          title: "We get to know each other",
          body: "We talk about you, your home and your dog. No judgement, no rush.",
        },
        {
          n: "02",
          title: "We understand the cause",
          body: "We look beyond the symptom to what really drives the behaviour.",
        },
        {
          n: "03",
          title: "We build an individual plan",
          body: "Realistic, step-by-step actions that fit into your everyday life.",
        },
        {
          n: "04",
          title: "We work at a comfortable pace",
          body: "No pressure, no deadlines. As much time as you actually need.",
        },
        {
          n: "05",
          title: "We celebrate your progress",
          body: "Every small step is a real change for both of you.",
        },
      ],
    },
    about: {
      eyebrow: "About me",
      title: "My name is Anastasia.",
      body: [
        "I completed my training at the Odesa School of Service Dog Handling.",
        "I continuously take Ukrainian and American courses, read modern cynology literature and follow new research. It matters to me to work only with methods whose effectiveness is confirmed by current science.",
        "I believe good training isn’t about control. Instead, it’s about trust, mutual understanding, and a comfortable life for a person and a dog together.",
      ],
      educationTitle: "Education & practice",
      education: [
        "Odesa School of Service Dog Handling",
        "Continuous professional development",
        "Ukrainian courses in dog behaviour",
        "American courses (evidence-based approach)",
        "Modern cynology literature",
        "Practice with reactive and anxious dogs",
      ],
    },
    stories: {
      eyebrow: "Reviews",
      title: "What clients say",
      quote:
        "We loved absolutely everything! 🥹 We loved you as a person, your attitude toward Mia and your approach to your work. You can see that you truly love what you do and really want to help. After our sessions we can walk much more calmly, almost without constant barking, and for me this is a huge result. The cues you taught us are so useful, and most importantly, they actually work. It has become much easier to understand Mia and to know how to act in different situations. We are endlessly happy with the result and so grateful for your patience, support and every piece of advice. So glad we chose you. 💞",
      author: "Kristina, Mia’s human",
    },
    faq: {
      eyebrow: "Questions",
      title: "What people usually want to ask",
      items: [
        {
          q: "Do you use punishment?",
          a: "No. There is no place in my work for fear, pain or intimidation. I work through trust, clear rules and reinforcement of desired behaviour, the approach confirmed by modern science as the most effective and safest for a dog’s wellbeing.",
        },
        {
          q: "At what age can we start?",
          a: "You can start from the first days at home. For puppies it’s a gentle adaptation and building healthy habits. For adult dogs it’s never too late: I’ve worked with dogs of all ages and histories.",
        },
        {
          q: "How many sessions are needed?",
          a: "It depends on your situation. Sometimes one consultation is enough to relieve the main tension. Sometimes we work together for a few months, at a pace that feels comfortable to you. I never sell ‘packages’ for the sake of it.",
        },
        {
          q: "Do you work online?",
          a: "Yes. The online format works well for reviewing situations, building a plan and supporting you between in-person sessions. We meet on a call, you show me your context, and we move forward together.",
        },
        {
          q: "Can I just book a single consultation?",
          a: "Of course. Sometimes one honest conversation is enough to see your situation differently and understand the next steps. There is no obligation to continue.",
        },
      ],
    },
    finalCta: {
      title: "Ready to start?",
      titleAccent: "Message me, and we'll figure out the first step together.",
      body: "Tell me a little about you and your dog, and I'll suggest where to begin.",
      button: "Book a consultation",
      telegramButton: "Message on Telegram",
    },
    footer: {
      tagline: "Humane training. Trust instead of fear.",
      social: "Social",
      lang: "Language",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
};
