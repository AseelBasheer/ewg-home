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
  title: "East West Global LLC | Data Automation & Digital Transformation",
  description:
    "East West Global LLC specializes in data automation and digital transformation of commercial attachments — building secure, unified platforms for government agencies and overseas commercial entities.",
  keywords: [
    "data automation",
    "digital transformation",
    "commercial attachments",
    "workflow automation",
    "business process automation",
    "East West Global",
  ],
  openGraph: {
    title: "East West Global LLC | Data Automation & Digital Transformation",
    description:
      "Advanced technical solutions for information management, workflow automation, and digital systems for commercial attachments.",
    url: "https://ewglobal-llc.com",
    siteName: "East West Global LLC",
    type: "website",
    images: [{ url: "/logo.jpg", width: 800, height: 600, alt: "East West Global LLC" }],
  },
  icons: {
    icon: "/logo.jpg",
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
