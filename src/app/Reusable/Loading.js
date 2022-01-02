import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
};

const Loading = () => {
  return (
    <Box sx={style}>
      <CircularProgress size={60} />
    </Box>
  );
};

export default Loading;
