import clsx from "clsx";
import React, { useState, useEffect } from "react";
import { RoverPicker } from "./RoverPicker";

export const Filters = () => {
  enum timeCriteriaEnum {
    earthDate = "earth_date",
    sol = "sol",
  }

  const [timeCriteria, setTimeCriteria] = useState<timeCriteriaEnum>(
    timeCriteriaEnum.earthDate
  );

  useEffect(() => {
    console.log(timeCriteria);
  }, [timeCriteria]);

  return (
    <div>
      <RoverPicker />
      <div className="mt-2">
        <span className="font-bold text-lg mr-2">Rover's Camera</span>
        <select
          name="aaaa"
          id="aaaa"
          placeholder="Select a camera please"
          className="px-8 py-1 rounded-md bg-[#105BD8]"
        >
          <option defaultChecked value="">
            MHAZ
          </option>
          <option value="">FHAZ</option>
          <option value="">FHAZ</option>
          <option value="">FHAZ</option>
          <option value="">FHAZ</option>
          <option value="">FHAZ</option>
        </select>

        <button
          className="ml-2 px-8 py-1 rounded-md bg-[#105BD8]"
          onClick={() => {
            setTimeCriteria(
              timeCriteriaEnum.earthDate === timeCriteria
                ? timeCriteriaEnum.sol
                : timeCriteriaEnum.earthDate
            );
          }}
        >
          {timeCriteria === timeCriteriaEnum.earthDate
            ? "Earth Date"
            : "Mars Day(Sol)"}
        </button>

        {timeCriteria === timeCriteriaEnum.earthDate ? (
          <input
            type="date"
            className="ml-2 px-8 py-1 rounded-md bg-[#105BD8]"
          />
        ) : (
          <input
            type="number"
            className="ml-2 px-8 py-1 rounded-md bg-[#105BD8]"
          />
        )}
        <span> | </span>
        <button className="ml-2 px-8 py-2 border rounded-md bg-[#0b3d91]">
          Search
        </button>
      </div>
    </div>
  );
};
