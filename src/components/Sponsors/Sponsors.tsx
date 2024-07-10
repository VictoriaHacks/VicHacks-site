import React from "react";

import Image from "next/image";
import center from "@/assets/shapes/center.svg";

import GoldSponsorBlock, { goldSponsorBlock } from "./GoldSponsorBlock";
import { silverSponsorBlock } from "./SilverSponsorBlock";

// Sponsors
import testImg from "@/assets/sponsors/test.png";

export default function Sponsors() {
  const goldSponsors: goldSponsorBlock[] = [
    {
      title: "OPTIVER",
      img: testImg,
      alt: "test",
      desc: "As one of the oldest market making firms in the world, Optiver has been improving financial markets since 1986. By providing liquidity to markets across the globe, we make them more efficient, transparent and stable.",
      link: "test",
    },
  ];

  const silverSponsors: silverSponsorBlock[] = [];

  return (
    <section className="flex flex-col mx-auto max-w-screen-md items-center px-8">
      <div className="flex flex-col items-center gap-4 max-w-screen-sm text-center">
        <Image src={center} alt="shape" />
        <h2 className=" font-display text-3xl">SPONSORS</h2>
        <p>
          A big thanks to all the organisations that are supporting us and our
          mission to shape the future!
        </p>
      </div>
      <div className="flex flex-col w-full mt-16">
        {goldSponsors.map((value) => {
          return <GoldSponsorBlock {...value} />;
        })}
      </div>
    </section>
  );
}
