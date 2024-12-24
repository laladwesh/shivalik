import React from "react";

const Footer = () => {
  return (
    <div className="px-4 md:px-16 lg:px-28 mt-6 bg-gray-100 h-80">
      <div className="bg-primary shadow-xl rounded-3xl text-white items-center px-6 md:px-12 lg:px-16 py-6 md:py-8">
        <div className="py-5 border-b border-white">
          <div className="bg-white w-24 h-8 rounded-sm"></div>
        </div>
        <div className="flex justify-between w-11/12 font-montserrat mx-auto -space-x-16  text-white text-sm font-semibold p-8">
          <span className="cursor-pointer">Contact us</span>
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">About us</span>
          <span className="cursor-pointer">Account</span>
          <span className="cursor-pointer">Order history</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
