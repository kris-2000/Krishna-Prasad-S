import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Krishna Prasad S | Software Engineer",
  description: "Personal portfolio of Krishna Prasad S, an MCA student and aspiring Software Engineer specializing in Blockchain and Web Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body 
        className={cn(
          "min-h-screen bg-[#080808] bg-gradient-to-br from-[#080808] via-black to-[#080808] font-body antialiased",
          inter.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
