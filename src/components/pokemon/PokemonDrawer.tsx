import { useState } from "react";
import {
  Box,
  Chip,
  CircularProgress,
  Divider,
  Drawer,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { usePokemonDetails, usePokemonDetailsActions } from "../../hooks";
import { formatLabel } from "../../utils";
import { PokemonMetric } from "./PokemonMetric";

const DEFAULT_IMAGE = "https://placehold.co/475x475?text=No+Image";

const PokemonDrawer = () => {
  const { isDrawerOpen, selectedPokemon, detailsLoading, detailsError } =
    usePokemonDetails();
  const { closeDetails } = usePokemonDetailsActions();

  const [imageLoaded, setImageLoaded] = useState(false);

  const imageUrl =
    selectedPokemon?.sprites.other?.["official-artwork"]?.front_default ??
    DEFAULT_IMAGE;

  const handleClose = () => {
    closeDetails();
    setImageLoaded(false);
  };

  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={handleClose}
      slotProps={{
        paper: {
          sx: {
            width: {
              xs: "100%",
              sm: 420,
            },
            maxWidth: "100vw",
          },
        },
      }}
    >
      <Box
        sx={{
          p: 4,
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Typography>#{selectedPokemon?.id}</Typography>

          <Typography
            color="text.secondary"
            sx={{
              fontWeight: 700,
              cursor: "pointer",
              transition: "0.2s",
              "&:hover": {
                color: "text.primary",
              },
            }}
            onClick={closeDetails}
          >
            Close
          </Typography>
        </Stack>

        {detailsLoading && <LinearProgress />}

        {detailsError && <Typography>{detailsError}</Typography>}

        {selectedPokemon && (
          <>
            <Typography
              variant="h4"
              sx={{
                mb: 2,
                fontWeight: 700,
                textTransform: "capitalize",
              }}
            >
              {selectedPokemon.name}
            </Typography>

            <Box
              sx={{
                width: "100%",
                aspectRatio: "1 / 1",
                borderRadius: 2,
                bgcolor: "grey.100",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              {!imageLoaded && <CircularProgress size={24} />}

              <Box
                component="img"
                src={imageUrl}
                onLoad={() => {
                  setImageLoaded(true);
                }}
                sx={{
                  width: "80%",
                  height: "80%",
                  objectFit: "contain",
                  display: imageLoaded ? "block" : "none",
                }}
              />
            </Box>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                mt: 2,
              }}
            >
              {selectedPokemon.types.map((type) => (
                <Chip
                  size="small"
                  sx={{
                    bgcolor: "text.primary",
                    color: "background.paper",
                  }}
                  key={type.type.name}
                  label={formatLabel(type.type.name)}
                />
              ))}
            </Stack>

            <Stack
              direction="row"
              spacing={4}
              sx={{
                mt: 3,
              }}
            >
              <PokemonMetric label="Height" value={selectedPokemon.height} />

              <PokemonMetric label="Weight" value={selectedPokemon.weight} />

              <PokemonMetric
                label="Base XP"
                value={selectedPokemon.base_experience}
              />
            </Stack>

            <Divider
              sx={{
                my: 3,
              }}
            />

            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
              }}
            >
              Abilities
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{
                flexWrap: "wrap",
                mt: 2,
                mb: 4,
              }}
            >
              {selectedPokemon.abilities.map((ability) => (
                <Chip
                  key={ability.ability.name}
                  label={formatLabel(ability.ability.name)}
                  variant="outlined"
                  sx={{
                    px: 1,
                  }}
                />
              ))}
            </Stack>

            <Typography variant="h6">Stats</Typography>

            <Stack spacing={2} sx={{ mt: 2 }}>
              {selectedPokemon.stats.map((stat) => (
                <Box key={stat.stat.name}>
                  <Stack
                    direction="row"
                    sx={{ justifyContent: "space-between" }}
                  >
                    <Typography>{formatLabel(stat.stat.name)}</Typography>

                    <Typography sx={{ fontWeight: 700 }}>
                      {stat.base_stat}
                    </Typography>
                  </Stack>

                  <LinearProgress
                    variant="determinate"
                    value={Math.min(stat.base_stat, 100)}
                    sx={{
                      mt: 1,
                      height: 8,
                      borderRadius: 999,
                    }}
                  />
                </Box>
              ))}
            </Stack>
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default PokemonDrawer;
