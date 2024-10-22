import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { useState } from "react";

const MenuLeft = () => {
  const items = [
    "Summary",
    "Daily Usage",
    "Gift Data",
    "History",
    "Redeem Data",
    "Happy Day",
  ];

  const [selectedItem, setSelectedItem] = useState("Summary");

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexDirection: "column",
        color: "#FFFFFF1A",
        padding: 1,
        borderRadius: "10px",
        height: "100%",
        boxShadow: "0px 3px 3px #0000004A",
      }}
    >
      {items.map((item, index) => {
        return (
          <Button
            sx={{
              backgroundColor: item === selectedItem ? "#FFFFFF" : "#FFFFFF40",
              border: item === selectedItem ? "3px solid #50B748":"1px solid #FFFFFFA6",
              borderRadius: "10px",
              padding: 1.5,
              "&:hover": {
                backgroundColor: item === selectedItem ? "#FFFFFF" : "#FFFFFF80",
                borderColor: "#50B748",
              },
            }}
            key={index}
            onClick={() => setSelectedItem(item)}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "20px",
                color: item === selectedItem ? "#50B748" : "#FFFFFF",
                textTransform: "capitalize",
                fontWeight: item === selectedItem ? 700 : 600,
              }}
            >
              {item}
            </Typography>
          </Button>
        );
      })}
    </Box>
  );
};

export default MenuLeft;
