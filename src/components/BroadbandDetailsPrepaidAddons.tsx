import Typography from "@mui/material/Typography";
import { DataBalance } from "../types/types";
import BroadbandDetailsPrepaidTemplate from "./BroadbandDetailsPrepaidTemplate";

interface BroadbandDetalisPrepaidAddonsProps {
  dataBalance: DataBalance[];
}

const BroadbandDetailsPrepaidAddons = ({
  dataBalance,
}: BroadbandDetalisPrepaidAddonsProps) => {
  return (
    <>
      {dataBalance.length > 0 ? (
        <BroadbandDetailsPrepaidTemplate dataBalance={dataBalance} />
      ) : (
        <Typography variant="body2" sx={{ color: "#0056A2", fontSize: 24 }}>
          No Data Available
        </Typography>
      )}
    </>
  );
};

export default BroadbandDetailsPrepaidAddons;
