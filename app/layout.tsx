import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { createClient } from '@/lib/supabase/server';
export const metadata: Metadata = {
  title: {
    default: "Sabor al Instante",
    template: "%s · Sabor al Instante",
  },
  description:
    "Sabor al Instante: menú, reservas y contacto. Sistema de gestión para el restaurante.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
  return (
    <html lang="es" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
       <Header isLoggedIn={!!user} />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
