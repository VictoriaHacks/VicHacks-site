import React from "react";
import { Stream } from './interfaces';
import Image from 'next/image';

interface StreamsDetailProps {
  streams: Stream[];
}

const StreamsDetail: React.FC<StreamsDetailProps> = ({ streams }) => {
  return (
    <div className="relative">
      {streams.map((stream) => (
        <div key={stream.id} className="flex flex-col lg:flex-row items-center gap-4 bg-gray-100 p-4 rounded-lg mb-4">
          <div className="relative w-full lg:w-1/2 h-60">
            <Image
              src={stream.image}
              alt={stream.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <Image src={stream.shape} className="p-2" alt="Shape" />
            <h3 className="text-2xl font-bold bernoru-font" style={{ color: stream.color }}>{stream.name}</h3>
            <p className="text-gray-700">{stream.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StreamsDetail;
