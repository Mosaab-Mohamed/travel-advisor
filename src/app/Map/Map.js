import { useContext } from "react";
import { MapContainer, TileLayer, MapConsumer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { appContext } from "../Context";
import "./Style.scss";
import PlaceMarker from "./Marker";

const Map = () => {
  const { coords, places, rate } = useContext(appContext);

  return (
    <MapContainer
      center={[coords.lat, coords.lng]}
      zoom={10}
      className="tavelAdvisor-map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapConsumer>
        {(map) => {
          map.flyTo([coords.lat, coords.lng], 13);
          return null;
        }}
      </MapConsumer>
      {places
        ?.filter((place) => Math.trunc(Number(place.rating)) > rate)
        .map((place, index) => (
          <PlaceMarker place={place} key={index} index={index} />
        ))}
    </MapContainer>
  );
};

export default Map;
