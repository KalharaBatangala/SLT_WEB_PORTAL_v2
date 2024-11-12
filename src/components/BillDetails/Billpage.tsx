import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import fetchBillingDetails from "../../services/postpaid/fetchBillingDetails";
import fetchBillingHistory from "../../services/postpaid/fetchBillingHistory"; // Import fetchBillingHistory
import Navbar from "./BillDetailNavbar"; // Path to Navbar component
import BillDetails from "./BillDetails"; // Path to BillDetails component
import OutstandingBills from "./BillHistory"; // Path to OutstandingBills component
import BillMethod from "./BillMethod"; // Path to BillMethod component

interface BillPageProps {
  telephoneNo: string;
  accountNo: string;
}

const BillPage: React.FC<BillPageProps> = ({ telephoneNo, accountNo }) => {
  const [selectedTab, setSelectedTab] = useState("Total Payable");
  const [billingDetails, setBillingDetails] = useState<any>(null); // State for billing details
  const [billingHistory, setBillingHistory] = useState<any>(null); // State for billing history

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab); // Update the selected tab when it changes in Navbar
  };

  useEffect(() => {
    const fetchDetails = async () => {
      const details = await fetchBillingDetails(telephoneNo, accountNo);
      setBillingDetails(details); // Store the fetched billing details in state
    };
    fetchDetails(); // Call the function to fetch the billing details when component mounts
  }, [telephoneNo, accountNo]);

  useEffect(() => {
    const fetchHistory = async () => {
      const history = await fetchBillingHistory(telephoneNo, accountNo);
      setBillingHistory(history); // Store the fetched billing history in state
    };
    fetchHistory(); // Call the function to fetch the billing history when component mounts
  }, [telephoneNo, accountNo]);

  return (
    <Box>
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
          height: "465px",
          boxShadow: "0px 3px 3px #0000004A",
          overflow: "hidden",
        }}
      >
        {/* Navbar component to switch between tabs */}
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Navbar onTabChange={handleTabChange} />
        </Box>
        <Box sx={{ width: "99%", alignItems: "center", justifyContent: "center" }}>
          {/* Pass the billing details fetched to BillDetails */}
          <BillDetails
            selectedTab={selectedTab}
            telephoneNo={telephoneNo}
            accountNo={accountNo}
            billingDetails={billingDetails} // Pass fetched details as props
          />
          {/* Pass the billingHistory to OutstandingBills */}
          <OutstandingBills
            selectedTab={selectedTab}
            billingHistory={billingHistory} // Pass fetched billing history here
            telephoneNo={telephoneNo}
            accountNo={accountNo}
          />
          <BillMethod selectedTab={selectedTab} />
        </Box>
      </Box>
    </Box>
  );
};

export default BillPage;
