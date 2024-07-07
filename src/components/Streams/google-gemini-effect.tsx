import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, MotionValue } from "framer-motion";
import React from "react";

const transition = {
  duration: 0,
  ease: "linear",
};

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const GoogleGeminiEffect = ({
  pathLengths,
  title,
  description,
  className,
}: {
  pathLengths: MotionValue[];
  title?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className={cn("sticky top-80", className)}>
      <p className="text-lg md:text-7xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
        {title || `Build with Aceternity UI`}
      </p>
      <p className="text-xs md:text-xl font-normal text-center text-neutral-400 mt-4 max-w-lg mx-auto">
        {description ||
          `Scroll this component and see the bottom SVG come to life wow this
        works!`}
      </p>
      <svg
        width="1440"
        height="890"
        viewBox="0 0 1440 890"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-60 md:-top-40 w-full"
      >
        {/* First Path */}
        <motion.path
          d="M0 0 L1440 0"
          stroke="#FFB7C5"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[0],
          }}
          transition={transition}
        />

        {/* Second Path */}
        <motion.path
          d="M0 587.5 L1440 588"
          stroke="#FFDDB7"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[1],
          }}
          transition={transition}
        />

        {/* Third Path */}
        <motion.path
          d="M0 514 L1440 513"
          stroke="#B1C5FF"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[2],
          }}
          transition={transition}
        />

        {/* Fourth Path */}
        <motion.path
          d="M0 438.5 L1440 515.235"
          stroke="#B7FFC5"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[3],
          }}
          transition={transition}
        />

        {/* Fifth Path */}
        <motion.path
          d="M0 363 L1440 384"
          stroke="#B7FFC5"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[4],
          }}
          transition={transition}
        />

        {/* Sixth Path */}
        <motion.path
          d="M0 288 L1440 392"
          stroke="#FFDDB7"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[5],
          }}
          transition={transition}
        />

        {/* Seventh Path */}
        <motion.path
          d="M0 212.5 L1440 302"
          stroke="#B1C5FF"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[6],
          }}
          transition={transition}
        />

        {/* Eighth Path */}
        <motion.path
          d="M0 138 L1440 240"
          stroke="#FFB7C5"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[7],
          }}
          transition={transition}
        />
      </svg>
    </div>
  );
};
