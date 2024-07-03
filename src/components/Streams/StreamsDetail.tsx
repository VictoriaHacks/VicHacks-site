import React from "react";
import { Stream } from './interfaces';
import Image from 'next/image';

interface StreamsDetailProps {
  streams: Stream[];
}

const StreamsDetail: React.FC<StreamsDetailProps> = ({ streams }) => {
  return (
    <div>
      {streams.map((stream) => (
        <div key={stream.id} className="flex flex-col lg:flex-row items-center gap-4 bg-gray-100 p-4 rounded-lg mb-4">
          <div className="w-full lg:w-1/2 center">
            <Image src={stream.image} alt={stream.name} className="rounded-lg w-full" width={300} height={200} />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold">{stream.name}</h3>
            <p className="text-gray-700">{stream.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StreamsDetail;
