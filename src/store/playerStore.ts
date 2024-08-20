import { create } from 'zustand';
import { Player } from 'models/Player/Player';
import { submitPlayer as submitPlayerService, getPlayers as fetchPlayers } from 'services/playerService';

export type SortOrder = 'asc' | 'desc' | 'none';


interface PlayerStore {
  players: Player[];
  selectedPlayer: Player | null;
  sortOrder: 'asc' | 'desc' | 'none';
  selectPlayer: (player: Player) => void;
  deselectPlayer: () => void;
  setPlayers: (players: Player[]) => void;
  submitPlayer: (player: Player) => Promise<void>;
  setSortOrder: (order: 'asc' | 'desc' | 'none') => void;
  fetchPlayers: () => Promise<void>;
}

export const usePlayerStore = create<PlayerStore>((set) => ({
  players: [],
  selectedPlayer: null,
  sortOrder: 'none',
  selectPlayer: (player) => set({ selectedPlayer: player }),
  deselectPlayer: () => set({ selectedPlayer: null }),
  setPlayers: (players) => set({ players }),
  submitPlayer: async (player) => {
    try {
      await submitPlayerService(player);
    } catch (error) {
      console.error('Submission error:', error);
    }
  },
  setSortOrder: (order) => set({ sortOrder: order }),
  fetchPlayers: async () => {
    try {
      const players = await fetchPlayers();
      set({ players });
    } catch (error) {
      console.error('Fetch players error:', error);
    }
  }
}));
