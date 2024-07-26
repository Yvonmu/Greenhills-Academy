/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import Slider, { Settings, ResponsiveObject } from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import axios from "axios";

interface SectionProps {
  otherTitle: string;
  endpoint: string;
}
export default function UniversitiesSection({
  otherTitle,
  endpoint,
}: SectionProps) {
  const [universities, setUniversities] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(currentIndex);
    }
  }, [currentIndex]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/${endpoint.toLowerCase()}`);
      setUniversities(response.data);
    } catch (error) {
      console.error(error);
    }
  };
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
    responsive: responsiveSettings,
  };
  const chunkedItems = chunkArray(universities, 10);
  console.log(universities)
  return (
    <section
      className="overflow-x-hidden w-[100%] h-[100%] items-center flex justify-center bg-green text-white rounded-lg font-bold"
      style={{
        backgroundImage: `url(${"/icons/lightgreen_fotidt.svg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[80%] h-full flex flex-col py-8">
        <h2 className="font-bold text-primary">{otherTitle}</h2>
        <Slider
          dotsClass="slick-dots line-indicator"
          ref={sliderRef}
          slidesToShow={3}
          slidesToScroll={3}
          infinite={true}
          autoplay
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
          {...sliderSettings}
        >
          {chunkedItems.map((chunk, rowIndex) => (
            <div key={rowIndex} className="flex gap-8 px-1 h-full">
              {chunk.map((item, colIndex) => (
                <div
                  key={colIndex}
                  className={`py-4 px-4 text-[#f8f008] ${
                    colIndex % 2 === 0
                      ? "bg-primary bg-opacity-50"
                      : "bg-primary"
                  }`}
                >
                  {item.name}
                </div>
              ))}
            </div>
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
    </section>
  );
}

const chunkArray = (array: any[], size: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};
