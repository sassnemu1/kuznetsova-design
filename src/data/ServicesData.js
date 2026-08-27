/**
 * Каталог направлений и работ.
 *
 * Поле `industry` связывает работу с отраслевыми разделами портфолио
 * (см. IndustriesData.js). Одна работа может входить в несколько разделов.
 *
 * Поле `concept: true` означает инициативный концепт бюро, а не заказ клиента.
 * Такие работы помечаются на сайте бейджем «Концепт» — это принципиально:
 * выдавать инициативную работу за выполненный заказ нельзя.
 */
export const SERVICES_DATA = [
  {
    id: "01",
    tag: "Strategy",
    title: "Brand\nIdentity",
    desc: "Логотипы, визуальные системы, типографика, бренд-стратегия и рыночное позиционирование.",
    color: "#3864db",
    image: "/serv1.avif",
    works: [
      {
        slug: "lastochka-ai",
        title: "Lastochka.AI",
        sub: "Логотип и фирменный стиль",
        year: "2026",
        client: "Lastochka.AI",
        industry: ["b2b", "saas"],
        description:
          "Минималистичный логотип-птица для компании в сфере искусственного интеллекта: символ движения и скорости с футуристическими AI-акцентами, палитра и типографика для всех носителей.",
        tags: ["Логотип", "Брендинг", "AI"],
        image: "/works/lastochka-1.webp",
        gallery: ["/works/lastochka-2.webp"],
        thumbBg: "linear-gradient(135deg,#050505,#2a2a2a)",
      },
      {
        slug: "kuznetsova-buro",
        title: "Кузнецова",
        sub: "Логотип и айдентика",
        year: "2026",
        client: "Дизайн-бюро «Кузнецова»",
        industry: ["realty", "holdings", "b2b", "vizitka"],
        description:
          "Лаконичный типографический логотип для дизайн-бюро архитектурных и интерьерных решений. Монограмма «КЯ» и сдержанная монохромная гамма подчёркивают экспертность и статусность бренда.",
        tags: ["Логотип", "Типографика", "Айдентика"],
        image: "/works/kuznetsova-logo-1.webp",
        gallery: ["/works/kuznetsova-logo-2.webp"],
        thumbBg: "linear-gradient(135deg,#14192e,#3a4668)",
      },
      {
        slug: "art-cafe-tverskaya",
        title: "ART CAFÉ",
        sub: "Тверская, 9 — запуск площадки",
        year: "2026",
        client: "ART CAFÉ, Москва — собственный проект бюро",
        industry: ["food", "holdings", "event", "ecosystems"],
        description:
          "Полный пакет запуска кафе на Тверской: имя, айдентика, меню, полиграфия, сайт и контент-план. Собственная площадка бюро — здесь мы одновременно клиент и подрядчик, поэтому решения приняты без компромиссов и проверяются выручкой.",
        tags: ["Айдентика", "Запуск", "Полиграфия"],
        thumbBg: "linear-gradient(135deg,#171310,#8a6a44)",
      },
    ],
  },
  {
    id: "02",
    tag: "Development",
    title: "Web & Mobile\nDevelopment",
    desc: "Премиальные сайты с авторской анимацией, сложными взаимодействиями и высокой производительностью.",
    color: "#2248a8",
    image: "/serv3.avif",
    works: [
      {
        slug: "browisvika",
        title: "Брови by Vika",
        sub: "Сайт-портфолио мастера",
        year: "2026",
        client: "Brow by Vika, Ярославль",
        industry: ["beauty", "vizitka"],
        description:
          "Сайт бровиста из Ярославля: авторские иллюстрации, GSAP-анимации, онлайн-запись, портфолио и SEO-оптимизация.",
        tags: ["Next.js", "GSAP", "SEO"],
        url: "https://browisvika.ru/",
        image: "/works/browisvika.webp",
        thumbBg: "linear-gradient(135deg,#1a1a1a,#4a4a4a)",
      },
      {
        slug: "prime-bus",
        title: "Prime Bus",
        sub: "Промо-сайт party-bus",
        year: "2026",
        client: "Prime Bus, Москва",
        industry: ["event", "auto", "luxury"],
        description:
          "«Не автобус. Клуб на колёсах» — промо-сайт с неоновой айдентикой, кинетической типографикой и онлайн-бронированием.",
        tags: ["React", "GSAP", "Landing"],
        url: "https://prime-bus.moscow/",
        image: "/works/prime-bus.webp",
        thumbBg: "linear-gradient(135deg,#12031f,#7b2ff7)",
      },
      {
        slug: "online-bazar",
        title: "Онлайн Базар",
        sub: "Интернет-магазин продуктов",
        year: "2026",
        client: "Online Базар, Москва",
        industry: ["food", "b2b", "ecosystems"],
        description:
          "Магазин свежих продуктов с доставкой: каталог, корзина, акции, оптовые заказы и интеграция с мессенджерами.",
        tags: ["Next.js", "E-commerce", "UX/UI"],
        url: "https://online-bazar.shop/",
        image: "/works/online-bazar.webp",
        thumbBg: "linear-gradient(135deg,#0a1628,#2bb673)",
      },
      {
        slug: "tsedro",
        title: "TSEDRO",
        sub: "Сайт часового ателье",
        year: "2026",
        client: "Tsedro, Москва — часовое ателье, с 2005 года",
        industry: ["luxury", "b2b", "vizitka"],
        description:
          "Сайт московского ателье бесповоротно штучных часов. Ателье не магазин: цен и корзины нет, воронка ведёт к разговору с мастером. Отсюда сдержанная типографика, крупная подача материалов и путь «изделие → мастер → заявка».",
        tags: ["Next.js", "Luxury", "Каталог"],
        thumbBg: "linear-gradient(135deg,#14100c,#8a7145)",
      },
      {
        slug: "russkoe-vremya",
        title: "Русское время",
        sub: "Часовой магазин и производство",
        year: "2026",
        client: "Русское время / RusWatch, Москва — 20+ лет на рынке",
        industry: ["luxury", "ecosystems", "b2b"],
        description:
          "Проект для производителя и продавца часов с живым каталогом на несколько сотен артикулов. Задача — сохранить работающую товарную логику и снять с неё визуальный возраст: карточка товара, фильтры, наличие и понятный путь к покупке.",
        tags: ["E-commerce", "Каталог", "UX/UI"],
        thumbBg: "linear-gradient(135deg,#1a1512,#9c6b3a)",
      },
      {
        slug: "ambar-cascais",
        title: "âmbar",
        sub: "Цифровая платформа ресторана",
        year: "2026",
        client: "âmbar, Кашкайш (Португалия)",
        concept: true,
        industry: ["food", "ecosystems", "event"],
        description:
          "Концепт цифровой платформы для ресторана в Кашкайше: живые «часы âmbar» с обратным отсчётом до заката, полная карта с заказом навынос, клубное PWA-приложение, дашборд кухни и восемь языков интерфейса, включая RTL.",
        tags: ["Next.js", "PWA", "Мультиязычность"],
        thumbBg: "linear-gradient(135deg,#2b1a0a,#c9832b)",
      },
      {
        slug: "cacau-rooftop",
        title: "Cacau Rooftop",
        sub: "Сайт и клубное приложение",
        year: "2026",
        client: "Cacau Rooftop, Кашкайш (Португалия)",
        concept: true,
        industry: ["food", "ecosystems", "event"],
        description:
          "Концепт для руфтоп-бара: сайт, клубная программа с внутренней валютой, вкладка заказа с выбором времени самовывоза, готовая к подключению Stripe касса и отдельный экран кухни.",
        tags: ["Next.js", "PWA", "Онлайн-заказ"],
        thumbBg: "linear-gradient(135deg,#1c1410,#6b8f5e)",
      },
      {
        slug: "hifen-cascais",
        title: "Hífen",
        sub: "Ресторан и бар — платформа",
        year: "2026",
        client: "Hífen Restaurant & Bar, Кашкайш (Португалия)",
        concept: true,
        industry: ["food", "ecosystems"],
        description:
          "Концепт платформы для ресторана: полная карта с маркировкой аллергенов, клубная программа, самовывоз с назначенным временем, касса под Stripe и дашборд кухни.",
        tags: ["Next.js", "Аллергены", "PWA"],
        thumbBg: "linear-gradient(135deg,#101418,#5e7a8f)",
      },
      {
        slug: "leto-cascais",
        title: "LETO",
        sub: "Café Bar — платформа",
        year: "2026",
        client: "LETO Café Bar, Кашкайш (Португалия)",
        concept: true,
        industry: ["food", "ecosystems"],
        description:
          "Концепт для кафе-бара: меню с вариантами блюд, клубная программа «sóis», самовывоз по расписанию, готовая к оплате касса и рабочий экран для кухни.",
        tags: ["Next.js", "PWA", "Меню"],
        thumbBg: "linear-gradient(135deg,#14200f,#d8a13a)",
      },
      {
        slug: "spi-cascais",
        title: "Spi",
        sub: "Restaurante & Bar — платформа",
        year: "2026",
        client: "Spi | Restaurante & Bar, Марина Кашкайша (Португалия)",
        concept: true,
        industry: ["food", "ecosystems", "event"],
        description:
          "Концепт для ресторана в марине: сайт с картой и террасой как главным героем, онлайн-заказ, клубная механика и материалы для соцсетей. Все непроверенные данные в пакете помечены отдельно — концепт готов к сверке с владельцем.",
        tags: ["Next.js", "Онлайн-заказ", "SMM"],
        thumbBg: "linear-gradient(135deg,#0b1620,#2e7f9e)",
      },
      {
        slug: "yam-cascais",
        title: "YAM",
        sub: "Restaurant Bar — платформа",
        year: "2026",
        client: "YAM, Кашкайш (Португалия)",
        concept: true,
        industry: ["food", "ecosystems"],
        description:
          "Концепт цифровой платформы для ресторана: карта из официального PDF, онлайн-заказ, клубная программа и связка сайта с соцсетями в едином визуальном языке.",
        tags: ["Next.js", "Меню", "PWA"],
        thumbBg: "linear-gradient(135deg,#1a0f14,#b8433f)",
      },
      {
        slug: "crafty-cellar",
        title: "The Crafty Cellar",
        sub: "Бар пивоварни — концепт-пакет",
        year: "2026",
        client: "The Crafty Cellar / Pato Brewing, Кашкайш (Португалия)",
        concept: true,
        industry: ["food", "ecosystems", "event"],
        description:
          "Концепт для домашнего бара единственной пивоварни Кашкайша: сайт с ротацией кранов, карточки сортов, караоке-вечера и афиши. Пивоварня с рейтингом 4.6★ и тысячами отметок в Untappd — цифровая витрина подтягивается к этому уровню.",
        tags: ["Next.js", "Крафт", "Афиши"],
        thumbBg: "linear-gradient(135deg,#14100a,#b87a2a)",
      },
      {
        slug: "assis-and-sons",
        title: "Assis&Sons",
        sub: "Витрина часового магазина",
        year: "2026",
        client: "Assis&Sons, Марина Кашкайша (Португалия)",
        concept: true,
        industry: ["luxury", "fashion", "ecosystems"],
        description:
          "Концепт цифровой витрины для магазина современных и винтажных часов: коллекция с реальными характеристиками и состоянием каждого экземпляра, крупная съёмка и путь к сделке через диалог, а не корзину.",
        tags: ["Каталог", "Luxury", "PWA"],
        thumbBg: "linear-gradient(135deg,#1b1a17,#8a7a5c)",
      },
    ],
  },
  {
    id: "04",
    tag: "3D Design",
    title: "3D & Motion\nDesign",
    desc: "3D-графика, сложные анимации, переходы и продвинутое 3D-моделирование.",
    color: "#9db4f5",
    image: "/serv4.avif",
    works: [
      {
        slug: "park-fountain",
        title: "Фонтан в парке",
        sub: "3D-визуализация благоустройства",
        year: "2026",
        client: "Концепция благоустройства парка",
        industry: ["gov", "webviz", "realty"],
        description:
          "Фотореалистичная 3D-визуализация фонтана для концепции благоустройства парка: детальная проработка воды, света и материалов, гармония объекта с ландшафтом на разных ракурсах.",
        tags: ["Экстерьер", "Ландшафт", "Фотореализм"],
        image: "/works/fountain-1.webp",
        gallery: ["/works/fountain-2.webp", "/works/fountain-3.webp", "/works/fountain-4.webp"],
        thumbBg: "linear-gradient(135deg,#8fa8b8,#c9d6dd)",
      },
      {
        slug: "dream-cosmetics",
        title: "Dream Cosmetics",
        sub: "3D-рендеры для соцсетей",
        year: "2026",
        client: "Магазин уходовой косметики",
        industry: ["beauty", "fashion", "medicine"],
        description:
          "Серия стилизованных 3D-сцен для соцсетей магазина уходовой косметики: минимализм, мягкие оттенки и акцент на текстурах, свете и упаковке — премиальность бренда в каждом кадре.",
        tags: ["Product 3D", "Интерьер", "SMM"],
        image: "/works/cosmetics-1.webp",
        gallery: ["/works/cosmetics-2.webp", "/works/cosmetics-3.webp", "/works/cosmetics-4.webp"],
        thumbBg: "linear-gradient(135deg,#d8cfc2,#5e9c8d)",
      },
    ],
  },
  {
    id: "03",
    tag: "Digital",
    title: "Social Media\nContent Creation",
    desc: "Контент-стратегия, визуальный стиль, шаблоны и съёмка для социальных сетей.",
    color: "#6b9eff",
    image: "/serv2.avif",
    works: [
      {
        slug: "delosport-summer",
        title: "ДелоСпорт",
        sub: "SMM-визуалы летнего сезона",
        year: "2026",
        client: "Спортивный комплекс «ДелоСпорт», Москва",
        industry: ["event", "b2b", "media"],
        description:
          "Серия постов в едином фирменном стиле для спортивного комплекса: маскот-помощник, летний план работ и старт нового сезона — информативная и эстетичная лента.",
        tags: ["SMM", "Маскот", "Иллюстрация"],
        image: "/works/delosport-1.webp",
        gallery: ["/works/delosport-2.webp", "/works/delosport-3.webp"],
        thumbBg: "linear-gradient(135deg,#2743b8,#5a7cf0)",
      },
      {
        slug: "matchatata",
        title: "Matchatata",
        sub: "Визуальная система матча-бара",
        year: "2026",
        client: "Matchatata, Кашкайш (Португалия)",
        concept: true,
        industry: ["food", "media", "fashion"],
        description:
          "Концепт визуальной системы для матча-бара: палитра из матчевой зелени, глубокого бирюзового и тёплого крема, кампанийный плакат «NOT CEREMONIAL — INTENTIONAL», шаблоны постов и меню. Каждый токен помечен как предложение — система готова уступить брендбуку владельца.",
        tags: ["Брендбук", "SMM", "Плакат"],
        thumbBg: "linear-gradient(135deg,#0f1c14,#7fae5a)",
      },
    ],
  },
  {
    id: "05",
    tag: "Creative",
    title: "Art\nDirection",
    desc: "Креативное руководство, визуальный язык и концептуальная разработка проектов.",
    color: "#1a3a8f",
    image: "/serv5.avif",
    works: [
      {
        slug: "smoke-by-d-cigars",
        title: "Smoke by D-Cigars",
        sub: "Арт-дирекшн сигарного лаунжа",
        year: "2026",
        client: "Smoke by D-Cigars, Марина Кашкайша (Португалия)",
        concept: true,
        industry: ["food", "luxury", "event", "ecosystems"],
        description:
          "Концепт-пакет для единственного сигарного лаунжа Кашкайша: чёрно-золотой цифровой дом в регистре печатного меню заведения, возрастной гейт, полная карта, клубная механика с начислением только по бару и кафетерии, презентация хьюмидора и план перезапуска соцсетей с нуля.",
        tags: ["Арт-дирекшн", "Luxury", "Брендбук"],
        thumbBg: "linear-gradient(135deg,#0a0908,#b89550)",
      },
    ],
  },
];

/* ─── Хелперы для страниц работ ────────────────────────────────── */

export function getWorkBySlug(slug) {
  for (const service of SERVICES_DATA) {
    const work = service.works.find((w) => w.slug === slug);
    if (work) {
      return {
        ...work,
        serviceTag: service.tag,
        serviceTitle: service.title.replace("\n", " "),
        serviceColor: service.color,
        serviceId: service.id,
      };
    }
  }
  return null;
}

export function getAllWorkSlugs() {
  return SERVICES_DATA.flatMap((s) => s.works.map((w) => w.slug)).filter(Boolean);
}

/** Все работы одним плоским списком, с данными родительского направления. */
export function getAllWorks() {
  return SERVICES_DATA.flatMap((service) =>
    service.works.map((w) => ({
      ...w,
      serviceTag: service.tag,
      serviceTitle: service.title.replace("\n", " "),
      serviceColor: service.color,
      serviceId: service.id,
    }))
  );
}

/** Работы конкретного отраслевого раздела портфолио. */
export function getWorksByIndustry(industryId) {
  return getAllWorks().filter((w) => w.industry?.includes(industryId));
}

/** Сколько работ в каждом отраслевом разделе: { food: 12, luxury: 4, ... } */
export function getIndustryCounts() {
  const counts = {};
  for (const work of getAllWorks()) {
    for (const id of work.industry || []) {
      counts[id] = (counts[id] || 0) + 1;
    }
  }
  return counts;
}

// Следующая работа (для навигации внутри страницы работы)
export function getAdjacentWorks(slug) {
  const allWorks = getAllWorks();
  const idx = allWorks.findIndex((w) => w.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? allWorks[idx - 1] : allWorks[allWorks.length - 1],
    next: idx < allWorks.length - 1 ? allWorks[idx + 1] : allWorks[0],
  };
}
