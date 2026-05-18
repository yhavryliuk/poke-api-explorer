import { useShallow } from "zustand/shallow";
import { usePokemonStore } from "../store/pokemon";

export const usePokemonDetails = () => {
  return usePokemonStore(
    useShallow(
      ({
        selectedPokemon,
        detailsLoading,
        detailsError,
        isDetailsDrawerOpen,
      }) => ({
        selectedPokemon,
        detailsLoading,
        detailsError,
        isDrawerOpen: isDetailsDrawerOpen,
      }),
    ),
  );
};
