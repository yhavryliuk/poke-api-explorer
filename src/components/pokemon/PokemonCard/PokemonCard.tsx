import React from "react";
import { CardContent, Stack } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useFavoritesStore } from "../../../store/favorites";
import type { Pokemon } from "../../../types/pokemon";
import { formatLabel } from "../../../utils";

import {
  ImageWrapper,
  LikeButton,
  PokemonId,
  PokemonImage,
  PokemonMeta,
  PokemonName,
  StyledCard,
  TypeChip,
} from "./PokemonCard.styles";

interface Props {
  pokemon: Pokemon;
  onOpen: (id: number) => void;
}

const FALLBACK_IMAGE = "https://placehold.co/230x115?text=No+Image";

export const PokemonCard = ({ pokemon, onOpen }: Props) => {
  const isFavorite = useFavoritesStore((state) => state.isFavorite(pokemon.id));

  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  const image =
    pokemon.sprites.other?.["official-artwork"]?.front_default ||
    FALLBACK_IMAGE;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(pokemon.id);
  };

  return (
    <StyledCard onClick={() => onOpen(pokemon.id)}>
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <PokemonId variant="body2" color="text.secondary">
          #{pokemon.id.toString().padStart(3, "0")}
        </PokemonId>

        <Stack direction="row-reverse" spacing={1}>
          {pokemon.types.map((type, index) => (
            <TypeChip
              key={type.type.name}
              label={formatLabel(type.type.name)}
              size="small"
              primarytype={index === 0}
            />
          ))}
        </Stack>
      </Stack>

      <ImageWrapper>
        <PokemonImage src={image} alt={pokemon.name} />
      </ImageWrapper>

      <CardContent
        sx={{
          p: 0,
          "&:last-child": {
            pb: 0,
          },
        }}
      >
        <Stack>
          <PokemonName variant="h5">{pokemon.name}</PokemonName>

          <PokemonMeta variant="body2" color="text.secondary">
            {pokemon.height / 10} m • {pokemon.weight / 10} kg
          </PokemonMeta>

          <LikeButton
            variant="outlined"
            startIcon={isFavorite ? <Favorite /> : <FavoriteBorder />}
            onClick={handleToggle}
          >
            {isFavorite ? "Unlike" : "Like"}
          </LikeButton>
        </Stack>
      </CardContent>
    </StyledCard>
  );
};
