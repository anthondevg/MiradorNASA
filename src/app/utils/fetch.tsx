const fetchAPI = (url: string) => {
  const data = fetch(`${url}&api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      return data.photos;
    });
  return data;
};

export default fetchAPI;
