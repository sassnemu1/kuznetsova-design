/**
 * Плагины — отраслевые дашборды и CRM, которые бюро ставит поверх сайта клиента.
 *
 * Каждый плагин привязан к отраслевому разделу портфолио (industry id из
 * IndustriesData.js), чтобы вкладка «Еда» в портфолио и модуль для ресторанов
 * говорили об одном и том же.
 *
 * Личный кабинет клиента живёт на отдельном поддомене dash.kuznetsova.design.
 * status: "live"  — модуль уже работает у клиентов;
 *         "beta"  — рабочая версия, обкатывается на первых проектах;
 *         "soon"  — в разработке, собираем предзаказы.
 */
export const DASH_URL = "https://dash.kuznetsova.design";

export const PLUGINS = [
  {
    id: "resto",
    industry: "food",
    ru: "Ресторан и кафе",
    en: "Restaurants & Cafés",
    status: "live",
    lead: "Меню, заказы и кухня в одном окне — без блокнотов и переписок в мессенджере.",
    leadEn: "Menu, orders and kitchen in one window — no notebooks, no messenger threads.",
    features: [
      { ru: "Редактор меню: позиции, цены, стоп-лист, аллергены", en: "Menu editor: items, prices, 86-list, allergens" },
      { ru: "Онлайн-заказ и самовывоз по расписанию", en: "Online ordering and scheduled pickup" },
      { ru: "Экран кухни: очередь заказов в реальном времени", en: "Kitchen display: live order queue" },
      { ru: "Клубная программа и начисление бонусов", en: "Loyalty club with points" },
      { ru: "Брони столов и загрузка зала по часам", en: "Table bookings and hourly occupancy" },
      { ru: "Отчёт по выручке, среднему чеку и топ-позициям", en: "Revenue, average check and top items" },
    ],
  },
  {
    id: "beauty",
    industry: "beauty",
    ru: "Бьюти и салоны",
    en: "Beauty & Salons",
    status: "live",
    lead: "Запись, мастера и напоминания — чтобы окно в графике не пропадало впустую.",
    leadEn: "Bookings, staff and reminders — so an empty slot never goes unnoticed.",
    features: [
      { ru: "Онлайн-запись с выбором мастера и услуги", en: "Online booking by master and service" },
      { ru: "График смен и загрузка каждого мастера", en: "Shift calendar and per-master utilisation" },
      { ru: "Напоминания клиенту в Telegram и SMS", en: "Telegram and SMS reminders" },
      { ru: "Карточка клиента: история, фото до/после, аллергии", en: "Client card: history, before/after, allergies" },
      { ru: "Абонементы и подарочные сертификаты", en: "Passes and gift certificates" },
      { ru: "Учёт расходников и остатков", en: "Consumables and stock tracking" },
    ],
  },
  {
    id: "commerce",
    industry: "ecosystems",
    ru: "Интернет-магазин",
    en: "E-commerce",
    status: "live",
    lead: "Товары, склад и заказы связаны в одну систему — витрина обновляется сама.",
    leadEn: "Products, stock and orders in one system — the storefront updates itself.",
    features: [
      { ru: "Каталог с вариациями, фото и SEO-полями", en: "Catalogue with variants, imagery and SEO fields" },
      { ru: "Остатки и резервы по складам", en: "Stock and reservations across warehouses" },
      { ru: "Воронка заказа: от корзины до выдачи", en: "Order funnel: cart to handover" },
      { ru: "Промокоды, акции и наборы", en: "Promo codes, campaigns and bundles" },
      { ru: "Выгрузки на маркетплейсы и в рекламу", en: "Feeds for marketplaces and ads" },
      { ru: "Аналитика: конверсия, брошенные корзины, возвраты", en: "Analytics: conversion, abandoned carts, returns" },
    ],
  },
  {
    id: "luxury",
    industry: "luxury",
    ru: "Luxury и часы",
    en: "Luxury & Watches",
    status: "beta",
    lead: "Штучный товар продаётся разговором. Система ведёт этот разговор до сделки.",
    leadEn: "One-of-a-kind goods sell through conversation. The system carries it to the deal.",
    features: [
      { ru: "Карточка изделия: происхождение, состояние, комплект", en: "Item card: provenance, condition, box & papers" },
      { ru: "Лист ожидания и подбор под запрос клиента", en: "Waiting list and made-to-request matching" },
      { ru: "Сделка вместо корзины: этапы, залог, доставка", en: "Deal pipeline instead of a cart" },
      { ru: "3D-конфигуратор и предпросмотр на запястье", en: "3D configurator and on-wrist preview" },
      { ru: "История владения и сервисные записи", en: "Ownership history and service log" },
      { ru: "Приватный доступ к коллекции для клиентов", en: "Private collection access for clients" },
    ],
  },
  {
    id: "realty",
    industry: "realty",
    ru: "Недвижимость",
    en: "Real Estate",
    status: "beta",
    lead: "Объекты, показы и сделки — от первого звонка до подписания.",
    leadEn: "Listings, viewings and deals — from first call to signature.",
    features: [
      { ru: "База объектов с планировками и 3D-турами", en: "Listings with floor plans and 3D tours" },
      { ru: "Шахматка корпуса: свободно / бронь / продано", en: "Availability grid: free / held / sold" },
      { ru: "График показов и напоминания агентам", en: "Viewing schedule and agent reminders" },
      { ru: "Воронка сделки и документы по каждому клиенту", en: "Deal pipeline and per-client documents" },
      { ru: "Ипотечный калькулятор и заявки в банки", en: "Mortgage calculator and bank applications" },
    ],
  },
  {
    id: "auto",
    industry: "dealers",
    ru: "Автосалон и автосервис",
    en: "Dealerships & Service",
    status: "soon",
    lead: "Склад машин, трейд-ин и запись в сервис в одной панели.",
    leadEn: "Vehicle stock, trade-in and service bookings in one panel.",
    features: [
      { ru: "Каталог автомобилей: комплектации, VIN, статус", en: "Vehicle catalogue: trims, VIN, status" },
      { ru: "Заявки на тест-драйв и трейд-ин с оценкой", en: "Test-drive and trade-in requests with valuation" },
      { ru: "Запись в сервис и загрузка постов", en: "Service bookings and bay utilisation" },
      { ru: "История обслуживания по каждому VIN", en: "Service history per VIN" },
      { ru: "Кредитные и лизинговые заявки", en: "Finance and leasing applications" },
    ],
  },
  {
    id: "medicine",
    industry: "medicine",
    ru: "Клиника и медицина",
    en: "Clinics & Medicine",
    status: "soon",
    lead: "Расписание врачей, приёмы и документы — с учётом требований к персональным данным.",
    leadEn: "Doctor schedules, appointments and documents — built around personal-data requirements.",
    features: [
      { ru: "Расписание врачей и онлайн-запись пациента", en: "Doctor schedules and patient self-booking" },
      { ru: "Карта пациента с разграничением доступа", en: "Patient records with role-based access" },
      { ru: "Согласия, договоры и печатные формы", en: "Consents, contracts and printable forms" },
      { ru: "Напоминания о приёме и повторных визитах", en: "Appointment and follow-up reminders" },
      { ru: "Журнал обращений и загрузка кабинетов", en: "Visit log and room utilisation" },
    ],
  },
  {
    id: "event",
    industry: "event",
    ru: "Ивенты и площадки",
    en: "Events & Venues",
    status: "beta",
    lead: "Афиша, билеты и загрузка площадки — без ручных таблиц.",
    leadEn: "Line-up, tickets and venue load — without manual spreadsheets.",
    features: [
      { ru: "Афиша событий и продажа билетов", en: "Event line-up and ticket sales" },
      { ru: "Бронирование площадки и оборудования", en: "Venue and equipment booking" },
      { ru: "Списки гостей и контроль на входе", en: "Guest lists and door check-in" },
      { ru: "Абонементы, сезоны и групповые заявки", en: "Passes, seasons and group requests" },
      { ru: "Отчёт по посещаемости и выручке события", en: "Attendance and per-event revenue" },
    ],
  },
  {
    id: "fashion",
    industry: "fashion",
    ru: "Одежда и мерч",
    en: "Fashion & Merch",
    status: "soon",
    lead: "Размерные сетки, дропы и возвраты — специфика одежды учтена отдельно.",
    leadEn: "Size grids, drops and returns — apparel specifics handled properly.",
    features: [
      { ru: "Размерная сетка и остатки по размерам", en: "Size grid and per-size stock" },
      { ru: "Дропы и предзаказы с датой старта", en: "Drops and pre-orders with launch dates" },
      { ru: "Лукбуки и подборки образов", en: "Lookbooks and curated outfits" },
      { ru: "Возвраты и обмены с причинами", en: "Returns and exchanges with reasons" },
    ],
  },
  {
    id: "fintech",
    industry: "fintech",
    ru: "Финтех и крипта",
    en: "Fintech & Crypto",
    status: "soon",
    lead: "Панель для продукта, где главное — данные, доступы и прозрачность операций.",
    leadEn: "A panel for products where data, access and operational transparency come first.",
    features: [
      { ru: "Дашборд метрик продукта в реальном времени", en: "Real-time product metrics dashboard" },
      { ru: "Роли и журнал действий пользователей", en: "Roles and user action audit log" },
      { ru: "Верификация клиента и статусы заявок", en: "Client verification and application statuses" },
      { ru: "Отчёты и выгрузки для бухгалтерии", en: "Reports and finance exports" },
    ],
  },
  {
    id: "b2b",
    industry: "b2b",
    ru: "B2B и услуги",
    en: "B2B & Services",
    status: "live",
    lead: "Классическая CRM: лиды с сайта, сделки, счета и понятная воронка.",
    leadEn: "A classic CRM: site leads, deals, invoices and a funnel you can read.",
    features: [
      { ru: "Лиды с сайта, форм и мессенджеров в одном месте", en: "Leads from site, forms and messengers in one place" },
      { ru: "Воронка сделок и задачи менеджерам", en: "Deal pipeline and manager tasks" },
      { ru: "Коммерческие предложения и счета", en: "Proposals and invoices" },
      { ru: "База контрагентов и история общения", en: "Company database and communication history" },
      { ru: "План продаж и отчёт по каждому менеджеру", en: "Sales plan and per-manager reporting" },
    ],
  },
  {
    id: "nko",
    industry: "nko",
    ru: "НКО и фонды",
    en: "Non-Profit",
    status: "soon",
    lead: "Пожертвования, проекты и публичная отчётность — доверие держится на цифрах.",
    leadEn: "Donations, projects and public reporting — trust rests on the numbers.",
    features: [
      { ru: "Разовые и регулярные пожертвования", en: "One-off and recurring donations" },
      { ru: "Проекты и сбор под конкретную цель", en: "Projects and goal-based fundraising" },
      { ru: "Публичный отчёт о расходовании средств", en: "Public spend reporting" },
      { ru: "База доноров и волонтёров", en: "Donor and volunteer database" },
    ],
  },
  {
    id: "media",
    industry: "media",
    ru: "СМИ и медиа",
    en: "Media",
    status: "soon",
    lead: "Редакция целиком: от идеи материала до публикации и статистики прочтений.",
    leadEn: "The whole newsroom: from story idea to publication and read stats.",
    features: [
      { ru: "Редакционный календарь и статусы материалов", en: "Editorial calendar and article statuses" },
      { ru: "Роли: автор, редактор, корректор, выпускающий", en: "Roles: author, editor, proofreader, publisher" },
      { ru: "Медиатека и права на изображения", en: "Media library and image rights" },
      { ru: "Статистика прочтений и дочитываний", en: "Read and completion analytics" },
    ],
  },
  {
    id: "gov",
    industry: "gov",
    ru: "Госучреждения и город",
    en: "Public Sector",
    status: "soon",
    lead: "Обращения граждан, проекты благоустройства и понятная публичная витрина.",
    leadEn: "Citizen requests, urban projects and a legible public front.",
    features: [
      { ru: "Приём и маршрутизация обращений", en: "Request intake and routing" },
      { ru: "Карточка объекта благоустройства со статусом", en: "Project cards with live status" },
      { ru: "Публичные документы и расписания", en: "Public documents and schedules" },
      { ru: "Доступная среда: контраст, шрифт, скринридер", en: "Accessibility: contrast, type size, screen reader" },
    ],
  },
];

export const PLUGIN_STATUS = {
  live: { ru: "Работает", en: "Live", color: "#2b9e8f" },
  beta: { ru: "Бета", en: "Beta", color: "#c0562f" },
  soon: { ru: "Скоро", en: "Coming soon", color: "#8f8f8f" },
};

/** Что входит в любой кабинет, независимо от отрасли. */
export const DASH_CORE = [
  { ru: "Личный кабинет на dash.kuznetsova.design", en: "Your account at dash.kuznetsova.design" },
  { ru: "Роли и права: владелец, менеджер, сотрудник", en: "Roles and permissions: owner, manager, staff" },
  { ru: "Заявки с сайта попадают внутрь автоматически", en: "Site enquiries land inside automatically" },
  { ru: "Уведомления в Telegram и на почту", en: "Telegram and e-mail notifications" },
  { ru: "Экспорт данных в Excel в любой момент", en: "Export to Excel at any time" },
  { ru: "Резервные копии и журнал изменений", en: "Backups and a change log" },
];
