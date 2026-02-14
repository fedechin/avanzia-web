import type { Metadata } from "next";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "AvanzIA - Agente de Inteligencia Artificial",
  description:
    "Agente de Inteligencia Artificial para Ventas y Atención al Cliente. Automatiza tu negocio con IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
