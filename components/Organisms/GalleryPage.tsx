import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function GalleryPage() {
  const [formDataList, setFormDataList] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<any[]>("/api/gallery");
      setFormDataList(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(formDataList);
  return (
    <main className="w-full">
      <section
        className="w-full h-[80vh] gap-1 flex items-end justify-center "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(https://greenhillsacademy.rw:8081/images/gallerty_oqbprt.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <div className="flex justify-center">
            <div className="w-[55px] grid place-items-center">
              <div className="w-[18px] h-[7px] my-2 bg-[yellow]" />
              <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
            </div>
          </div>
          <h1 className="text-primary uppercase">SCHOOL GALLERY</h1>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `url(/icons/bgwhiteyellow_mekqvs.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center my-4">
          <div className="w-[80%] p-4 bg-white border rounded-xl gap-12 cardGrid">
            {formDataList.map((item, index) => (
              <div key={index} className="my-4 h-[300px] w-full">
                <Image
                  unoptimized
                  placeholder="empty"
                  blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  src={item.imageUrls[0]}
                  alt={`Image ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
