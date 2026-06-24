import "./globals.css";
import { BecomeClientProvider } from "@/context/BecomeClientContext";

const SITE_URL = "https://kuznetsova.design";
const SITE_TITLE = "Kuznetsova Design — дизайн-бюро";
const SITE_DESCRIPTION =
  "Дизайн-бюро в Москве: брендинг, веб-дизайн и разработка, 3D и техническая документация. Полный цикл — от концепции до готового продукта.";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s | Kuznetsova Design",
  },

  description: SITE_DESCRIPTION,

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

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <BecomeClientProvider>
          {children}
        </BecomeClientProvider>
      </body>
    </html>
  );
}