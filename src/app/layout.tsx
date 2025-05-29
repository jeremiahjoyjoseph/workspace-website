import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BHive Workspace",
  description: "Developed by Jeremiah Joy Joseph",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#F9FAFF] [&::-webkit-scrollbar-thumb]:bg-[#ffcf4b] [&::-webkit-scrollbar-thumb]:rounded-full`}
      >
        <Header />
        <main className="bg-[#F9FAFF]">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
