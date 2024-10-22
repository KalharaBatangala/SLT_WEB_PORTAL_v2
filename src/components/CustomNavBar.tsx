import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

const CustomNavBar = () => {
  const [selectedItem, setSelectedItem] = useState("Broadband");
  const items = [
    { label: "Broadband", key: "Broadband" },
    { label: "PEO TV", key: "PeoTV" },
    { label: "Voice", key: "Voice" },
    { label: "Mobile", key: "Mobile" },
  ];
  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        width: "100%",
        height: "5vh",
        minHeight: "40px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-around",
        paddingY: 0.5,
        paddingX: 0,
      }}
    >
      {items.map((item, index) => {
        return (
          <Button
            key={index}
            onClick={() => handleItemClick(item.key)}
            sx={{
              marginX: 1,
              flexGrow: 1,
              width: "auto",
              color: selectedItem === item.key ? "white" : "#0056A2",
              backgroundColor:
                selectedItem === item.key ? "#0056A2" : "transparent",
              borderRadius: 2,
              textTransform: "capitalize",
              "&:hover": {
                scale: selectedItem !== item.key ? 1.1:1,
                transition: "all 0.3s ease",
              },
            }}
          >
            <Typography variant="body2" sx={{ fontSize: 16 }}>
              {item.label}
            </Typography>
          </Button>
        );
      })}
    </Box>
  );
};

export default CustomNavBar;
