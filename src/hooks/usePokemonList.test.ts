import { describe, it, expect, beforeEach, vi } from 'vitest';
import { usePokemonStore } from '../store/pokemon/pokemon.store';

describe('usePokemonList hook', () => {
  beforeEach(() => {
    usePokemonStore.setState({
      pokemons: [],
      types: [],
      total: 0,
      page: 1,
      search: '',
      selectedType: null,
      listLoading: false,
      listError: null,
    });
    vi.clearAllMocks();
  });

  it('should initialize with default values', () => {
    const state = usePokemonStore.getState();
    expect(state.pokemons).toEqual([]);
    expect(state.listLoading).toBe(false);
  });

  it('should have search action', () => {
    const state = usePokemonStore.getState();
    expect(typeof state.setSearch).toBe('function');
  });
});
