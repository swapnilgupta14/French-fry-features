import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Draggable } from "gsap/dist/Draggable";

const Scroller = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(Draggable, ScrollTrigger);
    if (timelineRef.current) {
      Draggable.create(timelineRef.current, {
        type: "x",
        bounds: ".timeline",
        edgeResistance: 0.05, // Lower values increase drag sensitivity
        inertia: true, // Enable inertia for smoother dragging
        throwProps: true, // Use ThrowProps plugin if available for momentum-based dragging
        onDrag: function () {
          console.log("Dragging...");
        },
        onDragEnd: function () {
          console.log("Drag ended.");
        },
      });
      
    }
  }, []);

  return (
    <div className="w-full h-screen">
      <div className="flex w-full p-14 z-20">
        <div className="w-1/6"></div>
        <div className=" w-5/5 flex justify-end">
          <p className="text-accent text-[8rem] font-semibold leading-[8rem] custom-font">
            {" "}
            We make scrolling worth it.
          </p>
        </div>
      </div>

      <div className="relative h-[100vh] overflow-x-auto -mt-[31vh] z-10">
        <div
          className="absolute top-0 left-0 w-[500vw] h-[80vh] flex flex-nowrap timeline"
          ref={timelineRef}
        >
          <section  className="relative w-[20vw] h-full p-[6em_2em_0_2em] flex gap-8 flex-shrink-0">

          </section>
          <section
            id="section-1"
            className="relative w-[100vw] h-full p-[6em_2em_0_2em] flex gap-8 flex-shrink-0"
          >
            <div className="img img-1 w-[50vw] h-full">
              <img
                src="/images/banner-1.png"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="img img-1 w-[50vw] h-full">
              <img
                src="/images/banner-2.png"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="img img-1 w-[50vw] h-full">
              <img
                src="/images/banner-3.png"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </section>

          <section
            id="section-2"
            className="relative w-[100vw] h-full p-[6em_2em_0_2em] flex gap-8 flex-shrink-0"
          >
            <div className="img img-1 w-[50vw] h-full ">
              <img
                src="/images/banner-2.png"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="img img-1 w-[50vw] h-full">
              <img
                src="/images/banner-1.png"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="img img-1 w-[50vw] h-full">
              <img
                src="/images/banner-3.png"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </section>

          <section
            id="section-3"
            className="relative w-[100vw] h-full p-[6em_2em_0_2em] flex gap-8 flex-shrink-0"
          >
            <h1>swjhbdj diuwbd bdiw ddiwqqnd diwendx</h1>
            <p>
              swjhbdj diuwbd bdiw ddiwqqnd diwendxswjhbdj diuwbd bdiw ddiwqqnd
              diwendxswjhbdj diuwbd bdiw ddiwqqnd diwendxswjhbdj diuwbd bdiw
              ddiwqqnd diwendxswjhbdj diuwbd bdiw ddiwqqnd diwendxswjhbdj diuwbd
              bdiw ddiwqqnd diwendxswjhbdj diuwbd bdiw ddiwqqnd diwendxswjhbdj
              diuwbd bdiw ddiwqqnd diwendx
            </p>
          </section>

          <section
            id="section-4"
            className="relative w-[100vw] h-full p-[6em_2em_0_2em] flex gap-8 flex-shrink-0"
          >
            <div className="img img-1 w-[50vw] h-full">
              <img
                src="/images/banner-3.png"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="img img-1 w-[50vw] h-full">
              <img
                src="/images/banner-5.png"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="img img-1 w-[50vw] h-full">
              <img
                src="/images/banner-1.png"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </section>

          <section
            id="section-5"
            className="relative w-[100vw] h-full p-[6em_2em_0_2em] flex gap-8 flex-shrink-0"
          >
            <h1>swjhbdj diuwbd bdiw ddiwqqnd diwendx</h1>
            <p>
              swjhbdj diuwbd bdiw ddiwqqnd diwendxswjhbdj diuwbd bdiw ddiwqqnd
              diwendxswjhbdj diuwbd bdiw ddiwqqnd diwendxswjhbdj diuwbd bdiw
              ddiwqqnd diwendxswjhbdj diuwbd bdiw ddiwqqnd diwendxswjhbdj diuwbd
              bdiw ddiwqqnd diwendxswjhbdj diuwbd bdiw ddiwqqnd diwendxswjhbdj
              diuwbd bdiw ddiwqqnd diwendx
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Scroller;
