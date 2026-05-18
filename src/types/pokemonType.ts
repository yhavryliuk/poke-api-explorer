import type { PokeApiNamedResource } from "./pokeApiNamedResource";

export interface DamageRelations {
  no_damage_to: PokeApiNamedResource[];
  half_damage_to: PokeApiNamedResource[];
  double_damage_to: PokeApiNamedResource[];
  no_damage_from: PokeApiNamedResource[];
  half_damage_from: PokeApiNamedResource[];
  double_damage_from: PokeApiNamedResource[];
}

export interface PastDamageRelation {
  generation: PokeApiNamedResource;
  damage_relations: DamageRelations;
}

export interface GameIndex {
  game_index: number;
  generation: PokeApiNamedResource;
}

export interface TypeName {
  name: string;
  language: PokeApiNamedResource;
}

export interface TypePokemon {
  slot: number;
  pokemon: PokeApiNamedResource;
}

export interface PokemonType {
  id: number;
  name: string;
  damage_relations: DamageRelations;
  past_damage_relations: PastDamageRelation[];
  game_indices: GameIndex[];
  generation: PokeApiNamedResource;
  move_damage_class: PokeApiNamedResource;
  names: TypeName[];
  pokemon: TypePokemon[];
  moves: PokeApiNamedResource[];
}
