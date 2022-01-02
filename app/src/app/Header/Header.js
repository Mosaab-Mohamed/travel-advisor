import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { appContext } from "../Context";
import { geocodePlace } from "../Apis";
import "./Style.scss";

const Header = () => {
  const { searchTerm, setSearchTerm, setCoords } = useContext(appContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    geocodePlace(searchTerm).then((res) => {
      const { lat, lon } = res.data[0];
      setCoords({ lat, lng: lon });
    });
  };

  return (
    <AppBar position="relative" className="travelAdvisor-appBar">
      <Toolbar className="toolBar">
        <Typography variant="h5">Travel Advisor</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle1">Explore new places</Typography>
          <form className="searchBox" onSubmit={handleSubmit}>
            <SearchIcon className="searchIcon" onClick={handleSubmit} />
            <InputBase
              className="searchInput"
              sx={{ color: "white" }}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
