import './App.css';

import React, { useState } from 'react';

// import logo from './logo.svg';

// const [monList, setMonList] = useState([]);

let response = await fetch('https://pokeapi.co/api/v2/generation/1');
const gen1Data = response.json();
// generationData.then((data) => console.log(data.pokemon_species));

const monList: { name: String; url: String }[] = [];
const nameList: String[] = [];

//Gather PKMN species from response data
gen1Data.then((data) => {
  monList.push(...data.pokemon_species);
});
console.log('monList:', monList);

//Gather PKMN names to be rendered in <MonList />
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
