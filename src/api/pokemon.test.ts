import { describe, it, expect } from 'vitest';
import * as pokemonModule from './pokemon';

describe('Pokemon API', () => {
  it('should have pokemon api functions', () => {
    expect(typeof pokemonModule.getPokemons).toBe('function');
    expect(typeof pokemonModule.getTypes).toBe('function');
  });

  it('should export getPokemon function', () => {
    expect(typeof pokemonModule.getPokemon).toBe('function');
  });
});
