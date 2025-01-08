// app/layout.js
"use client";
import Header from "@/components/Header";
import "./globals.css"; // Your global styles
import { Roboto, Ropa_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Mailer from "@/components/Mailer";
import { useState } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-roboto", // Optional for CSS variable
});

const ropaSans = Ropa_Sans({
  subsets: ["latin"],
  weight: ["400"], // Ropa Sans has fewer weight options
  style: ["normal", "italic"],
  variable: "--font-ropa-sans", // Optional for CSS variable
});

export default function RootLayout({ children }) {
  const [isExpand, setIsExpand] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <html lang="en" className={`${ropaSans.variable} bg-dark-purple-100`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/icon.ico" type="image/x-icon" sizes="200x256" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <title>rumoogle</title>

        <meta property="og:title" content="Rumoogle" />
        <meta property="og:description" content="everything you'll ever need" />
        <meta property="og:image" content="/head-shot.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rumoogle" />
        <meta name="twitter:description" content="Rumeza Fatima's Archive" />
        <meta name="twitter:image" content="/Banner.png" />
      </head>
      <body className="flex flex-col min-h-screen relative">
        <Header setShowMailer={setIsOpen} />

        <main className="flex-grow flex">
          <div className="w-full">{children}</div>
        </main>
        {isOpen && (
          <div
            className={`${
              isExpand
                ? "fixed inset-0 bg-gray-900 bg-opacity-70 z-40 flex items-center justify-center"
                : "fixed inset-0 bg-gray-900 bg-opacity-7 flex items-center justify-center md:block  md:bg-transparent md:inset-auto md:bottom-0 md:right-0 shadow-2xl"
            } `}
            style={{ zIndex: 100 }}
          >
            <Mailer
              isExpand={isExpand}
              isOpen={isOpen}
              setIsExpand={setIsExpand}
              setIsOpen={setIsOpen}
            />
          </div>
        )}
        <Footer />
      </body>
    </html>
  );
}
