export type ApiObject = {
  name: String;
  url: String;
};

export type PokemonEntry = {
  entry_number: Number;
  pokemon_species: ApiObject;
};

export type DexData = {
  descriptions: { description: String; language: ApiObject }[];
  id: Number;
  is_main_series: boolean;
  name: String;
  names: { language: ApiObject; name: String }[];
  pokemon_entries: PokemonEntry[];
  region: ApiObject;
  version_groups: ApiObject[];
};
