import GetData from "@/components/Molecules/GetData";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Learners_tab() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("extracurricular");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    router.push(`#?tab=${tab}`, undefined, { shallow: true });
  };

  useEffect(() => {
    const { tab } = router.query;
    if (typeof tab === "string") {
      setActiveTab(tab);
    }
  }, [router.query]);

  return (
    <main className="w-full">
      <GetData endpoint={"/api/transfer/learners"} />

      <section
        style={{
          backgroundImage: `url(${"/icons/bgwhite2_lpw73r.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="flex gap-4 justify-center">
          <ul className="flex w-[80%] mt-12 md:justify-between sm:overflow-x-auto justify-between items-center md:p-4 sm:pb-6 border-b-2 rounded-xl bg-green">
            <li className="mr-4">
              <Link
                className={`text-black md:p-4 sm:pb-6 hover:text-primary font-[Outfit] relative ${
                  activeTab === "extracurricular" ? "font-bold" : ""
                }`}
                href="#?tab=extracurricular"
                onClick={() => handleTabClick("extracurricular")}
              >
                Extracurricular&nbsp;Activities
                {activeTab === "extracurricular" && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary font-[Outfit]"></span>
                )}
              </Link>
            </li>
            <li className="mr-4">
              <Link
                className={`text-black md:p-4 sm:pb-6 hover:text-primary font-[Outfit] relative ${
                  activeTab === "counselor" ? "font-bold" : ""
                }`}
                href="#?tab=counselor"
                onClick={() => handleTabClick("counselor")}
              >
                Counselling&nbsp;Department
                {activeTab === "counselor" && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary font-[Outfit]"></span>
                )}
              </Link>
            </li>
            <li className="mr-4">
              <Link
                className={`text-black md:p-4 sm:pb-6  hover:text-primary font-[Outfit] relative ${
                  activeTab === "creative" ? "font-bold" : ""
                }`}
                href="#?tab=creative"
                onClick={() => handleTabClick("creative")}
              >
                Creative&nbsp;Offers
                {activeTab === "creative" && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary font-[Outfit]"></span>
                )}
              </Link>
            </li>
            <li className="mr-4">
              <Link
                className={`text-black md:p-4 sm:pb-6 hover:text-primary font-[Outfit] relative ${
                  activeTab === "clubs" ? "font-bold" : ""
                }`}
                href="#?tab=clubs"
                onClick={() => handleTabClick("clubs")}
              >
                Learners&nbsp;Clubs
                {activeTab === "clubs" && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary font-[Outfit]"></span>
                )}
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-center">
          {activeTab === "extracurricular" && (
            <div id="extracurricular">
              <GetData endpoint={"/api/transfer/extracurricular"} />
            </div>
          )}
          {activeTab === "counselor" && (
            <div id="counselor">
              <GetData endpoint={"/api/transfer/counselor"} />
            </div>
          )}
          {activeTab === "creative" && (
            <div id="creative">
              <GetData endpoint={"/api/transfer/creative"} />
            </div>
          )}

          {activeTab === "clubs" && (
            <div id="clubs">
              <GetData endpoint={"/api/transfer/clubs"} />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
