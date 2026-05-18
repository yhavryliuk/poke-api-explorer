import { useShallow } from "zustand/shallow";
import { usePokemonStore } from "../store/pokemon";

export const usePokemonDetailsActions = () =>
  usePokemonStore(
    useShallow((s) => ({
      openDetails: s.openDetails,
      closeDetails: s.closeDetails,
    })),
  );
