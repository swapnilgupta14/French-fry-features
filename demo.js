document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".cursor");
  const gallery = document.querySelector(".gallery");

  const numberOfItems = 60;
  const radius = 1100;

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const angleIncrement = (2 * Math.PI) / numberOfItems;

  for (let i = 0; i < numberOfItems; i++) {
    const item = document.createElement("div");
    item.className = "item";
    const p = document.createElement("p");
    const count = document.createElement("span");
    p.textContent = interiors[i].name;
    count.textContent = `(${Math.floor(Math.random() * 50) + 1})`;
    item.appendChild(p);
    p.appendChild(count);
    gallery.appendChild(item);

    const angle = i * angleIncrement;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    const rotation = (angle * 180) / Math.PI;

    gsap.set(item, {
        x: x + "px",
        y: y + "px",
        rotation: rotation,
    })
  }

  function updatePosition () {
   const scrollAmount = window.scrollY * 0.0001;
   document.querySelector(".item").array.forEach(function(item, index) {
    const angle = index * angleIncrement + scrollAmount;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    const rotation = (angle * 180) / Math.PI;

    gsap.to( item, {
        x: x + "px",
        y: y + "px",
        rotation: rotation,
        ease: "elastic.out(1, 0.03)"
    });
   }); 
  }

  updatePosition();
  document.addEventListener("scroll", updatePosition);
});





import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Constants for Circular Animation
const numberOfItems = 5; // Adjust based on the number of projects
const radius = 500; // Distance from the center for the circular layout

const Projects = () => {
  const galleryRef = useRef(null); // Ref for the gallery container
  const sectionsRef = useRef([]); // Refs for individual items

  const projectData = [
    {
      name: "NovaDesign Studio",
      label: "AR Experience for Fashion Brand",
      link: "https://example.com/ar-fashion",
      image: "/images/p1.png",
    },
    {
      name: "PixelVibe Creations",
      label: "3D Product Showcase for Tech Company",
      link: "https://example.com/3d-tech",
      image: "/images/p1.png",
    },
    {
      name: "EvoBrand Collective",
      label: "Luxury Real Estate Website",
      link: "https://example.com/luxury-real-estate",
      image: "/images/p1.png",
    },
    {
      name: "AetherWave Design",
      label: "Brand Book for Modern Startup",
      link: "https://example.com/startup-brand-book",
      image: "/images/p1.png",
    },
    {
      name: "LuminaGraph Studios",
      label: "E-commerce Website for Lifestyle Brand",
      link: "https://example.com/lifestyle-ecommerce",
      image: "/images/p1.png",
    },
  ];

  // Helper to position items in a circular layout
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const angleIncrement = (2 * Math.PI) / numberOfItems;

  useEffect(() => {
    // Position the items in a circular layout
    sectionsRef.current.forEach((item, index) => {
      const angle = index * angleIncrement;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      const rotation = (angle * 180) / Math.PI;

      gsap.set(item, {
        x: `${x}px`,
        y: `${y}px`,
        rotation,
      });
    });

    // Function to update positions on scroll
    const updatePosition = () => {
      const scrollAmount = window.scrollY * 0.001;
      sectionsRef.current.forEach((item, index) => {
        const angle = index * angleIncrement + scrollAmount;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        const rotation = (angle * 180) / Math.PI;

        gsap.to(item, {
          x: `${x}px`,
          y: `${y}px`,
          rotation,
          ease: "elastic.out(1, 0.03)",
        });
      });
    };

    // Attach scroll event listener
    window.addEventListener("scroll", updatePosition);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return (
    <div ref={galleryRef} className="gallery w-screen h-screen relative overflow-hidden">
      {projectData.map((project, index) => (
        <div
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          className="item absolute flex flex-col items-center justify-center w-48 h-48 bg-white shadow-lg rounded-lg"
        >
          <img src={project.image} alt={project.label} className="w-full h-2/3 object-cover rounded-t-lg" />
          <div className="p-4">
            <p className="font-bold">{project.name}</p>
            <p className="text-sm text-gray-600">{project.label}</p>
            <button
              onClick={() => window.open(project.link, "_blank")}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-full"
            >
              View Project
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
