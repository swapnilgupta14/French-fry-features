import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const servicesData = [
  { name: "Branding", mediaType: "image", src: "/images/S1.jpg" },
  { name: "Brand Strategy", mediaType: "image", src: "/images/S2.jpg" },
  { name: "Motion Graphics", mediaType: "image", src: "/images/S3.jpg" },
  { name: "Video Editing", mediaType: "image", src: "/images/S1.jpg" },
  { name: "3D Animation", mediaType: "image", src: "/images/S2.jpg" },
  { name: "Web Design", mediaType: "image", src: "/images/S1.jpg" },
  { name: "Advertising", mediaType: "image", src: "/images/S3.jpg" },
];

const Services = () => {
  const [currentService, setCurrentService] = useState(servicesData[0]);
  const serviceRef = useRef([]);
  const imageContainerRef = useRef(null);
  const circleRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });
    tl.fromTo(
      serviceRef.current,
      {
        y: 50,
        opacity: 0,
        scale: 0.9,
      },
      {
        duration: 0.7,
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "-=0.7"
    );
  });

  useEffect(() => {
    const rect = imageContainerRef.current.getBoundingClientRect();
    gsap.set(circleRef.current, {
      x: rect.width - circleRef.current.offsetWidth - 280,
      y: rect.height - circleRef.current.offsetHeight - 270,
    });
  }, []);

  const handleMouseMove = (e) => {
    const x = e.clientX - 430;
    const y = e.clientY - 430;

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
          duration: 1,
          ease: "power2.out",
        });
      },
    });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="h-screen w-[50%] py-10 flex flex-col items-end gap-16 z-20">
        <h2 className="self-start px-20 font-medium text-3xl mt-5">
          Service We Offer
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

      <div className="w-[50%] h-screen px-20 py-10 flex items-center justify-center">
        <ul className="mt-8 space-y-4 z-20">
          {servicesData.map((service, index) => (
            <li
              key={index}
              ref={(el) => (serviceRef.current[index] = el)}
              className={`cursor-pointer font-medium text-fontColor hover:text-accent overflow-hidden ${
                currentService.name === service.name && "text-accent"
              }`}
              // onMouseEnter={() => setCurrentService(service)}
              onMouseEnter={() => handleHover(service)}
            >
              <div className="group relative cursor-pointer text-[4.2rem] leading-[5rem]">
                <span className="inline-block transition duration-500 ease-out group-hover:-translate-y-[140%]">
                  {service.name}
                  <span className="text-sm">(0{index + 1})</span>
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
