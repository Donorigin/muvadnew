import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SanityLive } from "@/sanity/lib/live";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Muvad Consults - Win More Contracts with Our NO-COST Estimating Services",
  description:
    "We help subcontractors secure more profitable projects with our comprehensive take-offs, estimating, and proposal services - with no upfront costs.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className={plusJakartaSans.className}>
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
