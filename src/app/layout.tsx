import type { Metadata } from "next";
import { AuthProvider } from "@/context/AuthContext";
import NavBar from "@/components/header/NavBar";
import { Poppins, Paytone_One } from "next/font/google";
import "./globals.css";

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
    <html data-theme="creatheme" lang="pt-br">
      <body className={`${poppins.className} ${paytoone.className} `}>
        <AuthProvider>
          <NavBar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
