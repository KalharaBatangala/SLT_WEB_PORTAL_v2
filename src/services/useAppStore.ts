import { create } from 'zustand';
import fetchServiceDetailByTelephone from './fetchServiceDetails';
import { ServiceDetailsAPIResponse } from '../types/types';

interface AppState {
  selectedTelephone: string;
  serviceDetails: ServiceDetailsAPIResponse | null;
  setSelectedTelephone: (telephoneNo: string) => void;
  fetchServiceDetails: (telephoneNo: string) => Promise<void>;
}

const useStore = create<AppState>((set) => ({
  selectedTelephone: '',
  serviceDetails: null,
  setSelectedTelephone: (telephoneNo) => set({ selectedTelephone: telephoneNo }),
  fetchServiceDetails: async (telephoneNo) => {
    const details = await fetchServiceDetailByTelephone(telephoneNo);
    set({ serviceDetails: details });
  },
}));

export default useStore;
