import Image from "next/image";
import CenterImage from "@/assets/shapes/center.svg";
import clsx from "clsx";
import GoldenRatioGrid from "./GoldenRatioGrid";

function FirstPlaceCard({ className }: { className?: string }) {
  return (
    <div className={clsx("max-w-sm", className)}>
      <p className="pl-3 pb-3">FIRST PLACE</p>
      <div className="relative flex border-[6px] border-white p-4 aspect-[1.15] overflow-hidden">
        <div className="absolute w-[50%] aspect-[1.1] bg-green-light rounded-[100%] left-4 bottom-[-20%]"></div>
        <h3 className="relative font-display text-4xl lg:text-5xl ml-auto">1ST</h3>
      </div>
    </div>
  )
}

function SecondPlaceCard({ className }: { className?: string }) {
  return (
    <div className={clsx("max-w-sm", className)}>
      <p className="pl-3 pb-3">SECOND PLACE</p>
      <div className="relative flex border-[6px] border-white p-4 aspect-[1.1] overflow-hidden">
        <div className="absolute w-[50%] aspect-[1.1] bg-orange-light rounded-[100%] right-[-15%] bottom-4"></div>
        <h3 className="relative font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl ml-auto">2ND</h3>
      </div>
    </div>
  )
}

function ThirdPlaceCard({ className }: { className?: string }) {
  return (
    <div className={clsx("max-w-sm", className)}>
      <p className="pl-3 pb-3">THIRD PLACE</p>
      <div className="relative flex border-[6px] border-white p-4 aspect-[1.1] overflow-hidden">
        <div className="absolute w-[50%] aspect-[0.9] bg-pink-light rounded-[100%] left-[18%] top-[-20%]"></div>
        <h3 className="relative font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl ml-auto">3RD</h3>
      </div>
    </div>
  )
}

function MostCreativeCard({ className }: { className?: string }) {
  return (
    <div className={clsx("max-w-sm", className)}>
      <p className="pl-3 pb-3">GENERAL AWARDS</p>
      <div className="relative flex border-[6px] border-white p-4 aspect-[1.1] overflow-hidden">
      <div className="absolute w-[50%] aspect-[1.1] bg-yellow-light rounded-[100%] right-[-15%] bottom-4"></div>
        <h3 className="relative font-display text-[1.3rem] sm:text-2xl lg:text-4xl">Most<br/>Creative</h3>
      </div>
    </div>
  )
}

function BestBlockchainCard({ className }: { className?: string }) {
  return (
    <div className={clsx("max-w-sm", className)}>
      <p className="pl-3 pb-3">STREAM AWARD</p>
      <div className="relative flex border-[6px] border-white p-4 aspect-[1.1] overflow-hidden">
      <div className="absolute w-[50%] aspect-[1.1] bg-purple-light rounded-[100%] left-[-15%] top-1/2 -translate-y-1/2"></div>
        <h3 className="relative font-display text-[1.3rem] md:text-2xl mt-[15%]">BEST<br/>BLOCKCHAIN</h3>
      </div>
    </div>
  )
}

export default function PrizesSection({ className }: { className?: string }) {
  return (
    <div className={clsx("relative max-w-full w-max mx-auto p-4", className)}>
      {/* Background image */}
      <div className="absolute w-screen h-[calc(100%+160px)] sm:h-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-20 sm:-translate-y-0 overflow-hidden opacity-60">
        <GoldenRatioGrid className="absolute sm:min-w-full aspect-auto h-full left-1/2 -translate-x-1/2"/>
      </div>

      {/* Heading */}
      <div className="relative flex flex-col items-center gap-4 text-center mx-auto mb-20 sm:mb-24">
        <Image className="w-14 sm:w-20" src={CenterImage} alt="shape" />
        <h2 className=" font-display text-2xl xs:text-3xl max-w-md sm:max-w-none sm:text-4xl">TOTAL PRIZES: $5000</h2>
        <p className="max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>

      {/* First place */}
      <div className="relative grid md:flex gap-8 w-full max-w-sm md:max-w-none mb-20 md:mb-0 mx-auto md:mx-0">
        <FirstPlaceCard className="w-full" />
        <div className="space-y-2 flex-1 max-w-md my-auto">
          <h4 className="font-display text-xl text-green-light">$500</h4>
          <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </div>

      <div className="relative grid grid-cols-1 max-w-sm mx-auto sm:max-w-none sm:grid-cols-2 gap-10 gap-y-20 md:block md:columns-2 md:gap-20 lg:gap-40 [&>*]:break-inside-avoid-column">
        {/* Third place */}
        <div className="flex flex-col gap-8 w-full md:mt-40 row-start-2 sm:col-start-2 sm:row-start-1">
          <ThirdPlaceCard className="w-full" />
          <div className="space-y-2 flex-1 max-w-sm my-auto">
            <h4 className="font-display text-xl text-pink-light">$150</h4>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>

        {/* Best blockchain */}
        <div className="flex flex-col gap-8 w-full md:mt-40">
          <BestBlockchainCard className="w-full" />
          <div className="space-y-2 flex-1 max-w-sm my-auto">
            <h4 className="font-display text-xl text-purple-light">$300</h4>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>

        {/* Second place */}
        <div className="flex flex-col gap-8 w-full row-start-1 sm:col-start-1 sm:row-start-1">
          <SecondPlaceCard className="w-full" />
          <div className="space-y-2 flex-1 max-w-sm my-auto">
            <h4 className="font-display text-xl text-orange-light">$250</h4>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>

        {/* Most creative card */}
        <div className="flex flex-col gap-8 w-full row-start-3 sm:col-start-1 sm:row-start-2 md:mt-40">
          <MostCreativeCard className="w-full" />
          <div className="space-y-2 flex-1 max-w-sm my-auto">
            <h4 className="font-display text-xl text-yellow-light">$300</h4>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>

      </div>
    </div>
  )
}