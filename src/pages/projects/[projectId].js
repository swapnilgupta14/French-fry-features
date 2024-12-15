import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/common/Header";
import { projectDetails } from "../../data/ProjectData";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetail({ project }) {
  if (!project) {
    return <div>Project Not Found</div>;
  }

  return (
    <section className="w-full flex flex-col items-center justify-center gap-2 overflow-hidden">
      <Header />

      <div className="custom-font text-xl text-start px-14 w-full py-5 text-accent flex gap-2 items-center justify-start">
        <Link href="/Projects">
          <span>
            <ArrowLeft />
          </span>
        </Link>
        {project.name}
      </div>

      <div className="w-4/5 flex flex-col items-center justify-center space-y-16">
        <div className="flex flex-col items-center justify-center w-full">
          <p className="text-6xl font-bold text-center">
            {project.name} - {project.label}
          </p>

          <div className="w-full h-[60vh] overflow-hidden rounded-xl mt-8">
            <Image
              src={project.imageFiles[0]}
              alt={project.name}
              width={1200}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="flex justify-between items-start w-full space-x-10 py-10">
          <div className="flex-1 space-y-6">
            <button className="py-1 px-4 border-2 border-accent rounded-full text-accent">
              {project.type}
            </button>
            <p className="text-lg">{project.tech}</p>

            <div className="space-y-4">
              <h3 className="text-2xl text-accent">Project Description</h3>
              <p>{project.description}</p>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <h3 className="text-2xl text-accent">Key Features</h3>
            <ul className="list-disc list-inside space-y-2">
              {project.keyFeatures.map((feature, index) => (
                <li key={index} className="text-lg">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full space-y-6 pt-28">
          <h3 className="text-7xl text-accent text-center mb-10">
            Design Process
          </h3>
          <div className="relative w-full">
            <div className="absolute inset-0 w-1 bg-black left-1/2 transform -translate-x-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.designProcess.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-center justify-start space-x-4 ${
                    index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full bg-accent transform transition-transform duration-300 ${
                      index % 2 === 0 ? "hover:scale-125" : "hover:scale-150"
                    }`}
                  ></div>
                  <div
                    className={`bg-gray-100 text-center px-6 py-3 rounded-lg shadow-md hover:bg-accent hover:text-white transition-all ${
                      index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                    }`}
                  >
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full space-y-6 py-16">
          <h3 className="text-7xl text-accent text-center">Project Images</h3>
          <div className="pt-[10vh] grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.imageFiles.map((image, index) => (
              <div
                key={index}
                className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl"
              >
                <Image
                  src={image}
                  alt={`${project.name} - Image ${index + 1}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full hover:scale-110 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full text-center pb-32 z-30">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-6 bg-accent text-white rounded-full hover:bg-gray-800 transition-colors z-30"
          >
            View Project Website
          </a>
        </div>
      </div>
    </section>
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.values(projectDetails).map((project) => ({
      params: { projectId: project.id },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = Object.values(projectDetails).find(
    (p) => p.id === params.projectId
  );

  return {
    props: {
      project,
    },
  };
}
