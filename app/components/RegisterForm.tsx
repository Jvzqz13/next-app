import React from 'react'
import RegisterButton from './RegisterButton'

const RegisterForm = () => {
 
  return (



    <>
        <form method='POST' >
          <div> 

            <div>
            <label> Email </label> <br/>
            <input id='email' name='email' type='email' className='border-2 border-black ' />
            </div>

            <div>
              <label> Password </label> <br />
              <input id='password' name='password' type='password' className='border-2 border-black ' />
            </div>

            <br />

            
             <RegisterButton />
            

          </div>

        </form>
      
    </>
  )
}

export default RegisterForm
