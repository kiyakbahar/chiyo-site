import type { Metadata } from "next";
import { Baloo_2, Fredoka } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-thunder",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chiyo — Healthy Strawberry Chia Pudding",
  description:
    "Chiyo is a healthy mini pudding made with fresh strawberries, plain yogurt, chia seeds and homemade granola.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${baloo.variable} ${fredoka.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
