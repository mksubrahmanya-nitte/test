import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import FloatingWidgets from "@/components/layout/FloatingWidgets";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// ??$$$ newer code: AnnouncementBanner removed — merged into unified Navbar
// import AnnouncementBanner from "@/components/layout/AnnouncementBanner";
// ??$$$ newer code
import Splash from "@/components/layout/Splash";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});



// ??$$$ newer code - High-fidelity SEO meta tags, Facebook Meta Pixel, and Google Tag Manager
import Script from "next/script";

export const metadata: Metadata = {
  title: "JG University ~ Best MBA, BBA, MCA, BCA, MSC (IT), B.Com and M.com Courses in Ahmedabad, Gujarat, Best University and Colleges in Ahmedabad",
  description: "JG University is one of the best Commerce and MBA College in Ahmedabad, Gujarat. We provide Under Graduate, Post Graduate, Diploma and research courses like MBA, BBA, MCA, BCA, MSC (IT), B.Com and M.com  in Ahmedabad, Gujarat, India.",
  keywords: "mba courses in ahmedabad, commerce courses in ahmedabad, bba courses in ahmedabad, mca courses in ahmedabad, msc (iT) courses in Ahmedabad, b.com courses in ahmedabad, m.com courses in ahmedabad, Gujarat",
  authors: [{ name: "Best Commerce College in Ahmedabad, Gujarat, Best MbA, BBA, BCA, MCA, MSc It, M.com, B.com Courses in Ahmedabad, Gujarat, Post Graduate Programs to Help UP Skill, JG University" }],
  other: {
    "distribution": "Global",
    "development": "jguni.in",
    "revisit-after": "3 days",
    "product": "Best Commerce College in Ahmedabad, Gujarat, Best MbA, BBA, BCA, MCA, MSc It, M.com, B.com Courses in Ahmedabad, Gujarat, Post Graduate Programs to Help UP Skill, JG University",
    "robots": "FOLLOW,INDEX",
    "Content-Language": "EN"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased scroll-smooth`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MHTSZRBR');`}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="fb-pixel-script" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '176877808507968');
          fbq('track', 'PageView');`}
        </Script>
        {/* ??$$$ newer code */}
        <link rel="stylesheet" href="/mobile.css" media="(max-width: 768px)" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-black relative">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MHTSZRBR"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Meta Pixel Code (noscript) */}
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=176877808507968&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Splash />
        <FloatingWidgets />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
