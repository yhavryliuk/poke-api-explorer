import type { PokemonState } from "./pokemon.store";

export const pokemonSelectors = {
  pokemons: (state: PokemonState) => state.pokemons,
  types: (state: PokemonState) => state.types,
  loading: (state: PokemonState) => state.listLoading,
  error: (state: PokemonState) => state.listError,
  page: (state: PokemonState) => state.page,
  total: (state: PokemonState) => state.total,

  search: (state: PokemonState) => state.search,
  selectedType: (state: PokemonState) => state.selectedType,

  selectedPokemon: (state: PokemonState) => state.selectedPokemon,
  detailsLoading: (state: PokemonState) => state.detailsLoading,
  detailsError: (state: PokemonState) => state.detailsError,
  isDetailsDrawerOpen: (state: PokemonState) => state.isDetailsDrawerOpen,

  actions: (state: PokemonState) => state.actions,
};
