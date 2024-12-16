import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import useisLogin from "@/src/hooks/isLogin";
import LaNav from "@/src/components/LaNav/LaNav";
import InNav from "@/src/components/InNav/InNav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "IMATQ - Math Contests and Logical Learning",
  description:
    "IMATQ is an engaging platform for students to participate in math contests and practice logical mathematics. Boost your skills with fun challenges and interactive learning!",
  keywords: [
    "math contests",
    "logical mathematics",
    "interactive learning",
    "math practice",
    "IMATQ",
    "fun challenges",
    "student math platform",
  ],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://imatq.com",
    title: "IMATQ - Math Contests and Logical Learning",
    description:
      "Join IMATQ for fun and engaging math contests! Practice logical mathematics and challenge yourself with interactive learning tools.",
    images: [
      {
        url: "https://imatq.com/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "IMATQ Platform",
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@IMATQ",
  //   title: "IMATQ - Math Contests and Logical Learning",
  //   description:
  //     "Boost your math skills with IMATQ! Participate in math contests, practice logical mathematics, and enjoy interactive learning.",
  // },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLogin = await useisLogin();
console.log(isLogin)
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isLogin ? (
              <InNav />
            ) : (
              <LaNav />
      )}
        {children}
      </body>
    </html>
  );
}
