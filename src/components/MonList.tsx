import { useEffect, useState } from 'react';

import { DexData, PokemonEntry } from '../dexTypes';

const entriesList: PokemonEntry[] = [];

/*/??TODO: Define individual entry as its own component
function MonEntry(entryData: PokemonEntry) {
  // const spriteURL: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${entryData?.entry_number}.png`;

  // console.log('spriteURL: ', spriteURL);

  return (
    <>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
        alt={'image of ' + entryData?.pokemon_species?.name}
      />
      <p>{entryData?.pokemon_species?.name}</p>
    </>
  );
}
/*/

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
          <li key={entry?.entry_number}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${entry?.entry_number}.png`}
              alt={'image of ' + entry?.pokemon_species?.name}
            />
            <p>{entry?.pokemon_species?.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MonList;
