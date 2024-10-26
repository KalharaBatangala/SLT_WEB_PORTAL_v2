// src/services/fetchLTEPrepaidPackages.ts
import axios from 'axios';

export const fetchLTEPrepaidPackages = async (): Promise<any> => {
  try {
    const response = await axios.get(
      'https://omnitest.slt.com.lk/api/LTEPrepaid/LTEPrepaidPackageList?packageType=Add-ons', // Changed to GET
      {
        params: {
          packageType: 'Add ons', // Pass packageType as a query parameter
        },
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json', // Use appropriate content type
        },
      }
    );

    console.log("Response:", response.data);
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error fetching packages:", error);
    throw error; // Rethrow the error to handle it later
  }
};
