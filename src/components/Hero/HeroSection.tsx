'use client'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import PerspectiveGrid from '@/components/Hero/PerspectiveGrid';
import Button from '@/components/common/Button';
import Link from 'next/link';
import ParallaxAnimator from './ParallaxAnimator';

// Images
import LogoImage from '@/assets/logos/light.png'
import DiamondsImage from '@/assets/hero-shapes/diamonds.svg'
import FlowerImage from '@/assets/hero-shapes/flower.svg'
import FlowerThinImage from '@/assets/hero-shapes/flowerThin.svg'
import GridCircleImage from '@/assets/hero-shapes/gridCircle.svg'
import GridShapesImage from '@/assets/hero-shapes/gridShapes.svg'
import LightningImage from '@/assets/hero-shapes/lightning.svg'
import SawBladeImage from '@/assets/hero-shapes/sawBlade.svg'
import TrianglesImage from '@/assets/hero-shapes/triangles.svg'

const GRID_CENTER_OFFSET = 0.947 // Percentage offset to align text to grid center
const BUTTON_MARGIN = 40 // Margin between Vichack text and sign up button
const INFO_MARGIN = 40 // Margin between Vichack text and sign up button

function Navbar() {
  return (
    <div className="fixed w-full top-0 flex justify-between p-5 xs:p-10 z-10">
      <div className="space-y-1">
        <p className="">11/06 - 15/06</p>
        <h3 className="text-xl sm:text-2xl font-display">VICHACK</h3>
        <Image className="max-w-14 xs:max-w-none" src={TrianglesImage} alt="Shape"/>
      </div>
      <div className="flex gap-1 flex-col text-right font-bold sticky top-0">
        <Link href="#">HOME</Link>
        <Link href="#">EDUCATION</Link>
        <Link href="#">SIGN UP</Link>
      </div>
    </div>
  )
}

export default function HeroSection() {
  const [gridHeight, setGridHeight] = useState(0)
  const [textHeight, setTextHeight] = useState(0)
  const gridRef: React.RefObject<SVGSVGElement> | null = useRef(null)
  const textRef: React.RefObject<HTMLImageElement> | null = useRef(null)

  function getHeights() {
    if (!gridRef?.current || !textRef?.current)
      return 

    const gridRect = gridRef.current.getBoundingClientRect()
    setGridHeight(gridRect.top * 2 + gridRect.height + window.scrollY * 2)

    const textRect = textRef.current.getBoundingClientRect()
    setTextHeight(textRect.height)
  }

  function getTextTop() {
    return (gridHeight * GRID_CENTER_OFFSET - textHeight) / 2
  }

  function getButtonTop() {
    return (gridHeight * GRID_CENTER_OFFSET + textHeight) / 2 + BUTTON_MARGIN
  }

  // function getInfoTop() {
  //   return (gridHeight * GRID_CENTER_OFFSET + textHeight) / 2 + INFO_MARGIN
  // }

  useEffect(() => {
    getHeights()
    window.addEventListener('resize', getHeights)
    return () => window.removeEventListener('resize', getHeights)
  }, [gridRef])

  return (
    <div className="relative min-h-[500px] sm:min-h-[800px] md:min-h-[720px] h-svh transition-opacity duration-500" style={{
      // Hide the hero section until images are loaded and absolute positions are calculate
      'opacity': gridHeight ? 1 : 0
    }}>
      <Navbar />

        <PerspectiveGrid ref={gridRef} className="absolute left-1/2 -translate-x-1/2 w-full h-full md:h-[110%] sm:top-0 translate-y-[-50px] sm:translate-y-0 "/>
        
        <Image ref={textRef} src={LogoImage} alt="VicHack Logo" className="absolute w-[300px] xs:w-[360px] md:w-[480px] left-1/2 -translate-x-1/2 z-[2]" style={{
          top: getTextTop() + 'px',
        }}/>

        <Button href="#" className="absolute left-1/2 -translate-x-1/2 z-[2]" style={{
          top: getButtonTop() + 'px'
        }}>
          SIGNUP
        </Button>

      <ParallaxAnimator className="left-[15vw] top-[max(100px,20svh)] md:left-[30vw] md:top-[max(185px,25svh)]" speed={100}>
        <Image src={SawBladeImage} alt="Shape"/>
      </ParallaxAnimator>

      <ParallaxAnimator className="left-[65vw] top-[max(222px,30svh)] hidden md:block" speed={300}>
        <Image src={LightningImage} alt="Shape"/>
      </ParallaxAnimator>

      <ParallaxAnimator className="left-[70vw] top-[max(259px,70svh)] md:left-[10vw] md:top-[max(259px,35svh)]" speed={600}>
        <Image src={FlowerImage} alt="Shape"/>
      </ParallaxAnimator>

      <ParallaxAnimator className="left-[80vw] top-[max(370px,50svh)] hidden md:block" speed={1000}>
        <Image src={GridCircleImage} alt="Shape"/>
      </ParallaxAnimator>

      <ParallaxAnimator className="left-[70vw] top-[max(100px,15svh)] md:left-[20vw] md:top-[max(481px,65svh)]" speed={1500}>
        <Image src={FlowerThinImage} alt="Shape"/>
      </ParallaxAnimator>

      <div className="flex gap-10 flex-col md:flex-row justify-between w-full absolute bottom-0 p-5 xs:p-10">
        <div className="space-y-2 my-auto w-fit">
          <Image src={DiamondsImage} alt="Shape"/>
          <p className="font-display max-w-60 md:max-w-none text-xl sm:text-2xl">SHAPE THE FUTURE</p>
        </div>

        <div className="flex gap-10 sm:min-w-max">
          <Image className="max-w-16 sm:max-w-none xs:block hidden" src={GridShapesImage} alt="Shape"/>
          <div className="space-y-1">
            <p className="text-sm font-bold">HACKMELBOURNE</p>
            <p className="text-sm font-bold">MONASH ASSOC. OF CODING</p>
            <p className="text-sm font-bold">RMIT INFORMATION SECURITY COLLECTIVE</p>
            <p className="text-sm font-bold">MONASH DEEPNEURON</p>
            <p className="text-sm font-bold">DATA SCIENCE STUDENTS SOCIETY</p>
          </div>
        </div>
      </div>
    </div>
  );
}