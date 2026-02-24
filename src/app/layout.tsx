import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "REJECTED™ | Kill Your Fear",
  description: "Collect 100 Rejections. Kill Your Fear. A psychology-grounded exposure therapy SaaS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-black text-slate-50 antialiased min-h-screen selection:bg-cyan-900 selection:text-cyan-50`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
