import './App.css';

import { useState } from 'react';

import MonDetail from './components/MonDetail';
import MonList from './components/MonList';

function App() {
  const [activeMon, setActiveMon] = useState(1);

  function selectMon(id: number) {
    setActiveMon(id);
  }

  return (
    <div className="App flex flex-row flex-initial">
      <div id="left" className="basis-1/3">
        <MonList selectorFunction={selectMon} />
      </div>
      <div id="right" className="basis-2/3">
        <MonDetail selectedMon={activeMon} />
      </div>
    </div>
  );
}

export default App;
