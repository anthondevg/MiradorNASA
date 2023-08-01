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
import InfiniteScroll from "react-infinite-scroll-component";

export const Home = () => {
  const [rover, setRover] = useState<roverEnum>(roverEnum.curiosity);
  const [camera, setCamera] = useState("");
  const [timeCriteria, setTimeCriteria] = useState<timeCriteriaEnum>(
    timeCriteriaEnum.earthDate
  );
  const [photos, setPhotos] = useState([]) as Array<any>;
  const [loading, setLoading] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
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

  const [time, setTime] = useState(
    new Date(new Date().setDate(new Date().getDate() - 2))
      .toISOString()
      .slice(0, 10)
  );
  useEffect(() => {
    console.log("use effect");
    fetchData(false);
  }, []);
  const fetchData = async (infiniteScroll: boolean) => {
    if (infiniteScroll) {
      const fetchedPhotos = await fetchAPI(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?page=${page}&${timeCriteria}=${time}${
          camera !== "" ? `&camera=${camera}` : ""
        }`
      );
      setPhotos((prevPhotos: any) => [...prevPhotos, ...fetchedPhotos]);
      setPage(page + 1);
      if (fetchedPhotos.length === 0 || fetchedPhotos === undefined) {
        setHasMore(false);
      }
    } else {
      setLoading(true);
      setPage(1);
      const fetchedPhotos = await fetchAPI(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?page=${page}&${timeCriteria}=${time}${
          camera !== "" ? `&camera=${camera}` : ""
        }`
      );
      setPhotos(fetchedPhotos);
      if (fetchedPhotos.length === 0 || fetchedPhotos === undefined) {
        setHasMore(false);
      }
    }

    setLoading(false);
  };

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div>
        <Navbar />

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
                fetchData(false);
              }}
            >
              Search
            </Button>
          </div>
        </div>
      </div>
      <InfiniteScroll
        dataLength={photos.length}
        next={() => fetchData(true)}
        hasMore={hasMore}
        loader={<SkeletonPhoto />}
        endMessage={
          <p className="font-bold text-white text-2xl">
            <b>No photos.</b>
          </p>
        }
      >
        <Photos photos={photos} loading={loading} />
      </InfiniteScroll>
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
