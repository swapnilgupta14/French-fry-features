"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RotatingText = ({ text, imageSrc }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  return (
    <div className="relative w-40 h-40 mx-auto md:mx-0 custom-font">
      <div
        ref={textRef}
        className="absolute inset-0 w-full h-full"
        style={{ transformOrigin: "center center" }}
      >
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <path
            id="curve"
            fill="transparent"
            d="M 50 50 m -25, 0 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0"
          />
          <text fontSize="8">
            <textPath xlinkHref="#curve">{text}</textPath>
          </text>
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          width={65}
          height={65}
          src={imageSrc}
          alt="North East Arrow"
          className="rounded-full border-2 border-black"
        />
      </div>
    </div>
  );
};

export default RotatingText;
