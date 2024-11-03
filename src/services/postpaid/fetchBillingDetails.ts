import axios from 'axios';
import { BillingInquiry, BillPaymentAPIResponse } from '../../types/types';

const fetchBillingDetails = async (telephoneNo: string, accountNo: string): Promise<BillingInquiry[] | null> => {
  // Log the incoming parameters
  console.log(`Fetching billing details for Telephone No: ${telephoneNo}, Account No: ${accountNo}`);
  
  try {
    const token = localStorage.getItem('accessToken');
    
    // Use a GET request
    const response = await axios.get<BillPaymentAPIResponse>(
      `https://omnitest.slt.com.lk/api/AccountOMNI/BillPaymentRequestV2`, 
      {
        params: {
          telephoneNo: telephoneNo,
          accountNo: accountNo,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(`Billing details for ${telephoneNo}:`, response.data);

    if (response.data.isSuccess && response.data.dataBundle) {
      // Map the billing inquiries to include billAmount
      return response.data.dataBundle.listofbillingInquiryType.map(bill => ({
        ...bill,
        billAmount: bill.outstandingBalance, // Set billAmount from outstandingBalance
      }));
    } else {
      console.error("Failed to fetch billing details");
      return null;
    }
  } catch (error) {
    console.error(`Error fetching billing details for ${telephoneNo}:`, error);
    return null;
  }
};

export default fetchBillingDetails;
