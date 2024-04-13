'use client'
import React, { ChangeEvent } from 'react'

// import { useRouter } from 'next/router'
import { useState } from 'react'

interface User{
  name: string,
  email: string,
  password: string
}

const RegisterForm = () => {
  // const router = useRouter();

  const [ formData, setFormData ] = useState<User> ({
    name: "",
    email:"",
    password:""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData (prevState => ({ 
      ...prevState,
      [name]: value
    }))
  }  
   
  const handleSubmit = (e: any) => { 
    e.preventDefault();
    console.log(formData);
  }
 
  return (

    <>
        <form method='POST' action="http://localhost:3000/api/register" onSubmit={handleSubmit}>
          <div> 

          <div>
            <label> Name </label> <br />
            <input required 
              id='name' 
              name='name' 
              type='name' 
              className='border-2 border-black ' 
              onChange={handleChange}
              value={formData.name}
              />
            </div>

            <div>
            <label> Email </label> <br />
            <input required 
              id='email' 
              name='email' 
              type='email' 
              className='border-2 border-black ' 
              onChange={handleChange}
              value={formData.email}
              />
            </div>

            <div>
              <label> Password </label> <br />
              <input required 
                id='password' 
                name='password' 
                type='password' 
                className='border-2 border-black ' 
                onChange={handleChange}
                value={formData.password}
                />
            </div>

            <br />
 
            <button className='btn btn-primary' 
              onClick={handleSubmit}
              > Register </button>
            
          </div>

        </form>
      
    </>
  )
}

export default RegisterForm
