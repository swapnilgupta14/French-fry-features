import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

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
    <div id="scroller-container-pixel" className="scroller-container overflow-hidden">
      <div ref={triggerRef}>
        <div className="flex justify-center z-20 leading-[8rem]">
          <p className="custom-font text-[6rem] font-bold text-accent p-3 rounded-md">
            We make every pixel worth it.
          </p>
        </div>

        <div
          ref={sectionRef}
          className="h-[70vh] w-[250vw] flex relative gap-10"
        >
          <section className="w-[30vw] flex justify-around items-center"></section>

          <div className="w-[300vw] flex justify-around items-end gap-10">
            <Link href={"/projects/entise"}>
              <div className="img img-1 w-[60vw] h-[60vh] relative">
                <Image
                  src="https://res.cloudinary.com/dml6gxfmn/image/upload/v1734312312/entise_ypstw3.jpg"
                  alt="Entise"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
                />
              </div>
            </Link>

            <Link href={"/projects/jai-multi"}>
              <div className="img img-2 w-[60vw] h-[60vh] relative">
                <Image
                  src="https://res.cloudinary.com/dml6gxfmn/image/upload/v1734312172/jai_tlbmvs.jpg"
                  alt="Jai-multi"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
                />
              </div>
            </Link>
            
          
            <Link href={"projects/entise"}>
              <div className="img img-1 w-[60vw] h-[60vh] relative">
                <Image
                  src="https://res.cloudinary.com/dml6gxfmn/image/upload/v1734312729/good2_q6yj67.jpg"
                  alt="Good"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
                />
              </div>
            </Link>

            <Link href={"/Projects"}>
              <div className="img img-2 w-[60vw] h-[60vh] relative">
                <Image
                  src="https://res.cloudinary.com/dml6gxfmn/image/upload/v1735209097/Screenshot_2024-12-26_154611_hnnqvm.png"
                  alt="B2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
                />
              </div>
            </Link>
        

            
          </div>
          <section className="w-[30vw] flex justify-around items-center"></section>
        </div>
      </div>
    </div>
  );
};

export default Scroller;
