import { usePokemonStore } from "../store/pokemon";
import { pokemonSelectors } from "../store/pokemon";

export const usePokemonSearch = () => {
  const search = usePokemonStore(pokemonSelectors.search);

  const { setSearch, searchPokemon, reset } = usePokemonStore(
    pokemonSelectors.actions,
  );

  return {
    search,
    setSearch,
    searchPokemon,
    reset,
  };
};
