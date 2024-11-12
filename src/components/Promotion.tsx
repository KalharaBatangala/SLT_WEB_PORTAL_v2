import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Card, CardContent, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import checkOfferAvailability from "../services/postpaid/checkOfferAvailability";

interface PromotionData {
  title: string;
  activated: boolean;
  image?: string;  
}

interface PromotionProps {
  telephoneNo: string; 
}

const Promotion: React.FC<PromotionProps> = ({ telephoneNo }) => {
  const [promotions, setPromotions] = useState<PromotionData[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        // Ensure you pass the correct number of arguments to checkOfferAvailability
        const offerData: unknown = await checkOfferAvailability(telephoneNo);

        if (offerData && Array.isArray(offerData)) {
          const fetchedPromotions: PromotionData[] = offerData.map((offer: any) => ({
            title: offer.packageName,  
            activated: offer.isActive,  
            image: offer.imageURL || "", 
          }));
          setPromotions(fetchedPromotions);
        } else {
          setPromotions([]); 
        }
      } catch (error) {
        setError("Failed to fetch promotions.");
      } finally {
        setLoading(false);
      }
    };

    fetchPromotions();
  }, [telephoneNo]); // Re-fetch when the telephoneNo changes

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
        height: "60vh",
      }}
    >
      <Typography variant="body2" align="center" sx={{fontSize:24, fontWeight: "bold" }}>
        ── Promotion ──
      </Typography>
      <Box sx={{flexGrow:1}}></Box>
      {/* If loading, display loading text */}
      {loading && (
        <Typography variant="body1" color="textSecondary">
          Loading promotions...
        </Typography>
      )}

      {/* If there's an error, display error message */}
      {error && (
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      )}

      {/* If no promotions found, display the no promotions message */}
      {!loading && !error && promotions.length === 0 && (
        <Typography variant="body2" color="textSecondary" sx={{fontSize:24}}>
          This Number has no promotions available.
        </Typography>
      )}
      <Box sx={{flexGrow:1}}></Box>
      {/* Render promotions if available */}
      {!loading && !error && promotions.length > 0 && (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
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
              justifyContent: "center",
              gap: 1.5,
              overflowX: "auto",
              scrollBehavior: "smooth",
              width: "100%",
              paddingY: 3,
              paddingX: 4,
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
                        backgroundImage: `url(${promo.image})`, // Use the image URL from API
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        mt: 1,
                        mb: 1,
                      }}
                    ></Box>
                    <Typography variant="body2"sx={{fontSize:20}}>{promo.title}</Typography>
                    <Button
                      variant="contained"
                      sx={{
                        mt: 1,
                        backgroundColor: promo.activated ? "#4FD745" : "white",
                        color: promo.activated ? "white" : "#4FD745",
                        "&:hover": {
                          backgroundColor: promo.activated ? "#4FD745" : "#E0E0E0",
                        },
                      }}
                    >
                      <Typography variant="body2" sx={{fontSize:16}}>
                      {promo.activated ? "Activated" : "Activate"}
                      </Typography>
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
      )}

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
