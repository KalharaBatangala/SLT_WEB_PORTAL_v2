import React, { useRef } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import Image1 from "../assets/Images/promotion1.jpeg";
import Image2 from "../assets/Images/promotion2.jpeg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const promotions = [
  {
    title: "NONSTOP YouTube",
    activated: true,
    image: Image1,
  },
  {
    title: "UNLIMITED YouTube",
    activated: false,
    image: Image2,
  },
  {
    title: "NONSTOP YouTube",
    activated: true,
    image: Image1,
  },
  {
    title: "UNLIMITED YouTube",
    activated: false,
    image: Image2,
  },
];

const Promotion: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += offset;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        color: "#0056A2",
        padding: 1,
        borderRadius: "10px",
        boxShadow: "0px 3px 3px #0000004A",
      }}
    >
      <Typography variant="h6" align="center" sx={{ fontWeight: "bold" }}>
        ── Promotion ──
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={() => scroll(-200)}
          sx={{ position: "absolute", left: 0, zIndex: 1 }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: 1.5,
            overflowX: "auto",
            scrollBehavior: "smooth",
            width: "100%",
            padding: 3,
          }}
        >
          {promotions.map((promo, index) => (
            <Card
              key={index}
              sx={{
                minWidth: "28%",
                backgroundColor: "#3076B2",
                color: "white",
                borderRadius: "10px",
                transition: "transform 0.3s, margin 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#0056A2",
                  transform: "scale(1.09)",
                  marginLeft: 3,
                  marginRight: 3,
                },
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: "195px",
                      width: "100%",
                      borderRadius: "10px",
                      backgroundImage: `url(${promo.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      mt: 1,
                      mb:1,
                    }}
                  ></Box>
                  <Typography variant="h6">{promo.title}</Typography>
                  
                  <Button
                    variant="contained"
                    sx={{
                        mt:1,
                      backgroundColor: promo.activated ? "#4FD745" : "white",
                      color: promo.activated ? "white" : "#4FD745",
                      "&:hover": {
                        backgroundColor: promo.activated
                          ? "#4FD745"
                          : "#E0E0E0",
                      },
                    }}
                  >
                    {promo.activated ? "Activated" : "Activate"}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        <IconButton
          onClick={() => scroll(200)}
          sx={{ position: "absolute", right: 0, zIndex: 1 }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 2 }}>
        <Box
          sx={{
            width: 8,
            height: 8,
            backgroundColor: "#70A0CB",
            borderRadius: "50%",
          }}
        />
        <Box
          sx={{
            width: 60,
            height: 8,
            backgroundColor: "#0056A2",
            borderRadius: 4,
          }}
        />
        <Box
          sx={{
            width: 8,
            height: 8,
            backgroundColor: "#70A0CB",
            borderRadius: "50%",
          }}
        />
      </Box>
    </Box>
  );
};

export default Promotion;
