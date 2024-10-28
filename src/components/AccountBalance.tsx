import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import useStore from "../services/useAppStore";
import { ServiceDetailsAPIResponse } from '../types/types';

const AccountBalance: React.FC = () => {
  const { serviceDetails } = useStore() as { serviceDetails: ServiceDetailsAPIResponse };
  
  const walletDetail = serviceDetails?.walletDetail;
  const isPrepaid = serviceDetails?.promotionType === "Prepaid" || serviceDetails?.promotionType === null;

  // Ensure amount is a number, dividing by 100 to match the requested format
  const amount: number = walletDetail && walletDetail[0]?.balanceDetail[0]?.amount 
    ? Number(walletDetail[0].balanceDetail[0].amount) / 100 
    : 0;

  // Format amount to include commas and two decimal places
  const formattedAmount = amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const expireTimeStr = walletDetail ? walletDetail[0]?.balanceDetail[0]?.expireTime : null;

  const parseExpireTime = (expireTime: string) => {
    if (expireTime) {
      const year = expireTime.slice(0, 4);
      const month = expireTime.slice(4, 6) - 1; // Months are 0-based in JS
      const day = expireTime.slice(6, 8);
      
      return new Date(Date.UTC(+year, month, +day));
    }
    return null;
  };

  const expireTime = parseExpireTime(expireTimeStr);
  const formattedExpireDate = expireTime 
    ? expireTime.toLocaleDateString("en-GB", { year: 'numeric', month: '2-digit', day: '2-digit' }) 
    : "N/A";

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
          {isPrepaid ? "Balance" : "Total Payable"} 
        </Typography>
        <Typography variant="body2" sx={{ color: "#0056A2", fontSize: 12 }}>
          {isPrepaid ? "Expires on " : "For month Ending at "}
          
          <Typography
            variant="body2"
            component="span"
            sx={{ fontSize: 12, fontWeight: 700 }}
          >
            {formattedExpireDate}
          </Typography>
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 0.75 }}></Box>
      <Typography
        variant="body2"
        sx={{ color: "#0056A2", fontSize: 25, fontWeight: "900" }}
      >
        Rs.{formattedAmount} {/* Display the formatted amount */}
      </Typography>
      <Button
        sx={{
          backgroundColor: "#4FD745",
          borderRadius: 2,
          width: "20%",
          height: "35px",
          "&:hover": {
              backgroundColor: "#79D84A",
          }
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "#FFFFFF", textTransform: "capitalize", fontSize: 14 }}
        >
          {isPrepaid ? "Transaction" : "Pay Now"}
        </Typography>
      </Button>
    </Box>
  );
};

export default AccountBalance;
