// src/components/BroadbandSection.js
import { Box, Typography } from "@mui/material";
import useStore from "../services/useAppStore";
import BroadbandPrepaidPackages from "./BroadBandPrepaidPackageDetails/BroadbandPrepaidAddOnPackages";
import BroadbandPrepaidMainPackages from "./BroadBandPrepaidPackageDetails/BroadbandPrepaidMainPackages";
import BroadbandDetailsPostPaid from "./BroadbandDetailsPostPaid";
import BroadbandDetailsPrePaid from "./BroadbandDetailsPrePaid";
import MenuLeft from "./MenuLeft";

const UnderConstruction = () => {
    return(
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"450px",flexGrow:1,backgroundColor:"white",borderRadius:3}}>
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
      <Box sx={{ width: "75%", height: "100%"}}>
        {selectedLeftMenuItem === "Summary" && <BroadbandDetailsPostPaid />}
        {selectedLeftMenuItem === "Daily Usage" && <UnderConstruction/>}
        {selectedLeftMenuItem === "Gift Data" && <UnderConstruction />}
        {selectedLeftMenuItem === "History" && <UnderConstruction />}
        {selectedLeftMenuItem === "Redeem Data" && <UnderConstruction />}
        {selectedLeftMenuItem === "Happy Day" && <UnderConstruction />}

        {selectedLeftMenuItem === "Main Packages" && <BroadbandDetailsPrePaid />}
        {selectedLeftMenuItem === "Data Add-Ons" && <UnderConstruction />}
        {selectedLeftMenuItem === "BroadbandMainPackage" && <BroadbandPrepaidMainPackages />}
        {selectedLeftMenuItem === "BroadbandPrepaidPackage" && <BroadbandPrepaidPackages />}
      </Box>
    </Box>
  );
};

export default BroadbandSection;
