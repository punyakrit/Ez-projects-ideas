import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppBar from "@/components/reusable/AppBar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ez Project Ideas - Generate Ideas",
  description: "Generated different project ideas with ease with Ez Project Ideas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <head>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-HYJDHR3L8V"
          ></Script>
          <Script id="google-analytics">
            {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-HYJDHR3L8V');`}
          </Script>
          <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1567175925424561"
     crossOrigin="anonymous"></Script>
        </head>
        <AppBar />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
