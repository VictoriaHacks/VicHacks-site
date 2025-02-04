import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

export interface silverSponsorBlock {
  title: string;
  img: StaticImageData;
  alt: string;
  desc: string;
}

export default function SilverSponsorBlock(props: silverSponsorBlock) {
  return (
    <div className="md:w-1/3 w-full sm:w-1/2">
      <p className="font-bold text-sm">SILVER SPONSOR</p>
      <div className="flex flex-col w-full gap-4">
        <div className="relative w-full h-64">
          <Image
            src={props.img}
            alt={props.alt}
            fill
            className="border rounded border-white object-contain p-8 bg-white"
          />
        </div>
        <div className="flex flex-col gap-2 justify-between w-full">
          <h3 className=" font-extrabold text-2xl">{props.title}</h3>
          <p className="text-sm">{props.desc}</p>
        </div>
      </div>
    </div>
  );
}
