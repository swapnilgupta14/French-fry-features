import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const ThreeSectionComponent = () => {
  const [hovered, setHovered] = useState(null);
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    gsap.set(sectionRefs[0].current, { width: "33.33%" });
    gsap.set(sectionRefs[1].current, { width: "50%" });
    gsap.set(sectionRefs[2].current, { width: "33.33%" });
  }, []);

  useEffect(() => {
    sectionRefs.forEach((ref, i) => {
      gsap.to(ref.current, {
        width: hovered === i ? "50%" : hovered === null ? "33.33%" : "25%",
        duration: 0.2,
        ease: "power1.out",
      });
    });

    if (hovered === null) {
      gsap.to(sectionRefs[1].current, {
        width: "50%",
        duration: 0.2,
        ease: "power1.out",
      });
    }
  }, [hovered]);

  return (
    <div className="flex h-screen justify-between bg-gray-300">
      <div
        ref={sectionRefs[0]}
        className="bg-gray-200 h-full cursor-pointer transition-all duration-600"
        onMouseEnter={() => setHovered(0)}
        onMouseLeave={() => setHovered(null)}
      >
        <div className="flex justify-center items-center h-full text-white text-2xl font-bold">
          Section 1
        </div>
      </div>

      <div
        ref={sectionRefs[1]}
        className="bg-gray-300 h-full cursor-pointer transition-all duration-600"
        onMouseEnter={() => setHovered(1)}
        onMouseLeave={() => setHovered(null)}
      >
        <div className="flex justify-center items-center h-full text-white text-2xl font-bold">
          Section 2
        </div>
      </div>

      <div
        ref={sectionRefs[2]}
        className="bg-gray-400 h-full cursor-pointer transition-all duration-600"
        onMouseEnter={() => setHovered(2)}
        onMouseLeave={() => setHovered(null)}
      >
        <div className="flex justify-center items-center h-full text-white text-2xl font-bold">
          Section 3
        </div>
      </div>
    </div>
  );
};

export default ThreeSectionComponent;
