/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import HoverCard from "../Cards/hoverCard";
interface SectionProps {
  title: string;
  endpoint: string;
}
export default function BoardingCardSection({ title, endpoint }: SectionProps) {
  const [section, setSection] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (section.length > 0) {
      setActiveTab(section[0].title);
    }
  }, [section]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/${endpoint.toLowerCase()}`);
      setSection(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <section className="flex justify-center">
      <div
        className="w-[80%] bg-primary relative z-10 h-full text-center text-white rounded-xl shadow-xl font-bold sm:overflow-x-auto"
        style={{
          backgroundImage: `url(${"/icons/green_c6iapo.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="w-full flex justify-center">
          <div className="w-[80%] flex md:justify-between md:my-8 gap-1 p-4 overflow-x-auto">
            {section.map((tab, index) => (
              <button
                key={index}
                className={`${
                  activeTab === tab.title
                    ? "text-black bg-green hover:text-white hover:bg-primary hover:border hover:border-[yellow]"
                    : "text-white bg-primary border border-[yellow] hover:text-black hover:bg-green hover:shadow-xl"
                } border rounded-lg gap-2 sm:text-xs p-2 md:px-4 md:py-2 flex items-center justify-center`}
                onClick={() => handleTabClick(tab.title)}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        <div id="">
          {section.map((tab) => (
            <div key={tab.title}>
              {activeTab === tab.title && (
                <HoverCard
                  description={tab.description}
                  imageUrl={tab.image}
                  title={tab.title}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
