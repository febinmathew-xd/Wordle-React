import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './App'


function Letter({letterPos, attemptVal}) {
    const {board, 
      correctWord, 
      disabledLetters, 
      setDisabledLetters, 
      currAttempt, 
      setGreenKeys, 
      setYellowKeys, 
      greenKeys, 
      yellowKeys
    } = useContext(AppContext);
    const letter = board[attemptVal][letterPos];
    const correct = correctWord.toUpperCase()[letterPos] === letter;
    const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
    const letterState = currAttempt.attempt >  attemptVal && (correct ? "correct" : almost ? "almost" : "error" );
    
    


    useEffect(() => {

        if (letter !== "" && !correct && !almost){
            setDisabledLetters((prev) => [...prev, letter]);
        }
        if (letter!=="" && correct) {
            setGreenKeys((prev) => [...prev, letter]);
        }
        if (letter !== "" && almost) {
          setYellowKeys((prev) => [...prev, letter]);
        }


    }, [currAttempt.attempt]);
                        

    
  return (
    <div className='letter w-[65px] h-[65px] m-auto  flex justify-center items-center  border-[0.1px] border-gray-300/20 text-white/60  text-4xl select-none  font-serif' id={letterState.toString()} >
        <div className=''>{letter}</div>
    </div>
  );
};

export default Letter