import FlickeringGrid from "@/components/FlickeringBackground";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Navbar from "@/components/Navbar";
import CarouselProvider from "@/components/providers/carousel-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TEDxGLAU",
  description: "Official Website TedXGlau",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen bg-black dark:bg-white flex flex-col items-center py-4 transition-all">
      <Navbar />
      <Header />
      <CarouselProvider>
        {children}
        <Footer />

      </CarouselProvider>
    </div>
  )
}
