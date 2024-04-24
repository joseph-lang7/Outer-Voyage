import React from "react";
import Image from "next/image";
const ModuleCard = ({ src, alt, moduleNumber, moduleTitle, p1, p2, p3 }) => {
  return (
    <div>
      <div className="  md:flex justify-around border-4  bg-gradient-to-b from-gray-400 to-transparent rounded-md  md:items-center  mb-10 lg:gap-5 py-5 px-10">
        <div className="flex justify-center">
          <div>
            <div className="hidden lg:flex min-w-[450px] max-w-[450px] max-h-[450px] min-h-[450px] rounded-md ">
              <Image
                src={src}
                alt={alt}
                style={{ borderRadius: "10px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 text-white w-[300px] h-[400px] sm:w-[450px] sm:h-[700px] lg:max-w-[350px] xl:min-w-[600px]">
          <h2 className=" text-3xl text-center md:text-center lg:text-start text-white">
            {moduleNumber}
          </h2>
          <h2 className="text-2xl text-center md:text-center lg:text-start font-bold  text-white">
            {moduleTitle}
          </h2>
          <div className="flex justify-center items-center lg:hidden  w-[200px] h-[200px] rounded-md ">
            <Image
              src={src}
              alt={alt}
              style={{
                borderRadius: "10px",
                objectFit: "cover",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <p className="hidden sm:block text-center lg:text-start">{p1}</p>
          <p className="hidden sm:block text-center lg:text-start">{p2}</p>
          <p className="hidden sm:block text-center lg:text-start">{p3}</p>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
