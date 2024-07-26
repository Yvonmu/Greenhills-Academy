/* eslint-disable @next/next/no-img-element */
// components/ImageDesign/Four.tsx

import Image from "next/image";
import React from "react";

interface Props {
  images: string | string[];
  color: string;
}

const Four: React.FC<Props> = ({ images, color }) => {
  return (
    <div className="w-full mt-4 grid grid-cols-2 gap-4 h-full">
      <div className="h-[300px]">
        <Image
          unoptimized
          placeholder="empty"
          blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
          width={0}
          height={0}
          sizes="100vw"
          src={images[0]}
          alt="Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="h-[300px]">
        <Image
          unoptimized
          placeholder="empty"
          blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
          width={0}
          height={0}
          sizes="100vw"
          src={images[1]}
          alt="Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="h-[300px]">
        <Image
          unoptimized
          placeholder="empty"
          blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
          width={0}
          height={0}
          sizes="100vw"
          src={images[2]}
          alt="Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="h-[300px]">
        <Image
          unoptimized
          placeholder="empty"
          blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
          width={0}
          height={0}
          sizes="100vw"
          src={images[3]}
          alt="Image"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Four;
