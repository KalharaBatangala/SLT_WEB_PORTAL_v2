import React from "react";
import { Box, Button, Grid2, Typography } from "@mui/material";
import Promotion from "../../src/assets/Images/Promotion.png";
import NewServices from "../../src/assets/Images/New Services.png";
import DigitalLife from "../../src/assets/Images/Digital Life.png";
import Bill from "../../src/assets/Images/Bill.png";
import HotDevices from "../../src/assets/Images/Hot Devices.png";
import Complaints from "../../src/assets/Images/Complaints.png";

const QuickAccessMenu = () => {
  const tileData = [
    { label: "Promotion", img: Promotion },
    { label: "New Services", img: NewServices },
    { label: "Digital Life", img: DigitalLife },
    { label: "Bill", img: Bill },
    { label: "Hot Devices", img: HotDevices },
    { label: "Complaints", img: Complaints },
  ];

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Grid2 container spacing={1}>
        {tileData.map((tile, index) => (
          <Grid2 size={6} key={index}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                height: "60px",
                fontSize: "16px",
                fontWeight: "bold",
                backgroundColor: "#FFFFFF",
                display: "flex",
                gap: 1,
                justifyContent: "start",
                alignItems: "center",
                borderRadius: "10px",
                "&:hover": {
                    backgroundColor: "#E0F7FA",
                    color: "#003F7D", 
                  },
              }}
            >
              <img
                src={tile.img}
                alt={tile.label}
                style={{marginTop:"6px", width: "30px", height: "30px", marginBottom: "8px" }}
              />
              <Typography
                variant="body2"
                sx={{
                  marginL: "auto",
                  color: "#0056A2",
                  textTransform: "capitalize",
                  fontWeight: 600,
                }}
              >
                {tile.label}
              </Typography>
            </Button>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default QuickAccessMenu;
