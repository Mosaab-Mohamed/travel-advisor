import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { appContext } from "../Context";

const Filter = () => {
  const { type, setType, rate, setRate } = React.useContext(appContext);

  return (
    <Box className="inputsBox" gutterBottom>
      <TextField
        className="input"
        select
        label="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        variant="standard"
      >
        <MenuItem value="hotels">Hotels</MenuItem>
        <MenuItem value="restaurants">Restaurants</MenuItem>
        <MenuItem value="attractions">Attractions</MenuItem>
      </TextField>

      <TextField
        className="input"
        select
        label="Rate"
        value={rate}
        onChange={(e) => {
          setRate(e.target.value);
        }}
        variant="standard"
      >
        <MenuItem value={2}>Above 2</MenuItem>
        <MenuItem value={3}>Above 3</MenuItem>
        <MenuItem value={4}>Above 4</MenuItem>
      </TextField>
    </Box>
  );
};

export default Filter;
