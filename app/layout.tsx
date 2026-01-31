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
  description: "Discover furniture with AI-powered visual search. Upload any furniture image and find similar products from Wayfair, Maisons du Monde, La Redoute, Etsy, and 50+ European retailers via AWIN and CJ Affiliate networks.",
  keywords: ["furniture", "AI", "visual search", "home decor", "shopping", "Wayfair", "Maisons du Monde", "La Redoute", "Etsy", "European furniture"],
  authors: [{ name: "FurniFind" }],
  openGraph: {
    title: "FurniFind - AI-Powered Furniture Discovery",
    description: "Upload a furniture image and let our AI find similar products from Wayfair, Maisons du Monde, La Redoute, and 50+ European retailers",
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
