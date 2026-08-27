/**
 * Отраслевые разделы портфолио («наши работы с ресторанами и кафе» и т.д.).
 *
 * id      — ключ, который проставляется в поле `industry` каждой работы
 *           в ServicesData.js. Одна работа может входить в несколько разделов.
 * ru / en — подпись вкладки. Вторая используется переключателем языка.
 * desc    — подзаголовок раздела на странице портфолио.
 * color   — акцент вкладки; та же палитра, что у категорий услуг.
 */
export const INDUSTRIES = [
  {
    id: "food",
    ru: "Еда",
    en: "Food & Beverage",
    desc: "Рестораны, кафе, бары и продуктовый ритейл: сайты с меню, онлайн-заказ, клубные программы и визуал для соцсетей.",
    descEn: "Restaurants, cafés, bars and grocery retail: menu sites, online ordering, loyalty clubs and social content.",
    color: "#c0562f",
  },
  {
    id: "fashion",
    ru: "Одежда",
    en: "Fashion & Apparel",
    desc: "Бренды одежды и мерч: айдентика, принты, лукбуки и интернет-магазины.",
    descEn: "Clothing brands and merch: identity, prints, lookbooks and online stores.",
    color: "#8c5bd8",
  },
  {
    id: "realty",
    ru: "Недвижимость",
    en: "Real Estate",
    desc: "Застройщики, агентства и архитектурные бюро: презентационные сайты, 3D и полиграфия.",
    descEn: "Developers, agencies and architecture studios: presentation sites, 3D and print.",
    color: "#3a6ea5",
  },
  {
    id: "auto",
    ru: "Авто",
    en: "Automotive",
    desc: "Транспорт и сервис: промо-сайты, оклейка, айдентика и съёмка.",
    descEn: "Transport and service: promo sites, vehicle wraps, identity and production.",
    color: "#7b2ff7",
  },
  {
    id: "beauty",
    ru: "Бьюти-сфера",
    en: "Beauty",
    desc: "Салоны, мастера и косметические бренды: сайты с онлайн-записью, 3D-рендеры продукта и контент.",
    descEn: "Salons, individual masters and cosmetics brands: booking sites, product 3D and content.",
    color: "#d4568c",
  },
  {
    id: "medicine",
    ru: "Медицина и фармацевтика",
    en: "Medicine & Pharma",
    desc: "Клиники, лаборатории и фармбренды: строгая айдентика, доступные интерфейсы, доверие в каждом элементе.",
    descEn: "Clinics, labs and pharma brands: precise identity, accessible interfaces, trust by design.",
    color: "#2b9e8f",
  },
  {
    id: "fintech",
    ru: "Финтех и крипта",
    en: "Fintech & Crypto",
    desc: "Финансовые сервисы, платформы и Web3: продуктовый дизайн, дашборды, сложные интерфейсы данных.",
    descEn: "Financial services, platforms and Web3: product design, dashboards, complex data interfaces.",
    color: "#2248a8",
  },
  {
    id: "luxury",
    ru: "Luxury-сегмент",
    en: "Luxury",
    desc: "Часы, ювелирика и премиальные бренды: сдержанная типографика, материальность, 3D-конфигураторы.",
    descEn: "Watches, jewellery and premium brands: restrained typography, materiality, 3D configurators.",
    color: "#a8894f",
  },
  {
    id: "event",
    ru: "Ивент-индустрия",
    en: "Events",
    desc: "Площадки, организаторы и спорт: промо-сайты, бронирование, афиши и контент под запуск.",
    descEn: "Venues, organisers and sports: promo sites, bookings, posters and launch content.",
    color: "#5a7cf0",
  },
  {
    id: "b2b",
    ru: "B2B-услуги",
    en: "B2B Services",
    desc: "Компании, которые продают другим компаниям: позиционирование, презентации, корпоративные сайты.",
    descEn: "Companies selling to companies: positioning, decks and corporate sites.",
    color: "#4a4a4a",
  },
  {
    id: "dealers",
    ru: "Автосалоны",
    en: "Car Dealerships",
    desc: "Дилерские центры и трейд-ин: каталоги, конфигураторы, заявки и офлайн-носители.",
    descEn: "Dealerships and trade-in: catalogues, configurators, lead capture and print.",
    color: "#5c6470",
  },
  {
    id: "nko",
    ru: "НКО",
    en: "Non-Profit",
    desc: "Фонды и общественные проекты: понятная коммуникация, сбор пожертвований, отчётность.",
    descEn: "Foundations and public projects: clear communication, donations and transparency.",
    color: "#3f9668",
  },
  {
    id: "gov",
    ru: "Государственные учреждения",
    en: "Public Sector",
    desc: "Городские и государственные проекты: благоустройство, визуализации, доступная среда.",
    descEn: "City and state projects: urban development, visualisation, accessible environments.",
    color: "#6b7f8f",
  },
  {
    id: "media",
    ru: "СМИ",
    en: "Media",
    desc: "Издания, блоги и медиапроекты: сетки, типографика, читаемость на любом экране.",
    descEn: "Publications, blogs and media projects: grids, typography, readability everywhere.",
    color: "#b8433f",
  },
  {
    id: "vizitka",
    ru: "Сайт-визитка",
    en: "Landing & Business Card",
    desc: "Компактные сайты для специалистов и небольших студий: суть, портфолио и заявка на одном экране.",
    descEn: "Compact sites for specialists and small studios: essence, portfolio and enquiry in one flow.",
    color: "#8f8f8f",
  },
  {
    id: "saas",
    ru: "SaaS",
    en: "SaaS",
    desc: "Продуктовые команды: лендинги, дизайн-системы, интерфейсы приложений и админ-панелей.",
    descEn: "Product teams: landings, design systems, app and admin interfaces.",
    color: "#3864db",
  },
  {
    id: "webviz",
    ru: "Web-визуализация строительных объектов",
    en: "Architectural Web Visualisation",
    desc: "3D строительных и ландшафтных объектов прямо в браузере: обходы, ракурсы, материалы.",
    descEn: "3D of construction and landscape objects in the browser: walkthroughs, angles, materials.",
    color: "#9db4f5",
  },
  {
    id: "ecosystems",
    ru: "Экосистемы",
    en: "Ecosystems",
    desc: "Проекты, где сайт — только вход: связка из витрины, приложения, клубной программы, кассы и рабочего экрана для персонала. Один бренд, одна база, все роли внутри.",
    descEn: "Projects where the site is only the entrance: storefront, app, loyalty club, checkout and a staff-facing dashboard. One brand, one database, every role inside.",
    color: "#1f7a6b",
  },
  {
    id: "holdings",
    ru: "Our Holdings",
    en: "Our Holdings",
    desc: "Собственные проекты бюро — мы сами себе клиент, поэтому здесь видно, как мы работаем без компромиссов.",
    descEn: "The studio's own ventures — we are our own client here, so nothing is compromised.",
    color: "#111111",
  },
];

export const INDUSTRY_MAP = Object.fromEntries(INDUSTRIES.map((i) => [i.id, i]));

export function getIndustry(id) {
  return INDUSTRY_MAP[id] || null;
}
