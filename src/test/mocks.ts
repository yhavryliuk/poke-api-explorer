import { vi } from 'vitest';

export const mockPokeAPIClient = {
  getPokemons: vi.fn(),
  getPokemon: vi.fn(),
  getTypes: vi.fn(),
  getTypePokemons: vi.fn(),
};

export const mockPokemonData = {
  id: 1,
  name: 'bulbasaur',
  imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/1.png',
  types: ['grass', 'poison'],
  height: 7,
  weight: 69,
  stats: {
    hp: 45,
    attack: 49,
    defense: 49,
    spAtk: 65,
    spDef: 65,
    speed: 45,
  },
  abilities: ['overgrow'],
};

export const mockPokemonListResponse = {
  count: 1025,
  next: 'https://pokeapi.co/api/v2/pokemon?offset=24&limit=24',
  previous: null,
  results: [
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
  ],
};

export const mockTypeData = {
  id: 1,
  name: 'normal',
};

export const mockAxiosError = {
  response: {
    status: 404,
    data: { message: 'Not found' },
  },
  message: 'Request failed with status code 404',
};
