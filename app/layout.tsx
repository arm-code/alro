import "./globals.css";
import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";

//const inter = Inter({ subsets: ["latin"] });
const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexis Romero Mendoza",
  description: "Portafolio of Alexis Romero Mendoza, a software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ urbanist.className}
      >
        {children}
      </body>
    </html>
  );
}
