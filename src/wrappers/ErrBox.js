import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App'

function ErrBox({errMsg}) {

    const {setErr, setErrMsg} = useContext(AppContext);
    

    useEffect(() => {
        setTimeout(() => {
        setErr(false);
        setErrMsg('');
        }, 1200);
    });

    
  return (
    <div className='min-w-[200px] rounded-1 min-h-8 flex justify-center items-center font-semibold absolute text-slate-900/90 bg-white/90 top-1/3 left-1/2 -translate-x-1/2 font-serif py-1  px-2'>{errMsg}</div>
  )
}

export default ErrBox