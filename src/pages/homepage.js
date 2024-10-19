import React from "react";
import Header from "@/components/common/Header";
import Hero from "@/components/Hero";

const Homepage = () => {
  return (
    <div className="flex flex-col justify-start items-center ">
      <Header />
      <div className="flex-1 w-full h-full">
        <Hero />
      </div>
    </div>
  );
};

export default Homepage;
