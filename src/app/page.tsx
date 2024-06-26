import Image from 'next/image';
import TestComponent from '@/components/TestComponent/TestComponent';

export default function Home() {
  return (
    <main className="">
      <h1 className="font-display text-4xl">VICHACK</h1>
      <TestComponent></TestComponent>
      <p className="text-purple-light">Poppins</p>
    </main>
  );
}
