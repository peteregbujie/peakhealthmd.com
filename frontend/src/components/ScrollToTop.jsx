"use client";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const classNames = (...classes) => {
 return classes.filter(Boolean).join(" ");
};

export const ScrollToTop = () => {
 const [isVisible, setIsVisible] = useState(false);

 const toggleVisibility = () => {
  if (window.pageYOffset > 300) {
   setIsVisible(true);
  } else {
   setIsVisible(false);
  }
 };

 const scrollToTop = () => {
  window.scrollTo({
   top: 0,
   behavior: "smooth",
  });
 };

 useEffect(() => {
  window.addEventListener("scroll", toggleVisibility);

  return () => {
   window.removeEventListener("scroll", toggleVisibility);
  };
 }, []);

 return (
  <div className="fixed bottom-2 right-2">
   <button
    type="button"
    onClick={scrollToTop}
    className={classNames(
     isVisible ? "opacity-100" : "opacity-0",
     "bg-blue-900 hover:bg-blue-700 focus:ring-blue-600 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2"
    )}
   >
    <ArrowUpIcon
     className="w-6 h-6 text-lg font-bold text-white"
     aria-hidden="true"
    />
   </button>
  </div>
 );
};

export default ScrollToTop;
