import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { StoreWrapper } from "@/contexts/storeContext";

const roboto = Roboto({ weight: "500", subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "Ramazanix",
  description: "Steam Forum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StoreWrapper>{children}</StoreWrapper>
      </body>
    </html>
  );
}
