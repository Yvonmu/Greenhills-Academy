import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import CardSection from "../Cards/CardSection";
import { useScroll } from "framer-motion";

interface SectionProps {
  title: string;
  endpoint: string;
}
export default function MissionSection({ title, endpoint }: SectionProps) {
  const [section, setSection] = useState<any[]>([]);
  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/${endpoint.toLowerCase()}`);
      setSection(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <div className="w-full flex justify-center h-full pb-12">
      {title && (
        <div>
          <h1>{title}</h1>
        </div>
      )}
      <div className="grid md:grid-cols-2 w-[80%] gap-8 h-full">
        {section.map((project, i) => {
          const targetScale = 1 - (section.length - i) * 0.05;
          return (
            <CardSection
              key={`p_${i}`}
              i={i}
              backgroundColor="#018c79"
              color="#fff"
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
}
