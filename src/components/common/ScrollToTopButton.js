import React, { useEffect, useState } from "react";
import { ArrowUpCircle } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const heroSection = document.getElementById("hero-section-scroll");
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrolled = window.scrollY;
        setIsVisible(scrolled > heroHeight);
      }
    };
    window.addEventListener("scroll", checkScroll);
    checkScroll();
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-10 right-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg 
        p-2.5 hover:bg-white hover:scale-110 active:scale-95
        transition-all duration-300 ease-out z-40
        border border-gray-200 dark:border-gray-700
        dark:bg-gray-800/80 dark:hover:bg-gray-800"
      aria-label="Scroll to top"
    >
      <ArrowUpCircle className="w-10 h-10 text-gray-700 dark:text-gray-200" />
    </button>
  ) : null;
};

export default ScrollToTopButton;
