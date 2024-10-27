import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const circleRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;

      gsap.to(circleRef.current, {
        x: x - 15,
        y: y - 15,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(dotRef.current, {
        x: x - 4,
        y: y - 4,
        duration: 1,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    let timeoutId = null;

    const handleMouseMove = (dets) => {
      const x = dets.clientX - 5;
      const y = dets.clientY - 4;

      const cursor = document.querySelector(".cursor");
      if (cursor === null) return;

      cursor.style.display = "block";
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        cursor.style.display = "none";
      }, 1000);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div
        ref={circleRef}
        className="w-8 h-8 border border-black rounded-full fixed top-0 left-0 pointer-events-none cursor-cicle"
        style={{ zIndex: 10 }}
      ></div>

      <div
        ref={dotRef}
        className="w-2 h-2 bg-accent rounded-full fixed top-0 left-0 pointer-events-none dot-color"
        style={{ zIndex: 10 }}
      ></div>
    </>
  );
};

export default CustomCursor;