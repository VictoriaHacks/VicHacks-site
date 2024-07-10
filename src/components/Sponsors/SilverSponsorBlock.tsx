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
    <div>
      <p className="font-bold text-sm">GOLD SPONSOR</p>
      <div className="flex flex-row w-full gap-4">
        <div className="flex flex-col gap-1 w-1/2 relative">
          <Image
            src={props.img}
            alt={props.alt}
            fill
            className=" border rounded border-white"
          />
        </div>
        <div className="flex flex-col gap-2 justify-between w-1/2">
          <h3 className=" font-display text-2xl">{props.title}</h3>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}
