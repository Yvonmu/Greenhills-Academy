/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReasonsCard from "../Cards/ReasonsCard";
interface SectionProps {
  title: string;
  endpoint: string;
}
export default function ReasonToJoinSection({ title, endpoint }: SectionProps) {
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
    <div
      className="flex bg-green justify-center md:h-[100%] items-center"
      style={{
        backgroundImage: `url(${"/icons/lightgreen2_xytlj8.svg"}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[80%] flex flex-col py-8">
        {title && (
          <div>
            <div className="flex justify-center">
              <div className="w-[55px] grid place-items-center">
                <div className="w-[18px] h-[7px] my-2 bg-primary" />
                <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
              </div>
            </div>
            <h2 className="text-center text-primary font-semibold uppercase">
              {title}
            </h2>
          </div>
        )}
        <ReasonsCard ReasonToJoin={section} />
      </div>
    </div>
  );
}
