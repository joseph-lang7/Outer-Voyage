import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import PricingCard from "../components/PricingCard";

const PricingPage = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-center pt-20 text-white text-5xl">Pricing</h1>
      <div className="flex flex-col 2xl:flex-row justify-center items-center h-auto px-10 pt-10 pb-10 text-black gap-10">
        <PricingCard
          title="Lunar Explorer"
          oldPrice="$2000"
          newPrice="$1,000"
          Option1="Workshops on spacecraft maintenance"
          Option2="Exclusive lectures by experienced astronauts"
          Option3="Introduction to virtual reality (VR) simulations "
          Option4="Personalized mentorship sessions "
        />
        <PricingCard
          title="Astronaut Pro"
          oldPrice="$10,000"
          newPrice="$5,000"
          Option1={
            <p>
              <b>Everything</b> in Lunar Explorer
            </p>
          }
          Option2="Workshops on spacecraft maintenance"
          Option3="Zero-gravity flight experiences"
          Option4="Opportunity to collaborate with space agencies "
        />
        <PricingCard
          title="Cosmic VIP"
          bestValue={true}
          oldPrice="$20,000"
          newPrice="$13,000"
          Option1={
            <p>
              <b>Everything</b> in Astronaut Pro
            </p>
          }
          Option2=" Trips to space-related research facilities"
          Option3="Hands-on training in operating lunar rovers "
          Option4=" Simulated Mars mission "
        />
      </div>
    </div>
  );
};

export default PricingPage;
