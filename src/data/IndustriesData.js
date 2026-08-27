/**
 * Отраслевые разделы портфолио («наши работы с ресторанами и кафе» и т.д.).
 *
 * id      — ключ, который проставляется в поле `industry` каждой работы
 *           в ServicesData.js. Одна работа может входить в несколько разделов.
 * ru / en — подпись вкладки. Вторая используется переключателем языка.
 * desc    — подзаголовок раздела на странице портфолио.
 * color   — акцент вкладки; та же палитра, что у категорий услуг.
 *
 * i18n    — полные переводы для остальных языков сайта.
 *           Ключи внутри совпадают с ruKey, который компоненты передают
 *           в pickLocalized: "ru" (подпись вкладки) и "desc" (подзаголовок).
 *           Поля ru / en / desc / descEn остаются нетронутыми.
 */
export const INDUSTRIES = [
  {
    id: "food",
    ru: "Еда",
    en: "Food & Beverage",
    desc: "Рестораны, кафе, бары и продуктовый ритейл: сайты с меню, онлайн-заказ, клубные программы и визуал для соцсетей.",
    descEn: "Restaurants, cafés, bars and grocery retail: menu sites, online ordering, loyalty clubs and social content.",
    color: "#c0562f",
    i18n: {
      zh: {
        ru: "餐饮",
        desc: "餐厅、咖啡馆、酒吧与食品零售：菜单网站、在线点单、会员俱乐部与社交内容视觉。",
      },
      es: {
        ru: "Gastronomía",
        desc: "Restaurantes, cafeterías, bares y retail alimentario: webs con menú, pedidos en línea, programas de club y contenido visual para redes.",
      },
      pt: {
        ru: "Gastronomia",
        desc: "Restaurantes, cafés, bares e varejo alimentar: sites com cardápio, pedidos online, programas de clube e conteúdo visual para redes.",
      },
      fr: {
        ru: "Restauration",
        desc: "Restaurants, cafés, bars et distribution alimentaire : sites avec menu, commande en ligne, programmes de fidélité et contenu visuel pour les réseaux.",
      },
      de: {
        ru: "Gastronomie",
        desc: "Restaurants, Cafés, Bars und Lebensmittelhandel: Websites mit Menü, Onlinebestellung, Clubprogramme und Visuals für Social Media.",
      },
      ar: {
        ru: "المطاعم والأغذية",
        desc: "مطاعم ومقاهٍ وحانات وتجزئة غذائية: مواقع بقوائم الطعام، والطلب عبر الإنترنت، وبرامج العضوية، ومحتوى بصري للشبكات الاجتماعية.",
      },
      ja: {
        ru: "飲食",
        desc: "レストラン、カフェ、バー、食品小売：メニュー付きサイト、オンライン注文、クラブプログラム、SNS用ビジュアル。",
      },
      tr: {
        ru: "Yeme-içme",
        desc: "Restoranlar, kafeler, barlar ve gıda perakendesi: menülü siteler, çevrimiçi sipariş, kulüp programları ve sosyal medya görselleri.",
      },
    },
  },
  {
    id: "fashion",
    ru: "Одежда",
    en: "Fashion & Apparel",
    desc: "Бренды одежды и мерч: айдентика, принты, лукбуки и интернет-магазины.",
    descEn: "Clothing brands and merch: identity, prints, lookbooks and online stores.",
    color: "#8c5bd8",
    i18n: {
      zh: {
        ru: "服装",
        desc: "服装品牌与周边：品牌识别、印花、Lookbook 与网店。",
      },
      es: {
        ru: "Moda",
        desc: "Marcas de ropa y merchandising: identidad, estampados, lookbooks y tiendas en línea.",
      },
      pt: {
        ru: "Moda",
        desc: "Marcas de roupa e merch: identidade, estampas, lookbooks e lojas online.",
      },
      fr: {
        ru: "Mode",
        desc: "Marques de vêtements et merch : identité, imprimés, lookbooks et boutiques en ligne.",
      },
      de: {
        ru: "Mode",
        desc: "Bekleidungsmarken und Merch: Identität, Prints, Lookbooks und Onlineshops.",
      },
      ar: {
        ru: "الأزياء",
        desc: "علامات الملابس والمنتجات الترويجية: الهوية، والطباعات، وكتب الإطلالات، والمتاجر الإلكترونية.",
      },
      ja: {
        ru: "アパレル",
        desc: "アパレルブランドとマーチャンダイズ：アイデンティティ、プリント、ルックブック、オンラインストア。",
      },
      tr: {
        ru: "Giyim",
        desc: "Giyim markaları ve merch: kimlik, baskılar, lookbook'lar ve çevrimiçi mağazalar.",
      },
    },
  },
  {
    id: "realty",
    ru: "Недвижимость",
    en: "Real Estate",
    desc: "Застройщики, агентства и архитектурные бюро: презентационные сайты, 3D и полиграфия.",
    descEn: "Developers, agencies and architecture studios: presentation sites, 3D and print.",
    color: "#3a6ea5",
    i18n: {
      zh: {
        ru: "房地产",
        desc: "开发商、中介机构与建筑事务所：展示型网站、3D 与印刷品。",
      },
      es: {
        ru: "Inmobiliaria",
        desc: "Promotoras, agencias y estudios de arquitectura: webs de presentación, 3D e impresos.",
      },
      pt: {
        ru: "Imobiliário",
        desc: "Incorporadoras, agências e escritórios de arquitetura: sites de apresentação, 3D e impressos.",
      },
      fr: {
        ru: "Immobilier",
        desc: "Promoteurs, agences et agences d'architecture : sites de présentation, 3D et supports imprimés.",
      },
      de: {
        ru: "Immobilien",
        desc: "Bauträger, Agenturen und Architekturbüros: Präsentationswebsites, 3D und Printmedien.",
      },
      ar: {
        ru: "العقارات",
        desc: "شركات التطوير والوكالات ومكاتب العمارة: مواقع تقديمية، ونمذجة ثلاثية الأبعاد، ومطبوعات.",
      },
      ja: {
        ru: "不動産",
        desc: "デベロッパー、仲介会社、設計事務所：プレゼンテーションサイト、3D、印刷物。",
      },
      tr: {
        ru: "Gayrimenkul",
        desc: "Geliştiriciler, ajanslar ve mimarlık ofisleri: tanıtım siteleri, 3D ve matbu işler.",
      },
    },
  },
  {
    id: "auto",
    ru: "Авто",
    en: "Automotive",
    desc: "Транспорт и сервис: промо-сайты, оклейка, айдентика и съёмка.",
    descEn: "Transport and service: promo sites, vehicle wraps, identity and production.",
    color: "#7b2ff7",
    i18n: {
      zh: {
        ru: "汽车",
        desc: "交通与服务：宣传网站、车身贴膜、品牌识别与拍摄。",
      },
      es: {
        ru: "Automoción",
        desc: "Transporte y servicio: webs promocionales, rotulación de vehículos, identidad y producción fotográfica.",
      },
      pt: {
        ru: "Automotivo",
        desc: "Transporte e serviço: sites promocionais, envelopamento de veículos, identidade e produção fotográfica.",
      },
      fr: {
        ru: "Automobile",
        desc: "Transport et services : sites promotionnels, covering, identité et production photo.",
      },
      de: {
        ru: "Automobil",
        desc: "Transport und Service: Promo-Websites, Fahrzeugbeklebung, Identität und Produktion.",
      },
      ar: {
        ru: "السيارات",
        desc: "النقل والخدمة: مواقع ترويجية، وتغليف المركبات، والهوية، والتصوير.",
      },
      ja: {
        ru: "自動車",
        desc: "輸送とサービス：プロモーションサイト、カーラッピング、アイデンティティ、撮影。",
      },
      tr: {
        ru: "Otomotiv",
        desc: "Ulaşım ve servis: tanıtım siteleri, araç kaplama, kimlik ve çekim.",
      },
    },
  },
  {
    id: "beauty",
    ru: "Бьюти-сфера",
    en: "Beauty",
    desc: "Салоны, мастера и косметические бренды: сайты с онлайн-записью, 3D-рендеры продукта и контент.",
    descEn: "Salons, individual masters and cosmetics brands: booking sites, product 3D and content.",
    color: "#d4568c",
    i18n: {
      zh: {
        ru: "美业",
        desc: "沙龙、个人美容师与化妆品品牌：在线预约网站、产品 3D 渲染与内容。",
      },
      es: {
        ru: "Belleza",
        desc: "Salones, profesionales independientes y marcas de cosmética: webs con reserva en línea, renders 3D de producto y contenido.",
      },
      pt: {
        ru: "Beleza",
        desc: "Salões, profissionais independentes e marcas de cosméticos: sites com agendamento online, renders 3D de produto e conteúdo.",
      },
      fr: {
        ru: "Beauté",
        desc: "Salons, praticiens indépendants et marques de cosmétiques : sites avec réservation en ligne, rendus 3D de produit et contenu.",
      },
      de: {
        ru: "Beauty",
        desc: "Salons, selbstständige Fachkräfte und Kosmetikmarken: Websites mit Onlinebuchung, Produkt-3D und Content.",
      },
      ar: {
        ru: "التجميل",
        desc: "الصالونات والمتخصصون وعلامات مستحضرات التجميل: مواقع بحجز إلكتروني، وصور ثلاثية الأبعاد للمنتج، ومحتوى.",
      },
      ja: {
        ru: "ビューティー",
        desc: "サロン、個人施術者、コスメブランド：オンライン予約サイト、製品の3Dレンダリング、コンテンツ。",
      },
      tr: {
        ru: "Güzellik",
        desc: "Salonlar, bağımsız uzmanlar ve kozmetik markaları: online randevulu siteler, ürün 3D görselleri ve içerik.",
      },
    },
  },
  {
    id: "medicine",
    ru: "Медицина и фармацевтика",
    en: "Medicine & Pharma",
    desc: "Клиники, лаборатории и фармбренды: строгая айдентика, доступные интерфейсы, доверие в каждом элементе.",
    descEn: "Clinics, labs and pharma brands: precise identity, accessible interfaces, trust by design.",
    color: "#2b9e8f",
    i18n: {
      zh: {
        ru: "医疗与制药",
        desc: "诊所、实验室与制药品牌：严谨的品牌识别、无障碍界面、每个细节都建立信任。",
      },
      es: {
        ru: "Medicina y farmacia",
        desc: "Clínicas, laboratorios y marcas farmacéuticas: identidad rigurosa, interfaces accesibles, confianza en cada elemento.",
      },
      pt: {
        ru: "Medicina e farmacêutica",
        desc: "Clínicas, laboratórios e marcas farmacêuticas: identidade rigorosa, interfaces acessíveis, confiança em cada elemento.",
      },
      fr: {
        ru: "Médecine et pharmacie",
        desc: "Cliniques, laboratoires et marques pharmaceutiques : identité rigoureuse, interfaces accessibles, confiance dans chaque élément.",
      },
      de: {
        ru: "Medizin und Pharmazie",
        desc: "Kliniken, Labore und Pharmamarken: strenge Identität, barrierefreie Interfaces, Vertrauen in jedem Element.",
      },
      ar: {
        ru: "الطب والصيدلة",
        desc: "العيادات والمختبرات والعلامات الدوائية: هوية دقيقة، وواجهات ميسّرة، وثقة في كل عنصر.",
      },
      ja: {
        ru: "医療・製薬",
        desc: "クリニック、検査機関、製薬ブランド：厳格なアイデンティティ、アクセシブルなインターフェース、細部に宿る信頼。",
      },
      tr: {
        ru: "Tıp ve ilaç",
        desc: "Klinikler, laboratuvarlar ve ilaç markaları: kesin bir kimlik, erişilebilir arayüzler, her ögede güven.",
      },
    },
  },
  {
    id: "fintech",
    ru: "Финтех и крипта",
    en: "Fintech & Crypto",
    desc: "Финансовые сервисы, платформы и Web3: продуктовый дизайн, дашборды, сложные интерфейсы данных.",
    descEn: "Financial services, platforms and Web3: product design, dashboards, complex data interfaces.",
    color: "#2248a8",
    i18n: {
      zh: {
        ru: "金融科技与加密",
        desc: "金融服务、平台与 Web3：产品设计、仪表板、复杂的数据界面。",
      },
      es: {
        ru: "Fintech y cripto",
        desc: "Servicios financieros, plataformas y Web3: diseño de producto, cuadros de mando e interfaces de datos complejas.",
      },
      pt: {
        ru: "Fintech e cripto",
        desc: "Serviços financeiros, plataformas e Web3: design de produto, painéis e interfaces de dados complexas.",
      },
      fr: {
        ru: "Fintech et crypto",
        desc: "Services financiers, plateformes et Web3 : design produit, tableaux de bord et interfaces de données complexes.",
      },
      de: {
        ru: "Fintech und Krypto",
        desc: "Finanzdienste, Plattformen und Web3: Produktdesign, Dashboards, komplexe Dateninterfaces.",
      },
      ar: {
        ru: "التقنية المالية والعملات المشفّرة",
        desc: "الخدمات المالية والمنصات وWeb3: تصميم المنتج، ولوحات المعلومات، وواجهات بيانات معقّدة.",
      },
      ja: {
        ru: "フィンテックと暗号資産",
        desc: "金融サービス、プラットフォーム、Web3：プロダクトデザイン、ダッシュボード、複雑なデータインターフェース。",
      },
      tr: {
        ru: "Fintek ve kripto",
        desc: "Finansal servisler, platformlar ve Web3: ürün tasarımı, panolar, karmaşık veri arayüzleri.",
      },
    },
  },
  {
    id: "luxury",
    ru: "Luxury-сегмент",
    en: "Luxury",
    desc: "Часы, ювелирика и премиальные бренды: сдержанная типографика, материальность, 3D-конфигураторы.",
    descEn: "Watches, jewellery and premium brands: restrained typography, materiality, 3D configurators.",
    color: "#a8894f",
    i18n: {
      zh: {
        ru: "奢侈品",
        desc: "腕表、珠宝与高端品牌：克制的字体排印、材质表现、3D 配置器。",
      },
      es: {
        ru: "Segmento de lujo",
        desc: "Relojería, joyería y marcas premium: tipografía contenida, materialidad y configuradores 3D.",
      },
      pt: {
        ru: "Segmento de luxo",
        desc: "Relojoaria, joalheria e marcas premium: tipografia contida, materialidade e configuradores 3D.",
      },
      fr: {
        ru: "Segment du luxe",
        desc: "Horlogerie, joaillerie et marques premium : typographie sobre, matérialité et configurateurs 3D.",
      },
      de: {
        ru: "Luxussegment",
        desc: "Uhren, Schmuck und Premiummarken: zurückhaltende Typografie, Materialität, 3D-Konfiguratoren.",
      },
      ar: {
        ru: "قطاع الرفاهية",
        desc: "الساعات والمجوهرات والعلامات الفاخرة: طباعة محتشمة، وحسّ بالخامات، ومهيّئات ثلاثية الأبعاد.",
      },
      ja: {
        ru: "ラグジュアリー",
        desc: "時計、宝飾、プレミアムブランド：抑制のきいたタイポグラフィ、素材感、3Dコンフィギュレーター。",
      },
      tr: {
        ru: "Lüks segment",
        desc: "Saat, mücevher ve premium markalar: ölçülü tipografi, malzeme hissi, 3D yapılandırıcılar.",
      },
    },
  },
  {
    id: "event",
    ru: "Ивент-индустрия",
    en: "Events",
    desc: "Площадки, организаторы и спорт: промо-сайты, бронирование, афиши и контент под запуск.",
    descEn: "Venues, organisers and sports: promo sites, bookings, posters and launch content.",
    color: "#5a7cf0",
    i18n: {
      zh: {
        ru: "活动产业",
        desc: "场馆、主办方与体育：宣传网站、预订、海报与发布内容。",
      },
      es: {
        ru: "Industria de eventos",
        desc: "Espacios, organizadores y deporte: webs promocionales, reservas, carteles y contenido de lanzamiento.",
      },
      pt: {
        ru: "Indústria de eventos",
        desc: "Espaços, organizadores e esporte: sites promocionais, reservas, cartazes e conteúdo de lançamento.",
      },
      fr: {
        ru: "Industrie de l'événementiel",
        desc: "Lieux, organisateurs et sport : sites promotionnels, réservations, affiches et contenu de lancement.",
      },
      de: {
        ru: "Eventbranche",
        desc: "Locations, Veranstalter und Sport: Promo-Websites, Buchungen, Plakate und Content zum Launch.",
      },
      ar: {
        ru: "صناعة الفعاليات",
        desc: "الأماكن والمنظمون والرياضة: مواقع ترويجية، وحجوزات، وملصقات، ومحتوى للإطلاق.",
      },
      ja: {
        ru: "イベント産業",
        desc: "会場、主催者、スポーツ：プロモーションサイト、予約、ポスター、ローンチ用コンテンツ。",
      },
      tr: {
        ru: "Etkinlik sektörü",
        desc: "Mekânlar, organizatörler ve spor: tanıtım siteleri, rezervasyon, afişler ve lansman içeriği.",
      },
    },
  },
  {
    id: "b2b",
    ru: "B2B-услуги",
    en: "B2B Services",
    desc: "Компании, которые продают другим компаниям: позиционирование, презентации, корпоративные сайты.",
    descEn: "Companies selling to companies: positioning, decks and corporate sites.",
    color: "#4a4a4a",
    i18n: {
      zh: {
        ru: "B2B 服务",
        desc: "面向企业销售的公司：定位、演示文稿、企业网站。",
      },
      es: {
        ru: "Servicios B2B",
        desc: "Empresas que venden a otras empresas: posicionamiento, presentaciones y webs corporativas.",
      },
      pt: {
        ru: "Serviços B2B",
        desc: "Empresas que vendem para outras empresas: posicionamento, apresentações e sites corporativos.",
      },
      fr: {
        ru: "Services B2B",
        desc: "Entreprises qui vendent à d'autres entreprises : positionnement, présentations et sites corporate.",
      },
      de: {
        ru: "B2B-Leistungen",
        desc: "Unternehmen, die an Unternehmen verkaufen: Positionierung, Präsentationen, Corporate Websites.",
      },
      ar: {
        ru: "خدمات B2B",
        desc: "شركات تبيع لشركات أخرى: التموضع، والعروض التقديمية، والمواقع المؤسسية.",
      },
      ja: {
        ru: "B2Bサービス",
        desc: "企業に販売する企業：ポジショニング、プレゼンテーション、コーポレートサイト。",
      },
      tr: {
        ru: "B2B hizmetleri",
        desc: "Şirketlere satış yapan şirketler: konumlandırma, sunumlar, kurumsal siteler.",
      },
    },
  },
  {
    id: "dealers",
    ru: "Автосалоны",
    en: "Car Dealerships",
    desc: "Дилерские центры и трейд-ин: каталоги, конфигураторы, заявки и офлайн-носители.",
    descEn: "Dealerships and trade-in: catalogues, configurators, lead capture and print.",
    color: "#5c6470",
    i18n: {
      zh: {
        ru: "汽车经销商",
        desc: "经销中心与置换业务：车型目录、配置器、留资表单与线下物料。",
      },
      es: {
        ru: "Concesionarios",
        desc: "Centros de concesionario y trade-in: catálogos, configuradores, captación de solicitudes y soportes offline.",
      },
      pt: {
        ru: "Concessionárias",
        desc: "Centros de concessionária e trade-in: catálogos, configuradores, captação de solicitações e materiais offline.",
      },
      fr: {
        ru: "Concessions automobiles",
        desc: "Concessions et reprise : catalogues, configurateurs, formulaires de demande et supports hors ligne.",
      },
      de: {
        ru: "Autohäuser",
        desc: "Handelszentren und Inzahlungnahme: Kataloge, Konfiguratoren, Anfragen und Offline-Medien.",
      },
      ar: {
        ru: "معارض السيارات",
        desc: "مراكز الوكلاء واستبدال المركبات: الكتالوجات، والمهيّئات، وطلبات العملاء، والمواد المطبوعة.",
      },
      ja: {
        ru: "自動車ディーラー",
        desc: "ディーラー拠点と下取り：カタログ、コンフィギュレーター、問い合わせ受付、オフライン媒体。",
      },
      tr: {
        ru: "Oto galeriler",
        desc: "Bayi merkezleri ve takas: kataloglar, yapılandırıcılar, talep formları ve basılı materyaller.",
      },
    },
  },
  {
    id: "nko",
    ru: "НКО",
    en: "Non-Profit",
    desc: "Фонды и общественные проекты: понятная коммуникация, сбор пожертвований, отчётность.",
    descEn: "Foundations and public projects: clear communication, donations and transparency.",
    color: "#3f9668",
    i18n: {
      zh: {
        ru: "非营利组织",
        desc: "基金会与公益项目：清晰的沟通、捐款募集、公开报告。",
      },
      es: {
        ru: "ONG",
        desc: "Fundaciones y proyectos sociales: comunicación clara, recaudación de donaciones y rendición de cuentas.",
      },
      pt: {
        ru: "Terceiro setor",
        desc: "Fundações e projetos sociais: comunicação clara, arrecadação de doações e prestação de contas.",
      },
      fr: {
        ru: "Associations",
        desc: "Fondations et projets d'intérêt général : communication claire, collecte de dons et reddition de comptes.",
      },
      de: {
        ru: "Gemeinnützige Organisationen",
        desc: "Stiftungen und gemeinnützige Projekte: klare Kommunikation, Spendensammlung, Rechenschaft.",
      },
      ar: {
        ru: "المنظمات غير الربحية",
        desc: "المؤسسات والمشاريع المجتمعية: تواصل واضح، وجمع التبرعات، وإعداد التقارير.",
      },
      ja: {
        ru: "非営利団体",
        desc: "財団と公益プロジェクト：わかりやすいコミュニケーション、寄付の受付、報告。",
      },
      tr: {
        ru: "Sivil toplum kuruluşları",
        desc: "Vakıflar ve toplumsal projeler: anlaşılır iletişim, bağış toplama, raporlama.",
      },
    },
  },
  {
    id: "gov",
    ru: "Государственные учреждения",
    en: "Public Sector",
    desc: "Городские и государственные проекты: благоустройство, визуализации, доступная среда.",
    descEn: "City and state projects: urban development, visualisation, accessible environments.",
    color: "#6b7f8f",
    i18n: {
      zh: {
        ru: "公共机构",
        desc: "城市与政府项目：环境提升、可视化、无障碍环境。",
      },
      es: {
        ru: "Sector público",
        desc: "Proyectos municipales y estatales: mejora urbana, visualizaciones y entornos accesibles.",
      },
      pt: {
        ru: "Setor público",
        desc: "Projetos municipais e estatais: requalificação urbana, visualizações e ambientes acessíveis.",
      },
      fr: {
        ru: "Secteur public",
        desc: "Projets municipaux et publics : aménagement urbain, visualisations et environnements accessibles.",
      },
      de: {
        ru: "Öffentliche Einrichtungen",
        desc: "Kommunale und staatliche Projekte: Stadtgestaltung, Visualisierungen, barrierefreie Umgebungen.",
      },
      ar: {
        ru: "المؤسسات الحكومية",
        desc: "مشاريع المدن والجهات الحكومية: تحسين البيئة العمرانية، والتصورات البصرية، والبيئة الميسّرة.",
      },
      ja: {
        ru: "公共機関",
        desc: "都市および行政のプロジェクト：環境整備、ビジュアライゼーション、アクセシブルな環境。",
      },
      tr: {
        ru: "Kamu kurumları",
        desc: "Kent ve devlet projeleri: çevre düzenlemesi, görselleştirmeler, erişilebilir mekânlar.",
      },
    },
  },
  {
    id: "media",
    ru: "СМИ",
    en: "Media",
    desc: "Издания, блоги и медиапроекты: сетки, типографика, читаемость на любом экране.",
    descEn: "Publications, blogs and media projects: grids, typography, readability everywhere.",
    color: "#b8433f",
    i18n: {
      zh: {
        ru: "媒体",
        desc: "出版物、博客与媒体项目：网格、字体排印、任何屏幕上的可读性。",
      },
      es: {
        ru: "Medios",
        desc: "Publicaciones, blogs y proyectos mediáticos: retículas, tipografía y legibilidad en cualquier pantalla.",
      },
      pt: {
        ru: "Mídia",
        desc: "Publicações, blogs e projetos de mídia: grids, tipografia e legibilidade em qualquer tela.",
      },
      fr: {
        ru: "Médias",
        desc: "Publications, blogs et projets médias : grilles, typographie et lisibilité sur tous les écrans.",
      },
      de: {
        ru: "Medien",
        desc: "Publikationen, Blogs und Medienprojekte: Raster, Typografie, Lesbarkeit auf jedem Bildschirm.",
      },
      ar: {
        ru: "الإعلام",
        desc: "المطبوعات والمدونات والمشاريع الإعلامية: الشبكات التخطيطية، والطباعة، ووضوح القراءة على أي شاشة.",
      },
      ja: {
        ru: "メディア",
        desc: "出版物、ブログ、メディアプロジェクト：グリッド、タイポグラフィ、あらゆる画面での可読性。",
      },
      tr: {
        ru: "Medya",
        desc: "Yayınlar, bloglar ve medya projeleri: gridler, tipografi, her ekranda okunabilirlik.",
      },
    },
  },
  {
    id: "vizitka",
    ru: "Сайт-визитка",
    en: "Landing & Business Card",
    desc: "Компактные сайты для специалистов и небольших студий: суть, портфолио и заявка на одном экране.",
    descEn: "Compact sites for specialists and small studios: essence, portfolio and enquiry in one flow.",
    color: "#8f8f8f",
    i18n: {
      zh: {
        ru: "名片式网站",
        desc: "面向专业人士与小型工作室的精简网站：核心信息、作品与咨询表单集于一屏。",
      },
      es: {
        ru: "Web de presentación",
        desc: "Webs compactas para profesionales y estudios pequeños: lo esencial, el portfolio y la solicitud en una sola pantalla.",
      },
      pt: {
        ru: "Site de apresentação",
        desc: "Sites compactos para profissionais e pequenos estúdios: o essencial, o portfólio e o pedido em uma só tela.",
      },
      fr: {
        ru: "Site vitrine",
        desc: "Sites compacts pour indépendants et petits studios : l'essentiel, le portfolio et la demande sur un seul écran.",
      },
      de: {
        ru: "Visitenkarten-Website",
        desc: "Kompakte Websites für Fachleute und kleine Studios: das Wesentliche, Portfolio und Anfrage auf einem Screen.",
      },
      ar: {
        ru: "موقع تعريفي",
        desc: "مواقع مختصرة للمتخصصين والاستوديوهات الصغيرة: الجوهر والأعمال ونموذج الطلب في شاشة واحدة.",
      },
      ja: {
        ru: "名刺代わりのサイト",
        desc: "専門家や小規模スタジオ向けのコンパクトなサイト：要点、ポートフォリオ、問い合わせを1画面に。",
      },
      tr: {
        ru: "Tanıtım sitesi",
        desc: "Uzmanlar ve küçük stüdyolar için kompakt siteler: öz, portfolyo ve talep formu tek ekranda.",
      },
    },
  },
  {
    id: "saas",
    ru: "SaaS",
    en: "SaaS",
    desc: "Продуктовые команды: лендинги, дизайн-системы, интерфейсы приложений и админ-панелей.",
    descEn: "Product teams: landings, design systems, app and admin interfaces.",
    color: "#3864db",
    i18n: {
      zh: {
        desc: "产品团队：落地页、设计系统、应用与后台管理界面。",
      },
      es: {
        desc: "Equipos de producto: landings, sistemas de diseño e interfaces de aplicaciones y paneles de administración.",
      },
      pt: {
        desc: "Times de produto: landings, design systems e interfaces de aplicativos e painéis administrativos.",
      },
      fr: {
        desc: "Équipes produit : landing pages, design systems, interfaces d'applications et de back-offices.",
      },
      de: {
        desc: "Produktteams: Landingpages, Designsysteme, App- und Admin-Interfaces.",
      },
      ar: {
        desc: "فرق المنتج: صفحات هبوط، وأنظمة تصميم، وواجهات التطبيقات ولوحات الإدارة.",
      },
      ja: {
        desc: "プロダクトチーム：ランディングページ、デザインシステム、アプリと管理画面のインターフェース。",
      },
      tr: {
        desc: "Ürün ekipleri: landing sayfaları, tasarım sistemleri, uygulama ve yönetim paneli arayüzleri.",
      },
    },
  },
  {
    id: "webviz",
    ru: "Web-визуализация строительных объектов",
    en: "Architectural Web Visualisation",
    desc: "3D строительных и ландшафтных объектов прямо в браузере: обходы, ракурсы, материалы.",
    descEn: "3D of construction and landscape objects in the browser: walkthroughs, angles, materials.",
    color: "#9db4f5",
    i18n: {
      zh: {
        ru: "建筑项目的网页可视化",
        desc: "建筑与景观项目的 3D 直接在浏览器中呈现：漫游、视角、材质。",
      },
      es: {
        ru: "Visualización web de obra",
        desc: "3D de objetos constructivos y paisajísticos directamente en el navegador: recorridos, ángulos y materiales.",
      },
      pt: {
        ru: "Visualização web de obras",
        desc: "3D de objetos construtivos e paisagísticos direto no navegador: percursos, ângulos e materiais.",
      },
      fr: {
        ru: "Visualisation web des projets bâtis",
        desc: "3D d'ouvrages et d'aménagements paysagers directement dans le navigateur : parcours, angles et matériaux.",
      },
      de: {
        ru: "Web-Visualisierung von Bauobjekten",
        desc: "3D von Bau- und Landschaftsobjekten direkt im Browser: Rundgänge, Perspektiven, Materialien.",
      },
      ar: {
        ru: "التصور الشبكي للمشاريع الإنشائية",
        desc: "نماذج ثلاثية الأبعاد للمنشآت والمساحات الخارجية داخل المتصفح مباشرة: جولات، وزوايا، وخامات.",
      },
      ja: {
        ru: "建築対象のウェブビジュアライゼーション",
        desc: "建築物とランドスケープの3Dをブラウザ上で：ウォークスルー、アングル、マテリアル。",
      },
      tr: {
        ru: "Yapı projelerinin web görselleştirmesi",
        desc: "Yapı ve peyzaj nesnelerinin 3D'si doğrudan tarayıcıda: gezinti, açılar, malzemeler.",
      },
    },
  },
  {
    id: "ecosystems",
    ru: "Экосистемы",
    en: "Ecosystems",
    desc: "Проекты, где сайт — только вход: связка из витрины, приложения, клубной программы, кассы и рабочего экрана для персонала. Один бренд, одна база, все роли внутри.",
    descEn: "Projects where the site is only the entrance: storefront, app, loyalty club, checkout and a staff-facing dashboard. One brand, one database, every role inside.",
    color: "#1f7a6b",
    i18n: {
      zh: {
        ru: "生态系统",
        desc: "网站只是入口的项目：门店展示、应用、会员俱乐部、收银台与员工工作台连成一体。一个品牌，一个数据库，所有角色都在其中。",
      },
      es: {
        ru: "Ecosistemas",
        desc: "Proyectos donde la web es solo la entrada: escaparate, aplicación, programa de club, caja y pantalla de trabajo para el personal. Una marca, una base de datos, todos los roles dentro.",
      },
      pt: {
        ru: "Ecossistemas",
        desc: "Projetos em que o site é apenas a entrada: vitrine, aplicativo, programa de clube, caixa e tela de trabalho para a equipe. Uma marca, uma base de dados, todos os papéis dentro.",
      },
      fr: {
        ru: "Écosystèmes",
        desc: "Des projets où le site n'est que l'entrée : vitrine, application, programme de fidélité, caisse et écran de travail pour le personnel. Une marque, une base de données, tous les rôles à l'intérieur.",
      },
      de: {
        ru: "Ökosysteme",
        desc: "Projekte, bei denen die Website nur der Eingang ist: Schaufenster, App, Clubprogramm, Kasse und Arbeitsbildschirm für das Personal. Eine Marke, eine Datenbank, alle Rollen darin.",
      },
      ar: {
        ru: "المنظومات المتكاملة",
        desc: "مشاريع يكون فيها الموقع مجرد مدخل: واجهة عرض وتطبيق وبرنامج عضوية ونقطة بيع وشاشة عمل للموظفين. علامة واحدة، وقاعدة بيانات واحدة، وجميع الأدوار في الداخل.",
      },
      ja: {
        ru: "エコシステム",
        desc: "サイトは入口にすぎないプロジェクト：ショーケース、アプリ、クラブプログラム、レジ、スタッフ用の業務画面をひとつに。ひとつのブランド、ひとつのデータベース、すべての役割が内側に。",
      },
      tr: {
        ru: "Ekosistemler",
        desc: "Sitenin yalnızca giriş olduğu projeler: vitrin, uygulama, kulüp programı, kasa ve personel için çalışma ekranı. Tek marka, tek veritabanı, tüm roller içeride.",
      },
    },
  },
  {
    id: "holdings",
    ru: "Our Holdings",
    en: "Our Holdings",
    desc: "Собственные проекты бюро — мы сами себе клиент, поэтому здесь видно, как мы работаем без компромиссов.",
    descEn: "The studio's own ventures — we are our own client here, so nothing is compromised.",
    color: "#111111",
    i18n: {
      zh: {
        desc: "工作室自有的项目——我们既是设计方也是客户，因此这里能看到我们毫不妥协的工作方式。",
      },
      es: {
        desc: "Proyectos propios del estudio: aquí somos nuestro propio cliente, así que se ve cómo trabajamos sin concesiones.",
      },
      pt: {
        desc: "Projetos próprios do estúdio: aqui somos o nosso próprio cliente, então dá para ver como trabalhamos sem concessões.",
      },
      fr: {
        desc: "Les projets propres du studio : ici, nous sommes notre propre client, on voit donc comment nous travaillons sans compromis.",
      },
      de: {
        desc: "Die eigenen Projekte des Studios: Hier sind wir unser eigener Kunde, deshalb zeigt sich, wie wir ohne Kompromisse arbeiten.",
      },
      ar: {
        desc: "مشاريع الاستوديو الخاصة — نحن هنا عميل أنفسنا، ولذلك يظهر كيف نعمل دون تنازلات.",
      },
      ja: {
        desc: "スタジオ自身のプロジェクト。ここでは私たちが自らのクライアントであり、妥協のない仕事の仕方が見て取れます。",
      },
      tr: {
        desc: "Stüdyonun kendi projeleri — burada kendi müşterimiziz, bu yüzden ödün vermeden nasıl çalıştığımız görülüyor.",
      },
    },
  },
];

export const INDUSTRY_MAP = Object.fromEntries(INDUSTRIES.map((i) => [i.id, i]));

export function getIndustry(id) {
  return INDUSTRY_MAP[id] || null;
}
