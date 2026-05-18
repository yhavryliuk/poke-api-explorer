import type {
  PokeApiResourceListResponse,
  Pokemon,
  PokemonType,
} from "../types";
import { pokeApiClient } from "./pokeApiClient";

export const getPokemons = async (limit: number, offset: number) => {
  const { data } = await pokeApiClient.get<PokeApiResourceListResponse>(
    `/pokemon?limit=${limit}&offset=${offset}`,
  );

  return data;
};

export const getPokemon = async (nameOrId: string | number) => {
  const { data } = await pokeApiClient.get<Pokemon>(`/pokemon/${nameOrId}`);

  return data;
};

export const getTypes = async () => {
  const { data } =
    await pokeApiClient.get<PokeApiResourceListResponse>("/type");

  return data.results.filter(
    (type) => type.name !== "unknown" && type.name !== "shadow",
  );
};

export const getTypePokemons = async (type: string) => {
  const { data } = await pokeApiClient.get<PokemonType>(`/type/${type}`);

  return data.pokemon;
};
