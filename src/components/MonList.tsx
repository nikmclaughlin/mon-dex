import { useEffect, useState } from 'react';

import { DexData, PokemonEntry } from '../dexTypes';

const entriesList: PokemonEntry[] = [];

/*/??TODO: Define individual entry as its own component
* Separates concerns so MonList is only rendering the list
* I think I also need to do this in order to pull individual stats (height, weight, description, etc.)
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

function MonList(props: { selectorFunction: any }) {
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

  //TODO: Write Util to capitalize Mon names

  return (
    <>
      {/* <h2 className="text-left font-bold">Mon List</h2> */}
      <ul className="break-after-column">
        {dexEntries?.map((entry) => (
          <li
            key={entry?.entry_number}
            className="border-2 border-red-700 relative h-20 text-sm hover:scale-110 hover:translate-x-6 duration-150"
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${entry?.entry_number}.png`}
              alt={'image of ' + entry?.pokemon_species?.name}
              className="border-2 border-black absolute rounded-md inset-y-0 left-0 h-full"
            />
            <strong className="m-0 text-base">{entry?.pokemon_species?.name}</strong>
            <p className="m-0">Height:</p>
            <p className="m-0">Weight:</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MonList;
