import React from "react";

import Image from "next/image";
import center from "@/assets/shapes/center.svg";

import GoldSponsorBlock, { goldSponsorBlock } from "./GoldSponsorBlock";
import SilverSponsorBlock, { silverSponsorBlock } from "./SilverSponsorBlock";

// Sponsors
import testImg from "@/assets/sponsors/test.png";

export default function Sponsors() {
  const goldSponsors: goldSponsorBlock[] = [
    {
      title: "TESTER",
      img: testImg,
      alt: "test",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "test",
    },
  ];

  const silverSponsors: silverSponsorBlock[] = [
    {
      title: "TESTER",
      img: testImg,
      alt: "test",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-16 px-8 sm:px-0">
        {silverSponsors.map((value) => {
          return <SilverSponsorBlock {...value} />;
        })}
      </div>
    </section>
  );
}
