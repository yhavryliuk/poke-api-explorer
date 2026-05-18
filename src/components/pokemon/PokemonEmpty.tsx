import { Stack, Typography } from "@mui/material";

export const PokemonEmpty = () => {
  return (
    <Stack
      spacing={1}
      sx={{
        alignItems: "center",
        py: 10,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
        }}
      >
        No Pokémon found
      </Typography>

      <Typography color="text.secondary">
        Try another search or filter
      </Typography>
    </Stack>
  );
};
