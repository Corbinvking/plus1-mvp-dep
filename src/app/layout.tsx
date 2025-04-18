import type { Metadata } from "next";
import { Inter as Geist } from "next/font/google";
import { Source_Code_Pro as GeistMono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from '@/providers/AuthProvider'
import { ProgressProvider } from '@/providers/ProgressProvider'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = GeistMono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plus1 MVP",
  description: "Learn and grow with Plus1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <ProgressProvider>
            {children}
          </ProgressProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
