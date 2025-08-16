import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../lib/components/Navbar";
import Footer from "../lib/components/Footer";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "NextBlog",
  description: "Blog website with Next.js and NextAuth",
  icons:{
    icon:"/next.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white flex flex-col min-h-screen">
        <Providers>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
