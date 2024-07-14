import React from 'react';
import Image from 'next/image';
import lightLogo from '@/assets/logos/light.png';
import Link from 'next/link';

import { LINKS } from '@/constants';

export default function Footer() {
  return (
    <footer className="flex flex-col mx-auto mt-24 w-screen max-w-full items-center py-16 md:py-24 gap-12 border-t-2 border-t-white">
      <div className="relative h-12 w-full">
        <Image src={lightLogo} alt="Logo" layout="fill" objectFit="contain" />
      </div>

      <div className="flex flex-col gap-4 font-display text-xl items-center">
        <Link
          className="border-b-2 border-b-black px-4 py-4 hover:border-b-yellow-light transition-all"
          href={LINKS.SIGNUP}
        >
          EVENTBRITE
        </Link>
        <Link
          className="border-b-2 border-b-black px-4 py-4 hover:border-b-yellow-light transition-all"
          href={LINKS.DEVPOST}
        >
          DEVPOST
        </Link>
        <Link
          className="border-b-2 border-b-black px-4 py-4 hover:border-b-yellow-light transition-all"
          href={LINKS.INSTAGRAM}
        >
          INSTAGRAM
        </Link>
        <Link
          className="border-b-2 border-b-black px-4 py-4 hover:border-b-yellow-light transition-all"
          href={'https://google.com'}
        >
          DISCORD
        </Link>
      </div>
    </footer>
  );
}
