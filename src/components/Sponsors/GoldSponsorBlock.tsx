import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface goldSponsorBlock {
  title: string;
  img: StaticImageData;
  alt: string;
  desc: string;
  link: string;
}

export default function GoldSponsorBlock(props: goldSponsorBlock) {
  return (
    <div>
      <p className="font-bold text-sm">GOLD SPONSOR</p>
      <div className="flex flex-col md:flex-row w-full gap-4">
        <div className="md:w-1/2 relative w-full h-64 md:h-auto">
          <Image
            src={props.img}
            alt={props.alt}
            fill
            className="border rounded border-white bg-white object-contain p-8"
          />
        </div>
        <div className="flex flex-col gap-2 justify-between md:w-1/2 w-full">
          <h3 className=" font-extrabold text-4xl">{props.title}</h3>
          <p>{props.desc}</p>
          <Link
            href={props.link}
            className="grid place-co3ntent-center px-4 py-2 font-bold bg-yellow-dark rounded hover:scale-105 transition-all"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
}
