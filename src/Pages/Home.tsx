import Box from "@mui/material/Box";
import homebackgroundImage from "../../src/assets/Images/HomeBackground.png";
import CustomAppBar from "../components/CustomAppBar";
import CustomNavBar from "../components/CustomNavBar";
import ValueAddedServicesMenu from "../components/ValueAddedServicesMenu";
import AccountBalance from "../components/AccountBalance";
import MenuLeft from "../components/MenuLeft";
import QuickAccessMenu from "../components/QuickAccessMenu";
import Banner from "../components/Banner";
import BroadbandDetails from "../components/BroadbandDetails";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url(${homebackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          gap: 1,
        }}
      >
        <CustomAppBar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            gap: 1,
            width: "100%",
            maxWidth: "90vw",
            flexGrow: 1,
          }}
        >
          <CustomNavBar />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              width: "100%",

            }}
          >
            <ValueAddedServicesMenu />
            <AccountBalance />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: 1,
            }}
          >
            <Box sx={{ width: "20%", height: "100%"}}>
              <MenuLeft />
            </Box>
            <Box sx={{ width: "55%", height: "100%"}}>
              <BroadbandDetails />
            </Box>
            <Box sx={{ width: "25%", height: "100%",display:"flex",flexDirection:"column"}}>
              <QuickAccessMenu />
              <Banner />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
