import { create } from "zustand";
import {
  getPokemon,
  getPokemons,
  getTypePokemons,
  getTypes,
} from "../../api/pokemon";
import type { Pokemon } from "../../types/pokemon";

export interface PokemonState {
  // LIST DATA
  pokemons: Pokemon[];
  types: string[];
  total: number;

  // UI STATE
  page: number;
  search: string;
  selectedType: string | null;

  // LIST STATUS
  listLoading: boolean;
  listError: string | null;

  // DETAILS
  selectedPokemonId: number | null;
  selectedPokemon: Pokemon | null;
  detailsLoading: boolean;
  detailsError: string | null;
  isDetailsDrawerOpen: boolean;

  // ACTIONS
  actions: {
    fetchTypes: () => Promise<void>;
    fetchPokemons: (page?: number) => Promise<void>;

    fetchNext: () => Promise<void>;
    fetchPrev: () => Promise<void>;

    setSearch: (value: string) => void;
    setSelectedType: (type: string | null) => Promise<void>;
    searchPokemon: (query: string) => Promise<void>;

    reset: () => Promise<void>;

    openDetails: (id: number) => Promise<void>;
    closeDetails: () => void;
  };
}

const PAGE_SIZE = 24;

export const usePokemonStore = create<PokemonState>((set, get) => ({
  pokemons: [],
  types: [],
  total: 0,

  page: 1,
  search: "",
  selectedType: null,

  listLoading: false,
  listError: null,

  selectedPokemonId: null,
  selectedPokemon: null,
  detailsLoading: false,
  detailsError: null,
  isDetailsDrawerOpen: false,

  actions: {
    fetchPokemons: async (page = 1) => {
      if (get().listLoading) return;

      try {
        set({
          listLoading: true,
          listError: null,
        });

        const { selectedType, search } = get();

        if (search.trim()) {
          const pokemon = await getPokemon(search.toLowerCase());

          set({
            pokemons: [pokemon],
            page: 1,
            total: 1,
          });

          return;
        }

        if (selectedType) {
          const data = await getTypePokemons(selectedType);

          const offset = (page - 1) * PAGE_SIZE;

          const pageItems = data
            .slice(offset, offset + PAGE_SIZE)
            .map((item) => getPokemon(item.pokemon.name));

          const results = await Promise.allSettled(pageItems);

          const pokemons = results
            .filter((result) => result.status === "fulfilled")
            .map((result) => result.value);

          set({
            pokemons,
            page,
            total: data.length,
          });

          return;
        }

        const offset = (page - 1) * PAGE_SIZE;

        const list = await getPokemons(PAGE_SIZE, offset);

        const results = await Promise.allSettled(
          list.results.map((pokemon) => getPokemon(pokemon.name)),
        );

        const pokemons = results
          .filter((result) => result.status === "fulfilled")
          .map((result) => result.value);

        set({
          pokemons,
          page,
          total: list.count,
        });
      } catch {
        const { search } = get();

        set({
          pokemons: [],
          total: 0,
          listError: search.trim()
            ? "Pokemon not found"
            : "Failed to load pokemons",
        });
      } finally {
        set({
          listLoading: false,
        });
      }
    },

    fetchNext: async () => {
      await get().actions.fetchPokemons(get().page + 1);
    },

    fetchPrev: async () => {
      const page = get().page;

      if (page === 1) return;

      await get().actions.fetchPokemons(page - 1);
    },

    fetchTypes: async () => {
      try {
        const types = await getTypes();

        set({
          types: types.map((type) => type.name),
        });
      } catch {
        set({
          listError: "Failed to load types",
        });
      }
    },

    setSearch: (value) =>
      set({
        search: value,
      }),

    searchPokemon: async (query) => {
      set({
        search: query,
        selectedType: null,
        page: 1,
      });

      await get().actions.fetchPokemons(1);
    },

    setSelectedType: async (type) => {
      set({
        selectedType: type,
        search: "",
        page: 1,
      });

      await get().actions.fetchPokemons(1);
    },

    reset: async () => {
      set({
        search: "",
        selectedType: null,
        page: 1,
      });

      await get().actions.fetchPokemons(1);
    },

    openDetails: async (id) => {
      set({
        selectedPokemonId: id,
        isDetailsDrawerOpen: true,
        detailsLoading: true,
        detailsError: null,
      });

      try {
        const cached = get().pokemons.find((p) => p.id === Number(id));

        if (cached) {
          set({
            selectedPokemon: cached,
            detailsError: null,
          });
          return;
        }

        const pokemon = await getPokemon(id);

        if (id !== get().selectedPokemonId) {
          return;
        }

        set({
          selectedPokemon: pokemon,
        });
      } catch {
        set({
          detailsError: "Failed to load pokemon",
        });
      } finally {
        set({
          detailsLoading: false,
        });
      }
    },

    closeDetails: () =>
      set({
        isDetailsDrawerOpen: false,
        selectedPokemonId: null,
        selectedPokemon: null,
        detailsError: null,
      }),
  },
}));
