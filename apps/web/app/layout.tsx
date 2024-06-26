import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppBar from "../components/AppBar";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          {/* attach the app bar here so it will visible everywhere in application */}
          <AppBar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
