import React from 'react';
import Image from 'next/image';
import { Stream } from './interfaces';

interface StreamsShowcaseProps {
  streams: Stream[];
}

const StreamsShowcase: React.FC<StreamsShowcaseProps> = ({ streams }) => {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
      {streams.map((stream) => (
        <div key={stream.id} className="bg-gray-200 p-4 rounded">
          <Image src={stream.image} alt={stream.name} className="rounded-lg w-full" width={300} height={200} />
        </div>
      ))}
    </div>
  );
}

export default StreamsShowcase;
