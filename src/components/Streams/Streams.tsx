import React, { useRef } from "react";
import StreamsShowcase from "./StreamsShowcase";
import StreamsDetail from "./StreamsDetail";
import { Stream } from "./interfaces";
import { StreamsScrollEffect } from "./StreamsScrollEffect";
import FlowerImage from "@/assets/streams/flower.svg";
import HexagonImage from "@/assets/streams/hexagon.svg";
import PlusImage from "@/assets/streams/plus.svg";
import StarImage from "@/assets/streams/star.svg";

import CenterImage from "@/assets/shapes/center.svg";
import Image from "next/image";

// Mascots
import Blockchain from "@/assets/mascots/blockchain.jpg";
import AI from "@/assets/mascots/ai.jpg";
import BigData from "@/assets/mascots/bigdata.jpg";
import Mobile from "@/assets/mascots/mobile.jpg";
import BlockchainTransparent from "@/assets/mascots/blockchainTransparent.png";
import AITransparent from "@/assets/mascots/AITransparent.png";
import BigDataTransparent from "@/assets/mascots/bigdataTransparent.png";
import MobileTransparent from "@/assets/mascots/mobileTransparent.png";

import logo from "@/assets/logos/icon-dark.png";
import { motion, useScroll, useTransform } from "framer-motion";

const streamsData: Stream[] = [
  {
    id: 1,
    name: "BLOCKCHAIN",
    color: "#F4A62C",
    bgColor: "bg-yellow-light",
    shape: StarImage,
    image: Blockchain,
    smallImage: BlockchainTransparent,
    description:
      "This stream focuses on all Crypto, Blockchain and Web3 technology. Utilise the security and transparency of blockchain technologies to create something that can help our future!",
  },
  {
    id: 2,
    name: "DATA SCIENCE",
    color: "#00B587",
    bgColor: "bg-green-light",
    shape: PlusImage,
    image: BigData,
    smallImage: BigDataTransparent,
    description:
      "Perfect for all the data analysts out there! Take a large set of information and data and present a technology that is able to process the information and provide real world benefits!",
  },
  {
    id: 3,
    name: "AI",
    color: "#FF87BF",
    bgColor: "bg-pink-light",
    shape: FlowerImage,
    image: AI,
    smallImage: AITransparent,
    description:
      "The big thing in tech right now! Create or integrate AI into your product to help change how we behave by creating something useful to shape the future!",
  },
  {
    id: 4,
    name: "MOBILE APP",
    color: "#7459F1",
    bgColor: "bg-purple-light",
    shape: HexagonImage,
    image: Mobile,
    smallImage: MobileTransparent,
    description:
      "With mobile applications becoming more popular than ever, create a mobile app that taps into the accessibility and convenience of our everyday devices to improve our future!",
  },
];

const Streams: React.FC = () => {
  return (
    <section className="px-4 max-w-screen-lg mx-auto">
      <StreamsShowcase streams={streamsData} />

      {/* About */}
      <div className="relative flex flex-col-reverse md:flex-row items-center gap-4 mx-auto my-20">
        <div className="flex flex-col gap-4">
          <h2 className=" font-display text-2xl xs:text-3xl max-w-md sm:max-w-none sm:text-4xl">
            What is VicHack?
          </h2>
          <p className="max-w-lg">
            VicHack 2024 is a 2-week, Victoria-exclusive hackathon featuring
            four streams: <b className="text-pink-light">AI</b> 🤖,{" "}
            <b className="text-yellow-light">Blockchain</b> 💎,{" "}
            <b className="text-green-light">Data Science</b> 📊, and{" "}
            <b className="text-purple-light">Mobile Development</b>📱.
            <br />
            <br />
            Open to all skill levels, from high schoolers to master’s students,
            it's a chance to learn, have fun, and meet like-minded peers.
            Compete for a $3000+ prize pool, special bonuses, and high schooler
            prizes while boosting your resume and getting hands-on with
            cutting-edge technologies. Entry is $10, with teams finalized on the
            first day or join solo and find a team on our Discord.
          </p>
        </div>
        <Image className="max-w-md w-1/2" src={logo} alt="Logo"></Image>
      </div>

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
