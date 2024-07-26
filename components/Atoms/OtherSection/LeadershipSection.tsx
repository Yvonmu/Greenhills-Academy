/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import StaffCard from "../Cards/StaffCard";


interface SectionProps {
  title: string;
  endpoint: string;
  selectedCategory: string;
}

export default function LeadershipSection({
  title,
  endpoint,
  selectedCategory,
}: SectionProps) {
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
  const filteredSection = section.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <main>
      {selectedCategory === "staff" ? (
        <section>
          <section
            className="flex pt-28 h-full items-end justify-center"
            style={{
              backgroundImage: `url(${"/icons/bgwhite2_lpw73r.svg"})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          >
            <div className="text-center w-[80%] py-12">
              <div className="flex justify-center">
                <div className="w-[55px] grid place-items-center">
                  <div className="w-[18px] h-[7px] my-2 bg-primary" />
                  <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
                </div>
              </div>
              <div className="flex justify-center">
                <h1 className="text-primary capitalize">{title}</h1>
              </div>
            </div>
          </section>
          <section
            className="flex w-full justify-center"
            style={{
              backgroundImage: `url(${"/icons/bgwhite2_lpw73r.svg"})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          >
            <div className="w-[80%]">
              <div className="cardGrid gap-12 w-full md:pt-12 sm:pt-4">
                {filteredSection.map((staff, index) => (
                  <StaffCard
                    key={index}
                    title={staff.title}
                    imageUrl={staff.imageUrl}
                    name={staff.name}
                  />
                ))}
              </div>
            </div>
          </section>
        </section>
      ) : (
        <section
          className="flex bg-primary justify-center py-8"
          style={{
            backgroundImage: `url(${"/icons/green_c6iapo.svg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-[80%]">
            <h1 className="text-[yellow] font-bold">{title}</h1>
            <div className="text-white cardGrid gap-12 mb-12 md:pt-12 sm:pt-4">
              {filteredSection.map((staff, index) => (
                <StaffCard
                  key={index}
                  title={staff.title}
                  imageUrl={staff.imageUrl}
                  name={staff.name}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
