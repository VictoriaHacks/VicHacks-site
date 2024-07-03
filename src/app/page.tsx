import Image from "next/image";
import TestComponent from "@/components/TestComponent/TestComponent";
import Footer from "@/components/Footer/Footer";
import SignUp from "@/components/SignUp/SignUp";
import Streams from "@/components/Streams/Streams";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <h1 className="font-display text-4xl">VICHACK</h1>
      <TestComponent></TestComponent>
      <p className="text-purple-light">Poppins</p>
      <SignUp></SignUp>
      <Streams></Streams>
      <Footer></Footer>
    </main>
  );
}
