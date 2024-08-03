import React, { useEffect, useState } from 'react';
import { useAnimation, motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import TrianglesImage from '@/assets/hero-shapes/triangles.svg';

const scrolltoHash = function (element_id: string) {
  const element = document.getElementById(element_id);
  element?.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest',
  });
};

export default function Navbar() {
  const scrollSensitivity = 200;

  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [startScroll, setStartScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY + scrollSensitivity) {
        // Scrolling down
        if (window.innerWidth < 1280) {
          controls.start({ opacity: 0 }); // Adjust this value to move the navbar out of view
        }
        setLastScrollY(window.scrollY);
      } else if (window.scrollY < lastScrollY) {
        // Scrolling up
        controls.start({ opacity: 1 });
        setLastScrollY(window.scrollY);
      }

      if (window.scrollY > 400) {
        setStartScroll(false);
      } else {
        setStartScroll(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, controls]);

  return (
    <motion.div
      className={`fixed w-full top-0 flex justify-between p-5 xs:p-10 max-w-full z-20 ${
        startScroll ? 'bg-transparent' : 'bg-black xl:bg-transparent'
      }`}
      initial={{ opacity: 1 }}
      animate={controls}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-1">
        <p className="">09/08 - 18/08</p>
        <h3 className="text-xl sm:text-2xl font-display">VICHACK</h3>
        <Image
          className="max-w-12 xs:max-w-16"
          src={TrianglesImage}
          alt="Shape"
        />
      </div>
      <div className="flex gap-1 flex-col text-right font-bold sticky top-0">
        <Link
          href="/"
          className='className=" cursor-pointer hover:border-b-2 border-yellow-light transition-all"
'
        >
          HOME
        </Link>
        <Link
          href="/education"
          className='className=" cursor-pointer hover:border-b-2 border-purple-light transition-all"
'
        >
          EDUCATION
        </Link>
        <Link
          href="/#signUp"
          className='className=" cursor-pointer hover:border-b-2 border-green-light transition-all"
'
        >
          SIGN UP
        </Link>
      </div>
    </motion.div>
  );
}
