"use client";

import { Header } from "@/components/Header";
import { AuthProvider } from "@/contexts/AuthContext";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <Header />
      <main className="mt-40 px-[7%]">{children}</main>
    </AuthProvider>
  );
}
