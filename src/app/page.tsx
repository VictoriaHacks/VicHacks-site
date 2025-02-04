'use client';

import Image from 'next/image';
import TestComponent from '@/components/TestComponent/TestComponent';
import Footer from '@/components/Footer/Footer';
import SignUp from '@/components/SignUp/SignUp';
import Streams from '@/components/Streams/Streams';
import HeroSection from '@/components/Hero/HeroSection';
import Sponsors from '@/components/Sponsors/Sponsors';
import PrizesSection from '@/components/Prizes/PrizesSection';
import Navbar from '@/components/Navbar/Navbar';

export default function Home() {
  return (
    <main className="bg-black text-white w-screen max-w-full overflow-x-clip">
      <Navbar />
      <HeroSection />
      <Streams></Streams>
      <PrizesSection className="my-80" />
      <Sponsors />
      <SignUp />
      <Footer />
    </main>
  );
}
