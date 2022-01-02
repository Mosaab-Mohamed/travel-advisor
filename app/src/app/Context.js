import { useState, createContext } from "react";

export const appContext = createContext();

const ContextProvider = ({ children }) => {
  const [type, setType] = useState("hotels");
  const [rate, setRate] = useState(2);
  const [places, setPlaces] = useState([]);
  const [noPlaces, setNoPlaces] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [coords, setCoords] = useState({
    lat: "40.7127281",
    lng: "-74.0060152",
  });
  const [refsArray, setRefsArray] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <appContext.Provider
      value={{
        type,
        setType,
        rate,
        setRate,
        places,
        setPlaces,
        noPlaces,
        setNoPlaces,
        searchTerm,
        setSearchTerm,
        coords,
        setCoords,
        loading,
        setLoading,
        refsArray,
        setRefsArray,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default ContextProvider;
