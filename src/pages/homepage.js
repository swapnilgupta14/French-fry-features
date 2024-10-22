import React from "react";
import Header from "@/components/common/Header";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import ContactUs from "@/components/sections/ContactUs";
import Services from "@/components/sections/Services";
import Scroller from "@/components/sections/Scroller";

const Homepage = () => {
  return (
    <div className="flex flex-col justify-start items-center overflow-hidden">
      <Header />
      <Hero />
      <Projects />
      <ContactUs />
      <div className="h-[20vh] w-screen"></div>
      <Services />
      <div className="h-[30vh] w-screen"></div>
      <Scroller />
    </div>
  );
};

export default Homepage;
