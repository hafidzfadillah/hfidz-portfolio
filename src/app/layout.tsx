import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
// import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hafidz - Software Engineer",
  description: "Portfolio website showcasing digital product design work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}