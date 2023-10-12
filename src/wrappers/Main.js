import React from 'react'

function Main({children}) {
  return (
    <div className='main  w-full h-[calc(100vh-48px)] px-4 pt-2 bg-gray-900'>
        {children}
    </div>
  )
}

export default Main