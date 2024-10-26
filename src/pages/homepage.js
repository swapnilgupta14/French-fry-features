import { useEffect, useRef } from "react";
import Header from "@/components/common/Header";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import ContactUs from "@/components/sections/ContactUs";
import Services from "@/components/sections/Services";
import Scroller from "@/components/sections/Scroller";
import Footer from "@/components/common/Footer";
import CTA from "@/components/sections/CTA";

import { gsap } from "gsap";
import Button from "@/components/common/Button";

const Homepage = () => {
  const seeProjectsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      seeProjectsRef.current,
      { scale: 1 },
      {
        scale: 1.05,
        duration: 0.3,
        ease: "power1.inOut",
        paused: true,
        yoyo: true,
        onHoverIn: () => gsap.to(seeProjectsRef.current, { scale: 1.05 }),
        onHoverOut: () => gsap.to(seeProjectsRef.current, { scale: 1 }),
      }
    );
  }, []);

  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <div className="h-[20vh] w-screen"></div>
      <CTA />
      <div className="h-[40vh] w-screen"></div>
      <Scroller />
      <div className="h-[40vh] w-screen"></div>
      <div className="h-[80vh] w-screen flex flex-col justify-center items-center bg-accent text-white px-4 space-y-8">
        <div className="text-center max-w-2xl">
          <h2 className="text-3xl md:text-7xl mb-10 leading-relaxed custom-font">
            We deliver outstanding results.
          </h2>
          <p className="text-lg md:text-xl font-normal opacity-90 ">
            Ready to Transform Your Vision into Reality? Check out our Lab to
            see more work.
          </p>
        </div>

        <div className="flex space-x-4">
          <Button
            label="See our Work"
            bgColor="bg-white"
            textColor="text-black"
            flairColor="bg-gray-400"
          />
        </div>
      </div>
      <div className="h-[20vh] w-screen"></div>
      <ContactUs />
      <div className="h-[20vh] w-screen"></div>
      <Services />
      <div className="h-[40vh] w-screen"></div>
      <Footer />
    </div>
  );
};

export default Homepage;
