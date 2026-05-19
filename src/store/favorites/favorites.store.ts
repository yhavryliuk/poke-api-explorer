import { create } from "zustand";
import { persist } from "zustand/middleware";
import { z } from "zod";
import { createSafeStorage } from "../../utils";

interface FavoritesState {
  favorites: number[];
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const schema = z.object({
  favorites: z.array(z.number()),
});

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (id) => {
        const favorites = get().favorites;

        const exists = favorites.includes(id);

        set({
          favorites: exists
            ? favorites.filter((fav) => fav !== id)
            : [...favorites, id],
        });
      },

      isFavorite: (id) => get().favorites.includes(id),
    }),
    {
      name: "pokemon-favorites",
      storage: createSafeStorage(schema),
    },
  ),
);
