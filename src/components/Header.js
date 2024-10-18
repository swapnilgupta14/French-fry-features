import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdHome, MdInfo, MdWork, MdContactPhone } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    {
      label: "Home",
      link: "#",
    },
    {
      label: "About",
      link: "#",
    },
    {
      label: "Work",
      link: "#",
    },
    {
      label: "Services",
      link: "#",
    },
    {
      label: "Contact",
      link: "#",
    },
  ];

  return (
    <header className="w-full">
      <div className="flex items-center justify-between pt-4 px-14">
        <div className="text-2xl font-bold text-teal-800">
          <Link href="/" className="text-black">
            Company
          </Link>
        </div>
        <nav className="hidden md:visible lg:visible md:flex lg:flex text-sm bg-white rounded-full py-1 m-2 border-1 border-accent aria-hidden:true">
          {navLinks.map((item) => {
            return (
              <Link
                id={item.label}
                key={item.label}
                href={item.link}
                onClick={() => setActiveLink(item.label)}
                className={`mx-1 px-4 py-2 font-semibold rounded-full transition-all duration-300 ease-in-out transform aria-hidden:true ${
                  activeLink === item.label
                    ? "bg-accent text-white"
                    : "text-accent hover:bg-gray-300 hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button aria-label="Toggle Menu" className="flex p-2" onClick={toggleMenu} >
          <img
            src="/MenuIcon.svg"
            alt="laptop"
            className="w-full rounded-lg items-center justify-center "
          />
        </button>

        {isMenuOpen && (
          <div className="fixed inset-0 z-50">
            <Menu toggleMenu={toggleMenu} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

// {isOpen && (
//   <nav className="absolute top-16 right-0 bg-white shadow-md rounded-lg w-48 z-10">
//     <ul className="flex flex-col space-y-4 p-4">
//       <li>
//         <Link href="/" className="text-teal-900 flex items-center" onClick={toggleMenu}>
//           <MdHome className="mr-2" /> Home
//         </Link>
//       </li>
//       <li>
//         <Link href="/about" className="text-teal-900 flex items-center" onClick={toggleMenu}>
//           <MdInfo className="mr-2" /> About
//         </Link>
//       </li>
//       <li>
//         <Link href="/work" className="text-teal-900 flex items-center" onClick={toggleMenu}>
//           <MdWork className="mr-2" /> Work
//         </Link>
//       </li>
//       <li>
//         <Link href="/services" className="text-teal-900 flex items-center" onClick={toggleMenu}>
//           <MdWork className="mr-2" /> Services
//         </Link>
//       </li>
//       <li>
//         <Link href="/contact" className="text-teal-900 flex items-center" onClick={toggleMenu}>
//           <MdContactPhone className="mr-2" /> Contact
//         </Link>
//       </li>
//     </ul>
//   </nav>
// )}
