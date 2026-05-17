import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import FloatingWidgets from "@/components/layout/FloatingWidgets";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// ??$$$ newer code
import AnnouncementBanner from "@/components/layout/AnnouncementBanner";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JG University | Best University in Ahmedabad",
  description: "Explore UG, PG, Doctoral, and Certificate programmes at JG University. Redesign by Antigravity.",
};

/*
// Old body structure commented out:
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-black relative">
        <FloatingWidgets />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
*/

// ??$$$ newer code
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-black relative">
        <FloatingWidgets />
        <AnnouncementBanner />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
