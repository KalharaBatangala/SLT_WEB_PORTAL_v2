import axios from "axios";
import { useEffect, useState } from "react";

const useFetchAccountDetails = () => {
  const [accounts, setAccounts] = useState<{ accountno: string; telephoneno: string }[]>([]); 
  const [error, setError] = useState<string | null>(null); 

  const fetchAccountDetails = async () => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      setError("Access token not found");
      console.error("Access token not found");
      return;
    }

    console.log("Access Token:", token); 

    try {
      const response = await axios.get(
        "https://omnitest.slt.com.lk/api/AccountOMNI/GetAccountDetailRequest",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Full API Response:", response.data); 

     
      if (response.data && response.data.dataBundle) {
        const accountData = response.data.dataBundle.map((item: any) => {
          console.log("Account Item:", item); 
          return {
            accountno: item.accountno || "Unnamed Account", 
            telephoneno: item.telephoneno || "No Telephone", 
          };
        });

        setAccounts(accountData); // Set the extracted account details
      } else {
        setError("No account data found in 'dataBundle'");
        console.error("No account data found in 'dataBundle'");
      }
    } catch (error) {
      setError("Error fetching account details");
      console.error("Error fetching account details:", error);
    }
  };

  useEffect(() => {
    fetchAccountDetails(); 
  }, []);

  return { accounts, error }; 
};

export default useFetchAccountDetails;
