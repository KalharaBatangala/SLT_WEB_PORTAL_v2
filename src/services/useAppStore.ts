import { create } from 'zustand';
import fetchServiceDetailByTelephone from './fetchServiceDetails';
import { ServiceDetailsAPIResponse } from '../types/types';

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
    const details = await fetchServiceDetailByTelephone(telephoneNo);
    set({ serviceDetails: details });
  },
    setSelectedNavbarItem: (item) => set({ selectedNavbarItem: item }),
    setLeftMenuItem: (item) => set({ selectedLeftMenuItem: item }),
}));

export default useStore;
