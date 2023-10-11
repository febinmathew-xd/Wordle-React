import React, { useContext } from 'react'
import { AppContext } from './App';

function Key({keyVal}) {

    const {gameOver, onSelectLetter} = useContext(AppContext);

    const selectLetter = () => {
          if (gameOver.gameOver ) return;
          onSelectLetter(keyVal);



    };
  return (
    <div className='w-[60px] h-[65px] border border-white/20 mx-2 flex justify-center items-center text-white/80 font-serif text-xl rounded hover:bg-slate-700/20 hover:white/30 hover:text-white/90 select-none active:scale-105 transition-all ease-out'
    onClick={selectLetter}> 
    {keyVal}
    </div>
  )
}

export default Key