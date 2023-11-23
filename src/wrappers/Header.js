import React, { useContext } from 'react'
import { AppContext } from '../App'

function Header({children}) {
  const {headerTheme} = useContext(AppContext);
  return (
    <div   className={ `header w-full  h-12 flex ${headerTheme} justify-center items-center drop-shadow-md border-b border-b-white/10`}>
        {children}
    </div>
  )
}

export default Header