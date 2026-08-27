/**
 * Словарь интерфейса — десять языков.
 *
 * ru · en · zh · es · pt · fr · de · ar · ja · tr
 *
 * Ключи плоские, в точечной нотации, сгруппированы по секциям сайта:
 * common.* nav.* menu.* hero.* info.* about.* process.* services.*
 * more.* tech.* reviews.* work.* portfolio.* case.* blog.* form.*
 * footer.* chat.* products.* lang.*
 *
 * Русский — оригинал. Остальные девять языков переведены с него
 * (английский служит перекрёстной проверкой) как самостоятельный
 * текст, а не как подстрочник: смысл и тон сохранены, формулировки —
 * свои, по нормам типографики каждого языка.
 *
 * Правило: каждый ключ из DICT.ru обязан существовать во всех десяти
 * языках. Проверка — missingKeys(lang) в конце файла.
 *
 * Декоративная латиница (MOSCOW, * services _., { More Development },
 * < technical design >, HOW TO WORK, Portfolio, Blog & News) и имена
 * брендов (Kuznetsova Design, Care, Telegram) не переводятся.
 */

export const LANGUAGES = [
  "ru",
  "en",
  "zh",
  "es",
  "pt",
  "fr",
  "de",
  "ar",
  "ja",
  "tr",
];

export const DEFAULT_LANGUAGE = "ru";

/** Эндоним каждого языка — так он подписан в переключателе. */
export const LANGUAGE_LABELS = {
  ru: "Русский",
  en: "English",
  zh: "中文",
  es: "Español",
  pt: "Português",
  fr: "Français",
  de: "Deutsch",
  ar: "العربية",
  ja: "日本語",
  tr: "Türkçe",
};

/** Языки с письмом справа налево — требуют dir="rtl". */
export const RTL_LANGUAGES = ["ar"];

/** true, если интерфейс на этом языке читается справа налево. */
export function isRTL(lang) {
  return RTL_LANGUAGES.includes(lang);
}

export const DICT = {
  /* ══════════════════════════════════════════════════════════════
     РУССКИЙ
     ══════════════════════════════════════════════════════════════ */
  ru: {
    /* ─── Объединённое меню портфолио ───────────────────── */
    "portfolio.eyebrow": "Отделы портфолио",
    "portfolio.title": "Кому мы делаем дизайн",
    "portfolio.intro": "Слева выберите продукт — что именно мы сделали, и отрасль — для кого. Фильтры складываются: например, «Web & Mobile» и «Еда» покажут сайты для ресторанов и кафе.",
    "portfolio.productLabel": "Продукт",
    "portfolio.industryLabel": "Отрасль",
    "portfolio.allProducts": "Все продукты",
    "portfolio.everything": "Всё портфолио",
    "portfolio.allIndustries": "Все отрасли",
    "portfolio.everyone": "Все клиенты",
    "portfolio.allDesc": "Полное портфолио бюро: брендинг, сайты, 3D и контент.",
    "portfolio.worksUnit": "работ",
    "portfolio.removeFilter": "Снять фильтр",
    "portfolio.emptyLabel": "Раздел готовится",
    "portfolio.emptyText": "В этой комбинации у нас пока нет опубликованных кейсов. Расскажите о своей задаче — покажем близкие по смыслу работы и обсудим, как это будет выглядеть у вас.",
    "portfolio.discuss": "Обсудить проект",
    "portfolio.reset": "Сбросить фильтры",
    /* ─── Общее ─────────────────────────────────────────────── */
    "common.brand": "Kuznetsova Design",
    "common.brandSub": "Дизайн-бюро · Москва",
    "common.home": "На главную",
    "common.close": "Закрыть",
    "common.open": "Открыть",
    "common.back": "Назад",
    "common.next": "Следующий",
    "common.prev": "Предыдущий",
    "common.more": "Подробнее",
    "common.viewAll": "Смотреть все",
    "common.startProject": "Начать проект",
    "common.discussProject": "Обсудить проект",
    "common.becomeClient": "Стать клиентом",
    "common.viewCase": "Смотреть кейс",
    "common.openSite": "Открыть сайт",
    "common.client": "Клиент",
    "common.year": "Год",
    "common.category": "Категория",
    "common.tools": "Инструменты",
    "common.website": "Сайт",
    "common.email": "Email",
    "common.phone": "Телефон",
    "common.telegram": "Telegram",
    "common.location": "Москва, Россия",
    "common.city": "Москва",
    "common.privacy": "Политика конфиденциальности",
    "common.rights": "Все права защищены.",
    "common.scrollDown": "Листайте вниз",
    "common.loading": "Загрузка…",
    "common.concept": "Концепт",
    "common.conceptNote":
      "Инициативный проект студии, а не работа по заказу клиента.",

    /* ─── Навигация ─────────────────────────────────────────── */
    "nav.home": "Главная",
    "nav.services": "Услуги",
    "nav.studio": "О студии",
    "nav.about": "О нас",
    "nav.work": "Портфолио",
    "nav.blog": "Наш блог",
    "nav.blogShort": "Блог",
    "nav.journal": "Журнал",
    "nav.contact": "Контакт",
    "nav.contacts": "Контакты",
    "nav.process": "Процесс",
    "nav.engineering": "Инженерия",
    "nav.startProject": "Начните проект",
    "nav.openMenu": "Открыть меню",
    "nav.closeMenu": "Закрыть меню",
    "nav.navigation": "Навигация",

    /* ─── Полноэкранное меню ───────────────────────────────── */
    "menu.label": "Навигация",
    "menu.becomeClient": "+ Стать клиентом",
    "menu.badgeTitle": "5 лет опыта",
    "menu.badgeSub": "Дизайн-бюро премиум-класса",
    "menu.contactTitle": "Telegram",
    "menu.copyright": "© Kuznetsova Design 2026",

    /* ─── Первый экран ─────────────────────────────────────── */
    "hero.city": "MOSCOW",
    "hero.brandTop": "Kuznetsova",
    "hero.brandBottom": "DESIGN.",
    "hero.tagline":
      "Визуальные системы · Айдентика · Цифровой опыт · Веб-разработка",

    /* ─── Инфо-полоса ──────────────────────────────────────── */
    "info.label": "Что мы создаём",
    "info.subtext":
      "От стратегии и визуальной идентичности до веб-разработки, автоматизации и интеллектуальных цифровых систем.",

    /* ─── О студии ─────────────────────────────────────────── */
    "about.eyebrow": "О нас",
    "about.title": "Мы стремимся к инновациям.",
    "about.sub":
      "Создаём визуальные системы, которые работают во всех измерениях — от брендинга и кода до объёмного 3D.",
    "about.cta": "Начать проект",

    "about.stat.years": "лет в дизайне",
    "about.stat.projects": "проектов",
    "about.stat.disciplines": "дисциплины",
    "about.stat.code": "на чистом коде",

    "about.servicesLabel": "Что мы делаем",
    "about.servicesIntro":
      "Три направления, в которых мы создаём выдающийся результат",

    "about.service.branding.title": "БРЕНДИНГ И ГРАФИКА",
    "about.service.branding.desc":
      "Логотипы, брендбуки, упаковка, мерч и полная айдентика, которую запоминают.",
    "about.service.web.title": "WEB & DIGITAL",
    "about.service.web.desc":
      "Современные сайты и цифровые продукты на чистом коде. Без шаблонов и компромиссов.",
    "about.service.3d.title": "3D-DESIGN",
    "about.service.3d.desc":
      "Визуализация, 3D-моделинг, моушн и AR/VR решения. Объём, который продаёт.",

    "about.story.eyebrow": "История бренда",
    "about.story.headlineLine1": "Одно имя.",
    "about.story.headlineLine2": "Все виды дизайна.",
    "about.story.kristina.name": "Кристина Кузнецова",
    "about.story.kristina.role": "Основатель · Арт-директор",
    "about.story.kristina.text":
      "Дизайнер, который не признаёт границ между дисциплинами. Графический дизайн, веб-разработка, 3D-визуализация — для неё это не разные профессии, а один инструментарий. Бюро создано, чтобы доказывать это проектами.",
    "about.story.yaroslav.name": "Ярослав Киселев",
    "about.story.yaroslav.role": "CEO · Финансовый директор",
    "about.story.yaroslav.text":
      "Он отвечает за то, чтобы каждый проект имел чёткий план, бюджет и дедлайн. Чтобы клиент получал результат, а не оправдания.",
    "about.story.closing":
      "Вместе мы строим студию, где дизайн уважают как бизнес-инструмент, а не как украшение.",

    "about.quote.text":
      "Дизайн — это не то, как вещь выглядит. Это то, как она работает.",
    "about.quote.author": "Стив Джобс — принцип, которому следует бюро",

    "about.contacts.title": "Наши контакты",
    "about.contacts.kristina": "Email Кристины Кузнецовой",
    "about.contacts.yaroslav": "Email Ярослава Киселева",
    "about.contacts.phone": "Номер телефона",

    /* ─── Процесс ──────────────────────────────────────────── */
    "process.eyebrow": "— Как мы работаем",
    "process.bgLabel": "HOW TO WORK",
    "process.titleLine1": "Процесс",
    "process.titleLine2": "работы",
    "process.subLine1": "От первого сообщения до передачи файлов.",
    "process.subLine2": "Каждый этап прозрачен и контролируется.",

    "process.step1.title": "Брифинг",
    "process.step1.desc":
      "Знакомимся, фиксируем задачу письменно, согласовываем объём, бюджет и сроки. Без брифа не начинаем.",
    "process.step2.title": "Концепция",
    "process.step2.desc":
      "Кристина разрабатывает визуальное решение. Внутренняя проверка перед показом клиенту.",
    "process.step3.title": "Презентация и правки",
    "process.step3.desc":
      "Показываем, обсуждаем, дорабатываем. До двух раундов правок включено в договор.",
    "process.step4.title": "Производство",
    "process.step4.desc":
      "Финальные файлы, вёрстка, рендеры, передача исходников. Всё, что нужно для запуска.",
    "process.step5.title": "Сдача",
    "process.step5.desc":
      "Подписание акта, передача материалов, запрос обратной связи. Проект закрыт — кейс готов.",

    /* ─── Слайдер услуг ────────────────────────────────────── */
    "services.title": "* services _.",
    "services.sub":
      "Будучи сплочённой командой экспертов, мы создаём запоминающиеся и вызывающие эмоции веб-сайты, цифровые решения и нативные приложения.",
    "services.label": "Услуги",
    "services.all": "Все услуги",

    /* ─── More Development ─────────────────────────────────── */
    "more.eyebrow": "Code",
    "more.title": "{ More Development }",
    "more.badge": "<Code />",
    "more.intro":
      "Берём задачи на стыке дизайна и технологий: автоматизируем процессы и встраиваем нейросети в рабочие сценарии бизнеса.",
    "more.cta": "Обсудить проект",

    /* ─── Технический дизайн ───────────────────────────────── */
    "tech.eyebrow": "Инженерия и документация",
    "tech.title": "< technical design >",
    "tech.badge": "M 1:1",
    "tech.intro":
      "Готовим техническую документацию для производства: чертежи с допусками, принципиальные схемы и разводку печатных плат.",
    "tech.cta": "Обсудить проект",

    /* ─── Отзывы ───────────────────────────────────────────── */
    "reviews.eyebrow": "Отзывы клиентов",
    "reviews.titleLine1": "Нам доверяют",
    "reviews.titleLine2": "результат",
    "reviews.item1.name": "Александр Петров",
    "reviews.item1.role": "CEO, Noir Coffee",
    "reviews.item1.text":
      "Кристина и команда сделали ребрендинг быстро и по делу — упаковка, сайт, соцсети в едином стиле. Видно, что дизайн работает на продажи, а не просто красиво смотрится.",
    "reviews.item2.name": "Мария Соколова",
    "reviews.item2.role": "Маркетинг-директор, Solara Energy",
    "reviews.item2.text":
      "Прозрачный процесс на каждом этапе: бриф, концепция, правки — всё в срок и без сюрпризов по бюджету. Получили сайт, которым реально гордимся.",
    "reviews.item3.name": "Дмитрий Волков",
    "reviews.item3.role": "Founder, Trove Platform",
    "reviews.item3.text":
      "Нужен был сложный дашборд с понятным UX. Бюро разобралось в продукте глубже, чем мы ожидали, и предложило решения, которые упростили работу пользователям.",

    /* ─── Страница портфолио ───────────────────────────────── */
    "work.title": "Portfolio",
    "work.metaTitle": "Портфолио — Kuznetsova Design",
    "work.desc": "Избранные проекты в брендинге, вебе, 3D и арт-дирекшне",
    "work.stat.projects": "проектов",
    "work.stat.categories": "направлений",
    "work.stat.years": "лет в дизайне",
    "work.backToPortfolio": "Портфолио",

    /* ─── Витрина портфолио ────────────────────────────────── */
    "portfolio.categories": "Категории",
    "portfolio.categoriesNav": "Категории портфолио",
    "portfolio.industries": "Отрасли",
    "portfolio.industriesNav": "Отрасли портфолио",
    "portfolio.all": "Все работы",
    "portfolio.hint": "Листайте вниз",
    "portfolio.prevSlide": "Предыдущий слайд",
    "portfolio.nextSlide": "Следующий слайд",
    "portfolio.slide": "Слайд",
    "portfolio.empty": "В этом разделе пока нет опубликованных работ.",
    "portfolio.worksCount": "работ",

    /* ─── Страница кейса ───────────────────────────────────── */
    "case.back": "Портфолио",
    "case.about": "О проекте",
    "case.gallery": "Галерея",
    "case.mainScreen": "Главный экран",
    "case.details": "Детали",
    "case.final": "Финал",
    "case.client": "Клиент",
    "case.year": "Год",
    "case.category": "Категория",
    "case.tools": "Инструменты",
    "case.site": "Сайт",
    "case.prev": "Предыдущий",
    "case.next": "Следующий",
    "case.nav": "Навигация между работами",

    /* ─── Блог ─────────────────────────────────────────────── */
    "blog.title": "Blog & News",
    "blog.metaTitle": "Блог&Новости — Kuznetsova Design",
    "blog.desc": "Работы, события и заметки из жизни студии",
    "blog.all": "Все материалы",
    "blog.featured": "Главный материал",
    "blog.readTime": "мин чтения",
    "blog.readMore": "Читать",
    "blog.backToBlog": "Все статьи",

    /* ─── Продукты и сопровождение ─────────────────────────── */
    "products.label": "Каталог",
    "products.title": "Что мы продаём",
    "products.intro":
      "Состав и результат каждой услуги. Стоимость называем в предложении — после брифа.",
    "products.care.label": "Сопровождение",
    "products.care.title": "Планы Care",
    "products.care.intro":
      "Ежемесячная поддержка: сайт живой, обновлённый и под присмотром.",
    "products.care.includes": "Что входит",
    "products.care.featured": "Популярный",
    "products.cta": "Обсудить задачу",

    /* ─── Форма заявки ─────────────────────────────────────── */
    "form.dialogLabel": "Стать клиентом",
    "form.eyebrow": "Начните проект",
    "form.headlineLine1": "Давайте создадим нечто",
    "form.headlineAccent": "выдающееся",
    "form.pitch":
      "Заполните форму — мы ответим в течение 24 часов и предложим концепцию уже на первом звонке.",
    "form.promise1": "Персональный арт-директор на проекте",
    "form.promise2": "Прозрачный процесс и еженедельные синки",
    "form.promise3": "Сроки и объём работ зафиксированы в договоре",
    "form.headerLabel": "Заявка",
    "form.close": "Закрыть",

    "form.name.label": "Имя",
    "form.name.placeholder": "Александр",
    "form.company.label": "Компания",
    "form.company.placeholder": "Ваш бренд",
    "form.email.label": "Email",
    "form.email.placeholder": "you@company.ru",
    "form.phone.label": "Телефон",
    "form.phone.placeholder": "+7 (___) ___-__-__",
    "form.telegram.label": "Telegram",
    "form.telegram.placeholder": "@username",
    "form.services.label": "Нужные услуги",
    "form.budget.label": "Бюджет",
    "form.message.label": "О проекте",
    "form.message.placeholder": "Расскажите подробнее о задаче...",

    "form.service.branding": "Брендинг",
    "form.service.web": "Веб-дизайн",
    "form.service.identity": "Айдентика",
    "form.service.uxui": "UX/UI",
    "form.service.motion": "Моушн",
    "form.service.other": "Другое",

    "form.budget.upTo150": "До 150 000 ₽",
    "form.budget.150to500": "150 000 – 500 000 ₽",
    "form.budget.500to1000": "500 000 – 1 000 000 ₽",
    "form.budget.over1000": "Больше 1 000 000 ₽",

    "form.error.name": "Введите имя",
    "form.error.email": "Введите email",
    "form.error.phone": "Введите номер телефона",
    "form.error.message": "Расскажите о проекте",
    "form.error.services": "Выберите хотя бы одну услугу",
    "form.error.budget": "Выберите бюджет",
    "form.error.submit": "Не удалось отправить заявку. Попробуйте ещё раз.",
    "form.error.generic": "Ошибка отправки",

    "form.submit": "Отправить заявку",
    "form.submitting": "Отправка...",
    "form.privacyPrefix": "Нажимая кнопку, вы принимаете",
    "form.privacyLink": "политику конфиденциальности",

    "form.success.title": "Заявка отправлена",
    "form.success.body": "Мы свяжемся с вами в течение 24 часов.",
    "form.success.close": "Закрыть",

    /* ─── Подвал ───────────────────────────────────────────── */
    "footer.navigation": "Навигация",
    "footer.studio": "Студия",
    "footer.contact": "Контакты",
    "footer.work": "Портфолио",
    "footer.studioLink": "О студии",
    "footer.services": "Услуги",
    "footer.contactLink": "Связаться",
    "footer.about": "О нас",
    "footer.journal": "Журнал",
    "footer.process": "Процесс",
    "footer.engineering": "Инженерия",
    "footer.location": "Москва, Россия",
    "footer.rights": "Все права защищены.",
    "footer.privacy": "Политика конфиденциальности",

    /* ─── Чат-мок в блоке More Development ─────────────────── */
    "chat.bot": "бот",
    "chat.you": "вы",
    "chat.online": "онлайн",
    "chat.typing": "печатает…",
    "chat.placeholder": "Сообщение…",
    "chat.send": "Отправить",

    /* ─── Переключатель языка ──────────────────────────────── */
    "lang.label": "Язык интерфейса",
    "lang.ru": "Русский",
    "lang.en": "Английский",
    "lang.zh": "Китайский",
    "lang.es": "Испанский",
    "lang.pt": "Португальский",
    "lang.fr": "Французский",
    "lang.de": "Немецкий",
    "lang.ar": "Арабский",
    "lang.ja": "Японский",
    "lang.tr": "Турецкий",
    "lang.switchToEn": "Переключить на английский",
    "lang.switchToRu": "Переключить на русский",
  },

  /* ══════════════════════════════════════════════════════════════
     ENGLISH
     ══════════════════════════════════════════════════════════════ */
  en: {
    /* ─── Объединённое меню портфолио ───────────────────── */
    "portfolio.eyebrow": "Portfolio sections",
    "portfolio.title": "Who we design for",
    "portfolio.intro": "Pick a product on the left — what we actually made — and an industry, for whom. The filters combine: “Web & Mobile” plus “Food” shows sites built for restaurants and cafés.",
    "portfolio.productLabel": "Product",
    "portfolio.industryLabel": "Industry",
    "portfolio.allProducts": "All products",
    "portfolio.everything": "Entire portfolio",
    "portfolio.allIndustries": "All industries",
    "portfolio.everyone": "All clients",
    "portfolio.allDesc": "The studio's full portfolio: branding, websites, 3D and content.",
    "portfolio.worksUnit": "works",
    "portfolio.removeFilter": "Clear filter",
    "portfolio.emptyLabel": "Section in progress",
    "portfolio.emptyText": "We have no published cases for this combination yet. Tell us about your project — we will show closely related work and talk through how it would look for you.",
    "portfolio.discuss": "Discuss a project",
    "portfolio.reset": "Reset filters",
    /* ─── Common ────────────────────────────────────────────── */
    "common.brand": "Kuznetsova Design",
    "common.brandSub": "Design studio · Moscow",
    "common.home": "Home",
    "common.close": "Close",
    "common.open": "Open",
    "common.back": "Back",
    "common.next": "Next",
    "common.prev": "Previous",
    "common.more": "Learn more",
    "common.viewAll": "View all",
    "common.startProject": "Start a project",
    "common.discussProject": "Let's talk",
    "common.becomeClient": "Become a client",
    "common.viewCase": "View case",
    "common.openSite": "Visit site",
    "common.client": "Client",
    "common.year": "Year",
    "common.category": "Category",
    "common.tools": "Tools",
    "common.website": "Website",
    "common.email": "Email",
    "common.phone": "Phone",
    "common.telegram": "Telegram",
    "common.location": "Moscow, Russia",
    "common.city": "Moscow",
    "common.privacy": "Privacy policy",
    "common.rights": "All rights reserved.",
    "common.scrollDown": "Scroll to explore",
    "common.loading": "Loading…",
    "common.concept": "Concept",
    "common.conceptNote":
      "A self-initiated studio concept, not commissioned client work.",

    /* ─── Navigation ───────────────────────────────────────── */
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.studio": "Studio",
    "nav.about": "About",
    "nav.work": "Work",
    "nav.blog": "Journal",
    "nav.blogShort": "Journal",
    "nav.journal": "Journal",
    "nav.contact": "Contact",
    "nav.contacts": "Contact",
    "nav.process": "Process",
    "nav.engineering": "Engineering",
    "nav.startProject": "Start a project",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",
    "nav.navigation": "Navigation",

    /* ─── Full-screen menu ─────────────────────────────────── */
    "menu.label": "Navigation",
    "menu.becomeClient": "+ Become a client",
    "menu.badgeTitle": "Five years in practice",
    "menu.badgeSub": "A design studio built for premium brands",
    "menu.contactTitle": "Telegram",
    "menu.copyright": "© Kuznetsova Design 2026",

    /* ─── Hero ─────────────────────────────────────────────── */
    "hero.city": "MOSCOW",
    "hero.brandTop": "Kuznetsova",
    "hero.brandBottom": "DESIGN.",
    "hero.tagline":
      "Visual systems · Brand identity · Digital experiences · Web development",

    /* ─── Info strip ───────────────────────────────────────── */
    "info.label": "What we build",
    "info.subtext":
      "Strategy and visual identity, web development, automation and digital systems with intelligence built in.",

    /* ─── About ────────────────────────────────────────────── */
    "about.eyebrow": "About us",
    "about.title": "We design for what comes next.",
    "about.sub":
      "We build visual systems that hold up in every dimension — from brand and code to full 3D.",
    "about.cta": "Start a project",

    "about.stat.years": "years in design",
    "about.stat.projects": "projects shipped",
    "about.stat.disciplines": "disciplines",
    "about.stat.code": "hand-written code",

    "about.servicesLabel": "What we do",
    "about.servicesIntro":
      "Three disciplines, one standard: work that outperforms the brief",

    "about.service.branding.title": "BRANDING & GRAPHICS",
    "about.service.branding.desc":
      "Logos, brand books, packaging, merch and a complete identity people actually remember.",
    "about.service.web.title": "WEB & DIGITAL",
    "about.service.web.desc":
      "Modern sites and digital products written by hand. No templates, no compromises.",
    "about.service.3d.title": "3D DESIGN",
    "about.service.3d.desc":
      "Visualisation, 3D modelling, motion and AR/VR. Depth that sells the product.",

    "about.story.eyebrow": "Our story",
    "about.story.headlineLine1": "One name.",
    "about.story.headlineLine2": "Every kind of design.",
    "about.story.kristina.name": "Kristina Kuznetsova",
    "about.story.kristina.role": "Founder · Art Director",
    "about.story.kristina.text":
      "A designer who refuses to draw lines between disciplines. Graphic design, web development and 3D are not separate careers to her — they are one toolkit. The studio exists to prove that, project by project.",
    "about.story.yaroslav.name": "Yaroslav Kiselev",
    "about.story.yaroslav.role": "CEO · Finance Director",
    "about.story.yaroslav.text":
      "He makes sure every project has a real plan, a real budget and a real deadline — so clients get results instead of explanations.",
    "about.story.closing":
      "Together we are building a studio where design is treated as a business instrument, not decoration.",

    "about.quote.text":
      "Design is not how a thing looks. It is how it works.",
    "about.quote.author": "Studio principle",

    "about.contacts.title": "Get in touch",
    "about.contacts.kristina": "Kristina Kuznetsova — email",
    "about.contacts.yaroslav": "Yaroslav Kiselev — email",
    "about.contacts.phone": "Phone",

    /* ─── Process ──────────────────────────────────────────── */
    "process.eyebrow": "— How we work",
    "process.bgLabel": "HOW TO WORK",
    "process.titleLine1": "The",
    "process.titleLine2": "process",
    "process.subLine1": "From the first message to the final handover.",
    "process.subLine2": "Every stage is visible and under control.",

    "process.step1.title": "Brief",
    "process.step1.desc":
      "We meet, write the task down, and agree on scope, budget and dates. Nothing starts without a brief.",
    "process.step2.title": "Concept",
    "process.step2.desc":
      "Kristina develops the visual direction. It passes an internal review before it ever reaches you.",
    "process.step3.title": "Presentation & revisions",
    "process.step3.desc":
      "We present, we discuss, we refine. Two rounds of revisions are part of the contract.",
    "process.step4.title": "Production",
    "process.step4.desc":
      "Final files, build, renders and source handover — everything you need to launch.",
    "process.step5.title": "Handover",
    "process.step5.desc":
      "Sign-off, delivery of all materials, and a feedback round. Project closed, case ready.",

    /* ─── Services slider ──────────────────────────────────── */
    "services.title": "* services _.",
    "services.sub":
      "A tight team of specialists building websites, digital products and native apps that people remember and feel something about.",
    "services.label": "Services",
    "services.all": "All services",

    /* ─── More Development ─────────────────────────────────── */
    "more.eyebrow": "Code",
    "more.title": "{ More Development }",
    "more.badge": "<Code />",
    "more.intro":
      "We take on the work where design meets engineering: automating operations and putting AI to work inside real business processes.",
    "more.cta": "Discuss a project",

    /* ─── Technical design ─────────────────────────────────── */
    "tech.eyebrow": "Engineering & documentation",
    "tech.title": "< technical design >",
    "tech.badge": "M 1:1",
    "tech.intro":
      "Production-ready technical documentation: dimensioned drawings with tolerances, schematics and PCB layouts.",
    "tech.cta": "Discuss a project",

    /* ─── Reviews ──────────────────────────────────────────── */
    "reviews.eyebrow": "Client words",
    "reviews.titleLine1": "Trusted with",
    "reviews.titleLine2": "the outcome",
    "reviews.item1.name": "Alexander Petrov",
    "reviews.item1.role": "CEO, Noir Coffee",
    "reviews.item1.text":
      "Kristina and the team rebranded us quickly and without fuss — packaging, site and social all in one voice. You can see the design working for sales, not just looking good.",
    "reviews.item2.name": "Maria Sokolova",
    "reviews.item2.role": "Marketing Director, Solara Energy",
    "reviews.item2.text":
      "A transparent process at every stage: brief, concept, revisions — all on time and with no budget surprises. We ended up with a site we are genuinely proud of.",
    "reviews.item3.name": "Dmitry Volkov",
    "reviews.item3.role": "Founder, Trove Platform",
    "reviews.item3.text":
      "We needed a complex dashboard that still felt obvious to use. The studio understood the product more deeply than we expected and proposed solutions that made life easier for our users.",

    /* ─── Portfolio page ───────────────────────────────────── */
    "work.title": "Portfolio",
    "work.metaTitle": "Portfolio — Kuznetsova Design",
    "work.desc":
      "Selected work in branding, web, 3D and art direction",
    "work.stat.projects": "projects",
    "work.stat.categories": "disciplines",
    "work.stat.years": "years in design",
    "work.backToPortfolio": "Portfolio",

    /* ─── Portfolio showcase ───────────────────────────────── */
    "portfolio.categories": "Categories",
    "portfolio.categoriesNav": "Portfolio categories",
    "portfolio.industries": "Industries",
    "portfolio.industriesNav": "Portfolio industries",
    "portfolio.all": "All work",
    "portfolio.hint": "Scroll to explore",
    "portfolio.prevSlide": "Previous slide",
    "portfolio.nextSlide": "Next slide",
    "portfolio.slide": "Slide",
    "portfolio.empty": "Nothing published in this section yet.",
    "portfolio.worksCount": "projects",

    /* ─── Case page ────────────────────────────────────────── */
    "case.back": "Portfolio",
    "case.about": "About the project",
    "case.gallery": "Gallery",
    "case.mainScreen": "Main screen",
    "case.details": "Details",
    "case.final": "Final",
    "case.client": "Client",
    "case.year": "Year",
    "case.category": "Category",
    "case.tools": "Tools",
    "case.site": "Website",
    "case.prev": "Previous",
    "case.next": "Next",
    "case.nav": "Move between projects",

    /* ─── Journal ──────────────────────────────────────────── */
    "blog.title": "Blog & News",
    "blog.metaTitle": "Journal — Kuznetsova Design",
    "blog.desc": "Work, events and notes from inside the studio",
    "blog.all": "All stories",
    "blog.featured": "Featured story",
    "blog.readTime": "min read",
    "blog.readMore": "Read",
    "blog.backToBlog": "All stories",

    /* ─── Products & care ──────────────────────────────────── */
    "products.label": "Catalogue",
    "products.title": "What we sell",
    "products.intro":
      "Exactly what each service includes and what you get. Pricing comes with the proposal, after the brief.",
    "products.care.label": "Care",
    "products.care.title": "Care plans",
    "products.care.intro":
      "Monthly support that keeps your site current, secure and looked after.",
    "products.care.includes": "What's included",
    "products.care.featured": "Most chosen",
    "products.cta": "Discuss your task",

    /* ─── Enquiry form ─────────────────────────────────────── */
    "form.dialogLabel": "Become a client",
    "form.eyebrow": "Start a project",
    "form.headlineLine1": "Let's make something",
    "form.headlineAccent": "exceptional",
    "form.pitch":
      "Fill in the form — we reply within 24 hours and bring a direction to the very first call.",
    "form.promise1": "A dedicated art director on your project",
    "form.promise2": "A transparent process with weekly syncs",
    "form.promise3": "Scope and deadlines fixed in the contract",
    "form.headerLabel": "Enquiry",
    "form.close": "Close",

    "form.name.label": "Name",
    "form.name.placeholder": "Alexander",
    "form.company.label": "Company",
    "form.company.placeholder": "Your brand",
    "form.email.label": "Email",
    "form.email.placeholder": "you@company.com",
    "form.phone.label": "Phone",
    "form.phone.placeholder": "+7 (___) ___-__-__",
    "form.telegram.label": "Telegram",
    "form.telegram.placeholder": "@username",
    "form.services.label": "Services you need",
    "form.budget.label": "Budget",
    "form.message.label": "About the project",
    "form.message.placeholder": "Tell us more about the task...",

    "form.service.branding": "Branding",
    "form.service.web": "Web design",
    "form.service.identity": "Identity",
    "form.service.uxui": "UX/UI",
    "form.service.motion": "Motion",
    "form.service.other": "Something else",

    "form.budget.upTo150": "Up to 150,000 ₽",
    "form.budget.150to500": "150,000 – 500,000 ₽",
    "form.budget.500to1000": "500,000 – 1,000,000 ₽",
    "form.budget.over1000": "Over 1,000,000 ₽",

    "form.error.name": "Please enter your name",
    "form.error.email": "Please enter your email",
    "form.error.phone": "Please enter your phone number",
    "form.error.message": "Tell us about the project",
    "form.error.services": "Pick at least one service",
    "form.error.budget": "Choose a budget range",
    "form.error.submit": "We couldn't send your enquiry. Please try again.",
    "form.error.generic": "Sending failed",

    "form.submit": "Send enquiry",
    "form.submitting": "Sending...",
    "form.privacyPrefix": "By sending this form you accept our",
    "form.privacyLink": "privacy policy",

    "form.success.title": "Enquiry sent",
    "form.success.body": "We'll be in touch within 24 hours.",
    "form.success.close": "Close",

    /* ─── Footer ───────────────────────────────────────────── */
    "footer.navigation": "Navigation",
    "footer.studio": "Studio",
    "footer.contact": "Contact",
    "footer.work": "Work",
    "footer.studioLink": "Studio",
    "footer.services": "Services",
    "footer.contactLink": "Contact",
    "footer.about": "About",
    "footer.journal": "Journal",
    "footer.process": "Process",
    "footer.engineering": "Engineering",
    "footer.location": "Moscow, Russia",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy policy",

    /* ─── Chat mock ────────────────────────────────────────── */
    "chat.bot": "bot",
    "chat.you": "you",
    "chat.online": "online",
    "chat.typing": "typing…",
    "chat.placeholder": "Message…",
    "chat.send": "Send",

    /* ─── Language switch ──────────────────────────────────── */
    "lang.label": "Interface language",
    "lang.ru": "Russian",
    "lang.en": "English",
    "lang.zh": "Chinese",
    "lang.es": "Spanish",
    "lang.pt": "Portuguese",
    "lang.fr": "French",
    "lang.de": "German",
    "lang.ar": "Arabic",
    "lang.ja": "Japanese",
    "lang.tr": "Turkish",
    "lang.switchToEn": "Switch to English",
    "lang.switchToRu": "Switch to Russian",
  },

  /* ══════════════════════════════════════════════════════════════
     中文 (ZH)
     ══════════════════════════════════════════════════════════════ */
  zh: {
    /* ─── Объединённое меню портфолио ───────────────────── */
    "portfolio.eyebrow": "作品分类",
    "portfolio.title": "我们为谁做设计",
    "portfolio.intro": "在左侧选择产品——我们具体做了什么，以及行业——为谁而做。两个筛选条件可叠加：「Web & Mobile」加「餐饮」将显示为餐厅和咖啡馆打造的网站。",
    "portfolio.productLabel": "产品",
    "portfolio.industryLabel": "行业",
    "portfolio.allProducts": "全部产品",
    "portfolio.everything": "全部作品",
    "portfolio.allIndustries": "全部行业",
    "portfolio.everyone": "全部客户",
    "portfolio.allDesc": "工作室的完整作品集：品牌、网站、3D 与内容。",
    "portfolio.worksUnit": "个项目",
    "portfolio.removeFilter": "清除筛选",
    "portfolio.emptyLabel": "板块筹备中",
    "portfolio.emptyText": "该组合下暂无已发布的案例。请告诉我们您的项目，我们会展示相近的作品，并说明它在您这里会是什么样子。",
    "portfolio.discuss": "洽谈项目",
    "portfolio.reset": "重置筛选",
    /* ─── 通用 ──────────────────────────────────────────────── */
    "common.brand": "Kuznetsova Design",
    "common.brandSub": "设计工作室 · 莫斯科",
    "common.home": "返回首页",
    "common.close": "关闭",
    "common.open": "打开",
    "common.back": "返回",
    "common.next": "下一个",
    "common.prev": "上一个",
    "common.more": "了解详情",
    "common.viewAll": "查看全部",
    "common.startProject": "启动项目",
    "common.discussProject": "洽谈项目",
    "common.becomeClient": "成为客户",
    "common.viewCase": "查看案例",
    "common.openSite": "访问网站",
    "common.client": "客户",
    "common.year": "年份",
    "common.category": "类别",
    "common.tools": "工具",
    "common.website": "网站",
    "common.email": "邮箱",
    "common.phone": "电话",
    "common.telegram": "Telegram",
    "common.location": "莫斯科，俄罗斯",
    "common.city": "莫斯科",
    "common.privacy": "隐私政策",
    "common.rights": "版权所有。",
    "common.scrollDown": "向下滚动",
    "common.loading": "加载中…",
    "common.concept": "概念项目",
    "common.conceptNote": "工作室自主发起的项目，并非客户委托作品。",

    /* ─── 导航 ──────────────────────────────────────────────── */
    "nav.home": "首页",
    "nav.services": "服务",
    "nav.studio": "关于工作室",
    "nav.about": "关于我们",
    "nav.work": "作品集",
    "nav.blog": "我们的日志",
    "nav.blogShort": "日志",
    "nav.journal": "日志",
    "nav.contact": "联系",
    "nav.contacts": "联系方式",
    "nav.process": "流程",
    "nav.engineering": "工程",
    "nav.startProject": "启动您的项目",
    "nav.openMenu": "打开菜单",
    "nav.closeMenu": "关闭菜单",
    "nav.navigation": "导航",

    /* ─── 全屏菜单 ──────────────────────────────────────────── */
    "menu.label": "导航",
    "menu.becomeClient": "+ 成为客户",
    "menu.badgeTitle": "五年实践经验",
    "menu.badgeSub": "面向高端品牌的设计工作室",
    "menu.contactTitle": "Telegram",
    "menu.copyright": "© Kuznetsova Design 2026",

    /* ─── 首屏 ──────────────────────────────────────────────── */
    "hero.city": "MOSCOW",
    "hero.brandTop": "Kuznetsova",
    "hero.brandBottom": "DESIGN.",
    "hero.tagline": "视觉系统 · 品牌识别 · 数字体验 · 网站开发",

    /* ─── 信息条 ────────────────────────────────────────────── */
    "info.label": "我们创造什么",
    "info.subtext":
      "从策略与视觉识别，到网站开发、流程自动化与智能数字系统。",

    /* ─── 关于工作室 ────────────────────────────────────────── */
    "about.eyebrow": "关于我们",
    "about.title": "我们为下一步而设计。",
    "about.sub":
      "我们构建在各个维度都成立的视觉系统——从品牌与代码，到完整的三维表达。",
    "about.cta": "启动项目",

    "about.stat.years": "年设计经验",
    "about.stat.projects": "个项目",
    "about.stat.disciplines": "个专业方向",
    "about.stat.code": "纯手写代码",

    "about.servicesLabel": "我们做什么",
    "about.servicesIntro": "三个方向，一个标准：交付超出简报的成果",

    "about.service.branding.title": "品牌与平面",
    "about.service.branding.desc":
      "标志、品牌手册、包装、周边，以及让人记住的完整识别系统。",
    "about.service.web.title": "WEB & DIGITAL",
    "about.service.web.desc":
      "纯手写代码打造的现代网站与数字产品。不用模板，不做妥协。",
    "about.service.3d.title": "3D-DESIGN",
    "about.service.3d.desc":
      "视觉呈现、三维建模、动态影像与 AR/VR 方案。有体积感，也有说服力。",

    "about.story.eyebrow": "品牌故事",
    "about.story.headlineLine1": "一个名字。",
    "about.story.headlineLine2": "所有形式的设计。",
    "about.story.kristina.name": "克里斯蒂娜·库兹涅佐娃",
    "about.story.kristina.role": "创始人 · 艺术总监",
    "about.story.kristina.text":
      "她不承认设计学科之间的界线。平面设计、网站开发、三维视觉——在她看来不是三种职业，而是同一套工具。工作室的存在，就是用项目来证明这一点。",
    "about.story.yaroslav.name": "雅罗斯拉夫·基谢廖夫",
    "about.story.yaroslav.role": "CEO · 财务总监",
    "about.story.yaroslav.text":
      "他负责让每个项目都有明确的计划、预算与交付日期。让客户拿到结果，而不是解释。",
    "about.story.closing":
      "我们共同建立的，是一间把设计视为商业工具而非装饰的工作室。",

    "about.quote.text": "设计不是外表看起来如何，而是它如何运作。",
    "about.quote.author": "史蒂夫·乔布斯——工作室奉行的原则",

    "about.contacts.title": "联系我们",
    "about.contacts.kristina": "克里斯蒂娜·库兹涅佐娃的邮箱",
    "about.contacts.yaroslav": "雅罗斯拉夫·基谢廖夫的邮箱",
    "about.contacts.phone": "电话号码",

    /* ─── 流程 ──────────────────────────────────────────────── */
    "process.eyebrow": "— 我们如何工作",
    "process.bgLabel": "HOW TO WORK",
    "process.titleLine1": "工作",
    "process.titleLine2": "流程",
    "process.subLine1": "从第一条消息，到最终文件交付。",
    "process.subLine2": "每个阶段都清晰可见、可控。",

    "process.step1.title": "简报",
    "process.step1.desc":
      "先认识彼此，把任务写成文字，确定范围、预算与时间。没有简报就不开工。",
    "process.step2.title": "概念",
    "process.step2.desc":
      "克里斯蒂娜提出视觉方案，先经内部评审，再呈现给客户。",
    "process.step3.title": "提案与修改",
    "process.step3.desc": "展示、讨论、打磨。合同内包含两轮修改。",
    "process.step4.title": "制作",
    "process.step4.desc":
      "最终文件、页面实现、渲染与源文件交付——上线所需的一切。",
    "process.step5.title": "交付",
    "process.step5.desc":
      "签署验收、移交全部材料、收集反馈。项目结束，案例成形。",

    /* ─── 服务滑块 ──────────────────────────────────────────── */
    "services.title": "* services _.",
    "services.sub":
      "作为一支紧密协作的专家团队，我们打造令人难忘、能激起情绪的网站、数字方案与原生应用。",
    "services.label": "服务",
    "services.all": "全部服务",

    /* ─── More Development ─────────────────────────────────── */
    "more.eyebrow": "Code",
    "more.title": "{ More Development }",
    "more.badge": "<Code />",
    "more.intro":
      "我们承接设计与技术交界处的工作：让流程自动化，把神经网络接入真实的业务场景。",
    "more.cta": "洽谈项目",

    /* ─── 技术设计 ──────────────────────────────────────────── */
    "tech.eyebrow": "工程与技术文档",
    "tech.title": "< technical design >",
    "tech.badge": "M 1:1",
    "tech.intro":
      "面向生产的技术文档：带公差的图纸、电气原理图与印制电路板布线。",
    "tech.cta": "洽谈项目",

    /* ─── 客户评价 ──────────────────────────────────────────── */
    "reviews.eyebrow": "客户评价",
    "reviews.titleLine1": "客户把结果",
    "reviews.titleLine2": "交给我们",
    "reviews.item1.name": "亚历山大·彼得罗夫",
    "reviews.item1.role": "CEO, Noir Coffee",
    "reviews.item1.text":
      "克里斯蒂娜和团队把品牌重塑做得又快又准——包装、网站、社交媒体风格统一。看得出这套设计是在帮销售，而不只是好看。",
    "reviews.item2.name": "玛丽亚·索科洛娃",
    "reviews.item2.role": "市场总监, Solara Energy",
    "reviews.item2.text":
      "每个阶段都透明：简报、概念、修改，全部按时完成，预算也没有意外。最后拿到的网站，我们是真的自豪。",
    "reviews.item3.name": "德米特里·沃尔科夫",
    "reviews.item3.role": "Founder, Trove Platform",
    "reviews.item3.text":
      "我们需要一个复杂但好用的数据看板。工作室对产品的理解比我们预期更深，提出的方案让用户的操作变简单了。",

    /* ─── 作品集页面 ────────────────────────────────────────── */
    "work.title": "Portfolio",
    "work.metaTitle": "作品集 — Kuznetsova Design",
    "work.desc": "品牌、网站、三维与艺术指导领域的精选项目",
    "work.stat.projects": "个项目",
    "work.stat.categories": "个方向",
    "work.stat.years": "年设计经验",
    "work.backToPortfolio": "作品集",

    /* ─── 作品展示 ──────────────────────────────────────────── */
    "portfolio.categories": "类别",
    "portfolio.categoriesNav": "作品集类别",
    "portfolio.industries": "行业",
    "portfolio.industriesNav": "作品集行业",
    "portfolio.all": "全部作品",
    "portfolio.hint": "向下滚动",
    "portfolio.prevSlide": "上一张",
    "portfolio.nextSlide": "下一张",
    "portfolio.slide": "幻灯片",
    "portfolio.empty": "该分类下暂无已发布的作品。",
    "portfolio.worksCount": "件作品",

    /* ─── 案例页面 ──────────────────────────────────────────── */
    "case.back": "作品集",
    "case.about": "项目介绍",
    "case.gallery": "图库",
    "case.mainScreen": "主页面",
    "case.details": "细节",
    "case.final": "成品",
    "case.client": "客户",
    "case.year": "年份",
    "case.category": "类别",
    "case.tools": "工具",
    "case.site": "网站",
    "case.prev": "上一个",
    "case.next": "下一个",
    "case.nav": "在作品之间切换",

    /* ─── 日志 ──────────────────────────────────────────────── */
    "blog.title": "Blog & News",
    "blog.metaTitle": "日志与新闻 — Kuznetsova Design",
    "blog.desc": "工作室的作品、活动与随笔",
    "blog.all": "全部内容",
    "blog.featured": "精选文章",
    "blog.readTime": "分钟阅读",
    "blog.readMore": "阅读",
    "blog.backToBlog": "全部文章",

    /* ─── 产品与维护 ────────────────────────────────────────── */
    "products.label": "服务目录",
    "products.title": "我们提供什么",
    "products.intro":
      "每项服务包含什么、交付什么。费用在简报之后随方案一并给出。",
    "products.care.label": "维护支持",
    "products.care.title": "Care 方案",
    "products.care.intro": "按月支持：网站始终在线、及时更新、有人照看。",
    "products.care.includes": "包含内容",
    "products.care.featured": "热门选择",
    "products.cta": "洽谈需求",

    /* ─── 咨询表单 ──────────────────────────────────────────── */
    "form.dialogLabel": "成为客户",
    "form.eyebrow": "启动项目",
    "form.headlineLine1": "让我们一起做点",
    "form.headlineAccent": "了不起的事",
    "form.pitch":
      "填写表单——我们会在 24 小时内回复，并在第一次通话时带上方案方向。",
    "form.promise1": "项目配备专属艺术总监",
    "form.promise2": "流程透明，每周同步进度",
    "form.promise3": "工期与工作范围写入合同",
    "form.headerLabel": "项目咨询",
    "form.close": "关闭",

    "form.name.label": "姓名",
    "form.name.placeholder": "李明",
    "form.company.label": "公司",
    "form.company.placeholder": "您的品牌",
    "form.email.label": "邮箱",
    "form.email.placeholder": "you@company.com",
    "form.phone.label": "电话",
    "form.phone.placeholder": "+7 (___) ___-__-__",
    "form.telegram.label": "Telegram",
    "form.telegram.placeholder": "@username",
    "form.services.label": "需要的服务",
    "form.budget.label": "预算",
    "form.message.label": "项目说明",
    "form.message.placeholder": "请详细描述您的需求...",

    "form.service.branding": "品牌设计",
    "form.service.web": "网页设计",
    "form.service.identity": "视觉识别",
    "form.service.uxui": "UX/UI",
    "form.service.motion": "动态设计",
    "form.service.other": "其他",

    "form.budget.upTo150": "150,000 ₽ 以内",
    "form.budget.150to500": "150,000 – 500,000 ₽",
    "form.budget.500to1000": "500,000 – 1,000,000 ₽",
    "form.budget.over1000": "1,000,000 ₽ 以上",

    "form.error.name": "请填写姓名",
    "form.error.email": "请填写邮箱",
    "form.error.phone": "请填写电话号码",
    "form.error.message": "请介绍一下项目",
    "form.error.services": "请至少选择一项服务",
    "form.error.budget": "请选择预算区间",
    "form.error.submit": "提交失败，请再试一次。",
    "form.error.generic": "发送失败",

    "form.submit": "提交咨询",
    "form.submitting": "提交中...",
    "form.privacyPrefix": "点击按钮即表示您接受",
    "form.privacyLink": "隐私政策",

    "form.success.title": "已提交",
    "form.success.body": "我们会在 24 小时内与您联系。",
    "form.success.close": "关闭",

    /* ─── 页脚 ──────────────────────────────────────────────── */
    "footer.navigation": "导航",
    "footer.studio": "工作室",
    "footer.contact": "联系方式",
    "footer.work": "作品集",
    "footer.studioLink": "关于工作室",
    "footer.services": "服务",
    "footer.contactLink": "联系我们",
    "footer.about": "关于我们",
    "footer.journal": "日志",
    "footer.process": "流程",
    "footer.engineering": "工程",
    "footer.location": "莫斯科，俄罗斯",
    "footer.rights": "版权所有。",
    "footer.privacy": "隐私政策",

    /* ─── 聊天演示 ──────────────────────────────────────────── */
    "chat.bot": "机器人",
    "chat.you": "您",
    "chat.online": "在线",
    "chat.typing": "正在输入…",
    "chat.placeholder": "输入消息…",
    "chat.send": "发送",

    /* ─── 语言切换 ──────────────────────────────────────────── */
    "lang.label": "界面语言",
    "lang.ru": "俄语",
    "lang.en": "英语",
    "lang.zh": "中文",
    "lang.es": "西班牙语",
    "lang.pt": "葡萄牙语",
    "lang.fr": "法语",
    "lang.de": "德语",
    "lang.ar": "阿拉伯语",
    "lang.ja": "日语",
    "lang.tr": "土耳其语",
    "lang.switchToEn": "切换到英语",
    "lang.switchToRu": "切换到俄语",
  },

  /* ══════════════════════════════════════════════════════════════
     ESPAÑOL (ES)
     ══════════════════════════════════════════════════════════════ */
  es: {
    /* ─── Объединённое меню портфолио ───────────────────── */
    "portfolio.eyebrow": "Secciones del portafolio",
    "portfolio.title": "Para quién diseñamos",
    "portfolio.intro": "Elija a la izquierda un producto —qué hicimos exactamente— y un sector, para quién. Los filtros se combinan: «Web & Mobile» más «Gastronomía» muestra sitios creados para restaurantes y cafeterías.",
    "portfolio.productLabel": "Producto",
    "portfolio.industryLabel": "Sector",
    "portfolio.allProducts": "Todos los productos",
    "portfolio.everything": "Portafolio completo",
    "portfolio.allIndustries": "Todos los sectores",
    "portfolio.everyone": "Todos los clientes",
    "portfolio.allDesc": "El portafolio completo del estudio: identidad, sitios web, 3D y contenido.",
    "portfolio.worksUnit": "proyectos",
    "portfolio.removeFilter": "Quitar filtro",
    "portfolio.emptyLabel": "Sección en preparación",
    "portfolio.emptyText": "Todavía no tenemos casos publicados para esta combinación. Cuéntenos su proyecto: le mostraremos trabajos afines y hablaremos de cómo quedaría en su caso.",
    "portfolio.discuss": "Hablar del proyecto",
    "portfolio.reset": "Restablecer filtros",
    /* ─── General ───────────────────────────────────────────── */
    "common.brand": "Kuznetsova Design",
    "common.brandSub": "Estudio de diseño · Moscú",
    "common.home": "Inicio",
    "common.close": "Cerrar",
    "common.open": "Abrir",
    "common.back": "Atrás",
    "common.next": "Siguiente",
    "common.prev": "Anterior",
    "common.more": "Saber más",
    "common.viewAll": "Ver todo",
    "common.startProject": "Iniciar un proyecto",
    "common.discussProject": "Hablemos del proyecto",
    "common.becomeClient": "Ser cliente",
    "common.viewCase": "Ver el caso",
    "common.openSite": "Visitar el sitio",
    "common.client": "Cliente",
    "common.year": "Año",
    "common.category": "Categoría",
    "common.tools": "Herramientas",
    "common.website": "Sitio web",
    "common.email": "Email",
    "common.phone": "Teléfono",
    "common.telegram": "Telegram",
    "common.location": "Moscú, Rusia",
    "common.city": "Moscú",
    "common.privacy": "Política de privacidad",
    "common.rights": "Todos los derechos reservados.",
    "common.scrollDown": "Desplázate para explorar",
    "common.loading": "Cargando…",
    "common.concept": "Concepto",
    "common.conceptNote":
      "Proyecto de iniciativa propia del estudio, no un encargo de cliente.",

    /* ─── Navegación ────────────────────────────────────────── */
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.studio": "El estudio",
    "nav.about": "Nosotros",
    "nav.work": "Portafolio",
    "nav.blog": "Nuestro diario",
    "nav.blogShort": "Diario",
    "nav.journal": "Diario",
    "nav.contact": "Contacto",
    "nav.contacts": "Contacto",
    "nav.process": "Proceso",
    "nav.engineering": "Ingeniería",
    "nav.startProject": "Empieza tu proyecto",
    "nav.openMenu": "Abrir el menú",
    "nav.closeMenu": "Cerrar el menú",
    "nav.navigation": "Navegación",

    /* ─── Menú a pantalla completa ──────────────────────────── */
    "menu.label": "Navegación",
    "menu.becomeClient": "+ Ser cliente",
    "menu.badgeTitle": "Cinco años de práctica",
    "menu.badgeSub": "Estudio de diseño para marcas premium",
    "menu.contactTitle": "Telegram",
    "menu.copyright": "© Kuznetsova Design 2026",

    /* ─── Portada ───────────────────────────────────────────── */
    "hero.city": "MOSCOW",
    "hero.brandTop": "Kuznetsova",
    "hero.brandBottom": "DESIGN.",
    "hero.tagline":
      "Sistemas visuales · Identidad de marca · Experiencias digitales · Desarrollo web",

    /* ─── Franja informativa ────────────────────────────────── */
    "info.label": "Lo que creamos",
    "info.subtext":
      "Desde la estrategia y la identidad visual hasta el desarrollo web, la automatización y los sistemas digitales inteligentes.",

    /* ─── Sobre el estudio ──────────────────────────────────── */
    "about.eyebrow": "Sobre nosotros",
    "about.title": "Diseñamos para lo que viene.",
    "about.sub":
      "Creamos sistemas visuales que funcionan en todas las dimensiones: de la marca y el código al 3D completo.",
    "about.cta": "Iniciar un proyecto",

    "about.stat.years": "años en diseño",
    "about.stat.projects": "proyectos",
    "about.stat.disciplines": "disciplinas",
    "about.stat.code": "de código escrito a mano",

    "about.servicesLabel": "Lo que hacemos",
    "about.servicesIntro":
      "Tres disciplinas y un mismo estándar: trabajo que supera el briefing",

    "about.service.branding.title": "BRANDING Y GRÁFICA",
    "about.service.branding.desc":
      "Logotipos, manuales de marca, packaging, merchandising y una identidad completa que se recuerda.",
    "about.service.web.title": "WEB & DIGITAL",
    "about.service.web.desc":
      "Sitios y productos digitales modernos escritos a mano. Sin plantillas y sin concesiones.",
    "about.service.3d.title": "3D-DESIGN",
    "about.service.3d.desc":
      "Visualización, modelado 3D, motion y soluciones AR/VR. Volumen que vende.",

    "about.story.eyebrow": "Historia de la marca",
    "about.story.headlineLine1": "Un solo nombre.",
    "about.story.headlineLine2": "Todas las formas del diseño.",
    "about.story.kristina.name": "Kristina Kuznetsova",
    "about.story.kristina.role": "Fundadora · Directora de arte",
    "about.story.kristina.text":
      "Una diseñadora que no reconoce fronteras entre disciplinas. Diseño gráfico, desarrollo web y visualización 3D no son para ella profesiones distintas, sino un único conjunto de herramientas. El estudio existe para demostrarlo, proyecto a proyecto.",
    "about.story.yaroslav.name": "Yaroslav Kiselev",
    "about.story.yaroslav.role": "CEO · Director financiero",
    "about.story.yaroslav.text":
      "Se ocupa de que cada proyecto tenga un plan claro, un presupuesto y una fecha de entrega. De que el cliente reciba resultados y no explicaciones.",
    "about.story.closing":
      "Juntos construimos un estudio donde el diseño se respeta como herramienta de negocio y no como adorno.",

    "about.quote.text":
      "El diseño no es cómo se ve una cosa. Es cómo funciona.",
    "about.quote.author": "Steve Jobs — el principio que sigue el estudio",

    "about.contacts.title": "Nuestros contactos",
    "about.contacts.kristina": "Email de Kristina Kuznetsova",
    "about.contacts.yaroslav": "Email de Yaroslav Kiselev",
    "about.contacts.phone": "Número de teléfono",

    /* ─── Proceso ───────────────────────────────────────────── */
    "process.eyebrow": "— Cómo trabajamos",
    "process.bgLabel": "HOW TO WORK",
    "process.titleLine1": "El proceso",
    "process.titleLine2": "de trabajo",
    "process.subLine1": "Del primer mensaje a la entrega de los archivos.",
    "process.subLine2": "Cada etapa es transparente y está bajo control.",

    "process.step1.title": "Briefing",
    "process.step1.desc":
      "Nos conocemos, fijamos la tarea por escrito y acordamos alcance, presupuesto y plazos. Sin briefing no empezamos.",
    "process.step2.title": "Concepto",
    "process.step2.desc":
      "Kristina desarrolla la solución visual. Revisión interna antes de mostrarla al cliente.",
    "process.step3.title": "Presentación y ajustes",
    "process.step3.desc":
      "Mostramos, comentamos, refinamos. El contrato incluye hasta dos rondas de cambios.",
    "process.step4.title": "Producción",
    "process.step4.desc":
      "Archivos finales, maquetación, renders y entrega de los originales. Todo lo necesario para lanzar.",
    "process.step5.title": "Entrega",
    "process.step5.desc":
      "Firma del acta, entrega de los materiales y ronda de feedback. Proyecto cerrado, caso listo.",

    /* ─── Servicios ─────────────────────────────────────────── */
    "services.title": "* services _.",
    "services.sub":
      "Como equipo compacto de especialistas, creamos sitios web, soluciones digitales y aplicaciones nativas que se recuerdan y emocionan.",
    "services.label": "Servicios",
    "services.all": "Todos los servicios",

    /* ─── More Development ─────────────────────────────────── */
    "more.eyebrow": "Code",
    "more.title": "{ More Development }",
    "more.badge": "<Code />",
    "more.intro":
      "Asumimos el trabajo donde el diseño se cruza con la tecnología: automatizamos procesos e integramos redes neuronales en escenarios reales de negocio.",
    "more.cta": "Hablemos del proyecto",

    /* ─── Diseño técnico ────────────────────────────────────── */
    "tech.eyebrow": "Ingeniería y documentación",
    "tech.title": "< technical design >",
    "tech.badge": "M 1:1",
    "tech.intro":
      "Preparamos documentación técnica lista para producción: planos acotados con tolerancias, esquemas eléctricos y trazado de circuitos impresos.",
    "tech.cta": "Hablemos del proyecto",

    /* ─── Opiniones ─────────────────────────────────────────── */
    "reviews.eyebrow": "Opiniones de clientes",
    "reviews.titleLine1": "Nos confían",
    "reviews.titleLine2": "el resultado",
    "reviews.item1.name": "Alexander Petrov",
    "reviews.item1.role": "CEO, Noir Coffee",
    "reviews.item1.text":
      "Kristina y su equipo hicieron el rebranding rápido y al grano: packaging, sitio y redes en un mismo estilo. Se nota que el diseño trabaja para las ventas y no solo decora.",
    "reviews.item2.name": "Maria Sokolova",
    "reviews.item2.role": "Directora de marketing, Solara Energy",
    "reviews.item2.text":
      "Proceso transparente en cada etapa: briefing, concepto, ajustes; todo a tiempo y sin sorpresas de presupuesto. Nos quedamos con un sitio del que estamos realmente orgullosos.",
    "reviews.item3.name": "Dmitry Volkov",
    "reviews.item3.role": "Founder, Trove Platform",
    "reviews.item3.text":
      "Necesitábamos un panel complejo con una experiencia clara. El estudio entendió el producto más a fondo de lo que esperábamos y propuso soluciones que simplificaron el trabajo de los usuarios.",

    /* ─── Página de portafolio ──────────────────────────────── */
    "work.title": "Portfolio",
    "work.metaTitle": "Portafolio — Kuznetsova Design",
    "work.desc":
      "Proyectos seleccionados de branding, web, 3D y dirección de arte",
    "work.stat.projects": "proyectos",
    "work.stat.categories": "disciplinas",
    "work.stat.years": "años en diseño",
    "work.backToPortfolio": "Portafolio",

    /* ─── Escaparate ────────────────────────────────────────── */
    "portfolio.categories": "Categorías",
    "portfolio.categoriesNav": "Categorías del portafolio",
    "portfolio.industries": "Sectores",
    "portfolio.industriesNav": "Sectores del portafolio",
    "portfolio.all": "Todos los trabajos",
    "portfolio.hint": "Desplázate para explorar",
    "portfolio.prevSlide": "Diapositiva anterior",
    "portfolio.nextSlide": "Diapositiva siguiente",
    "portfolio.slide": "Diapositiva",
    "portfolio.empty":
      "Todavía no hay trabajos publicados en esta sección.",
    "portfolio.worksCount": "trabajos",

    /* ─── Página de caso ────────────────────────────────────── */
    "case.back": "Portafolio",
    "case.about": "Sobre el proyecto",
    "case.gallery": "Galería",
    "case.mainScreen": "Pantalla principal",
    "case.details": "Detalles",
    "case.final": "Final",
    "case.client": "Cliente",
    "case.year": "Año",
    "case.category": "Categoría",
    "case.tools": "Herramientas",
    "case.site": "Sitio web",
    "case.prev": "Anterior",
    "case.next": "Siguiente",
    "case.nav": "Navegación entre proyectos",

    /* ─── Diario ────────────────────────────────────────────── */
    "blog.title": "Blog & News",
    "blog.metaTitle": "Diario y noticias — Kuznetsova Design",
    "blog.desc": "Trabajos, eventos y apuntes de la vida del estudio",
    "blog.all": "Todo el contenido",
    "blog.featured": "Artículo destacado",
    "blog.readTime": "min de lectura",
    "blog.readMore": "Leer",
    "blog.backToBlog": "Todos los artículos",

    /* ─── Servicios y mantenimiento ─────────────────────────── */
    "products.label": "Catálogo",
    "products.title": "Lo que ofrecemos",
    "products.intro":
      "Qué incluye cada servicio y qué se entrega. El coste lo indicamos en la propuesta, después del briefing.",
    "products.care.label": "Mantenimiento",
    "products.care.title": "Planes Care",
    "products.care.intro":
      "Soporte mensual: el sitio vivo, actualizado y bajo vigilancia.",
    "products.care.includes": "Qué incluye",
    "products.care.featured": "El más elegido",
    "products.cta": "Hablemos de tu proyecto",

    /* ─── Formulario ────────────────────────────────────────── */
    "form.dialogLabel": "Ser cliente",
    "form.eyebrow": "Empieza tu proyecto",
    "form.headlineLine1": "Creemos algo",
    "form.headlineAccent": "excepcional",
    "form.pitch":
      "Rellena el formulario: respondemos en 24 horas y llevamos una propuesta a la primera llamada.",
    "form.promise1": "Un director de arte dedicado a tu proyecto",
    "form.promise2": "Proceso transparente y reuniones semanales",
    "form.promise3": "Plazos y alcance fijados en el contrato",
    "form.headerLabel": "Solicitud",
    "form.close": "Cerrar",

    "form.name.label": "Nombre",
    "form.name.placeholder": "Alejandro",
    "form.company.label": "Empresa",
    "form.company.placeholder": "Tu marca",
    "form.email.label": "Email",
    "form.email.placeholder": "you@company.com",
    "form.phone.label": "Teléfono",
    "form.phone.placeholder": "+7 (___) ___-__-__",
    "form.telegram.label": "Telegram",
    "form.telegram.placeholder": "@username",
    "form.services.label": "Servicios que necesitas",
    "form.budget.label": "Presupuesto",
    "form.message.label": "Sobre el proyecto",
    "form.message.placeholder": "Cuéntanos más sobre la tarea...",

    "form.service.branding": "Branding",
    "form.service.web": "Diseño web",
    "form.service.identity": "Identidad",
    "form.service.uxui": "UX/UI",
    "form.service.motion": "Motion",
    "form.service.other": "Otro",

    "form.budget.upTo150": "Hasta 150 000 ₽",
    "form.budget.150to500": "150 000 – 500 000 ₽",
    "form.budget.500to1000": "500 000 – 1 000 000 ₽",
    "form.budget.over1000": "Más de 1 000 000 ₽",

    "form.error.name": "Introduce tu nombre",
    "form.error.email": "Introduce tu email",
    "form.error.phone": "Introduce tu número de teléfono",
    "form.error.message": "Cuéntanos sobre el proyecto",
    "form.error.services": "Elige al menos un servicio",
    "form.error.budget": "Elige un presupuesto",
    "form.error.submit":
      "No hemos podido enviar la solicitud. Inténtalo de nuevo.",
    "form.error.generic": "Error al enviar",

    "form.submit": "Enviar solicitud",
    "form.submitting": "Enviando...",
    "form.privacyPrefix": "Al pulsar el botón aceptas la",
    "form.privacyLink": "política de privacidad",

    "form.success.title": "Solicitud enviada",
    "form.success.body": "Nos pondremos en contacto contigo en 24 horas.",
    "form.success.close": "Cerrar",

    /* ─── Pie de página ─────────────────────────────────────── */
    "footer.navigation": "Navegación",
    "footer.studio": "Estudio",
    "footer.contact": "Contacto",
    "footer.work": "Portafolio",
    "footer.studioLink": "Sobre el estudio",
    "footer.services": "Servicios",
    "footer.contactLink": "Contactar",
    "footer.about": "Nosotros",
    "footer.journal": "Diario",
    "footer.process": "Proceso",
    "footer.engineering": "Ingeniería",
    "footer.location": "Moscú, Rusia",
    "footer.rights": "Todos los derechos reservados.",
    "footer.privacy": "Política de privacidad",

    /* ─── Chat de muestra ───────────────────────────────────── */
    "chat.bot": "bot",
    "chat.you": "tú",
    "chat.online": "en línea",
    "chat.typing": "escribiendo…",
    "chat.placeholder": "Mensaje…",
    "chat.send": "Enviar",

    /* ─── Cambio de idioma ──────────────────────────────────── */
    "lang.label": "Idioma de la interfaz",
    "lang.ru": "Ruso",
    "lang.en": "Inglés",
    "lang.zh": "Chino",
    "lang.es": "Español",
    "lang.pt": "Portugués",
    "lang.fr": "Francés",
    "lang.de": "Alemán",
    "lang.ar": "Árabe",
    "lang.ja": "Japonés",
    "lang.tr": "Turco",
    "lang.switchToEn": "Cambiar a inglés",
    "lang.switchToRu": "Cambiar a ruso",
  },

  /* ══════════════════════════════════════════════════════════════
     PORTUGUÊS (PT)
     ══════════════════════════════════════════════════════════════ */
  pt: {
    /* ─── Объединённое меню портфолио ───────────────────── */
    "portfolio.eyebrow": "Secções do portfólio",
    "portfolio.title": "Para quem desenhamos",
    "portfolio.intro": "Escolha à esquerda um produto — o que fizemos exactamente — e um sector, para quem. Os filtros combinam-se: «Web & Mobile» mais «Restauração» mostra sites feitos para restaurantes e cafés.",
    "portfolio.productLabel": "Produto",
    "portfolio.industryLabel": "Sector",
    "portfolio.allProducts": "Todos os produtos",
    "portfolio.everything": "Portfólio completo",
    "portfolio.allIndustries": "Todos os sectores",
    "portfolio.everyone": "Todos os clientes",
    "portfolio.allDesc": "O portfólio completo do estúdio: identidade, sites, 3D e conteúdo.",
    "portfolio.worksUnit": "projectos",
    "portfolio.removeFilter": "Remover filtro",
    "portfolio.emptyLabel": "Secção em preparação",
    "portfolio.emptyText": "Ainda não temos casos publicados para esta combinação. Fale-nos do seu projecto — mostramos trabalhos próximos e explicamos como ficaria no seu caso.",
    "portfolio.discuss": "Falar sobre o projecto",
    "portfolio.reset": "Limpar filtros",
    /* ─── Geral ─────────────────────────────────────────────── */
    "common.brand": "Kuznetsova Design",
    "common.brandSub": "Estúdio de design · Moscovo",
    "common.home": "Início",
    "common.close": "Fechar",
    "common.open": "Abrir",
    "common.back": "Voltar",
    "common.next": "Seguinte",
    "common.prev": "Anterior",
    "common.more": "Saber mais",
    "common.viewAll": "Ver tudo",
    "common.startProject": "Iniciar um projeto",
    "common.discussProject": "Falar sobre o projeto",
    "common.becomeClient": "Tornar-se cliente",
    "common.viewCase": "Ver o caso",
    "common.openSite": "Visitar o site",
    "common.client": "Cliente",
    "common.year": "Ano",
    "common.category": "Categoria",
    "common.tools": "Ferramentas",
    "common.website": "Site",
    "common.email": "Email",
    "common.phone": "Telefone",
    "common.telegram": "Telegram",
    "common.location": "Moscovo, Rússia",
    "common.city": "Moscovo",
    "common.privacy": "Política de privacidade",
    "common.rights": "Todos os direitos reservados.",
    "common.scrollDown": "Deslize para explorar",
    "common.loading": "A carregar…",
    "common.concept": "Conceito",
    "common.conceptNote":
      "Projeto de iniciativa do estúdio, não um trabalho por encomenda.",

    /* ─── Navegação ─────────────────────────────────────────── */
    "nav.home": "Início",
    "nav.services": "Serviços",
    "nav.studio": "O estúdio",
    "nav.about": "Sobre nós",
    "nav.work": "Portefólio",
    "nav.blog": "O nosso diário",
    "nav.blogShort": "Diário",
    "nav.journal": "Diário",
    "nav.contact": "Contacto",
    "nav.contacts": "Contactos",
    "nav.process": "Processo",
    "nav.engineering": "Engenharia",
    "nav.startProject": "Comece o seu projeto",
    "nav.openMenu": "Abrir o menu",
    "nav.closeMenu": "Fechar o menu",
    "nav.navigation": "Navegação",

    /* ─── Menu em ecrã inteiro ──────────────────────────────── */
    "menu.label": "Navegação",
    "menu.becomeClient": "+ Tornar-se cliente",
    "menu.badgeTitle": "Cinco anos de prática",
    "menu.badgeSub": "Estúdio de design para marcas premium",
    "menu.contactTitle": "Telegram",
    "menu.copyright": "© Kuznetsova Design 2026",

    /* ─── Primeiro ecrã ─────────────────────────────────────── */
    "hero.city": "MOSCOW",
    "hero.brandTop": "Kuznetsova",
    "hero.brandBottom": "DESIGN.",
    "hero.tagline":
      "Sistemas visuais · Identidade de marca · Experiências digitais · Desenvolvimento web",

    /* ─── Faixa informativa ─────────────────────────────────── */
    "info.label": "O que criamos",
    "info.subtext":
      "Da estratégia e da identidade visual ao desenvolvimento web, à automatização e a sistemas digitais inteligentes.",

    /* ─── Sobre o estúdio ───────────────────────────────────── */
    "about.eyebrow": "Sobre nós",
    "about.title": "Desenhamos para o que vem a seguir.",
    "about.sub":
      "Criamos sistemas visuais que funcionam em todas as dimensões — da marca e do código ao 3D completo.",
    "about.cta": "Iniciar um projeto",

    "about.stat.years": "anos em design",
    "about.stat.projects": "projetos",
    "about.stat.disciplines": "disciplinas",
    "about.stat.code": "de código escrito à mão",

    "about.servicesLabel": "O que fazemos",
    "about.servicesIntro":
      "Três disciplinas, um único padrão: trabalho que supera o briefing",

    "about.service.branding.title": "BRANDING E GRÁFICA",
    "about.service.branding.desc":
      "Logótipos, manuais de marca, embalagem, merchandising e uma identidade completa que fica na memória.",
    "about.service.web.title": "WEB & DIGITAL",
    "about.service.web.desc":
      "Sites e produtos digitais modernos escritos à mão. Sem templates e sem cedências.",
    "about.service.3d.title": "3D-DESIGN",
    "about.service.3d.desc":
      "Visualização, modelação 3D, motion e soluções AR/VR. Volume que vende.",

    "about.story.eyebrow": "História da marca",
    "about.story.headlineLine1": "Um só nome.",
    "about.story.headlineLine2": "Todas as formas de design.",
    "about.story.kristina.name": "Kristina Kuznetsova",
    "about.story.kristina.role": "Fundadora · Diretora de arte",
    "about.story.kristina.text":
      "Uma designer que não reconhece fronteiras entre disciplinas. Design gráfico, desenvolvimento web e visualização 3D não são para ela profissões diferentes, mas um só conjunto de ferramentas. O estúdio existe para o provar, projeto a projeto.",
    "about.story.yaroslav.name": "Yaroslav Kiselev",
    "about.story.yaroslav.role": "CEO · Diretor financeiro",
    "about.story.yaroslav.text":
      "Garante que cada projeto tem um plano claro, um orçamento e um prazo. Que o cliente recebe resultados e não justificações.",
    "about.story.closing":
      "Juntos construímos um estúdio onde o design é respeitado como instrumento de negócio e não como enfeite.",

    "about.quote.text":
      "Design não é o aspeto de uma coisa. É a forma como funciona.",
    "about.quote.author": "Steve Jobs — o princípio que o estúdio segue",

    "about.contacts.title": "Os nossos contactos",
    "about.contacts.kristina": "Email de Kristina Kuznetsova",
    "about.contacts.yaroslav": "Email de Yaroslav Kiselev",
    "about.contacts.phone": "Número de telefone",

    /* ─── Processo ──────────────────────────────────────────── */
    "process.eyebrow": "— Como trabalhamos",
    "process.bgLabel": "HOW TO WORK",
    "process.titleLine1": "Processo",
    "process.titleLine2": "de trabalho",
    "process.subLine1": "Da primeira mensagem à entrega dos ficheiros.",
    "process.subLine2": "Cada etapa é transparente e controlada.",

    "process.step1.title": "Briefing",
    "process.step1.desc":
      "Conhecemo-nos, registamos a tarefa por escrito e acordamos âmbito, orçamento e prazos. Sem briefing não começamos.",
    "process.step2.title": "Conceito",
    "process.step2.desc":
      "Kristina desenvolve a solução visual. Revisão interna antes de a mostrar ao cliente.",
    "process.step3.title": "Apresentação e revisões",
    "process.step3.desc":
      "Mostramos, discutimos, refinamos. O contrato inclui até duas rondas de alterações.",
    "process.step4.title": "Produção",
    "process.step4.desc":
      "Ficheiros finais, maquetização, renders e entrega dos originais. Tudo o que é preciso para lançar.",
    "process.step5.title": "Entrega",
    "process.step5.desc":
      "Assinatura do auto, entrega dos materiais e recolha de feedback. Projeto fechado, caso pronto.",

    /* ─── Serviços ──────────────────────────────────────────── */
    "services.title": "* services _.",
    "services.sub":
      "Enquanto equipa unida de especialistas, criamos sites, soluções digitais e aplicações nativas que ficam na memória e provocam emoção.",
    "services.label": "Serviços",
    "services.all": "Todos os serviços",

    /* ─── More Development ─────────────────────────────────── */
    "more.eyebrow": "Code",
    "more.title": "{ More Development }",
    "more.badge": "<Code />",
    "more.intro":
      "Assumimos o trabalho no cruzamento entre design e tecnologia: automatizamos processos e integramos redes neuronais nos cenários reais do negócio.",
    "more.cta": "Falar sobre o projeto",

    /* ─── Design técnico ────────────────────────────────────── */
    "tech.eyebrow": "Engenharia e documentação",
    "tech.title": "< technical design >",
    "tech.badge": "M 1:1",
    "tech.intro":
      "Preparamos documentação técnica para produção: desenhos cotados com tolerâncias, esquemas elétricos e desenho de placas de circuito impresso.",
    "tech.cta": "Falar sobre o projeto",

    /* ─── Opiniões ──────────────────────────────────────────── */
    "reviews.eyebrow": "Opiniões de clientes",
    "reviews.titleLine1": "Confiam-nos",
    "reviews.titleLine2": "o resultado",
    "reviews.item1.name": "Alexander Petrov",
    "reviews.item1.role": "CEO, Noir Coffee",
    "reviews.item1.text":
      "Kristina e a equipa fizeram o rebranding depressa e sem rodeios — embalagem, site e redes sociais no mesmo estilo. Vê-se que o design trabalha para as vendas e não só para o olhar.",
    "reviews.item2.name": "Maria Sokolova",
    "reviews.item2.role": "Diretora de marketing, Solara Energy",
    "reviews.item2.text":
      "Processo transparente em cada etapa: briefing, conceito, revisões — tudo dentro do prazo e sem surpresas no orçamento. Ficámos com um site de que temos genuíno orgulho.",
    "reviews.item3.name": "Dmitry Volkov",
    "reviews.item3.role": "Founder, Trove Platform",
    "reviews.item3.text":
      "Precisávamos de um dashboard complexo com uma utilização evidente. O estúdio percebeu o produto mais a fundo do que esperávamos e propôs soluções que simplificaram a vida aos utilizadores.",

    /* ─── Página de portefólio ──────────────────────────────── */
    "work.title": "Portfolio",
    "work.metaTitle": "Portefólio — Kuznetsova Design",
    "work.desc":
      "Projetos selecionados em branding, web, 3D e direção de arte",
    "work.stat.projects": "projetos",
    "work.stat.categories": "disciplinas",
    "work.stat.years": "anos em design",
    "work.backToPortfolio": "Portefólio",

    /* ─── Montra ────────────────────────────────────────────── */
    "portfolio.categories": "Categorias",
    "portfolio.categoriesNav": "Categorias do portefólio",
    "portfolio.industries": "Setores",
    "portfolio.industriesNav": "Setores do portefólio",
    "portfolio.all": "Todos os trabalhos",
    "portfolio.hint": "Deslize para explorar",
    "portfolio.prevSlide": "Slide anterior",
    "portfolio.nextSlide": "Slide seguinte",
    "portfolio.slide": "Slide",
    "portfolio.empty":
      "Ainda não há trabalhos publicados nesta secção.",
    "portfolio.worksCount": "trabalhos",

    /* ─── Página de caso ────────────────────────────────────── */
    "case.back": "Portefólio",
    "case.about": "Sobre o projeto",
    "case.gallery": "Galeria",
    "case.mainScreen": "Ecrã principal",
    "case.details": "Detalhes",
    "case.final": "Final",
    "case.client": "Cliente",
    "case.year": "Ano",
    "case.category": "Categoria",
    "case.tools": "Ferramentas",
    "case.site": "Site",
    "case.prev": "Anterior",
    "case.next": "Seguinte",
    "case.nav": "Navegação entre projetos",

    /* ─── Diário ────────────────────────────────────────────── */
    "blog.title": "Blog & News",
    "blog.metaTitle": "Diário e notícias — Kuznetsova Design",
    "blog.desc": "Trabalhos, eventos e notas da vida do estúdio",
    "blog.all": "Todos os conteúdos",
    "blog.featured": "Artigo em destaque",
    "blog.readTime": "min de leitura",
    "blog.readMore": "Ler",
    "blog.backToBlog": "Todos os artigos",

    /* ─── Serviços e acompanhamento ─────────────────────────── */
    "products.label": "Catálogo",
    "products.title": "O que oferecemos",
    "products.intro":
      "O que cada serviço inclui e o que entrega. O valor é indicado na proposta, depois do briefing.",
    "products.care.label": "Acompanhamento",
    "products.care.title": "Planos Care",
    "products.care.intro":
      "Apoio mensal: o site vivo, atualizado e sob vigilância.",
    "products.care.includes": "O que inclui",
    "products.care.featured": "O mais escolhido",
    "products.cta": "Falar sobre a sua tarefa",

    /* ─── Formulário ────────────────────────────────────────── */
    "form.dialogLabel": "Tornar-se cliente",
    "form.eyebrow": "Comece o seu projeto",
    "form.headlineLine1": "Vamos criar algo",
    "form.headlineAccent": "excecional",
    "form.pitch":
      "Preencha o formulário — respondemos em 24 horas e levamos uma direção logo à primeira chamada.",
    "form.promise1": "Um diretor de arte dedicado ao seu projeto",
    "form.promise2": "Processo transparente com pontos de situação semanais",
    "form.promise3": "Prazos e âmbito fixados no contrato",
    "form.headerLabel": "Pedido",
    "form.close": "Fechar",

    "form.name.label": "Nome",
    "form.name.placeholder": "Alexandre",
    "form.company.label": "Empresa",
    "form.company.placeholder": "A sua marca",
    "form.email.label": "Email",
    "form.email.placeholder": "you@company.com",
    "form.phone.label": "Telefone",
    "form.phone.placeholder": "+7 (___) ___-__-__",
    "form.telegram.label": "Telegram",
    "form.telegram.placeholder": "@username",
    "form.services.label": "Serviços de que precisa",
    "form.budget.label": "Orçamento",
    "form.message.label": "Sobre o projeto",
    "form.message.placeholder": "Conte-nos mais sobre a tarefa...",

    "form.service.branding": "Branding",
    "form.service.web": "Design web",
    "form.service.identity": "Identidade",
    "form.service.uxui": "UX/UI",
    "form.service.motion": "Motion",
    "form.service.other": "Outro",

    "form.budget.upTo150": "Até 150 000 ₽",
    "form.budget.150to500": "150 000 – 500 000 ₽",
    "form.budget.500to1000": "500 000 – 1 000 000 ₽",
    "form.budget.over1000": "Mais de 1 000 000 ₽",

    "form.error.name": "Indique o seu nome",
    "form.error.email": "Indique o seu email",
    "form.error.phone": "Indique o seu número de telefone",
    "form.error.message": "Fale-nos do projeto",
    "form.error.services": "Escolha pelo menos um serviço",
    "form.error.budget": "Escolha um orçamento",
    "form.error.submit":
      "Não foi possível enviar o pedido. Tente novamente.",
    "form.error.generic": "Erro no envio",

    "form.submit": "Enviar pedido",
    "form.submitting": "A enviar...",
    "form.privacyPrefix": "Ao carregar no botão aceita a",
    "form.privacyLink": "política de privacidade",

    "form.success.title": "Pedido enviado",
    "form.success.body": "Entraremos em contacto dentro de 24 horas.",
    "form.success.close": "Fechar",

    /* ─── Rodapé ────────────────────────────────────────────── */
    "footer.navigation": "Navegação",
    "footer.studio": "Estúdio",
    "footer.contact": "Contactos",
    "footer.work": "Portefólio",
    "footer.studioLink": "Sobre o estúdio",
    "footer.services": "Serviços",
    "footer.contactLink": "Contactar",
    "footer.about": "Sobre nós",
    "footer.journal": "Diário",
    "footer.process": "Processo",
    "footer.engineering": "Engenharia",
    "footer.location": "Moscovo, Rússia",
    "footer.rights": "Todos os direitos reservados.",
    "footer.privacy": "Política de privacidade",

    /* ─── Chat de demonstração ──────────────────────────────── */
    "chat.bot": "bot",
    "chat.you": "você",
    "chat.online": "online",
    "chat.typing": "a escrever…",
    "chat.placeholder": "Mensagem…",
    "chat.send": "Enviar",

    /* ─── Mudança de idioma ─────────────────────────────────── */
    "lang.label": "Idioma da interface",
    "lang.ru": "Russo",
    "lang.en": "Inglês",
    "lang.zh": "Chinês",
    "lang.es": "Espanhol",
    "lang.pt": "Português",
    "lang.fr": "Francês",
    "lang.de": "Alemão",
    "lang.ar": "Árabe",
    "lang.ja": "Japonês",
    "lang.tr": "Turco",
    "lang.switchToEn": "Mudar para inglês",
    "lang.switchToRu": "Mudar para russo",
  },

  /* ══════════════════════════════════════════════════════════════
     FRANÇAIS (FR)
     Espace insécable ( ) avant « : ; ! ? », comme le veut l'usage.
     ══════════════════════════════════════════════════════════════ */
  fr: {
    /* ─── Объединённое меню портфолио ───────────────────── */
    "portfolio.eyebrow": "Sections du portfolio",
    "portfolio.title": "Pour qui nous concevons",
    "portfolio.intro": "Choisissez à gauche un produit — ce que nous avons réellement fait — et un secteur, pour qui. Les filtres se combinent : « Web & Mobile » et « Restauration » affichent les sites créés pour des restaurants et des cafés.",
    "portfolio.productLabel": "Produit",
    "portfolio.industryLabel": "Secteur",
    "portfolio.allProducts": "Tous les produits",
    "portfolio.everything": "Portfolio complet",
    "portfolio.allIndustries": "Tous les secteurs",
    "portfolio.everyone": "Tous les clients",
    "portfolio.allDesc": "Le portfolio complet du studio : identité, sites web, 3D et contenu.",
    "portfolio.worksUnit": "projets",
    "portfolio.removeFilter": "Retirer le filtre",
    "portfolio.emptyLabel": "Section en préparation",
    "portfolio.emptyText": "Nous n'avons pas encore de cas publiés pour cette combinaison. Parlez-nous de votre projet : nous montrerons des travaux proches et verrons ce que cela donnerait chez vous.",
    "portfolio.discuss": "Parler du projet",
    "portfolio.reset": "Réinitialiser les filtres",
    /* ─── Général ───────────────────────────────────────────── */
    "common.brand": "Kuznetsova Design",
    "common.brandSub": "Studio de design · Moscou",
    "common.home": "Accueil",
    "common.close": "Fermer",
    "common.open": "Ouvrir",
    "common.back": "Retour",
    "common.next": "Suivant",
    "common.prev": "Précédent",
    "common.more": "En savoir plus",
    "common.viewAll": "Tout voir",
    "common.startProject": "Démarrer un projet",
    "common.discussProject": "Parlons du projet",
    "common.becomeClient": "Devenir client",
    "common.viewCase": "Voir le projet",
    "common.openSite": "Visiter le site",
    "common.client": "Client",
    "common.year": "Année",
    "common.category": "Catégorie",
    "common.tools": "Outils",
    "common.website": "Site web",
    "common.email": "Email",
    "common.phone": "Téléphone",
    "common.telegram": "Telegram",
    "common.location": "Moscou, Russie",
    "common.city": "Moscou",
    "common.privacy": "Politique de confidentialité",
    "common.rights": "Tous droits réservés.",
    "common.scrollDown": "Faites défiler",
    "common.loading": "Chargement…",
    "common.concept": "Concept",
    "common.conceptNote":
      "Projet initié par le studio, et non une commande client.",

    /* ─── Navigation ────────────────────────────────────────── */
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.studio": "Le studio",
    "nav.about": "À propos",
    "nav.work": "Portfolio",
    "nav.blog": "Notre journal",
    "nav.blogShort": "Journal",
    "nav.journal": "Journal",
    "nav.contact": "Contact",
    "nav.contacts": "Contacts",
    "nav.process": "Processus",
    "nav.engineering": "Ingénierie",
    "nav.startProject": "Lancez votre projet",
    "nav.openMenu": "Ouvrir le menu",
    "nav.closeMenu": "Fermer le menu",
    "nav.navigation": "Navigation",

    /* ─── Menu plein écran ──────────────────────────────────── */
    "menu.label": "Navigation",
    "menu.becomeClient": "+ Devenir client",
    "menu.badgeTitle": "Cinq ans de pratique",
    "menu.badgeSub": "Studio de design pour marques premium",
    "menu.contactTitle": "Telegram",
    "menu.copyright": "© Kuznetsova Design 2026",

    /* ─── Première vue ──────────────────────────────────────── */
    "hero.city": "MOSCOW",
    "hero.brandTop": "Kuznetsova",
    "hero.brandBottom": "DESIGN.",
    "hero.tagline":
      "Systèmes visuels · Identité de marque · Expériences numériques · Développement web",

    /* ─── Bandeau d'introduction ────────────────────────────── */
    "info.label": "Ce que nous créons",
    "info.subtext":
      "De la stratégie et de l'identité visuelle au développement web, à l'automatisation et aux systèmes numériques intelligents.",

    /* ─── À propos ──────────────────────────────────────────── */
    "about.eyebrow": "À propos",
    "about.title": "Nous concevons pour ce qui vient.",
    "about.sub":
      "Nous construisons des systèmes visuels qui tiennent dans toutes les dimensions — de la marque et du code jusqu'à la 3D complète.",
    "about.cta": "Démarrer un projet",

    "about.stat.years": "ans de design",
    "about.stat.projects": "projets",
    "about.stat.disciplines": "disciplines",
    "about.stat.code": "de code écrit à la main",

    "about.servicesLabel": "Ce que nous faisons",
    "about.servicesIntro":
      "Trois disciplines, une seule exigence : un travail qui dépasse le brief",

    "about.service.branding.title": "BRANDING ET GRAPHISME",
    "about.service.branding.desc":
      "Logos, chartes graphiques, packaging, goodies et une identité complète dont on se souvient.",
    "about.service.web.title": "WEB & DIGITAL",
    "about.service.web.desc":
      "Sites et produits numériques modernes, écrits à la main. Sans gabarits ni compromis.",
    "about.service.3d.title": "3D-DESIGN",
    "about.service.3d.desc":
      "Visualisation, modélisation 3D, motion et solutions AR/VR. Du volume qui vend.",

    "about.story.eyebrow": "Histoire de la marque",
    "about.story.headlineLine1": "Un seul nom.",
    "about.story.headlineLine2": "Toutes les formes du design.",
    "about.story.kristina.name": "Kristina Kuznetsova",
    "about.story.kristina.role": "Fondatrice · Directrice artistique",
    "about.story.kristina.text":
      "Une designer qui ne reconnaît aucune frontière entre les disciplines. Design graphique, développement web, visualisation 3D : pour elle, ce ne sont pas des métiers différents, mais une même boîte à outils. Le studio existe pour le prouver, projet après projet.",
    "about.story.yaroslav.name": "Yaroslav Kiselev",
    "about.story.yaroslav.role": "CEO · Directeur financier",
    "about.story.yaroslav.text":
      "Il veille à ce que chaque projet ait un plan clair, un budget et une échéance. À ce que le client reçoive un résultat, et non des explications.",
    "about.story.closing":
      "Ensemble, nous bâtissons un studio où le design est respecté comme un outil business, et non comme une décoration.",

    "about.quote.text":
      "Le design, ce n'est pas l'apparence d'une chose. C'est la façon dont elle fonctionne.",
    "about.quote.author": "Steve Jobs — le principe que suit le studio",

    "about.contacts.title": "Nos contacts",
    "about.contacts.kristina": "Email de Kristina Kuznetsova",
    "about.contacts.yaroslav": "Email de Yaroslav Kiselev",
    "about.contacts.phone": "Numéro de téléphone",

    /* ─── Processus ─────────────────────────────────────────── */
    "process.eyebrow": "— Notre façon de travailler",
    "process.bgLabel": "HOW TO WORK",
    "process.titleLine1": "Le processus",
    "process.titleLine2": "de travail",
    "process.subLine1": "Du premier message à la remise des fichiers.",
    "process.subLine2": "Chaque étape est transparente et maîtrisée.",

    "process.step1.title": "Brief",
    "process.step1.desc":
      "Nous faisons connaissance, formalisons la demande par écrit et fixons le périmètre, le budget et les délais. Rien ne commence sans brief.",
    "process.step2.title": "Concept",
    "process.step2.desc":
      "Kristina développe la direction visuelle. Revue interne avant toute présentation au client.",
    "process.step3.title": "Présentation et retours",
    "process.step3.desc":
      "Nous présentons, nous discutons, nous affinons. Deux séries de modifications sont incluses au contrat.",
    "process.step4.title": "Production",
    "process.step4.desc":
      "Fichiers finaux, intégration, rendus et remise des sources. Tout ce qu'il faut pour lancer.",
    "process.step5.title": "Livraison",
    "process.step5.desc":
      "Signature du procès-verbal, remise des matériaux et retour d'expérience. Projet clos, étude de cas prête.",

    /* ─── Services ──────────────────────────────────────────── */
    "services.title": "* services _.",
    "services.sub":
      "Équipe soudée de spécialistes, nous créons des sites, des solutions numériques et des applications natives dont on se souvient et qui font naître une émotion.",
    "services.label": "Services",
    "services.all": "Tous les services",

    /* ─── More Development ─────────────────────────────────── */
    "more.eyebrow": "Code",
    "more.title": "{ More Development }",
    "more.badge": "<Code />",
    "more.intro":
      "Nous prenons en charge ce qui se joue entre design et technologie : automatiser les processus et intégrer les réseaux de neurones aux scénarios réels de l'entreprise.",
    "more.cta": "Parlons du projet",

    /* ─── Design technique ──────────────────────────────────── */
    "tech.eyebrow": "Ingénierie et documentation",
    "tech.title": "< technical design >",
    "tech.badge": "M 1:1",
    "tech.intro":
      "Nous préparons la documentation technique pour la production : plans cotés avec tolérances, schémas de principe et routage de cartes électroniques.",
    "tech.cta": "Parlons du projet",

    /* ─── Avis ──────────────────────────────────────────────── */
    "reviews.eyebrow": "Avis clients",
    "reviews.titleLine1": "Ils nous confient",
    "reviews.titleLine2": "le résultat",
    "reviews.item1.name": "Alexander Petrov",
    "reviews.item1.role": "CEO, Noir Coffee",
    "reviews.item1.text":
      "Kristina et son équipe ont mené le rebranding vite et sans détour : packaging, site et réseaux sociaux dans un même style. On voit que le design travaille pour les ventes, et pas seulement pour l'œil.",
    "reviews.item2.name": "Maria Sokolova",
    "reviews.item2.role": "Directrice marketing, Solara Energy",
    "reviews.item2.text":
      "Un processus transparent à chaque étape : brief, concept, retours — tout dans les temps et sans surprise budgétaire. Nous avons un site dont nous sommes vraiment fiers.",
    "reviews.item3.name": "Dmitry Volkov",
    "reviews.item3.role": "Founder, Trove Platform",
    "reviews.item3.text":
      "Il nous fallait un tableau de bord complexe et pourtant évident à utiliser. Le studio a compris le produit plus en profondeur que prévu et a proposé des solutions qui ont simplifié le travail de nos utilisateurs.",

    /* ─── Page portfolio ────────────────────────────────────── */
    "work.title": "Portfolio",
    "work.metaTitle": "Portfolio — Kuznetsova Design",
    "work.desc":
      "Projets choisis en branding, web, 3D et direction artistique",
    "work.stat.projects": "projets",
    "work.stat.categories": "disciplines",
    "work.stat.years": "ans de design",
    "work.backToPortfolio": "Portfolio",

    /* ─── Vitrine ───────────────────────────────────────────── */
    "portfolio.categories": "Catégories",
    "portfolio.categoriesNav": "Catégories du portfolio",
    "portfolio.industries": "Secteurs",
    "portfolio.industriesNav": "Secteurs du portfolio",
    "portfolio.all": "Tous les projets",
    "portfolio.hint": "Faites défiler",
    "portfolio.prevSlide": "Diapositive précédente",
    "portfolio.nextSlide": "Diapositive suivante",
    "portfolio.slide": "Diapositive",
    "portfolio.empty":
      "Aucun projet publié dans cette section pour le moment.",
    "portfolio.worksCount": "projets",

    /* ─── Page projet ───────────────────────────────────────── */
    "case.back": "Portfolio",
    "case.about": "À propos du projet",
    "case.gallery": "Galerie",
    "case.mainScreen": "Écran principal",
    "case.details": "Détails",
    "case.final": "Final",
    "case.client": "Client",
    "case.year": "Année",
    "case.category": "Catégorie",
    "case.tools": "Outils",
    "case.site": "Site web",
    "case.prev": "Précédent",
    "case.next": "Suivant",
    "case.nav": "Navigation entre les projets",

    /* ─── Journal ───────────────────────────────────────────── */
    "blog.title": "Blog & News",
    "blog.metaTitle": "Journal et actualités — Kuznetsova Design",
    "blog.desc": "Projets, événements et notes de la vie du studio",
    "blog.all": "Tous les contenus",
    "blog.featured": "Article à la une",
    "blog.readTime": "min de lecture",
    "blog.readMore": "Lire",
    "blog.backToBlog": "Tous les articles",

    /* ─── Prestations et suivi ──────────────────────────────── */
    "products.label": "Catalogue",
    "products.title": "Ce que nous proposons",
    "products.intro":
      "Le contenu et le résultat de chaque prestation. Le montant est indiqué dans la proposition, après le brief.",
    "products.care.label": "Accompagnement",
    "products.care.title": "Formules Care",
    "products.care.intro":
      "Un suivi mensuel : un site vivant, à jour et surveillé.",
    "products.care.includes": "Ce qui est inclus",
    "products.care.featured": "Le plus choisi",
    "products.cta": "Parlons de votre projet",

    /* ─── Formulaire ────────────────────────────────────────── */
    "form.dialogLabel": "Devenir client",
    "form.eyebrow": "Lancez votre projet",
    "form.headlineLine1": "Créons quelque chose",
    "form.headlineAccent": "d'exceptionnel",
    "form.pitch":
      "Remplissez le formulaire — nous répondons sous 24 heures et arrivons avec une direction dès le premier appel.",
    "form.promise1": "Un directeur artistique dédié à votre projet",
    "form.promise2": "Un processus transparent et des points hebdomadaires",
    "form.promise3": "Délais et périmètre inscrits au contrat",
    "form.headerLabel": "Demande",
    "form.close": "Fermer",

    "form.name.label": "Nom",
    "form.name.placeholder": "Alexandre",
    "form.company.label": "Société",
    "form.company.placeholder": "Votre marque",
    "form.email.label": "Email",
    "form.email.placeholder": "you@company.com",
    "form.phone.label": "Téléphone",
    "form.phone.placeholder": "+7 (___) ___-__-__",
    "form.telegram.label": "Telegram",
    "form.telegram.placeholder": "@username",
    "form.services.label": "Prestations souhaitées",
    "form.budget.label": "Budget",
    "form.message.label": "Le projet",
    "form.message.placeholder": "Parlez-nous de votre besoin...",

    "form.service.branding": "Branding",
    "form.service.web": "Design web",
    "form.service.identity": "Identité",
    "form.service.uxui": "UX/UI",
    "form.service.motion": "Motion",
    "form.service.other": "Autre",

    "form.budget.upTo150": "Jusqu'à 150 000 ₽",
    "form.budget.150to500": "150 000 – 500 000 ₽",
    "form.budget.500to1000": "500 000 – 1 000 000 ₽",
    "form.budget.over1000": "Plus de 1 000 000 ₽",

    "form.error.name": "Indiquez votre nom",
    "form.error.email": "Indiquez votre email",
    "form.error.phone": "Indiquez votre numéro de téléphone",
    "form.error.message": "Parlez-nous du projet",
    "form.error.services": "Choisissez au moins une prestation",
    "form.error.budget": "Choisissez un budget",
    "form.error.submit":
      "L'envoi de la demande a échoué. Réessayez.",
    "form.error.generic": "Échec de l'envoi",

    "form.submit": "Envoyer la demande",
    "form.submitting": "Envoi...",
    "form.privacyPrefix": "En cliquant, vous acceptez la",
    "form.privacyLink": "politique de confidentialité",

    "form.success.title": "Demande envoyée",
    "form.success.body": "Nous vous répondons sous 24 heures.",
    "form.success.close": "Fermer",

    /* ─── Pied de page ──────────────────────────────────────── */
    "footer.navigation": "Navigation",
    "footer.studio": "Studio",
    "footer.contact": "Contacts",
    "footer.work": "Portfolio",
    "footer.studioLink": "Le studio",
    "footer.services": "Services",
    "footer.contactLink": "Nous contacter",
    "footer.about": "À propos",
    "footer.journal": "Journal",
    "footer.process": "Processus",
    "footer.engineering": "Ingénierie",
    "footer.location": "Moscou, Russie",
    "footer.rights": "Tous droits réservés.",
    "footer.privacy": "Politique de confidentialité",

    /* ─── Chat de démonstration ─────────────────────────────── */
    "chat.bot": "bot",
    "chat.you": "vous",
    "chat.online": "en ligne",
    "chat.typing": "écrit…",
    "chat.placeholder": "Message…",
    "chat.send": "Envoyer",

    /* ─── Changement de langue ──────────────────────────────── */
    "lang.label": "Langue de l'interface",
    "lang.ru": "Russe",
    "lang.en": "Anglais",
    "lang.zh": "Chinois",
    "lang.es": "Espagnol",
    "lang.pt": "Portugais",
    "lang.fr": "Français",
    "lang.de": "Allemand",
    "lang.ar": "Arabe",
    "lang.ja": "Japonais",
    "lang.tr": "Turc",
    "lang.switchToEn": "Passer à l'anglais",
    "lang.switchToRu": "Passer au russe",
  },

  /* ══════════════════════════════════════════════════════════════
     DEUTSCH (DE)
     ══════════════════════════════════════════════════════════════ */
  de: {
    /* ─── Объединённое меню портфолио ───────────────────── */
    "portfolio.eyebrow": "Portfolio-Bereiche",
    "portfolio.title": "Für wen wir gestalten",
    "portfolio.intro": "Wählen Sie links ein Produkt — was wir konkret gemacht haben — und eine Branche, für wen. Die Filter lassen sich kombinieren: „Web & Mobile“ plus „Gastronomie“ zeigt Websites für Restaurants und Cafés.",
    "portfolio.productLabel": "Produkt",
    "portfolio.industryLabel": "Branche",
    "portfolio.allProducts": "Alle Produkte",
    "portfolio.everything": "Gesamtes Portfolio",
    "portfolio.allIndustries": "Alle Branchen",
    "portfolio.everyone": "Alle Kunden",
    "portfolio.allDesc": "Das vollständige Portfolio des Studios: Branding, Websites, 3D und Content.",
    "portfolio.worksUnit": "Projekte",
    "portfolio.removeFilter": "Filter entfernen",
    "portfolio.emptyLabel": "Bereich in Vorbereitung",
    "portfolio.emptyText": "Für diese Kombination haben wir noch keine veröffentlichten Cases. Erzählen Sie uns von Ihrem Projekt — wir zeigen verwandte Arbeiten und besprechen, wie es bei Ihnen aussehen würde.",
    "portfolio.discuss": "Projekt besprechen",
    "portfolio.reset": "Filter zurücksetzen",
    /* ─── Allgemein ─────────────────────────────────────────── */
    "common.brand": "Kuznetsova Design",
    "common.brandSub": "Designbüro · Moskau",
    "common.home": "Zur Startseite",
    "common.close": "Schließen",
    "common.open": "Öffnen",
    "common.back": "Zurück",
    "common.next": "Nächstes",
    "common.prev": "Vorheriges",
    "common.more": "Mehr erfahren",
    "common.viewAll": "Alle ansehen",
    "common.startProject": "Projekt starten",
    "common.discussProject": "Projekt besprechen",
    "common.becomeClient": "Kunde werden",
    "common.viewCase": "Case ansehen",
    "common.openSite": "Website öffnen",
    "common.client": "Kunde",
    "common.year": "Jahr",
    "common.category": "Kategorie",
    "common.tools": "Werkzeuge",
    "common.website": "Website",
    "common.email": "E-Mail",
    "common.phone": "Telefon",
    "common.telegram": "Telegram",
    "common.location": "Moskau, Russland",
    "common.city": "Moskau",
    "common.privacy": "Datenschutzerklärung",
    "common.rights": "Alle Rechte vorbehalten.",
    "common.scrollDown": "Nach unten scrollen",
    "common.loading": "Wird geladen…",
    "common.concept": "Konzept",
    "common.conceptNote":
      "Ein Eigenprojekt des Studios, keine Auftragsarbeit.",

    /* ─── Navigation ────────────────────────────────────────── */
    "nav.home": "Start",
    "nav.services": "Leistungen",
    "nav.studio": "Über das Studio",
    "nav.about": "Über uns",
    "nav.work": "Portfolio",
    "nav.blog": "Unser Journal",
    "nav.blogShort": "Journal",
    "nav.journal": "Journal",
    "nav.contact": "Kontakt",
    "nav.contacts": "Kontakt",
    "nav.process": "Prozess",
    "nav.engineering": "Engineering",
    "nav.startProject": "Starten Sie Ihr Projekt",
    "nav.openMenu": "Menü öffnen",
    "nav.closeMenu": "Menü schließen",
    "nav.navigation": "Navigation",

    /* ─── Vollbildmenü ──────────────────────────────────────── */
    "menu.label": "Navigation",
    "menu.becomeClient": "+ Kunde werden",
    "menu.badgeTitle": "Fünf Jahre Praxis",
    "menu.badgeSub": "Designbüro für Premium-Marken",
    "menu.contactTitle": "Telegram",
    "menu.copyright": "© Kuznetsova Design 2026",

    /* ─── Erste Ansicht ─────────────────────────────────────── */
    "hero.city": "MOSCOW",
    "hero.brandTop": "Kuznetsova",
    "hero.brandBottom": "DESIGN.",
    "hero.tagline":
      "Visuelle Systeme · Markenidentität · Digitale Erlebnisse · Webentwicklung",

    /* ─── Infoleiste ────────────────────────────────────────── */
    "info.label": "Was wir schaffen",
    "info.subtext":
      "Von Strategie und visueller Identität bis zu Webentwicklung, Automatisierung und intelligenten digitalen Systemen.",

    /* ─── Über das Studio ───────────────────────────────────── */
    "about.eyebrow": "Über uns",
    "about.title": "Wir gestalten für das, was kommt.",
    "about.sub":
      "Wir bauen visuelle Systeme, die in jeder Dimension tragen — von Marke und Code bis zum vollen 3D.",
    "about.cta": "Projekt starten",

    "about.stat.years": "Jahre im Design",
    "about.stat.projects": "Projekte",
    "about.stat.disciplines": "Disziplinen",
    "about.stat.code": "handgeschriebener Code",

    "about.servicesLabel": "Was wir tun",
    "about.servicesIntro":
      "Drei Disziplinen, ein Anspruch: Arbeit, die das Briefing übertrifft",

    "about.service.branding.title": "BRANDING UND GRAFIK",
    "about.service.branding.desc":
      "Logos, Brandbooks, Verpackung, Merchandise und eine vollständige Identität, die im Gedächtnis bleibt.",
    "about.service.web.title": "WEB & DIGITAL",
    "about.service.web.desc":
      "Moderne Websites und digitale Produkte, von Hand geschrieben. Ohne Templates, ohne Kompromisse.",
    "about.service.3d.title": "3D-DESIGN",
    "about.service.3d.desc":
      "Visualisierung, 3D-Modellierung, Motion und AR/VR-Lösungen. Volumen, das verkauft.",

    "about.story.eyebrow": "Markengeschichte",
    "about.story.headlineLine1": "Ein Name.",
    "about.story.headlineLine2": "Jede Art von Design.",
    "about.story.kristina.name": "Kristina Kuznetsova",
    "about.story.kristina.role": "Gründerin · Art Direction",
    "about.story.kristina.text":
      "Eine Designerin, die keine Grenzen zwischen den Disziplinen anerkennt. Grafikdesign, Webentwicklung und 3D-Visualisierung sind für sie keine verschiedenen Berufe, sondern ein einziger Werkzeugkasten. Das Büro existiert, um genau das mit Projekten zu belegen.",
    "about.story.yaroslav.name": "Yaroslav Kiselev",
    "about.story.yaroslav.role": "CEO · Kaufmännische Leitung",
    "about.story.yaroslav.text":
      "Er sorgt dafür, dass jedes Projekt einen klaren Plan, ein Budget und einen Termin hat. Damit Kunden ein Ergebnis bekommen und keine Erklärungen.",
    "about.story.closing":
      "Gemeinsam bauen wir ein Studio, in dem Design als Geschäftsinstrument respektiert wird und nicht als Dekoration.",

    "about.quote.text":
      "Design ist nicht, wie etwas aussieht. Design ist, wie es funktioniert.",
    "about.quote.author": "Steve Jobs — das Prinzip, dem das Büro folgt",

    "about.contacts.title": "Unsere Kontakte",
    "about.contacts.kristina": "E-Mail von Kristina Kuznetsova",
    "about.contacts.yaroslav": "E-Mail von Yaroslav Kiselev",
    "about.contacts.phone": "Telefonnummer",

    /* ─── Prozess ───────────────────────────────────────────── */
    "process.eyebrow": "— Wie wir arbeiten",
    "process.bgLabel": "HOW TO WORK",
    "process.titleLine1": "Der",
    "process.titleLine2": "Arbeitsprozess",
    "process.subLine1":
      "Von der ersten Nachricht bis zur Übergabe der Dateien.",
    "process.subLine2": "Jede Phase ist transparent und kontrolliert.",

    "process.step1.title": "Briefing",
    "process.step1.desc":
      "Wir lernen uns kennen, halten die Aufgabe schriftlich fest und einigen uns auf Umfang, Budget und Termine. Ohne Briefing beginnen wir nicht.",
    "process.step2.title": "Konzept",
    "process.step2.desc":
      "Kristina entwickelt die visuelle Lösung. Interne Prüfung, bevor sie zum Kunden geht.",
    "process.step3.title": "Präsentation und Korrekturen",
    "process.step3.desc":
      "Wir zeigen, besprechen, verfeinern. Zwei Korrekturrunden sind im Vertrag enthalten.",
    "process.step4.title": "Produktion",
    "process.step4.desc":
      "Finale Dateien, Umsetzung, Renderings und Übergabe der Quelldateien. Alles, was für den Start nötig ist.",
    "process.step5.title": "Übergabe",
    "process.step5.desc":
      "Abnahme, Übergabe aller Materialien und eine Feedbackrunde. Projekt geschlossen, Case fertig.",

    /* ─── Leistungen ────────────────────────────────────────── */
    "services.title": "* services _.",
    "services.sub":
      "Als eingespieltes Expertenteam bauen wir Websites, digitale Lösungen und native Apps, die im Gedächtnis bleiben und etwas auslösen.",
    "services.label": "Leistungen",
    "services.all": "Alle Leistungen",

    /* ─── More Development ─────────────────────────────────── */
    "more.eyebrow": "Code",
    "more.title": "{ More Development }",
    "more.badge": "<Code />",
    "more.intro":
      "Wir übernehmen die Aufgaben an der Schnittstelle von Design und Technologie: Prozesse automatisieren und neuronale Netze in reale Geschäftsabläufe einbinden.",
    "more.cta": "Projekt besprechen",

    /* ─── Technisches Design ────────────────────────────────── */
    "tech.eyebrow": "Engineering und Dokumentation",
    "tech.title": "< technical design >",
    "tech.badge": "M 1:1",
    "tech.intro":
      "Wir erstellen technische Dokumentation für die Fertigung: bemaßte Zeichnungen mit Toleranzen, Schaltpläne und Leiterplattenlayouts.",
    "tech.cta": "Projekt besprechen",

    /* ─── Stimmen ───────────────────────────────────────────── */
    "reviews.eyebrow": "Kundenstimmen",
    "reviews.titleLine1": "Man vertraut uns",
    "reviews.titleLine2": "das Ergebnis an",
    "reviews.item1.name": "Alexander Petrov",
    "reviews.item1.role": "CEO, Noir Coffee",
    "reviews.item1.text":
      "Kristina und das Team haben das Rebranding schnell und auf den Punkt gemacht — Verpackung, Website und Social Media in einer Handschrift. Man sieht, dass das Design für den Verkauf arbeitet und nicht nur gut aussieht.",
    "reviews.item2.name": "Maria Sokolova",
    "reviews.item2.role": "Marketingleiterin, Solara Energy",
    "reviews.item2.text":
      "Ein transparenter Prozess in jeder Phase: Briefing, Konzept, Korrekturen — alles termingerecht und ohne Budgetüberraschungen. Wir haben eine Website, auf die wir wirklich stolz sind.",
    "reviews.item3.name": "Dmitry Volkov",
    "reviews.item3.role": "Founder, Trove Platform",
    "reviews.item3.text":
      "Wir brauchten ein komplexes Dashboard, das trotzdem selbsterklärend ist. Das Büro hat das Produkt tiefer verstanden als erwartet und Lösungen vorgeschlagen, die unseren Nutzern die Arbeit erleichtern.",

    /* ─── Portfolioseite ────────────────────────────────────── */
    "work.title": "Portfolio",
    "work.metaTitle": "Portfolio — Kuznetsova Design",
    "work.desc":
      "Ausgewählte Arbeiten aus Branding, Web, 3D und Art Direction",
    "work.stat.projects": "Projekte",
    "work.stat.categories": "Disziplinen",
    "work.stat.years": "Jahre im Design",
    "work.backToPortfolio": "Portfolio",

    /* ─── Schaufenster ──────────────────────────────────────── */
    "portfolio.categories": "Kategorien",
    "portfolio.categoriesNav": "Portfolio-Kategorien",
    "portfolio.industries": "Branchen",
    "portfolio.industriesNav": "Portfolio-Branchen",
    "portfolio.all": "Alle Arbeiten",
    "portfolio.hint": "Nach unten scrollen",
    "portfolio.prevSlide": "Vorheriger Slide",
    "portfolio.nextSlide": "Nächster Slide",
    "portfolio.slide": "Slide",
    "portfolio.empty":
      "In diesem Bereich ist noch nichts veröffentlicht.",
    "portfolio.worksCount": "Arbeiten",

    /* ─── Caseseite ─────────────────────────────────────────── */
    "case.back": "Portfolio",
    "case.about": "Über das Projekt",
    "case.gallery": "Galerie",
    "case.mainScreen": "Hauptbildschirm",
    "case.details": "Details",
    "case.final": "Abschluss",
    "case.client": "Kunde",
    "case.year": "Jahr",
    "case.category": "Kategorie",
    "case.tools": "Werkzeuge",
    "case.site": "Website",
    "case.prev": "Vorheriges",
    "case.next": "Nächstes",
    "case.nav": "Navigation zwischen den Arbeiten",

    /* ─── Journal ───────────────────────────────────────────── */
    "blog.title": "Blog & News",
    "blog.metaTitle": "Journal und News — Kuznetsova Design",
    "blog.desc": "Arbeiten, Ereignisse und Notizen aus dem Studioalltag",
    "blog.all": "Alle Materialien",
    "blog.featured": "Hauptbeitrag",
    "blog.readTime": "Min. Lesezeit",
    "blog.readMore": "Lesen",
    "blog.backToBlog": "Alle Beiträge",

    /* ─── Leistungen und Betreuung ──────────────────────────── */
    "products.label": "Katalog",
    "products.title": "Was wir anbieten",
    "products.intro":
      "Inhalt und Ergebnis jeder Leistung. Die Konditionen nennen wir im Angebot — nach dem Briefing.",
    "products.care.label": "Betreuung",
    "products.care.title": "Care-Pläne",
    "products.care.intro":
      "Monatliche Betreuung: Die Website bleibt lebendig, aktuell und im Blick.",
    "products.care.includes": "Was enthalten ist",
    "products.care.featured": "Beliebt",
    "products.cta": "Aufgabe besprechen",

    /* ─── Anfrageformular ───────────────────────────────────── */
    "form.dialogLabel": "Kunde werden",
    "form.eyebrow": "Projekt starten",
    "form.headlineLine1": "Schaffen wir etwas",
    "form.headlineAccent": "Herausragendes",
    "form.pitch":
      "Füllen Sie das Formular aus — wir antworten innerhalb von 24 Stunden und bringen schon zum ersten Gespräch eine Richtung mit.",
    "form.promise1": "Ein persönlicher Art Director für Ihr Projekt",
    "form.promise2": "Transparenter Prozess und wöchentliche Abstimmungen",
    "form.promise3": "Termine und Leistungsumfang im Vertrag festgehalten",
    "form.headerLabel": "Anfrage",
    "form.close": "Schließen",

    "form.name.label": "Name",
    "form.name.placeholder": "Alexander",
    "form.company.label": "Unternehmen",
    "form.company.placeholder": "Ihre Marke",
    "form.email.label": "E-Mail",
    "form.email.placeholder": "you@company.com",
    "form.phone.label": "Telefon",
    "form.phone.placeholder": "+7 (___) ___-__-__",
    "form.telegram.label": "Telegram",
    "form.telegram.placeholder": "@username",
    "form.services.label": "Gewünschte Leistungen",
    "form.budget.label": "Budget",
    "form.message.label": "Über das Projekt",
    "form.message.placeholder": "Erzählen Sie mehr über die Aufgabe...",

    "form.service.branding": "Branding",
    "form.service.web": "Webdesign",
    "form.service.identity": "Corporate Identity",
    "form.service.uxui": "UX/UI",
    "form.service.motion": "Motion",
    "form.service.other": "Sonstiges",

    "form.budget.upTo150": "Bis 150.000 ₽",
    "form.budget.150to500": "150.000 – 500.000 ₽",
    "form.budget.500to1000": "500.000 – 1.000.000 ₽",
    "form.budget.over1000": "Mehr als 1.000.000 ₽",

    "form.error.name": "Bitte geben Sie Ihren Namen an",
    "form.error.email": "Bitte geben Sie Ihre E-Mail an",
    "form.error.phone": "Bitte geben Sie Ihre Telefonnummer an",
    "form.error.message": "Erzählen Sie uns vom Projekt",
    "form.error.services": "Wählen Sie mindestens eine Leistung",
    "form.error.budget": "Wählen Sie ein Budget",
    "form.error.submit":
      "Die Anfrage konnte nicht gesendet werden. Bitte erneut versuchen.",
    "form.error.generic": "Senden fehlgeschlagen",

    "form.submit": "Anfrage senden",
    "form.submitting": "Wird gesendet...",
    "form.privacyPrefix": "Mit dem Klick akzeptieren Sie die",
    "form.privacyLink": "Datenschutzerklärung",

    "form.success.title": "Anfrage gesendet",
    "form.success.body": "Wir melden uns innerhalb von 24 Stunden.",
    "form.success.close": "Schließen",

    /* ─── Fußzeile ──────────────────────────────────────────── */
    "footer.navigation": "Navigation",
    "footer.studio": "Studio",
    "footer.contact": "Kontakt",
    "footer.work": "Portfolio",
    "footer.studioLink": "Über das Studio",
    "footer.services": "Leistungen",
    "footer.contactLink": "Kontakt aufnehmen",
    "footer.about": "Über uns",
    "footer.journal": "Journal",
    "footer.process": "Prozess",
    "footer.engineering": "Engineering",
    "footer.location": "Moskau, Russland",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.privacy": "Datenschutzerklärung",

    /* ─── Chat-Demo ─────────────────────────────────────────── */
    "chat.bot": "Bot",
    "chat.you": "Sie",
    "chat.online": "online",
    "chat.typing": "schreibt…",
    "chat.placeholder": "Nachricht…",
    "chat.send": "Senden",

    /* ─── Sprachumschalter ──────────────────────────────────── */
    "lang.label": "Sprache der Oberfläche",
    "lang.ru": "Russisch",
    "lang.en": "Englisch",
    "lang.zh": "Chinesisch",
    "lang.es": "Spanisch",
    "lang.pt": "Portugiesisch",
    "lang.fr": "Französisch",
    "lang.de": "Deutsch",
    "lang.ar": "Arabisch",
    "lang.ja": "Japanisch",
    "lang.tr": "Türkisch",
    "lang.switchToEn": "Zu Englisch wechseln",
    "lang.switchToRu": "Zu Russisch wechseln",
  },

  /* ══════════════════════════════════════════════════════════════
     العربية (AR) — письмо справа налево, dir="rtl"
     ══════════════════════════════════════════════════════════════ */
  ar: {
    /* ─── Объединённое меню портфолио ───────────────────── */
    "portfolio.eyebrow": "أقسام الأعمال",
    "portfolio.title": "لمن نصمّم",
    "portfolio.intro": "اختر من اليمين المنتج — ما الذي أنجزناه بالضبط — والقطاع، أي لمن. المرشّحات تتكامل: «Web & Mobile» مع «المطاعم» تعرض المواقع المصمّمة للمطاعم والمقاهي.",
    "portfolio.productLabel": "المنتج",
    "portfolio.industryLabel": "القطاع",
    "portfolio.allProducts": "كل المنتجات",
    "portfolio.everything": "كل الأعمال",
    "portfolio.allIndustries": "كل القطاعات",
    "portfolio.everyone": "كل العملاء",
    "portfolio.allDesc": "الأعمال الكاملة للاستوديو: الهوية، المواقع، ثلاثي الأبعاد، والمحتوى.",
    "portfolio.worksUnit": "عملاً",
    "portfolio.removeFilter": "إزالة المرشّح",
    "portfolio.emptyLabel": "القسم قيد الإعداد",
    "portfolio.emptyText": "لا توجد لدينا بعد أعمال منشورة لهذه التوليفة. أخبرنا عن مشروعك، وسنعرض أعمالاً قريبة منه ونناقش كيف سيبدو لديك.",
    "portfolio.discuss": "مناقشة المشروع",
    "portfolio.reset": "إعادة ضبط المرشّحات",
    /* ─── عام ───────────────────────────────────────────────── */
    "common.brand": "Kuznetsova Design",
    "common.brandSub": "استوديو تصميم · موسكو",
    "common.home": "إلى الصفحة الرئيسية",
    "common.close": "إغلاق",
    "common.open": "فتح",
    "common.back": "رجوع",
    "common.next": "التالي",
    "common.prev": "السابق",
    "common.more": "التفاصيل",
    "common.viewAll": "عرض الكل",
    "common.startProject": "ابدأ مشروعًا",
    "common.discussProject": "لنناقش المشروع",
    "common.becomeClient": "كن عميلًا",
    "common.viewCase": "عرض المشروع",
    "common.openSite": "زيارة الموقع",
    "common.client": "العميل",
    "common.year": "السنة",
    "common.category": "الفئة",
    "common.tools": "الأدوات",
    "common.website": "الموقع",
    "common.email": "البريد الإلكتروني",
    "common.phone": "الهاتف",
    "common.telegram": "Telegram",
    "common.location": "موسكو، روسيا",
    "common.city": "موسكو",
    "common.privacy": "سياسة الخصوصية",
    "common.rights": "جميع الحقوق محفوظة.",
    "common.scrollDown": "مرّر للأسفل",
    "common.loading": "جارٍ التحميل…",
    "common.concept": "مشروع مفاهيمي",
    "common.conceptNote":
      "مشروع بمبادرة من الاستوديو، وليس عملًا بتكليف من عميل.",

    /* ─── التنقل ────────────────────────────────────────────── */
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.studio": "عن الاستوديو",
    "nav.about": "من نحن",
    "nav.work": "الأعمال",
    "nav.blog": "مدوّنتنا",
    "nav.blogShort": "المدوّنة",
    "nav.journal": "المدوّنة",
    "nav.contact": "تواصل",
    "nav.contacts": "معلومات التواصل",
    "nav.process": "منهجية العمل",
    "nav.engineering": "الهندسة",
    "nav.startProject": "ابدأ مشروعك",
    "nav.openMenu": "فتح القائمة",
    "nav.closeMenu": "إغلاق القائمة",
    "nav.navigation": "التنقل",

    /* ─── القائمة الكاملة ───────────────────────────────────── */
    "menu.label": "التنقل",
    "menu.becomeClient": "+ كن عميلًا",
    "menu.badgeTitle": "خمس سنوات من الممارسة",
    "menu.badgeSub": "استوديو تصميم للعلامات الراقية",
    "menu.contactTitle": "Telegram",
    "menu.copyright": "© Kuznetsova Design 2026",

    /* ─── الواجهة الأولى ────────────────────────────────────── */
    "hero.city": "MOSCOW",
    "hero.brandTop": "Kuznetsova",
    "hero.brandBottom": "DESIGN.",
    "hero.tagline":
      "أنظمة بصرية · هوية العلامة · تجارب رقمية · تطوير الويب",

    /* ─── شريط التعريف ──────────────────────────────────────── */
    "info.label": "ما الذي نصنعه",
    "info.subtext":
      "من الاستراتيجية والهوية البصرية إلى تطوير الويب والأتمتة والأنظمة الرقمية الذكية.",

    /* ─── عن الاستوديو ──────────────────────────────────────── */
    "about.eyebrow": "من نحن",
    "about.title": "نصمّم لما هو قادم.",
    "about.sub":
      "نبني أنظمة بصرية تصمد في كل الأبعاد — من العلامة والشيفرة إلى التصميم ثلاثي الأبعاد.",
    "about.cta": "ابدأ مشروعًا",

    "about.stat.years": "سنوات في التصميم",
    "about.stat.projects": "مشروعًا",
    "about.stat.disciplines": "تخصصات",
    "about.stat.code": "شيفرة مكتوبة يدويًا",

    "about.servicesLabel": "ما الذي نقدّمه",
    "about.servicesIntro": "ثلاثة تخصصات ومعيار واحد: عمل يتجاوز الموجز",

    "about.service.branding.title": "العلامة والغرافيك",
    "about.service.branding.desc":
      "شعارات ودلائل هوية وتغليف ومنتجات ترويجية وهوية متكاملة تبقى في الذاكرة.",
    "about.service.web.title": "WEB & DIGITAL",
    "about.service.web.desc":
      "مواقع ومنتجات رقمية حديثة مكتوبة يدويًا. بلا قوالب جاهزة وبلا تنازلات.",
    "about.service.3d.title": "3D-DESIGN",
    "about.service.3d.desc":
      "تصوير بصري ونمذجة ثلاثية الأبعاد وموشن وحلول AR/VR. عمق يبيع.",

    "about.story.eyebrow": "قصة العلامة",
    "about.story.headlineLine1": "اسم واحد.",
    "about.story.headlineLine2": "كل أنواع التصميم.",
    "about.story.kristina.name": "كريستينا كوزنيتسوفا",
    "about.story.kristina.role": "المؤسِّسة · المديرة الفنية",
    "about.story.kristina.text":
      "مصمّمة لا تعترف بالحدود بين التخصصات. التصميم الغرافيكي وتطوير الويب والتصوير ثلاثي الأبعاد ليست لديها مهنًا مختلفة، بل مجموعة أدوات واحدة. أُنشئ الاستوديو ليثبت ذلك مشروعًا بعد مشروع.",
    "about.story.yaroslav.name": "ياروسلاف كيسيليف",
    "about.story.yaroslav.role": "الرئيس التنفيذي · المدير المالي",
    "about.story.yaroslav.text":
      "يحرص على أن يكون لكل مشروع خطة واضحة وميزانية وموعد تسليم، وأن يحصل العميل على نتيجة لا على تبريرات.",
    "about.story.closing":
      "معًا نبني استوديو يُحترم فيه التصميم بوصفه أداة عمل، لا زينة.",

    "about.quote.text": "التصميم ليس شكل الشيء، بل طريقة عمله.",
    "about.quote.author": "ستيف جوبز — المبدأ الذي يسير عليه الاستوديو",

    "about.contacts.title": "معلومات التواصل",
    "about.contacts.kristina": "البريد الإلكتروني لكريستينا كوزنيتسوفا",
    "about.contacts.yaroslav": "البريد الإلكتروني لياروسلاف كيسيليف",
    "about.contacts.phone": "رقم الهاتف",

    /* ─── منهجية العمل ──────────────────────────────────────── */
    "process.eyebrow": "— كيف نعمل",
    "process.bgLabel": "HOW TO WORK",
    "process.titleLine1": "منهجية",
    "process.titleLine2": "العمل",
    "process.subLine1": "من أول رسالة إلى تسليم الملفات.",
    "process.subLine2": "كل مرحلة واضحة وتحت السيطرة.",

    "process.step1.title": "الموجز",
    "process.step1.desc":
      "نتعارف، ونثبّت المهمة كتابةً، ونتفق على النطاق والميزانية والمواعيد. لا نبدأ من دون موجز.",
    "process.step2.title": "المفهوم",
    "process.step2.desc":
      "تطوّر كريستينا الحل البصري، ويمر بمراجعة داخلية قبل عرضه على العميل.",
    "process.step3.title": "العرض والتعديلات",
    "process.step3.desc":
      "نعرض ونناقش ونصقل. يشمل العقد جولتين من التعديلات.",
    "process.step4.title": "الإنتاج",
    "process.step4.desc":
      "الملفات النهائية والتنفيذ والمشاهد المُصيَّرة وتسليم المصادر. كل ما يلزم للإطلاق.",
    "process.step5.title": "التسليم",
    "process.step5.desc":
      "توقيع المحضر وتسليم المواد وجمع الملاحظات. ينتهي المشروع وتكتمل دراسة الحالة.",

    /* ─── الخدمات ───────────────────────────────────────────── */
    "services.title": "* services _.",
    "services.sub":
      "بوصفنا فريقًا متماسكًا من المتخصصين، نصنع مواقع وحلولًا رقمية وتطبيقات أصلية تبقى في الذاكرة وتترك أثرًا.",
    "services.label": "الخدمات",
    "services.all": "كل الخدمات",

    /* ─── More Development ─────────────────────────────────── */
    "more.eyebrow": "Code",
    "more.title": "{ More Development }",
    "more.badge": "<Code />",
    "more.intro":
      "نتولى المهام على تخوم التصميم والتقنية: نؤتمت العمليات وندمج الشبكات العصبية في سيناريوهات العمل الحقيقية.",
    "more.cta": "لنناقش المشروع",

    /* ─── التصميم الهندسي ───────────────────────────────────── */
    "tech.eyebrow": "الهندسة والتوثيق",
    "tech.title": "< technical design >",
    "tech.badge": "M 1:1",
    "tech.intro":
      "نعدّ التوثيق التقني للإنتاج: رسومات مقيسة بالسماحات، ومخططات مبدئية، وتخطيط لوحات الدارات المطبوعة.",
    "tech.cta": "لنناقش المشروع",

    /* ─── آراء العملاء ──────────────────────────────────────── */
    "reviews.eyebrow": "آراء العملاء",
    "reviews.titleLine1": "يأتمنوننا",
    "reviews.titleLine2": "على النتيجة",
    "reviews.item1.name": "ألكسندر بيتروف",
    "reviews.item1.role": "CEO, Noir Coffee",
    "reviews.item1.text":
      "أنجزت كريستينا وفريقها إعادة بناء العلامة بسرعة وبلا حشو — التغليف والموقع وحسابات التواصل بأسلوب واحد. يظهر أن التصميم يعمل لصالح المبيعات لا للشكل وحده.",
    "reviews.item2.name": "ماريا سوكولوفا",
    "reviews.item2.role": "مديرة التسويق, Solara Energy",
    "reviews.item2.text":
      "عملية واضحة في كل مرحلة: الموجز والمفهوم والتعديلات، كلها في موعدها وبلا مفاجآت في الميزانية. حصلنا على موقع نفخر به فعلًا.",
    "reviews.item3.name": "دميتري فولكوف",
    "reviews.item3.role": "Founder, Trove Platform",
    "reviews.item3.text":
      "احتجنا لوحة تحكم معقّدة بتجربة استخدام بديهية. فهم الاستوديو المنتج أعمق مما توقعنا واقترح حلولًا سهّلت العمل على مستخدمينا.",

    /* ─── صفحة الأعمال ──────────────────────────────────────── */
    "work.title": "Portfolio",
    "work.metaTitle": "الأعمال — Kuznetsova Design",
    "work.desc":
      "مشاريع مختارة في بناء العلامات والويب والتصميم ثلاثي الأبعاد والإدارة الفنية",
    "work.stat.projects": "مشروعًا",
    "work.stat.categories": "مجالات",
    "work.stat.years": "سنوات في التصميم",
    "work.backToPortfolio": "الأعمال",

    /* ─── واجهة العرض ───────────────────────────────────────── */
    "portfolio.categories": "الفئات",
    "portfolio.categoriesNav": "فئات الأعمال",
    "portfolio.industries": "القطاعات",
    "portfolio.industriesNav": "قطاعات الأعمال",
    "portfolio.all": "كل الأعمال",
    "portfolio.hint": "مرّر للأسفل",
    "portfolio.prevSlide": "الشريحة السابقة",
    "portfolio.nextSlide": "الشريحة التالية",
    "portfolio.slide": "شريحة",
    "portfolio.empty": "لا توجد أعمال منشورة في هذا القسم بعد.",
    "portfolio.worksCount": "عملًا",

    /* ─── صفحة المشروع ──────────────────────────────────────── */
    "case.back": "الأعمال",
    "case.about": "عن المشروع",
    "case.gallery": "المعرض",
    "case.mainScreen": "الشاشة الرئيسية",
    "case.details": "التفاصيل",
    "case.final": "اللقطة الأخيرة",
    "case.client": "العميل",
    "case.year": "السنة",
    "case.category": "الفئة",
    "case.tools": "الأدوات",
    "case.site": "الموقع",
    "case.prev": "السابق",
    "case.next": "التالي",
    "case.nav": "التنقل بين الأعمال",

    /* ─── المدوّنة ──────────────────────────────────────────── */
    "blog.title": "Blog & News",
    "blog.metaTitle": "المدوّنة والأخبار — Kuznetsova Design",
    "blog.desc": "أعمال وفعاليات وملاحظات من داخل الاستوديو",
    "blog.all": "كل المواد",
    "blog.featured": "المادة الرئيسية",
    "blog.readTime": "دقيقة قراءة",
    "blog.readMore": "قراءة",
    "blog.backToBlog": "كل المقالات",

    /* ─── الخدمات والمتابعة ─────────────────────────────────── */
    "products.label": "الكتالوج",
    "products.title": "ما الذي نقدّمه",
    "products.intro":
      "مكوّنات كل خدمة ونتيجتها. أما القيمة فنذكرها في العرض بعد الموجز.",
    "products.care.label": "المتابعة",
    "products.care.title": "خطط Care",
    "products.care.intro":
      "دعم شهري: موقع حيّ ومحدَّث وتحت الرعاية.",
    "products.care.includes": "ما الذي تتضمنه",
    "products.care.featured": "الأكثر اختيارًا",
    "products.cta": "لنناقش مهمتك",

    /* ─── نموذج الطلب ───────────────────────────────────────── */
    "form.dialogLabel": "كن عميلًا",
    "form.eyebrow": "ابدأ مشروعك",
    "form.headlineLine1": "لنصنع شيئًا",
    "form.headlineAccent": "استثنائيًا",
    "form.pitch":
      "املأ النموذج — نردّ خلال 24 ساعة ونأتي بتصوّر أولي في المكالمة الأولى.",
    "form.promise1": "مدير فني مخصّص لمشروعك",
    "form.promise2": "عملية شفافة ولقاءات أسبوعية",
    "form.promise3": "المواعيد ونطاق العمل مثبتة في العقد",
    "form.headerLabel": "طلب",
    "form.close": "إغلاق",

    "form.name.label": "الاسم",
    "form.name.placeholder": "ألكسندر",
    "form.company.label": "الشركة",
    "form.company.placeholder": "علامتك",
    "form.email.label": "البريد الإلكتروني",
    "form.email.placeholder": "you@company.com",
    "form.phone.label": "الهاتف",
    "form.phone.placeholder": "+7 (___) ___-__-__",
    "form.telegram.label": "Telegram",
    "form.telegram.placeholder": "@username",
    "form.services.label": "الخدمات المطلوبة",
    "form.budget.label": "الميزانية",
    "form.message.label": "عن المشروع",
    "form.message.placeholder": "أخبرنا بتفاصيل المهمة…",

    "form.service.branding": "بناء العلامة",
    "form.service.web": "تصميم الويب",
    "form.service.identity": "الهوية",
    "form.service.uxui": "UX/UI",
    "form.service.motion": "الموشن",
    "form.service.other": "أخرى",

    "form.budget.upTo150": "حتى 150 000 ₽",
    "form.budget.150to500": "150 000 – 500 000 ₽",
    "form.budget.500to1000": "500 000 – 1 000 000 ₽",
    "form.budget.over1000": "أكثر من 1 000 000 ₽",

    "form.error.name": "أدخل الاسم",
    "form.error.email": "أدخل البريد الإلكتروني",
    "form.error.phone": "أدخل رقم الهاتف",
    "form.error.message": "أخبرنا عن المشروع",
    "form.error.services": "اختر خدمة واحدة على الأقل",
    "form.error.budget": "اختر الميزانية",
    "form.error.submit": "تعذّر إرسال الطلب. حاول مرة أخرى.",
    "form.error.generic": "خطأ في الإرسال",

    "form.submit": "إرسال الطلب",
    "form.submitting": "جارٍ الإرسال…",
    "form.privacyPrefix": "بالضغط على الزر فإنك توافق على",
    "form.privacyLink": "سياسة الخصوصية",

    "form.success.title": "تم إرسال الطلب",
    "form.success.body": "سنتواصل معك خلال 24 ساعة.",
    "form.success.close": "إغلاق",

    /* ─── التذييل ───────────────────────────────────────────── */
    "footer.navigation": "التنقل",
    "footer.studio": "الاستوديو",
    "footer.contact": "التواصل",
    "footer.work": "الأعمال",
    "footer.studioLink": "عن الاستوديو",
    "footer.services": "الخدمات",
    "footer.contactLink": "تواصل معنا",
    "footer.about": "من نحن",
    "footer.journal": "المدوّنة",
    "footer.process": "منهجية العمل",
    "footer.engineering": "الهندسة",
    "footer.location": "موسكو، روسيا",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.privacy": "سياسة الخصوصية",

    /* ─── محادثة توضيحية ────────────────────────────────────── */
    "chat.bot": "بوت",
    "chat.you": "أنت",
    "chat.online": "متصل",
    "chat.typing": "يكتب…",
    "chat.placeholder": "رسالة…",
    "chat.send": "إرسال",

    /* ─── تبديل اللغة ───────────────────────────────────────── */
    "lang.label": "لغة الواجهة",
    "lang.ru": "الروسية",
    "lang.en": "الإنجليزية",
    "lang.zh": "الصينية",
    "lang.es": "الإسبانية",
    "lang.pt": "البرتغالية",
    "lang.fr": "الفرنسية",
    "lang.de": "الألمانية",
    "lang.ar": "العربية",
    "lang.ja": "اليابانية",
    "lang.tr": "التركية",
    "lang.switchToEn": "التبديل إلى الإنجليزية",
    "lang.switchToRu": "التبديل إلى الروسية",
  },

  /* ══════════════════════════════════════════════════════════════
     日本語 (JA)
     ══════════════════════════════════════════════════════════════ */
  ja: {
    /* ─── Объединённое меню портфолио ───────────────────── */
    "portfolio.eyebrow": "ポートフォリオの分類",
    "portfolio.title": "私たちがデザインする相手",
    "portfolio.intro": "左で製品——実際に何をつくったか——と業界——誰のためか——を選んでください。フィルターは組み合わせられます。「Web & Mobile」と「飲食」を選べば、レストランやカフェ向けのサイトが表示されます。",
    "portfolio.productLabel": "製品",
    "portfolio.industryLabel": "業界",
    "portfolio.allProducts": "すべての製品",
    "portfolio.everything": "ポートフォリオ全体",
    "portfolio.allIndustries": "すべての業界",
    "portfolio.everyone": "すべてのクライアント",
    "portfolio.allDesc": "スタジオの全作品：ブランディング、ウェブサイト、3D、コンテンツ。",
    "portfolio.worksUnit": "件",
    "portfolio.removeFilter": "フィルターを解除",
    "portfolio.emptyLabel": "準備中のセクション",
    "portfolio.emptyText": "この組み合わせで公開している事例はまだありません。プロジェクトについてお聞かせください。近い内容の実績をお見せし、御社の場合どうなるかをご説明します。",
    "portfolio.discuss": "プロジェクトを相談する",
    "portfolio.reset": "フィルターをリセット",
    /* ─── 共通 ──────────────────────────────────────────────── */
    "common.brand": "Kuznetsova Design",
    "common.brandSub": "デザインスタジオ · モスクワ",
    "common.home": "ホームへ",
    "common.close": "閉じる",
    "common.open": "開く",
    "common.back": "戻る",
    "common.next": "次へ",
    "common.prev": "前へ",
    "common.more": "詳しく見る",
    "common.viewAll": "すべて見る",
    "common.startProject": "プロジェクトを始める",
    "common.discussProject": "プロジェクトを相談する",
    "common.becomeClient": "クライアントになる",
    "common.viewCase": "ケースを見る",
    "common.openSite": "サイトを開く",
    "common.client": "クライアント",
    "common.year": "年",
    "common.category": "カテゴリー",
    "common.tools": "ツール",
    "common.website": "ウェブサイト",
    "common.email": "メール",
    "common.phone": "電話",
    "common.telegram": "Telegram",
    "common.location": "ロシア、モスクワ",
    "common.city": "モスクワ",
    "common.privacy": "プライバシーポリシー",
    "common.rights": "無断転載を禁じます。",
    "common.scrollDown": "スクロールしてください",
    "common.loading": "読み込み中…",
    "common.concept": "コンセプト",
    "common.conceptNote":
      "クライアントワークではなく、スタジオ発の自主プロジェクトです。",

    /* ─── ナビゲーション ────────────────────────────────────── */
    "nav.home": "ホーム",
    "nav.services": "サービス",
    "nav.studio": "スタジオについて",
    "nav.about": "私たちについて",
    "nav.work": "ポートフォリオ",
    "nav.blog": "スタジオの記録",
    "nav.blogShort": "ジャーナル",
    "nav.journal": "ジャーナル",
    "nav.contact": "お問い合わせ",
    "nav.contacts": "連絡先",
    "nav.process": "プロセス",
    "nav.engineering": "エンジニアリング",
    "nav.startProject": "プロジェクトを始める",
    "nav.openMenu": "メニューを開く",
    "nav.closeMenu": "メニューを閉じる",
    "nav.navigation": "ナビゲーション",

    /* ─── 全画面メニュー ────────────────────────────────────── */
    "menu.label": "ナビゲーション",
    "menu.becomeClient": "+ クライアントになる",
    "menu.badgeTitle": "5年の実績",
    "menu.badgeSub": "プレミアムブランドのためのデザインスタジオ",
    "menu.contactTitle": "Telegram",
    "menu.copyright": "© Kuznetsova Design 2026",

    /* ─── ファーストビュー ──────────────────────────────────── */
    "hero.city": "MOSCOW",
    "hero.brandTop": "Kuznetsova",
    "hero.brandBottom": "DESIGN.",
    "hero.tagline":
      "ビジュアルシステム · ブランドアイデンティティ · デジタル体験 · ウェブ開発",

    /* ─── インフォメーション ────────────────────────────────── */
    "info.label": "私たちがつくるもの",
    "info.subtext":
      "戦略とビジュアルアイデンティティから、ウェブ開発、自動化、そして知的なデジタルシステムまで。",

    /* ─── スタジオについて ──────────────────────────────────── */
    "about.eyebrow": "私たちについて",
    "about.title": "次に来るもののためにデザインする。",
    "about.sub":
      "ブランドからコード、そして3Dまで——あらゆる次元で機能するビジュアルシステムをつくります。",
    "about.cta": "プロジェクトを始める",

    "about.stat.years": "年のデザイン経験",
    "about.stat.projects": "件のプロジェクト",
    "about.stat.disciplines": "つの領域",
    "about.stat.code": "手書きのコード",

    "about.servicesLabel": "私たちの仕事",
    "about.servicesIntro": "三つの領域、ひとつの基準。ブリーフを超える成果を",

    "about.service.branding.title": "ブランディングとグラフィック",
    "about.service.branding.desc":
      "ロゴ、ブランドブック、パッケージ、グッズ、そして記憶に残る一貫したアイデンティティ。",
    "about.service.web.title": "WEB & DIGITAL",
    "about.service.web.desc":
      "手書きのコードでつくる現代的なサイトとデジタルプロダクト。テンプレートも妥協もありません。",
    "about.service.3d.title": "3D-DESIGN",
    "about.service.3d.desc":
      "ビジュアライゼーション、3Dモデリング、モーション、AR/VR。売れる立体表現を。",

    "about.story.eyebrow": "ブランドストーリー",
    "about.story.headlineLine1": "ひとつの名前。",
    "about.story.headlineLine2": "すべてのデザイン。",
    "about.story.kristina.name": "クリスティーナ・クズネツォワ",
    "about.story.kristina.role": "ファウンダー · アートディレクター",
    "about.story.kristina.text":
      "領域の境界を認めないデザイナー。グラフィックデザイン、ウェブ開発、3Dビジュアライゼーションは、彼女にとって別々の職能ではなく、ひとつの道具立てです。スタジオは、それをプロジェクトで証明するために生まれました。",
    "about.story.yaroslav.name": "ヤロスラフ・キセリョフ",
    "about.story.yaroslav.role": "CEO · 財務ディレクター",
    "about.story.yaroslav.text":
      "すべてのプロジェクトに明確な計画と予算と納期があるよう管理します。クライアントが受け取るのは言い訳ではなく、成果です。",
    "about.story.closing":
      "デザインを装飾ではなくビジネスの道具として尊重する。そんなスタジオを二人でつくっています。",

    "about.quote.text":
      "デザインとは、どう見えるかではない。どう機能するかである。",
    "about.quote.author": "スティーブ・ジョブズ — スタジオが掲げる原則",

    "about.contacts.title": "連絡先",
    "about.contacts.kristina": "クリスティーナ・クズネツォワのメール",
    "about.contacts.yaroslav": "ヤロスラフ・キセリョフのメール",
    "about.contacts.phone": "電話番号",

    /* ─── プロセス ──────────────────────────────────────────── */
    "process.eyebrow": "— 私たちの進め方",
    "process.bgLabel": "HOW TO WORK",
    "process.titleLine1": "仕事の",
    "process.titleLine2": "プロセス",
    "process.subLine1": "最初のメッセージから、ファイルの受け渡しまで。",
    "process.subLine2": "各段階は透明で、常に管理されています。",

    "process.step1.title": "ブリーフィング",
    "process.step1.desc":
      "顔合わせを行い、課題を文章で確定し、範囲・予算・期日に合意します。ブリーフなしには始めません。",
    "process.step2.title": "コンセプト",
    "process.step2.desc":
      "クリスティーナがビジュアル案を組み立て、社内レビューを経てからご提示します。",
    "process.step3.title": "プレゼンテーションと修正",
    "process.step3.desc":
      "見せて、話し合い、磨き込みます。修正は2ラウンドまで契約に含まれます。",
    "process.step4.title": "制作",
    "process.step4.desc":
      "最終ファイル、実装、レンダリング、ソースの引き渡し。ローンチに必要なすべてを。",
    "process.step5.title": "納品",
    "process.step5.desc":
      "検収の署名、素材一式の引き渡し、フィードバックの収集。プロジェクトは完了し、ケースが仕上がります。",

    /* ─── サービス ──────────────────────────────────────────── */
    "services.title": "* services _.",
    "services.sub":
      "結束した専門家チームとして、記憶に残り、心を動かすウェブサイト、デジタルソリューション、ネイティブアプリをつくります。",
    "services.label": "サービス",
    "services.all": "すべてのサービス",

    /* ─── More Development ─────────────────────────────────── */
    "more.eyebrow": "Code",
    "more.title": "{ More Development }",
    "more.badge": "<Code />",
    "more.intro":
      "デザインとテクノロジーの境界にある仕事を引き受けます。業務を自動化し、ニューラルネットワークを実際の業務フローに組み込みます。",
    "more.cta": "プロジェクトを相談する",

    /* ─── テクニカルデザイン ────────────────────────────────── */
    "tech.eyebrow": "エンジニアリングとドキュメント",
    "tech.title": "< technical design >",
    "tech.badge": "M 1:1",
    "tech.intro":
      "製造向けの技術資料を作成します。公差付きの図面、回路図、プリント基板のパターン設計まで。",
    "tech.cta": "プロジェクトを相談する",

    /* ─── お客様の声 ────────────────────────────────────────── */
    "reviews.eyebrow": "お客様の声",
    "reviews.titleLine1": "結果を",
    "reviews.titleLine2": "託されています",
    "reviews.item1.name": "アレクサンドル・ペトロフ",
    "reviews.item1.role": "CEO, Noir Coffee",
    "reviews.item1.text":
      "クリスティーナとチームは、リブランディングを速く、要点を押さえて進めてくれました。パッケージ、サイト、SNSがひとつのトーンに。デザインが見た目だけでなく、売上のために働いているのが分かります。",
    "reviews.item2.name": "マリア・ソコロワ",
    "reviews.item2.role": "マーケティングディレクター, Solara Energy",
    "reviews.item2.text":
      "ブリーフ、コンセプト、修正——各段階が透明で、期日どおり、予算の想定外もありませんでした。心から誇れるサイトになりました。",
    "reviews.item3.name": "ドミトリー・ヴォルコフ",
    "reviews.item3.role": "Founder, Trove Platform",
    "reviews.item3.text":
      "複雑なダッシュボードを、分かりやすいUXで必要としていました。スタジオは想像以上に深くプロダクトを理解し、ユーザーの作業を軽くする解決策を提案してくれました。",

    /* ─── ポートフォリオ ────────────────────────────────────── */
    "work.title": "Portfolio",
    "work.metaTitle": "ポートフォリオ — Kuznetsova Design",
    "work.desc":
      "ブランディング、ウェブ、3D、アートディレクションの選りすぐりのプロジェクト",
    "work.stat.projects": "件のプロジェクト",
    "work.stat.categories": "つの領域",
    "work.stat.years": "年のデザイン経験",
    "work.backToPortfolio": "ポートフォリオ",

    /* ─── 作品一覧 ──────────────────────────────────────────── */
    "portfolio.categories": "カテゴリー",
    "portfolio.categoriesNav": "ポートフォリオのカテゴリー",
    "portfolio.industries": "業種",
    "portfolio.industriesNav": "ポートフォリオの業種",
    "portfolio.all": "すべての作品",
    "portfolio.hint": "スクロールしてください",
    "portfolio.prevSlide": "前のスライド",
    "portfolio.nextSlide": "次のスライド",
    "portfolio.slide": "スライド",
    "portfolio.empty":
      "このセクションにはまだ公開された作品がありません。",
    "portfolio.worksCount": "件",

    /* ─── ケースページ ──────────────────────────────────────── */
    "case.back": "ポートフォリオ",
    "case.about": "プロジェクトについて",
    "case.gallery": "ギャラリー",
    "case.mainScreen": "メイン画面",
    "case.details": "ディテール",
    "case.final": "フィナーレ",
    "case.client": "クライアント",
    "case.year": "年",
    "case.category": "カテゴリー",
    "case.tools": "ツール",
    "case.site": "ウェブサイト",
    "case.prev": "前へ",
    "case.next": "次へ",
    "case.nav": "作品間のナビゲーション",

    /* ─── ジャーナル ────────────────────────────────────────── */
    "blog.title": "Blog & News",
    "blog.metaTitle": "ジャーナル&ニュース — Kuznetsova Design",
    "blog.desc": "スタジオの仕事、出来事、日々の記録",
    "blog.all": "すべての記事",
    "blog.featured": "注目の記事",
    "blog.readTime": "分で読めます",
    "blog.readMore": "読む",
    "blog.backToBlog": "記事一覧",

    /* ─── サービス内容とサポート ────────────────────────────── */
    "products.label": "カタログ",
    "products.title": "私たちが提供するもの",
    "products.intro":
      "各サービスの内容と成果物。金額はブリーフのあと、ご提案の中でお伝えします。",
    "products.care.label": "サポート",
    "products.care.title": "Careプラン",
    "products.care.intro":
      "月額のサポート。サイトは生きたまま、常に最新で、見守られています。",
    "products.care.includes": "含まれるもの",
    "products.care.featured": "人気",
    "products.cta": "課題を相談する",

    /* ─── お問い合わせフォーム ──────────────────────────────── */
    "form.dialogLabel": "クライアントになる",
    "form.eyebrow": "プロジェクトを始める",
    "form.headlineLine1": "並外れたものを",
    "form.headlineAccent": "つくりましょう",
    "form.pitch":
      "フォームにご記入ください。24時間以内にご返信し、最初の通話でコンセプトをご提案します。",
    "form.promise1": "プロジェクト専任のアートディレクター",
    "form.promise2": "透明なプロセスと毎週の進捗共有",
    "form.promise3": "納期と作業範囲は契約に明記",
    "form.headerLabel": "お問い合わせ",
    "form.close": "閉じる",

    "form.name.label": "お名前",
    "form.name.placeholder": "山田",
    "form.company.label": "会社名",
    "form.company.placeholder": "あなたのブランド",
    "form.email.label": "メール",
    "form.email.placeholder": "you@company.com",
    "form.phone.label": "電話",
    "form.phone.placeholder": "+7 (___) ___-__-__",
    "form.telegram.label": "Telegram",
    "form.telegram.placeholder": "@username",
    "form.services.label": "ご希望のサービス",
    "form.budget.label": "ご予算",
    "form.message.label": "プロジェクトについて",
    "form.message.placeholder": "課題について詳しくお聞かせください…",

    "form.service.branding": "ブランディング",
    "form.service.web": "ウェブデザイン",
    "form.service.identity": "アイデンティティ",
    "form.service.uxui": "UX/UI",
    "form.service.motion": "モーション",
    "form.service.other": "その他",

    "form.budget.upTo150": "150,000 ₽ まで",
    "form.budget.150to500": "150,000 – 500,000 ₽",
    "form.budget.500to1000": "500,000 – 1,000,000 ₽",
    "form.budget.over1000": "1,000,000 ₽ 以上",

    "form.error.name": "お名前をご入力ください",
    "form.error.email": "メールアドレスをご入力ください",
    "form.error.phone": "電話番号をご入力ください",
    "form.error.message": "プロジェクトについてお聞かせください",
    "form.error.services": "サービスを1つ以上お選びください",
    "form.error.budget": "ご予算をお選びください",
    "form.error.submit": "送信できませんでした。もう一度お試しください。",
    "form.error.generic": "送信エラー",

    "form.submit": "送信する",
    "form.submitting": "送信中…",
    "form.privacyPrefix": "ボタンを押すと、次に同意したことになります：",
    "form.privacyLink": "プライバシーポリシー",

    "form.success.title": "送信しました",
    "form.success.body": "24時間以内にご連絡いたします。",
    "form.success.close": "閉じる",

    /* ─── フッター ──────────────────────────────────────────── */
    "footer.navigation": "ナビゲーション",
    "footer.studio": "スタジオ",
    "footer.contact": "連絡先",
    "footer.work": "ポートフォリオ",
    "footer.studioLink": "スタジオについて",
    "footer.services": "サービス",
    "footer.contactLink": "お問い合わせ",
    "footer.about": "私たちについて",
    "footer.journal": "ジャーナル",
    "footer.process": "プロセス",
    "footer.engineering": "エンジニアリング",
    "footer.location": "ロシア、モスクワ",
    "footer.rights": "無断転載を禁じます。",
    "footer.privacy": "プライバシーポリシー",

    /* ─── チャットのデモ ────────────────────────────────────── */
    "chat.bot": "ボット",
    "chat.you": "あなた",
    "chat.online": "オンライン",
    "chat.typing": "入力中…",
    "chat.placeholder": "メッセージ…",
    "chat.send": "送信",

    /* ─── 言語切り替え ──────────────────────────────────────── */
    "lang.label": "表示言語",
    "lang.ru": "ロシア語",
    "lang.en": "英語",
    "lang.zh": "中国語",
    "lang.es": "スペイン語",
    "lang.pt": "ポルトガル語",
    "lang.fr": "フランス語",
    "lang.de": "ドイツ語",
    "lang.ar": "アラビア語",
    "lang.ja": "日本語",
    "lang.tr": "トルコ語",
    "lang.switchToEn": "英語に切り替える",
    "lang.switchToRu": "ロシア語に切り替える",
  },

  /* ══════════════════════════════════════════════════════════════
     TÜRKÇE (TR)
     ══════════════════════════════════════════════════════════════ */
  tr: {
    /* ─── Объединённое меню портфолио ───────────────────── */
    "portfolio.eyebrow": "Portföy bölümleri",
    "portfolio.title": "Kimler için tasarlıyoruz",
    "portfolio.intro": "Soldan bir ürün — tam olarak ne yaptığımızı — ve bir sektör — kimin için olduğunu — seçin. Filtreler birleşir: «Web & Mobile» ile «Yeme-içme», restoran ve kafeler için yapılmış siteleri gösterir.",
    "portfolio.productLabel": "Ürün",
    "portfolio.industryLabel": "Sektör",
    "portfolio.allProducts": "Tüm ürünler",
    "portfolio.everything": "Tüm portföy",
    "portfolio.allIndustries": "Tüm sektörler",
    "portfolio.everyone": "Tüm müşteriler",
    "portfolio.allDesc": "Stüdyonun tam portföyü: marka kimliği, web siteleri, 3D ve içerik.",
    "portfolio.worksUnit": "proje",
    "portfolio.removeFilter": "Filtreyi kaldır",
    "portfolio.emptyLabel": "Bölüm hazırlanıyor",
    "portfolio.emptyText": "Bu kombinasyon için yayımlanmış bir çalışmamız henüz yok. Projenizi anlatın; benzer işleri gösterip sizde nasıl görüneceğini konuşalım.",
    "portfolio.discuss": "Projeyi konuşalım",
    "portfolio.reset": "Filtreleri sıfırla",
    /* ─── Genel ─────────────────────────────────────────────── */
    "common.brand": "Kuznetsova Design",
    "common.brandSub": "Tasarım stüdyosu · Moskova",
    "common.home": "Ana sayfa",
    "common.close": "Kapat",
    "common.open": "Aç",
    "common.back": "Geri",
    "common.next": "Sonraki",
    "common.prev": "Önceki",
    "common.more": "Daha fazlası",
    "common.viewAll": "Tümünü gör",
    "common.startProject": "Projeye başla",
    "common.discussProject": "Projeyi konuşalım",
    "common.becomeClient": "Müşterimiz olun",
    "common.viewCase": "Projeyi incele",
    "common.openSite": "Siteyi aç",
    "common.client": "Müşteri",
    "common.year": "Yıl",
    "common.category": "Kategori",
    "common.tools": "Araçlar",
    "common.website": "Web sitesi",
    "common.email": "E-posta",
    "common.phone": "Telefon",
    "common.telegram": "Telegram",
    "common.location": "Moskova, Rusya",
    "common.city": "Moskova",
    "common.privacy": "Gizlilik politikası",
    "common.rights": "Tüm hakları saklıdır.",
    "common.scrollDown": "Aşağı kaydırın",
    "common.loading": "Yükleniyor…",
    "common.concept": "Konsept",
    "common.conceptNote":
      "Müşteri siparişi değil, stüdyonun kendi girişimiyle yaptığı bir proje.",

    /* ─── Gezinme ───────────────────────────────────────────── */
    "nav.home": "Ana sayfa",
    "nav.services": "Hizmetler",
    "nav.studio": "Stüdyo",
    "nav.about": "Hakkımızda",
    "nav.work": "Portföy",
    "nav.blog": "Günlüğümüz",
    "nav.blogShort": "Günlük",
    "nav.journal": "Günlük",
    "nav.contact": "İletişim",
    "nav.contacts": "İletişim",
    "nav.process": "Süreç",
    "nav.engineering": "Mühendislik",
    "nav.startProject": "Projenize başlayın",
    "nav.openMenu": "Menüyü aç",
    "nav.closeMenu": "Menüyü kapat",
    "nav.navigation": "Gezinme",

    /* ─── Tam ekran menü ────────────────────────────────────── */
    "menu.label": "Gezinme",
    "menu.becomeClient": "+ Müşterimiz olun",
    "menu.badgeTitle": "Beş yıllık deneyim",
    "menu.badgeSub": "Premium markalar için tasarım stüdyosu",
    "menu.contactTitle": "Telegram",
    "menu.copyright": "© Kuznetsova Design 2026",

    /* ─── Açılış ekranı ─────────────────────────────────────── */
    "hero.city": "MOSCOW",
    "hero.brandTop": "Kuznetsova",
    "hero.brandBottom": "DESIGN.",
    "hero.tagline":
      "Görsel sistemler · Marka kimliği · Dijital deneyim · Web geliştirme",

    /* ─── Bilgi şeridi ──────────────────────────────────────── */
    "info.label": "Ne üretiyoruz",
    "info.subtext":
      "Stratejiden ve görsel kimlikten web geliştirmeye, otomasyona ve akıllı dijital sistemlere kadar.",

    /* ─── Stüdyo hakkında ───────────────────────────────────── */
    "about.eyebrow": "Hakkımızda",
    "about.title": "Sıradaki için tasarlıyoruz.",
    "about.sub":
      "Markadan koda, oradan tam 3B'ye kadar her boyutta çalışan görsel sistemler kuruyoruz.",
    "about.cta": "Projeye başla",

    "about.stat.years": "yıllık tasarım deneyimi",
    "about.stat.projects": "proje",
    "about.stat.disciplines": "disiplin",
    "about.stat.code": "elle yazılmış kod",

    "about.servicesLabel": "Ne yapıyoruz",
    "about.servicesIntro": "Üç disiplin, tek standart: brifi aşan iş",

    "about.service.branding.title": "MARKA VE GRAFİK",
    "about.service.branding.desc":
      "Logolar, marka kitapları, ambalaj, ürünler ve akılda kalan eksiksiz bir kimlik.",
    "about.service.web.title": "WEB & DIGITAL",
    "about.service.web.desc":
      "Elle yazılmış modern siteler ve dijital ürünler. Şablon yok, ödün yok.",
    "about.service.3d.title": "3D-DESIGN",
    "about.service.3d.desc":
      "Görselleştirme, 3B modelleme, motion ve AR/VR çözümleri. Satan bir hacim.",

    "about.story.eyebrow": "Marka hikâyesi",
    "about.story.headlineLine1": "Tek bir isim.",
    "about.story.headlineLine2": "Tasarımın her türü.",
    "about.story.kristina.name": "Kristina Kuznetsova",
    "about.story.kristina.role": "Kurucu · Sanat yönetmeni",
    "about.story.kristina.text":
      "Disiplinler arasındaki sınırları tanımayan bir tasarımcı. Grafik tasarım, web geliştirme ve 3B görselleştirme onun için ayrı meslekler değil, tek bir araç seti. Stüdyo bunu proje proje kanıtlamak için kuruldu.",
    "about.story.yaroslav.name": "Yaroslav Kiselev",
    "about.story.yaroslav.role": "CEO · Finans direktörü",
    "about.story.yaroslav.text":
      "Her projenin net bir planı, bütçesi ve teslim tarihi olmasını sağlar. Müşteri mazeret değil sonuç alsın diye.",
    "about.story.closing":
      "Birlikte, tasarımın süs değil bir iş aracı olarak görüldüğü bir stüdyo kuruyoruz.",

    "about.quote.text":
      "Tasarım bir şeyin nasıl göründüğü değildir. Nasıl çalıştığıdır.",
    "about.quote.author": "Steve Jobs — stüdyonun izlediği ilke",

    "about.contacts.title": "İletişim bilgilerimiz",
    "about.contacts.kristina": "Kristina Kuznetsova'nın e-postası",
    "about.contacts.yaroslav": "Yaroslav Kiselev'in e-postası",
    "about.contacts.phone": "Telefon numarası",

    /* ─── Süreç ─────────────────────────────────────────────── */
    "process.eyebrow": "— Nasıl çalışıyoruz",
    "process.bgLabel": "HOW TO WORK",
    "process.titleLine1": "Çalışma",
    "process.titleLine2": "süreci",
    "process.subLine1": "İlk mesajdan dosyaların teslimine kadar.",
    "process.subLine2": "Her aşama şeffaf ve kontrol altında.",

    "process.step1.title": "Brif",
    "process.step1.desc":
      "Tanışıyor, işi yazıyla sabitliyor; kapsam, bütçe ve süre üzerinde anlaşıyoruz. Brif olmadan başlamıyoruz.",
    "process.step2.title": "Konsept",
    "process.step2.desc":
      "Kristina görsel çözümü geliştirir. Müşteriye gösterilmeden önce iç değerlendirmeden geçer.",
    "process.step3.title": "Sunum ve revizyon",
    "process.step3.desc":
      "Gösteriyor, konuşuyor, inceltiyoruz. Sözleşmeye iki tur revizyon dahildir.",
    "process.step4.title": "Üretim",
    "process.step4.desc":
      "Nihai dosyalar, uygulama, render'lar ve kaynak dosya teslimi. Yayına çıkmak için gereken her şey.",
    "process.step5.title": "Teslim",
    "process.step5.desc":
      "Tutanağın imzalanması, materyallerin teslimi ve geri bildirim. Proje kapanır, vaka çalışması hazırdır.",

    /* ─── Hizmetler ─────────────────────────────────────────── */
    "services.title": "* services _.",
    "services.sub":
      "Uyumlu bir uzman ekibi olarak akılda kalan ve duygu uyandıran web siteleri, dijital çözümler ve yerel uygulamalar üretiyoruz.",
    "services.label": "Hizmetler",
    "services.all": "Tüm hizmetler",

    /* ─── More Development ─────────────────────────────────── */
    "more.eyebrow": "Code",
    "more.title": "{ More Development }",
    "more.badge": "<Code />",
    "more.intro":
      "Tasarımla teknolojinin kesiştiği işleri üstleniyoruz: süreçleri otomatikleştiriyor, yapay sinir ağlarını gerçek iş senaryolarına yerleştiriyoruz.",
    "more.cta": "Projeyi konuşalım",

    /* ─── Teknik tasarım ────────────────────────────────────── */
    "tech.eyebrow": "Mühendislik ve dokümantasyon",
    "tech.title": "< technical design >",
    "tech.badge": "M 1:1",
    "tech.intro":
      "Üretim için teknik dokümantasyon hazırlıyoruz: toleranslı teknik resimler, prensip şemaları ve baskılı devre kartı tasarımı.",
    "tech.cta": "Projeyi konuşalım",

    /* ─── Yorumlar ──────────────────────────────────────────── */
    "reviews.eyebrow": "Müşteri yorumları",
    "reviews.titleLine1": "Sonucu bize",
    "reviews.titleLine2": "emanet ediyorlar",
    "reviews.item1.name": "Alexander Petrov",
    "reviews.item1.role": "CEO, Noir Coffee",
    "reviews.item1.text":
      "Kristina ve ekibi yeniden markalaşmayı hızlı ve konuya odaklı yürüttü — ambalaj, site ve sosyal medya tek bir dilde. Tasarımın yalnızca güzel görünmediği, satışa çalıştığı belli.",
    "reviews.item2.name": "Maria Sokolova",
    "reviews.item2.role": "Pazarlama direktörü, Solara Energy",
    "reviews.item2.text":
      "Her aşamada şeffaf bir süreç: brif, konsept, revizyonlar — hepsi zamanında ve bütçede sürpriz olmadan. Gerçekten gurur duyduğumuz bir site aldık.",
    "reviews.item3.name": "Dmitry Volkov",
    "reviews.item3.role": "Founder, Trove Platform",
    "reviews.item3.text":
      "Karmaşık ama anlaşılır bir panele ihtiyacımız vardı. Stüdyo ürünü beklediğimizden daha derin kavradı ve kullanıcılarımızın işini kolaylaştıran çözümler önerdi.",

    /* ─── Portföy sayfası ───────────────────────────────────── */
    "work.title": "Portfolio",
    "work.metaTitle": "Portföy — Kuznetsova Design",
    "work.desc":
      "Marka, web, 3B ve sanat yönetimi alanlarından seçme projeler",
    "work.stat.projects": "proje",
    "work.stat.categories": "alan",
    "work.stat.years": "yıllık tasarım deneyimi",
    "work.backToPortfolio": "Portföy",

    /* ─── Vitrin ────────────────────────────────────────────── */
    "portfolio.categories": "Kategoriler",
    "portfolio.categoriesNav": "Portföy kategorileri",
    "portfolio.industries": "Sektörler",
    "portfolio.industriesNav": "Portföy sektörleri",
    "portfolio.all": "Tüm işler",
    "portfolio.hint": "Aşağı kaydırın",
    "portfolio.prevSlide": "Önceki slayt",
    "portfolio.nextSlide": "Sonraki slayt",
    "portfolio.slide": "Slayt",
    "portfolio.empty": "Bu bölümde henüz yayımlanmış iş yok.",
    "portfolio.worksCount": "iş",

    /* ─── Proje sayfası ─────────────────────────────────────── */
    "case.back": "Portföy",
    "case.about": "Proje hakkında",
    "case.gallery": "Galeri",
    "case.mainScreen": "Ana ekran",
    "case.details": "Detaylar",
    "case.final": "Final",
    "case.client": "Müşteri",
    "case.year": "Yıl",
    "case.category": "Kategori",
    "case.tools": "Araçlar",
    "case.site": "Web sitesi",
    "case.prev": "Önceki",
    "case.next": "Sonraki",
    "case.nav": "İşler arasında gezinme",

    /* ─── Günlük ────────────────────────────────────────────── */
    "blog.title": "Blog & News",
    "blog.metaTitle": "Günlük ve haberler — Kuznetsova Design",
    "blog.desc": "Stüdyo hayatından işler, etkinlikler ve notlar",
    "blog.all": "Tüm içerikler",
    "blog.featured": "Öne çıkan yazı",
    "blog.readTime": "dk okuma",
    "blog.readMore": "Oku",
    "blog.backToBlog": "Tüm yazılar",

    /* ─── Hizmetler ve bakım ────────────────────────────────── */
    "products.label": "Katalog",
    "products.title": "Ne sunuyoruz",
    "products.intro":
      "Her hizmetin içeriği ve sonucu. Tutarı briften sonra teklifte belirtiyoruz.",
    "products.care.label": "Bakım",
    "products.care.title": "Care planları",
    "products.care.intro":
      "Aylık destek: site canlı, güncel ve gözetim altında.",
    "products.care.includes": "Neler dahil",
    "products.care.featured": "En çok tercih edilen",
    "products.cta": "İhtiyacınızı konuşalım",

    /* ─── Başvuru formu ─────────────────────────────────────── */
    "form.dialogLabel": "Müşterimiz olun",
    "form.eyebrow": "Projenize başlayın",
    "form.headlineLine1": "Hadi birlikte",
    "form.headlineAccent": "olağanüstü bir iş çıkaralım",
    "form.pitch":
      "Formu doldurun — 24 saat içinde yanıt veriyor, ilk görüşmede bir konsept öneriyoruz.",
    "form.promise1": "Projenize özel bir sanat yönetmeni",
    "form.promise2": "Şeffaf süreç ve haftalık toplantılar",
    "form.promise3": "Süre ve kapsam sözleşmede sabit",
    "form.headerLabel": "Başvuru",
    "form.close": "Kapat",

    "form.name.label": "Ad",
    "form.name.placeholder": "Ahmet",
    "form.company.label": "Şirket",
    "form.company.placeholder": "Markanız",
    "form.email.label": "E-posta",
    "form.email.placeholder": "you@company.com",
    "form.phone.label": "Telefon",
    "form.phone.placeholder": "+7 (___) ___-__-__",
    "form.telegram.label": "Telegram",
    "form.telegram.placeholder": "@username",
    "form.services.label": "İhtiyacınız olan hizmetler",
    "form.budget.label": "Bütçe",
    "form.message.label": "Proje hakkında",
    "form.message.placeholder": "Bize ihtiyacınızı ayrıntılı anlatın...",

    "form.service.branding": "Marka",
    "form.service.web": "Web tasarımı",
    "form.service.identity": "Kimlik",
    "form.service.uxui": "UX/UI",
    "form.service.motion": "Motion",
    "form.service.other": "Diğer",

    "form.budget.upTo150": "150.000 ₽'ye kadar",
    "form.budget.150to500": "150.000 – 500.000 ₽",
    "form.budget.500to1000": "500.000 – 1.000.000 ₽",
    "form.budget.over1000": "1.000.000 ₽ üzeri",

    "form.error.name": "Adınızı girin",
    "form.error.email": "E-posta adresinizi girin",
    "form.error.phone": "Telefon numaranızı girin",
    "form.error.message": "Projeden söz edin",
    "form.error.services": "En az bir hizmet seçin",
    "form.error.budget": "Bir bütçe seçin",
    "form.error.submit": "Başvuru gönderilemedi. Lütfen tekrar deneyin.",
    "form.error.generic": "Gönderim hatası",

    "form.submit": "Başvuruyu gönder",
    "form.submitting": "Gönderiliyor...",
    "form.privacyPrefix": "Butona basarak kabul etmiş olursunuz:",
    "form.privacyLink": "gizlilik politikası",

    "form.success.title": "Başvurunuz gönderildi",
    "form.success.body": "24 saat içinde sizinle iletişime geçeceğiz.",
    "form.success.close": "Kapat",

    /* ─── Alt bilgi ─────────────────────────────────────────── */
    "footer.navigation": "Gezinme",
    "footer.studio": "Stüdyo",
    "footer.contact": "İletişim",
    "footer.work": "Portföy",
    "footer.studioLink": "Stüdyo hakkında",
    "footer.services": "Hizmetler",
    "footer.contactLink": "Bize ulaşın",
    "footer.about": "Hakkımızda",
    "footer.journal": "Günlük",
    "footer.process": "Süreç",
    "footer.engineering": "Mühendislik",
    "footer.location": "Moskova, Rusya",
    "footer.rights": "Tüm hakları saklıdır.",
    "footer.privacy": "Gizlilik politikası",

    /* ─── Örnek sohbet ──────────────────────────────────────── */
    "chat.bot": "bot",
    "chat.you": "siz",
    "chat.online": "çevrimiçi",
    "chat.typing": "yazıyor…",
    "chat.placeholder": "Mesaj…",
    "chat.send": "Gönder",

    /* ─── Dil değiştirme ────────────────────────────────────── */
    "lang.label": "Arayüz dili",
    "lang.ru": "Rusça",
    "lang.en": "İngilizce",
    "lang.zh": "Çince",
    "lang.es": "İspanyolca",
    "lang.pt": "Portekizce",
    "lang.fr": "Fransızca",
    "lang.de": "Almanca",
    "lang.ar": "Arapça",
    "lang.ja": "Japonca",
    "lang.tr": "Türkçe",
    "lang.switchToEn": "İngilizceye geç",
    "lang.switchToRu": "Rusçaya geç",
  },
};

const FALLBACK_LANGUAGE = "en";

function lookup(lang, key) {
  const table = DICT[lang];
  if (!table) return undefined;

  const value = table[key];
  return typeof value === "string" && value.length ? value : undefined;
}

/**
 * Достаёт строку из словаря.
 *
 * Цепочка подстановки, по шагам:
 *   1. запрошенный язык   — DICT[lang][key]
 *   2. английский         — DICT.en[key]      (общий мост между языками)
 *   3. русский            — DICT.ru[key]      (оригинал, полон по определению)
 *   4. fallback из вызова — t("key", "Текст по умолчанию")
 *   5. сам ключ           — видимый сигнал, что строку забыли завести
 *
 * Пустых мест на странице не появится ни при каком языке.
 */
export function translate(lang, key, fallback) {
  // 1. запрошенный язык
  const requested = lookup(lang, key);
  if (requested !== undefined) return requested;

  // 2. английский
  const english = lookup(FALLBACK_LANGUAGE, key);
  if (english !== undefined) return english;

  // 3. русский — оригинал словаря
  const russian = lookup(DEFAULT_LANGUAGE, key);
  if (russian !== undefined) return russian;

  // 4. строка, переданная вызывающим кодом
  if (typeof fallback === "string" && fallback.length) return fallback;

  // 5. ключ как последнее средство
  return key;
}

/**
 * Локализованное поле объекта данных.
 *
 * Данные проекта хранят обе версии в соседних полях:
 *   INDUSTRIES     → ru / en, desc / descEn
 *   PRODUCT_GROUPS → ru / en, lead / leadEn, items[].note / noteEn
 *   CARE_PLANS     → ru / en, tagline / taglineEn
 *
 * pickLocalized(industry, lang, "ru", "en")     → подпись вкладки
 * pickLocalized(industry, lang, "desc", "descEn") → описание
 *
 * Файлы данных остаются двуязычными по замыслу: содержимое проектов
 * ведётся на русском и английском, тогда как интерфейс (кнопки, подписи,
 * подсказки, ошибки формы) переведён на все десять языков.
 *
 * Поэтому правило простое и обратно совместимое:
 *   lang === "ru"  → русское поле,
 *   любой другой   → английское поле (для zh, es, pt, fr, de, ar, ja, tr
 *                    английский служит общим мостом).
 *
 * Если нужного поля нет, возвращается второе — пустых мест не будет.
 */
export function pickLocalized(obj, lang, ruKey = "ru", enKey = "en") {
  if (!obj) return "";

  const ruValue = obj[ruKey];
  const enValue = obj[enKey];

  if (lang === "ru") {
    if (typeof ruValue === "string" && ruValue.length) return ruValue;
    return typeof enValue === "string" ? enValue : "";
  }

  if (typeof enValue === "string" && enValue.length) return enValue;
  return typeof ruValue === "string" ? ruValue : "";
}

/**
 * Ключи, которые есть в русском словаре, но отсутствуют в переданном языке.
 *
 * Инструмент разработки, а не рантайма: в рендере не используется.
 * Быстрая проверка в консоли:
 *   LANGUAGES.forEach((l) => console.log(l, missingKeys(l).length));
 */
export function missingKeys(lang) {
  const source = DICT[DEFAULT_LANGUAGE];
  const table = DICT[lang];

  if (!table) return Object.keys(source);

  return Object.keys(source).filter((key) => {
    const value = table[key];
    return typeof value !== "string" || value.length === 0;
  });
}

export default DICT;
