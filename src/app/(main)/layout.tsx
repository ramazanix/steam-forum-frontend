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
      <main className="pt-20">{children}</main>
    </AuthProvider>
  );
}
