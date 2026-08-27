/**
 * Блог и новости бюро.
 *
 * i18n — полные переводы для остальных языков сайта, включая английский:
 *        у поста нет полей *En, поэтому английский тоже живёт в i18n.en.
 *        Ключи внутри повторяют имена полей, которые читают компоненты:
 *        category, title, excerpt, dateLabel, readTime (строки, pickLocalized)
 *        и content (массив абзацев, pickLocalizedList).
 *        slug, date, image и bgFallback не переводятся.
 */
export const BLOG_DATA = [
  {
    slug: "gostiny-dvor-2026",
    category: "Новости",
    title: "Kuznetsova Design на выставке в Гостином дворе",
    excerpt: "С 11 по 14 июня бюро представило часть портфолио на одной из главных выставочных площадок Москвы.",
    date: "2026-06-14",
    dateLabel: "11–14 июня 2026",
    readTime: "2 мин чтения",
    image: "/blog/blog-news1.jpg",
    bgFallback: "linear-gradient(135deg,#0a1628,#3864db)",
    content: [
      "С 11 по 14 июня команда Kuznetsova Design приняла участие в выставке в Гостином дворе — одной из самых узнаваемых исторических площадок Москвы, где традиционно проходят крупные отраслевые и культурные события.",
      "На стенде бюро были представлены работы из разных направлений: брендинг, веб-разработка и 3D-визуализация — то, чем мы занимаемся каждый день и что объединяет в одну историю.",
      "Формат живой выставки дал возможность показать процесс работы не только в виде готовых кейсов, но и через черновики, эскизы и промежуточные версии проектов — то, что обычно остаётся за кадром на сайте.",
      "Большое спасибо всем, кто подошёл к стенду, задавал вопросы и делился своими проектами — будем рады видеть вас среди наших клиентов.",
    ],
    i18n: {
      en: {
        category: "News",
        title: "Kuznetsova Design at the Gostiny Dvor exhibition",
        excerpt: "From 11 to 14 June the studio showed part of its portfolio at one of Moscow's principal exhibition venues.",
        dateLabel: "11–14 June 2026",
        readTime: "2 min read",
        content: [
          "From 11 to 14 June the Kuznetsova Design team took part in an exhibition at Gostiny Dvor — one of Moscow's most recognisable historic venues, and a traditional home for major industry and cultural events.",
          "The stand brought together work from every direction we practise: branding, web development and 3D visualisation — what we do every day and what we tie into a single story.",
          "A live exhibition made it possible to show the process itself, not only finished cases: drafts, sketches and intermediate versions of projects — the part that usually stays off the site.",
          "Thank you to everyone who came to the stand, asked questions and shared their own projects — we would be glad to see you among our clients.",
        ],
      },
      zh: {
        category: "新闻",
        title: "Kuznetsova Design 亮相 Gostiny Dvor 展会",
        excerpt: "6 月 11 日至 14 日，工作室在莫斯科主要展览场地之一展出了部分作品。",
        dateLabel: "2026 年 6 月 11–14 日",
        readTime: "2 分钟阅读",
        content: [
          "6 月 11 日至 14 日，Kuznetsova Design 团队参加了在 Gostiny Dvor 举办的展会——这是莫斯科最具辨识度的历史场地之一，重要的行业与文化活动历来在此举行。",
          "展台上呈现了我们各个方向的作品：品牌设计、网站开发与 3D 可视化——这些是我们每天所做的事，也被我们串成同一个故事。",
          "现场展览的形式让我们不只能展示完成的案例，还能通过草稿、手绘与项目的中间版本呈现工作过程——这些通常不会出现在网站上。",
          "衷心感谢每一位走到展台前、提出问题并分享自己项目的朋友——我们很期待在客户名单中见到你们。",
        ],
      },
      es: {
        category: "Noticias",
        title: "Kuznetsova Design en la exposición del Gostiny Dvor",
        excerpt: "Del 11 al 14 de junio el estudio presentó parte de su portfolio en uno de los principales espacios expositivos de Moscú.",
        dateLabel: "11–14 de junio de 2026",
        readTime: "2 min de lectura",
        content: [
          "Del 11 al 14 de junio el equipo de Kuznetsova Design participó en la exposición del Gostiny Dvor, uno de los espacios históricos más reconocibles de Moscú, donde se celebran tradicionalmente grandes eventos sectoriales y culturales.",
          "En el estand se presentaron trabajos de todas nuestras direcciones: branding, desarrollo web y visualización 3D, aquello que hacemos cada día y que reunimos en una sola historia.",
          "El formato de exposición en vivo permitió mostrar el proceso de trabajo no solo como casos terminados, sino también a través de borradores, bocetos y versiones intermedias de los proyectos, lo que normalmente queda fuera de la web.",
          "Muchas gracias a todos los que se acercaron al estand, hicieron preguntas y compartieron sus proyectos: nos alegrará verlos entre nuestros clientes.",
        ],
      },
      pt: {
        category: "Notícias",
        title: "Kuznetsova Design na exposição do Gostiny Dvor",
        excerpt: "De 11 a 14 de junho o estúdio apresentou parte do portfólio em um dos principais espaços expositivos de Moscou.",
        dateLabel: "11–14 de junho de 2026",
        readTime: "2 min de leitura",
        content: [
          "De 11 a 14 de junho a equipe da Kuznetsova Design participou da exposição no Gostiny Dvor, um dos espaços históricos mais reconhecíveis de Moscou, onde tradicionalmente acontecem grandes eventos setoriais e culturais.",
          "No estande foram apresentados trabalhos de todas as nossas frentes: branding, desenvolvimento web e visualização 3D — o que fazemos todos os dias e reunimos em uma só história.",
          "O formato da exposição ao vivo permitiu mostrar o processo de trabalho não apenas como casos prontos, mas também por meio de rascunhos, esboços e versões intermediárias dos projetos — o que normalmente fica fora do site.",
          "Muito obrigado a todos que vieram ao estande, fizeram perguntas e compartilharam seus projetos — teremos prazer em vê-los entre os nossos clientes.",
        ],
      },
      fr: {
        category: "Actualités",
        title: "Kuznetsova Design à l'exposition du Gostiny Dvor",
        excerpt: "Du 11 au 14 juin, le studio a présenté une partie de son portfolio dans l'un des principaux lieux d'exposition de Moscou.",
        dateLabel: "11–14 juin 2026",
        readTime: "2 min de lecture",
        content: [
          "Du 11 au 14 juin, l'équipe de Kuznetsova Design a participé à l'exposition du Gostiny Dvor, l'un des lieux historiques les plus reconnaissables de Moscou, qui accueille traditionnellement de grands événements sectoriels et culturels.",
          "Le stand réunissait des travaux issus de toutes nos disciplines : identité de marque, développement web et visualisation 3D — ce que nous faisons chaque jour et que nous rassemblons en une seule histoire.",
          "Le format d'une exposition vivante a permis de montrer le processus de travail non seulement à travers des projets achevés, mais aussi par des brouillons, des esquisses et des versions intermédiaires — ce qui reste d'ordinaire hors champ sur le site.",
          "Un grand merci à tous ceux qui sont venus au stand, ont posé des questions et partagé leurs propres projets — nous serons heureux de vous compter parmi nos clients.",
        ],
      },
      de: {
        category: "Nachrichten",
        title: "Kuznetsova Design auf der Ausstellung im Gostiny Dvor",
        excerpt: "Vom 11. bis 14. Juni zeigte das Studio einen Teil seines Portfolios an einem der wichtigsten Ausstellungsorte Moskaus.",
        dateLabel: "11.–14. Juni 2026",
        readTime: "2 Min. Lesezeit",
        content: [
          "Vom 11. bis 14. Juni nahm das Team von Kuznetsova Design an der Ausstellung im Gostiny Dvor teil — einem der bekanntesten historischen Orte Moskaus, an dem traditionell große Branchen- und Kulturveranstaltungen stattfinden.",
          "Am Stand waren Arbeiten aus allen unseren Richtungen zu sehen: Branding, Webentwicklung und 3D-Visualisierung — das, womit wir uns täglich beschäftigen und was wir zu einer Geschichte verbinden.",
          "Das Format einer Ausstellung vor Ort erlaubte es, den Arbeitsprozess nicht nur als fertige Cases zu zeigen, sondern auch über Entwürfe, Skizzen und Zwischenstände der Projekte — das, was auf der Website sonst unsichtbar bleibt.",
          "Vielen Dank an alle, die an den Stand kamen, Fragen stellten und ihre eigenen Projekte teilten — wir würden uns freuen, Sie unter unseren Kunden zu sehen.",
        ],
      },
      ar: {
        category: "أخبار",
        title: "Kuznetsova Design في معرض Gostiny Dvor",
        excerpt: "في الفترة من 11 إلى 14 يونيو، عرض الاستوديو جزءًا من أعماله في أحد أبرز أماكن المعارض في موسكو.",
        dateLabel: "11–14 يونيو 2026",
        readTime: "قراءة في دقيقتين",
        content: [
          "في الفترة من 11 إلى 14 يونيو، شارك فريق Kuznetsova Design في معرض أقيم في Gostiny Dvor — أحد أكثر المواقع التاريخية تميّزًا في موسكو، حيث تُقام تقليديًا كبرى الفعاليات القطاعية والثقافية.",
          "ضمّ الجناح أعمالًا من جميع مجالاتنا: الهوية التجارية، وتطوير الويب، والتصور ثلاثي الأبعاد — ما نعمل عليه كل يوم وما نجمعه في حكاية واحدة.",
          "أتاح المعرض الحيّ عرض مسار العمل لا عبر المشاريع المكتملة وحدها، بل أيضًا عبر المسودات والرسوم الأولية والنسخ الوسيطة — وهو ما يبقى عادةً خارج الموقع.",
          "شكرًا لكل من مرّ بالجناح وطرح أسئلته وشارك مشاريعه الخاصة — يسعدنا أن نراكم بين عملائنا.",
        ],
      },
      ja: {
        category: "ニュース",
        title: "Kuznetsova Design、Gostiny Dvor での展示会に出展",
        excerpt: "6月11日から14日まで、スタジオはモスクワを代表する展示会場のひとつでポートフォリオの一部を紹介しました。",
        dateLabel: "2026年6月11〜14日",
        readTime: "2分で読了",
        content: [
          "6月11日から14日にかけて、Kuznetsova Design のチームは Gostiny Dvor で開かれた展示会に参加しました。モスクワでもとりわけ知られた歴史的な会場で、大規模な業界イベントや文化行事が古くから開かれてきた場所です。",
          "ブースには、私たちのすべての領域の仕事を並べました：ブランディング、ウェブ開発、3Dビジュアライゼーション。日々取り組んでいることであり、ひとつの物語としてつなげているものです。",
          "実際の展示という形式のおかげで、完成したケースだけでなく、ラフ、スケッチ、プロジェクトの途中版を通して制作の過程まで見ていただけました。ふだんサイトには出てこない部分です。",
          "ブースにお越しいただき、質問を寄せ、ご自身のプロジェクトを共有してくださった皆さまに感謝します。クライアントとしてお会いできることを楽しみにしています。",
        ],
      },
      tr: {
        category: "Haberler",
        title: "Kuznetsova Design, Gostiny Dvor'daki sergide",
        excerpt: "11–14 Haziran tarihlerinde stüdyo, portfolyosunun bir bölümünü Moskova'nın başlıca sergi mekânlarından birinde sundu.",
        dateLabel: "11–14 Haziran 2026",
        readTime: "2 dk okuma",
        content: [
          "11–14 Haziran tarihlerinde Kuznetsova Design ekibi, Gostiny Dvor'da düzenlenen sergiye katıldı — büyük sektör ve kültür etkinliklerinin geleneksel olarak ağırlandığı, Moskova'nın en tanıdık tarihî mekânlarından biri.",
          "Standda tüm çalışma alanlarımızdan işler yer aldı: marka kimliği, web geliştirme ve 3D görselleştirme — her gün yaptığımız ve tek bir hikâyede birleştirdiğimiz şeyler.",
          "Canlı sergi formatı, çalışma sürecini yalnızca tamamlanmış işler üzerinden değil, taslaklar, eskizler ve projelerin ara sürümleri üzerinden de göstermeye imkân verdi — sitede genelde görünmeyen kısım.",
          "Standa uğrayan, soru soran ve kendi projelerini paylaşan herkese çok teşekkürler — sizi müşterilerimiz arasında görmekten memnuniyet duyarız.",
        ],
      },
    },
  },
];

export function getPostBySlug(slug) {
  return BLOG_DATA.find((p) => p.slug === slug) ?? null;
}

export function getAllPostSlugs() {
  return BLOG_DATA.map((p) => p.slug);
}
