import React, { useState } from "react";
import { Box, Button, Grid2, Typography } from "@mui/material";
import Promotion from "../../src/assets/Images/Promotion.png";
import NewServices from "../../src/assets/Images/New Services.png";
import DigitalLife from "../../src/assets/Images/Digital Life.png";
import Bill from "../../src/assets/Images/Bill.png";
import HotDevices from "../../src/assets/Images/Hot Devices.png";
import Complaints from "../../src/assets/Images/Complaints.png";
import useStore from "../services/useAppStore";

const QuickAccessMenu = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const { serviceDetails } = useStore();
  const isPrepaid =
    serviceDetails?.promotionType === "Prepaid" ||
    serviceDetails?.promotionType === null;
  const tileData = [
    { label: "Promotion", img: Promotion },
    { label: "New Services", img: NewServices },
    { label: "Digital Life", img: DigitalLife },
    { label: "Bill", img: Bill },
    { label: "Hot Devices", img: HotDevices },
    { label: "Complaints", img: Complaints },
  ];

  const disabledItems = ["Bill", "Complaints"];

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
                onClick={() => setSelectedItem(tile.label)}
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
                    backgroundColor: "#BAD1E6",
                    color: "#DFF0FF",
                  },
                  "&:disabled": {
                    backgroundColor: "#CCCCCC",
                    color: "#99999",
                  },
                }}
              >
                <img
                  src={tile.img}
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
