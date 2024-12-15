import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const Button = ({
  label,
  bgColor = "bg-gray-950", 
  textColor = "text-white", 
  flairColor = "bg-accent", 
  path = "/",
}) => {
  const flairRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!buttonRef.current || !flairRef.current) return;

    const button = buttonRef.current;
    const flair = flairRef.current;

    const xSet = gsap.quickSetter(flair, "xPercent");
    const ySet = gsap.quickSetter(flair, "yPercent");

    const handleMouseEnter = (e) => {
      const { left, top, width, height } = button.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;

      xSet(x);
      ySet(y);

      gsap.to(flair, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(button, {
        scale: 1.05,
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = (e) => {
      const { left, top, width, height } = button.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;

      gsap.killTweensOf(flair);

      gsap.to(flair, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(button, {
        scale: 1,
        boxShadow: "none",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseMove = (e) => {
      const { left, top, width, height } = button.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;

      gsap.to(flair, {
        xPercent: x,
        yPercent: y,
        duration: 0.4,
        ease: "power2",
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    button.addEventListener("mousemove", handleMouseMove);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      button.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Link href={path}>
      <button
        ref={buttonRef}
        className={`relative overflow-hidden px-4 py-2 ${bgColor} ${textColor} rounded-full z-20`}
      >
        <span className="relative z-10 text-sm font-semibold">{label}</span>
        <div
          ref={flairRef}
          className={`absolute inset-0 ${flairColor} rounded-full pointer-events-none`}
          style={{
            width: "100%",
            height: "100%",
            left: "-25%",
            top: "-25%",
            transform: "translate(-50%, -50%) scale(0)",
          }}
        ></div>
      </button>
    </Link>
  );
};

export default Button;
