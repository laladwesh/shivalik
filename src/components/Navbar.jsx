import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) { // Check if scrolled beyond 100vh
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-100 flex flex-col items-center px-28 py-8">
      {/* Navbar */}
      <div
        className={`min-h-[10vh] w-full bg-white rounded-lg shadow-md flex justify-between items-center px-6 py-4 ${
          isSticky ? "fixed top-0 left-0 z-50" : ""
        }`}
      >
        <div className="h-6 w-20 bg-gray-300 rounded"></div>
        <div className="font-montserrat flex space-x-6 text-gray-600">
          <a href="/contact" className="font-montserrat hover:text-primary">
            Contact us
          </a>
          <a href="/about" className="hover:text-primary">
            About us
          </a>
          <div className="hover:text-primary">Your Name</div>
        </div>
      </div>

      {/* Main Content */}
    </div>
  );
};

export default Navbar;
