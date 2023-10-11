
import React from 'react'
import Key from './Key';
import BigKey from './BigKey';

function Keyboard() {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  
  return (
    <div className='keyboard w-[600px] mx-auto mt-4 cursor-pointer'>
      <div className='line1 flex'>
        {keys1.map((key)=> {
          return <Key keyVal={key}/>
        })}
      </div>
      <div className='line2 flex px-8 mt-4 cursor-pointer'>
        {keys2.map((key)=> {
          return <Key keyVal={key}/>
        })}
      </div>
      <div className='line3 flex px-6 mt-4 cursor-pointer'>
        <BigKey keyVal={"ENTER"}/>
        {keys3.map((key)=> {
          return <Key keyVal={key}/>
        })}
        <BigKey keyVal={"DELETE"}/>
      </div>
    </div>
  )
}

export default Keyboard