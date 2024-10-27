import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import { BroadbandPrepaidAddOnPackageDetails } from "../../types/types";
import { fetchLTEPrepaidAddOnPackages } from "../../services/fetchLTEPrepaidAddOnPackages";

const BroadbandPrepaidAddOnPackages: React.FC = () => {
  const [packages, setPackages] = useState<
    BroadbandPrepaidAddOnPackageDetails[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [pressedButtons, setPressedButtons] = useState<number[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const getPackages = async () => {
      setLoading(true);
      try {
        const data = await fetchLTEPrepaidAddOnPackages();
        setPackages(data);
      } catch (error) {
        setError(`Failed to fetch packages ${error}`);
      } finally {
        setLoading(false);
      }
    };

    getPackages();
  }, []);

  const handleButtonPress = (index: number) => {
    setPressedButtons((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;

    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const scrollLeft = scrollRef.current.scrollLeft;
    const itemWidth = 250;
    const currentIndex = Math.round(scrollLeft / itemWidth) + 1;

    setActiveIndex(currentIndex);
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    console.log(`${error}`);
  }

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        color: "#FFFFFF1A",
        padding: 1.5,
        borderRadius: "10px",
        height: "100%",
        boxShadow: "0px 3px 3px #0000004A",
        overflow: "hidden",
      }}
    >
      <Box
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsDragging(false)}
        sx={{
          display: "flex",
          gap: 1.5,
          overflowX: "auto",
          width: "100%",
          cursor: isDragging ? "grabbing" : "grab",
          "&::-webkit-scrollbar": { display: "none" },
          userSelect: "none",
        }}
      >
        {packages.map((pkg, index) => (
          <Card
            key={pkg.OFFERING_ID}
            sx={{
              minWidth: "30%",
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
                  {pkg.ADDON_NAME}
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
                    backgroundColor: pressedButtons.includes(index)
                      ? "#50B748"
                      : "#FFFFFF",
                    color: pressedButtons.includes(index)
                      ? "#FFFFFF"
                      : "#50B748",
                    borderRadius: "10px",
                    width: "55%",
                    py: 1.5,
                  }}
                  onClick={() => handleButtonPress(index)}
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
        {packages.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: activeIndex === index ? 60 : 8,
              height: 8,
              backgroundColor: activeIndex === index ? "#0056A2" : "#70A0CB",
              borderRadius: activeIndex === index ? 4 : "50%",
              transition: "width 0.3s, background-color 0.3s",
              mb: 1,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BroadbandPrepaidAddOnPackages;
