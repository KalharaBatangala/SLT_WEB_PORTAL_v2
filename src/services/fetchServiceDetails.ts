import axios from 'axios';
import { ServiceDetailsAPIResponse } from '../types/types.ts';

const fetchServiceDetailByTelephone = async (telephoneNo: string): Promise<ServiceDetailsAPIResponse | null> => {
  try {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      console.error("No access token found");
      return null; // Handle the case where no token is present
    }

    const response = await axios.get(`https://omnitest.slt.com.lk/api/AccountOMNI/GetServiceDetailRequest?telephoneNo=${telephoneNo}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(`Service Detail response for ${telephoneNo}:`, JSON.stringify(response.data, null, 2));

    if (response.data.isSuccess) {
      const dataBundle = response.data.dataBundle;

      // Check if listofBBService is an array and has items
      if (dataBundle && Array.isArray(dataBundle.listofBBService) && dataBundle.listofBBService.length > 0) {
        const serviceId = dataBundle.listofBBService[0]?.serviceID; // Access the first service ID

        if (!serviceId) {
          console.error("Service ID not found in the response.");
          return null; // Handle the case where serviceId is not present
        }

        const walletDetail = await fetchWalletDetail(serviceId, token); // Fetch wallet details using serviceId
        return { ...dataBundle, walletDetail }; // Return service details along with wallet details
      } else {
        console.error("No items found in the list of BB Service.");
        return null; // Handle the case where listofBBService is empty or not an array
      }
    } else {
      console.error("Failed to fetch service details. Response may not be successful.");
      return null;
    }

  } catch (error) {
    console.error(`Error fetching service detail for ${telephoneNo}:`, error);
    return null;
  }
};




// New function to fetch wallet details
// Fetch wallet details
const fetchWalletDetail = async (serviceId: string, token: string) => {
  try {
    const response = await axios.get(`https://omnitest.slt.com.lk/api/LTEPrepaid/GetWalletDetail?LTESLTNumber=${serviceId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.isSuccess && Array.isArray(response.data.dataBundle)) {
      return response.data.dataBundle; // Return wallet details
    } else {
      console.error("Failed to fetch wallet details");
      return null;
    }
  } catch (error) {
    console.error(`Error fetching wallet detail for serviceId ${serviceId}:`, error);
    return null;
  }
};



export default fetchServiceDetailByTelephone;
