import React from 'react';
import StreamsShowcase from './StreamsShowcase';
import StreamsDetail from './StreamsDetail';
import { Stream } from './interfaces';
import { StreamsScrollEffect } from './StreamsScrollEffect';
import FlowerImage from '@/assets/streams/flower.svg';
import HexagonImage from '@/assets/streams/hexagon.svg';
import PlusImage from '@/assets/streams/plus.svg';
import StarImage from '@/assets/streams/star.svg';

import CenterImage from '@/assets/shapes/center.svg';
import Image from 'next/image';

const streamsData: Stream[] = [
  {
    id: 1,
    name: 'BLOCKCHAIN',
    color: '#F4A62C',
    shape: StarImage,
    image: 'https://via.placeholder.com/800',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 2,
    name: 'BIG DATA',
    color: '#00B587',
    shape: PlusImage,
    image: 'https://via.placeholder.com/800',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    name: 'AI',
    color: '#FF87BF',
    shape: FlowerImage,
    image: 'https://via.placeholder.com/800',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 4,
    name: 'MOBILE APP',
    color: '#7459F1',
    shape: HexagonImage,
    image: 'https://via.placeholder.com/800',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const Streams: React.FC = () => {
  return (
    <section className="px-4 max-w-screen-lg mx-auto">
      <StreamsShowcase streams={streamsData} />

      {/* Heading */}
      <div className="relative flex flex-col items-center gap-4 text-center mx-auto my-20">
        <Image className="w-14 sm:w-20" src={CenterImage} alt="shape" />
        <h2 className=" font-display text-2xl xs:text-3xl max-w-md sm:max-w-none sm:text-4xl">
          STREAMS
        </h2>
        <p className="max-w-lg">
          At VICHACK we have 4 streams for participants to enter under. Each one
          has their own seperate prizes and represent an area that we believe
          will help shape the future.
        </p>
      </div>
      {/* <StreamsScrollEffect /> */}
      <StreamsDetail streams={streamsData} />
    </section>
  );
};

export default Streams;
