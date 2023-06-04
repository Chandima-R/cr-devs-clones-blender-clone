import React from 'react'

function Banner() {
  return (
    <div className='w-full feature-bg bg-blend-darken relative flex items-center justify-center'>
        <div className='bg-black/60 h-full w-full'></div>
        <div className='z-20 absolute text-center w-3/4'>
          <h1 className='z-20 text-white font-bold text-4xl md:text-7xl'>Free Software Never Looked This Awesome</h1>
        </div>
    </div>
  )
}

export default Banner