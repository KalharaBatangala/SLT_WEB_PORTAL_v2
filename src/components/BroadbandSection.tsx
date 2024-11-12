// src/components/BroadbandSection.js

import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import fetchDataBalance from "../services/fetchDataBalance";
import useStore from "../services/useAppStore";
import { DataBalance } from "../types/types";
import BillPage from "./BillDetails/Billpage";
import BroadbandPrepaidAddOnPackages from "./BroadBandPrepaidPackageDetails/BroadbandPrepaidAddOnPackages";
import BroadbandPrepaidMainPackages from "./BroadBandPrepaidPackageDetails/BroadbandPrepaidMainPackages";
import BroadbandDetailsPostPaid from "./BroadbandDetailsPostPaid";
import BroadbandDetailsPrePaid from "./BroadbandDetailsPrePaid";
import BroadbandDetailsPrepaidAddons from "./BroadbandDetailsPrepaidAddons";

import MenuLeft from "./MenuLeft";
import Promotion from "./Promotion";
import TransactionsHistory from "./TransactionsHistory";

const UnderConstruction = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "450px",
        backgroundColor: "white",
        borderRadius: 3,
      }}
    >
      <Typography variant="body2" sx={{ color: "#0056A2", fontSize: 24 }}>
        Under Construction
      </Typography>
    </Box>
  );
};

const BroadbandSection = () => {
  const [addOnData, setAddOnData] = useState<DataBalance[]>([]);
  const [mainData, setMainData] = useState<DataBalance[]>([]);
  const { selectedLeftMenuItem, selectedTelephone, selectedAccountNo, packageListUpdate } = useStore();

  const disabledItems = [
    "New Services",
    "Promotion",
    "Digital Life",
    "Bill",
    "Hot Devices",
    "Complaints",
  ]; // menu icons that will disable the left menu upon clicking

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
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
        { addOnData: [], mainData: [] } as {
          addOnData: DataBalance[];
          mainData: DataBalance[];
        }
      );

      setAddOnData(addOnData);
      setMainData(mainData);

      // Log the fetched data and selected menu item for debugging
      console.log("Fetched Data:", { addOnData, mainData });
      console.log("Selected Left Menu Item:", selectedLeftMenuItem);
      console.log("Selected Telephone:", selectedTelephone);
      console.log("Selected Account No:", selectedAccountNo);
    };

    fetchData();
  }, [selectedTelephone, packageListUpdate]);

  return (
    <Box sx={{ display: "flex", gap: 1, width: "100%", flexGrow: 1 }}>
      <Box
        sx={{
          width: "25%",
          display: disabledItems.includes(selectedLeftMenuItem) ? "none" : "block",
        }}
      >
        <MenuLeft />
      </Box>
      <Box
        sx={{
          width: disabledItems.includes(selectedLeftMenuItem) ? "100%" : "75%",
          height: "100%",
        }}
      >
        {/* Rendering based on selectedLeftMenuItem */}
        {selectedLeftMenuItem === "Summary" && <BroadbandDetailsPostPaid />}
        {selectedLeftMenuItem === "Daily Usage" && <UnderConstruction />}
        {selectedLeftMenuItem === "Gift Data" && <UnderConstruction />}
        {selectedLeftMenuItem === "History" && <UnderConstruction />}
        {selectedLeftMenuItem === "Redeem Data" && <UnderConstruction />}
        {selectedLeftMenuItem === "Happy Day" && <UnderConstruction />}

        {selectedLeftMenuItem === "Main Packages" && (
          <BroadbandDetailsPrePaid dataBalance={mainData} />
        )}
        {selectedLeftMenuItem === "Data Add-Ons" && (
          <BroadbandDetailsPrepaidAddons dataBalance={addOnData} />
        )}
        {selectedLeftMenuItem === "BroadbandMainPackage" && (
          <BroadbandPrepaidMainPackages />
        )}
        {selectedLeftMenuItem === "BroadbandPrepaidPackage" && (
          <BroadbandPrepaidAddOnPackages />
        )}
        {selectedLeftMenuItem === "Transaction" && (
          <TransactionsHistory serviceId={selectedTelephone} />
        )}

        {selectedLeftMenuItem === "New Services" && <UnderConstruction />}

        {selectedLeftMenuItem === "Promotion" && (
          <Promotion telephoneNo={selectedTelephone} />
        )}

        {selectedLeftMenuItem === "Digital Life" && <UnderConstruction />}
        
        {selectedLeftMenuItem === "Bill" && (
          <BillPage 
            telephoneNo={selectedTelephone} 
            accountNo={selectedAccountNo}  // Pass account number here
          />
        )}

        {selectedLeftMenuItem === "Hot Devices" && <UnderConstruction />}
        {selectedLeftMenuItem === "Complaints" && <UnderConstruction />}
      </Box>
    </Box>
  );
};


export default BroadbandSection;
