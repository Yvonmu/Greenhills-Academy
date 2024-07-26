/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Link from "next/link";
interface SectionProps {
  title: string;
  endpoint: string;
}
export default function AboutCardSection({ title, endpoint }: SectionProps) {
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

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      className="w-full flex bg-primary sm:flex-col md:h-full items-center flex justify-center"
      style={{
        backgroundImage: `url(${"/icons/green_c6iapo.svg"})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="w-[80%] py-16 place-items-center place-content-center grid md:grid-cols-4 grid-cols-2 gap-12">
        {section.map((data, index) => (
          <Link
            href={data.link}
            key={index}
            className="w-full rounded-xl"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(${data.image[0].replace(
                /\s/g,
                "%20"
              )})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="group flex items-center  h-[200px] justify-end flex-col gap-12 p-4 w-full border border-transparent hover:rounded-xl hover:bg-black hover:bg-opacity-50 hover:border-primary relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 className="text-center text-[yellow] font-bold capitalize group-hover:opacity-50 transition-opacity">
                {data.title}
              </h3>
              {hoveredIndex === index && (
                <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 text-center">
                  <Button
                    name="View More"
                    action={data.link}
                    background="#018c79"
                    color="#fff"
                  />
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
