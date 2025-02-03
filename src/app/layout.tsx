import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
// import { ThemeProvider } from 'next-themes';

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
      {/* <ThemeProvider attribute="class"> */}
        <body className={`${inter.className} bg-white text-gray-900`}>
          {/* <Navbar /> */}
          {children}
        </body>
      {/* </ThemeProvider> */}
    </html>
  );
}