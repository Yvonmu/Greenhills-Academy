/* eslint-disable @next/next/no-img-element */
"use client";

import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";
import GreenDecoratedList from "../Decorate/greenDecoratedList";

interface CardSectionProps {
  title?: string;
  description?: string | string[];
  imageUrl: string;
  backgroundColor?: string;
  color?: string;
  i: number;
  progress?: MotionValue<number>;
  range: [number, number];
  targetScale?: number;
}
export default function CardSection({
  title,
  description,
  imageUrl,
  progress,
  range,
  targetScale,
}: CardSectionProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <>
      <div className="w-full h-full flex flex-col" ref={container}>
        <div className="md:h-[400px] w-full">
          <div className={"imageContainer"}>
            <motion.div className={"inner"} >
              <img src={imageUrl} alt="image" />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center -mt-20 z-10 flex-grow">
          <div className="w-[95%] bg-primary p-8 rounded-2xl h-full">
            <h2 className="text-[yellow] text-center">{title}</h2>
            {Array.isArray(description) ? (
              <>
               {description.map((item, index) => (
            <GreenDecoratedList key={index} color="white" details={item} />
            ))}
              </>
            ) : (
              <p className={`text-white`}>{description}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
