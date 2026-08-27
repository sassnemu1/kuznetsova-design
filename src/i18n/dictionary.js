/**
 * Словарь интерфейса — русский и английский.
 *
 * Ключи плоские, в точечной нотации, сгруппированы по секциям сайта:
 * common.* nav.* menu.* hero.* info.* about.* process.* services.*
 * more.* tech.* reviews.* work.* portfolio.* case.* blog.* form.*
 * footer.* chat.* products.* lang.*
 *
 * Английский написан как самостоятельный маркетинговый текст, а не как
 * подстрочник русского: смысл и тон сохранены, формулировки — свои.
 *
 * Правило: у ключа обязаны быть обе версии. Если перевода нет, t() вернёт
 * fallback, а затем русский вариант — пустых мест на странице не появится.
 */

export const LANGUAGES = ["ru", "en"];

export const DEFAULT_LANGUAGE = "ru";

export const LANGUAGE_LABELS = {
  ru: "RU",
  en: "EN",
};

export const DICT = {
  /* ══════════════════════════════════════════════════════════════
     РУССКИЙ
     ══════════════════════════════════════════════════════════════ */
  ru: {
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
    "lang.switchToEn": "Переключить на английский",
    "lang.switchToRu": "Переключить на русский",
  },

  /* ══════════════════════════════════════════════════════════════
     ENGLISH
     ══════════════════════════════════════════════════════════════ */
  en: {
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
    "lang.switchToEn": "Switch to English",
    "lang.switchToRu": "Switch to Russian",
  },
};

/**
 * Достаёт строку из словаря.
 * Порядок: выбранный язык → fallback из вызова → русский → сам ключ.
 */
export function translate(lang, key, fallback) {
  const table = DICT[lang] || DICT[DEFAULT_LANGUAGE];
  const value = table ? table[key] : undefined;

  if (typeof value === "string" && value.length) return value;
  if (typeof fallback === "string" && fallback.length) return fallback;

  const ruValue = DICT[DEFAULT_LANGUAGE][key];
  if (typeof ruValue === "string" && ruValue.length) return ruValue;

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
 * Если английского поля нет, возвращается русское — пустых мест не будет.
 */
export function pickLocalized(obj, lang, ruKey = "ru", enKey = "en") {
  if (!obj) return "";

  const ruValue = obj[ruKey];
  const enValue = obj[enKey];

  if (lang === "en") {
    if (typeof enValue === "string" && enValue.length) return enValue;
    return typeof ruValue === "string" ? ruValue : "";
  }

  if (typeof ruValue === "string" && ruValue.length) return ruValue;
  return typeof enValue === "string" ? enValue : "";
}

export default DICT;
