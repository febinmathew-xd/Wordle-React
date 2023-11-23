import React, { useContext } from 'react'
import { AppContext } from '../App'

function Main({children, headertheme}) {

  
  
  return (
    <div className={`main ${headertheme} w-full h-[calc(100vh-48px)] px-4 pt-2`}>
        {children}
    </div>
  )
}

export default Main