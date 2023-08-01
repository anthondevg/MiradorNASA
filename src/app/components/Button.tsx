import React from "react";

export const Button = ({ children, onClick }: any) => {
  return (
    <button
      className="ml-4 px-8 py-2 rounded-md bg-[#0b3d91]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
