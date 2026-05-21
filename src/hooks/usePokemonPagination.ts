import { usePokemonStore } from "../store/pokemon";
import { pokemonSelectors } from "../store/pokemon";

export const usePokemonPagination = () => {
  const page = usePokemonStore(pokemonSelectors.page);

  const { fetchNext, fetchPrev } = usePokemonStore(pokemonSelectors.actions);

  return {
    page,
    fetchNext,
    fetchPrev,
  };
};
