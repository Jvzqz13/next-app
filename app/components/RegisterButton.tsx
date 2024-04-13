'use client'
import React from 'react'

const RegisterButton = () => {
  
  const handleClick = (e: any) => { 
    e.preventDefault();
    console.log('Register');
  }

  return (
    <div>
      <button className='btn btn-primary' 
        onClick={handleClick}
        > Register </button>
    </div>
  )
}

export default RegisterButton
