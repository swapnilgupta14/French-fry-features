import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Image1 from "../../public/images/banner-1.png";
import Image2 from "../../public/images/banner-2.png";
import Image3 from "../../public/images/banner-3.png";
import Image4 from "../../public/images/banner-4.png";
import Image5 from "../../public/images/banner-5.png";

gsap.registerPlugin(ScrollTrigger);

const IMAGES_ARR = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
];

const Animation = () => {
  const containerRef = useRef(null);
  let scrollTimeout;
  
  useEffect(() => {
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      gsap.to(containerRef.current, {
        scale: 0.88,
        duration: 0.3,
        ease: "power1",
      });
      scrollTimeout = setTimeout(() => {
        gsap.to(containerRef.current, {
          scale: 1,
          duration: 0.35,
          ease: "power1",
        });
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="px-1">
        <div
          ref={containerRef}
          className="h-full w-fit flex flex-col justify-center items-center space-y-5 p-6"
        >
          {IMAGES_ARR.map((imgSrc, index) => (
            <div key={index} className="w-full h-auto">
              <Image
                src={imgSrc}
                alt={`Banner ${index + 1}`}
                width={400}
                height={250}
                className="shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Animation;
