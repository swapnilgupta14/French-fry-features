import { useState, useEffect } from "react";
import { gsap } from "gsap";
import Homepage from "./homepage";
import UseLenis from "../utils/customHooks/UseLenis";

export default function Home() {
  UseLenis();
  const [isLoading, setIsLoading] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   // Animate the loading progress
  //   const tl = gsap.timeline({
  //     onComplete: () => setIsLoading(false),
  //   });

  //   tl.to(
  //     {},
  //     {
  //       duration: 3,
  //       onUpdate: () => {
  //         setProgress((tl.progress() * 100).toFixed(0));
  //       },
  //     }
  //   );
  // }, []);

  return <>{isLoading ? <Loader progress={progress} /> : <Homepage />}</>;
}

function Loader({ progress }) {
  useEffect(() => {
    gsap.fromTo(
      ".loader",
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.9, delay: 2, duration: 0.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="loader fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black text-white z-50">
      <div className="text-center">
        <div className="text-4xl font-bold">{progress}%</div>
        <p className="text-lg mt-2">Loading...</p>
      </div>
    </div>
  );
}
