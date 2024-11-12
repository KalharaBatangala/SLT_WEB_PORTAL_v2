import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import fetchServiceDetailByTelephone from "../../services/fetchServiceDetails";
import useStore from "../../services/useAppStore";
import { ServiceDetailsAPIResponse } from "../../types/types";
import CircularProgressBar from "../CircularProgressBar";
import WatermarkLogo from "../../assets/Images/watermarklogo.png";

const commonTextStyle = {
  fontSize: "14px",
  fontWeight: 700,
  color: "#0056A2",
};

const commonButtonStyle = {
  borderRadius: "10px",
  width: "90%",
};

interface CustomSectionProps {
  label: string;
  value: string;
}

const CustomSection = ({ label, value }: CustomSectionProps) => (
  <Typography variant="body2" sx={commonTextStyle}>
    {label}:
    <Typography
      component="span"
      variant="body2"
      sx={{ fontSize: "12px", fontWeight: 500, color: "#0056A2" }}
    >
      {value}
    </Typography>
  </Typography>
);

interface ActionButtonProps {
  text: string;
  variant?: "outlined" | "contained";
  onClick: () => void;
}

const ActionButton = ({ text, variant = "outlined", onClick }: ActionButtonProps) => (
  <Button
    variant={variant}
    sx={{
      ...commonButtonStyle,
      zIndex: 10,
      border: variant === "outlined" ? "3px solid #0056A2" : "none",
      backgroundColor: variant === "contained" ? "#0056A2" : "transparent",
      color: variant === "contained" ? "#ffffff" : "#0056A2",
      marginY: variant === "contained" ? 0 : 3,
      padding: variant === "contained" ? 1 : 2.5,
      "&:hover": {
        backgroundColor: variant === "contained" ? "#004b8c" : "#e0f7fa",
        border: variant === "outlined" ? "3px solid #004b8c" : "none",
        color: variant === "contained" ? "#ffffff" : "#004b8c",
      },
    }}
    onClick={onClick}
  >
    <Typography variant="body2" textTransform="capitalize" sx={{ fontWeight: "bold", fontSize: 16 }}>
      {text}
    </Typography>
  </Button>
);

const BroadbandNavbar = () => {
  const items = [
    { label: "My Package", key: null },
    { label: "Extra GB", key: "N/A" },
    { label: "Bonus Data", key: "N/A" },
    { label: "Add-Ons", key: "N/A" },
    { label: "Free Data", key: "N/A" },
  ];

  const [selectedItem, setSelectedItem] = useState("My Package");

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };
  return (
    <Box
        sx={{
          display: "flex",
          height: "45px",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          color: "#0056A2",
          backgroundColor: "#0073D91A",
          border: "1px solid #0056A252",
          borderRadius: "10px",
        }}
      >
        {items.map((item, index) => {
          return (
            <Button
              key={index}
              onClick={() => handleItemClick(item.label)}
              sx={{
                height: "110%",
                width: "15%",
                paddingY: 0.25,
                paddingX: 1,
                display: "flex",
                flexDirection: "column",
                borderRadius: "10px",
                border:
                  selectedItem === item.label ? "3px solid #0056A2" : "none",
                backgroundColor:
                  selectedItem === item.label ? "#ffffff" : "#transparent",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: "14px",
                  textTransform: "capitalize",
                  fontWeight: 700,
                }}
              >
                {item.label}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "14px",
                  textTransform: "capitalize",
                  fontWeight: 700,
                }}
              >
                {item.key}
              </Typography>
            </Button>
          );
        })}
      </Box>
  )
}

const BroadbandDetailsPostPaid = () => {
  const { selectedTelephone } = useStore();
  const [serviceData, setServiceData] = useState<ServiceDetailsAPIResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedTelephone) {
        const data = await fetchServiceDetailByTelephone(selectedTelephone);
        setServiceData(data);
      }
    };
    fetchData();
  }, [selectedTelephone]);

  // Set default values for loading state
  const serviceID = serviceData?.listofBBService[0]?.serviceID || "Loading...";
  const serviceStatus = serviceData?.listofBBService[0]?.serviceStatus || "Loading...";
  const packageName = serviceData?.listofBBService[0]?.packageName || "Loading...";

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        color: "#FFFFFF1A",
        padding: 1,
        borderRadius: "10px",
        height: "100%",
        boxShadow: "0px 3px 3px #0000004A",
      }}
    >
         {<BroadbandNavbar />}
      <Box sx={{ height: "100%", display: "flex" }}>
        <Box
          sx={{
            width: "60%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            gap: 1,
            padding: 2,
            border: "1px solid #0056A252",
            borderRadius: "10px",
          }}
        >
          <Typography variant="body2" sx={{ fontSize: 20, fontWeight: 700, color: "#0F3B7A" }}>
            4G LTE - Home Broadband - 7 Days
          </Typography>
          <CircularProgressBar percentage={75} />
          <Typography variant="body2" sx={{ fontSize: 20, fontWeight: 700, color: "#0F3B7A" }}>
            0 GB USED OF 1 GB
          </Typography>
          <Typography variant="body2" sx={{ fontSize: 16, fontWeight: 500, color: "#0F3B7A" }}>
            (Valid Till : 09th Oct 2024)
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            width: "40%",
            gap: 2,
            paddingX: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              alignItems: "start",
              backgroundColor: "#B3EDFF8A",
              borderRadius: "10px",
              padding: 1,
              gap: 1,
            }}
          >
            <CustomSection label="Package" value={packageName} />
            <CustomSection label="Status" value={serviceStatus} />
            <CustomSection label="Username" value={serviceID} />
          </Box>

          <ActionButton text="Package Upgrade" variant="outlined" onClick={() => {}} />
          <ActionButton text="Get Extra GB" variant="contained" onClick={() => {}} />
          <ActionButton text="Get Data Add-ons" variant="contained" onClick={() => {}} />
          <Box sx={{ position: "absolute", zIndex: 1, right: "1%", bottom: "1%" }}>
            <img src={WatermarkLogo} alt="Watermark Logo" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BroadbandDetailsPostPaid;
