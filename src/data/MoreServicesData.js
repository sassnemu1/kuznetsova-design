/**
 * Карточки блока «More Development» на главной.
 *
 * i18n — полные переводы для остальных языков сайта.
 *        Ключи внутри повторяют имена полей, которые читает компонент:
 *        title, desc (через pickLocalized) и tags, chat, nodes
 *        (через pickLocalizedList; chat — массив тех же объектов { from, text }).
 *        Технические теги и названия сервисов не переводятся.
 */
export const MORE_SERVICES_DATA = [
  {
    id: "06",
    tag: "Automation",
    visual: "chat",
    title: "Telegram-Bots\n& automation",
    desc: "Боты для продаж, поддержки и внутренних процессов — от простых сценариев до интеграций с CRM и платёжными системами.",
    tags: ["Node.js", "Bot API", "PostgreSQL"],
    color: "#2AABEE",
    chat: [
      { from: "user", text: "Хочу записаться на консультацию" },
      { from: "bot",  text: "Конечно! На какую дату вам удобно?" },
      { from: "user", text: "На четверг, после 15:00" },
      { from: "bot",  text: "Записал — четверг, 15:30. Жду вас!" },
    ],
    i18n: {
      en: {
        desc: "Bots for sales, support and internal processes — from simple scenarios to integrations with CRM and payment systems.",
        chat: [
          { from: "user", text: "I would like to book a consultation" },
          { from: "bot",  text: "Of course. Which date suits you?" },
          { from: "user", text: "Thursday, after 15:00" },
          { from: "bot",  text: "Booked — Thursday, 15:30. See you then." },
        ],
      },
      zh: {
        title: "Telegram 机器人\n与自动化",
        desc: "面向销售、客服与内部流程的机器人——从简单脚本到对接 CRM 与支付系统。",
        chat: [
          { from: "user", text: "我想预约一次咨询" },
          { from: "bot",  text: "好的，您方便哪一天？" },
          { from: "user", text: "周四，15:00 之后" },
          { from: "bot",  text: "已记录——周四 15:30，恭候您。" },
        ],
      },
      es: {
        title: "Bots de Telegram\ny automatización",
        desc: "Bots para ventas, soporte y procesos internos: desde guiones sencillos hasta integraciones con CRM y pasarelas de pago.",
        chat: [
          { from: "user", text: "Quiero reservar una consulta" },
          { from: "bot",  text: "Por supuesto. ¿Qué fecha le viene bien?" },
          { from: "user", text: "El jueves, después de las 15:00" },
          { from: "bot",  text: "Anotado: jueves a las 15:30. Le esperamos." },
        ],
      },
      pt: {
        title: "Bots do Telegram\ne automação",
        desc: "Bots para vendas, suporte e processos internos: de roteiros simples a integrações com CRM e meios de pagamento.",
        chat: [
          { from: "user", text: "Quero agendar uma consulta" },
          { from: "bot",  text: "Claro. Que data fica melhor para você?" },
          { from: "user", text: "Quinta-feira, depois das 15:00" },
          { from: "bot",  text: "Anotado: quinta-feira, 15:30. Esperamos você." },
        ],
      },
      fr: {
        title: "Bots Telegram\n& automatisation",
        desc: "Des bots pour la vente, le support et les processus internes : du scénario simple aux intégrations CRM et paiement.",
        chat: [
          { from: "user", text: "Je souhaite prendre rendez-vous" },
          { from: "bot",  text: "Bien sûr. Quelle date vous conviendrait ?" },
          { from: "user", text: "Jeudi, après 15h00" },
          { from: "bot",  text: "C'est noté : jeudi, 15h30. À bientôt." },
        ],
      },
      de: {
        title: "Telegram-Bots\n& Automatisierung",
        desc: "Bots für Vertrieb, Support und interne Abläufe — vom einfachen Szenario bis zur Anbindung an CRM und Zahlungssysteme.",
        chat: [
          { from: "user", text: "Ich möchte einen Beratungstermin buchen" },
          { from: "bot",  text: "Gerne. Welches Datum passt Ihnen?" },
          { from: "user", text: "Donnerstag, nach 15:00 Uhr" },
          { from: "bot",  text: "Notiert: Donnerstag, 15:30 Uhr. Wir erwarten Sie." },
        ],
      },
      ar: {
        title: "بوتات Telegram\nوالأتمتة",
        desc: "بوتات للمبيعات والدعم والعمليات الداخلية — من السيناريوهات البسيطة إلى التكامل مع أنظمة CRM وبوابات الدفع.",
        chat: [
          { from: "user", text: "أرغب في حجز موعد استشارة" },
          { from: "bot",  text: "بالتأكيد، أي تاريخ يناسبك؟" },
          { from: "user", text: "الخميس، بعد الساعة 15:00" },
          { from: "bot",  text: "تم التسجيل — الخميس، 15:30. بانتظارك." },
        ],
      },
      ja: {
        title: "Telegram ボット\nと自動化",
        desc: "販売、サポート、社内業務のためのボット。シンプルなシナリオから CRM や決済システムとの連携まで。",
        chat: [
          { from: "user", text: "相談の予約をお願いします" },
          { from: "bot",  text: "承知しました。ご希望の日はいつでしょうか。" },
          { from: "user", text: "木曜日の15:00以降で" },
          { from: "bot",  text: "木曜日15:30で承りました。お待ちしております。" },
        ],
      },
      tr: {
        title: "Telegram botları\nve otomasyon",
        desc: "Satış, destek ve iç süreçler için botlar — basit senaryolardan CRM ve ödeme sistemleri entegrasyonlarına kadar.",
        chat: [
          { from: "user", text: "Danışmanlık için randevu almak istiyorum" },
          { from: "bot",  text: "Elbette. Hangi tarih sizin için uygun?" },
          { from: "user", text: "Perşembe, 15.00'ten sonra" },
          { from: "bot",  text: "Kaydettim — perşembe, 15.30. Sizi bekliyoruz." },
        ],
      },
    },
  },
  {
    id: "07",
    tag: "AI",
    visual: "network",
    title: "AI-integration",
    desc: "Встраиваем нейросети в продукты и процессы: чат-ассистенты, генерация контента, автоматизация рутинных задач.",
    tags: ["OpenAI API", "Claude API", "LangChain"],
    color: "#A78BFA",
    nodes: ["Запрос", "Модель", "Контекст", "Ответ"],
    i18n: {
      en: {
        desc: "We embed neural networks into products and processes: chat assistants, content generation, automation of routine tasks.",
        nodes: ["Request", "Model", "Context", "Response"],
      },
      zh: {
        title: "AI 集成",
        desc: "把神经网络嵌入产品与流程：聊天助手、内容生成、日常任务自动化。",
        nodes: ["请求", "模型", "上下文", "回应"],
      },
      es: {
        title: "Integración de IA",
        desc: "Integramos redes neuronales en productos y procesos: asistentes de chat, generación de contenido y automatización de tareas rutinarias.",
        nodes: ["Consulta", "Modelo", "Contexto", "Respuesta"],
      },
      pt: {
        title: "Integração de IA",
        desc: "Integramos redes neurais em produtos e processos: assistentes de chat, geração de conteúdo e automação de tarefas rotineiras.",
        nodes: ["Consulta", "Modelo", "Contexto", "Resposta"],
      },
      fr: {
        title: "Intégration d'IA",
        desc: "Nous intégrons les réseaux de neurones aux produits et aux processus : assistants conversationnels, génération de contenu, automatisation des tâches répétitives.",
        nodes: ["Requête", "Modèle", "Contexte", "Réponse"],
      },
      de: {
        title: "KI-Integration",
        desc: "Wir binden neuronale Netze in Produkte und Abläufe ein: Chat-Assistenten, Content-Generierung, Automatisierung von Routineaufgaben.",
        nodes: ["Anfrage", "Modell", "Kontext", "Antwort"],
      },
      ar: {
        title: "دمج الذكاء الاصطناعي",
        desc: "ندمج الشبكات العصبية في المنتجات والعمليات: مساعدو المحادثة، وتوليد المحتوى، وأتمتة المهام الروتينية.",
        nodes: ["الطلب", "النموذج", "السياق", "الإجابة"],
      },
      ja: {
        title: "AI 統合",
        desc: "ニューラルネットワークをプロダクトと業務に組み込みます：チャットアシスタント、コンテンツ生成、定型作業の自動化。",
        nodes: ["リクエスト", "モデル", "コンテキスト", "レスポンス"],
      },
      tr: {
        title: "Yapay zekâ entegrasyonu",
        desc: "Yapay sinir ağlarını ürünlere ve süreçlere yerleştiriyoruz: sohbet asistanları, içerik üretimi, rutin görevlerin otomasyonu.",
        nodes: ["İstek", "Model", "Bağlam", "Yanıt"],
      },
    },
  },
];
