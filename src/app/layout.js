import { Cormorant_Garamond, DM_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { BecomeClientProvider } from "@/context/BecomeClientContext";

const SITE_URL = "https://kuznetsova.design";
const SITE_TITLE = "Kuznetsova Design — дизайн-бюро в Москве";
const SITE_DESCRIPTION =
  "Дизайн-бюро Kuznetsova Design в Москве: разработка сайтов, создание логотипов и фирменного стиля, брендинг, 3D-визуализация и SMM. Полный цикл — от концепции до готового продукта.";

// ─── Шрифты: next/font вместо @import — self-hosted, без блокирующего запроса ───
// Важно: у DM Sans и Bebas Neue в Google Fonts нет кириллического набора —
// подключаем только latin (как и раньше), кириллический текст идёт через
// системный fallback-шрифт. См. рекомендацию в SEO-документе про замену
// основного шрифта текста на кириллице.
const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "600"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bold",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s | Kuznetsova Design",
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "дизайн-бюро",
    "дизайн-бюро Москва",
    "разработка сайтов",
    "разработка сайтов на заказ",
    "создание логотипа",
    "создание логотипа на заказ",
    "фирменный стиль",
    "брендинг",
    "веб-дизайн",
    "3D-визуализация",
    "SMM дизайн",
    "заказать сайт",
    "заказать логотип",
  ],

  authors: [{ name: "Kuznetsova Design", url: SITE_URL }],
  creator: "Kuznetsova Design",
  publisher: "Kuznetsova Design",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Заполняются кодами подтверждения из Google Search Console / Яндекс.Вебмастер
  // через переменные окружения — тег появится в <head> сам, без правок кода.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    yandex: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION || undefined,
  },

  icons: {
    icon: [
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: "Kuznetsova Design",
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

// ─── Структурированные данные Organization/ProfessionalService — на весь сайт ───
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Organization"],
  "@id": `${SITE_URL}/#organization`,
  name: "Kuznetsova Design",
  alternateName: "Дизайн-бюро Kuznetsova Design",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-b.svg`,
  image: `${SITE_URL}/opengraph-image`,
  description: SITE_DESCRIPTION,
  email: "kristina@kuznetsova.design",
  telephone: "+7-968-500-26-66",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Москва",
    addressCountry: "RU",
  },
  areaServed: [
    { "@type": "City", name: "Москва" },
    { "@type": "Country", name: "Россия" },
  ],
  founder: {
    "@type": "Person",
    name: "Кристина Кузнецова",
    jobTitle: "Основатель · Арт-директор",
  },
  sameAs: [
    "https://www.instagram.com/kuznetsovade.sign",
    "https://www.behance.net/kristinkuznets17",
    "https://pin.it/sMiIQLlD7",
    "https://t.me/kuznetsova_design1",
    "https://vk.ru/club239423173",
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Брендинг и фирменный стиль" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Разработка сайтов" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "3D и моушн-дизайн" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "SMM и контент для соцсетей" } },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Kuznetsova Design",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "ru-RU",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ru"
      className={`${cormorant.variable} ${dmSans.variable} ${bebasNeue.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        <BecomeClientProvider>
          {children}
        </BecomeClientProvider>
      </body>
    </html>
  );
}
