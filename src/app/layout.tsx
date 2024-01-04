import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./components/AuthProvider";
import { isloggedInServer } from "../../utils/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nBud",
  description: "nBud",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await isloggedInServer();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>nBud</title>
        <meta name="description" content="nBud " />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <AuthProvider>
        <body className={inter.className}>{children}</body>
      </AuthProvider>
    </html>
  );
}
