"use client";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, MotionValue } from "framer-motion";
import React from "react";

const transition = {
  duration: 1.5,
  ease: "easeInOut",
};

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const GoogleGeminiEffect = ({
  pathLengths,
  className,
}: {
  pathLengths: MotionValue[];
  className?: string;
}) => {
  const horizontal_distance = 450;
  const horizontal_right = 100;
  const vertical_distance = 50;
  const strokeWidth = 5;

  return (
    <div className={cn("sticky top-80", className)}>
      <svg
        viewBox="0 0 1440 1711"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-80 w-full outline-none"
      >
        {/* First Path */}
        <motion.path
          d={`
            M${100} 0
            L${100} 1000`}
          stroke="#7459F1"
          strokeWidth={strokeWidth}
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[0] }}
          transition={transition}
        />

        {/* Second Path */}
        <motion.path
          d={`
            M${horizontal_distance} 0
            L${horizontal_distance} ${vertical_distance*2}
            L${horizontal_right*2} ${vertical_distance*2}
            L${horizontal_right*2} 1000`}
          stroke="#FF87BF"
          strokeWidth={strokeWidth}
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[1] }}
          transition={transition}
        />

        {/* Third Path */}
        <motion.path
          d={`
            M${horizontal_distance * 2} 0
            L${horizontal_distance * 2} ${vertical_distance*3}
            L${horizontal_right*3} ${vertical_distance*3}
            L${horizontal_right*3} 1000`}
          stroke="#00B587"
          strokeWidth={strokeWidth}
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[2] }}
          transition={transition}
        />

        {/* Fourth Path */}
        <motion.path
          d={`
            M${horizontal_distance * 3} 0
            L${horizontal_distance * 3} ${vertical_distance*4}
            L${horizontal_right*4} ${vertical_distance*4}
            L${horizontal_right*4} 1000`}
          stroke="#F4A62C"
          strokeWidth={strokeWidth}
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[3] }}
          transition={transition}
        />
      </svg>
    </div>
  );
};
