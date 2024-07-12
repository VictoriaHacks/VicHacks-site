"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "./google-gemini-effect";

export function StreamsScrollEffect() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Define path lengths with increasing speeds
  const pathLengthFirst = useTransform(scrollYProgress, [0, .7], [0, .7]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.75], [0, .8]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0, .9]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, .85], [0, 1]);

  return (
    <div
      className="h-[100vh] bg-black w-full relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
        ]}
      />
    </div>
  );
}
