import { create } from 'zustand';
import { ServiceDetailsAPIResponse } from '../types/types';
import fetchServiceDetailByTelephone from './fetchServiceDetails';

interface AppState {
  selectedTelephone: string;
  selectedNavbarItem: string;
  selectedLeftMenuItem: string;
  serviceDetails: ServiceDetailsAPIResponse | null;
  packageListUpdate: number;
  setSelectedTelephone: (telephoneNo: string) => void;
  fetchServiceDetails: (telephoneNo: string) => Promise<void>;
  setSelectedNavbarItem: (item: string) => void;
  setLeftMenuItem: (item: string) => void;
  setPackageListUpdate: () => void;
}

const useStore = create<AppState>((set) => ({
  selectedTelephone: '',
  serviceDetails: null,
  selectedNavbarItem: 'Broadband',
  selectedLeftMenuItem: '',
  packageListUpdate: 0,
  setSelectedTelephone: (telephoneNo) => set({ selectedTelephone: telephoneNo }),
  fetchServiceDetails: async (telephoneNo) => {
    const details = await fetchServiceDetailByTelephone(telephoneNo);
    set({ serviceDetails: details });
  },
    setSelectedNavbarItem: (item) => set({ selectedNavbarItem: item }),
    setLeftMenuItem: (item) => set({ selectedLeftMenuItem: item }),
    setPackageListUpdate: () => set((state) => ({ packageListUpdate: state.packageListUpdate + 1 })),
}));

export default useStore;
