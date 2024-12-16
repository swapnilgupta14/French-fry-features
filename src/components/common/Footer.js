// components/Footer.js

import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaPinterest,
  FaGoogle,
  FaRss,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-accent text-white h-fit flex flex-col justify-between z-20">
      <div className="w-full bg-white rounded-r-3xl "></div>
      {/* <div className=" flex-1 container flex flex-col items-end px-6 md:flex-col justify-between -mb-20">
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-40 w-full">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-center md:text-left mb-8 md:mb-0">
              <h3 className="text-sm font-semibold uppercase mb-4">
                What We Do
              </h3>
              <ul className="space-y-2 text-white text-sm">
                <li>Encouraging Testing</li>
                <li>Strengthening Advocacy</li>
                <li>Sharing Information</li>
                <li>Building Leadership</li>
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-8 my-4 md:my-0 text-xl p-4 w-full">
          <FaFacebook className="hover:text-gray-400 cursor-pointer" />
          <FaTwitter className="hover:text-gray-400 cursor-pointer" />
          <FaLinkedin className="hover:text-gray-400 cursor-pointer" />
          <FaYoutube className="hover:text-gray-400 cursor-pointer" />
          <FaInstagram className="hover:text-gray-400 cursor-pointer" />
          <FaGoogle className="hover:text-gray-400 cursor-pointer" />
          <FaPinterest className="hover:text-gray-400 cursor-pointer" />
          <FaRss className="hover:text-gray-400 cursor-pointer" />
        </div>

       
      </div> */}
      <div className="text-center text-white text-sm p-4 rounded-md  w-full">
        © 2024 French Fry Features. All rights reserved.
      </div>
      <div className="relative font-bold h-[25em] w-full  -mb-10">
        <p className="w-full text-center text-[19em] text-white custom-font">
          FRENCH FRY
        </p>
      </div>
    </footer>
  );
}
