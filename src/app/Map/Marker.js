import { useContext } from "react";
import { Marker, Tooltip } from "react-leaflet";
import Leaflet from "leaflet";
import { appContext } from "../Context";

const PlaceMarker = ({ place, index }) => {
  const { refsArray } = useContext(appContext);
  const myIcon = Leaflet.icon({
    iconUrl:
      "https://th.bing.com/th/id/R.e26925b53d06093104f48268ea381cb3?rik=9kZBVdRXKv0NfA&riu=http%3a%2f%2findiafoodprocessingmap.nic.in%2fImages%2fmega.png&ehk=dyydfHcviyQ%2fXX4VZGzCqf9nqGtQnYrRT47%2bofViJVU%3d&risl=&pid=ImgRaw&r=0",
    iconSize: 50,
    popupAnchor: [0, -25],
  });

  return (
    <Marker
      riseOnHover="true"
      position={[place.latitude || "", place.longitude || ""]}
      icon={myIcon}
      eventHandlers={{
        click: () =>
          refsArray[index].current.scrollIntoView({ behavior: "smooth" }),
      }}
    >
      <Tooltip>{place.name}</Tooltip>
    </Marker>
  );
};

export default PlaceMarker;
