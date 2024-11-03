import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import BannerImage1 from '../assets/images/banner1.jpg';
import BannerImage2 from '../assets/images/banner2.jpg';
import BannerImage3 from '../assets/images/banner3.jpg';

const images = [BannerImage1, BannerImage2, BannerImage3];

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.5,
        flexDirection: "column",
        alignItems: "center",
        padding: 1,
        borderRadius: "10px",
        position: "relative",
        height: "195px",
        boxShadow: "0px 3px 3px #0000004A",
        overflow: "hidden",
        margintop: 3,
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover', // Cover the entire box
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent the image from repeating
        mt: 1,
      }}
    >
    </Box>
  );
};

export default Banner;



