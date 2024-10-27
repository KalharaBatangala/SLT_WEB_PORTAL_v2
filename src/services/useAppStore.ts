// useAppStore.ts
import { create } from 'zustand';
import { ServiceDetailsAPIResponse } from '../types/types';
import fetchServiceDetailByTelephone from './fetchServiceDetails';

interface AppState {
  selectedTelephone: string;
  selectedNavbarItem: string;
  selectedLeftMenuItem: string;
  serviceDetails: ServiceDetailsAPIResponse | null;
  setSelectedTelephone: (telephoneNo: string) => void;
  fetchServiceDetails: (telephoneNo: string) => Promise<void>;
  setSelectedNavbarItem: (item: string) => void;
  setLeftMenuItem: (item: string) => void;
}

const useStore = create<AppState>((set) => ({
  selectedTelephone: '',
  serviceDetails: null,
  selectedNavbarItem: 'Broadband',
  selectedLeftMenuItem: '',
  setSelectedTelephone: (telephoneNo) => set({ selectedTelephone: telephoneNo }),
  fetchServiceDetails: async (telephoneNo) => {
    try {
      const details = await fetchServiceDetailByTelephone(telephoneNo);
      console.log('Service Detail for', telephoneNo, ':', details); // Debug log

      if (isServiceDetailsAPIResponse(details)) {
        set({ serviceDetails: details });
      } else {
        set({ serviceDetails: null });
        console.error('Invalid service details response:', details);
      }
    } catch (error) {
      console.error('Failed to fetch service details:', error);
      set({ serviceDetails: null });
    }
  },
  setSelectedNavbarItem: (item) => set({ selectedNavbarItem: item }),
  setLeftMenuItem: (item) => set({ selectedLeftMenuItem: item }),
}));

export default useStore;

// Type guard for ServiceDetailsAPIResponse
function isServiceDetailsAPIResponse(obj: any): obj is ServiceDetailsAPIResponse {
  return (
    obj &&
    typeof obj.accountCategory === 'string' &&
    typeof obj.accountNo === 'string' &&
    typeof obj.contactMobile === 'string' &&
    typeof obj.contactNamewithInit === 'string' &&
    Array.isArray(obj.listofBBService) &&
    Array.isArray(obj.listofPEOService) &&
    Array.isArray(obj.listofVoiceService) &&
    typeof obj.promotionName === 'string' &&
    typeof obj.promotionType === 'string' &&
    (typeof obj.walletAmount === 'number' || obj.walletAmount === null) // Allow null for optional fields
  );
}
