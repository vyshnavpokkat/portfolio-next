import type { Metadata, Viewport } from "next";
import { portfolio } from "@/data/portfolio";
import { InitialLoader } from "@/components/initial-loader";
import "./globals.css";
export const metadata: Metadata = {
  title: `${portfolio.name} — Full-Stack Developer`,
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
        alt: `${portfolio.name} — Full-Stack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.name} — Full-Stack Developer`,
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
      <body id="top">
        <InitialLoader />
        {children}
      </body>
    </html>
  );
}
