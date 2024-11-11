import { create } from 'zustand';
import { ServiceDetailsAPIResponse } from '../types/types';
import fetchServiceDetailByTelephone from './fetchServiceDetails';

interface AppState {
  selectedTelephone: string;
  selectedAccountNo: string; // Add selected account number
  selectedNavbarItem: string;
  selectedLeftMenuItem: string;
  serviceDetails: ServiceDetailsAPIResponse | null;
  packageListUpdate: number;
  setSelectedTelephone: (telephoneNo: string) => void;
  setSelectedAccountNo: (accountNo: string) => void; // Add setter for account number
  fetchServiceDetails: (telephoneNo: string) => Promise<void>;
  setSelectedNavbarItem: (item: string) => void;
  setLeftMenuItem: (item: string) => void;
  setPackageListUpdate: () => void;
}

const useStore = create<AppState>((set) => ({
  selectedTelephone: '',
  selectedAccountNo: '', // Initialize account number
  serviceDetails: null,
  selectedNavbarItem: 'Broadband',
  selectedLeftMenuItem: '',
  packageListUpdate: 0,
  setSelectedTelephone: (telephoneNo) => {
    set({ selectedTelephone: telephoneNo });
    console.log('Updated selectedTelephone:', telephoneNo); // Log the updated value
  },
  setSelectedAccountNo: (accountNo) => {
    set({ selectedAccountNo: accountNo });
    console.log('Updated selectedAccountNo:', accountNo); // Log the updated value
  },
  fetchServiceDetails: async (telephoneNo) => {
    const details = await fetchServiceDetailByTelephone(telephoneNo);
    set({ serviceDetails: details });
  },
  setSelectedNavbarItem: (item) => set({ selectedNavbarItem: item }),
  setLeftMenuItem: (item) => set({ selectedLeftMenuItem: item }),
  setPackageListUpdate: () => set((state) => ({ packageListUpdate: state.packageListUpdate + 1 })),
}));

export default useStore;
