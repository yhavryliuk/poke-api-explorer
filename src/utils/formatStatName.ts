const STAT_LABELS: Record<string, string> = {
  hp: "HP",

  attack: "Attack",

  defense: "Defense",

  "special-attack": "Special Attack",

  "special-defense": "Special Defense",

  speed: "Speed",
};

export const formatStatName = (name: string) => STAT_LABELS[name] ?? name;
