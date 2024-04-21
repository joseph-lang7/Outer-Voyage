import ModuleCard from "../components/ModuleCard";
import Link from "next/link";
import astronaut from "/public/astronaut.jpg";
import gym from "/public/gym.jpg";
import spacecraft from "/public/spacecraft.jpg";
const TrainingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <h1 className="pt-[25px] pb-10 font-semibold  text-white text-5xl text-center">
        Training
      </h1>
      <ModuleCard
        src={spacecraft}
        alt="Spacecraft photo"
        moduleNumber="Module 1"
        moduleTitle=" Spacecraft Systems and Operations"
        p1=" Comprehensive training on spacecraft subsystems: propulsion, life
            support, communication, navigation, and power systems"
        p2="Hands-on experience in emergency procedures and troubleshooting
            techniques for spacecraft systems"
        p3="Practical exercises in simulated environments to develop skills for
            routine operations"
      />
      <ModuleCard
        src={gym}
        alt="Gym photo"
        moduleNumber="Module 2"
        moduleTitle=" Astronaut Fitness and Health"
        p1=" Personalized fitness assessments and tailored exercise regimens to
        mitigate physiological effects of prolonged spaceflight"
        p2="Simulation exercises in reduced-gravity environments to adapt to
        challenges faced during extended missions in space"
        p3="Implementation of personalized sleep schedules and strategies to
        optimize restorative sleep patterns in microgravity environments"
      />
      <ModuleCard
        src={astronaut}
        alt="Astronaut photo"
        moduleNumber="Module 3"
        moduleTitle=" Moon Landing"
        p1=" Specialized training on lunar surface operations, including
        navigation, habitat setup, and sample collection techniques"
        p2="Practice in lunar landing and ascent procedures, including
        rendezvous and docking with the orbiting spacecraft"
        p3="Simulation exercises in lunar analog environments to replicate
        conditions on the moon and develop proficiency in mission-critical
        tasks"
      />
      <h2 className="text-4xl text-white mb-5">Are You Ready?</h2>
      <Link href="/pricing">
        <button className="px-7 py-3 bg-blue-500 rounded-md hover:bg-blue-700  duration-300 hover:scale-110 hover:text-white ">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default TrainingPage;
