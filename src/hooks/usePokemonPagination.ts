import { usePokemonStore } from "../store/pokemon";
import { pokemonSelectors } from "../store/pokemon";

export const usePokemonPagination = () => {
  const page = usePokemonStore(pokemonSelectors.page);

  const fetchNext = usePokemonStore(pokemonSelectors.fetchNext);

  const fetchPrev = usePokemonStore(pokemonSelectors.fetchPrev);

  return {
    page,
    fetchNext,
    fetchPrev,
  };
};
