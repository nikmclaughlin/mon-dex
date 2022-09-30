import './App.css';

import React, { useEffect, useState } from 'react';

/**
 * Type def for later:
 * entries: { entry_number: Number; species: { name: String; url: String } }[];
 */

interface ApiObject {
  name: String;
  url: String;
}

interface PokemonEntry {
  entry_number: Number;
  pokemon_species: ApiObject;
}

interface DexData {
  descriptions: { description: String; language: ApiObject }[];
  id: Number;
  is_main_series: boolean;
  name: String;
  names: { language: ApiObject; name: String }[];
  pokemon_entries: PokemonEntry[];
  region: ApiObject;
  version_groups: ApiObject[];
}

const entriesList: PokemonEntry[] = [];

function MonList() {
  const [dexEntries, setDexEntries] = useState(entriesList);

  useEffect(() => {
    let retrievedData: boolean = false;

    async function fetchGen1Dex() {
      const response = await fetch('https://pokeapi.co/api/v2/pokedex/2');
      const gen1DexData: Promise<DexData> = await response.json();
      console.log('gen1DexData: ', gen1DexData);
      const monEntries: PokemonEntry[] = (await gen1DexData).pokemon_entries;
      console.log('monEntries: ', monEntries);

      if (!retrievedData) {
        setDexEntries(monEntries);
      }
    }
    fetchGen1Dex();
    return () => {
      retrievedData = true;
    };
  }, []);

  return (
    <>
      <h2>Mon List</h2>
      <ul>
        {dexEntries?.map((entry) => (
          <li key={entry?.entry_number}>{entry.pokemon_species.name}</li>
        ))}
      </ul>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <MonList />
    </div>
  );
}

export default App;
