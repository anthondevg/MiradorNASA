import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <p className="left-0 top-0 text-md flex w-full justify-center border border-white font-bold lg:static lg:w-auto px-12 py-4 lg:rounded-xl lg:bord">
        LookoutNASA
      </p>
      <div className="bottom-0 text-xl left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://api.nasa.gov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-bold">By</span>
          <Image
            src="/nasalogo.svg"
            alt="Nasa Logo"
            className=""
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  );
};
