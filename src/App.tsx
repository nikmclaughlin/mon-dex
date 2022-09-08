import './App.css';

import React, { useState } from 'react';
import { render } from 'react-dom';

// import logo from './logo.svg';

// const [monList, setMonList] = useState([]);

let response = await fetch('https://pokeapi.co/api/v2/generation/1');
const generationData = response.json();
// generationData.then((data) => console.log(data.pokemon_species));

const MonList = () => {
  const nameList: String[] = [];
  generationData.then((data) => {
    nameList.push(...data.pokemon_species);
  });
  console.log(nameList);
  //vv NEEDS WORK vv
  const renderNames = nameList.map((mon) => <li key={mon}>{mon}M=</li>);

  return (
    <>
      <h2>Mon List</h2>
      <div>{renderNames}</div>
    </>
  );
};

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MonList />
    </div>
  );
}

export default App;
