import { describe, it, expect, beforeEach } from 'vitest';
import { useFavoritesStore } from './favorites.store';

describe('useFavoritesStore', () => {
  beforeEach(() => {
    // Reset store before each test
    useFavoritesStore.setState({ favorites: [] });
    localStorage.clear();
  });

  it('should initialize with empty favorites', () => {
    const state = useFavoritesStore.getState();
    expect(state.favorites).toEqual([]);
  });

  it('should toggle favorite', () => {
    const state = useFavoritesStore.getState();
    const pokemonId = 1;

    expect(state.isFavorite(pokemonId)).toBe(false);

    state.toggleFavorite(pokemonId);
    let newState = useFavoritesStore.getState();
    expect(newState.isFavorite(pokemonId)).toBe(true);

    state.toggleFavorite(pokemonId);
    newState = useFavoritesStore.getState();
    expect(newState.isFavorite(pokemonId)).toBe(false);
  });

  it('should add multiple favorites', () => {
    const state = useFavoritesStore.getState();

    state.toggleFavorite(1);
    state.toggleFavorite(2);
    state.toggleFavorite(3);

    const newState = useFavoritesStore.getState();
    expect(newState.isFavorite(1)).toBe(true);
    expect(newState.isFavorite(2)).toBe(true);
    expect(newState.isFavorite(3)).toBe(true);
  });
});
