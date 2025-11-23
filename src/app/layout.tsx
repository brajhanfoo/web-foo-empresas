
import { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { LOGOWEB } from "@/lib/imagePaths";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: 'Foo Talent Group',
  description: 'Plataforma de consultoria informatica especializada.',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Navbar logoSrc={LOGOWEB} logoAlt="Foo Talent Group" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
