// src/components/BroadbandSection.js
import React from "react";
import { Box } from "@mui/material";
import MenuLeft from "./MenuLeft";
import BroadbandDetails from "./BroadbandDetails";

const BroadbandSection = () => {
  return (
    <Box sx={{ display: "flex", gap: 1, width: "100%" }}>
      <Box sx={{ width: "25%", height: "100%" }}>
        <MenuLeft />
      </Box>
      <Box sx={{ width: "75%", height: "100%" }}>
        <BroadbandDetails />
      </Box>
    </Box>
  );
};

export default BroadbandSection;