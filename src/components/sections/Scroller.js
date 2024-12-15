import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Scroller = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-160vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "5000 top",
          scrub: 0.3,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="scroller-container overflow-hidden">
      <div ref={triggerRef}>
        <div className="flex justify-center z-20 leading-[8rem]">
          <p className="custom-font text-[6rem] font-bold text-accent p-3 rounded-md">
            We make every pixel worth it.
          </p>
        </div>

        <div ref={sectionRef} className="h-[70vh] w-[260vw] flex relative gap-10">
          <section className="w-[30vw] flex justify-around items-center"></section>

          <section className="w-[100vw] flex justify-around items-end gap-10 ">
            <div className="img img-1 w-[60vw] h-[60vh]">
              <img
                src="/images/entise3.jpg"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="img img-2 w-[60vw] h-[60vh]">
              <img
                src="/images/nexa.jpg"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </section>

          <section className="w-[100vw] flex justify-around items-end gap-10">
            <div className="img img-1 w-[60vw] h-[60vh]">
              <img
                src="/images/good.jpg"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="img img-2 w-[60vw] h-[60vh]">
              <img
                src="/images/b2.jpg"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

          </section>
          <section className="w-[30vw] flex justify-around items-center"></section>
        </div>
      </div>
    </div>
  );
};

export default Scroller;
