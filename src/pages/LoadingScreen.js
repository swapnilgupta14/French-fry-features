import React, { useEffect, useState } from "react";
import gsap from "gsap";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onUpdate: () => setProgress(Math.floor(tl.progress() * 100)),
      onComplete: () => {
        setProgress(100);
        gsap.to("#loading-screen", {
          opacity: 0,
          duration: 2,
        });
      },
    });

    tl.to({}, { duration: 1.2 });

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      id="loading-screen"
      className="fixed inset-0 flex items-center justify-center bg-black text-white z-50"
    >
      {/* <div
        id="company-text"
        className="absolute text-9xl font-bold opacity-80"
        style={{ color: "#ffffff" }}
      >
        Company
      </div> */}

      <span className="fixed bottom-2 right-20 text-[13em] font-bold custom-font flex flex-col items-end justify-end">
        {progress}
      </span>
    </div>
  );
}
