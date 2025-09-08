import { Questrial } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-questrial",
  display: "swap",
});

// Enhanced metadata for better SEO
export const metadata = {
  title: "Little Italy Pizza | Authentic Italian Pizzeria in New Oxford, PA",
  description: "Experience authentic Italian pizza made with traditional recipes and fresh ingredients. Family-owned since 1985. Visit us at 27 Stoney Point Rd, New Oxford, PA.",
  keywords: "Italian pizza, authentic pizza, New Oxford PA, family restaurant, wood-fired pizza, Italian cuisine, pasta, catering",
  authors: [{ name: "Little Italy Pizza" }],
  creator: "Little Italy Pizza",
  publisher: "Little Italy Pizza",
  robots: "index, follow",
  openGraph: {
    title: "Little Italy Pizza | Authentic Italian Pizzeria",
    description: "Family-owned authentic Italian pizzeria in New Oxford, PA since 1985. Dine-in or carryout.",
    url: "https://www.littleitalypizzapa.com",
    siteName: "Little Italy Pizza",
    images: [
      {
        url: "https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/banner-share-italy.png",
        width: 1200,
        height: 630,
        alt: "Little Italy Pizza - Authentic Italian Pizzeria",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Italy Pizza | Authentic Italian Pizzeria",
    description: "Family-owned authentic Italian pizzeria in New Oxford, PA since 1985.",
    images: ["https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/banner-share-italy.png"],
    site: "@littleitalypa", // Reemplaza con tu usuario de Twitter si tienes
  },
  verification: {
    google: "your-google-verification-code", // Add your actual verification code
  },
  alternates: {
    canonical: "https://www.littleitalypizzapa.com",
  },
};

// Structured data for local business (JSON-LD)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  'name': 'Little Italy Pizza',
  'image': 'https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/banner-share-italy.png',
  '@id': 'https://www.littleitalypizzapa.com',
  'url': 'https://www.littleitalypizzapa.com',
  'telephone': '+1-717-624-6280', // Número actualizado
  'priceRange': '$$',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': '27 Stoney Point Rd',
    'addressLocality': 'New Oxford',
    'addressRegion': 'PA',
    'postalCode': '17350',
    'addressCountry': 'US'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 39.8635, // Add your actual coordinates
    'longitude': -77.0566 // Add your actual coordinates
  },
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Tuesday', 'Wednesday', 'Thursday'],
      'opens': '11:00',
      'closes': '21:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Friday', 'Saturday'],
      'opens': '11:00',
      'closes': '21:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': 'Sunday',
      'opens': '12:00',
      'closes': '21:00'
    }
  ],
  'servesCuisine': 'Italian',
  'menu': 'https://www.littleitalypizzapa.com/menu'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Metaetiquetas esenciales para redes sociales */}
        <meta property="og:title" content="Little Italy Pizza | Authentic Italian Pizzeria in New Oxford, PA" />
        <meta property="og:description" content="Experience authentic Italian pizza made with traditional recipes and fresh ingredients. Family-owned since 1985." />
        <meta property="og:image" content="https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/banner-share-italy.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.littleitalypizzapa.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Little Italy Pizza" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Little Italy Pizza | Authentic Italian Pizzeria" />
        <meta name="twitter:description" content="Family-owned authentic Italian pizzeria in New Oxford, PA since 1985." />
        <meta name="twitter:image" content="https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/banner-share-italy.png" />

        {/* WhatsApp específico */}
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Little Italy Pizza - Authentic Italian Pizzeria" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className={`${questrial.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}