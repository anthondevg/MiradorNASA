import React from "react";

export const CameraSelector = ({
  rover = "opportunity",
  handleCamera,
}: any) => {
  return (
    <>
      <span className="font-bold text-lg mr-2">Camera</span>
      <select
        name="camera_select"
        placeholder="Select a camera please"
        className="px-4 py-2 rounded-md bg-[#105BD8]"
        onChange={(e) => handleCamera(e.target.value.toLowerCase())}
      >
        <option value={""}>All</option>
        {roverData[rover].map((camera: cameraType, i: number) => (
          <option key={i} value={camera.name}>
            {camera.name}
          </option>
        ))}
      </select>
    </>
  );
};

type cameraType = {
  name: string;
  fullName: string;
};

const roverData: any = {
  curiosity: [
    {
      name: "FHAZ",
      fullName: "Front Hazard Avoidance Camera",
    },
    {
      name: "RHAZ",
      fullName: "Rear Hazard Avoidance Camera",
    },
    {
      name: "MAST",
      fullName: "Mast Camera",
    },
    {
      name: "CHEMCAM",
      fullName: "Chemistry and Camera Complex",
    },
    {
      name: "MAHLI",
      fullName: "Mars Hand Lens Imager",
    },
    {
      name: "MARDI",
      fullName: "Mars Descent Imager",
    },
    {
      name: "NAVCAM",
      fullName: "Navigation Camera",
    },
  ],
  opportunity: [
    {
      name: "FHAZ",
      fullName: "Front Hazard Avoidance Camera",
    },
    {
      name: "RHAZ",
      fullName: "Rear Hazard Avoidance Camera",
    },
    {
      name: "NAVCAM",
      fullName: "Navigation Camera",
    },
    {
      name: "PANCAM",
      fullName: "Panoramic Camera",
    },
    {
      name: "MINITES",
      fullName: "Miniature Thermal Emission Spectrometer (Mini-TES)",
    },
  ],
  spirit: [
    {
      name: "FHAZ",
      fullName: "Front Hazard Avoidance Camera",
    },
    {
      name: "RHAZ",
      fullName: "Rear Hazard Avoidance Camera",
    },
    {
      name: "NAVCAM",
      fullName: "Navigation Camera",
    },
    {
      name: "PANCAM",
      fullName: "Panoramic Camera",
    },
    {
      name: "MINITES",
      fullName: "Miniature Thermal Emission Spectrometer (Mini-TES)",
    },
  ],
};
