/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider, { Settings, ResponsiveObject } from "react-slick";
import { useTransform, motion, useScroll } from "framer-motion";

interface SectionProps {
  headerTitle: string;
  backgroundImageTitle: string;
  headerDescription: string;
  description: string;
  image: string[];
}
export default function SpeechSection({
  headerTitle,
  image,
  backgroundImageTitle,
  headerDescription,
  description,
}: SectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const wordsPerSlide = 150;
  const descriptionParts = splitDescription(description, wordsPerSlide);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(currentIndex);
    }
  }, [currentIndex]);

  useEffect(() => {
    console.log("Responsive Settings:", responsiveSettings);
    console.log("Slider Settings:", sliderSettings);
  }, []);

  const responsiveSettings: ResponsiveObject[] = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  const sliderSettings: Settings = {
    // Your other settings
    responsive: responsiveSettings,
  };

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [1, 0], [1, 1.5]);
  const imageWithoutSpaces =
    image.length > 0 ? image[0].replace(/\s/g, "%20") : "";
  return (
    <section
      id="head"
      className="flex h-full justify-center items-center"
      style={{
        backgroundImage: `url(${"/icons/lightgreen_fotidt.svg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      ref={container}
    >
      <div className="w-[80%] h-full flex flex-col gap-8 py-8">
        <h1 className="uppercase text-center font-bold text-primary">
          {headerTitle}
        </h1>
        <div className="w-full h-full md:grid md:place-items-center overflow-hidden">
          <div className="w-full h-full md:grid md:grid-cols-2 gap-16">
            <div className="sm:hidden w-full flex items-center">
              <div className="w-1/4 h-full  left-0 top-0  bg-primary" />
              <div className="h-[80%] -ml-[31px] ">
                <div className="bgImageContainerHead">
                  <motion.div className={"inner"} style={{ scale: imageScale }}>
                    <img className="" src={imageWithoutSpaces} alt="Image" />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="md:hidden flex justify-start mb-12">
              <div className="h-[300px]">
                {" "}
                <div className="bgImageContainerHead">
                  <motion.div className={"inner"} style={{ scale: imageScale }}>
                    <img className="" src={imageWithoutSpaces} alt="Image" />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-between">
              <div className="w-full h-full flex flex-col gap-4">
                <div className="grid gap-4">
                  <h3 className="font-bold text-primary">
                    {backgroundImageTitle}
                  </h3>
                  <p className="font-bold">{headerDescription}</p>
                </div>
                <Slider
                  ref={(slider: Slider | null) => {
                    if (slider) {
                      sliderRef.current = slider;
                    }
                  }}
                  slidesToShow={1}
                  slidesToScroll={1}
                  infinite={false}
                  lazyLoad="ondemand"
                  autoplaySpeed={4000}
                  speed={2000}
                  customPaging={(i) => (
                    <div
                      style={{
                        position: "absolute",
                        width: "100%",
                        top: "-10px",
                        opacity: 0,
                      }}
                    >
                      {i}
                    </div>
                  )}
                  afterChange={(index) => {
                    setCurrentIndex(index);
                  }}
                >
                  {descriptionParts.map((part, index) => (
                    <p key={index} className="text-justify md:pr-2">
                      {part}
                    </p>
                  ))}
                </Slider>
                <div
                  className="div"
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    padding: "0 10px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 10,
                        // borderRadius: 7,
                        boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                        cursor: "pointer",
                      }}
                      className="buttons rounded-full"
                      onClick={() => sliderRef.current?.slickPrev()}
                    >
                      <IoIosArrowBack />
                    </div>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // borderRadius: 7,
                        boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                        cursor: "pointer",
                      }}
                      className="buttons rounded-full"
                      onClick={() => sliderRef.current?.slickNext()}
                    >
                      <IoIosArrowForward />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const splitDescription = (
  description: string,
  wordsPerSlide: number
): string[] => {
  const words: string[] = description.split(/\s+/); // Split by whitespace characters
  const result: string[] = [];
  let currentSlice: string[] = [];
  let currentWordCount: number = 0;

  for (const word of words) {
    currentWordCount += 1; // Counting words
    if (currentWordCount <= wordsPerSlide) {
      currentSlice.push(word);
    } else {
      result.push(currentSlice.join(" ") + " (...)");
      currentSlice = [word];
      currentWordCount = 1;
    }
  }

  if (currentSlice.length > 0 && currentWordCount > 1) {
    result.push(currentSlice.join(" ") + "");
  }

  return result;
};
