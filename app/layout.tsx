import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Tomas J. Santos Yciano | Full-Stack Engineer",
  description: "Explore the journey of Tomas J. Santos Yciano, a full-stack engineer dedicated to mastering both front-end and back-end development. Discover his passion for technology and commitment to excellence in software engineering.",
  icons: {
    icon: '/tsy_logo.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${jetbrainsMono.className}`}
      >
        {children}
      </body>
    </html>
  );
}
