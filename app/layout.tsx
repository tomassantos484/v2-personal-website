import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CalendlyWidget from './components/CalendlyWidget';
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/react";
import StructuredData from './components/StructuredData';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//Primary Font
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tjsy.dev'),
  title: "Tomas J. Santos Yciano | Full-Stack Engineer",
  description: "Full-stack engineer and Fast Track B.S./M.S. student at St. John's University. Experience with EY and Headstarter. Specializing in AI, web development, and software engineering.",
  keywords: [
    "Tomas Santos Yciano",
    "Full Stack Engineer",
    "Software Engineer",
    "St. John's University",
    "Computer Science",
    "Data Science",
    "EY Launch Intern",
    "Headstarter Fellow",
    "AI Development",
    "Web Development",
    "AI-Powered Discord Bot",
    "Codetionary",
  ],
  authors: [{ name: "Tomas J. Santos Yciano" }],
  creator: "Tomas J. Santos Yciano",
  publisher: "Tomas J. Santos Yciano",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.tjsy.dev",
    siteName: "Tomas J. Santos Yciano",
    title: "Tomas J. Santos Yciano | Full-Stack Engineer",
    description: "Full-stack engineer and Fast Track B.S./M.S. student at St. John's University. Experience with EY and Headstarter. Specializing in AI, web development, and software engineering.",
    images: [
      {
        url: "/tsy_pic.jpg",
        width: 1200,
        height: 630,
        alt: "Tomas J. Santos Yciano"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomas J. Santos Yciano | Full-Stack Engineer",
    description: "Full-stack engineer and Fast Track B.S./M.S. student at St. John's University. Experience with EY and Headstarter. Specializing in AI, web development, and software engineering.",
    creator: "@TomasJSantosY",
    images: ["/tsy_pic.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JK7GSWTQC2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-JK7GSWTQC2');
          `}
        </Script>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <StructuredData />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased ${jetbrainsMono.className}`} suppressHydrationWarning>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TWRP4DR9" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
        <CalendlyWidget />
        {children}
        <Analytics />
        <StructuredData />
      </body>
    </html>
  );
}
