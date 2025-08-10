import type { Metadata } from "next";
import { Crimson_Text, Roboto, Kalam } from "next/font/google";
import "./globals.css";
import Header from "@/components/molecules/Header";
import Nav from "@/components/organisms/Nav";
import Footer from "@/components/organisms/Footer";
import Announcement from "@/components/molecules/Announcement";

const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Amanda Brookfield | Best-Selling Novelist",
  description: "Meet me, Amanda Brookfield and my page-turning emotional bestsellers.",
  icons: {
    icon: [
      { url: '/images/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/images/favicons/favicon-64x64.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${crimsonText.variable} ${roboto.variable} ${kalam.variable} antialiased min-h-screen grid grid-rows-[auto_auto_1fr_auto]`}>
        <Header />
        <Nav />
        <main>{children}</main>
        <Footer />
        <Announcement />
      </body>
    </html>
  );
}
