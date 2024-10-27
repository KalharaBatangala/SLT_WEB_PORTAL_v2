import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import useStore from "../services/useAppStore";

const MenuLeft = () => {
  const { serviceDetails, setLeftMenuItem,selectedLeftMenuItem } = useStore();
  const isPrepaid =
    serviceDetails?.promotionType === "Prepaid" ||
    serviceDetails?.promotionType === null;
  const postPaidItems = [
    "Summary",
    "Daily Usage",
    "Gift Data",
    "History",
    "Redeem Data",
    "Happy Day",
  ];
  const prePaidItems = ["Main Packages", "Data Add-Ons"];
  const items = isPrepaid ? prePaidItems : postPaidItems;

  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    setSelectedItem(isPrepaid? "Main Packages":"Summary")
    setLeftMenuItem(isPrepaid? "Main Packages":"Summary");
  }, [isPrepaid]);

  useEffect(() => {
    setSelectedItem(selectedLeftMenuItem);
  }, [selectedLeftMenuItem]);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexDirection: "column",
        color: "#FFFFFF1A",
        padding: 1,
        borderRadius: "10px",

        boxShadow: "0px 3px 3px #0000004A",
      }}
    >
      {items.map((item, index) => {
        return (
          <Button
            sx={{
              backgroundColor: item === selectedItem ? "#FFFFFF" : "#FFFFFF40",
              border:
                item === selectedItem
                  ? "3px solid #50B748"
                  : "1px solid #FFFFFFA6",
              borderRadius: "10px",
              padding: 1.5,
              "&:hover": {
                backgroundColor:
                  item === selectedItem ? "#FFFFFF" : "#FFFFFF80",
                borderColor: "#50B748",
              },
            }}
            key={index}
            onClick={() => {
              setSelectedItem(item);
              setLeftMenuItem(item);}
            }
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
