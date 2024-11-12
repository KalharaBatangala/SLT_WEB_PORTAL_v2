import axios from 'axios';
import { BillingInquiry, BillPaymentAPIResponse } from '../../types/types';
import useStore from '../useAppStore';

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

    // Print the full API response
    console.log(`Full API response for ${telephoneNo}:`, JSON.stringify(response.data, null, 2));

    if (response.data.isSuccess && response.data.dataBundle) {
      // Update the Zustand store with selected telephone and account number
      useStore.getState().setSelectedTelephone(telephoneNo);
      useStore.getState().setSelectedAccountNo(accountNo);
      
      // Log the updated store state
      console.log('Updated Zustand store state:', useStore.getState());

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
