import React from 'react'

function Header({children}) {
  return (
    <div className='header w-full h-12 flex justify-center items-center bg-gray-900/95 drop-shadow-md'>
        {children}
    </div>
  )
}

export default Header