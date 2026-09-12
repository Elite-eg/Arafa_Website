import type { Metadata } from "next";
import "../globals.css";
import { Inter, Outfit, IBM_Plex_Sans_Arabic } from "next/font/google";

import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import { getMessages } from "next-intl/server";
import type { AbstractIntlMessages } from "next-intl";
import Providers from "./providers/providers";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Al Jazira for Imdad Smart Company | MEP Contracting & Smart Systems",
    template: "%s | Al Jazira for Imdad Smart Company",
  },
  description:
    "Leading MEP construction company in the Gulf region with 45+ years of experience. General contracting, mechanical, electrical, plumbing, firefighting systems, and smart building solutions in KSA.",
  icons: {
    icon: "/favicon.ico.svg",
    shortcut: "/favicon.ico.svg",
    apple: "/favicon.ico.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Al Jazira for Imdad Smart Company",
  },
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale = routing.defaultLocale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages: AbstractIntlMessages = await getMessages({ locale });

  return (
    <html
      dir="ltr"
      lang={locale}
      className={`${inter.variable} ${outfit.variable} ${ibmArabic.variable}`}
    >
      <body className="font-sans bg-body text-content antialiased">
        <Providers locale={locale} messages={messages}>
          {children}
          <Toaster position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
