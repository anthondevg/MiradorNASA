import React from "react";

export const Input = ({ handleSol, time }: any) => {
  return (
    <input
      type="number"
      className="ml-2 mr-4 px-8 py-2 rounded-md bg-[#105BD8]"
      onChange={(e) => handleSol(e.target.value)}
      placeholder="1000"
      value={time}
    />
  );
};
