import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ArrowRight, Send, Check, Rocket } from "lucide-react";
import Link from "next/link";

const ThreeSectionComponent = () => {
  const [hovered, setHovered] = useState(null);
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  // useEffect(() => {
  //   gsap.set(sectionRefs[0].current, { width: "33.33%" });
  //   gsap.set(sectionRefs[1].current, { width: "50%" });
  //   gsap.set(sectionRefs[2].current, { width: "33.33%" });
  // }, []);

  // useEffect(() => {
  //   sectionRefs.forEach((ref, i) => {
  //     gsap.to(ref.current, {
  //       width: hovered === i ? "50%" : hovered === null ? "33.33%" : "25%",
  //       duration: 0.1,
  //       ease: "power1.out",
  //     });
  //   });

  //   if (hovered === null) {
  //     gsap.to(sectionRefs[1].current, {
  //       width: "50%",
  //       duration: 0.1,
  //       ease: "power1.out",
  //     });
  //   }
  // }, [hovered]);

  return (
    <div className="flex h-screen justify-between bg-gray-300">
      <div
        ref={sectionRefs[0]}
        className="relative bg-gray-200 h-full cursor-pointer transition-all duration-600 z-20 overflow-hidden"
        onMouseEnter={() => setHovered(0)}
        onMouseLeave={() => setHovered(null)}
      >
        <img
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110"
          src="/images/CTA2.jpg"
          alt="Services Background"
        />

        <div className="relative z-10 flex flex-col justify-center items-start p-12 lg:p-16 xl:p-20 text-white h-full bg-black bg-opacity-40">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            Our Creative Services
          </h2>
          <ul className="space-y-4 text-lg lg:text-xl xl:text-2xl">
            {[
              "Brand Identity Design",
              "UI/UX Design",
              "Digital Marketing",
              "Web Development",
            ].map((service, index) => (
              <li key={index} className="flex items-center">
                <Check className="mr-3 text-green-400 flex-shrink-0" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
          
        </div>
      </div>

      <div
        ref={sectionRefs[1]}
        className="relative bg-gray-300 h-full cursor-pointer transition-all duration-600 z-20 overflow-hidden"
        onMouseEnter={() => setHovered(1)}
        onMouseLeave={() => setHovered(null)}
      >
        <img
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110"
          src="/images/CTA3.jpg"
          alt="Work With Us Background"
        />

        <div className="relative z-10 flex flex-col justify-center items-start p-12 lg:p-16 xl:p-20 text-white h-full bg-black bg-opacity-40">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            Let's Collaborate
          </h2>
          <p className="text-lg lg:text-xl xl:text-2xl mb-8 max-w-md leading-relaxed">
            Transform your digital presence with our expert team. We turn
            innovative ideas into stunning realities. Our comprehensive approach
            combines strategic thinking and creative design to deliver
            exceptional digital solutions.
          </p>
       
          <div className="w-full">
            <Link href={"/connect"}>
              <button className="w-full bg-white text-black py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition duration-300 flex items-center justify-center">
                <Send className="mr-3" /> Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div
        ref={sectionRefs[2]}
        className="relative bg-gray-400 h-full cursor-pointer transition-all duration-600 overflow-hidden"
        onMouseEnter={() => setHovered(2)}
        onMouseLeave={() => setHovered(null)}
      >
        <img
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110"
          src="/images/CTA1.jpg"
          alt="CTA Background"
        />

        <div className="relative z-10 flex flex-col justify-center items-start p-12 lg:p-16 xl:p-20 text-white h-full bg-black bg-opacity-40">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            Elevate Your Brand
          </h2>
          <p className="text-lg lg:text-xl xl:text-2xl mb-8 max-w-md leading-relaxed">
            We craft exceptional digital experiences that drive growth and leave
            a lasting impact on your audience.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default ThreeSectionComponent;
