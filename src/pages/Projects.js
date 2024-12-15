import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGsap } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Header from "@/components/common/Header";

gsap.registerPlugin(useGsap);
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  // const containerRefs = useRef([]);
  const projectData = [
    {
      name: "RUMMEE 123",
      label: "Mobile Application Design",
      description:
        "RUMMEE123 is a sleek and intuitive rummy-based gaming application designed to provide a seamless experience for card game enthusiasts. With user-centric design principles, the app's interface combines modern aesthetics and functionality to ensure ease of use across multiple user flows.",
      type: "UI/UX Designing",
      tech: "Figma",
      link: "https://example.com/ar-fashion",
      image: "/images/rummy.png",
    },
    {
      name: "Kainath",
      label: "Kainath - Redefining Blind Dating",
      description:
        "Kainath is a unique dating application designed to foster genuine connections between individuals in an exclusive and thoughtful manner. Unlike conventional dating apps, Kainath eliminates the influence of visual biases by focusing solely on personality and conversation. Users engage in a timed 5-minute chat to explore compatibility before deciding to meet.",
      type: "UI/UX Designing",
      tech: "Figma",
      link: "https://example.com/3d-tech",
      image: "/images/kain.png",
    },
    {
      name: "NexaBet",
      label: "Luxury Real Estate Website",
      description:
        "Developed a sleek and responsive website for a luxury real estate brand, focusing on high-quality visuals and seamless navigation.",
      type: "Web App",
      tech: "React / Next.js / Tailwind CSS",
      link: "https://example.com/luxury-real-estate",
      image: "/images/p1.png",
    },
    {
      name: "Jai Multi",
      label: "Multi-Purpose Business Website",
      description:
        "Jai Multi is a modern, multi-purpose business website designed to cater to diverse industries. The platform showcases versatility with a clean and professional layout, offering a seamless user experience. Developed with a focus on scalability and performance, the website is optimized for showcasing a company's services, portfolio, and unique offerings.",
      type: "B2B Websites",
      tech: "HTML, CSS, React JavaScript",
      link: "https://example.com/lifestyle-ecommerce",
      image: "/images/jai.jpg",
    },
    {
      name: "AuctoGames (Cricket Auction)",
      label: "Brand Book for Modern Startup",
      description:
        "Designed a comprehensive brand book outlining the visual identity, tone, and guidelines for a modern tech startup.",
      type: "Book Design",
      tech: "Adobe Illustrator / InDesign / Photoshop",
      link: "https://example.com/startup-brand-book",
      image: "/images/aucto.jpg",
    },
    {
      name: "The Good Planet",
      label: "Sustainable Cleaning Solutions",
      description:
        "A Shopify-based e-commerce platform built for a company dedicated to providing sustainable, plant-based cleaning solutions. The website not only showcases the company’s eco-friendly products but also reflects its mission and values through carefully crafted sections like About Us. The platform is designed to resonate with environmentally conscious consumers while delivering an intuitive and seamless shopping experience.",
      type: "UI/UX, Shopify",
      tech: "Figma/ Shopify",
      link: "https://example.com/luxury-real-estate",
      image: "/images/good.jpg",
    },
    {
      name: "Entise",
      label: "Premium Sustainable Lifestyle Store",
      description:
        "Entise is an e-commerce platform offering curated, sustainable lifestyle products. The website embodies a minimalist and user-friendly design, focusing on premium aesthetics and seamless shopping experiences. The platform highlights Entise’s dedication to eco-friendly living and ethical practices through a carefully crafted UI/UX that resonates with its target audience.",
      type: "E-commerce Website",
      tech: "Shopify",
      link: "https://example.com/luxury-real-estate",
      image: "/images/entise.jpg",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center gap-2 overflow-hidden">
      <Header />

      <div className="custom-font text-7xl text-start px-10 w-full py-5 text-accent">
        ALL PROJECTS
      </div>
      {projectData.map((project, index) => (
        <div
          key={index}
          // ref={(el) => (containerRefs.current[index] = el)}
          className="h-[100vh] flex flex-col items-center justify-center w-4/5 rounded-lg p-8 space-y-16 md:space-y-5"
        >
          <div className="flex flex-col items-center justify-center">
            <p className="text-7xl font-medium z-10"><span className="text-2xl font-medium px-3">({index+1})</span>{project.name}</p>
            <div className="flex flex-col items-center justify-center p-10 mt-[-3.2rem] rounded-xl w-[60vw] h-[60vh] overflow-hidden">
              <img
                src={project.image}
                alt={project.label}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>

          <div className="flex justify-between items-center w-[100%]">
            <div className="flex-1 flex-col justify-center items-center w-[70%]">
              <div>
                <button className="py-1 px-4 border-2 border-accent rounded-full text-accent">
                  {project.type}
                </button>
                <p className="mt-5 mx-2">{project.tech}</p>
                <div>
                  <button
                    className="py-1 px-4 my-3 rounded-full text-white bg-accent z-20"
                    onClick={() => console.log("clicked")}
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-1 flex-col gap-1 justify-center items-end self-end max-w-[50%]">
              <p className="text-accent">{project.label}</p>
              <p className="text-md">{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
