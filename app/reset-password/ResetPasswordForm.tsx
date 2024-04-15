'use client'
import React from 'react'

const passwordResetForm = () => {
  return (
    <>
        <form>
          <div> 
            Reset Password
            <br />
            <br />

          <div>
            <label> Password </label> <br />
            <input required 
              id='password' 
              name='password' 
              type='password' 
              className='border-2 border-black ' 
              />
            </div>

            <div>
            <label> Verify Password </label> <br />
            <input required 
              id='verify-password' 
              name='verify password' 
              type='password' 
              className='border-2 border-black ' 
              />
            </div>

            <br /> 
            <button className='btn btn-primary' 
              > Reset Password </button>
            
          </div>

        </form>
      
    </>
  )
}

export default passwordResetForm
