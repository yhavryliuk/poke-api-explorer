import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import { Favorite, FavoriteBorder } from "@mui/icons-material";

import { useFavoritesStore } from "../../store/favorites.store";
import type { Pokemon } from "../../types/pokemon";
import { formatLabel } from "../../utils";
import React from "react";

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
    <Card
      sx={{
        p: 2,
        border: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        boxShadow: "none",
        cursor: "pointer",
        transition: "0.2s",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: 2,
        },
      }}
      onClick={() => onOpen(pokemon.id)}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontWeight: 600,
          }}
        >
          #{pokemon.id.toString().padStart(3, "0")}
        </Typography>
        <Stack direction="row-reverse" spacing={1}>
          {pokemon.types.map((type, index) => (
            <Chip
              key={type.type.name}
              label={formatLabel(type.type.name)}
              size="small"
              sx={{
                borderRadius: 2,
                fontWeight: 600,
                bgcolor: index === 0 ? "text.primary" : "grey.300",
                color: index === 0 ? "background.paper" : "text.primary",
              }}
            />
          ))}
        </Stack>
      </Stack>

      <Box
        sx={{
          mt: 2,
          borderRadius: 2,
          bgcolor: "grey.100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          aspectRatio: "2 / 1",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={image}
          alt={pokemon.name}
          sx={{
            width: "72%",
            height: "72%",
            objectFit: "contain",
          }}
        />
      </Box>

      <CardContent
        sx={{
          p: 0,
          "&:last-child": {
            pb: 0,
          },
        }}
      >
        <Stack>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mt: 2,
              textTransform: "capitalize",
            }}
          >
            {pokemon.name}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mt: 0.5,
            }}
          >
            {pokemon.height / 10} m • {pokemon.weight / 10} kg
          </Typography>

          <Button
            variant="outlined"
            startIcon={isFavorite ? <Favorite /> : <FavoriteBorder />}
            sx={{
              mt: 2,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              alignSelf: "flex-start",
            }}
            color={isFavorite ? "primary" : "inherit"}
            onClick={handleToggle}
          >
            {isFavorite ? "Unlike" : "Like"}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
