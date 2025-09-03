import React from 'react'

const SingleInfo = ({text,IImage}) => {
  return (
    <div className='flex gap-4 items-center justify-start'>
         <IImage className="text-3xl"/>
        <p>{text}</p>
    </div>
  )
} 

export default SingleInfo