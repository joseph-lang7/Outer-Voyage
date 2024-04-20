import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import PricingCard from "../components/PricingCard";

const PricingPage = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-center pt-20 text-white text-5xl">Pricing</h1>
      <div className="flex flex-col xl:flex-row justify-center items-center h-auto px-10 pt-10 pb-10 text-black gap-8 xl:gap-5">
        <PricingCard
          title="Starter"
          oldPrice="$2000"
          newPrice="$1000"
          Option1={1}
          Option2={2}
          Option3={3}
          Option4={4}
        />
        <PricingCard
          title="Pro"
          oldPrice="$2000"
          newPrice="$1000"
          Option1={1}
          Option2={2}
          Option3={3}
          Option4={4}
        />
        <PricingCard
          title="Platinum"
          bestValue={true}
          oldPrice="$2000"
          newPrice="$1000"
          Option1={1}
          Option2={2}
          Option3={3}
          Option4={4}
        />
      </div>
    </div>
  );
};

export default PricingPage;
