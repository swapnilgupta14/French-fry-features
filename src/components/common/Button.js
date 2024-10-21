import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Button = ({ label }) => {
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

      // Animate flair
      gsap.to(flair, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });

      // Scale and shadow effect on button
      gsap.to(button, {
        scale: 1.05, // Scale up the button
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)", // Add shadow
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = (e) => {
      const { left, top, width, height } = button.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;

      gsap.killTweensOf(flair);

      // Reset flair animation
      gsap.to(flair, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      // Reset button scale and shadow
      gsap.to(button, {
        scale: 1, // Reset scale
        boxShadow: "none", // Remove shadow
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
    <button
      ref={buttonRef}
      className="relative overflow-hidden px-4 py-2 bg-gray-950 text-white rounded-full"
    >
      <span className="relative z-10 text-sm font-semibold">{label}</span>
      <div
        ref={flairRef}
        className="absolute inset-0 bg-accent rounded-full pointer-events-none"
        style={{
          width: "100%",
          height: "100%",
          left: "-25%",
          top: "-25%",
          transform: "translate(-50%, -50%) scale(0)",
        }}
      ></div>
    </button>
  );
};

export default Button;
