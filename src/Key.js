import React, { useContext, useState } from 'react'
import { AppContext } from './App';

function Key({keyVal, disabled, green, yellow}) {

    const {gameOver, onSelectLetter} = useContext(AppContext);
    const [letterState, setLetterState] = useState('');
    const tempLetterState =( disabled ? "disabled" : green ? "green" : yellow ? "yellow" : "");
    setTimeout(() => {
      setLetterState(tempLetterState);
    }, 1200);
    


    const selectLetter = () => {
          if (gameOver.gameOver ) return;
          onSelectLetter(keyVal);



    };
  return (
    <div className='w-[30px]  h-[35px] md:w-[50px] md:h-[55px] border border-white/20 mx-2 flex  justify-center items-center text-white/80 font-serif text-xl rounded hover:bg-slate-700/20 hover:white/30 hover:text-white/90 select-none active:scale-105 transition-all ease-out'
    onClick={selectLetter}
    id={letterState}
    > 
    {keyVal}
    </div>
  )
}

export default Key