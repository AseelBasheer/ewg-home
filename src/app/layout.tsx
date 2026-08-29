import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ewglobal-llc.com"),
  title: "East West Global LLC | Digital Infrastructure for Trade & Enterprise",
  description:
    "East West Global LLC designs secure digital platforms that automate complex operations, connect organizations, and transform data into intelligent business processes.",
  keywords: [
    "digital infrastructure",
    "trade technology",
    "trade automation",
    "customs automation",
    "workflow automation",
    "business intelligence",
    "East West Global",
  ],
  openGraph: {
    title: "East West Global LLC | Digital Infrastructure for Trade & Enterprise",
    description:
      "Secure digital platforms for international trade, customs automation, and enterprise operations.",
    url: "https://ewglobal-llc.com",
    siteName: "East West Global LLC",
    type: "website",
    images: [{ url: "/logo.png", width: 1774, height: 887, alt: "East West Global LLC" }],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
