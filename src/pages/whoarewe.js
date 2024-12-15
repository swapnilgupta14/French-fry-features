import React from "react";
import { Briefcase, Users, Globe, Rocket } from "lucide-react";
import Header from "@/components/common/Header";

const WhoAreWe = () => {
  return (
    <>
    <Header/>
    <div className="h-screen w-full flex items-center justify-center relative">
      <div className="absolute top-12 left-16 animate-pulse">
        <Briefcase className="w-10 h-10 text-accent opacity-50" />
      </div>
      <div className="absolute bottom-20 right-20 animate-bounce">
        <Users className="w-12 h-12 text-accent opacity-60" />
      </div>
      <div className="absolute top-32 right-12 animate-spin-slow">
        <Globe className="w-8 h-8 text-accent opacity-40" />
      </div>
      <div className="absolute bottom-10 left-12 animate-pulse">
        <Rocket className="w-14 h-14 text-accent opacity-70" />
      </div>

      <div className="text-center px-4 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold text-accent custom-font mb-6">
          Who Are We?
        </h1>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
          We are a forward-thinking agency committed to delivering end-to-end
          solutions for our clients. From creative designs to cutting-edge
          digital platforms, we ensure your vision becomes reality.
        </p>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed mt-4">
          Our mission is to empower your brand with innovative ideas and
          unmatched technical expertise. Let’s take your business to new
          heights, together.
        </p>
      </div>
    </div>
    </>
  );
};

export default WhoAreWe;
