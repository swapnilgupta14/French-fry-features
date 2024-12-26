import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Header from "@/components/common/Header";
import Hero from "@/components/sections/Hero";
import Projects from "@/pages/Projects";
import ContactUs from "@/components/sections/ContactUs";
import Services from "@/components/sections/Services";
import Scroller from "@/components/sections/Scroller";
import Footer from "@/components/common/Footer";
import CTA from "@/components/sections/CTA";
import Button from "@/components/common/Button";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <div className="h-[5vh] w-screen"></div>
      <CTA />
      <div className="h-[10vh] w-screen"></div>
      <Scroller />
      <div className="h-[10vh] w-screen"></div>

      <ContactUs />
      <Services />
      <div className="h-[10vh] w-screen"></div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Homepage;

{
  /* <div className="animated-section h-[80vh] w-screen flex flex-col justify-center items-center bg-accent text-white px-4 space-y-8">
        <div className="text-center max-w-2xl">
          <h2 className="heading text-3xl md:text-7xl mb-10 leading-relaxed custom-font">
            We deliver outstanding results.
          </h2>
          <p className="paragraph text-md md:text-md font-normal opacity-90 animate-text">
            Ready to Transform Your Vision into Reality? Check out our Lab to
            see more work.
          </p>
        </div>

        <div className="button-container flex space-x-4">
          <Button
            label="See all projects"
            bgColor="bg-white"
            textColor="text-black"
            flairColor="bg-gray-400"
            path = "/Projects"
          />
        </div>
      </div> */
}
