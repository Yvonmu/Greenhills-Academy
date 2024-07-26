/* eslint-disable @next/next/no-img-element */
// components/ImageDesign/One.tsx
import React, { useEffect, useRef, useState } from "react";
import { useTransform, motion, useScroll } from "framer-motion";
import Image from "next/image";

interface Props {
  image: string;
  color: string;
  layoutSection: string;
}

const One: React.FC<Props> = ({ image, color, layoutSection }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [1, 0], [1, 1.5]);

  return (
    <>
      {layoutSection === "left" ? (
        <div className="w-full h-full flex items-center relative">
          <div className="w-full h-[80%] right-[31px] absolute">
            <div className="bgImageContainer">
              <motion.div className={"inner"} style={{ scale: imageScale }}>
                <img className="h-full w-full" src={image} alt="Image" />
              </motion.div>
            </div>
          </div>
          <div
            className={`w-1/4 my-4 h-full right-0 top-0 absolute bg-${color}`}
          />
        </div>
      ) : (
        <div className="w-full h-full flex items-center relative">
          <div
            className={`w-1/4 my-4 h-full left-0 top-0 absolute bg-${color}`}
          />
          <div className="w-full h-[80%] left-[31px] absolute">
            <div className="bgImageContainer">
              <motion.div className={"inner"} style={{ scale: imageScale }}>
                <img className="h-full w-full" src={image} alt="Image" />
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default One;
