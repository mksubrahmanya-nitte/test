import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementBanner from "@/components/layout/AnnouncementBanner";
import FloatingWidgets from "@/components/layout/FloatingWidgets";
import AdmissionPopup from "@/components/layout/AdmissionPopup";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JG University | Best University in Ahmedabad",
  description: "Explore UG, PG, Doctoral, and Certificate programmes at JG University. Redesign by Antigravity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-gray-50 text-gray-900 relative">
        <FloatingWidgets />
        <AdmissionPopup />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
