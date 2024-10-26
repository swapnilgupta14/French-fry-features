import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "@/components/common/Button";

const Menu = ({ toggleMenu }) => {
  const menuRef = useRef(null);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const socialLinksRef = useRef([]);
  const linksRef = useRef([]);

  const menuLinks = [
    { label: "Home", link: "#" },
    { label: "About Us", link: "#" },
    { label: "Work", link: "#" },
    { label: "Our Services", link: "#" },
    { label: "Contact Us", link: "#" },
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onReverseComplete: toggleMenu,
    });

    tl.fromTo(
      menuRef.current,
      { yPercent: 100, opacity: 0 },
      { duration: 0.8, yPercent: 0, opacity: 1, ease: "power4.out" }
    );

    tl.fromTo(
      leftSectionRef.current,
      {
        yPercent: 10,
        opacity: 0,
        scale: 0.95,
      },
      {
        duration: 0.5,
        yPercent: 0,
        opacity: 1,
        scale: 1,
        ease: "power2.out",
      },
      "-=0.4"
    );

    tl.fromTo(
      linksRef.current,
      {
        y: 50,
        opacity: 0,
        scale: 0.9,
      },
      {
        duration: 0.7,
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "-=0.7"
    );

    tl.fromTo(
      rightSectionRef.current,
      {
        yPercent: 3,
        opacity: 0,
        scale: 0.95,
      },
      {
        duration: 1,
        yPercent: 0,
        opacity: 1,
        scale: 1,
        ease: "power2.out",
      },
      "-=0.7"
    );

    socialLinksRef.current.forEach((link, index) => {
      tl.fromTo(
        link,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, delay: index * 0.1 },
        "-=0.8"
      );
    });
  }, []);

  const handleClose = () => {
    const closeTl = gsap.timeline({ defaults: { ease: "power3.in" } });
    closeTl.to(rightSectionRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.4,
    });

    closeTl.to(linksRef.current, {
      y: 50,
      opacity: 0,
      scale: 0.9,
      duration: 0.4,
      stagger: 0.05,
    });

    closeTl.to(
      leftSectionRef.current,
      {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
      },
      "-=0.3"
    );
    closeTl.to(
      menuRef.current,
      {
        opacity: 0,
        y: "-100%",
        duration: 0.5,
      },
      "-=0.4"
    );
    closeTl.eventCallback("onComplete", () => {
      toggleMenu();
    });
  };

  return (
    <div
      className="w-full h-screen bg-accent flex flex-col px-5 py-7 space-y-10 z-50"
      ref={menuRef}
    >
      <div className="flex justify-between items-center px-9">
        <div className="text-white text-2xl font-bold">Company</div>
        <div className="flex justify-center items-center space-x-3">
          <Button
            bgColor="bg-white"
            textColor="text-black"
            flairColor="bg-gray-400"
            label={
              <span className="flex justify-center items-center gap-2">
                <span className="inline-block">
                  <img
                    src="/RoundedPlus.svg"
                    alt="laptop"
                    className="w-fit rounded-full"
                  />
                </span>
                <span className="inline-block">Become a Client</span>
              </span>
            }
          />
          {/* <button className="bg-white text-fontColor px-4 py-2 rounded-full flex items-center space-x-2"></button> */}
          <button
            className="bg-white text-fontColor rounded-full flex items-center space-x-2"
            onClick={handleClose}
          >
            <img
              src="/CloseIcon.svg"
              alt="close icon"
              className="w-fit rounded-full transform transition-transform duration-500 hover:rotate-180"
            />
          </button>
        </div>
      </div>

      <div className="flex flex-1 gap-10 items-end px-5 ">
        <div
          className="flex-1 flex flex-col justify-end m-5 custom-font"
          ref={leftSectionRef}
        >
          {menuLinks.map((item, index) => (
            <div
              key={index}
              ref={(el) => (linksRef.current[index] = el)}
              className={`text-white font-semibold flex items-center justify-between pb-6 ${
                index !== menuLinks.length - 1 ? "border-b-2 border-white" : ""
              }`}
            >
              <p className="flex items-end justify-start gap-8">
                <div className="group relative cursor-pointer overflow-hidden text-8xl leading-[6rem] uppercase">
                  <span className="inline-block transition duration-500 ease-out group-hover:-translate-y-[120%]">
                    {item.label}
                  </span>
                  <span className="absolute left-0 translate-y-[120%] rotate-12 p-1 inline-block transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
                    {item.label}
                  </span>
                </div>

                <span>
                  <img
                    src="/NE Arrow Icon.svg"
                    alt="laptop"
                    className="w-fit rounded-full transition-transform duration-300 hover:rotate-180 hover:cursor-pointer"
                  />
                </span>
              </p>
            </div>
          ))}
        </div>

        <div
          className="w-[31%] bg-white rounded-xl p-5 m-5 h-[85%] flex flex-col justify-between"
          ref={rightSectionRef}
        >
          <div className="p-2">
            <div className="relative">
              <img
                src="/menu.png"
                alt="laptop"
                className="w-full rounded-lg mb-4 transition-transform duration-500 hover:scale-105"
              />
            </div>
            <p className="text-sm font-semibold">Reach out to us at:</p>
            <a
              href="mailto:contact@company.com"
              className="text-lg font-semibold"
            >
              contact@company.com
            </a>
          </div>

          <div className="flex justify-between items-end">
            <div className="mt-6 space-y-1 custom-font">
              {["Instagram", "Twitter", "LinkedIn", "WhatsApp"].map(
                (social, index) => (
                  <a
                    key={social}
                    href="#"
                    ref={(el) => (socialLinksRef.current[index] = el)}
                    className="block text-lg font-semibold text-fontColor border-b border-black w-[150px] hover:text-accent transition-all duration-300"
                  >
                    {social}
                  </a>
                )
              )}
            </div>
            <div className="mt-6 text-sm text-gray-500">
              Company ©2024 <br /> Privacy Policy & Cookies
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
