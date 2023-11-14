import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AuthProvider } from "@/context/AuthContext";
import NavBar from "@/components/header/NavBar";
import AppDrawer from "@/layout/AppDrawer";
import { Poppins, Paytone_One } from "next/font/google";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });
export const paytoone = Paytone_One({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creamidia Produtora audio visual",
  description: "A creamidia é uma produtora de audio e vídeo. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="creatheme" lang="pt-br" className="overflow-x-hidden">
      <body className={poppins.className}>
        <AuthProvider>
          <AppDrawer>
            <NavBar />
            {children}
          </AppDrawer>
        </AuthProvider>
      </body>
    </html>
  );
}
