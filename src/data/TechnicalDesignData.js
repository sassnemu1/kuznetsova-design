/**
 * Карточки блока «technical design» на главной.
 *
 * i18n — полные переводы для остальных языков сайта.
 *        Ключи внутри повторяют имена полей, которые читает компонент:
 *        title, desc (через pickLocalized) и tags (через pickLocalizedList).
 *        Названия САПР и форматов файлов не переводятся.
 */
export const TECHNICAL_DESIGN_DATA = [
  {
    id: "08",
    tag: "Drafting",
    visual: "blueprint",
    title: "Технические\nчертежи",
    desc: "Чертежи с допусками и аннотациями, готовые к передаче на производство — в нужном масштабе и формате.",
    tags: ["AutoCAD", "DXF", "PDF"],
    color: "#38BDF8",
    i18n: {
      en: {
        title: "Technical\ndrawings",
        desc: "Drawings with tolerances and annotations, ready to hand over to production — at the required scale and format.",
      },
      zh: {
        title: "技术\n图纸",
        desc: "带公差与标注的图纸，可直接交付生产——按所需的比例与格式。",
      },
      es: {
        title: "Planos\ntécnicos",
        desc: "Planos con tolerancias y anotaciones, listos para pasar a producción, en la escala y el formato necesarios.",
      },
      pt: {
        title: "Desenhos\ntécnicos",
        desc: "Desenhos com tolerâncias e anotações, prontos para ir à produção, na escala e no formato necessários.",
      },
      fr: {
        title: "Plans\ntechniques",
        desc: "Des plans avec tolérances et annotations, prêts pour la production, à l'échelle et au format requis.",
      },
      de: {
        title: "Technische\nZeichnungen",
        desc: "Zeichnungen mit Toleranzen und Anmerkungen, bereit für die Fertigung — im erforderlichen Maßstab und Format.",
      },
      ar: {
        title: "الرسومات\nالتقنية",
        desc: "رسومات بالتفاوتات والملاحظات، جاهزة للتسليم إلى الإنتاج — بالمقياس والصيغة المطلوبين.",
      },
      ja: {
        title: "技術\n図面",
        desc: "公差と注記を備えた図面。必要な縮尺と形式で、そのまま製造へ渡せます。",
      },
      tr: {
        title: "Teknik\nçizimler",
        desc: "Toleranslar ve açıklamalarla hazırlanan, üretime aktarılmaya hazır çizimler — gereken ölçek ve formatta.",
      },
    },
  },
  {
    id: "09",
    tag: "Schematics",
    visual: "schematic",
    title: "Принципиальные\nсхемы",
    desc: "Электрические схемы устройств: от расстановки компонентов до спецификации (BOM) для сборки.",
    tags: ["KiCad", "Altium", "BOM"],
    color: "#4ADE80",
    i18n: {
      en: {
        title: "Circuit\nschematics",
        desc: "Electrical schematics for devices: from component placement to the bill of materials (BOM) for assembly.",
      },
      zh: {
        title: "电路\n原理图",
        desc: "设备的电气原理图：从元器件布置到装配所需的物料清单（BOM）。",
      },
      es: {
        title: "Esquemas\neléctricos",
        desc: "Esquemas eléctricos de dispositivos: desde la disposición de los componentes hasta la lista de materiales (BOM) para el montaje.",
      },
      pt: {
        title: "Esquemas\nelétricos",
        desc: "Esquemas elétricos de dispositivos: da disposição dos componentes à lista de materiais (BOM) para a montagem.",
      },
      fr: {
        title: "Schémas\nde principe",
        desc: "Schémas électriques des appareils : de l'implantation des composants à la nomenclature (BOM) pour l'assemblage.",
      },
      de: {
        title: "Elektrische\nSchaltpläne",
        desc: "Elektrische Schaltpläne von Geräten: von der Bauteilanordnung bis zur Stückliste (BOM) für die Montage.",
      },
      ar: {
        title: "المخططات\nالمبدئية",
        desc: "مخططات كهربائية للأجهزة: من ترتيب المكوّنات إلى قائمة المواد (BOM) اللازمة للتجميع.",
      },
      ja: {
        title: "回路\n図",
        desc: "機器の電気回路図：部品配置から組み立て用の部品表（BOM）まで。",
      },
      tr: {
        title: "Prensip\nşemaları",
        desc: "Cihazların elektrik şemaları: bileşen yerleşiminden montaj için malzeme listesine (BOM) kadar.",
      },
    },
  },
  {
    id: "10",
    tag: "PCB",
    visual: "pcb",
    title: "Проектирование\nплат",
    desc: "Разводка печатных плат: размещение компонентов, трассировка слоёв, подготовка Gerber-файлов под производство.",
    tags: ["KiCad", "Gerber", "2–4 layers"],
    color: "#E2A33D",
    i18n: {
      en: {
        title: "PCB\ndesign",
        desc: "Printed circuit board layout: component placement, layer routing, preparation of Gerber files for production.",
      },
      zh: {
        title: "电路板\n设计",
        desc: "印制电路板布线：元器件布局、层间走线、面向生产的 Gerber 文件准备。",
        tags: ["KiCad", "Gerber", "2–4 层"],
      },
      es: {
        title: "Diseño\nde placas",
        desc: "Trazado de placas de circuito impreso: colocación de componentes, ruteo de capas y preparación de archivos Gerber para producción.",
        tags: ["KiCad", "Gerber", "2–4 capas"],
      },
      pt: {
        title: "Projeto\nde placas",
        desc: "Roteamento de placas de circuito impresso: posicionamento de componentes, traçado de camadas e preparação de arquivos Gerber para produção.",
        tags: ["KiCad", "Gerber", "2–4 camadas"],
      },
      fr: {
        title: "Conception\nde cartes",
        desc: "Routage de cartes imprimées : placement des composants, tracé des couches, préparation des fichiers Gerber pour la production.",
        tags: ["KiCad", "Gerber", "2–4 couches"],
      },
      de: {
        title: "Leiterplatten-\nentwurf",
        desc: "Leiterplattenlayout: Bauteilplatzierung, Lagenrouting, Aufbereitung der Gerber-Dateien für die Fertigung.",
        tags: ["KiCad", "Gerber", "2–4 Lagen"],
      },
      ar: {
        title: "تصميم\nاللوحات",
        desc: "توجيه لوحات الدوائر المطبوعة: توزيع المكوّنات، وتتبّع الطبقات، وإعداد ملفات Gerber للإنتاج.",
        tags: ["KiCad", "Gerber", "2–4 طبقات"],
      },
      ja: {
        title: "基板\n設計",
        desc: "プリント基板のレイアウト：部品配置、レイヤー配線、製造用 Gerber ファイルの準備。",
        tags: ["KiCad", "Gerber", "2〜4層"],
      },
      tr: {
        title: "Kart\ntasarımı",
        desc: "Baskılı devre kartı yerleşimi: bileşen konumlandırma, katman rotalama, üretim için Gerber dosyalarının hazırlanması.",
        tags: ["KiCad", "Gerber", "2–4 katman"],
      },
    },
  },
];
