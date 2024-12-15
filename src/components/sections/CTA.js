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
        duration: 0.1,
        ease: "power1.out",
      });
    });

    if (hovered === null) {
      gsap.to(sectionRefs[1].current, {
        width: "50%",
        duration: 0.1,
        ease: "power1.out",
      });
    }
  }, [hovered]);

  return (
    <div className="flex h-screen justify-between bg-gray-300">
      {/* Services Section */}
      <div
        ref={sectionRefs[0]}
        className="bg-gray-200 h-full cursor-pointer transition-all duration-600 z-20"
        onMouseEnter={() => setHovered(0)}
        onMouseLeave={() => setHovered(null)}
      >
        <div className="flex flex-col justify-center items-center h-full text-gray-800 text-xl font-semibold p-4">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <ul className="space-y-2 text-center">
            <li>Web Apps (01)</li>
            <li>B2B Websites (02)</li>
            <li>UI/UX Designing (03)</li>
            <li>Shopify (04)</li>
            <li>Framer (05)</li>
          </ul>
        </div>
      </div>

      {/* Contact Us Section */}
      <div
        ref={sectionRefs[1]}
        className="bg-gray-300 h-full cursor-pointer transition-all duration-600 z-20"
        onMouseEnter={() => setHovered(1)}
        onMouseLeave={() => setHovered(null)}
      >
        <div className="flex flex-col justify-center items-center h-full text-gray-800 text-xl font-semibold p-6">
          <h2 className="text-4xl font-bold text-accent mb-6">Contact Us</h2>
          <p className="text-center mb-4">
            Have a project in mind? We’d love to hear from you! Let’s create
            something amazing together.
          </p>
          <button className="px-6 py-3 bg-accent text-white rounded-md shadow-md hover:bg-opacity-90">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Call to Action Section */}
      <div
        ref={sectionRefs[2]}
        className="bg-gray-400 h-full cursor-pointer transition-all duration-600"
        onMouseEnter={() => setHovered(2)}
        onMouseLeave={() => setHovered(null)}
      >
        <div className="flex flex-col justify-center items-center h-full text-white text-xl font-semibold p-4">
          <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
          <p className="text-center mb-4">
            Take the next step toward building your digital future.
          </p>
          <button className="px-6 py-3 bg-white text-gray-800 rounded-md shadow-md hover:bg-opacity-90">
            Start a Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreeSectionComponent;
