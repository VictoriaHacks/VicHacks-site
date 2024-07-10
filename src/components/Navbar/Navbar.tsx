import React, { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import TrianglesImage from "@/assets/hero-shapes/triangles.svg";

export default function Navbar() {
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [startScroll, setStartScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY + 50) {
        // Scrolling down
        controls.start({ opacity: 0 }); // Adjust this value to move the navbar out of view
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, controls]);

  return (
    <motion.div
      className={`fixed w-full top-0 flex justify-between p-5 xs:p-10 z-20 ${
        startScroll ? "bg-transparent" : "bg-black md:bg-transparent"
      }`}
      initial={{ opacity: 1 }}
      animate={controls}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-1">
        <p className="">11/06 - 15/06</p>
        <h3 className="text-xl sm:text-2xl font-display">VICHACK</h3>
        <Image
          className="max-w-12 xs:max-w-16"
          src={TrianglesImage}
          alt="Shape"
        />
      </div>
      <div className="flex gap-1 flex-col text-right font-bold sticky top-0">
        <Link href="#">HOME</Link>
        <Link href="#">EDUCATION</Link>
        <Link href="#">SIGN UP</Link>
      </div>
    </motion.div>
  );
}
