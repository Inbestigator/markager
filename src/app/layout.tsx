import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import Link from "next/link";
import { BookmarkIcon } from "lucide-react";
import User from "@/components/user";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Markager",
  description: "Load, save, and edit bookmarks across your devices.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <header className="flex h-14 items-center bg-gray-50 px-4 lg:px-6">
            <Link className="flex items-center justify-center" href="/">
              <BookmarkIcon className="h-6 w-6" />
              <span className="ml-2 text-2xl font-bold">Markager</span>
            </Link>
            <nav className="ml-auto">
              <Suspense>
                <User />
              </Suspense>
            </nav>
          </header>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
