import React, { useEffect, useState } from "react";

export const RoverPicker = ({ handleRoverSelect, rover, roverEnum }: any) => {
  return (
    <div className="md:flex p-2 justify-between w-">
      <button
        className={`p-4 w-full rounded mr-4 hover:bg-blue-800 font-bold text-3xl buttonRover ${
          roverEnum.curiosity === rover ? "bg-[#105BD8]" : "bg-gray-800"
        }`}
        onClick={() => {
          handleRoverSelect(roverEnum.curiosity);
        }}
      >
        CURIOSITY
      </button>
      <button
        onClick={() => {
          handleRoverSelect(roverEnum.opportunity);
        }}
        className={`p-4  w-full rounded mr-4 hover:bg-blue-800 buttonRover font-bold text-3xl ${
          roverEnum.opportunity === rover ? "bg-[#105BD8]" : "bg-gray-800"
        }`}
      >
        OPPORTUNITY
      </button>
      <button
        onClick={() => {
          handleRoverSelect(roverEnum.spirit);
        }}
        className={`p-4  w-full rounded mr-4 hover:bg-blue-800 buttonRover font-bold text-3xl ${
          roverEnum.spirit === rover ? "bg-[#105BD8]" : "bg-gray-800"
        }`}
      >
        SPIRIT
      </button>
    </div>
  );
};
