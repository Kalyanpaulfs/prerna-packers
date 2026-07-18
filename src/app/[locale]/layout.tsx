import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: {
    default: "Prerna Packers and Movers | Premium Relocation Services",
    template: "%s | Prerna Packers and Movers",
  },
  description: "Prerna Packers and Movers provides premium, safe, and reliable home and office relocation services across India. Get a free instant quote today.",
  keywords: ["Packers and Movers", "Relocation", "Munger", "Bihar", "India", "Home Shifting", "Office Shifting"],
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const resolvedParams = await params;
  
  if (!routing.locales.includes(resolvedParams.locale as any)) {
    notFound();
  }

  const messages = await getMessages({ locale: resolvedParams.locale });

  return (
    <html lang={resolvedParams.locale} className="scroll-smooth">
      <body className={`${jakarta.className} bg-white text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900`}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingButtons />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
