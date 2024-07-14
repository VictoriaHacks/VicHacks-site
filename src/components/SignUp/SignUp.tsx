import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import shape1 from '@/assets/shapes/star.svg';
import shape2 from '@/assets/shapes/star1.svg';
import shape3 from '@/assets/shapes/star2.svg';
import shape4 from '@/assets/shapes/star3.svg';
import center from '@/assets/shapes/center.svg';

import { LINKS } from '@/constants';

export default function SignUp() {
  return (
    <div id="signUp" className="relative my-8">
      <section className="w-screen max-w-full flex flex-col items-center px-8 py-24">
        <div className="z-50 w-full text-center max-w-screen-sm border rounded border-white px-8 py-12 flex flex-col items-center gap-4">
          <Image src={center} alt="shape" />
          <h2 className=" font-display text-3xl">SIGN UP</h2>
          <p>
            Join Victoria&apos;s best hackathon, learn industry leading skills,
            meet and network as well as help <b>shape</b> our future.
          </p>
          <p>And don&apos;t forget the crazy prizes for all our streams!</p>
          <Link
            href={LINKS.SIGNUP}
            className="grid place-co3ntent-center px-12 py-2 font-bold text-black bg-yellow-light rounded hover:scale-105 transition-all"
          >
            SIGN UP
          </Link>
        </div>
      </section>
      <div className=" absolute flex flex-col top-0 w-full items-center h-full px-8">
        <div className="flex flex-col w-full max-w-screen-lg h-full">
          <div className="ml-12">
            <Image src={shape1} alt="shape" />
          </div>
          <div className="self-end">
            <Image src={shape2} alt="shape" />
          </div>
          <div className="mt-auto">
            <Image src={shape3} alt="shape" />
          </div>
          <div className="self-end mr-4">
            <Image src={shape4} alt="shape" />
          </div>
        </div>
      </div>
    </div>
  );
}
