import { create } from "zustand";

interface State {
  scrollProgress: number;
  setScrollProgress: (progress: number) => void;
  isAudioPlaying: boolean;
  toggleAudio: () => void;
}

export const useStore = create<State>((set) => ({
  scrollProgress: 0,
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  isAudioPlaying: false,
  toggleAudio: () =>
    set((state) => ({ isAudioPlaying: !state.isAudioPlaying })),
}));
