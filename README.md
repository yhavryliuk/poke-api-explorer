# PokeAPI Explorer

A React + TypeScript SPA for browsing Pokémon using PokeAPI.

---

# Stack

- React + TypeScript + Vite
- Zustand (state management)
- MUI (UI)
- Axios
- PokeAPI

---

# Features

- Pokémon list (24 per page) with pagination
- Search by name or ID
- Filter by Pokémon type
- Details drawer with stats, abilities, and metadata
- Favorites (Like / Unlike) with localStorage persistence
- Responsive layout (mobile / tablet / desktop)

---

# Architecture decisions

## Zustand store (single source of truth)

Instead of multiple stores or slices, a single Zustand store is used with **logical domains**:
- list state (pokemons, pagination)
- filters (search, type)
- details (selected Pokémon)
- UI state (loading, errors)

Keeps state centralized while avoiding over-segmentation.

---

## Domain hooks layer

To keep components clean, store access is wrapped in domain hooks:
- `usePokemonList`
- `usePokemonFilters`
- `usePokemonDetails`

UI does not directly depend on store selectors, improving separation of concerns.

---

## Unified data fetching

All list operations (pagination, search, filter) go through a single `fetchPokemons` flow.

Prevents duplicated logic and inconsistent states across different actions.

---

## Cached details optimization

If a Pokemon is already loaded in the list, details are reused instead of refetching.

Reduces unnecessary API calls.

---

## UI formatting layer

All API data is formatted in the UI layer (not stored formatted):
- abilities labels (cute-charm -> Cute Charm)
- type labels

Keeps store clean and data-driven.

---

## Error handling

- API errors handled per domain
- Safe localStorage parsing (no app crashes on invalid data)
- Graceful empty/error states in UI

---

## UI approach
- Loading Skeleton
- Drawer-based details view
- Additional clean button for search input
- Loader for Detailed View Image and placeholder for preventing intefrace jumping
---

## Performance Notes

Rendering performance is handled primarily through state isolation and narrow Zustand subscriptions rather than blanket memoization.

The app avoids unnecessary rerenders by separating list and details state boundaries, keeping UI updates localized without excessive use of `React.memo`, `useMemo`, or `useCallback`.

Memoization hooks are applied only when they provide measurable benefit, keeping the codebase simpler and easier to maintain.

# Run project

```bash
npm install
npm run dev
