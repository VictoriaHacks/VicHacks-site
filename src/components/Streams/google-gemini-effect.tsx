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
  return (
    <div className={cn("sticky top-80", className)}>
      <svg
        viewBox="0 0 1440 1711"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-80 w-full"
      >
        <motion.path
          d="M0 26h20v1685H0z"
          stroke="#7459F1"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[0] }}
          transition={transition}
        />

        <motion.path
          d="M40 56h199v20H40z M239 14v62h-20V14z M40 56h20v1286H40z"
          stroke="#FF87BF"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[1] }}
          transition={transition}
        />

        <motion.path
          d="M80 93h407v20H80z M487 5v108h-20V5z M80 93h20v867H80z"
          stroke="#00B587"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[2] }}
          transition={transition}
        />

        <motion.path
          d="M120 138h620v20H120z M740 0v157h-20V0z M120 138h20v460h-20z"
          stroke="#F4A62C"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[3] }}
          transition={transition}
        />
      </svg>
    </div>
  );
};
