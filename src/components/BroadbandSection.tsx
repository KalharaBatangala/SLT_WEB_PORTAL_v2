// src/components/BroadbandSection.js
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import fetchDataBalance from "../services/fetchDataBalance";
import useStore from "../services/useAppStore";
import { DataBalance } from "../types/types";
import BroadbandPrepaidPackages from "./BroadBandPrepaidPackageDetails/BroadbandPrepaidAddOnPackages";
import BroadbandPrepaidMainPackages from "./BroadBandPrepaidPackageDetails/BroadbandPrepaidMainPackages";
import BroadbandDetailsPostPaid from "./BroadbandDetailsPostPaid";
import BroadbandDetailsPrePaid from "./BroadbandDetailsPrePaid";
import BroadbandDetailsPrepaidAddons from "./BroadbandDetailsPrepaidAddons";
import MenuLeft from "./MenuLeft";

const UnderConstruction = () => {
    return(
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"450px",flexGrow:1,backgroundColor:"white",borderRadius:3}}>
            <Typography variant="body2" sx={{color:"#0056A2",fontSize:24}}>Under Construction</Typography>
        </Box>
    );
};

const BroadbandSection = () => {
  const [addOnData, setAddOnData] = useState<DataBalance[]>([]);
  const [mainData, setMainData] = useState<DataBalance[]>([]);
  const { selectedLeftMenuItem, selectedTelephone } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDataBalance(selectedTelephone);
      console.log(data);

      const { addOnData, mainData } = data!.reduce(
        (acc, item) => {
          if (item.packageCategory === "Add-ons") {
            acc.addOnData.push(item);
          } else {
            acc.mainData.push(item);
          }
          return acc;
        },
        { addOnData: [], mainData: [] } as { addOnData: DataBalance[]; mainData: DataBalance[] }
      );

      setAddOnData(addOnData);
      console.log("AddOnData:", addOnData);
      setMainData(mainData);
      console.log("MainData:", mainData);
    };

    fetchData();
  }, [selectedTelephone]);
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

        {selectedLeftMenuItem === "Main Packages" && <BroadbandDetailsPrePaid dataBalance={mainData}/>}
        {selectedLeftMenuItem === "Data Add-Ons" && <BroadbandDetailsPrepaidAddons dataBalance={addOnData}/>}
        {selectedLeftMenuItem === "BroadbandMainPackage" && <BroadbandPrepaidMainPackages />}
        {selectedLeftMenuItem === "BroadbandPrepaidPackage" && <BroadbandPrepaidPackages />}
      </Box>
    </Box>
  );
};

export default BroadbandSection;
