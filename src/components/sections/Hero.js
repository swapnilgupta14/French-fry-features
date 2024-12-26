"use client";

import React, { useRef, useEffect } from "react";
import RotatingText from "@/components/common/RotatingText";
import Image from "next/image";
import DownArrow from "/public/DownArrow.svg";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const scrollToScroller = () => {
    const scrollerContainer = document.getElementById(
      "scroller-container-pixel"
    );
    if (scrollerContainer) {
      scrollerContainer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero-section-scroll"
      className="sticky-container flex md:flex-row items-center justify-between text-fontColor h-[91vh] w-full overflow-hidden"
    >
      <div className="w-full text-center md:text-left space-y-6 p-10 text-fontColor relative">
        <h1 className="text-3xl md:text-[9rem] leading-tight px-20 custom-font">
          <span>Crafting</span>

          <span className="flex items-center ">
            <div
              className="relative inset-0 flex items-center justify-center z-10 hover:cursor-pointer bg-white border-2 border-gray-700 h-20 w-20 rounded-full group"
              onClick={() => {
                scrollToScroller();
              }}
            >
              <div className="absolute inset-0 rounded-full animate-ping-slow border-2 border-gray-700 opacity-75"></div>
              <Image src={DownArrow} alt="North East Arrow" />
            </div>
            <p className=" text-accent px-7 font-semibold">
              <span className="poppins-semibold-italic">I</span>MP
              <span className="poppins-semibold-italic">A</span>CTFU
              <span className="poppins-semibold-italic">L</span>
            </p>
          </span>

          <span className="">Brand Experience</span>
        </h1>

        <div className="flex flex-col justify-center items-end px-[10rem] py-6 ">
          <div className="text-lg md:text-xl">
            We focus on transforming your vision into{" "}
            <p className="text-accent inline-block font-medium">
              Unmatched Results
            </p>{" "}
            by
          </div>
          <div className="text-lg md:text-xl ">
            shaping the Future of Your Brand with{" "}
            <p className="text-accent inline-block font-medium">
              Cutting-Edge Design and Excellence.
            </p>
          </div>
        </div>

        <div className="h-[25rem] w-[23rem] absolute top-16 right-24 z-10 hover:cursor-pointer">
          <video
            ref={videoRef}
            className="object-cover rounded-xl"
            muted
            loop
            playsInline
          >
            <source
              src="https://res.cloudinary.com/dml6gxfmn/video/upload/v1734313698/videos1_r2lzed.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="flex items-center absolute top-0 right-96 z-10 hover:cursor-pointer">
          <RotatingText
            text="Crafting Brands • Design Excellence • Innovation •"
            imageSrc="https://res.cloudinary.com/dml6gxfmn/image/upload/v1734314237/NE_Arrow_Icon_dlskzh.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
