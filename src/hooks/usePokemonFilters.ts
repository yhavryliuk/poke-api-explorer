import { usePokemonStore } from "../store/pokemon";
import { pokemonSelectors } from "../store/pokemon";

export const usePokemonFilters = () => {
  const types = usePokemonStore(pokemonSelectors.types);

  const selectedType = usePokemonStore(pokemonSelectors.selectedType);

  const setSelectedType = usePokemonStore(pokemonSelectors.setSelectedType);

  return {
    types,
    selectedType,
    setSelectedType,
  };
};
