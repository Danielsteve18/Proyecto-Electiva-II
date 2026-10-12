import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sabor al Instante",
    template: "%s · Sabor al Instante",
  },
  description:
    "Sabor al Instante: menú, reservas y contacto. Sistema de gestión para el restaurante.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
