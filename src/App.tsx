import './App.css';

import React, { useState } from 'react';

//Ping PokeAPI for gen1 data
let response = await fetch('https://pokeapi.co/api/v2/generation/1');
const gen1Data = response.json();

//Gather PKMN species from response data
const monList: { name: String; url: String }[] = [];
gen1Data.then((data) => {
  monList.push(...data.pokemon_species);
});
console.log('monList:', monList);

//Gather PKMN names to be rendered in <MonList />
const nameList: String[] = [];
// vv NEEDS WORK vv loop is currently running 0 times >:|
for (const mon of monList) {
  console.log('pushing name: ' + mon.name);
  nameList.push(mon.name);
}

const MonList = (props: { names: String[] }) => {
  const [monNames, setMonNames] = useState<String[]>(props.names);
  console.log('names:', monNames);
  return (
    <>
      <h2>Mon List</h2>
      <ul>
        {monNames?.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <MonList names={nameList} />
    </div>
  );
}

export default App;
