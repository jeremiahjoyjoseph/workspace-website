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
  title: {
    default: "BHive Workspace",
    template: "%s | BHive Workspace",
  },
  description:
    "BHive Workspace - Your premier coworking space solution. Find the perfect workspace for your business needs.",
  keywords: [
    "coworking space",
    "workspace",
    "office space",
    "business center",
    "BHive",
  ],
  authors: [{ name: "Jeremiah Joy Joseph" }],
  creator: "Jeremiah Joy Joseph",
  publisher: "BHive",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bhive-workspace.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BHive Workspace",
    description: "Your premier coworking space solution",
    url: "https://bhive-workspace.vercel.app",
    siteName: "BHive Workspace",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BHive Workspace",
    description: "Your premier coworking space solution",
    creator: "@bhiveworkspace",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
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
