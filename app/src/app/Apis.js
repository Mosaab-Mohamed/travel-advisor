import axios from "axios";

export const fetchData = async (type, { lat, lng }) => {
  try {
    const response = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`,
      {
        params: {
          latitude: lat,
          longitude: lng,
          limit: "20",
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            "b3884ca892msh62ed746224467abp17570ajsn73d259ccfb6d",
        },
      }
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const geocodePlace = async (query) => {
  const response = await axios.get(
    "https://forward-reverse-geocoding.p.rapidapi.com/v1/search",
    {
      params: { q: query },
      headers: {
        "x-rapidapi-host": "forward-reverse-geocoding.p.rapidapi.com",
        "x-rapidapi-key": "b3884ca892msh62ed746224467abp17570ajsn73d259ccfb6d",
      },
    }
  );

  return response;
};
