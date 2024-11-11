import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { BillHistoryProps } from "../../types/types";

const OutstandingBills: React.FC<BillHistoryProps> = ({
  selectedTab,
  billingHistory,
  telephoneNo,
  accountNo,
}) => {
  const billHistoryList = billingHistory?.listofBillHistoryDetail || [];

  console.log("Billing History Prop:", billingHistory);
  console.log("Bill History List:", billHistoryList);

  return (
    <Box textAlign="center">
      {selectedTab === "Bill History" && Array.isArray(billHistoryList) && billHistoryList.length > 0 ? (
        <Box
          color="#FFFFFF"
          p={1}
          borderRadius="8px"
          textAlign="left"
          width="96%"
          sx={{
            maxHeight: '400px',
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          {billHistoryList.map((bill, index) => (
            <Box
              key={index}
              bgcolor="#E0F7FA"
              p={2}
              mb={2}
              borderRadius="8px"
              display="flex"
              justifyContent="space-between"
              width="98%"
              alignItems="center"
              sx={{
                marginTop: index === 3 ? 2 : 1,
              }}
            >
              <Box>
                <Typography variant="h6" color="#0056A2" fontWeight="bold">
                  Outstanding: {bill.outstanding}
                </Typography>
                <Typography variant="body2" color="#0056A2">
                  Bill Value: {bill.billValue} for {bill.billMonth}
                </Typography>
                <Typography variant="body2" color="#0056A2">
                  Payments: {bill.payments}
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="info"
                sx={{
                  backgroundColor: "#E0F7FA",
                  color: "#0056A2",
                  fontWeight: "bold",
                  border: "2px solid #0056A2",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                }}
              >
                Email Now
              </Button>
            </Box>
          ))}
        </Box>
      ) : (
        <Typography variant="body1" color="red">
         
        </Typography>
      )}
    </Box>
  );
};

export default OutstandingBills;
