/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import ButtonBlank from "../Atoms/Button/ButtonBlank";

export default function Credits() {
  return (
    <main>
        <main
          className="flex justify-center pt-12"
          style={{
            backgroundImage: `url(${"/icons/white2_qkbyoe.svg"})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <section className="md:w-[80%] sm:w-[80%] mt-28 py-12">
            <div className="flex justify-center">
              <div className="w-full">
                <h1 className="capitalize md:text-center text-primary">
                  Credits and Recognition
                </h1>
              </div>
            </div>
            <div className="flex w-full justify-center">
              <div className="flex md:w-[90%] sm:flex-wrap my-12 gap-16 sm:flex-wrap">
                <div className="md:w-1/2 sm:w-full">
                <div className="h-24">
                        <img src="https://greenhillsacademy.rw:8081/images/Fabritech_Logo_Transparent_1_ozofug.png" alt="" />
                    </div>
                    <h2 className="text-primary md:mb-6 sm:mb-4 font-bold uppercase">
                    Fabritech Ltd
                  </h2>
                    <div className="">
                      <p className="pb-6 text-justify">
                        {" "}
                        Fabritech Ltd was involved in the supervision and
                        oversight of the website&apos;s creation, providing expertise
                        in project management, quality assurance, and
                        coordination between teams.
                      </p>
                      <p className="pb-6">
                        {" "}
                        <span className="font-bold text-primary">
                          Managing Director:
                        </span>{" "}
                        Sugira Fabrice
                      </p>
                      <p className="pb-6">
                        <span className="font-bold text-primary">Email:</span>{" "}
                        <Link
                          href={"mailto:info@fabritech.rw"}
                          className="hover:text-primary underline  md:text-[1.3vw] sm:text-[1.05rem]"
                        >
                          info@fabritech.rw
                        </Link>
                      </p>
                      <p className="pb-6">
                        <span className="font-bold text-primary">Phone:</span>{" "}
                        <Link
                          href={"tel:+250788601280"}
                          className="hover:text-primary underline  md:text-[1.3vw] sm:text-[1.05rem]"
                        >
                          +250 788 601 280
                        </Link>
                      </p>
                      <ButtonBlank
                        name="Explore Website"
                        action="https://fabritech.rw"
                        background="#018c79"
                        color="#fff"
                      />
                    </div>
                </div>
                <div className="md:w-1/2 sm:w-full sm:mt-12">
                    <div className="h-24">
                        <img src="https://greenhillsacademy.rw:8081/images/elite_wuhppu.png" alt="" />
                    </div>
                  <h2 className="text-primary md:mb-6 sm:mb-4 font-bold uppercase">
                    Elite-HYO Group Ltd
                  </h2>
                  <div>
                    <div className="">
                      <p className="pb-6 text-justify">
                        Elite-HYO Group Ltd was involved in the development of
                        this website, contributing expertise in frontend and
                        backend development, design, and deployment.
                      </p>
                      <p className="pb-6">
                        {" "}
                        <span className="font-bold text-primary">
                          Team Lead:
                        </span>{" "}
                        Yvon Mutuyeyezu
                      </p>
                      <p className="pb-6">
                        <span className="font-bold text-primary">Email:</span>{" "}
                        <Link
                          href={"mailto:yvon@elitehyogroup.com"}
                          className="hover:text-primary underline  md:text-[1.3vw] sm:text-[1.05rem]"
                        >
                          yvon@elitehyogroup.com
                        </Link>
                      </p>
                      <p className="pb-6">
                        <span className="font-bold text-primary">Phone:</span>{" "}
                        <Link
                          href={"tel:+250788701902"}
                          className="hover:text-primary underline  md:text-[1.3vw] sm:text-[1.05rem]"
                        >
                          +250 788 701 902
                        </Link>
                      </p>
                      <ButtonBlank
                        name="Explore Website"
                        action="https://elitehyogroup.com/"
                        background="#018c79"
                        color="#fff"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
    </main>
  );
}
