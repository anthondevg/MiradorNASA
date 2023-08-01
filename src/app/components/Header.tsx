"use client";
import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Filters } from "./Filters";
import { Photos } from "./Photos";

export const Header = () => {
  const [photos, setPhotos] = useState([]);

  const fetchData = (data: any) => {
    setPhotos(data);
  };
  return (
    <div className="z-10 md:w-full md:max-w-7xl font-mono">
      <Navbar />
      <Filters handleFetch={fetchData} />
    </div>
  );
};
