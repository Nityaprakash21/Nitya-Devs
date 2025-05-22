import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nitya Devs",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={twMerge(inter.variable, calistoga.variable)}>
      <body
        className="bg-gray-900 text-white antialiased"
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
