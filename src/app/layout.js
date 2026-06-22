import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://kuznetsova.design"),

  title: {
    default: "Kuznetsova Design Bureau",
    template: "%s | Kuznetsova Design Bureau",
  },

  description:
    "Premium design studio focused on branding, web development and digital experiences.",

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
    title: "Kuznetsova Design Bureau",
    description:
      "Premium design studio focused on branding and web development.",
    type: "website",
    locale: "en_US",
    url: "https://kuznetsova-design.com",
    siteName: "Kuznetsova Design Bureau",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}