import React from 'react';
import StreamsShowcase from './StreamsShowcase';
import StreamsDetail from './StreamsDetail';
import { Stream } from './interfaces';
import { StreamsScrollEffect } from './StreamsScrollEffect';

const streamsData: Stream[] = [
  { id: 1, name: "Mobile", image: "https://via.placeholder.com/800", description: "Description for Mobile" },
  { id: 2, name: "AI", image: "https://via.placeholder.com/800", description: "Description for AI" },
  { id: 3, name: "Blockchain", image: "https://via.placeholder.com/800", description: "Description for Blockchain" },
  { id: 4, name: "Data Science", image: "https://via.placeholder.com/800", description: "Description for Data Science" },
];

const Streams: React.FC = () => {
  return (
    <section className="w-[80%] mx-auto">
      <StreamsShowcase streams={streamsData} />
      <StreamsScrollEffect />
      <StreamsDetail streams={streamsData} />
    </section>
  );
}

export default Streams;