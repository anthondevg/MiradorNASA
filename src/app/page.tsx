"use client";
import React, { useState, useEffect } from "react";
import { RoverPicker } from "../app/components/RoverPicker";
import { CameraSelector } from "../app/components/CameraSelector";
import { TimeCriteriaSelector } from "../app/components/TimeCriteriaSelector";
import { Button } from "../app/components/Button";
import { Navbar } from "./components/Navbar";
import { Photos } from "./components/Photos";
import { DatePicker } from "./components/DatePicker";
import { Input } from "./components/Input";
import fetchAPI from "./utils/fetch";
import { SkeletonPhoto } from "./components/SkeletonPhoto";

export const Home = () => {
  const [rover, setRover] = useState<roverEnum>(roverEnum.curiosity);
  const [camera, setCamera] = useState("");
  const [timeCriteria, setTimeCriteria] = useState<timeCriteriaEnum>(
    timeCriteriaEnum.earthDate
  );
  const [photos, setPhotos] = useState([]) as Array<any>;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingScroll, setLoadingScroll] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleRoverSelect = (rover: any) => {
    setRover(rover);
  };
  const handleCameraSelect = (camera: string) => {
    setCamera(camera);
  };
  const handleCriteriaSelect = (criteria: any) => {
    setTimeCriteria(criteria);
  };
  const handleTime = (date: any) => {
    setTime(date);
  };
  useEffect(() => {
    console.log("use effect");
    fetchDataSearch();
  }, []);

  const [time, setTime] = useState(
    new Date(new Date().setDate(new Date().getDate() - 2))
      .toISOString()
      .slice(0, 10)
  );

  const fetchDataScroll = async () => {
    setLoadingScroll(true);

    const fetchedPhotos = await fetchAPI(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?${timeCriteria}=${time}${
        camera !== "" ? `&camera=${camera}` : ""
      }&page=${page}`
    );

    setPhotos((prevPhotos: any) => [...prevPhotos, ...fetchedPhotos]);
    setPage((prevPage) => prevPage + 1);
    setLoadingScroll(false);
  };

  const fetchDataSearch = async () => {
    setLoading(true);
    setPage(1);
    let fetchedPhotos = await fetchAPI(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?${timeCriteria}=${time}${
        camera !== "" ? `&camera=${camera}` : ""
      }&page=${page}`
    );
    setPhotos(fetchedPhotos);
    setLoading(false);
  };
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);

    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loadingScroll
    ) {
      return;
    }
    fetchDataScroll();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      console.log("cleaner");
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loadingScroll]);

  return (
    <div>
      <div>
        <Navbar />
        <span className="font-bold text-lg mr-2">
          Hello! Select your Rover and start watching Mars photos 🚀
        </span>
        <div>
          <RoverPicker
            handleRoverSelect={handleRoverSelect}
            rover={rover}
            roverEnum={roverEnum}
          />

          <div
            className={`${
              scrollPosition > 300
                ? "md:flex items-center pt-4 fixed top-0 left-0 w-full px-12 pb-4 justify-center z-50 transition-transform ease-in-out bg-gray-800"
                : "md:flex items-center mt-2 block"
            }`}
          >
            <CameraSelector rover={rover} handleCamera={handleCameraSelect} />

            <TimeCriteriaSelector
              timeCriteria={timeCriteria}
              handleCriteria={handleCriteriaSelect}
              timeCriteriaEnum={timeCriteriaEnum}
            />

            {timeCriteria === timeCriteriaEnum.earthDate ? (
              <DatePicker time={time} handleDate={handleTime} />
            ) : (
              <Input time={time} handleSol={handleTime}></Input>
            )}
            <span> | </span>
            <Button
              onClick={() => {
                fetchDataSearch();
              }}
            >
              Search
            </Button>
          </div>
        </div>
      </div>
      <Photos photos={photos} loading={loading} />
      {loadingScroll && <SkeletonPhoto />}
    </div>
  );
};

export default Home;

enum timeCriteriaEnum {
  earthDate = "earth_date",
  sol = "sol",
}
enum roverEnum {
  curiosity = "curiosity",
  opportunity = "opportunity",
  spirit = "spirit",
}
