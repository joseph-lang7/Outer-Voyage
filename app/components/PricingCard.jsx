import React from "react";
import { IoIosCheckmark } from "react-icons/io";
const PricingCard = ({
  title,
  bestValue,
  oldPrice,
  newPrice,
  Option1,
  Option2,
  Option3,
  Option4,
}) => {
  return (
    <div
      className={`${
        bestValue
          ? "shadow-inner shadow-slate-400 flex flex-col gap-2 bg-white h-96 min-w-[400px] max-w-[400px] items-center rounded-lg"
          : "flex flex-col gap-2 bg-white h-96 min-w-[400px] max-w-[400px] items-center rounded-lg"
      }`}
    >
      <div className="flex flex-col gap-2 mt-5 text-center">
        {bestValue && (
          <div className=" rounded-lg w-[150px] px-5 py-2 h-[50px] absolute bg-blue-500 justify-end translate-x-[180px] translate-y-[-10px] rotate-45 text-[19px] font-bold ">
            <p>Best Value</p>
          </div>
        )}
        <h2 className="font-bold text-xl">{title}</h2>
        <div className="flex gap-2">
          <s className="font-bold text-gray-400 text-2xl ">{oldPrice}</s>
          <p className="font-bold text-2xl ">{newPrice}</p>
        </div>
      </div>
      <div className="flex w-full pl-2 flex-col gap-2">
        <div className="flex items-center justify-start">
          <IoIosCheckmark size={50} className="text-green-600" />
          <p>{Option1}</p>
        </div>
      </div>
      <div className="flex w-full pl-2 flex-col gap-2">
        <div className="flex items-center justify-start">
          <IoIosCheckmark size={50} className="text-green-600" />
          <p>{Option2}</p>
        </div>
      </div>
      <div className="flex w-full pl-2 flex-col gap-2">
        <div className="flex items-center justify-start">
          <IoIosCheckmark size={50} className="text-green-600" />
          <p>{Option3}</p>
        </div>
      </div>
      <div className="flex w-full pl-2 flex-col gap-2">
        <div className="flex items-center justify-start">
          <IoIosCheckmark size={50} className="text-green-600" />
          <p>{Option4}</p>
        </div>
      </div>
      <button className="px-7 mt-3 py-3 bg-blue-500 rounded-md hover:bg-blue-700  duration-300 hover:scale-110 hover:text-white text-black ">
        Buy Now
      </button>
    </div>
  );
};

export default PricingCard;
