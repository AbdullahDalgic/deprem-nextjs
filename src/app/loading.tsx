import { Box, CircularProgress } from "@mui/material";
import React from "react";

const loading = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "#fff",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size="3rem" color="inherit" />
    </Box>
  );
};

export default loading;
