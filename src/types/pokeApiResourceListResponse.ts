export interface PokeApiResourceListItem {
  name: string;
  url: string;
}

export interface PokeApiResourceListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokeApiResourceListItem[];
}
