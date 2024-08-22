import { create } from 'zustand';

type ProjectStore = {
  isOpen: boolean;
  slug: string;
  onOpen: (slug: string) => void;
  onClose: () => void;
};

export const useProjectStore = create<ProjectStore>((set) => ({
  isOpen: false,
  slug: '',
  onOpen: (slug) => set({ isOpen: true, slug }),
  onClose: () => set({ isOpen: false, slug: '' }),
}));
