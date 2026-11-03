import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thedoghub.co.uk"),
  title: {
    default: "The Dog Hub | Biologically Appropriate 80/10/10 Raw Dog Food Shop in Sheffield",
    template: "%s | The Dog Hub — Raw Dog Food Co.",
  },
  description:
    "DEFRA-approved, vet-formulated 80/10/10 raw dog food made from 100% British & Irish grass-fed meat, bone, and offal. Visit us at 130 Halifax road, Sheffield, S6 1LH or order online.",
  keywords: [
    "raw dog food",
    "raw dog food Sheffield",
    "80 10 10 raw dog food",
    "BARF dog food UK",
    "natural dog food delivery",
    "biologically appropriate raw dog food",
    "grass fed beef raw dog food",
    "raw puppy food",
    "The Dog Hub",
  ],
  authors: [{ name: "The Dog Hub" }],
  creator: "The Dog Hub",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://thedoghub.co.uk",
    siteName: "The Dog Hub",
    title: "The Dog Hub | Ethical 80/10/10 Raw Dog Food in Sheffield & UK Delivery",
    description:
      "Switch your dog to ancestral raw nutrition. 100% human-grade British cuts, zero grains or fillers, available in Sheffield and delivered frozen across the UK.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Dog Hub | Biologically Appropriate Raw Dog Food",
    description:
      "DEFRA-approved 80/10/10 complete raw meals, meaty bones, and air-dried treats.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PetStore",
  name: "The Dog Hub",
  description:
    "DEFRA-approved 80/10/10 raw dog food shop offering human-grade British grass-fed raw meals, raw meaty bones, and natural air-dried dog treats.",
  url: "https://thedoghub.co.uk",
  telephone: "0730591742",
  email: "petsshop.sheffield@gmail.com",
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    streetAddress: "130 Halifax road",
    addressLocality: "Sheffield",
    postalCode: "S6 1LH",
    addressCountry: "GB",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:30",
      closes: "17:30",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plusJakarta.variable}`}>
      <body className="font-sans min-h-screen flex flex-col bg-cream-50 text-gray-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
