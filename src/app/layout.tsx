import type { Metadata } from "next";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'
import { Header } from "./ui/layout/header";
import { Footer } from "./ui/layout/footer";
import { SmoothScrolling } from "./ui/smooth_scrolling";


export const metadata: Metadata = {
  title: "Daniel Tängerfors",
  description: "Portfolio website by Daniel Tängerfors. Frontend developer and UI Designer in Stockholm, Sweden.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/tgj4zdp.css"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#236bdc" />
      </head>
      <body className="antialiased text-black text-base">
        <SmoothScrolling>
          <Header />
          {children}
          <Footer />
        </SmoothScrolling>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
