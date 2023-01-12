import React, { useState } from 'react';

// import { PokemonEntry } from '../dexTypes';

const MonDetail = (props: { activeMon: number }) => {
  const [currentMon] = useState(props.activeMon);

  return (
    <>
      <h2 className="font-bold">MonDetailPanel</h2>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentMon}.png`}
        alt={'image of ' + currentMon}
        className="border-2 border-black absolute rounded-md inset-y-0 left-0 h-full"
      />
    </>
  );
};

export default MonDetail;
