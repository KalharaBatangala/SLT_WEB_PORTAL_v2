import { Box, Typography } from "@mui/material";
import { DataBalance } from "../types/types";
import BroadbandDetailsPrepaidTemplate from "./BroadbandDetailsPrepaidTemplate";

interface BroadbandDetailsPrePaidProps {
  dataBalance: DataBalance[];
}

const NoData = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "450px",
        flexGrow: 1,
        backgroundColor: "white",
        borderRadius: 3,
      }}
    >
      <Typography variant="body2" sx={{ color: "#0056A2", fontSize: 24 }}>
        No Data Available
      </Typography>
    </Box>
  );
};

const BroadbandDetailsPrePaid = ({
  dataBalance,
}: BroadbandDetailsPrePaidProps) => {
  return (
    <>
      {dataBalance.length > 0 ? (
        <BroadbandDetailsPrepaidTemplate dataBalance={dataBalance} />
      ) : (
        <NoData />
      )}
    </>
  );
};

export default BroadbandDetailsPrePaid;
