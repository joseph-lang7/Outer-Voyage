import Image from "next/image";
import astronaut from "/public/astronaut.jpg";
import gym from "/public/gym.jpg";
import spacecraft from "/public/spacecraft.jpg";
import Link from "next/link";
const TrainingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <h1 className="pt-[25px] pb-10 font-semibold  text-white text-5xl text-center">
        Training
      </h1>
      <div className=" md:flex md:justify-around border-4  bg-gradient-to-b from-gray-400 to-transparent rounded-md  md:items-center gap-5 mb-10 py-5 px-10">
        <div className="flex justify-center">
          <div>
            <div className="hidden lg:flex min-w-[450px] max-w-[450px] max-h-[450px] min-h-[450px] rounded-md ">
              <Image
                src={spacecraft}
                alt="Spacecraft"
                style={{ borderRadius: "10px", objectFit: "cover" }}
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
      <div className=" md:flex md:justify-around border-4  bg-gradient-to-b from-gray-400 to-transparent rounded-md  md:items-center gap-5 mb-10 py-5 px-10">
        <div className="flex flex-col gap-5 text-white max-w-[700px] ">
          <h2 className=" text-3xl text-center md:text-center lg:text-start text-white">
            Module 2
          </h2>
          <h2 className="text-2xl text-center md:text-center lg:text-start font-bold  text-white">
            Astronaut Fitness and Health{" "}
          </h2>
          <p className="text-center lg:text-start">
            Personalized fitness assessments and tailored exercise regimens to
            mitigate physiological effects of prolonged spaceflight
          </p>
          <p className="text-center lg:text-start">
            Simulation exercises in reduced-gravity environments to adapt to
            challenges faced during extended missions in space
          </p>
          <p className="text-center lg:text-start">
            Implementation of personalized sleep schedules and strategies to
            optimize restorative sleep patterns in microgravity environments
          </p>
        </div>
        <div className="flex justify-center">
          <div>
            <div className="hidden lg:flex min-w-[450px] max-w-[450px] max-h-[450px] min-h-[450px] rounded-md ">
              <Image
                src={gym}
                alt="Gym"
                style={{ borderRadius: "10px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" md:flex md:justify-around border-4  bg-gradient-to-b from-gray-400 to-transparent rounded-md  md:items-center gap-5 mb-10 py-5 px-10">
        <div className="flex justify-center">
          <div>
            <div className="hidden lg:flex min-w-[450px] max-w-[450px] max-h-[450px] min-h-[450px] rounded-md ">
              <Image
                src={astronaut}
                alt="Astronaut"
                style={{ borderRadius: "10px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 text-white max-w-[700px] ">
          <h2 className=" text-3xl text-center md:text-center lg:text-start text-white">
            Module 3
          </h2>
          <h2 className="text-2xl text-center md:text-center lg:text-start font-bold  text-white">
            Moon Landing{" "}
          </h2>
          <p className="text-center lg:text-start">
            Specialized training on lunar surface operations, including
            navigation, habitat setup, and sample collection techniques
          </p>
          <p className="text-center lg:text-start">
            Practice in lunar landing and ascent procedures, including
            rendezvous and docking with the orbiting spacecraft
          </p>
          <p className="text-center lg:text-start">
            Simulation exercises in lunar analog environments to replicate
            conditions on the moon and develop proficiency in mission-critical
            tasks
          </p>
        </div>
      </div>
      <h2 className="text-4xl text-white mb-5">Are You Ready?</h2>
      <Link href="/pricing">
        <button className="px-5 py-2 bg-blue-500 rounded-md hover:bg-blue-700  duration-300 hover:scale-110 hover:text-white ">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default TrainingPage;
