import Image from "next/image";
import TestComponent from "@/components/TestComponent/TestComponent";
import Footer from "@/components/Footer/Footer";
import SignUp from "@/components/SignUp/SignUp";
import HeroSection from "@/components/Hero/HeroSection";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <SignUp />
      <Footer />
    </main>
  );
}
