import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './App'


function Letter({letterPos, attemptVal}) {
    const {board, correctWord, disabledLetters, setDisabledLetters, currAttempt} = useContext(AppContext);
    const letter = board[attemptVal][letterPos];
    const correct = correctWord.toUpperCase()[letterPos] === letter;
    const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
    const letterState = currAttempt.attempt >  attemptVal && (correct ? "correct" : almost ? "almost" : "error" );
    console.log(correctWord)


    useEffect(() => {

        if (letter !== "" && !correct && !almost){
            setDisabledLetters((prev) => [...prev, letter]);
        }


    }, [currAttempt.attempt]);
                        

    
  return (
    <div className='letter w-[70px] h-[70px] m-auto  flex justify-center items-center  border-[0.1px] border-gray-300/20 text-white/60  text-4xl select-none  font-serif' id={letterState} >
        <div className=''>{letter}</div>
    </div>
  );
};

export default Letter