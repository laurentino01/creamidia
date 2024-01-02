import type { Metadata } from "next";
import { AuthProvider } from "@/context/AuthContext";

import { Poppins, Paytone_One } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] });
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
    <html lang="pt-br">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={`${poppins.className} ${paytoone.className} `}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
