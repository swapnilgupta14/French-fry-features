import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/common/Header";
import { projectDetails } from "../../data/ProjectData";
import { ArrowLeft, ExternalLink, ChevronRight } from "lucide-react";
import UseLenis from "@/utils/customHooks/UseLenis";

export default function ProjectDetail({ project }) {
  const [selectedImage, setSelectedImage] = useState(null);
  UseLenis();

  if (!project) {
    return <div>Project Not Found</div>;
  }

  return (
    <div className="min-h-screen ">
      <Header />

      <div className="relative h-[60vh] w-full mt-6">
        <Image
          src={project.imageFilesHero.url}
          alt={project.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-8 left-8 z-10">
          <Link
            href="/Projects"
            className="flex items-center gap-2 text-black bg-white px-4 py-2 rounded-full hover:bg-gray-200 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-72 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <h1 className="text-4xl font-bold mb-2 custom-font">
                {project.name}
              </h1>
              <p className="text-gray-600 text-lg">{project.label}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full hover:bg-accent/90 transition-all"
            >
              View Live Project
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-accent">Description</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>

            <div className="flex flex-col space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-accent">Type</h3>
                <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full">
                  {project.type}
                </span>
              </div>
              {/* <div className="space-y-4">
                <h3 className="text-xl font-semibold text-accent">Tech Stack</h3>
                <p className="text-gray-600">{project.tech}</p>
              </div> */}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-accent mb-8 custom-font">
              Project Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.imageFiles.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className="relative aspect-square cursor-pointer group overflow-hidden rounded-xl shadow-xl"
                >
                  <Image
                    src={image.url}
                    alt={`${project.name} - Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm">View Larger</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="my-16">
            <h2 className="text-3xl font-bold text-accent mb-8 custom-font">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl hover:from-accent/5 hover:to-accent/10 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 leading-relaxed">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="my-16">
            <h2 className="text-3xl font-bold text-accent mb-8 custom-font">
              Design Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.designProcess.map((step, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl hover:from-accent/5 hover:to-accent/10 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  

                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-gray-900 leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage.url}
              alt="Project image"
              fill
              className="object-contain"
            />
          </div>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            Close
          </button>
        </div>
      )}
    </div>
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
