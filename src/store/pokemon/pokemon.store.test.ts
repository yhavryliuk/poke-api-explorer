import { describe, it, expect, beforeEach, vi } from "vitest";
import { usePokemonStore } from "./pokemon.store";

describe("usePokemonStore", () => {
  beforeEach(() => {
    usePokemonStore.setState({
      pokemons: [],
      types: [],
      total: 0,
      page: 1,
      search: "",
      selectedType: null,
      listLoading: false,
      listError: null,
      selectedPokemonId: null,
      selectedPokemon: null,
      detailsLoading: false,
      detailsError: null,
      isDetailsDrawerOpen: false,
    });
    vi.clearAllMocks();
  });

  it("should initialize with empty state", () => {
    const state = usePokemonStore.getState();
    expect(state.pokemons).toEqual([]);
    expect(state.types).toEqual([]);
    expect(state.page).toBe(1);
  });

  it("should have setSearch action", () => {
    const state = usePokemonStore.getState();
    state.actions.setSearch("test");
    const newState = usePokemonStore.getState();
    expect(newState.search).toBe("test");
  });

  it("should close details drawer", () => {
    usePokemonStore.setState({ isDetailsDrawerOpen: true });
    const state = usePokemonStore.getState();
    state.actions.closeDetails();
    const newState = usePokemonStore.getState();
    expect(newState.isDetailsDrawerOpen).toBe(false);
  });

  it("should have pagination actions", () => {
    const state = usePokemonStore.getState();
    expect(typeof state.actions.fetchNext).toBe("function");
    expect(typeof state.actions.fetchPrev).toBe("function");
  });
});
