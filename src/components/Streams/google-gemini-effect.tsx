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
  // Calculate the number of paths based on pathLengths array
  const numPaths = pathLengths.length;

  // Calculate the vertical spacing between paths
  const spacing = 890 / numPaths;

  return (
    <div className={cn("sticky top-80", className)}>
      <svg
        width="1440"
        height="890"
        viewBox="0 0 1440 890"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-80 w-full"
      >
        {pathLengths.map((pathLength, index) => (
          <motion.path
            key={index}
            d={`M${index * spacing} 0 L${index * spacing} 890`}
            stroke={`hsl(${index * (360 / numPaths)}, 70%, 60%)`}
            strokeWidth="2"
            fill="none"
            initial={{
              pathLength: 0,
            }}
            style={{
              pathLength: pathLength,
            }}
            transition={transition}
          />
        ))}
      </svg>
    </div>
  );
};
