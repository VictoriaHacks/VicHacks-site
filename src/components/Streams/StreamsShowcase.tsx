import React from 'react';
import Image from 'next/image';
import { Stream } from './interfaces';

interface StreamsShowcaseProps {
  streams: Stream[];
}

const StreamsShowcase: React.FC<StreamsShowcaseProps> = ({ streams }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {streams.map((stream) => (
        <div key={stream.id} className="bg-gray-200 p-4 rounded">
          <div className="relative w-full h-40">
            <Image
              src={stream.smallImage}
              alt={stream.name}
              layout="fill"
              objectFit="cover"
              className="z-10 rounded-lg hover:-translate-y-4 transition-all"
            />
            <div
              className={`rounded absolute bottom-0 w-full h-16 ${stream.bgColor}`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StreamsShowcase;
