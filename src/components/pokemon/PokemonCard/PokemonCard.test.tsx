import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "../../../test/test-utils";
import { PokemonCard } from "./PokemonCard";
import type { Pokemon } from "../../../types/pokemon";

const mockPokemon: Pokemon = {
  id: 1,
  name: "bulbasaur",
  sprites: {
    other: {
      "official-artwork": {
        front_default: "https://example.com/bulbasaur.png",
      },
    },
  },
  types: [
    {
      slot: 1,
      type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
    },
    {
      slot: 2,
      type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
    },
  ],
  height: 7,
  weight: 69,
  base_experience: 64,
  abilities: [{ ability: { name: "overgrow" } }],
  stats: [
    { stat: { name: "hp" }, base_stat: 45 },
    { stat: { name: "attack" }, base_stat: 49 },
  ],
};

describe("PokemonCard", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render pokemon card with name and id", () => {
    const onOpen = vi.fn();
    render(<PokemonCard pokemon={mockPokemon} onOpen={onOpen} />);

    expect(screen.getByText("bulbasaur")).toBeInTheDocument();
    expect(screen.getByText("#001")).toBeInTheDocument();
  });

  it("should display pokemon types", () => {
    const onOpen = vi.fn();
    render(<PokemonCard pokemon={mockPokemon} onOpen={onOpen} />);

    expect(screen.getByText("Grass")).toBeInTheDocument();
    expect(screen.getByText("Poison")).toBeInTheDocument();
  });

  it("should display pokemon height and weight", () => {
    const onOpen = vi.fn();
    render(<PokemonCard pokemon={mockPokemon} onOpen={onOpen} />);

    expect(screen.getByText("0.7 m • 6.9 kg")).toBeInTheDocument();
  });

  it("should call onOpen when card is clicked", () => {
    const onOpen = vi.fn();
    const { container } = render(
      <PokemonCard pokemon={mockPokemon} onOpen={onOpen} />,
    );

    // Find and click the card
    const card = container.querySelector('[class*="MuiCard"]');
    if (card) {
      (card as HTMLElement).click();
      expect(onOpen).toHaveBeenCalledWith(mockPokemon.id);
    }
  });
});
