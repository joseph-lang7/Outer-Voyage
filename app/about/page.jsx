import Image from "next/image";
import React from "react";
import aboutImage from "/public/about.jpg";
import ServiceItem from "../components/ServiceItem";
const AboutPage = () => {
  return (
    <div className="h-auto grid gap-16 grid-cols-1 xl:grid-cols-2 mx-10 py-20 text-white">
      <div className="flex flex-col justify-start h-auto ">
        <div className="flex gap-3 h-10 items-center">
          <div class="w-9 h-0.5 bg-blue-500"></div>
          <h2>About Us</h2>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">
            Reach{" "}
            <span className="bg-gradient-to-r text-transparent bg-clip-text from-blue-600 via-green-500 to-indigo-400 ">
              Beyond
            </span>{" "}
            the Stars, One Step at a Time
          </h1>
          <p>
            We specialize in crafting immersive modules designed to fuel your
            passion for space exploration and prepare you for the ultimate
            adventure: becoming an astronaut. Our innovative training programs
            combine cutting-edge technology with expert guidance, empowering
            aspiring astronauts to reach for the stars with confidence. Join us
            as we embark on a mission to unlock the boundless potential of space
            exploration and inspire the next generation of space pioneers.
          </p>
          <p className="font-bold">
            Our mission is simple: to provide you with the most comprehensive
            and effective learning modules, ensuring your success in reaching
            for the stars.
          </p>
          <div className="grid grid-cols-1 w-auto sm:grid-cols-2 gap-2 mt-5 sm:w-[550px] md:w-[600px]">
            <ServiceItem text="Expert Guidance" />
            <ServiceItem text="Hands-on Training" />
            <ServiceItem text="Real Simulations" />
            <ServiceItem text="Career Advancement" />
            <ServiceItem text="Mission Preparedness" />
            <ServiceItem text="Lifelong Skills" />
          </div>
        </div>
      </div>
      <div className=" hidden xl:flex justify-center items-center  ">
        <Image
          src={aboutImage}
          alt="Space Image"
          className="rounded-md object-cover w-[480px] h-[700px]"
        />
      </div>
    </div>
  );
};

export default AboutPage;
