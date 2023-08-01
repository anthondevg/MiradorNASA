import Image from "next/image";
import React from "react";

export const TimeCriteriaSelector = ({
  timeCriteria,
  handleCriteria,
  timeCriteriaEnum,
}: any) => {
  return (
    <div
      className="flex ml-4 items-center hover:cursor-pointer timeCriteria"
      onClick={() => {
        handleCriteria(
          timeCriteriaEnum.earthDate === timeCriteria
            ? timeCriteriaEnum.sol
            : timeCriteriaEnum.earthDate
        );
      }}
    >
      <span>
        <Image
          src={
            timeCriteria === timeCriteriaEnum.earthDate
              ? "earth.svg"
              : "mars.svg"
          }
          alt="Earth Logo"
          className=""
          width={30}
          height={30}
          priority
        />
      </span>
      <button className="ml-2 px-8 py-2 rounded-md bg-[#105BD8]">
        {timeCriteria === timeCriteriaEnum.earthDate
          ? "Earth Date"
          : "Sol(Mars)"}
      </button>
    </div>
  );
};
