import "./globals.css";

import { roboto_mono } from "@/app/fonts";

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
      </head>

      <body className={roboto_mono.className}>
        <AppProvider>
          <MainLayout>{children}</MainLayout>
        </AppProvider>
      </body>
    </html>
  );
}
