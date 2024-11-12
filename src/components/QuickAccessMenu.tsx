import React, { useState } from "react";
import { Box, Button, Grid2, Typography } from "@mui/material";
import Promotion from "../../src/assets/Images/QuickAccessIcons/Promotion.png";
import NewServices from "../../src/assets/Images/QuickAccessIcons/New Services.png";
import DigitalLife from "../../src/assets/Images/QuickAccessIcons/Digital Life.png";
import Bill from "../../src/assets/Images/QuickAccessIcons/Bill.png";
import HotDevices from "../../src/assets/Images/QuickAccessIcons/Hot Devices.png";
import Complaints from "../../src/assets/Images/QuickAccessIcons/Complaints.png";
import PromotionSelected from "../../src/assets/Images/QuickAccessIcons/PromotionSelected.png";
import NewServicesSelected from "../../src/assets/Images/QuickAccessIcons/NewServicesSelected.png";
import BillSelected from "../../src/assets/Images/QuickAccessIcons/BillSelected.png";
import DigitalLifeSelected from "../../src/assets/Images/QuickAccessIcons/DigitalLifeSelected.png";
import HotDevicesSelected from "../../src/assets/Images/QuickAccessIcons/HotDevicesSelected.png";
import ComplaintsSelected from "../../src/assets/Images/QuickAccessIcons/ComplaintsSelected.png";

import useStore from "../services/useAppStore";

const QuickAccessMenu = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [hoveredItem, setHoveredItem] = useState("");
  const { serviceDetails, setLeftMenuItem } = useStore();
  const isPrepaid = serviceDetails?.promotionType === "Prepaid";
  const tileData = [
    { label: "Promotion", img: Promotion, selectedImg: PromotionSelected },
    {
      label: "New Services",
      img: NewServices,
      selectedImg: NewServicesSelected,
    },
    {
      label: "Digital Life",
      img: DigitalLife,
      selectedImg: DigitalLifeSelected,
    },
    {
      label: isPrepaid ? "Reload" : "Bill",
      img: Bill,
      selectedImg: BillSelected,
    },
    { label: "Hot Devices", img: HotDevices, selectedImg: HotDevicesSelected },
    { label: "Complaints", img: Complaints, selectedImg: ComplaintsSelected },
  ];

  const disabledItems = ["Reload", "Complaints"];
  const handleRedirect = () => {
    window.location.href = 'https://eteleshop.slt.lk/';
  };
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Grid2 container spacing={1}>
        {tileData.map((tile, index) => {
          const disabled = disabledItems.includes(tile.label) && isPrepaid;
          return (
            <Grid2 size={6} key={index}>
              <Button
                onClick={() => {
                  setSelectedItem(tile.label);
                  setLeftMenuItem(tile.label);
                  if (tile.label === "Hot Devices") {
                    handleRedirect();}
                }}
                onMouseEnter={() => setHoveredItem(tile.label)}
                onMouseLeave={() => setHoveredItem("")}
                disabled={disabled}
                variant="contained"
                sx={{
                  width: "100%",
                  height: "60px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  backgroundColor:
                    selectedItem === tile.label ? "#0056A2" : "#FFFFFF",
                  color: selectedItem === tile.label ? "#FFFFFF" : "#0056A2",
                  display: "flex",
                  gap: 1,
                  justifyContent: "start",
                  alignItems: "center",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor:
                      selectedItem !== tile.label ? "#BAD1E6" : "0056A2",
                    color: selectedItem !== tile.label ? "#DFF0FF" : "#FFFFFF",
                  },
                  "&:disabled": {
                    backgroundColor: "#CCCCCC",
                    color: "#99999",
                  },
                }}
              >
                <img
                  src={selectedItem == tile.label ? tile.selectedImg : tile.img}
                  alt={tile.label}
                  style={{
                    marginTop: "6px",
                    width: "30px",
                    height: "30px",
                    marginBottom: "8px",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    marginL: "auto",
                    textTransform: "capitalize",
                    fontWeight: 600,
                  }}
                >
                  {tile.label}
                </Typography>
              </Button>
            </Grid2>
          );
        })}
      </Grid2>
    </Box>
  );
};

export default QuickAccessMenu;
