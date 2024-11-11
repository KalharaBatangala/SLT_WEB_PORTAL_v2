import { Box, Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React from "react";

interface BillMethodProps {
  selectedTab: string; // Add prop for selected tab
}

const BillMethod: React.FC<BillMethodProps> = ({ selectedTab }) => {
  return (
    <Box p={1} textAlign="center">
      {selectedTab === "Bill Methods" && (
        <Box sx={{ color:"#FFFFFF", p:2, borderRadius:"8px", textAlign:"left", mt:-4,width:"100%"}}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ width:"95%",mt:1, padding: 1 }}
          >
            {/* Current Bill Method Section */}
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#0056A2",
                maxWidth: "1000px",
                color: "#FFFFFF",
                borderRadius: 2,
                mt:1,
                padding: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box >
                <Typography variant="h6" fontWeight="bold">
                  Current Bill Method
                </Typography>
                <Typography variant="body2">By Email: yourname@gmail.com</Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  color: "#ffffff",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                }}
              >
                Edit
              </Button>
            </Box>

            {/* Other Methods Section */}
            <Box sx={{width:"100%", mt:3, textAlign:"left"}}>
              <Typography sx={{variant:"h6", fontWeight:"bold", mt:-2, mb:1, color:"#0056A2"}}>
                Other Methods
              </Typography>

              {/* Method Option */}
              <Box
                sx={{
                  backgroundColor: "#E0F7FA",
                  borderRadius: 2,
                  padding: 2,
                  mb:1,
                  width:"98%"
                }}
              >
                <Box sx={{ display:"flex", justifyContent:"space-between", alignItems:"center", width:"100%"}}>
                  <Box sx={{width:"100%"}}>
                    <Typography variant="subtitle1" fontWeight="bold" color="#0056A2">
                      SMS
                    </Typography>
                    <Typography variant="body2" color="#0056A2">Get your bill via SMS</Typography>
                    <FormControlLabel
                      control={<Checkbox color="primary" />}
                      label={
                        <Box
                          component="span"
                          sx={{
                            color: "#0056A2",
                            padding: "4px 8px",
                            borderRadius: "4px",
                          }}
                        >
                          I agree to the general terms and conditions
                        </Box>
                      }
                    />
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#E0F7FA",
                      color: "#0056A2",
                      border: "2px solid #0056A2",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: "#f0f0f0",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>

              {/* Another Method Option */}
              <Box
                sx={{
                  backgroundColor: "#E0F7FA",
                  borderRadius: 2,
                  padding: 2,
                  width:"98%"

                }}
              >
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold" color="#0056A2">
                      MySLT
                    </Typography>
                    <Typography variant="body2" color="#0056A2">Get your bill via MySLT</Typography>
                    <FormControlLabel
                      control={<Checkbox color="primary" />}
                      label={
                        <Box
                          component="span"
                          sx={{
                            color: "#0056A2",
                            padding: "4px 8px",
                            borderRadius: "4px",
                          }}
                        >
                          I agree to the general terms and conditions
                        </Box>
                      }
                    />
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#E0F7FA",
                      color: "#0056A2",
                      border: "2px solid #0056A2",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: "#f0f0f0",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default BillMethod;