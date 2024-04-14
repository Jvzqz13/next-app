'use client'
import axios from 'axios'
import React, { ChangeEvent, FormEvent, useState } from 'react'

import { useRouter } from 'next/navigation'

interface User{
  name: string,
  email: string,
  password: string
}

const RegisterForm = () => {
  const router = useRouter();

  const [ formData, setFormData ] = useState<User> ({
    name: "",
    email:"",
    password:""
  })

    // updates formData state based on the changes from the input fields   
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // takes prevState and returns new state object 
    setFormData (prevState => ({ 
      ...prevState,
      [name]: value
    }))
  }  
   
  const handleSubmit = async (e: FormEvent<HTMLElement> ) => { 
    e.preventDefault();
    console.log('Register',formData)

    try {
      const response = await axios.post('http://localhost:3000/api/register', formData)
      console.log('Registration Successful');
      // redirect user to home page
      console.log(response);
      
      if ( response.status === 201 ) {
        router.push('http://localhost:3000/api/auth/signin')
      }

      setFormData({
        name:"",
        email:"",
        password:""
      })
      
      
    } catch (error) {
      console.error(' Error Registering', error)
    }

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
