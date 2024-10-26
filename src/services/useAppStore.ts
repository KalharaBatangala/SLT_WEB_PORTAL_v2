import { create } from 'zustand';
import fetchServiceDetailByTelephone from './fetchServiceDetails';
import { ServiceDetailsAPIResponse } from '../types/types';

interface AppState {
  selectedTelephone: string;
  selectedNavbarItem: string;
  serviceDetails: ServiceDetailsAPIResponse | null;
  setSelectedTelephone: (telephoneNo: string) => void;
  fetchServiceDetails: (telephoneNo: string) => Promise<void>;
  setSelectedNavbarItem: (item: string) => void;
}

const useStore = create<AppState>((set) => ({
  selectedTelephone: '',
  serviceDetails: null,
  selectedNavbarItem: 'Broadband',
  setSelectedTelephone: (telephoneNo) => set({ selectedTelephone: telephoneNo }),
  fetchServiceDetails: async (telephoneNo) => {
    const details = await fetchServiceDetailByTelephone(telephoneNo);
    set({ serviceDetails: details });
  },
    setSelectedNavbarItem: (item) => set({ selectedNavbarItem: item }),
}));

export default useStore;
