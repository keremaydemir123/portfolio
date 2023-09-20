import "./globals.css";

import { inter } from "@/app/fonts";
import { Analytics } from "@vercel/analytics/react";

import AppProvider from "@/contexts/AppProvider";
import MainLayout from "@/components/MainLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dracula">
      <head>
        <meta charSet="utf-8" />
        <title>keremaydemir.com</title>
        <meta name="description" content="Personal website of Kerem Aydemir" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>

      <body
        className={`${inter.className} bg-gradient-to-tr from-slate-900 to-slate-800 overflow-y-auto min-h-max`}
      >
        <Analytics />
        <AppProvider>
          <MainLayout>{children}</MainLayout>
        </AppProvider>
      </body>
    </html>
  );
}
