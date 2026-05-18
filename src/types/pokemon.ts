export interface PokemonSlotType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  types: PokemonSlotType[];
  abilities: PokemonAbility[];
  stats: PokemonStat[];
  sprites: {
    other?: {
      ["official-artwork"]?: {
        front_default: string | null;
      };
    };
  };
}
