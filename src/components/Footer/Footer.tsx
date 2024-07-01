import React from "react";
import Image from "next/image";
import lightLogo from "@/assets/logos/light.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col mx-auto w-screen max-w-full items-center py-16 md:py-24 gap-12 border-t-2 border-t-white">
      <Image
        src={lightLogo}
        alt="Logo"
        height={100} // Set the desired height
        layout="intrinsic" // or use "responsive" for responsive images
      />

      <div className="flex flex-col gap-4 font-display text-xl items-center">
        <Link
          className="border-b-2 border-b-black px-4 py-4 hover:border-b-yellow-light transition-all"
          href={"https://google.com"}
        >
          DEVPOST
        </Link>
        <Link
          className="border-b-2 border-b-black px-4 py-4 hover:border-b-yellow-light transition-all"
          href={"https://google.com"}
        >
          INSTAGRAM
        </Link>
        <Link
          className="border-b-2 border-b-black px-4 py-4 hover:border-b-yellow-light transition-all"
          href={"https://google.com"}
        >
          DISCORD
        </Link>
      </div>
    </footer>
  );
}
