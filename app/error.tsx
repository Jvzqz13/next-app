'use client'
import React from 'react'

interface Props{
  error: Error
  reset: () => void;
}

const Errorpage = ({error, reset}: Props) => {
  console.log('Error', error);
  
  return (
    <>
    <div>
      An expected error has occured
    </div>
    <button className='btn' onClick={()=>reset()}> Retry</button>
    </>
  )
}

export default Errorpage
