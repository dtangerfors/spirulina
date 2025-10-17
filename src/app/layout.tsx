import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
// Supports weights 400-800
import '@fontsource-variable/eb-garamond';
import '@fontsource-variable/eb-garamond/wght-italic.css';
import '@fontsource/aileron/400.css';
import '@fontsource/aileron/400-italic.css';
import '@fontsource/aileron/800.css';
import '@fontsource/aileron/800-italic.css';
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
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
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#236bdc" />
      </head>
      <GoogleTagManager gtmId="GTM-WP8KW96" />
      <body className="flex flex-col min-h-svh antialiased text-black text-base">
        <SmoothScrolling>
          <Header key={"body-header"} />
          <div key={"body-main"}>
            {children}
          </div>
          <Footer key={"body-footer"} />
        </SmoothScrolling>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
