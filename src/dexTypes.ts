export type NamedAPIResource = {
  name: String;
  url: String;
};

export type PokemonEntry = {
  entry_number: Number;
  pokemon_species: NamedAPIResource;
};

export type DexData = {
  descriptions: { description: String; language: NamedAPIResource }[];
  id: Number;
  is_main_series: boolean;
  name: String;
  names: { language: NamedAPIResource; name: String }[];
  pokemon_entries: PokemonEntry[];
  region: NamedAPIResource;
  version_groups: NamedAPIResource[];
};
