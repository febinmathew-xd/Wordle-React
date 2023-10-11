
import React, {createContext, useContext, useEffect, useState} from "react";
import Keyboard from "./Keyboard";
import Board from "./Board";
import Header from "./wrappers/Header";
import { defaultBoard } from "./Utilities";
import Title from "./wrappers/Title";
import Main from "./wrappers/Main";
import { generateWordSet } from "./Utilities";
import "./App.css";
import ErrBox from "./wrappers/ErrBox";



export  const AppContext = createContext();

function App() {

 
  const [board, setBoard] = useState(defaultBoard);
  const [currAttempt, setCurrAttempt] = useState({attempt:0, letter:0})
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({gameOver:false, gussedWord:false});
  const [greenKeys, setGreenKeys] = useState([]);
  const [yellowKeys, setYellowKeys] = useState([]);
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  

  useEffect(() => {
       generateWordSet().then((words)=> {
        setWordSet(words.wordSet);
        setCorrectWord(words.todaysWord);
        
       })


  }, []);

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letter >4) return;
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letter] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({attempt:currAttempt.attempt, letter:currAttempt.letter +1});

  }

  const onDelete = () => {
    if (currAttempt.letter===0) return
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter-1] = "";
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, letter:currAttempt.letter - 1});

    
  }


  const onEnter = () => {
    if (currAttempt.letter !==5 ) return;
    let currWord = "";

    for (let i = 0; i < 5; i++ ){
      currWord += board[currAttempt.attempt][i]

    }
    console.log(currWord)
    if (wordSet.has(currWord.toLowerCase())){
      setCurrAttempt({attempt:currAttempt.attempt+1, letter:0})
    }
    else{
      setErr(true);
      setErrMsg("Not in the List");
    }
    console.log('correct word:', correctWord);
    console.log('current word:', currWord);
    if(currWord.toLowerCase() === correctWord){
      setGameOver({gameOver:true, gussedWord:true});
      setErr(true);
      setErrMsg('Love you for 10000 years');
      return;
    }
    console.log(currAttempt);
    if (currAttempt.attempt === 5){
      setGameOver({gameOver:true, gussedWord:false});
      setErr(true);
      setErrMsg("Game Over");
      return;
    }

    console.log(gameOver)

  
    
  };



  return (
    <div className="App relative">
      <AppContext.Provider value={{
        board, 
        setBoard, 
        currAttempt, 
        setCurrAttempt, 
        onSelectLetter, 
        gameOver, 
        setGameOver,
        onDelete, 
        onEnter,
        correctWord,
        setDisabledLetters,
        disabledLetters,
        greenKeys,
        setGreenKeys,
        yellowKeys,
        setYellowKeys,
        err,
        setErr,
        errMsg,
        setErrMsg}}>
      <Header>
        <Title/>
      </Header>
      <Main>
        {err && <ErrBox errMsg={errMsg} />}
        
        
        <Board/>
        <Keyboard/>
      </Main>
      
      </AppContext.Provider>
      
    </div>
  );
};


export default App;
