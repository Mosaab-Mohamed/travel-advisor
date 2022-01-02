import { useEffect, useContext, createRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import Filter from "./Filter";
import Loading from "../Reusable/Loading";
import Alert from "@mui/material/Alert";
import { appContext } from "../Context";
import { fetchData } from "../Apis";
import "./Style.scss";

const List = () => {
  const {
    type,
    rate,
    places,
    setPlaces,
    noPlaces,
    setNoPlaces,
    coords,
    loading,
    setLoading,
    setRefsArray,
  } = useContext(appContext);

  useEffect(() => {
    setLoading(true);
    fetchData(type, coords).then((response) => {
      const { data } = response.data;

      if (data.length < 1) {
        setNoPlaces(true);
        setLoading(false);
        return null;
      }

      setPlaces(response.data.data);
      setNoPlaces(false);
      setLoading(false);
    });
    // eslint-disable-next-line
  }, [type, coords]);

  useEffect(() => {
    const refs = Array(places.length)
      .fill()
      .map(() => createRef());
    setRefsArray(refs);
    // eslint-disable-next-line
  }, [places]);

  return (
    <Box className="travelAdvisor-list">
      <Typography variant="h6" gutterBottom>
        Hotels, Restaurants and Attractions
      </Typography>
      <Filter />
      {loading ? (
        <Loading />
      ) : noPlaces ? (
        <Alert severity="info">No Places Found</Alert>
      ) : (
        places
          .filter((place) => Math.trunc(Number(place.rating)) > rate)
          .map((place, index) => (
            <PlaceDetails key={index} place={place} index={index} />
          ))
      )}
    </Box>
  );
};

export default List;
