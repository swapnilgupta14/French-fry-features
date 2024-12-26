import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/common/Header";
import { projectDetails } from "../data/ProjectData";

export default function Projects() {
  const projectData = Object.values(projectDetails);
  const [activeProject, setActiveProject] = useState(projectData[0]?.id || "");
  const rightSectionRef = useRef(null);

  const scrollToProject = (id) => {
    const targetProject = document.getElementById(id);
    if (targetProject) {
      targetProject.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveProject(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!rightSectionRef.current) return;

      const scrollPosition = rightSectionRef.current.scrollTop;
      const viewportHeight = rightSectionRef.current.clientHeight;
      const scrollThreshold = viewportHeight * 0.3;

      let newActiveProject = activeProject;

      projectData.forEach((project) => {
        const projectElement = document.getElementById(project.id);
        if (projectElement) {
          const projectTop = projectElement.offsetTop - 64; // Header offset
          const projectBottom = projectTop + projectElement.offsetHeight;

          if (
            scrollPosition >= projectTop - scrollThreshold &&
            scrollPosition < projectBottom - scrollThreshold
          ) {
            newActiveProject = project.id;
          }
        }
      });

      if (newActiveProject !== activeProject) {
        setActiveProject(newActiveProject);
      }
    };

    const rightSection = rightSectionRef.current;
    if (rightSection) {
      rightSection.addEventListener("scroll", handleScroll);
      return () => rightSection.removeEventListener("scroll", handleScroll);
    }
  }, [activeProject, projectData]);

  const handleNavigation = (direction) => {
    const currentIndex = projectData.findIndex(
      (project) => project.id === activeProject
    );
    const nextIndex =
      direction === "next"
        ? Math.min(currentIndex + 1, projectData.length - 1)
        : Math.max(currentIndex - 1, 0);

    if (projectData[nextIndex]?.id !== activeProject) {
      scrollToProject(projectData[nextIndex]?.id);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        handleNavigation("next");
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        handleNavigation("prev");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject]);

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col">
      <div className="pr-4">
        <Header className="fixed top-0 w-full z-50" />
      </div>

      <div className="w-full flex-1 flex">
        <div className="w-1/4 fixed left-0 h-[calc(100vh-64px)] p-8 overflow-y-auto flex flex-col justify-center">
          <div className="flex flex-col justify-end">
            <div className="custom-font text-4xl text-black mb-12 relative">
              ALL PROJECTS
              <div className="absolute -bottom-3 left-0 w-24 h-1 bg-accent"></div>
            </div>
            <div className="space-y-4">
              {projectData.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => scrollToProject(project.id)}
                  className={`group cursor-pointer transition-all duration-300 ${
                    activeProject === project.id
                      ? "text-accent translate-x-4"
                      : "text-gray-600 hover:text-accent hover:translate-x-2"
                  }`}
                >
                  <div className="flex items-center space-x-3 ">
                    <span
                      className={`text-xs font-mono ${
                        activeProject === project.id
                          ? "text-accent"
                          : "text-gray-900 group-hover:text-accent"
                      }`}
                    >
                      ({index + 1})
                    </span>
                    <h3
                      className={`font-bold ${
                        activeProject === project.id ? "text-xl" : "text-md"
                      }`}
                    >
                      {project.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={rightSectionRef}
          className="w-3/4 ml-[25%] h-[calc(100vh-100px)] rounded-2xl overflow-y-auto scroll-smooth bg-white mt-6 shadow-2xl"
        >
          {projectData.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center p-8"
            >
              <div className="w-full max-w-4xl space-y-8">
                <div className="relative group z-40">
                  <Image
                    src={project.imageFilesHero.url}
                    alt={project.label}
                    width={1000}
                    height={800}
                    className="rounded-xl w-full h-[40vh] object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl flex items-center justify-center">
                    <Link
                      href={`/projects/${project.id}`}
                      className="bg-accent text-white px-6 py-3 rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                    >
                      View Project
                    </Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-4xl custom-font">{project.name}</h2>
                  <div className="flex items-center space-x-4">
                    <span className="px-4 py-1 border-2 border-accent rounded-full text-accent">
                      {project.type}
                    </span>
                    <p className="text-gray-600">{project.tech}</p>
                  </div>
                  <p className="text-lg max-w-2xl">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
