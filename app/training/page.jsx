import Image from "next/image";
import astronaut from "/public/astronaut.jpg";

const TrainingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <h1 className="pt-[25px] pb-10 font-semibold  text-white text-5xl text-center">
        Training
      </h1>
      <div className=" md:flex md:justify-around border-4  bg-gradient-to-b from-gray-400 to-transparent rounded-md  md:items-center gap-5 mb-10 py-5 px-10">
        <div className="flex justify-center">
          <div>
            <div className="hidden lg:flex min-w-[450px] max-w-[450px] rounded-md ">
              <Image
                src={astronaut}
                alt="Astronaut"
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 text-white max-w-[700px] ">
          <h2 className=" text-3xl text-center md:text-center lg:text-start text-white">
            Module 1
          </h2>
          <h2 className="text-2xl text-center md:text-center lg:text-start font-bold  text-white">
            Spacecraft Systems and Operations{" "}
          </h2>
          <p className="text-center lg:text-start">
            Comprehensive training on spacecraft subsystems: propulsion, life
            support, communication, navigation, and power systems
          </p>
          <p className="text-center lg:text-start">
            Hands-on experience in emergency procedures and troubleshooting
            techniques for spacecraft systems
          </p>
          <p className="text-center lg:text-start">
            Practical exercises in simulated environments to develop skills for
            routine operations
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;
