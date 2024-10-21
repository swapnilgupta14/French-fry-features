import React from "react";
import Header from "@/components/common/Header";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import ContactUs from "@/components/sections/ContactUs";

const Homepage = () => {
  return (
    <div className="flex flex-col justify-start items-center ">
      <Header />
      <Hero />
      <Projects />
      <ContactUs/>
    </div>
  );
};

export default Homepage;
