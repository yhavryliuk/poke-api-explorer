import { usePokemonStore } from "../store/pokemon";
import { pokemonSelectors } from "../store/pokemon";

export const usePokemonSearch = () => {
  const search = usePokemonStore(pokemonSelectors.search);

  const setSearch = usePokemonStore(pokemonSelectors.setSearch);

  const searchPokemon = usePokemonStore(pokemonSelectors.searchPokemon);

  const reset = usePokemonStore(pokemonSelectors.reset);

  return {
    search,
    setSearch,
    searchPokemon,
    reset,
  };
};
