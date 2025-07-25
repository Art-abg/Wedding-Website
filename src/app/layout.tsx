import type { Metadata } from "next";
import { Geist, Geist_Mono, Parisienne, Cormorant_Garamond, Dancing_Script } from "next/font/google";
import "./globals.css";
import I18nProvider from "@/components/providers/I18nProvider";
import GlobalAudioPlayer from '@/components/ui/GlobalAudioPlayer';
import { getCurrentLocale } from "@/locales/server";

// Force dynamic rendering to bypass static export errors
export const dynamic = 'force-dynamic';

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const parisienne = Parisienne({
  variable: "--font-parisienne",
  weight: "400",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anna & Artur's Wedding",
  description: "Join us for the celebration of Anna & Artur's wedding.",
  icons: {
    icon: '/restaurant-icon.PNG',
    apple: '/restaurant-icon.PNG',
  },
  openGraph: {
    title: "Anna & Artur's Wedding",
    description: "Join us for the celebration of Anna & Artur's wedding.",
    images: ['/restaurant-icon.PNG'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Anna & Artur's Wedding",
    description: "Join us for the celebration of Anna & Artur's wedding.",
    images: ['/restaurant-icon.PNG'],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let locale = await getCurrentLocale();
  if (!locale) locale = 'en';

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${geist.variable} ${geistMono.variable} ${parisienne.variable} ${cormorant.variable} ${dancingScript.variable} font-sans antialiased bg-cream-100`}>
        <I18nProvider locale={locale}>
          {children}
          <GlobalAudioPlayer />
        </I18nProvider>
      </body>
    </html>
  );
}
