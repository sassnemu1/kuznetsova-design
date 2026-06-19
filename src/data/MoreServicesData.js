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
  },
];