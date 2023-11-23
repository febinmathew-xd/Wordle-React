import React, { useContext } from 'react'
import { AppContext } from '../App'

function ThemeBox() {
    const {setHeaderTheme} = useContext(AppContext);
  return (
    <div className='w-[300px] h-[300px] bg-slate-500 rounded absolute left-10 flex justify-center items-center cursor-pointer ' >
        <div onClick={() => setHeaderTheme("bg-lime-400/70")} className='w-12 h-12 bg-red-600 '  >red</div>
        </div>
  )
}

export default ThemeBox