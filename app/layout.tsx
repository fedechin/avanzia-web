import type { Metadata } from "next";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "AvanzIA - Agente de Inteligencia Artificial para Ventas y Atención al Cliente",
  description:
    "Agente de inteligencia artificial para empresas en Paraguay. Respondé consultas 24/7, filtrá oportunidades reales y profesionalizá la atención al cliente. Gs. 1.950.000/mes.",
  keywords: [
    "agente IA paraguay",
    "inteligencia artificial para empresas",
    "chatbot para ventas",
    "atención al cliente automatizada",
    "AvanzIA",
  ],
  openGraph: {
    title: "AvanzIA - Agente de IA para Ventas y Atención al Cliente",
    description:
      "Respondé consultas 24/7, filtrá oportunidades reales y profesionalizá la atención de tu empresa con inteligencia artificial.",
    url: "https://www.avanzia.com.py",
    siteName: "AvanzIA",
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AvanzIA - Agente de IA para Ventas y Atención al Cliente",
    description:
      "Respondé consultas 24/7, filtrá oportunidades reales y profesionalizá la atención de tu empresa con inteligencia artificial.",
  },
  robots: {
    index: true,
    follow: true,
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
    description:
      "Agente de inteligencia artificial para ventas y atención al cliente en Paraguay.",
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
