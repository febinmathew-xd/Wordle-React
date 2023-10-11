import React from 'react'

function Header({children}) {
  return (
    <div className='header w-full h-12 flex justify-center items-center bg-black'>
        {children}
    </div>
  )
}

export default Header