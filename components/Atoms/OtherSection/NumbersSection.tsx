/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import StatsCard from "../Cards/StatsCard";
interface SectionProps {
  title: string;
  endpoint: string;
}
export default function NumbersSection({ title,endpoint }: SectionProps) {
  
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
  return  (
    <section
      className="w-full h-full py-16 bg-cover bg-no-repeat bg-center flex justify-center z-50"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${"https://greenhillsacademy.rw:8081/images/DSC_6818_fwdzpf.jpg"})`,
      }}
    >
      <div className="w-[80%] grid md:grid-cols-4 sm:grid-cols-2 flex items-center">
        {section.map((stats, i) => {
          return (
            <StatsCard
              key={i}
              icon={stats.iconUrl}
              statsCount={stats.number}
              title={stats.title}
            />
          );
        })}
      </div>
    </section>
  );
}
