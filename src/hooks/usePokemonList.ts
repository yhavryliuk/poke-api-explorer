import { usePokemonStore } from "../store/pokemon";
import { pokemonSelectors } from "../store/pokemon";

export const usePokemonList = () => {
  const pokemons = usePokemonStore(pokemonSelectors.pokemons);

  const loading = usePokemonStore(pokemonSelectors.loading);

  const error = usePokemonStore(pokemonSelectors.error);

  const { fetchPokemons, fetchTypes } = usePokemonStore(
    pokemonSelectors.actions,
  );

  const total = usePokemonStore(pokemonSelectors.total);

  return {
    pokemons,
    loading,
    error,
    fetchPokemons,
    fetchTypes,
    total,
  };
};
