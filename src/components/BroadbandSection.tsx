// src/components/BroadbandSection.js
import React from "react";
import { Box, Typography } from "@mui/material";
import MenuLeft from "./MenuLeft";
import BroadbandDetails from "./BroadbandDetails";
import useStore from "../services/useAppStore";

const UnderConstruction = () => {
    return(
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",flexGrow:1,backgroundColor:"white",borderRadius:3}}>
            <Typography variant="body2" sx={{color:"#0056A2",fontSize:24}}>Under Construction</Typography>
        </Box>
    );
};

const BroadbandSection = () => {
  const { selectedLeftMenuItem } = useStore();
  return (
    <Box sx={{ display: "flex", gap: 1, width: "100%",flexGrow:1 }}>
      <Box sx={{ width: "25%", }}>
        <MenuLeft />
      </Box>
      <Box sx={{ width: "75%", height: "450px", }}>
        {selectedLeftMenuItem === "Summary" && <BroadbandDetails />}
        {selectedLeftMenuItem === "Daily Usage" && <UnderConstruction/>}
        {selectedLeftMenuItem === "Gift Data" && <UnderConstruction />}
        {selectedLeftMenuItem === "History" && <UnderConstruction />}
        {selectedLeftMenuItem === "Redeem Data" && <UnderConstruction />}
        {selectedLeftMenuItem === "Happy Day" && <UnderConstruction />}

        {selectedLeftMenuItem === "Main Packages" && <UnderConstruction />}
        {selectedLeftMenuItem === "Data Add-Ons" && <UnderConstruction />}
      </Box>
    </Box>
  );
};

export default BroadbandSection;
