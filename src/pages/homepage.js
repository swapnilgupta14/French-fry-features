import React from "react";
import Header from "@/components/common/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ContactUs from "@/components/ContactUs";

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
