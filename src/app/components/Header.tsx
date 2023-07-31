"use client";
import React from "react";
import { Navbar } from "./Navbar";
import { Filters } from "./Filters";

export const Header = () => {
  return (
    <div className="z-10 md:w-full md:max-w-7xl font-mono">
      <Navbar />
      <Filters />
    </div>
  );
};
