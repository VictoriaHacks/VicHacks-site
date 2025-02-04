import React from 'react';

import Image from 'next/image';
import center from '@/assets/shapes/center.svg';

import GoldSponsorBlock, { goldSponsorBlock } from './GoldSponsorBlock';
import SilverSponsorBlock, { silverSponsorBlock } from './SilverSponsorBlock';

// Sponsors
import citadelLogo from '@/assets/sponsors/CitSec-Logo.webp';
import janeStLogo from '@/assets/sponsors/JaneStreet.png';
import reaLogo from '@/assets/sponsors/reaLogo.png';

export default function Sponsors() {
  const goldSponsors: goldSponsorBlock[] = [
    {
      title: 'CITADEL Securities',
      img: citadelLogo,
      alt: 'Citadel Logo',
      desc: 'Our ambition is to be the most successful investment firm of all time. We strive to identify the highest and best uses of capital to generate superior long-term returns for the world’s preeminent public and private institutions.',
      link: 'https://www.citadelsecurities.com/',
    },
    {
      title: 'REA Group',
      img: reaLogo,
      alt: 'REA Group Logo',
      desc: 'REA Group is not your average digital business. With almost 3,000 people across three continents, we’re working to change the way the world experiences property.',
      link: 'https://www.rea-group.com/',
    },
  ];

  const silverSponsors: silverSponsorBlock[] = [
    {
      title: 'Jane Street',
      img: janeStLogo,
      alt: 'Jane Street Logo',
      desc: 'Solving the puzzle of global markets, Jane Street is a research-driven trading firm where curious people work together on deep problems',
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
      <div className="flex flex-col w-full mt-16 gap-8">
        {goldSponsors.map((value, index) => {
          return <GoldSponsorBlock {...value} key={index} />;
        })}
      </div>
      <div className="flex flex-auto justify-center gap-8 mt-24 px-8 sm:px-0">
        {silverSponsors.map((value, index) => {
          return <SilverSponsorBlock {...value} key={index} />;
        })}
      </div>
    </section>
  );
}
