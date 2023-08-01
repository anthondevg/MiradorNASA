import React from "react";

export const DatePicker = ({ handleDate, time }: any) => {
  return (
    <input
      type="date"
      className="ml-2 mr-4 px-8 py-2 rounded-md bg-[#105BD8]"
      onChange={(e) => handleDate(e.target.value)}
      value={time}
    />
  );
};
