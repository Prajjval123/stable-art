import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Provider from "./provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "StableArt - Generate Images for FREE",
  description:
    "Generate stunning images from text using AI models for free with StableArt. Turn your ideas into visual art instantly.",
  openGraph: {
    title: "StableArt - Free AI Image Generation",
    description: "Turn your text into images with our free AI-powered tool",
  },
  twitter: {
    card: "summary_large_image",
    title: "StableArt - Free AI Image Generation",
    description: "Turn your text into images with our free AI-powered tool",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative max-w-7px mx-auto`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Provider>
            <Header />
            {children}
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
