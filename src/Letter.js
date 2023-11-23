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
      yellowKeys,
      flipAnimation
    } = useContext(AppContext);
    const letter = board[attemptVal][letterPos];
    const correct = correctWord.toUpperCase()[letterPos] === letter;
    const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
    const letterState = currAttempt.attempt >  attemptVal && (correct ? "correct" : almost ? "almost" : "error" );
    const time = letterPos === 1  ? 300 : letterPos ===2 ? 600 : letterPos ===3 ? 900 : letterPos ===4 ? 1200 : 0;
    const [flip, setFlip] = useState("");
    setTimeout(() => {
      const flipv = currAttempt.attempt === attemptVal && flipAnimation=== true ? "animate-[flip_1s_ease-in-out]" : "";
      setFlip(flipv)
    }, time);
    
     
     
   
   
    const delay = (letterPos ===1 ? "delay-[300ms]" : letterPos === 2 ? "delay-[600ms]" : letterPos===3 ? "delay-[900ms]" : letterPos===4 ? "delay-[1200ms]" : "")
    
    


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
    <div className={`letter ${flip} ${delay} transition-all ease-in-out w-[65px] h-[65px] m-auto  flex justify-center items-center font-extrabold  border-[0.1px] border-gray-300/20 text-white/60  text-4xl select-none   font-serif`} id={letterState.toString()} >
        <div className=''>{letter}</div>
    </div>
  );
};

export default Letter