import React from 'react';
import StreamsShowcase from './StreamsShowcase';
import StreamsDetail from './StreamsDetail';
import { Stream } from './interfaces';
import { StreamsScrollEffect } from './StreamsScrollEffect';
import FlowerImage from "@/assets/streams/flower.svg";
import HexagonImage from "@/assets/streams/hexagon.svg";
import PlusImage from "@/assets/streams/plus.svg";
import StarImage from "@/assets/streams/star.svg";

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
    <section className="w-[80%] mx-auto">
      <StreamsShowcase streams={streamsData} />
      <StreamsScrollEffect />
      <StreamsDetail streams={streamsData} />
    </section>
  );
};

export default Streams;
