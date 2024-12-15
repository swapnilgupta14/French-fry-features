import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/common/Header";
import { projectDetails } from "../data/ProjectData";
import UseLenis from "@/utils/customHooks/UseLenis";

export default function Projects() {
  const projectData = Object.values(projectDetails);
  UseLenis();

  return (
    <section className="w-full flex flex-col items-center justify-center gap-2 overflow-hidden">
      <Header />

      <div className="custom-font text-7xl text-start px-10 w-full py-5 text-accent">
        ALL PROJECTS
      </div>

      {projectData.map((project, index) => (
        <div
          key={project.id}
          className="h-[100vh] flex flex-col items-center justify-center w-4/5 rounded-lg p-8 space-y-16 md:space-y-5"
        >
          <div className="flex flex-col items-center justify-center">
            <p className="text-7xl font-medium z-10">
              <span className="text-2xl font-medium px-3">({index + 1})</span>
              {project.name}
            </p>
            
            <div className="flex flex-col items-center justify-center p-10 mt-[-3.2rem] rounded-xl w-[60vw] h-[60vh] overflow-hidden">
              <Image
                src={project.imageFilesHero.url}
                alt={project.label}
                width={1000}
                height={800}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>

          <div className="flex justify-between items-center w-full">
            <div className="flex-1 flex-col justify-center items-center w-[70%]">
              <div>
                <button className="py-1 px-4 border-2 border-accent rounded-full text-accent">
                  {project.type}
                </button>
                <p className="mt-5 mx-2">{project.tech}</p>
                <div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-block py-1 px-4 my-3 rounded-full text-white bg-accent hover:bg-accent/90 transition-colors"
                  >
                    View Project
                  </Link>
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
}