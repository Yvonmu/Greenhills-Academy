/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import EventSlider from "../Cards/EventSlider";

interface SectionProps {
  title: string;
  endpoint: string;
}
export default function NewsSection({ title,endpoint }: SectionProps) {
  
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

  const sliderRef = useRef<Slider>(null);
  useEffect(() => {
    if (sliderRef.current) {
      console.log(sliderRef.current);
    }
  }, []);

  return (
    <div
    className="flex justify-center bg-primary h-full items-center w-full px-4"
    style={{
      backgroundImage: `url(${"/icons/green_c6iapo.svg"})`,
      backgroundSize: "cover",
      backgroundPosition: "bottom",
    }}
  >
    <div className="w-[80%] flex flex-col py-8">
      <div className="">
        <div className="flex justify-center">
          <div className="w-[55px] grid place-items-center">
            <div className="w-[18px] h-[7px] my-2 bg-[yellow]" />
            <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
          </div>
        </div>
        <h1 className="text-white text-center">News & Events</h1>
      </div>
      <Slider
        dots
        dotsClass="slick-dots bgLine-indicator"
        ref={sliderRef}
        slidesToShow={1}
        slidesToScroll={1}
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
      >
        {section.map((data, i) => {
          return (
            <EventSlider
              key={i}
              title={data.title}
              date={data.date}
              description={data.description}
              imageUrl={data.imageUrl}
              slug={data.slug}
              videoUrl={data.videoUrl}
            />
          );
        })}
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
            className="bgButtons rounded-full"
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
            className="bgButtons rounded-full"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
