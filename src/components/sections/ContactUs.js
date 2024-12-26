import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import RotatingText from "@/components/common/RotatingText";
import Button from "../common/Button";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaPhone,
  FaInstagram,
} from "react-icons/fa";
import { Contact, ContactIcon, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const videoRef = useRef(null);
  const blobRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  useEffect(() => {
    const myText = new SplitType("#text-split");
    gsap.to(".char", {
      y: 0,
      stagger: 0.09,
      duration: 0.8,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "#text-split",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
    });

    gsap.to(blobRef.current, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "linear",
    });

    const numberTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".number-section",
        start: "top bottom",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    numberTimeline.fromTo(
      ".numberAnimation",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.2 }
    );

    gsap.utils.toArray(".contact-buttons").forEach((container) => {
      const buttonTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      });

      buttonTimeline.fromTo(
        container.querySelectorAll(".contact-button"),
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.2,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center relative p-8">
      <div className="absolute bottom-0 right-0 z-0 overflow-visible">
        <div
          ref={blobRef}
          className="z-0 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 opacity-30 blur-3xl gradient-blob"
        ></div>
      </div>

      <div className="absolute bottom-28 right-20 w-[23rem] hover:cursor-pointer">
        <video
          ref={videoRef}
          className="object-cover rounded-xl"
          muted
          loop
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dml6gxfmn/video/upload/v1734313698/videos1_r2lzed.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute -left-14 -top-14 z-10 hover:cursor-pointer">
          <RotatingText
            text="Crafting Brands • Design Excellence • Innovation •"
            imageSrc="https://res.cloudinary.com/dml6gxfmn/image/upload/v1734314237/NE_Arrow_Icon_dlskzh.svg"
          />
        </div>
      </div>

      <div className="w-[90%] text-center pt-5 md:pt-10 mb-5 md:mb-20 z-10 overflow-hidden custom-font">
        <p
          id="text-split"
          className="text-6xl md:text-[4rem] font-medium text-fontColor leading-tight md:leading-[6rem] text-left relative z-10"
        >
          We design, build, and ship
          <span>world-class digital products for</span>
          <span className="text-accent"> forward-thinking brands.</span>
        </p>
      </div>

      <div className=" number-section flex flex-row w-fit gap-20 mb-16 md:mx-20 z-20 self-start">
        <div className="flex flex-col items-start">
          <p
            id="numberAnimation"
            className="numberAnimation text-2xl font-bold text-fontColor"
          >
            10+
          </p>
          <p className="text-md text-gray-500">Projects</p>
        </div>
        <div className="flex flex-col items-start">
          <p
            id="numberAnimation"
            className="numberAnimation text-2xl font-bold text-fontColor"
          >
            10+
          </p>
          <p className="text-md text-gray-500">Clients</p>
        </div>
        <div className="flex flex-col items-start">
          <p
            id="numberAnimation"
            className="numberAnimation text-2xl font-bold text-fontColor"
          >
            1+
          </p>
          <p className="text-md text-gray-500">Years Experience</p>
        </div>
      </div>

      <div className="bg-white md:mx-16 self-start rounded-xl p-7 flex flex-col gap-5 z-10">
        <p className="font-semibold text-md text-fontColor">
          Get in touch with us to discuss your next project — let's create
          something amazing together!
        </p>
        <div className="z-10 flex gap-3 contact-buttons section-1">
          <button
            className=" bg-black text-white font-medium rounded-3xl py-2 px-3 flex gap-2 items-center justify-center"
            label="E-mail Us"
            onClick={() =>
              (window.location.href = "mailto:krish@frenchfryfeatures.com")
            }
          >
            Email <Mail size={18} />
          </button>

          <button
            className=" bg-black text-white font-medium rounded-3xl py-2 px-3 flex gap-2 items-center justify-center"
            onClick={() => (window.location.href = "https://wa.me/8799111110")}
          >
            <FaWhatsapp size={18} />
          </button>

          <button
            className=" bg-black text-white font-medium rounded-3xl py-2 px-3 flex gap-2 items-center justify-center"
            onClick={() => (window.location.href = "/connect")}
          >
            <ContactIcon size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
