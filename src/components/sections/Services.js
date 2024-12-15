import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const servicesData = [
  { name: "Web Apps", mediaType: "image", src: "/images/S1.jpg" },
  { name: "B2B Websites", mediaType: "image", src: "/images/S2.jpg" },
  { name: "UI/UX Designing", mediaType: "image", src: "/images/S3.jpg" },
  { name: "Shopify", mediaType: "image", src: "/images/S1.jpg" },
  { name: "Framer", mediaType: "image", src: "/images/S2.jpg" },
];

const Services = () => {
  const [currentService, setCurrentService] = useState(servicesData[0]);
  const serviceRef = useRef([]);
  const imageContainerRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const rect = imageContainerRef.current.getBoundingClientRect();
    gsap.set(circleRef.current, {
      x: rect.width - circleRef.current.offsetWidth - 280,
      y: rect.height - circleRef.current.offsetHeight - 270,
    });
  }, []);

  const handleMouseMove = (e) => {
    const x = e.clientX - 390;
    const y = e.clientY - 410;

    gsap.to(circleRef.current, {
      x: x - circleRef.current.offsetWidth / 2,
      y: y - circleRef.current.offsetHeight / 2,
      duration: 1,
      ease: "power2.out",
    });
  };

  const handleHover = (service) => {
    gsap.to(imageContainerRef.current, {
      opacity: 0.8,
      scale: 0.95,
      duration: 0.05,
      onComplete: () => {
        setCurrentService(service);

        gsap.to(imageContainerRef.current, {
          opacity: 1,
          scale: 1,
          rotation: gsap.utils.random(-3, 3),
          duration: 0.7,
          ease: "power2.out",
        });
      },
    });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center z-10 ">
      <div className="h-screen w-[45%] py-10 flex flex-col items-end gap-16 z-20">
        <h2 className="self-start px-20 font-semibold text-3xl mt-5">
          Services We Offer
        </h2>
        <div
          className="relative flex items-center justify-center w-[80%] h-[80%] object-cover overflow-hidden rounded-3xl shadow-lg hover:cursor-pointer"
          ref={imageContainerRef}
          onMouseMove={handleMouseMove}
        >
          {currentService.mediaType === "image" ? (
            <Image
              src={currentService.src}
              alt={currentService.name}
              width={800}
              height={800}
              className="rounded-lg shadow-lg object-cover"
            />
          ) : (
            <video
              src={currentService.src}
              controls
              autoPlay
              loop
              muted
              className="rounded-lg shadow-lg"
              width={400}
              height={600}
            />
          )}
          <div
            ref={circleRef}
            className="absolute w-20 h-20 text-sm rounded-full bg-black text-white flex items-center justify-center pointer-events-none"
          >
            Know <br />
            More
          </div>
        </div>
      </div>

      <div className="w-[55%] h-screen px-20 py-10 flex items-center justify-center ">
        <ul className="mt-8 z-20 p-5 w-full">
          {servicesData.map((service, index) => (
            <li
              key={index}
              ref={(el) => (serviceRef.current[index] = el)}
              className={`cursor-pointer font-medium text-fontColor hover:text-accent overflow-hidden custom-font ${
                currentService.name === service.name && "text-accent"
              }`}
              onMouseEnter={() => handleHover(service)}
            >
              <div className="group relative cursor-pointer text-[4.2rem] leading-[5rem]">
                <span className="inline-block transition duration-500 ease-out group-hover:-translate-y-[140%] ">
                  {service.name}
                  <span className="text-[1rem] mx-3">(0{index + 1})</span>
                </span>
                <span className="absolute left-0 translate-y-[200%] rotate-12 inline-block transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
                  {service.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
