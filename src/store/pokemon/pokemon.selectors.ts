import type { PokemonState } from "./pokemon.store";

export const pokemonSelectors = {
  pokemons: (state: PokemonState) => state.pokemons,

  types: (state: PokemonState) => state.types,

  loading: (state: PokemonState) => state.listLoading,

  error: (state: PokemonState) => state.listError,

  page: (state: PokemonState) => state.page,

  total: (state: PokemonState) => state.total,

  fetchPokemons: (state: PokemonState) => state.fetchPokemons,

  fetchTypes: (state: PokemonState) => state.fetchTypes,

  fetchNext: (state: PokemonState) => state.fetchNext,

  fetchPrev: (state: PokemonState) => state.fetchPrev,

  search: (state: PokemonState) => state.search,

  selectedType: (state: PokemonState) => state.selectedType,

  setSearch: (state: PokemonState) => state.setSearch,

  setSelectedType: (state: PokemonState) => state.setSelectedType,

  searchPokemon: (state: PokemonState) => state.searchPokemon,

  reset: (state: PokemonState) => state.reset,

  selectedPokemon: (state: PokemonState) => state.selectedPokemon,

  detailsLoading: (state: PokemonState) => state.detailsLoading,

  detailsError: (state: PokemonState) => state.detailsError,

  isDetailsDrawerOpen: (state: PokemonState) => state.isDetailsDrawerOpen,

  openDetails: (state: PokemonState) => state.openDetails,

  closeDetails: (state: PokemonState) => state.closeDetails,
};
