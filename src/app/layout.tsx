import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  OG_IMAGE,
  LOCALE,
} from "./constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s — Nexify Webworks",
    default:
      "Nexify Webworks | Freelance React Development, WordPress (Elementor & ACF) & UI/UX Design",
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  classification: "Web Development Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: LOCALE,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Nexify Webworks | React, WordPress (Elementor & ACF) & UI/UX Design Specialist",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Nexify Webworks — Freelance React, WordPress & UI/UX Design Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexify Webworks | React, WordPress (Elementor & ACF) & UI/UX Design",
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/nexify-logo.png", type: "image/png" }
    ],
    apple: [
      { url: "/favicon.png", type: "image/png" }
    ]
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0f17",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      description:
        "Freelance website development using React, custom WordPress website design with Elementor & Advanced Custom Fields (ACF), custom block themes, and Figma UI/UX design.",
      url: SITE_URL,
      priceRange: "$$",
      areaServed: ["India", "United States", "United Kingdom", "Worldwide"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rajkot",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      knowsAbout: [
        "Website development using React",
        "Website design in WordPress",
        "Website design using Elementor",
        "Advanced Custom Fields (ACF) WordPress integration",
        "Custom WordPress block theme development",
        "Figma UI-UX design and prototype",
        "Core Web Vitals and Google Crawl Speed Optimization",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Freelance Web Engineering & Design Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Development using React & Next.js",
              description:
                "Custom high-speed React web applications built with TypeScript, Tailwind CSS, and optimized Core Web Vitals.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Design in WordPress (Elementor & ACF)",
              description:
                "Pixel-perfect WordPress theme development using Elementor Pro, Advanced Custom Fields (ACF), custom post types, and speed optimization.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom WordPress Block Theme Development",
              description:
                "Bespoke Gutenberg block themes built with Full Site Editing (FSE), custom block patterns, theme.json design tokens, and zero page builder bloat.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Figma UI/UX Design",
              description:
                "User-centered UI/UX design, interactive Figma prototypes, design systems, and mobile-first website layouts.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO & Core Web Vitals Optimization",
              description:
                "Technical SEO audits, search crawl optimization, LCP/INP/CLS speed tuning, and JSON-LD Schema graph injection.",
            },
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "48",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0b0f17] text-slate-100 antialiased min-h-screen flex flex-col selection:bg-indigo-500 selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:left-4 focus:top-4 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-indigo-600 focus:text-white"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main
          id="main-content"
          tabIndex={-1}
          className="flex-grow flex flex-col"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
