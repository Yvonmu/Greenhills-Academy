/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Cards/Card";
import SchoolCardButton from "../Cards/SchoolCardButton";
interface SectionProps {
  title: string;
  endpoint: string;
  landing: boolean;
}
export default function SchoolCardSection({
  title,
  endpoint,
  landing,
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

  return (
    <div className="flex justify-center">
      <div className="w-[80%] flex flex-col gap-8 py-16">
        {title && <h1 className={`text-primary font-bold`}>{title}</h1>}
        <div className="cards">
          {section.map((card, index) =>
            landing === true ? (
              <Card
                key={index}
                title={card.title}
                image={card.image}
                description={card.link}
              />
            ) : (
              <SchoolCardButton
                key={index}
                title={card.title}
                image={card.image}
                url={card.link}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
