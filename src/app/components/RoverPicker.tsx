import React, { useEffect, useState } from "react";

export const RoverPicker = () => {
  enum roverEnum {
    curiosity = "curiosity",
    opportunity = "opportunity",
    spirit = "spirit",
  }
  const [rover, setRover] = useState<roverEnum>(roverEnum.curiosity);
  useEffect(() => {
    console.log(rover);
  }, [rover]);
  return (
    <div className="md:flex p-2 justify-between w-">
      <button
        className={`p-4 w-full rounded mr-4 hover:bg-blue-800 font-bold text-3xl ${
          roverEnum.curiosity === rover ? "bg-[#105BD8]" : "bg-gray-800"
        }`}
        onClick={() => {
          setRover(roverEnum.curiosity);
        }}
      >
        CURIOSITY
      </button>
      <button
        onClick={() => {
          setRover(roverEnum.opportunity);
        }}
        className={`p-4  w-full rounded mr-4 hover:bg-blue-800 font-bold text-3xl ${
          roverEnum.opportunity === rover ? "bg-[#105BD8]" : "bg-gray-800"
        }`}
      >
        OPPORTUNITY
      </button>
      <button
        onClick={() => {
          setRover(roverEnum.spirit);
        }}
        className={`p-4  w-full rounded mr-4 hover:bg-blue-800 font-bold text-3xl ${
          roverEnum.spirit === rover ? "bg-[#105BD8]" : "bg-gray-800"
        }`}
      >
        SPIRIT
      </button>
    </div>
  );
};
