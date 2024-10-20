import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  useGSAP(() => {
    const myText = new SplitType("#text-split");
    // console.log(myText);
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "#text-split",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
    });
  });

  return (
    <div className="w-full h-[100vh] flex flex-col justify-end items-center relative">
      <div className="absolute top-14 left-10 z-10 px-10">
        <p id="text-split" className="text-6xl font-medium leading-[5rem]">
          We design, build and ship world-class digital products for
          forward-thinking brands.
        </p>
      </div>

      <div className="flex justify-evenly items-start px-10">
        <div className="relative w-[35%] h-auto mb-[6rem]">
          <img src={"/images/Abstarct.png"} alt="Abstract Design" />
        </div>
        <div className="flex items-center justify-center flex-col">
          <p className="text-2xl text-black text-center max-w-3xl mb-8 px-44">
            We design, build and ship world-class digital products for
            forward-thinking brands.
          </p>
          <button className="bg-accent font-semibold px-6 py-3 rounded-md hover:text-white transition duration-300 ease-in-out">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
