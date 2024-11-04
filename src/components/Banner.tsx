import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import BannerImage1 from "../assets/images/banner1.jpg";
import BannerImage2 from "../assets/images/banner2.jpg";
import BannerImage3 from "../assets/images/banner3.jpg";

const images = [BannerImage1, BannerImage2, BannerImage3];

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 750);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.5,
        flexDirection: "column",
        alignItems: "center",
        padding: 0.5,
        borderRadius: 2,
        position: "relative",
        height: "195px",
        boxShadow: "0px 3px 3px #0000004A",
        overflow: "hidden",
        mt: 1,
        backgroundColor: "#f0f0f0",
      }}
    >
      <Box
        component="div"
        sx={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "opacity 0.5s ease",
          opacity: fade ? 1 : 0,
          borderRadius: 2,
          // position: "absolute",
          // top: 0,
          // left: 0,
        }}
      />
    </Box>
  );
};

export default Banner;
