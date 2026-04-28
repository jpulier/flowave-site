import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flowave.co"),
  title: {
    default: "Flowave | AI-Native Lead Generation at Scale",
    template: "%s | Flowave",
  },
  description:
    "Flowave deploys autonomous AI systems that turn organic attention into qualified leads at scale. Performance lead generation infrastructure for high-value verticals.",
  keywords: [
    "AI lead generation",
    "performance lead generation",
    "autonomous AI marketing",
    "organic distribution",
    "lead generation infrastructure",
    "AI customer acquisition",
    "performance marketing",
  ],
  alternates: { canonical: "https://flowave.co" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Flowave",
    title: "Flowave | AI-Native Lead Generation at Scale",
    description:
      "Flowave deploys autonomous AI systems that turn organic attention into qualified leads at scale.",
    url: "https://flowave.co",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Flowave — AI-Native Lead Generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowave | AI-Native Lead Generation at Scale",
    description:
      "Flowave deploys autonomous AI systems that turn organic attention into qualified leads at scale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-[family-name:var(--font-inter)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
