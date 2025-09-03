import React from 'react'

const HeroGradient = () => {
  return (
    <div> 
        <div className='shadow-cyanMediumShadow absolute top-2 right-[400px] -z-10 animate-pulse'></div>
        <div className='shadow-orangeMediumShadow absolute top-2 right-0 -z-10 animate-pulse'></div>
        <div className='shadow-cyanMediumShadow absolute top-[300px] left-1 -z-10 opacity-50'></div>
        <div className='shadow-orangeMediumShadow absolute top-[500px] left-1 -z-10 opacity-50'></div>
    </div>
  )
}

export default HeroGradient