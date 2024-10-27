import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchLTEPrepaidMainPackages } from "../../services/fetchLTEPrepaidMainPackages";
import { BroadbandPrepaidMainPackageDetails } from "../../types/types";

const BroadbandPrepaidMainPackages: React.FC = () => {
  const [packages, setPackages] = useState<
    BroadbandPrepaidMainPackageDetails[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getPackages = async () => {
      setLoading(true);
      try {
        const data = await fetchLTEPrepaidMainPackages();
        setPackages(data);
      } catch (error) {
        setError(`Failed to fetch packages ${error}`);
      } finally {
        setLoading(false);
      }
    };

    getPackages();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Typography variant="h6" color="error">
        {error}
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        color: "#FFFFFF1A",
        padding: 1.5,
        borderRadius: "10px",
        height: "100%",
        boxShadow: "0px 3px 3px #0000004A",
      }}
    >
      <Box sx={{ display: "flex",gap: 1.5,width: "100%", }}>
        {packages.map((pkg) => (
          <Card
            sx={{
              backgroundColor: "#0056A2",
              color: "white",
              borderRadius: "10px",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    mb: 2,
                    textAlign: "center",
                    fontSize: "1.10em",
                    fontWeight: "bold",
                  }}
                >
                  {pkg.MYSLT_PKG_NAME}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    width: "75%",
                    border: "3px solid white",
                    padding: 2,
                    borderRadius: 3,
                  }}
                >
                  <Typography
                    sx={{ margin: "auto", fontSize: "2em" }}
                    variant="body2"
                  >
                    <strong>{pkg.DATA_VOLUME_GB}GB</strong>
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ mt: 1, fontSize: "1.5em", fontWeight: "bold" }}
                >
                  Rs.{pkg.PRICE_LKR_WITH_TAX} /-
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, fontWeight: "bold" }}>
                  (With Tax)
                </Typography>
                <Typography variant="body2">
                  Validity Period <strong>{pkg.VALIDITY} Days</strong>
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "white",
                    color: "#50B748",
                    borderRadius: "10px",
                    width: "55%",
                    py: 1.5,
                  }}
                  fullWidth
                >
                  <Typography
                    variant="body2"
                    sx={{
                      textTransform: "capitalize",
                      fontSize: "1.25em",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    Activate
                  </Typography>
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          mt: 2,
        }}
      >
        <Box
          sx={{
            width: 8,
            height: 8,
            backgroundColor: "#70A0CB",
            borderRadius: "50%",
            transition: "width 0.3s, background-color 0.3s",
            mb: 1,
          }}
        />
        <Box
          sx={{
            width: 60,
            height: 8,
            backgroundColor: "#0056A2",
            borderRadius: 4,
            transition: "width 0.3s, background-color 0.3s",
            mb: 1,
          }}
        />
        <Box
          sx={{
            width: 8,
            height: 8,
            backgroundColor: "#70A0CB",
            borderRadius: "50%",
            transition: "width 0.3s, background-color 0.3s",
            mb: 1,
          }}
        />
      </Box>
    </Box>
  );
};

export default BroadbandPrepaidMainPackages;
