import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Image1 from "../../public/images/banner-1.png";
import Image2 from "../../public/images/banner-2.png";
import Image3 from "../../public/images/banner-3.png";
import Image4 from "../../public/images/banner-4.png";
import Image5 from "../../public/images/banner-5.png";
import UseLenis from "../utils/customHooks/UseLenis";

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
  UseLenis();
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create animations for each image
      imagesRef.current.forEach((image, index) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: image,
            start: "top center+=100",
            end: "bottom center-=100",
            scrub: 0.5, // Smooth scrubbing effect
            toggleActions: "play none none reverse",
            markers: false, // Set to true for debugging
          }
        });

        // Initial state
        gsap.set(image, {
          opacity: 0,
          scale: 0.8,
          y: 50
        });

        // Animation timeline
        tl.to(image, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power2.out"
        }).to(image, {
          opacity: 0.7,
          scale: 0.9,
          y: -30,
          duration: 1,
          ease: "power2.in"
        }, "+=0.5");

        // Parallax effect
        gsap.to(image, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto px-4 py-2 bg-red-500">
        <div className="space-y-10">
          {IMAGES_ARR.map((imgSrc, index) => (
            <div
              key={index}
              ref={el => imagesRef.current[index] = el}
              className="image-container relative transform-gpu"
            >
              <Image
                src={imgSrc}
                alt={`Banner ${index + 1}`}
                width={500}
                height={300}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Animation;