import type { Metadata } from "next";
import "./globals.css";
import { FavoriteProvider } from "./contexts/FavoritesContext";

export const metadata: Metadata = {
  title: "Product Explorer",
  description: "A product explorer built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <FavoriteProvider>{children}</FavoriteProvider>
      </body>
    </html>
  );
}
