import React, { useEffect, useState } from "react";
import gsap from "gsap";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onUpdate: () => setProgress(Math.floor(tl.progress() * 100)),
      onComplete: () => {
        setProgress(100);
        setTimeout(() => {
          // Smoothly scale "Company" text up at a steady speed
          gsap.to("#company-text", {
            scale: 100, // Large scale factor to fill the screen
            duration: 1,
            ease: "linear", // Constant speed
            opacity: 0,
            onComplete: () => {
              // Fade out the loading screen and allow page transition
              gsap.to("#loading-screen", {
                opacity: 0,
                duration: 1,
                onComplete: () => {
                  document.getElementById("loading-screen").style.display = "none";
                  document.body.style.overflow = ""; // Re-enable scrolling
                },
              });
            },
          });
        }, 600);
      },
    });

    tl.to({}, { duration: 1 });

    gsap.to("#blob", {
      duration: 8,
      rotation: 360,
      repeat: -1,
      ease: "linear",
      background: "conic-gradient(from 180deg, #ff6ec4, #7873f5, #42e695, #ff6ec4)",
      backgroundSize: "400% 400%",
      animation: "colorShift 10s linear infinite",
    });

    return () => {
      document.body.style.overflow = ""; 
    };
  }, []);

  return (
    <div
      id="loading-screen"
      className="fixed inset-0 flex items-center justify-center bg-black text-white z-50"
    >
      {/* Large, blurred, rotating, and color-shifting blob */}
      <div
        id="blob"
        className="w-[600px] h-[600px] rounded-full opacity-40"
        style={{
          filter: "blur(100px)", // Soft blur
          cursor: "pointer",
        }}
      ></div>

      {/* Company Text with continuous scale-up effect */}
      <div
        id="company-text"
        className="absolute text-9xl font-bold opacity-80"
        style={{ color: "#ffffff" }}
      >
        Company
      </div>

      <span className="fixed bottom-2 right-20 text-[13em] font-bold custom-font flex flex-col items-end justify-end">
        {progress}
      </span>
    </div>
  );
}
