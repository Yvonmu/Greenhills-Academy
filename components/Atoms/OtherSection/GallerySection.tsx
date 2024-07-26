/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useTransform, motion, useScroll } from "framer-motion";
import Slider, { Settings, ResponsiveObject } from "react-slick";
import axios from "axios";
import ImageSlider from "../ImageSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface SectionProps {
  title: string;
  endpoint: string;
}
export default function GallerySection({ title, endpoint }: SectionProps) {
  const [section, setSection] = useState<any[]>([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/${endpoint.toLowerCase()}`);
      setSection(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

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

  return (
    <section
      className="w-full bg-green items-center flex justify-center"
      style={{
        backgroundImage: `url(/icons/lightgreen3_bdlud3.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="w-[80%] py-8 overflow-hidden">
        {title && <h2 className="font-bold text-primary">{title}</h2>}
        <Slider
          // dotsClass="slick-dots line-indicator"
          ref={sliderRef}
          slidesToShow={4}
          slidesToScroll={1}
          infinite={true}
          lazyLoad="ondemand"
          autoplay
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
          {section.map((card, index) => (
            <ImageSlider image={card.imageUrls} key={index} />
          ))}
        </Slider>
        <div
          className="div pt-4"
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
