import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FurniFind - AI-Powered Furniture Discovery",
  description: "Discover furniture with AI-powered visual search. Upload any furniture image and find similar products from top stores like Wayfair, IKEA, Article, West Elm, and Pottery Barn.",
  keywords: ["furniture", "AI", "visual search", "home decor", "shopping"],
  authors: [{ name: "FurniFind" }],
  openGraph: {
    title: "FurniFind - AI-Powered Furniture Discovery",
    description: "Upload a furniture image and let our AI find similar products from top stores",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
