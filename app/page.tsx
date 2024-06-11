import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full mx-auto bg-white overflow-hidden">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
