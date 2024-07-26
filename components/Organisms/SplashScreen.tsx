/* eslint-disable @next/next/no-img-element */

import React from "react";

const SplashScreen = () => {
  return (
    <section
      className="splash-screen"
      style={{
        backgroundImage: `url(/icons/bgwhiteyello2_fczk4h.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-[150px] sm:h-[60px]">
        <img
          src="https://greenhillsacademy.rw:8081/images/logo_pjrxda.png"
          alt="Logo Top"
          className="object-cover sm:object-contain animate-spin-slow h-full w-full"
        />
      </div>
    </section>
  );
};

export default SplashScreen;
