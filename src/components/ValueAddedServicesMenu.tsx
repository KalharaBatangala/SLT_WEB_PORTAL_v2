import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import vas1 from "../assets/images/Group 39680.png";
import vas2 from "../assets/images/Group 39681.png";
import vas3 from "../assets/images/Group 39682.png";
import vas4 from "../assets/images/Group 39683.png";
import vas5 from "../assets/images/Group 39684.png";
import React from "react";
import VasIcon from "./VasIcon";

const ValueAddedServicesMenu = () => {
const items = [vas1,vas2,vas3,vas4,vas5];
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        paddingX: 2,
        paddingY: 0.1,
        width: "100%",
        height: "7vh",
        minHeight: "60px",
        border: "2px solid #FFFFFF",
        borderRadius: "8px",
        backgroundColor: "#FFFFFF80",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: 20,
          color: "#FFFFFF",
          textShadow: `
    -1px -1px 0 #0056A291,
     1px -1px 0 #0056A291,
    -1px  1px 0 #0056A291,
     1px  1px 0 #0056A291`,
        }}
      >
        {" "}
        Value Added Services
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          flexGrow: 1,
          gap:0.3,
        }}
      >
        {items.map((item, index) => {
            return (
                <VasIcon key={index} imagePath={item} />
            )
        })}
      </Box>
    </Box>
  );
};

export default ValueAddedServicesMenu;
