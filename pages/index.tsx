import GetData from "@/components/Molecules/GetData";
import React from "react";

const Home = () => {
  return (
    <main className="w-full">
      <GetData endpoint={"/api/transfer/landing"} landing={true} />
    </main>
  );
};

export default Home;
