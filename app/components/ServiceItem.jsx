import React from "react";
import { IoIosCheckbox } from "react-icons/io";

const ServiceItem = ({ text }) => {
  return (
    <div className="flex gap-2 text-white ">
      <IoIosCheckbox size={30} className="text-blue-500" />
      <p className="font-bold">{text}</p>
    </div>
  );
};

export default ServiceItem;
