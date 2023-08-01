import Image from "next/image";
import React from "react";

export const PhotoCard = ({ photo }: any) => {
  return (
    <div className="p-4 mb-2">
      <div className="flex justify-between">
        <div className="flex">
          <Image
            src={`/${photo.rover.name}.png`}
            alt="Curiosity Rover Photo"
            className="rounded-md my-2"
            width={65}
            height={65}
            priority
          />
          <div className="flex flex-col ml-2">
            <span className=" text-white font-bold">{photo.rover.name}</span>
            <span className="text-slate-300 text-white">
              {photo.camera.full_name}
            </span>
            <p className="text-md font-bold text-gray-500">
              Date {photo.earth_date}
            </p>
            <p className="text-md font-bold text-gray-500">Date {photo.id}</p>
          </div>
        </div>
        <div></div>
      </div>
      <img className="rounded-xl w-full mt-2" src={photo.img_src} />
    </div>
  );
};
