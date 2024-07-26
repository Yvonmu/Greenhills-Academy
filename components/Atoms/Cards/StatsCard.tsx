import Image from 'next/image';
import React, { useEffect } from 'react';

interface StatsCardProps {
  statsCount: number;
  title: string;
  icon: string;
}

export default function StatsCard({ statsCount, title, icon }: StatsCardProps) {
  useEffect(() => {
    const fetchData = async () => {
      const intervalId = setInterval(() => {
        // Update statsCount directly
        statsCount < statsCount ? statsCount + 60 : statsCount;
      }, 1000);

      // Cleanup interval on component unmount
      return () => clearInterval(intervalId);
    };

    fetchData();
  }, [statsCount]);

  return (
    <div className="flex flex-col md:gap-4 items-center">
      <div className="flex justify-center">
        <Image unoptimized
          placeholder="empty"
          blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
          width={0}
          height={0}
          sizes="100vw"
          src={icon}
          alt="Image"
          className="sm:w-[30px] sm:h-[30px] w-[80px] h-[80px]"
        />
      </div>
      <h1 className="text-center text-[yellow] font-black">{statsCount}</h1>
      <p className="sm:text-xs text-white text-center">{title}</p>
    </div>
  );
}
