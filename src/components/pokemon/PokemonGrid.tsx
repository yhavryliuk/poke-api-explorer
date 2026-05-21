import { Grid } from "@mui/material";

import { PokemonCard } from "./PokemonCard";
import type { Pokemon } from "../../types/pokemon";
import { pokemonSelectors, usePokemonStore } from "../../store/pokemon";

interface Props {
  pokemons: Pokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  const openDetails = usePokemonStore(pokemonSelectors.openDetails);

  return (
    <Grid container spacing={3} sx={{ mt: 2 }}>
      {pokemons.map((pokemon) => (
        <Grid
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
          }}
          key={pokemon.id}
        >
          <PokemonCard pokemon={pokemon} onOpen={openDetails} />
        </Grid>
      ))}
    </Grid>
  );
};
