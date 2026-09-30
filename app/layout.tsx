import type { Metadata, Viewport } from "next";
import { portfolio } from "@/data/portfolio";
import "./globals.css";
export const metadata: Metadata = {
  title: `${portfolio.name} — Software Engineer & Frontend Developer`,
  description: portfolio.description,
  applicationName: `${portfolio.name} Portfolio`,
  openGraph: {
    title: `${portfolio.name} — Thoughtful code. Human experiences.`,
    description: portfolio.description,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${portfolio.name} — Software Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.name} — Software Engineer`,
    description: portfolio.description,
  },
  robots: { index: true, follow: true },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "http://localhost:3000"),
  ),
};
export const viewport: Viewport = { themeColor: "#f7f6f2" };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">{children}</body>
    </html>
  );
}
