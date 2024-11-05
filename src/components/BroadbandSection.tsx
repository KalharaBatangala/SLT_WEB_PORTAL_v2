// src/components/BroadbandSection.js
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import fetchDataBalance from "../services/fetchDataBalance";
import useStore from "../services/useAppStore";
import { DataBalance } from "../types/types";
import BroadbandPrepaidMainPackages from "./BroadBandPrepaidPackageDetails/BroadbandPrepaidMainPackages";
import BroadbandDetailsPostPaid from "./BroadbandDetailsPostPaid";
import BroadbandDetailsPrePaid from "./BroadbandDetailsPrePaid";
import BroadbandDetailsPrepaidAddons from "./BroadbandDetailsPrepaidAddons";
import MenuLeft from "./MenuLeft";
import TransactionsHistory from "./TransactionsHistory";
import BroadbandPrepaidAddOnPackages from "./BroadBandPrepaidPackageDetails/BroadbandPrepaidAddOnPackages";

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
  const { selectedLeftMenuItem, selectedTelephone,packageListUpdate } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const data = await fetchDataBalance(selectedTelephone);

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

      setAddOnData(addOnData)
      setMainData(mainData);
    };

    fetchData();
  }, [selectedTelephone,packageListUpdate]);
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
        {selectedLeftMenuItem === "BroadbandPrepaidPackage" && <BroadbandPrepaidAddOnPackages />}
        {selectedLeftMenuItem === "Transaction" && <TransactionsHistory serviceId={selectedTelephone} />}
      </Box>
    </Box>
  );
};

export default BroadbandSection;
