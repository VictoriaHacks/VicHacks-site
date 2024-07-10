import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const bernoru = localFont({
  src: "./../assets/fonts/bernoru.woff2",
  display: "swap",
  variable: "--font-bernoru",
});

export const metadata: Metadata = {
  title: "VICHACK",
  description: "Victoria's premier hackathon, shape the future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${bernoru.variable}`}>
      <body>{children}</body>
    </html>
  );
}
