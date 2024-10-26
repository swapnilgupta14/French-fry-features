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
        <div className="blend-css scroller-fixed-text fixed top-12 right-0 w-[80%] flex justify-center z-20 leading-[8rem]">
          <p className="custom-font text-[8rem] font-bold text-accent p-3 rounded-md">
            We make scrolling worth it.
          </p>
        </div>

        <div ref={sectionRef} className="h-[100vh] w-[260vw] flex relative">
          <section className="w-[30vw] flex justify-around items-center"></section>

          <section className="w-[100vw] flex justify-around items-end py-10 ">
            <div className="img img-1 w-[30vw] h-[70vh]">
              <img
                src="/images/banner-1.png"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="img img-2 w-[30vw] h-[70vh]">
              <img
                src="/images/banner-2.png"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="img img-3 w-[30vw] h-[70vh]">
              <img
                src="/images/banner-3.png"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </section>

          <section className="w-[100vw] flex justify-around items-end py-10">
            <div className="img img-1 w-[30vw] h-[70vh]">
              <img
                src="/images/banner-2.png"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="img img-2 w-[30vw] h-[70vh]">
              <img
                src="/images/banner-1.png"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="img img-3 w-[30vw] h-[70vh]">
              <img
                src="/images/banner-3.png"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </section>

          {/* <section className="w-[100vw] flex justify-center items-end py-10 flex-col ">
            <h1 className="text-2xl font-bold mb-4">Text Section</h1>
            <p className="text-lg w-[60%] text-center">
              This is a sample paragraph text. The height and width are adjusted
              for consistent design across the sections, providing a
              well-balanced layout.
            </p>
          </section> */}

          {/* <section className="w-[100vw] flex justify-around items-end py-10">
            <div className="img img-1 w-[30vw] h-[70vh]">
              <img
                src="/images/banner-3.png"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="img img-2 w-[30vw] h-[70vh]">
              <img
                src="/images/banner-5.png"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="img img-3 w-[30vw] h-[70vh]">
              <img
                src="/images/banner-1.png"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </section> */}

          {/* <section className="w-[100vw] flex justify-center items-end py-10 flex-col">
            <h1 className="text-2xl font-bold mb-4">Text Section</h1>
            <p className="text-lg w-[60%] text-center">
              This is a sample paragraph text. The last section follows a
              similar structure to maintain consistency and balance.
            </p>
          </section> */}
          <section className="w-[30vw] flex justify-around items-center"></section>
        </div>
      </div>
    </div>
  );
};

export default Scroller;
