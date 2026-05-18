import { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import {
  usePokemonFilters,
  usePokemonList,
  usePokemonPagination,
  usePokemonSearch,
} from "../../hooks";
import { PokemonControls } from "./PokemonControls";
import { PokemonGrid } from "./PokemonGrid";
import { PokemonGridSkeleton } from "./PokemonGridSkeleton";
import { PokemonSummary } from "./PokemonSummary";
import { PokemonEmpty } from "./PokemonEmpty";

export const PokemonCatalog = () => {
  const { pokemons, total, loading, error, fetchPokemons, fetchTypes } =
    usePokemonList();

  const { page, fetchNext, fetchPrev } = usePokemonPagination();

  const { search, setSearch, searchPokemon, reset } = usePokemonSearch();

  const { types, selectedType, setSelectedType } = usePokemonFilters();

  useEffect(() => {
    fetchPokemons();
    fetchTypes();
  }, [fetchPokemons, fetchTypes]);

  const handleSearch = async () => {
    await searchPokemon(search);
  };

  const handleTypeChange = async (type: string) => {
    await setSelectedType(type || null);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box
        sx={{
          mt: 4,
          p: 2,
          borderRadius: 2,
          backgroundColor: "background.paper",
          border: 1,
          borderColor: "divider",
        }}
      >
        <PokemonControls
          search={search}
          selectedType={selectedType || ""}
          types={types}
          onSearchChange={setSearch}
          onTypeChange={handleTypeChange}
          onSearch={handleSearch}
          onReset={reset}
        />
        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
      </Box>

      <PokemonSummary
        page={page}
        total={total}
        showing={pokemons.length}
        onNext={fetchNext}
        onPrev={fetchPrev}
        disabled={loading}
      />

      {loading ? (
        <PokemonGridSkeleton />
      ) : pokemons.length === 0 ? (
        <PokemonEmpty />
      ) : (
        <PokemonGrid pokemons={pokemons} />
      )}
    </Container>
  );
};
