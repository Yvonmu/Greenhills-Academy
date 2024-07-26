/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import Slider, { Settings, ResponsiveObject } from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function ReasonsCard({ ReasonToJoin }: any) {
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const sliderRef = useRef<Slider>(null);
  useEffect(() => {
    if (sliderRef.current) {
      console.log(sliderRef.current);
    }
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
    <div className="">
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
        {ReasonToJoin.map(
          (
            card: { title: string; content: string; imageUrl: string[] },
            index: number
          ) => (
            <div
              className="cardReason h-[300px] group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              key={index}
            >
              <div
                className="image"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <div
                  className="black-overlay"
                  style={{
                    position: "absolute",
                    top: 2,
                    left: 2,
                    right: 2,
                    bottom: 2,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                ></div>

                <div className="text w-full px-2 flex flex-col gap-4">
                  {hoveredIndex === index ? (
                    <div className="border border-white rounded-lg">
                      <p className="font-bold capitalize text-[yellow] text-center mb-2">
                        {card.title}
                      </p>
                      <p className="text-sm text-center text-white">
                        {card.content}
                      </p>
                    </div>
                  ) : (
                    <p className="font-bold text-[yellow] p-2 capitalize text-center">
                      {card.title}
                    </p>
                  )}
                </div>
                <img
                  src={
                    card.imageUrl && card.imageUrl.length > 0
                      ? card.imageUrl[0]
                      : ""
                  }
                  alt="image"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <div className="overlay"></div>
            </div>
          )
        )}
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
  );
}
