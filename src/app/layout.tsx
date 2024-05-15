import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { Navbar } from "@/components";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Blog",
  description: "Prueba Tecnica Frontend Usando Next js 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-white `}>
        <ToastContainer />
        <Navbar />
        <div className="md:px-10">
          {children}
        </div>
      </body>
    </html>
  );
}
