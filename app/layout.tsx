import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800"],
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.avanzia.com.py"),
  title: "AvanzIA - Agente de Inteligencia Artificial para Ventas y Atención al Cliente",
  description:
    "Agente de inteligencia artificial para empresas en Paraguay. Respondé consultas 24/7, filtrá oportunidades reales y profesionalizá la atención al cliente. Gs. 1.950.000/mes.",
  icons: {
    icon: "/favicon.svg",
  },
  keywords: [
    "agente IA paraguay",
    "inteligencia artificial para empresas",
    "chatbot para ventas",
    "atención al cliente automatizada",
    "AvanzIA",
    "agente virtual",
    "asistente IA",
  ],
  openGraph: {
    title: "AvanzIA - Agente de IA para Ventas y Atención al Cliente",
    description:
      "Respondé consultas 24/7, filtrá oportunidades reales y profesionalizá la atención de tu empresa.",
    url: "https://www.avanzia.com.py",
    siteName: "AvanzIA",
    locale: "es_PY",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AvanzIA - Agente de Inteligencia Artificial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AvanzIA - Agente de IA para Ventas y Atención al Cliente",
    description:
      "Respondé consultas 24/7, filtrá oportunidades reales y profesionalizá la atención de tu empresa.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.avanzia.com.py",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AvanzIA",
    url: "https://www.avanzia.com.py",
    logo: "https://www.avanzia.com.py/favicon.svg",
    description:
      "Agente de inteligencia artificial para ventas y atención al cliente en Paraguay.",
    email: "contacto@avanzia.com.py",
    areaServed: {
      "@type": "Country",
      name: "Paraguay",
    },
    slogan: "Pensar. Ejecutar. Avanzar.",
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${heading.variable} ${body.variable} font-body antialiased`}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
