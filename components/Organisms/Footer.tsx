/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import SocialMedia from "../Atoms/SocialMedia";
import axios from "axios";

const Footer = () => {
  const [sponsorshipImages, setSponsorshipImages] = useState<any[]>([]);
  const [navigationLogo, setNavigationLogo] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseNav = await axios.get<any[]>("/api/navigationLogo");
        setNavigationLogo(responseNav.data);
        const response = await axios.get<any[]>("/api/partnerLogo");
        setSponsorshipImages(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(sponsorshipImages);
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full"
      style={{
        backgroundImage: `url(${"/icons/bgwhite2_lpw73r.svg"})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full flex pt-12 justify-center">
        <div className="w-[80%]">
          <div className="px-8 bg-white grid place-items-end shadow shadow-primary md:rounded-[36px] sm:rounded-[20px]">
            <div className="md:flex md:justify-between md:py-16 py-4 grid md:gap-16 w-full">
              {navigationLogo.map(
                (logo, index) =>
                  logo.layoutSection === "left" && (
                    <div
                      key={index}
                      className="my-6 md:mb-0 flex justify-center"
                    >
                      <Link href={logo.url} className="flex items-center">
                        <img
                          src={logo.image[0]}
                          className="h-[150px] sm:h-[80px] object-contain"
                          alt="Logo"
                        />
                      </Link>
                    </div>
                  )
              )}

              <div className="grid grid-cols-2 gap-8 sm:gap-6 md:grid-cols-3 md:w-[80%]">
                <div>
                  <div className="flex flex-col sm:gap-4 h-full justify-between">
                    <Link href="/" className="hover:text-primary">
                      Home
                    </Link>
                    <Link href="/about" className="hover:text-primary">
                      About Us
                    </Link>
                    <Link href="/education" className="hover:text-primary">
                      Education
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col sm:gap-4 h-full justify-between">
                    <Link href="/news" className="hover:text-primary">
                      News & Events
                    </Link>
                    <Link href="/admission" className="hover:text-primary">
                      Admissions
                    </Link>
                    <Link href="/boarding" className="hover:text-primary">
                      Boarding
                    </Link>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col sm:gap-4 h-full justify-between">
                    <Link
                      href="https://maps.app.goo.gl/tvuSRKTnJSxwndN9A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      KG&nbsp;278&nbsp;St,&nbsp;Nyarutarama, Kigali
                    </Link>
                    <Link
                      href={"tel:+250735832348"}
                      className="hover:text-primary"
                    >
                      +250&nbsp;735&nbsp;832&nbsp;348
                    </Link>
                    <Link
                      href={"mailto:info@greenhillsacademy.rw"}
                      className="hover:text-primary"
                    >
                      info@greenhillsacademy.rw
                    </Link>
                  </div>
                </div>
              </div>
              {navigationLogo.map(
                (logo, index) =>
                  logo.layoutSection === "right" && (
                    <div
                      key={index}
                      className="my-6 md:mb-0 flex justify-center"
                    >
                      <Link
                        href={logo.url}
                        target="_blank"
                        className="flex items-center"
                      >
                        <img
                          src={logo.image[0]}
                          className="h-[150px] sm:h-[80px] object-contain"
                          alt="IB Logo"
                        />
                      </Link>
                    </div>
                  )
              )}
            </div>
            <div className="w-full justify-center flex">
              <div className="w-[80%]">
                <hr />
                <div className="flex md:pt-2 sm:py-2 w-full justify-center">
                  <div className="w-full">
                    <div className="flex justify-center w-full">
                      <Link
                        href={""}
                        className="text-black text-center my-2 pt-4 font-normal"
                      >
                        &copy;Greenhillsacademy {currentYear}
                      </Link>
                    </div>

                    <SocialMedia />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex md:pb-16 py-6 justify-center">
        <div className="w-full">
          <div className="grid grid-cols-7 md:gap-8 sm:px-2">
            {sponsorshipImages.map((item, index) => (
              <div
                key={index}
                className="md:h-16 sm:h-8 bg-contain bg-center"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${item.image[0].replace(
                    /\s/g,
                    "%20"
                  )})`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
