import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

const AccountBalance = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "7vh",
        minHeight: "60px",
        border: "2px solid #FFFFFF",
        borderRadius: "8px",
        backgroundColor: "#FFFFFF80",
        paddingY: 0.1,
        paddingX: 2,
        gap: 1,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="body2"
          sx={{ color: "#0056A2", fontSize: 18, fontWeight: 700 }}
        >
          Total Payable
        </Typography>
        <Typography variant="body2" sx={{ color: "#0056A2", fontSize: 12 }}>
          For month Ending at{" "}
          <Typography
            variant="body2"
            component="span"
            sx={{ fontSize: 12, fontWeight: 700 }}
          >
            30th August 2024
          </Typography>
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 0.75 }}></Box>
      <Typography
        variant="body2"
        sx={{ color: "#0056A2", fontSize: 25, fontWeight: "900" }}
      >
        Rs.8754.73
      </Typography>
      <Button
        sx={{
          backgroundColor: "#4FD745",
          borderRadius: 2,
          width: "100px",
          height: "35px",
            "&:hover": {
                backgroundColor: "#79D84A",}
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "#FFFFFF", textTransform: "capitalize", fontSize: 14 }}
        >
          Pay Now
        </Typography>
      </Button>
    </Box>
  );
};

export default AccountBalance;
