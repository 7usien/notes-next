import type { Metadata } from "next";
import { Pacifico, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from '@/components/header'
import Footer from '@/components/footer'

const openSans = Open_Sans({ weight: ['400'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daily Notes",
  description: "your trusted daily notes partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={openSans.className}>

        <Header />

        {children}
      
      <Footer />
      </body>
    </html>
  );
}
