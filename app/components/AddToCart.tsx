'use client'
import React from 'react'

function AddToCart() {
  return (
    <div>
      <button className='btn btn-primary' 
        onClick={() => console.log('Click')}
        > Add To Cart </button>
    </div>
  )
}

export default AddToCart;
