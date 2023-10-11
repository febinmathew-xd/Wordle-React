import React, { useContext } from 'react'
import { AppContext } from './App'

function BigKey({keyVal}) {
    const {onDelete, onEnter, gameOver} = useContext(AppContext);
    const selectAction = ()  =>{
        if (gameOver.gameOver) return;

        if (keyVal === "DELETE"){
            onDelete();
        }
        if(keyVal === "ENTER"){
            onEnter();
        }

    }
  return (
    <div className='w-[80px] h-[65px] border border-white/20 p-4 flex justify-center items-center text-white/80 font-serif text-l rounded hover:bg-slate-700/20 hover:white/30 hover:text-white/90 select-none active:scale-102 transition-all ease-in-out'
    onClick={selectAction}>
    {keyVal}
    </div>
  )
}

export default BigKey