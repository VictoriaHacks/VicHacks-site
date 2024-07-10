"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PerspectiveGrid from "@/components/Hero/PerspectiveGrid";
import Button from "@/components/common/Button";
import Link from "next/link";
import ParallaxAnimator from "./ParallaxAnimator";

// Images
import LogoImage from "@/assets/logos/light.png";
import DiamondsImage from "@/assets/hero-shapes/diamonds.svg";
import FlowerImage from "@/assets/hero-shapes/flower.svg";
import FlowerThinImage from "@/assets/hero-shapes/flowerThin.svg";
import GridCircleImage from "@/assets/hero-shapes/gridCircle.svg";
import GridShapesImage from "@/assets/hero-shapes/gridShapes.svg";
import LightningImage from "@/assets/hero-shapes/lightning.svg";
import SawBladeImage from "@/assets/hero-shapes/sawBlade.svg";
import Navbar from "../Navbar/Navbar";

// The center line is at 47.1% of the grid's height
const GRID_CENTER_OFFSET = 0.471;

export default function HeroSection() {
  // const [gridHeight, setGridHeight] = useState(0)
  const [logoY, setLogoY] = useState(0);
  const gridRef: React.RefObject<SVGSVGElement> | null = useRef(null);
  const logoRef: React.RefObject<HTMLImageElement> | null = useRef(null);

  function setLogoPosition() {
    if (!gridRef?.current || !logoRef?.current) return;

    // Calculate the mid point of the grid
    const gridRect = gridRef.current.getBoundingClientRect();
    const midPointY =
      gridRect.y + gridRect.height * GRID_CENTER_OFFSET + window.scrollY;

    // Calculate the logo's inner height
    const logoElem = logoRef.current;
    const logoRect = logoElem.getBoundingClientRect();
    const { paddingTop, paddingBottom } = getComputedStyle(logoElem);
    const logoInnerHeight =
      logoRect.height - parseFloat(paddingTop) - parseFloat(paddingBottom);

    // Set the logo's y position
    setLogoY(midPointY - logoInnerHeight / 2);
  }

  useEffect(() => {
    setLogoPosition();
    window.addEventListener("resize", setLogoPosition);
  }, [gridRef, logoRef]);

  return (
    <div
      className="transition-opacity duration-500"
      style={{
        // Hide the hero section until images are loaded and absolute positions are calculate
        opacity: logoY ? 1 : 0,
      }}
    >
      <Navbar />

      {/* Grid image, the position of all other static elements are relative to the center of the grid */}
      <PerspectiveGrid
        ref={gridRef}
        className="absolute w-full min-h-[640px] h-[125%] top-[-20%] sm:top-1/2 sm:-translate-y-1/2 md:top-0 md:-translate-y-0 left-1/2 -translate-x-1/2"
      />

      <div className="relative flex flex-col w-full min-h-svh gap-10 z-10">
        {/* The padding top of this element is responsible for pushing all other static elements down */}
        <Image
          ref={logoRef}
          src={LogoImage}
          alt="VicHack Logo"
          className="w-[300px] xs:w-[360px] md:w-[480px] mx-auto"
          style={{
            paddingTop: logoY + "px",
          }}
        />

        <Button href="#" className="mx-auto">
          SIGNUP
        </Button>

        <div className="flex gap-10 justify-between w-full mt-auto p-5 xs:p-10 flex-col md:flex-row">
          <div className="space-y-2 my-auto w-fit">
            <Image src={DiamondsImage} alt="Shape" />
            <p className="font-display max-w-60 md:max-w-none text-xl sm:text-2xl">
              SHAPE THE FUTURE
            </p>
          </div>

          <div className="flex gap-10 min-w-none md:min-w-max">
            <Image
              className="max-w-16 sm:max-w-none hidden xs:flex"
              src={GridShapesImage}
              alt="Shape"
            />
            <div className="space-y-1">
              <p className="text-sm font-bold">HACKMELBOURNE</p>
              <p className="text-sm font-bold">MONASH ASSOC. OF CODING</p>
              <p className="text-sm font-bold">
                RMIT INFORMATION SECURITY COLLECTIVE
              </p>
              <p className="text-sm font-bold">MONASH DEEPNEURON</p>
              <p className="text-sm font-bold">DATA SCIENCE STUDENTS SOCIETY</p>
            </div>
          </div>
        </div>
      </div>

      <ParallaxAnimator
        className="left-[15vw] top-[max(100px,20svh)] md:left-[30vw] md:top-[max(185px,25svh)]"
        speed={500}
      >
        <Image src={SawBladeImage} alt="Shape" />
      </ParallaxAnimator>

      <ParallaxAnimator
        className="left-[65vw] top-[max(222px,30svh)] hidden md:block"
        speed={600}
      >
        <Image src={LightningImage} alt="Shape" />
      </ParallaxAnimator>

      <ParallaxAnimator
        className="left-[70vw] top-[max(259px,65svh)] md:left-[10vw] md:top-[max(259px,35svh)]"
        speed={200}
      >
        <Image src={FlowerImage} alt="Shape" />
      </ParallaxAnimator>

      <ParallaxAnimator
        className="left-[80vw] top-[max(370px,50svh)] hidden md:block"
        speed={200}
      >
        <Image src={GridCircleImage} alt="Shape" />
      </ParallaxAnimator>

      <ParallaxAnimator
        className="left-[70vw] top-[max(100px,18svh)] md:left-[20vw] md:top-[max(481px,65svh)]"
        speed={700}
      >
        <Image src={FlowerThinImage} alt="Shape" />
      </ParallaxAnimator>
    </div>
  );
}
