import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGsap } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGsap);
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  // const containerRefs = useRef([]);
  const projectData = [
    {
      name: "NovaDesign Studio",
      label: "AR Experience for Fashion Brand",
      description:
        "We created an immersive AR shopping experience, allowing customers to visualize products in real-time using their smartphones.",
      type: "AR",
      tech: "AR / 3D / Interactive Website",
      link: "https://example.com/ar-fashion",
      image: "/images/p1.png",
    },
    {
      name: "PixelVibe Creations",
      label: "3D Product Showcase for Tech Company",
      description:
        "Designed a 3D product showcase for a leading tech company to highlight their latest gadgets with interactive models and animations.",
      type: "3D",
      tech: "3D Modeling / Animation / Website Integration",
      link: "https://example.com/3d-tech",
      image: "/images/p1.png",
    },
    {
      name: "EvoBrand Collective",
      label: "Luxury Real Estate Website",
      description:
        "Developed a sleek and responsive website for a luxury real estate brand, focusing on high-quality visuals and seamless navigation.",
      type: "Website",
      tech: "React / Next.js / Tailwind CSS",
      link: "https://example.com/luxury-real-estate",
      image: "/images/p1.png",
    },
    {
      name: "AetherWave Design",
      label: "Brand Book for Modern Startup",
      description:
        "Designed a comprehensive brand book outlining the visual identity, tone, and guidelines for a modern tech startup.",
      type: "Book Design",
      tech: "Adobe Illustrator / InDesign / Photoshop",
      link: "https://example.com/startup-brand-book",
      image: "/images/p1.png",
    },
    {
      name: "LuminaGraph Studios",
      label: "E-commerce Website for Lifestyle Brand",
      description:
        "Created a user-friendly e-commerce platform for a lifestyle brand, featuring smooth transitions, and fast checkout process.",
      type: "Website",
      tech: "Shopify / React / GSAP",
      link: "https://example.com/lifestyle-ecommerce",
      image: "/images/p1.png",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center gap-2">
      {projectData.map((project, index) => (
        <div
          key={index}
          // ref={(el) => (containerRefs.current[index] = el)}
          className="h-[100vh] flex flex-col items-center justify-center w-4/5 rounded-lg p-8 space-y-6 md:space-y-5"
        >
          <div className="flex flex-col items-center justify-center">
            <p className="text-7xl font-medium z-10">{project.name}</p>
            <div className="flex flex-col items-center justify-center p-10 mt-[-3.2rem] rounded-xl">
              <img
                src={project.image}
                alt={project.label}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="flex justify-between items-center w-[100%]">
            <div className="flex-1 flex-col justify-center items-center w-[70%]">
              <div>
                <button className="py-1 px-4 border-2 border-accent rounded-full text-accent">
                  {project.type}
                </button>
                <p>{project.tech}</p>
              </div>
            </div>

            <div className="flex-1 flex-col gap-1 justify-center items-end self-end max-w-[30%]">
              <p className="text-accent">{project.label}</p>
              <p className="text-md">{project.description}</p>
            </div>
          </div>

          <div className="flex justify-center items-center w-full">
            <button
              className="py-1 px-4 my-3 rounded-full text-white bg-accent z-20"
              onClick={project.link}
            >
              View Project
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
