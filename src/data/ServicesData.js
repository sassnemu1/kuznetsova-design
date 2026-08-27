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
        i18n: {
          "en": {
            "sub": "Logo and visual identity",
            "description": "A minimalist bird logo for an artificial intelligence company: a symbol of motion and speed with futuristic AI accents, plus a palette and typography for every medium.",
            "tags": [
              "Logo",
              "Branding",
              "AI"
            ]
          },
          "zh": {
            "sub": "标志与品牌形象",
            "description": "为一家人工智能公司打造的极简飞鸟标志：以运动与速度为象征，辅以未来感的 AI 元素，并配套适用于全部载体的色彩与字体体系。",
            "tags": [
              "标志",
              "品牌塑造",
              "AI"
            ]
          },
          "es": {
            "sub": "Logotipo e identidad visual",
            "description": "Un logotipo minimalista en forma de pájaro para una empresa de inteligencia artificial: símbolo de movimiento y velocidad con acentos futuristas de IA, además de paleta y tipografía para todos los soportes.",
            "tags": [
              "Logotipo",
              "Branding",
              "AI"
            ]
          },
          "pt": {
            "sub": "Logótipo e identidade visual",
            "description": "Um logótipo minimalista em forma de pássaro para uma empresa de inteligência artificial: símbolo de movimento e velocidade com acentos futuristas de IA, mais paleta e tipografia para todos os suportes.",
            "tags": [
              "Logótipo",
              "Branding",
              "AI"
            ]
          },
          "fr": {
            "sub": "Logo et identité visuelle",
            "description": "Un logo minimaliste en forme d’oiseau pour une entreprise d’intelligence artificielle\u00A0: symbole de mouvement et de vitesse, accents futuristes liés à l’IA, palette et typographie pour tous les supports.",
            "tags": [
              "Logo",
              "Image de marque",
              "AI"
            ]
          },
          "de": {
            "sub": "Logo und Erscheinungsbild",
            "description": "Ein minimalistisches Vogel-Logo für ein Unternehmen für künstliche Intelligenz: Sinnbild für Bewegung und Geschwindigkeit mit futuristischen KI-Akzenten, dazu Farbpalette und Typografie für alle Medien.",
            "tags": [
              "Logo",
              "Branding",
              "AI"
            ]
          },
          "ar": {
            "sub": "شعار وهوية بصرية",
            "description": "شعار مبسّط على هيئة طائر لشركة تعمل في الذكاء الاصطناعي: رمز للحركة والسرعة بلمسات مستقبلية، مع لوحة ألوان ونظام طباعي لكل الوسائط.",
            "tags": [
              "شعار",
              "هوية العلامة",
              "AI"
            ]
          },
          "ja": {
            "sub": "ロゴとブランドアイデンティティ",
            "description": "人工知能企業のためのミニマルな鳥のロゴ。動きと速さを象徴し、未来的なAIの要素を添え、あらゆる媒体に対応する配色とタイポグラフィを整備しました。",
            "tags": [
              "ロゴ",
              "ブランディング",
              "AI"
            ]
          },
          "tr": {
            "sub": "Logo ve kurumsal kimlik",
            "description": "Yapay zekâ alanında çalışan bir şirket için minimalist kuş logosu: hareketi ve hızı simgeleyen, fütüristik yapay zekâ vurguları taşıyan tasarım; tüm mecralar için renk paleti ve tipografi.",
            "tags": [
              "Logo",
              "Marka kimliği",
              "AI"
            ]
          }
        },
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
        i18n: {
          "en": {
            "sub": "Logo and identity",
            "client": "Kuznetsova design studio",
            "description": "A restrained typographic logo for a studio of architectural and interior solutions. The КЯ monogram and a muted monochrome palette underline the brand’s expertise and standing.",
            "tags": [
              "Logo",
              "Typography",
              "Identity"
            ]
          },
          "zh": {
            "sub": "标志与视觉识别",
            "client": "Kuznetsova 设计工作室",
            "description": "为专注建筑与室内方案的设计工作室打造的简练字体标志。КЯ 组合字与克制的单色体系，凸显品牌的专业度与格调。",
            "tags": [
              "标志",
              "字体排印",
              "视觉识别"
            ]
          },
          "es": {
            "sub": "Logotipo e identidad",
            "client": "Estudio de diseño Kuznetsova",
            "description": "Un logotipo tipográfico sobrio para un estudio de soluciones arquitectónicas y de interiorismo. El monograma КЯ y una gama monocroma contenida subrayan la solvencia y el estatus de la marca.",
            "tags": [
              "Logotipo",
              "Tipografía",
              "Identidad"
            ]
          },
          "pt": {
            "sub": "Logótipo e identidade",
            "client": "Estúdio de design Kuznetsova",
            "description": "Um logótipo tipográfico sóbrio para um estúdio de soluções de arquitetura e interiores. O monograma КЯ e uma gama monocromática contida sublinham a competência e o estatuto da marca.",
            "tags": [
              "Logótipo",
              "Tipografia",
              "Identidade"
            ]
          },
          "fr": {
            "sub": "Logo et identité",
            "client": "Studio de design Kuznetsova",
            "description": "Un logo typographique sobre pour un studio de solutions architecturales et d’intérieur. Le monogramme КЯ et une gamme monochrome retenue soulignent l’expertise et le statut de la marque.",
            "tags": [
              "Logo",
              "Typographie",
              "Identité"
            ]
          },
          "de": {
            "sub": "Logo und Identität",
            "client": "Designbüro Kuznetsova",
            "description": "Ein zurückhaltendes typografisches Logo für ein Büro für Architektur- und Interieurlösungen. Das Monogramm КЯ und eine gedämpfte monochrome Farbwelt betonen Kompetenz und Rang der Marke.",
            "tags": [
              "Logo",
              "Typografie",
              "Identität"
            ]
          },
          "ar": {
            "sub": "شعار وهوية",
            "client": "استوديو التصميم Kuznetsova",
            "description": "شعار طباعي مقتضب لاستوديو يعمل في حلول العمارة والتصميم الداخلي. الحرفان المتشابكان КЯ وتدرّج أحادي اللون هادئ يبرزان خبرة العلامة ومكانتها.",
            "tags": [
              "شعار",
              "طباعة حروف",
              "هوية"
            ]
          },
          "ja": {
            "sub": "ロゴとアイデンティティ",
            "client": "デザインスタジオ Kuznetsova",
            "description": "建築とインテリアの設計を手がけるスタジオのための、簡潔なタイポグラフィックロゴ。КЯのモノグラムと抑制のきいたモノクロームが、ブランドの専門性と品格を際立たせます。",
            "tags": [
              "ロゴ",
              "タイポグラフィ",
              "アイデンティティ"
            ]
          },
          "tr": {
            "sub": "Logo ve kimlik",
            "client": "Kuznetsova tasarım stüdyosu",
            "description": "Mimari ve iç mekân çözümleri üreten bir stüdyo için sade tipografik logo. КЯ monogramı ve ölçülü monokrom palet, markanın uzmanlığını ve konumunu vurguluyor.",
            "tags": [
              "Logo",
              "Tipografi",
              "Kimlik"
            ]
          }
        },
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
        i18n: {
          "en": {
            "sub": "Tverskaya 9 — launching the venue",
            "client": "ART CAFÉ, Moscow — the studio’s own venue",
            "description": "The full launch package for a café on Tverskaya: name, identity, menu, print, website and content plan. It is the studio’s own venue — here we are client and contractor at once, so the decisions were made without compromise and are measured against revenue.",
            "tags": [
              "Identity",
              "Launch",
              "Print"
            ]
          },
          "zh": {
            "sub": "特维尔大街 9 号——门店启动",
            "client": "ART CAFÉ，莫斯科——工作室自营门店",
            "description": "特维尔大街咖啡馆的整套启动方案：命名、视觉识别、菜单、印刷品、网站与内容规划。这是工作室自己的门店，我们既是客户也是执行方，因此每个决定都不打折扣，并由营业额来检验。",
            "tags": [
              "视觉识别",
              "开业启动",
              "印刷设计"
            ]
          },
          "es": {
            "sub": "Tverskaya 9: apertura del local",
            "client": "ART CAFÉ, Moscú — local propio del estudio",
            "description": "Paquete completo de lanzamiento de una cafetería en Tverskaya: nombre, identidad, carta, material impreso, sitio web y plan de contenidos. Es el local propio del estudio: aquí somos cliente y proveedor a la vez, así que las decisiones se tomaron sin concesiones y se miden por la facturación.",
            "tags": [
              "Identidad",
              "Lanzamiento",
              "Imprenta"
            ]
          },
          "pt": {
            "sub": "Tverskaya 9 — abertura do espaço",
            "client": "ART CAFÉ, Moscovo — espaço próprio do estúdio",
            "description": "Pacote completo de lançamento de um café na Tverskaya: nome, identidade, menu, material impresso, site e plano de conteúdos. É o espaço próprio do estúdio: aqui somos cliente e fornecedor ao mesmo tempo, por isso as decisões foram tomadas sem cedências e são medidas pela faturação.",
            "tags": [
              "Identidade",
              "Lançamento",
              "Impressos"
            ]
          },
          "fr": {
            "sub": "Tverskaïa 9 — ouverture du lieu",
            "client": "ART CAFÉ, Moscou — lieu du studio",
            "description": "Le dispositif complet de lancement d’un café sur la Tverskaïa\u00A0: nom, identité, carte, imprimés, site et plan de contenus. C’est le lieu du studio\u00A0: nous y sommes à la fois client et prestataire, les décisions ont donc été prises sans compromis et se mesurent au chiffre d’affaires.",
            "tags": [
              "Identité",
              "Lancement",
              "Imprimés"
            ]
          },
          "de": {
            "sub": "Twerskaja 9 — Eröffnung des Lokals",
            "client": "ART CAFÉ, Moskau — eigenes Lokal des Büros",
            "description": "Das vollständige Launch-Paket für ein Café an der Twerskaja: Name, Erscheinungsbild, Speisekarte, Drucksachen, Website und Contentplan. Es ist das eigene Lokal des Büros — hier sind wir Kunde und Dienstleister zugleich, deshalb wurden die Entscheidungen ohne Kompromisse getroffen und am Umsatz gemessen.",
            "tags": [
              "Erscheinungsbild",
              "Eröffnung",
              "Drucksachen"
            ]
          },
          "ar": {
            "sub": "تفيرسكايا 9 — إطلاق المكان",
            "client": "ART CAFÉ، موسكو — مشروع الاستوديو الخاص",
            "description": "حزمة إطلاق كاملة لمقهى في شارع تفيرسكايا: الاسم والهوية وقائمة الطعام والمطبوعات والموقع وخطة المحتوى. المكان ملك للاستوديو، فنحن هنا العميل والمنفّذ معًا، ولذلك اتُّخذت القرارات دون تنازلات وتُقاس بالإيرادات.",
            "tags": [
              "هوية",
              "إطلاق",
              "مطبوعات"
            ]
          },
          "ja": {
            "sub": "トヴェルスカヤ9番地 — 店舗の立ち上げ",
            "client": "ART CAFÉ、モスクワ — スタジオ自身の店舗",
            "description": "トヴェルスカヤ通りのカフェを立ち上げる一式：ネーミング、アイデンティティ、メニュー、印刷物、ウェブサイト、コンテンツ計画。スタジオ自身の店舗であり、私たちは発注者であり実行者でもあります。だから妥協のない判断ができ、その成果は売上で検証されます。",
            "tags": [
              "アイデンティティ",
              "立ち上げ",
              "印刷物"
            ]
          },
          "tr": {
            "sub": "Tverskaya 9 — mekânın açılışı",
            "client": "ART CAFÉ, Moskova — stüdyonun kendi mekânı",
            "description": "Tverskaya'daki bir kafenin eksiksiz açılış paketi: isim, kimlik, menü, matbu işler, web sitesi ve içerik planı. Mekân stüdyonun kendisine ait; burada hem müşteri hem yükleniciyiz, bu yüzden kararlar ödün verilmeden alındı ve ciroyla sınanıyor.",
            "tags": [
              "Kimlik",
              "Açılış",
              "Matbaa"
            ]
          }
        },
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
        i18n: {
          "en": {
            "sub": "Portfolio site for a brow artist",
            "client": "Brow by Vika, Yaroslavl",
            "description": "A website for a brow artist from Yaroslavl: original illustrations, GSAP animation, online booking, a portfolio and SEO."
          },
          "zh": {
            "sub": "眉形师的作品集网站",
            "client": "Brow by Vika，雅罗斯拉夫尔",
            "description": "来自雅罗斯拉夫尔的眉形师官网：原创插画、GSAP 动效、在线预约、作品集与 SEO 优化。"
          },
          "es": {
            "sub": "Sitio-portafolio de una especialista en cejas",
            "client": "Brow by Vika, Yaroslavl",
            "description": "Sitio web de una especialista en cejas de Yaroslavl: ilustraciones propias, animación con GSAP, reservas en línea, portafolio y optimización SEO."
          },
          "pt": {
            "sub": "Site-portefólio de uma especialista em sobrancelhas",
            "client": "Brow by Vika, Iaroslavl",
            "description": "Site de uma especialista em sobrancelhas de Iaroslavl: ilustrações originais, animação em GSAP, marcação online, portefólio e otimização SEO."
          },
          "fr": {
            "sub": "Site-portfolio d’une spécialiste des sourcils",
            "client": "Brow by Vika, Iaroslavl",
            "description": "Site d’une spécialiste des sourcils à Iaroslavl\u00A0: illustrations originales, animations GSAP, prise de rendez-vous en ligne, portfolio et optimisation SEO."
          },
          "de": {
            "sub": "Portfolio-Website einer Brow-Stylistin",
            "client": "Brow by Vika, Jaroslawl",
            "description": "Website einer Brow-Stylistin aus Jaroslawl: eigene Illustrationen, GSAP-Animationen, Onlinebuchung, Portfolio und SEO-Optimierung."
          },
          "ar": {
            "sub": "موقع أعمال لخبيرة تجميل الحواجب",
            "client": "Brow by Vika، ياروسلافل",
            "description": "موقع لخبيرة تجميل الحواجب من ياروسلافل: رسوم أصلية، وحركات GSAP، وحجز مواعيد عبر الإنترنت، ومعرض أعمال، وتحسين لمحركات البحث."
          },
          "ja": {
            "sub": "アイブロウ・アーティストのポートフォリオサイト",
            "client": "Brow by Vika、ヤロスラヴリ",
            "description": "ヤロスラヴリのアイブロウ・アーティストのサイト。オリジナルイラスト、GSAPアニメーション、オンライン予約、作品集、SEO対策を実装しました。"
          },
          "tr": {
            "sub": "Kaş tasarımcısı için portfolyo sitesi",
            "client": "Brow by Vika, Yaroslavl",
            "description": "Yaroslavl'daki bir kaş tasarımcısının sitesi: özgün illüstrasyonlar, GSAP animasyonları, çevrimiçi randevu, portfolyo ve SEO optimizasyonu."
          }
        },
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
        i18n: {
          "en": {
            "sub": "Promo site for a party bus",
            "client": "Prime Bus, Moscow",
            "description": "“Not a bus. A club on wheels” — a promo site with a neon identity, kinetic typography and online booking."
          },
          "zh": {
            "sub": "派对巴士推广站",
            "client": "Prime Bus，莫斯科",
            "description": "“不是巴士，是移动的俱乐部”——霓虹质感的视觉识别、动态字体与在线预订构成的推广网站。"
          },
          "es": {
            "sub": "Sitio promocional de un party bus",
            "client": "Prime Bus, Moscú",
            "description": "«No es un autobús. Es un club sobre ruedas»: sitio promocional con identidad de neón, tipografía cinética y reservas en línea."
          },
          "pt": {
            "sub": "Site promocional de um party bus",
            "client": "Prime Bus, Moscovo",
            "description": "«Não é um autocarro. É um clube sobre rodas»: site promocional com identidade em néon, tipografia cinética e reservas online."
          },
          "fr": {
            "sub": "Site promotionnel d’un party bus",
            "client": "Prime Bus, Moscou",
            "description": "«\u00A0Pas un bus. Un club sur roues\u00A0»\u00A0: site promotionnel à l’identité néon, typographie cinétique et réservation en ligne."
          },
          "de": {
            "sub": "Promo-Website für einen Partybus",
            "client": "Prime Bus, Moskau",
            "description": "„Kein Bus. Ein Club auf Rädern“ — eine Promo-Website mit Neon-Erscheinungsbild, kinetischer Typografie und Onlinebuchung."
          },
          "ar": {
            "sub": "موقع ترويجي لحافلة حفلات",
            "client": "Prime Bus، موسكو",
            "description": "«ليست حافلة، بل نادٍ على عجلات» — موقع ترويجي بهوية نيونية وطباعة حركية وحجز عبر الإنترنت."
          },
          "ja": {
            "sub": "パーティーバスのプロモサイト",
            "client": "Prime Bus、モスクワ",
            "description": "「バスではない。車輪のついたクラブだ」——ネオンのアイデンティティ、キネティックタイポグラフィ、オンライン予約を備えたプロモーションサイト。"
          },
          "tr": {
            "sub": "Parti otobüsü için tanıtım sitesi",
            "client": "Prime Bus, Moskova",
            "description": "“Otobüs değil. Tekerlekli bir kulüp” — neon kimlikli, kinetik tipografili ve çevrimiçi rezervasyonlu tanıtım sitesi."
          }
        },
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
        i18n: {
          "en": {
            "sub": "Grocery e-commerce store",
            "client": "Online Bazar, Moscow",
            "description": "A fresh-food store with delivery: catalogue, cart, promotions, wholesale orders and messenger integration."
          },
          "zh": {
            "sub": "生鲜食品电商",
            "client": "Online Bazar，莫斯科",
            "description": "配送到家的生鲜食品商店：商品目录、购物车、促销、批发订单以及与即时通讯工具的对接。"
          },
          "es": {
            "sub": "Tienda de alimentación en línea",
            "client": "Online Bazar, Moscú",
            "description": "Tienda de productos frescos con reparto: catálogo, carrito, promociones, pedidos al por mayor e integración con mensajerías."
          },
          "pt": {
            "sub": "Loja online de alimentação",
            "client": "Online Bazar, Moscovo",
            "description": "Loja de produtos frescos com entrega: catálogo, carrinho, promoções, encomendas por grosso e integração com aplicações de mensagens."
          },
          "fr": {
            "sub": "Boutique alimentaire en ligne",
            "client": "Online Bazar, Moscou",
            "description": "Une épicerie de produits frais avec livraison\u00A0: catalogue, panier, promotions, commandes en gros et intégration aux messageries."
          },
          "de": {
            "sub": "Onlineshop für Lebensmittel",
            "client": "Online Bazar, Moskau",
            "description": "Ein Frischwarenshop mit Lieferung: Katalog, Warenkorb, Aktionen, Großbestellungen und Anbindung an Messenger."
          },
          "ar": {
            "sub": "متجر إلكتروني للمواد الغذائية",
            "client": "Online Bazar، موسكو",
            "description": "متجر منتجات طازجة مع خدمة التوصيل: كتالوج، وسلة شراء، وعروض، وطلبات بالجملة، وربط بتطبيقات المراسلة."
          },
          "ja": {
            "sub": "食品のオンラインストア",
            "client": "Online Bazar、モスクワ",
            "description": "配送に対応した生鮮食品ストア。カタログ、カート、キャンペーン、業務用のまとめ買い、メッセンジャー連携を実装しました。"
          },
          "tr": {
            "sub": "Online market mağazası",
            "client": "Online Bazar, Moskova",
            "description": "Teslimatlı taze gıda mağazası: katalog, sepet, kampanyalar, toptan siparişler ve mesajlaşma uygulamalarıyla entegrasyon."
          }
        },
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
        i18n: {
          "en": {
            "sub": "Website for a watchmaking atelier",
            "client": "Tsedro, Moscow — watchmaking atelier since 2005",
            "description": "A website for a Moscow atelier of resolutely one-off watches. An atelier is not a shop: there are no prices and no cart, and the funnel leads to a conversation with the watchmaker. Hence the restrained typography, the large-scale presentation of the material and the path “piece → maker → enquiry”.",
            "tags": [
              "Next.js",
              "Luxury",
              "Catalogue"
            ]
          },
          "zh": {
            "sub": "制表工坊网站",
            "client": "Tsedro，莫斯科——制表工坊，始于 2005 年",
            "description": "莫斯科一间只做孤品腕表的工坊网站。工坊不是商店：没有标价也没有购物车，转化路径指向与制表师的对话。因此排版克制、素材呈现放大，路径为“作品 → 制表师 → 咨询”。",
            "tags": [
              "Next.js",
              "Luxury",
              "目录"
            ]
          },
          "es": {
            "sub": "Sitio web de un taller relojero",
            "client": "Tsedro, Moscú — taller relojero desde 2005",
            "description": "Sitio para un taller moscovita de relojes irrevocablemente únicos. Un taller no es una tienda: no hay precios ni carrito, y el embudo conduce a una conversación con el maestro. De ahí la tipografía contenida, la presentación a gran escala del material y el recorrido «pieza → maestro → solicitud».",
            "tags": [
              "Next.js",
              "Luxury",
              "Catálogo"
            ]
          },
          "pt": {
            "sub": "Site de um atelier de relojoaria",
            "client": "Tsedro, Moscovo — atelier de relojoaria desde 2005",
            "description": "Site de um atelier moscovita de relógios irremediavelmente únicos. Um atelier não é uma loja: não há preços nem carrinho, e o funil conduz a uma conversa com o mestre. Daí a tipografia contida, a apresentação ampla dos materiais e o percurso «peça → mestre → pedido».",
            "tags": [
              "Next.js",
              "Luxury",
              "Catálogo"
            ]
          },
          "fr": {
            "sub": "Site d’un atelier horloger",
            "client": "Tsedro, Moscou — atelier horloger depuis 2005",
            "description": "Site d’un atelier moscovite de montres résolument uniques. Un atelier n’est pas une boutique\u00A0: ni prix ni panier, et le parcours mène à un échange avec l’horloger. D’où une typographie sobre, une présentation ample des visuels et le chemin «\u00A0pièce → horloger → demande\u00A0».",
            "tags": [
              "Next.js",
              "Luxury",
              "Catalogue"
            ]
          },
          "de": {
            "sub": "Website einer Uhrmacherwerkstatt",
            "client": "Tsedro, Moskau — Uhrmacheratelier seit 2005",
            "description": "Website eines Moskauer Ateliers für kompromisslose Einzelstücke. Ein Atelier ist kein Laden: Es gibt weder Preise noch Warenkorb, der Weg führt zum Gespräch mit dem Uhrmacher. Daher die zurückhaltende Typografie, die großzügige Präsentation des Materials und die Route „Stück → Meister → Anfrage“.",
            "tags": [
              "Next.js",
              "Luxury",
              "Katalog"
            ]
          },
          "ar": {
            "sub": "موقع لورشة صناعة الساعات",
            "client": "Tsedro، موسكو — ورشة ساعات منذ 2005",
            "description": "موقع لورشة موسكوفية لا تصنع سوى القطع الفريدة. الورشة ليست متجرًا: لا أسعار ولا سلة شراء، والمسار يقود إلى حديث مع الصانع. من هنا جاءت الطباعة الهادئة والعرض الواسع للمواد والمسار «القطعة ← الصانع ← الطلب»‏.",
            "tags": [
              "Next.js",
              "Luxury",
              "كتالوج"
            ]
          },
          "ja": {
            "sub": "時計工房のサイト",
            "client": "Tsedro、モスクワ — 2005年創業の時計工房",
            "description": "一点ものだけを手がけるモスクワの時計工房のサイト。工房は店舗ではありません。価格もカートも置かず、導線は職人との対話へ向かいます。だからこそ抑制のきいたタイポグラフィ、大きく見せる素材、そして「作品 → 職人 → 問い合わせ」という道筋を選びました。",
            "tags": [
              "Next.js",
              "Luxury",
              "カタログ"
            ]
          },
          "tr": {
            "sub": "Saat atölyesinin sitesi",
            "client": "Tsedro, Moskova — 2005'ten beri saat atölyesi",
            "description": "Yalnızca tek parça saatler üreten Moskovalı bir atölyenin sitesi. Atölye bir mağaza değil: fiyat da sepet de yok, akış ustayla konuşmaya çıkıyor. Bu yüzden ölçülü tipografi, geniş görsel sunum ve “parça → usta → talep” yolu.",
            "tags": [
              "Next.js",
              "Luxury",
              "Katalog"
            ]
          }
        },
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
        i18n: {
          "en": {
            "sub": "Watch store and manufacture",
            "client": "Russkoe Vremya / RusWatch, Moscow — 20+ years in the market",
            "description": "A project for a watch manufacturer and retailer with a live catalogue of several hundred items. The task was to keep the merchandising logic that works and strip its visual age: product card, filters, availability and a clear path to purchase.",
            "tags": [
              "E-commerce",
              "Catalogue",
              "UX/UI"
            ]
          },
          "zh": {
            "sub": "钟表零售与生产",
            "client": "Russkoe Vremya / RusWatch，莫斯科——深耕市场 20 余年",
            "description": "为一家钟表生产与销售企业打造的项目，在售目录有数百个货号。任务是保留行之有效的商品逻辑，同时褪去它的视觉年龄：商品卡片、筛选、库存状态与清晰的购买路径。",
            "tags": [
              "E-commerce",
              "目录",
              "UX/UI"
            ]
          },
          "es": {
            "sub": "Tienda y fabricación de relojes",
            "client": "Russkoe Vremya / RusWatch, Moscú — más de 20 años en el mercado",
            "description": "Proyecto para un fabricante y vendedor de relojes con un catálogo vivo de varios centenares de referencias. El encargo: conservar la lógica comercial que funciona y quitarle la edad visual — ficha de producto, filtros, disponibilidad y un camino claro hasta la compra.",
            "tags": [
              "E-commerce",
              "Catálogo",
              "UX/UI"
            ]
          },
          "pt": {
            "sub": "Loja e fabrico de relógios",
            "client": "Russkoe Vremya / RusWatch, Moscovo — mais de 20 anos no mercado",
            "description": "Projeto para um fabricante e vendedor de relógios com um catálogo vivo de várias centenas de referências. A tarefa: manter a lógica comercial que funciona e retirar-lhe a idade visual — ficha de produto, filtros, disponibilidade e um caminho claro até à compra.",
            "tags": [
              "E-commerce",
              "Catálogo",
              "UX/UI"
            ]
          },
          "fr": {
            "sub": "Boutique et manufacture horlogère",
            "client": "Russkoe Vremya / RusWatch, Moscou — plus de 20 ans sur le marché",
            "description": "Projet pour un fabricant et distributeur de montres, avec un catalogue vivant de plusieurs centaines de références. L’enjeu\u00A0: conserver la logique commerciale qui fonctionne et lui ôter son âge visuel — fiche produit, filtres, disponibilité et un chemin d’achat lisible.",
            "tags": [
              "E-commerce",
              "Catalogue",
              "UX/UI"
            ]
          },
          "de": {
            "sub": "Uhrenhandel und Manufaktur",
            "client": "Russkoe Vremya / RusWatch, Moskau — über 20 Jahre am Markt",
            "description": "Ein Projekt für einen Hersteller und Händler von Uhren mit einem lebendigen Katalog von mehreren Hundert Artikeln. Die Aufgabe: die funktionierende Warenlogik erhalten und ihr das visuelle Alter nehmen — Produktkarte, Filter, Verfügbarkeit und ein klarer Weg zum Kauf.",
            "tags": [
              "E-commerce",
              "Katalog",
              "UX/UI"
            ]
          },
          "ar": {
            "sub": "متجر ساعات ومصنع",
            "client": "Russkoe Vremya / RusWatch، موسكو — أكثر من 20 عامًا في السوق",
            "description": "مشروع لشركة تصنّع الساعات وتبيعها، بكتالوج حيّ يضم مئات الأصناف. المهمة: الحفاظ على منطق العرض الذي يعمل بنجاح وإزالة قِدَمه البصري — بطاقة المنتج، والفلاتر، وحالة التوفر، ومسار شراء واضح.",
            "tags": [
              "E-commerce",
              "كتالوج",
              "UX/UI"
            ]
          },
          "ja": {
            "sub": "時計の販売と製造",
            "client": "Russkoe Vremya / RusWatch、モスクワ — 市場歴20年以上",
            "description": "数百品番の在庫を抱える時計メーカー兼販売店のためのプロジェクト。機能している商品ロジックはそのままに、見た目の古さだけを取り除くことが課題でした。商品カード、絞り込み、在庫状況、そして購入までの明快な導線を整えています。",
            "tags": [
              "E-commerce",
              "カタログ",
              "UX/UI"
            ]
          },
          "tr": {
            "sub": "Saat mağazası ve üretimi",
            "client": "Russkoe Vremya / RusWatch, Moskova — 20+ yıldır piyasada",
            "description": "Birkaç yüz ürün kodundan oluşan canlı bir kataloğu olan saat üreticisi ve satıcısı için proje. Amaç, işleyen ürün mantığını korurken görsel yaşını almaktı: ürün kartı, filtreler, stok durumu ve satın almaya giden anlaşılır bir yol.",
            "tags": [
              "E-commerce",
              "Katalog",
              "UX/UI"
            ]
          }
        },
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
        i18n: {
          "en": {
            "sub": "Digital platform for a restaurant",
            "client": "âmbar, Cascais (Portugal)",
            "description": "A concept for a restaurant’s digital platform: a live “âmbar clock” counting down to sunset, the full menu with takeaway ordering, a members’ PWA, a kitchen dashboard and eight interface languages, RTL included.",
            "tags": [
              "Next.js",
              "PWA",
              "Multilingual"
            ]
          },
          "zh": {
            "sub": "餐厅数字平台",
            "client": "âmbar，卡斯凯什（葡萄牙）",
            "description": "餐厅数字平台的概念方案：实时倒数至日落的“âmbar 时钟”、含外带下单的完整菜单、会员制 PWA 应用、后厨看板，以及包含从右向左书写在内的八种界面语言。",
            "tags": [
              "Next.js",
              "PWA",
              "多语言"
            ]
          },
          "es": {
            "sub": "Plataforma digital de un restaurante",
            "client": "âmbar, Cascais (Portugal)",
            "description": "Concepto de plataforma digital para un restaurante: un «reloj âmbar» en vivo con cuenta atrás hasta la puesta de sol, la carta completa con pedidos para llevar, una PWA de club, un panel de cocina y ocho idiomas de interfaz, RTL incluido.",
            "tags": [
              "Next.js",
              "PWA",
              "Multilingüe"
            ]
          },
          "pt": {
            "sub": "Plataforma digital do restaurante",
            "client": "âmbar, Cascais (Portugal)",
            "description": "Conceito de plataforma digital para um restaurante: um «relógio âmbar» em direto com contagem decrescente até ao pôr do sol, o menu completo com encomendas para levar, uma PWA de clube, um painel de cozinha e oito idiomas de interface, incluindo RTL.",
            "tags": [
              "Next.js",
              "PWA",
              "Multilingue"
            ]
          },
          "fr": {
            "sub": "Plateforme numérique du restaurant",
            "client": "âmbar, Cascais (Portugal)",
            "description": "Concept de plateforme numérique pour un restaurant\u00A0: une «\u00A0horloge âmbar\u00A0» en direct qui décompte jusqu’au coucher du soleil, la carte complète avec commande à emporter, une PWA de club, un tableau de bord cuisine et huit langues d’interface, RTL compris.",
            "tags": [
              "Next.js",
              "PWA",
              "Multilingue"
            ]
          },
          "de": {
            "sub": "Digitale Plattform des Restaurants",
            "client": "âmbar, Cascais (Portugal)",
            "description": "Konzept einer digitalen Plattform für ein Restaurant: eine lebende „âmbar-Uhr“, die bis zum Sonnenuntergang zählt, die vollständige Karte mit Bestellung zum Mitnehmen, eine Club-PWA, ein Küchen-Dashboard und acht Oberflächensprachen, RTL eingeschlossen.",
            "tags": [
              "Next.js",
              "PWA",
              "Mehrsprachigkeit"
            ]
          },
          "ar": {
            "sub": "منصة رقمية للمطعم",
            "client": "âmbar، كاشكايش (البرتغال)",
            "description": "تصوّر لمنصة رقمية لمطعم: «ساعة âmbar» حيّة تعدّ تنازليًا حتى الغروب، وقائمة طعام كاملة مع الطلب للخارج، وتطبيق PWA للأعضاء، ولوحة تحكّم للمطبخ، وثماني لغات للواجهة من بينها لغات تُكتب من اليمين إلى اليسار.",
            "tags": [
              "Next.js",
              "PWA",
              "تعدد اللغات"
            ]
          },
          "ja": {
            "sub": "レストランのデジタルプラットフォーム",
            "client": "âmbar、カスカイス（ポルトガル）",
            "description": "レストランのためのデジタルプラットフォームのコンセプト。日没までをカウントダウンする「âmbarの時計」、テイクアウト注文まで含む全メニュー、会員向けPWA、厨房用ダッシュボード、そしてRTLを含む8言語のインターフェース。",
            "tags": [
              "Next.js",
              "PWA",
              "多言語対応"
            ]
          },
          "tr": {
            "sub": "Restoranın dijital platformu",
            "client": "âmbar, Cascais (Portekiz)",
            "description": "Bir restoran için dijital platform konsepti: gün batımına geri sayan canlı “âmbar saati”, paket siparişi de kapsayan eksiksiz menü, kulüp PWA uygulaması, mutfak panosu ve RTL dahil sekiz arayüz dili.",
            "tags": [
              "Next.js",
              "PWA",
              "Çok dillilik"
            ]
          }
        },
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
        i18n: {
          "en": {
            "sub": "Website and members’ app",
            "client": "Cacau Rooftop, Cascais (Portugal)",
            "description": "A concept for a rooftop bar: website, a members’ programme with its own currency, an ordering tab with a chosen pickup time, a checkout ready to connect to Stripe and a separate kitchen screen.",
            "tags": [
              "Next.js",
              "PWA",
              "Online ordering"
            ]
          },
          "zh": {
            "sub": "网站与会员应用",
            "client": "Cacau Rooftop，卡斯凯什（葡萄牙）",
            "description": "屋顶酒吧的概念方案：网站、带内部货币的会员计划、可选自取时间的下单页、可直接接入 Stripe 的收银流程，以及独立的后厨屏幕。",
            "tags": [
              "Next.js",
              "PWA",
              "在线点单"
            ]
          },
          "es": {
            "sub": "Sitio web y app de club",
            "client": "Cacau Rooftop, Cascais (Portugal)",
            "description": "Concepto para un bar de azotea: sitio web, programa de club con moneda interna, pestaña de pedidos con hora de recogida a elegir, caja lista para conectar con Stripe y una pantalla propia para la cocina.",
            "tags": [
              "Next.js",
              "PWA",
              "Pedidos en línea"
            ]
          },
          "pt": {
            "sub": "Site e aplicação de clube",
            "client": "Cacau Rooftop, Cascais (Portugal)",
            "description": "Conceito para um bar de rooftop: site, programa de clube com moeda interna, separador de encomendas com hora de levantamento à escolha, checkout pronto a ligar ao Stripe e um ecrã próprio para a cozinha.",
            "tags": [
              "Next.js",
              "PWA",
              "Encomendas online"
            ]
          },
          "fr": {
            "sub": "Site et application de club",
            "client": "Cacau Rooftop, Cascais (Portugal)",
            "description": "Concept pour un bar en rooftop\u00A0: site, programme de club avec monnaie interne, onglet de commande avec choix de l’heure de retrait, caisse prête à être reliée à Stripe et écran cuisine dédié.",
            "tags": [
              "Next.js",
              "PWA",
              "Commande en ligne"
            ]
          },
          "de": {
            "sub": "Website und Club-App",
            "client": "Cacau Rooftop, Cascais (Portugal)",
            "description": "Konzept für eine Rooftop-Bar: Website, Clubprogramm mit eigener Währung, Bestellbereich mit wählbarer Abholzeit, eine für Stripe vorbereitete Kasse und ein eigener Küchenbildschirm.",
            "tags": [
              "Next.js",
              "PWA",
              "Onlinebestellung"
            ]
          },
          "ar": {
            "sub": "موقع وتطبيق للأعضاء",
            "client": "Cacau Rooftop، كاشكايش (البرتغال)",
            "description": "تصوّر لبار على السطح: موقع، وبرنامج أعضاء بعملة داخلية، وصفحة طلب مع اختيار موعد الاستلام، وصفحة دفع جاهزة للربط مع Stripe، وشاشة مستقلة للمطبخ.",
            "tags": [
              "Next.js",
              "PWA",
              "الطلب عبر الإنترنت"
            ]
          },
          "ja": {
            "sub": "サイトと会員アプリ",
            "client": "Cacau Rooftop、カスカイス（ポルトガル）",
            "description": "ルーフトップバーのコンセプト。サイト、独自通貨を用いた会員プログラム、受け取り時刻を選べる注文タブ、Stripeにつなげる状態の決済、そして厨房専用の画面までを設計しました。",
            "tags": [
              "Next.js",
              "PWA",
              "オンライン注文"
            ]
          },
          "tr": {
            "sub": "Site ve kulüp uygulaması",
            "client": "Cacau Rooftop, Cascais (Portekiz)",
            "description": "Çatı barı için konsept: site, kendi para birimi olan kulüp programı, teslim saati seçilebilen sipariş sekmesi, Stripe'a bağlanmaya hazır ödeme akışı ve ayrı bir mutfak ekranı.",
            "tags": [
              "Next.js",
              "PWA",
              "Çevrimiçi sipariş"
            ]
          }
        },
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
        i18n: {
          "en": {
            "sub": "Restaurant and bar — platform",
            "client": "Hífen Restaurant & Bar, Cascais (Portugal)",
            "description": "A platform concept for a restaurant: the full menu with allergen labelling, a members’ programme, pickup at an appointed time, a Stripe-ready checkout and a kitchen dashboard.",
            "tags": [
              "Next.js",
              "Allergens",
              "PWA"
            ]
          },
          "zh": {
            "sub": "餐厅与酒吧——平台",
            "client": "Hífen Restaurant & Bar，卡斯凯什（葡萄牙）",
            "description": "餐厅平台的概念方案：标注过敏原的完整菜单、会员计划、可预约时间的自取、适配 Stripe 的收银与后厨看板。",
            "tags": [
              "Next.js",
              "过敏原",
              "PWA"
            ]
          },
          "es": {
            "sub": "Restaurante y bar: plataforma",
            "client": "Hífen Restaurant & Bar, Cascais (Portugal)",
            "description": "Concepto de plataforma para un restaurante: carta completa con marcado de alérgenos, programa de club, recogida a la hora acordada, caja preparada para Stripe y panel de cocina.",
            "tags": [
              "Next.js",
              "Alérgenos",
              "PWA"
            ]
          },
          "pt": {
            "sub": "Restaurante e bar — plataforma",
            "client": "Hífen Restaurant & Bar, Cascais (Portugal)",
            "description": "Conceito de plataforma para um restaurante: menu completo com marcação de alergénios, programa de clube, levantamento à hora marcada, checkout preparado para Stripe e painel de cozinha.",
            "tags": [
              "Next.js",
              "Alergénios",
              "PWA"
            ]
          },
          "fr": {
            "sub": "Restaurant et bar — plateforme",
            "client": "Hífen Restaurant & Bar, Cascais (Portugal)",
            "description": "Concept de plateforme pour un restaurant\u00A0: carte complète avec signalement des allergènes, programme de club, retrait à l’heure convenue, caisse prête pour Stripe et tableau de bord cuisine.",
            "tags": [
              "Next.js",
              "Allergènes",
              "PWA"
            ]
          },
          "de": {
            "sub": "Restaurant und Bar — Plattform",
            "client": "Hífen Restaurant & Bar, Cascais (Portugal)",
            "description": "Plattformkonzept für ein Restaurant: vollständige Karte mit Allergenkennzeichnung, Clubprogramm, Abholung zur vereinbarten Zeit, Stripe-fähige Kasse und Küchen-Dashboard.",
            "tags": [
              "Next.js",
              "Allergene",
              "PWA"
            ]
          },
          "ar": {
            "sub": "مطعم وبار — منصة",
            "client": "Hífen Restaurant & Bar، كاشكايش (البرتغال)",
            "description": "تصوّر لمنصة مطعم: قائمة كاملة مع بيان مسبّبات الحساسية، وبرنامج أعضاء، واستلام في وقت محدّد، وصفحة دفع مهيّأة لـ Stripe، ولوحة تحكّم للمطبخ.",
            "tags": [
              "Next.js",
              "مسبّبات الحساسية",
              "PWA"
            ]
          },
          "ja": {
            "sub": "レストラン＆バー — プラットフォーム",
            "client": "Hífen Restaurant & Bar、カスカイス（ポルトガル）",
            "description": "レストランのためのプラットフォームのコンセプト。アレルゲン表示付きの全メニュー、会員プログラム、時間指定のテイクアウト、Stripe対応の決済、厨房用ダッシュボードを備えます。",
            "tags": [
              "Next.js",
              "アレルゲン",
              "PWA"
            ]
          },
          "tr": {
            "sub": "Restoran ve bar — platform",
            "client": "Hífen Restaurant & Bar, Cascais (Portekiz)",
            "description": "Bir restoran için platform konsepti: alerjen işaretli eksiksiz menü, kulüp programı, belirlenen saatte teslim alma, Stripe'a hazır ödeme ve mutfak panosu.",
            "tags": [
              "Next.js",
              "Alerjenler",
              "PWA"
            ]
          }
        },
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
        i18n: {
          "en": {
            "sub": "Café Bar — platform",
            "client": "LETO Café Bar, Cascais (Portugal)",
            "description": "A concept for a café bar: a menu with dish options, the “sóis” members’ programme, scheduled pickup, a payment-ready checkout and a working screen for the kitchen.",
            "tags": [
              "Next.js",
              "PWA",
              "Menu"
            ]
          },
          "zh": {
            "sub": "Café Bar——平台",
            "client": "LETO Café Bar，卡斯凯什（葡萄牙）",
            "description": "咖啡酒吧的概念方案：可选配的菜单、“sóis”会员计划、按时段自取、可直接收款的结账流程，以及后厨的作业屏幕。",
            "tags": [
              "Next.js",
              "PWA",
              "菜单"
            ]
          },
          "es": {
            "sub": "Café Bar: plataforma",
            "client": "LETO Café Bar, Cascais (Portugal)",
            "description": "Concepto para un café bar: carta con variantes de cada plato, programa de club «sóis», recogida programada, caja lista para cobrar y una pantalla de trabajo para la cocina.",
            "tags": [
              "Next.js",
              "PWA",
              "Carta"
            ]
          },
          "pt": {
            "sub": "Café Bar — plataforma",
            "client": "LETO Café Bar, Cascais (Portugal)",
            "description": "Conceito para um café bar: menu com variantes dos pratos, programa de clube «sóis», levantamento com horário, checkout pronto a cobrar e um ecrã de trabalho para a cozinha.",
            "tags": [
              "Next.js",
              "PWA",
              "Menu"
            ]
          },
          "fr": {
            "sub": "Café Bar — plateforme",
            "client": "LETO Café Bar, Cascais (Portugal)",
            "description": "Concept pour un café-bar\u00A0: carte avec variantes des plats, programme de club «\u00A0sóis\u00A0», retrait sur créneau, caisse prête à encaisser et écran de travail pour la cuisine.",
            "tags": [
              "Next.js",
              "PWA",
              "Carte"
            ]
          },
          "de": {
            "sub": "Café Bar — Plattform",
            "client": "LETO Café Bar, Cascais (Portugal)",
            "description": "Konzept für eine Café-Bar: Karte mit Gerichtsvarianten, Clubprogramm „sóis“, Abholung nach Zeitfenster, zahlungsbereite Kasse und ein Arbeitsbildschirm für die Küche.",
            "tags": [
              "Next.js",
              "PWA",
              "Speisekarte"
            ]
          },
          "ar": {
            "sub": "Café Bar — منصة",
            "client": "LETO Café Bar، كاشكايش (البرتغال)",
            "description": "تصوّر لمقهى وبار: قائمة بخيارات متعدّدة لكل طبق، وبرنامج أعضاء باسم «sóis»، واستلام وفق مواعيد محدّدة، وصفحة دفع جاهزة للتحصيل، وشاشة عمل للمطبخ.",
            "tags": [
              "Next.js",
              "PWA",
              "قائمة الطعام"
            ]
          },
          "ja": {
            "sub": "Café Bar — プラットフォーム",
            "client": "LETO Café Bar、カスカイス（ポルトガル）",
            "description": "カフェバーのコンセプト。オプションを選べるメニュー、会員プログラム「sóis」、時間指定の受け取り、決済まで通せるレジ、厨房用の作業画面を用意しました。",
            "tags": [
              "Next.js",
              "PWA",
              "メニュー"
            ]
          },
          "tr": {
            "sub": "Café Bar — platform",
            "client": "LETO Café Bar, Cascais (Portekiz)",
            "description": "Kafe bar için konsept: seçenekli menü, “sóis” kulüp programı, saatli teslim alma, tahsilata hazır ödeme akışı ve mutfak için çalışma ekranı.",
            "tags": [
              "Next.js",
              "PWA",
              "Menü"
            ]
          }
        },
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
        i18n: {
          "en": {
            "sub": "Restaurante & Bar — platform",
            "client": "Spi | Restaurante & Bar, Cascais Marina (Portugal)",
            "description": "A concept for a restaurant in the marina: a site with the menu and the terrace as its lead character, online ordering, club mechanics and social media assets. Every unverified detail in the package is flagged separately — the concept is ready to be checked against the owner’s facts.",
            "tags": [
              "Next.js",
              "Online ordering",
              "SMM"
            ]
          },
          "zh": {
            "sub": "Restaurante & Bar——平台",
            "client": "Spi | Restaurante & Bar，卡斯凯什码头（葡萄牙）",
            "description": "码头餐厅的概念方案：以菜单与露台为主角的网站、在线点单、会员机制以及社交媒体素材。方案中所有未经核实的信息均单独标出，随时可与业主逐条核对。",
            "tags": [
              "Next.js",
              "在线点单",
              "SMM"
            ]
          },
          "es": {
            "sub": "Restaurante & Bar: plataforma",
            "client": "Spi | Restaurante & Bar, Marina de Cascais (Portugal)",
            "description": "Concepto para un restaurante en la marina: sitio con la carta y la terraza como protagonista, pedidos en línea, mecánica de club y material para redes sociales. Todos los datos sin verificar del paquete están señalados aparte: el concepto está listo para contrastarse con el propietario.",
            "tags": [
              "Next.js",
              "Pedidos en línea",
              "SMM"
            ]
          },
          "pt": {
            "sub": "Restaurante & Bar — plataforma",
            "client": "Spi | Restaurante & Bar, Marina de Cascais (Portugal)",
            "description": "Conceito para um restaurante na marina: site com o menu e a esplanada como protagonista, encomendas online, mecânica de clube e materiais para redes sociais. Todos os dados por confirmar estão assinalados à parte — o conceito está pronto para ser verificado com o proprietário.",
            "tags": [
              "Next.js",
              "Encomendas online",
              "SMM"
            ]
          },
          "fr": {
            "sub": "Restaurante & Bar — plateforme",
            "client": "Spi | Restaurante & Bar, marina de Cascais (Portugal)",
            "description": "Concept pour un restaurant de la marina\u00A0: site avec la carte et la terrasse en rôle principal, commande en ligne, mécanique de club et contenus pour les réseaux sociaux. Toutes les données non vérifiées du dossier sont signalées à part\u00A0: le concept est prêt à être confronté au propriétaire.",
            "tags": [
              "Next.js",
              "Commande en ligne",
              "SMM"
            ]
          },
          "de": {
            "sub": "Restaurante & Bar — Plattform",
            "client": "Spi | Restaurante & Bar, Marina von Cascais (Portugal)",
            "description": "Konzept für ein Restaurant in der Marina: Website mit der Karte und der Terrasse als Hauptfigur, Onlinebestellung, Clubmechanik und Material für die sozialen Netzwerke. Alle ungeprüften Angaben im Paket sind eigens markiert — das Konzept ist bereit für den Abgleich mit dem Inhaber.",
            "tags": [
              "Next.js",
              "Onlinebestellung",
              "SMM"
            ]
          },
          "ar": {
            "sub": "Restaurante & Bar — منصة",
            "client": "Spi | Restaurante & Bar، مرسى كاشكايش (البرتغال)",
            "description": "تصوّر لمطعم في المرسى: موقع تتصدّره قائمة الطعام والتراس، وطلب عبر الإنترنت، وآلية أعضاء، ومواد لشبكات التواصل. كل معلومة غير مؤكَّدة في الحزمة موسومة على حدة، والتصوّر جاهز للمراجعة مع المالك.",
            "tags": [
              "Next.js",
              "الطلب عبر الإنترنت",
              "SMM"
            ]
          },
          "ja": {
            "sub": "Restaurante & Bar — プラットフォーム",
            "client": "Spi | Restaurante & Bar、カスカイス・マリーナ（ポルトガル）",
            "description": "マリーナのレストランのコンセプト。メニューとテラスを主役に据えたサイト、オンライン注文、会員の仕組み、SNS用の素材で構成しています。未確認の情報はすべて個別に印を付けてあり、オーナーとの突き合わせにそのまま使えます。",
            "tags": [
              "Next.js",
              "オンライン注文",
              "SMM"
            ]
          },
          "tr": {
            "sub": "Restaurante & Bar — platform",
            "client": "Spi | Restaurante & Bar, Cascais Marina (Portekiz)",
            "description": "Marinadaki bir restoran için konsept: menüyü ve terası başrole alan site, çevrimiçi sipariş, kulüp mekaniği ve sosyal medya materyalleri. Pakette doğrulanmamış tüm veriler ayrıca işaretlendi; konsept, sahibiyle karşılaştırılmaya hazır.",
            "tags": [
              "Next.js",
              "Çevrimiçi sipariş",
              "SMM"
            ]
          }
        },
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
        i18n: {
          "en": {
            "sub": "Restaurant Bar — platform",
            "client": "YAM, Cascais (Portugal)",
            "description": "A concept for a restaurant’s digital platform: the menu taken from the official PDF, online ordering, a members’ programme and the site tied to social media in one visual language.",
            "tags": [
              "Next.js",
              "Menu",
              "PWA"
            ]
          },
          "zh": {
            "sub": "Restaurant Bar——平台",
            "client": "YAM，卡斯凯什（葡萄牙）",
            "description": "餐厅数字平台的概念方案：菜单取自官方 PDF、在线点单、会员计划，并以统一的视觉语言把网站与社交媒体串联起来。",
            "tags": [
              "Next.js",
              "菜单",
              "PWA"
            ]
          },
          "es": {
            "sub": "Restaurant Bar: plataforma",
            "client": "YAM, Cascais (Portugal)",
            "description": "Concepto de plataforma digital para un restaurante: carta tomada del PDF oficial, pedidos en línea, programa de club y el sitio enlazado con las redes sociales en un mismo lenguaje visual.",
            "tags": [
              "Next.js",
              "Carta",
              "PWA"
            ]
          },
          "pt": {
            "sub": "Restaurant Bar — plataforma",
            "client": "YAM, Cascais (Portugal)",
            "description": "Conceito de plataforma digital para um restaurante: menu retirado do PDF oficial, encomendas online, programa de clube e o site ligado às redes sociais numa só linguagem visual.",
            "tags": [
              "Next.js",
              "Menu",
              "PWA"
            ]
          },
          "fr": {
            "sub": "Restaurant Bar — plateforme",
            "client": "YAM, Cascais (Portugal)",
            "description": "Concept de plateforme numérique pour un restaurant\u00A0: carte reprise du PDF officiel, commande en ligne, programme de club et site relié aux réseaux sociaux dans un même langage visuel.",
            "tags": [
              "Next.js",
              "Carte",
              "PWA"
            ]
          },
          "de": {
            "sub": "Restaurant Bar — Plattform",
            "client": "YAM, Cascais (Portugal)",
            "description": "Konzept einer digitalen Plattform für ein Restaurant: Karte aus dem offiziellen PDF, Onlinebestellung, Clubprogramm und die Website in einer Bildsprache mit den sozialen Netzwerken verbunden.",
            "tags": [
              "Next.js",
              "Speisekarte",
              "PWA"
            ]
          },
          "ar": {
            "sub": "Restaurant Bar — منصة",
            "client": "YAM، كاشكايش (البرتغال)",
            "description": "تصوّر لمنصة رقمية لمطعم: قائمة طعام مأخوذة من ملف PDF الرسمي، وطلب عبر الإنترنت، وبرنامج أعضاء، وربط الموقع بشبكات التواصل بلغة بصرية واحدة.",
            "tags": [
              "Next.js",
              "قائمة الطعام",
              "PWA"
            ]
          },
          "ja": {
            "sub": "Restaurant Bar — プラットフォーム",
            "client": "YAM、カスカイス（ポルトガル）",
            "description": "レストランのデジタルプラットフォームのコンセプト。公式PDFから起こしたメニュー、オンライン注文、会員プログラム、そしてサイトとSNSを一つのビジュアル言語でつなぎます。",
            "tags": [
              "Next.js",
              "メニュー",
              "PWA"
            ]
          },
          "tr": {
            "sub": "Restaurant Bar — platform",
            "client": "YAM, Cascais (Portekiz)",
            "description": "Bir restoran için dijital platform konsepti: resmî PDF'ten alınan menü, çevrimiçi sipariş, kulüp programı ve siteyi sosyal medyayla tek bir görsel dilde birleştiren yapı.",
            "tags": [
              "Next.js",
              "Menü",
              "PWA"
            ]
          }
        },
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
        i18n: {
          "en": {
            "sub": "Brewery taproom — concept package",
            "client": "The Crafty Cellar / Pato Brewing, Cascais (Portugal)",
            "description": "A concept for the taproom of the only brewery in Cascais: a site with the rotating tap list, cards for every beer, karaoke nights and event posters. The brewery holds a 4.6★ rating and thousands of check-ins on Untappd — the digital storefront is pulled up to that level.",
            "tags": [
              "Next.js",
              "Craft beer",
              "Posters"
            ]
          },
          "zh": {
            "sub": "精酿酒吧——概念方案包",
            "client": "The Crafty Cellar / Pato Brewing，卡斯凯什（葡萄牙）",
            "description": "为卡斯凯什唯一一家啤酒厂的自营酒吧准备的概念方案：随酒头轮换更新的网站、各款酒的介绍卡、卡拉 OK 之夜与活动海报。这家啤酒厂在 Untappd 上获得 4.6★ 评分与数千次打卡，数字门面也要匹配这一水准。",
            "tags": [
              "Next.js",
              "精酿",
              "海报"
            ]
          },
          "es": {
            "sub": "Bar de la cervecera: paquete conceptual",
            "client": "The Crafty Cellar / Pato Brewing, Cascais (Portugal)",
            "description": "Concepto para el bar propio de la única cervecera de Cascais: sitio con la rotación de grifos, fichas de cada variedad, noches de karaoke y carteles. La cervecera tiene una valoración de 4.6★ y miles de registros en Untappd; el escaparate digital se pone a esa altura.",
            "tags": [
              "Next.js",
              "Cerveza artesanal",
              "Carteles"
            ]
          },
          "pt": {
            "sub": "Bar da cervejeira — pacote de conceito",
            "client": "The Crafty Cellar / Pato Brewing, Cascais (Portugal)",
            "description": "Conceito para o bar da única cervejeira de Cascais: site com a rotação das torneiras, fichas de cada variedade, noites de karaoke e cartazes. A cervejeira tem 4.6★ e milhares de registos no Untappd — a montra digital sobe ao mesmo nível.",
            "tags": [
              "Next.js",
              "Cerveja artesanal",
              "Cartazes"
            ]
          },
          "fr": {
            "sub": "Bar de la brasserie — dossier concept",
            "client": "The Crafty Cellar / Pato Brewing, Cascais (Portugal)",
            "description": "Concept pour le bar de l’unique brasserie de Cascais\u00A0: site avec la rotation des tireuses, fiches par bière, soirées karaoké et affiches. La brasserie affiche 4.6★ et des milliers de check-ins sur Untappd\u00A0: la vitrine numérique se hisse à ce niveau.",
            "tags": [
              "Next.js",
              "Bière artisanale",
              "Affiches"
            ]
          },
          "de": {
            "sub": "Brauerei-Bar — Konzeptpaket",
            "client": "The Crafty Cellar / Pato Brewing, Cascais (Portugal)",
            "description": "Konzept für die Hausbar der einzigen Brauerei in Cascais: Website mit rotierender Zapfhahnliste, Karten zu jeder Sorte, Karaokeabende und Plakate. Die Brauerei hat 4.6★ und Tausende Check-ins auf Untappd — die digitale Auslage zieht auf dieses Niveau nach.",
            "tags": [
              "Next.js",
              "Craft-Bier",
              "Plakate"
            ]
          },
          "ar": {
            "sub": "بار مصنع الجعة — حزمة تصوّر",
            "client": "The Crafty Cellar / Pato Brewing، كاشكايش (البرتغال)",
            "description": "تصوّر لبار مصنع الجعة الوحيد في كاشكايش: موقع يعرض تبدّل الصنابير، وبطاقات لكل صنف، وأمسيات كاريوكي، وملصقات. المصنع يحمل تقييم 4.6★ وآلاف التسجيلات على Untappd، والواجهة الرقمية ترتقي إلى المستوى نفسه.",
            "tags": [
              "Next.js",
              "جعة حرفية",
              "ملصقات"
            ]
          },
          "ja": {
            "sub": "ブルワリーのバー — コンセプトパッケージ",
            "client": "The Crafty Cellar / Pato Brewing、カスカイス（ポルトガル）",
            "description": "カスカイス唯一のブルワリーが営むバーのためのコンセプト。入れ替わるタップを反映するサイト、銘柄ごとのカード、カラオケナイト、告知ポスターまでを含みます。Untappdでの評価は4.6★、チェックインは数千件。デジタルの顔もその水準に引き上げました。",
            "tags": [
              "Next.js",
              "クラフトビール",
              "ポスター"
            ]
          },
          "tr": {
            "sub": "Bira fabrikasının barı — konsept paketi",
            "client": "The Crafty Cellar / Pato Brewing, Cascais (Portekiz)",
            "description": "Cascais'in tek bira üreticisinin kendi barı için konsept: değişen musluk listesini gösteren site, her tür için kartlar, karaoke geceleri ve afişler. Üreticinin Untappd'de 4.6★ puanı ve binlerce kaydı var; dijital vitrin de bu seviyeye çekiliyor.",
            "tags": [
              "Next.js",
              "Zanaat birası",
              "Afişler"
            ]
          }
        },
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
        i18n: {
          "en": {
            "sub": "Digital storefront for a watch shop",
            "client": "Assis&Sons, Cascais Marina (Portugal)",
            "description": "A concept for the digital storefront of a shop selling contemporary and vintage watches: a collection carrying the real specifications and condition of every piece, large-format photography and a route to the deal through conversation rather than a cart.",
            "tags": [
              "Catalogue",
              "Luxury",
              "PWA"
            ]
          },
          "zh": {
            "sub": "钟表店的数字橱窗",
            "client": "Assis&Sons，卡斯凯什码头（葡萄牙）",
            "description": "经营当代与古董腕表的店铺数字橱窗概念：每一枚都标注真实参数与成色的藏品列表、大幅摄影，以及以对话而非购物车促成交易的路径。",
            "tags": [
              "目录",
              "Luxury",
              "PWA"
            ]
          },
          "es": {
            "sub": "Escaparate digital de una relojería",
            "client": "Assis&Sons, Marina de Cascais (Portugal)",
            "description": "Concepto de escaparate digital para una tienda de relojes contemporáneos y vintage: colección con las características reales y el estado de cada pieza, fotografía a gran formato y un camino hacia la venta a través del diálogo y no del carrito.",
            "tags": [
              "Catálogo",
              "Luxury",
              "PWA"
            ]
          },
          "pt": {
            "sub": "Montra digital de uma relojoaria",
            "client": "Assis&Sons, Marina de Cascais (Portugal)",
            "description": "Conceito de montra digital para uma loja de relógios contemporâneos e vintage: coleção com as características reais e o estado de cada peça, fotografia em grande formato e um caminho para o negócio através da conversa e não do carrinho.",
            "tags": [
              "Catálogo",
              "Luxury",
              "PWA"
            ]
          },
          "fr": {
            "sub": "Vitrine numérique d’une horlogerie",
            "client": "Assis&Sons, marina de Cascais (Portugal)",
            "description": "Concept de vitrine numérique pour une boutique de montres contemporaines et vintage\u00A0: collection avec les caractéristiques réelles et l’état de chaque pièce, photographie en grand format et un chemin vers la vente par la conversation plutôt que par le panier.",
            "tags": [
              "Catalogue",
              "Luxury",
              "PWA"
            ]
          },
          "de": {
            "sub": "Digitale Auslage eines Uhrengeschäfts",
            "client": "Assis&Sons, Marina von Cascais (Portugal)",
            "description": "Konzept für die digitale Auslage eines Geschäfts für zeitgenössische und Vintage-Uhren: eine Kollektion mit den echten Daten und dem Zustand jedes Stücks, großformatige Aufnahmen und ein Weg zum Abschluss über das Gespräch statt über den Warenkorb.",
            "tags": [
              "Katalog",
              "Luxury",
              "PWA"
            ]
          },
          "ar": {
            "sub": "واجهة رقمية لمتجر ساعات",
            "client": "Assis&Sons، مرسى كاشكايش (البرتغال)",
            "description": "تصوّر لواجهة رقمية لمتجر ساعات معاصرة وكلاسيكية: مجموعة تعرض المواصفات الحقيقية وحالة كل قطعة، وتصوير بمقاسات كبيرة، ومسار إلى الصفقة عبر الحوار لا عبر سلة الشراء.",
            "tags": [
              "كتالوج",
              "Luxury",
              "PWA"
            ]
          },
          "ja": {
            "sub": "時計店のデジタルショーウィンドウ",
            "client": "Assis&Sons、カスカイス・マリーナ（ポルトガル）",
            "description": "現行モデルとヴィンテージを扱う時計店のためのデジタルショーウィンドウのコンセプト。個体ごとの実際のスペックとコンディションを載せたコレクション、大きく見せる撮影、そしてカートではなく対話で成約へ向かう導線を設計しました。",
            "tags": [
              "カタログ",
              "Luxury",
              "PWA"
            ]
          },
          "tr": {
            "sub": "Saat mağazasının dijital vitrini",
            "client": "Assis&Sons, Cascais Marina (Portekiz)",
            "description": "Güncel ve vintage saatler satan bir mağazanın dijital vitrini için konsept: her parçanın gerçek teknik özelliklerini ve durumunu gösteren koleksiyon, büyük ölçekli çekimler ve sepet yerine sohbet üzerinden ilerleyen satın alma yolu.",
            "tags": [
              "Katalog",
              "Luxury",
              "PWA"
            ]
          }
        },
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
        i18n: {
          "en": {
            "sub": "3D visualisation of a landscaping scheme",
            "client": "Park landscaping concept",
            "description": "A photorealistic 3D visualisation of a fountain for a park landscaping concept: water, light and materials worked out in detail, and the object held in harmony with the landscape from every angle.",
            "tags": [
              "Exterior",
              "Landscape",
              "Photorealism"
            ]
          },
          "zh": {
            "sub": "景观改造的 3D 可视化",
            "client": "公园景观改造方案",
            "description": "为公园景观改造方案制作的喷泉写实 3D 可视化：细致刻画水体、光线与材质，并在多个视角上保持构筑物与景观的协调。",
            "tags": [
              "外观",
              "景观",
              "写实渲染"
            ]
          },
          "es": {
            "sub": "Visualización 3D de un proyecto paisajístico",
            "client": "Concepto de acondicionamiento de un parque",
            "description": "Visualización 3D fotorrealista de una fuente para el concepto de acondicionamiento de un parque: agua, luz y materiales trabajados al detalle, y la pieza en armonía con el paisaje desde distintos ángulos.",
            "tags": [
              "Exterior",
              "Paisajismo",
              "Fotorrealismo"
            ]
          },
          "pt": {
            "sub": "Visualização 3D de uma requalificação",
            "client": "Conceito de requalificação de um parque",
            "description": "Visualização 3D fotorrealista de uma fonte para o conceito de requalificação de um parque: água, luz e materiais trabalhados ao detalhe, e o objeto em harmonia com a paisagem a partir de vários ângulos.",
            "tags": [
              "Exterior",
              "Paisagem",
              "Fotorrealismo"
            ]
          },
          "fr": {
            "sub": "Visualisation 3D d’un aménagement",
            "client": "Concept d’aménagement d’un parc",
            "description": "Visualisation 3D photoréaliste d’une fontaine pour un concept d’aménagement de parc\u00A0: eau, lumière et matériaux travaillés dans le détail, et l’ouvrage en harmonie avec le paysage sous différents angles.",
            "tags": [
              "Extérieur",
              "Paysage",
              "Photoréalisme"
            ]
          },
          "de": {
            "sub": "3D-Visualisierung einer Parkgestaltung",
            "client": "Konzept zur Gestaltung eines Parks",
            "description": "Fotorealistische 3D-Visualisierung eines Brunnens für ein Konzept zur Parkgestaltung: Wasser, Licht und Materialien im Detail ausgearbeitet, das Objekt aus verschiedenen Blickwinkeln im Einklang mit der Landschaft.",
            "tags": [
              "Außenraum",
              "Landschaft",
              "Fotorealismus"
            ]
          },
          "ar": {
            "sub": "تصوّر ثلاثي الأبعاد لتهيئة الحديقة",
            "client": "تصوّر لتهيئة حديقة عامة",
            "description": "تصوّر ثلاثي الأبعاد واقعي لنافورة ضمن مشروع تهيئة حديقة عامة: معالجة دقيقة للماء والضوء والخامات، وانسجام المنشأة مع المحيط من زوايا مختلفة.",
            "tags": [
              "الفضاء الخارجي",
              "تنسيق المواقع",
              "واقعية فوتوغرافية"
            ]
          },
          "ja": {
            "sub": "環境整備の3Dビジュアライゼーション",
            "client": "公園整備のコンセプト",
            "description": "公園整備のコンセプトのために制作した噴水のフォトリアルな3Dビジュアライゼーション。水、光、素材を細部まで作り込み、複数のアングルで景観との調和を確かめています。",
            "tags": [
              "エクステリア",
              "ランドスケープ",
              "フォトリアル"
            ]
          },
          "tr": {
            "sub": "Peyzaj düzenlemesinin 3D görselleştirmesi",
            "client": "Park düzenleme konsepti",
            "description": "Bir park düzenleme konsepti için hazırlanan fotogerçekçi 3D fıskiye görselleştirmesi: su, ışık ve malzemeler ayrıntısıyla çalışıldı, yapı farklı açılardan peyzajla uyum içinde tutuldu.",
            "tags": [
              "Dış mekân",
              "Peyzaj",
              "Fotogerçekçilik"
            ]
          }
        },
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
        i18n: {
          "en": {
            "sub": "3D renders for social media",
            "client": "Skincare store",
            "description": "A series of stylised 3D scenes for a skincare store’s social media: minimalism, soft tones and the accent on texture, light and packaging — the premium character of the brand in every frame.",
            "tags": [
              "Product 3D",
              "Interior",
              "SMM"
            ]
          },
          "zh": {
            "sub": "社交媒体 3D 渲染",
            "client": "护肤品商店",
            "description": "为护肤品商店的社交媒体制作的一组风格化 3D 场景：极简构图、柔和色调，着重呈现质感、光线与包装——每一帧都传递品牌的高端感。",
            "tags": [
              "Product 3D",
              "室内",
              "SMM"
            ]
          },
          "es": {
            "sub": "Renders 3D para redes sociales",
            "client": "Tienda de cosmética de cuidado",
            "description": "Serie de escenas 3D estilizadas para las redes sociales de una tienda de cosmética de cuidado: minimalismo, tonos suaves y el acento en las texturas, la luz y el envase — el carácter premium de la marca en cada plano.",
            "tags": [
              "Product 3D",
              "Interior",
              "SMM"
            ]
          },
          "pt": {
            "sub": "Renders 3D para redes sociais",
            "client": "Loja de cosmética de cuidado",
            "description": "Série de cenas 3D estilizadas para as redes sociais de uma loja de cosmética de cuidado: minimalismo, tons suaves e o acento nas texturas, na luz e na embalagem — o carácter premium da marca em cada plano.",
            "tags": [
              "Product 3D",
              "Interior",
              "SMM"
            ]
          },
          "fr": {
            "sub": "Rendus 3D pour les réseaux sociaux",
            "client": "Boutique de cosmétiques de soin",
            "description": "Série de scènes 3D stylisées pour les réseaux sociaux d’une boutique de cosmétiques de soin\u00A0: minimalisme, teintes douces et accent sur les matières, la lumière et le packaging — le caractère premium de la marque dans chaque image.",
            "tags": [
              "Product 3D",
              "Intérieur",
              "SMM"
            ]
          },
          "de": {
            "sub": "3D-Renderings für Social Media",
            "client": "Geschäft für Pflegekosmetik",
            "description": "Eine Serie stilisierter 3D-Szenen für die sozialen Kanäle eines Geschäfts für Pflegekosmetik: Minimalismus, weiche Töne und der Akzent auf Texturen, Licht und Verpackung — der Premiumcharakter der Marke in jedem Bild.",
            "tags": [
              "Product 3D",
              "Interieur",
              "SMM"
            ]
          },
          "ar": {
            "sub": "مشاهد ثلاثية الأبعاد لشبكات التواصل",
            "client": "متجر لمستحضرات العناية",
            "description": "سلسلة مشاهد ثلاثية الأبعاد بأسلوب مصمَّم لحسابات متجر مستحضرات العناية: بساطة في التكوين، ودرجات لونية هادئة، وتركيز على الملمس والضوء والعبوة — حضور راقٍ للعلامة في كل لقطة.",
            "tags": [
              "Product 3D",
              "الفضاء الداخلي",
              "SMM"
            ]
          },
          "ja": {
            "sub": "SNS向け3Dレンダー",
            "client": "スキンケア用品店",
            "description": "スキンケア用品店のSNSのために制作したスタイライズド3Dシーンのシリーズ。ミニマルな構成と柔らかな色調で、質感、光、パッケージを主役に据え、ブランドの上質さを一枚ごとに伝えます。",
            "tags": [
              "Product 3D",
              "インテリア",
              "SMM"
            ]
          },
          "tr": {
            "sub": "Sosyal medya için 3D render’lar",
            "client": "Bakım kozmetiği mağazası",
            "description": "Bir bakım kozmetiği mağazasının sosyal medyası için hazırlanan stilize 3D sahne serisi: minimalizm, yumuşak tonlar ve dokuya, ışığa, ambalaja verilen vurgu — markanın premium karakteri her karede.",
            "tags": [
              "Product 3D",
              "İç mekân",
              "SMM"
            ]
          }
        },
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
        i18n: {
          "en": {
            "sub": "Social media visuals for the summer season",
            "client": "DeloSport sports complex, Moscow",
            "description": "A series of posts in one brand style for a sports complex: a mascot guide, the summer works schedule and the start of the new season — a feed that informs and looks good.",
            "tags": [
              "SMM",
              "Mascot",
              "Illustration"
            ]
          },
          "zh": {
            "sub": "夏季社媒视觉",
            "client": "DeloSport 体育中心，莫斯科",
            "description": "为体育中心制作的统一风格系列贴文：吉祥物助手、夏季施工计划与新赛季启动——既有信息量又耐看的内容流。",
            "tags": [
              "SMM",
              "吉祥物",
              "插画"
            ]
          },
          "es": {
            "sub": "Visuales de redes para la temporada de verano",
            "client": "Complejo deportivo DeloSport, Moscú",
            "description": "Serie de publicaciones con un mismo estilo de marca para un complejo deportivo: una mascota que acompaña, el plan de obras del verano y el arranque de la nueva temporada — un feed informativo y cuidado.",
            "tags": [
              "SMM",
              "Mascota",
              "Ilustración"
            ]
          },
          "pt": {
            "sub": "Visuais de redes para a época de verão",
            "client": "Complexo desportivo DeloSport, Moscovo",
            "description": "Série de publicações num mesmo estilo de marca para um complexo desportivo: uma mascote que guia, o plano de obras do verão e o arranque da nova época — um feed informativo e cuidado.",
            "tags": [
              "SMM",
              "Mascote",
              "Ilustração"
            ]
          },
          "fr": {
            "sub": "Visuels réseaux pour la saison d’été",
            "client": "Complexe sportif DeloSport, Moscou",
            "description": "Série de publications dans une même identité pour un complexe sportif\u00A0: une mascotte qui guide, le calendrier des travaux d’été et le lancement de la nouvelle saison — un fil à la fois informatif et soigné.",
            "tags": [
              "SMM",
              "Mascotte",
              "Illustration"
            ]
          },
          "de": {
            "sub": "Social-Media-Motive für die Sommersaison",
            "client": "Sportkomplex DeloSport, Moskau",
            "description": "Eine Serie von Posts in einem einheitlichen Erscheinungsbild für einen Sportkomplex: ein Maskottchen als Begleiter, der Arbeitsplan für den Sommer und der Start der neuen Saison — ein Feed, der informiert und gut aussieht.",
            "tags": [
              "SMM",
              "Maskottchen",
              "Illustration"
            ]
          },
          "ar": {
            "sub": "تصاميم التواصل لموسم الصيف",
            "client": "مجمّع DeloSport الرياضي، موسكو",
            "description": "سلسلة منشورات بأسلوب بصري واحد لمجمّع رياضي: شخصية مرافقة، وخطة أعمال الصيف، وانطلاق الموسم الجديد — محتوى غنيّ بالمعلومات وأنيق في الوقت نفسه.",
            "tags": [
              "SMM",
              "شخصية العلامة",
              "رسم توضيحي"
            ]
          },
          "ja": {
            "sub": "夏シーズンのSNSビジュアル",
            "client": "スポーツ複合施設 DeloSport、モスクワ",
            "description": "スポーツ複合施設のために統一したトーンで制作した投稿シリーズ。案内役のマスコット、夏の工事予定、新シーズンの開幕を扱い、情報量と見た目を両立したフィードに仕上げました。",
            "tags": [
              "SMM",
              "マスコット",
              "イラストレーション"
            ]
          },
          "tr": {
            "sub": "Yaz sezonu için sosyal medya görselleri",
            "client": "DeloSport spor kompleksi, Moskova",
            "description": "Bir spor kompleksi için tek bir marka diliyle hazırlanan gönderi serisi: yol gösteren bir maskot, yaz dönemi çalışma planı ve yeni sezonun açılışı — hem bilgilendiren hem de bakımlı bir akış.",
            "tags": [
              "SMM",
              "Maskot",
              "İllüstrasyon"
            ]
          }
        },
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
        i18n: {
          "en": {
            "sub": "Visual system for a matcha bar",
            "client": "Matchatata, Cascais (Portugal)",
            "description": "A concept visual system for a matcha bar: a palette of matcha green, deep turquoise and warm cream, the campaign poster NOT CEREMONIAL — INTENTIONAL, post templates and a menu. Every token is marked as a proposal — the system is ready to give way to the owner’s brand book.",
            "tags": [
              "Brand book",
              "SMM",
              "Poster"
            ]
          },
          "zh": {
            "sub": "抹茶吧的视觉系统",
            "client": "Matchatata，卡斯凯什（葡萄牙）",
            "description": "抹茶吧视觉系统的概念方案：以抹茶绿、深松石绿与暖奶油色构成的色板，主题海报 NOT CEREMONIAL — INTENTIONAL，帖文模板与菜单。每一个设计变量都标注为建议——系统随时可以让位于业主的品牌手册。",
            "tags": [
              "品牌手册",
              "SMM",
              "海报"
            ]
          },
          "es": {
            "sub": "Sistema visual de un bar de matcha",
            "client": "Matchatata, Cascais (Portugal)",
            "description": "Concepto de sistema visual para un bar de matcha: paleta de verde matcha, turquesa profundo y crema cálido, el cartel de campaña NOT CEREMONIAL — INTENTIONAL, plantillas de publicaciones y carta. Cada token está marcado como propuesta: el sistema está listo para ceder ante el manual de marca del propietario.",
            "tags": [
              "Manual de marca",
              "SMM",
              "Cartel"
            ]
          },
          "pt": {
            "sub": "Sistema visual de um bar de matcha",
            "client": "Matchatata, Cascais (Portugal)",
            "description": "Conceito de sistema visual para um bar de matcha: paleta de verde matcha, turquesa profundo e creme quente, o cartaz de campanha NOT CEREMONIAL — INTENTIONAL, modelos de publicações e menu. Cada token está assinalado como proposta — o sistema está pronto a ceder ao manual de marca do proprietário.",
            "tags": [
              "Manual de marca",
              "SMM",
              "Cartaz"
            ]
          },
          "fr": {
            "sub": "Système visuel d’un bar à matcha",
            "client": "Matchatata, Cascais (Portugal)",
            "description": "Concept de système visuel pour un bar à matcha\u00A0: palette de vert matcha, turquoise profond et crème chaud, affiche de campagne NOT CEREMONIAL — INTENTIONAL, gabarits de publications et carte. Chaque token est signalé comme une proposition\u00A0: le système est prêt à céder devant la charte du propriétaire.",
            "tags": [
              "Charte de marque",
              "SMM",
              "Affiche"
            ]
          },
          "de": {
            "sub": "Visuelles System einer Matcha-Bar",
            "client": "Matchatata, Cascais (Portugal)",
            "description": "Konzept eines visuellen Systems für eine Matcha-Bar: eine Palette aus Matchagrün, tiefem Türkis und warmem Creme, das Kampagnenplakat NOT CEREMONIAL — INTENTIONAL, Vorlagen für Posts und eine Karte. Jeder Token ist als Vorschlag gekennzeichnet — das System ist bereit, dem Brandbook des Inhabers zu weichen.",
            "tags": [
              "Brandbook",
              "SMM",
              "Plakat"
            ]
          },
          "ar": {
            "sub": "نظام بصري لبار الماتشا",
            "client": "Matchatata، كاشكايش (البرتغال)",
            "description": "تصوّر لنظام بصري لبار ماتشا: لوحة من أخضر الماتشا والفيروزي العميق والكريمي الدافئ، وملصق الحملة NOT CEREMONIAL — INTENTIONAL، وقوالب للمنشورات وقائمة الطعام. كل عنصر في النظام موسوم بوصفه اقتراحًا، والنظام مستعد للتراجع أمام دليل العلامة الخاص بالمالك.",
            "tags": [
              "دليل العلامة",
              "SMM",
              "ملصق"
            ]
          },
          "ja": {
            "sub": "抹茶バーのビジュアルシステム",
            "client": "Matchatata、カスカイス（ポルトガル）",
            "description": "抹茶バーのためのビジュアルシステムのコンセプト。抹茶のグリーン、深いターコイズ、温かみのあるクリームによるパレット、キャンペーンポスター NOT CEREMONIAL — INTENTIONAL、投稿テンプレート、メニューで構成。すべてのトークンは提案として明示しており、オーナーのブランドブックがあればいつでも譲ります。",
            "tags": [
              "ブランドブック",
              "SMM",
              "ポスター"
            ]
          },
          "tr": {
            "sub": "Matcha barının görsel sistemi",
            "client": "Matchatata, Cascais (Portekiz)",
            "description": "Bir matcha barı için görsel sistem konsepti: matcha yeşili, derin turkuaz ve sıcak krem tonlarından palet, NOT CEREMONIAL — INTENTIONAL kampanya afişi, gönderi şablonları ve menü. Her token bir öneri olarak işaretlendi; sistem, sahibinin marka kitabına yer açmaya hazır.",
            "tags": [
              "Marka kitabı",
              "SMM",
              "Afiş"
            ]
          }
        },
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
        i18n: {
          "en": {
            "sub": "Art direction for a cigar lounge",
            "client": "Smoke by D-Cigars, Cascais Marina (Portugal)",
            "description": "A concept package for the only cigar lounge in Cascais: a black-and-gold digital home pitched in the register of the venue’s printed menu, an age gate, the full menu, club mechanics that accrue on the bar and cafeteria only, a presentation of the humidor and a plan to relaunch social media from zero.",
            "tags": [
              "Art direction",
              "Luxury",
              "Brand book"
            ]
          },
          "zh": {
            "sub": "雪茄吧的艺术指导",
            "client": "Smoke by D-Cigars，卡斯凯什码头（葡萄牙）",
            "description": "为卡斯凯什唯一一家雪茄吧准备的概念方案包：延续店内印刷菜单气质的黑金数字空间、年龄验证、完整酒水单、仅按吧台与咖啡区消费累积的会员机制、雪茄柜的展示，以及从零重启社交媒体的方案。",
            "tags": [
              "艺术指导",
              "Luxury",
              "品牌手册"
            ]
          },
          "es": {
            "sub": "Dirección de arte de un salón de puros",
            "client": "Smoke by D-Cigars, Marina de Cascais (Portugal)",
            "description": "Paquete conceptual para el único salón de puros de Cascais: una casa digital en negro y oro en el registro de la carta impresa del local, verificación de edad, carta completa, mecánica de club que solo acumula en barra y cafetería, presentación del humidor y un plan para relanzar las redes sociales desde cero.",
            "tags": [
              "Dirección de arte",
              "Luxury",
              "Manual de marca"
            ]
          },
          "pt": {
            "sub": "Direção de arte de um lounge de charutos",
            "client": "Smoke by D-Cigars, Marina de Cascais (Portugal)",
            "description": "Pacote de conceito para o único lounge de charutos de Cascais: uma casa digital a preto e dourado no registo do menu impresso da casa, verificação de idade, carta completa, mecânica de clube que acumula apenas no bar e na cafetaria, apresentação do humidor e um plano para relançar as redes sociais do zero.",
            "tags": [
              "Direção de arte",
              "Luxury",
              "Manual de marca"
            ]
          },
          "fr": {
            "sub": "Direction artistique d’un lounge à cigares",
            "client": "Smoke by D-Cigars, marina de Cascais (Portugal)",
            "description": "Dossier concept pour l’unique lounge à cigares de Cascais\u00A0: une maison numérique noir et or dans le registre de la carte imprimée du lieu, un contrôle de l’âge, la carte complète, une mécanique de club qui ne cumule que sur le bar et la cafétéria, la présentation du humidor et un plan de relance des réseaux sociaux depuis zéro.",
            "tags": [
              "Direction artistique",
              "Luxury",
              "Charte de marque"
            ]
          },
          "de": {
            "sub": "Art Direction für eine Zigarrenlounge",
            "client": "Smoke by D-Cigars, Marina von Cascais (Portugal)",
            "description": "Konzeptpaket für die einzige Zigarrenlounge in Cascais: ein digitales Zuhause in Schwarz und Gold im Register der gedruckten Karte des Hauses, eine Altersprüfung, die vollständige Karte, eine Clubmechanik, die nur an Bar und Cafeteria sammelt, die Präsentation des Humidors und ein Plan, die sozialen Netzwerke von Grund auf neu zu starten.",
            "tags": [
              "Art Direction",
              "Luxury",
              "Brandbook"
            ]
          },
          "ar": {
            "sub": "إدارة فنية لصالة سيجار",
            "client": "Smoke by D-Cigars، مرسى كاشكايش (البرتغال)",
            "description": "حزمة تصوّر لصالة السيجار الوحيدة في كاشكايش: بيت رقمي بالأسود والذهبي على إيقاع القائمة المطبوعة للمكان، وبوابة للتحقق من العمر، وقائمة كاملة، وآلية أعضاء تُحتسب على البار والكافتيريا فقط، وعرض لخزانة السيجار، وخطة لإعادة إطلاق حسابات التواصل من الصفر.",
            "tags": [
              "إدارة فنية",
              "Luxury",
              "دليل العلامة"
            ]
          },
          "ja": {
            "sub": "シガーラウンジのアートディレクション",
            "client": "Smoke by D-Cigars、カスカイス・マリーナ（ポルトガル）",
            "description": "カスカイス唯一のシガーラウンジのためのコンセプトパッケージ。店の印刷メニューの調子を受け継ぐ黒と金のデジタル空間、年齢確認、全メニュー、バーとカフェテリアの利用にのみ加算される会員の仕組み、ヒュミドールの紹介、そしてSNSをゼロから立て直す計画までを含みます。",
            "tags": [
              "アートディレクション",
              "Luxury",
              "ブランドブック"
            ]
          },
          "tr": {
            "sub": "Puro salonunun sanat yönetimi",
            "client": "Smoke by D-Cigars, Cascais Marina (Portekiz)",
            "description": "Cascais'in tek puro salonu için konsept paketi: mekânın basılı menüsünün diliyle kurulan siyah-altın dijital ev, yaş doğrulama, eksiksiz menü, yalnızca bar ve kafeterya harcamalarında işleyen kulüp mekaniği, humidor sunumu ve sosyal medyayı sıfırdan yeniden başlatma planı.",
            "tags": [
              "Sanat yönetimi",
              "Luxury",
              "Marka kitabı"
            ]
          }
        },
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
