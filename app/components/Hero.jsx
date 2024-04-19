import React from "react";

const Hero = () => {
  return (
    <div className="max-w-screen h-screen bg-cover bg-[url('/hero-bg.jpg')]">
      <div className="text-white flex flex-col justify-center items-center h-full">
        <h1 className="text-3xl md:text-6xl lg:text-7xl ">EXPLORE. TRAVEL.</h1>
        <div className="flex gap-3 mt-5">
          <button className="text-black hover:text-white px-5 py-2 bg-blue-500 rounded-md hover:bg-blue-700 duration-300 hover:scale-110   ">
            Training
          </button>
          <button className="text-black hover:text-white px-5 py-2 bg-blue-500 rounded-md hover:bg-blue-700 duration-300 hover:scale-110 ">
            Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
