type cameraType = {
  rover: string;
  camera: string;
  timeCriteria: string;
  time: string;
  page: number;
};

const fetchAPI = async (rover, camera, timeCriteria, time, page) => {
  return await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?${timeCriteria}=${time}${
      camera !== "" ? `&camera=${camera}` : ""
    }&page=${page}&api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      return data.photos;
    });
};

export default fetchAPI;
