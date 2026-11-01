"use client"

import Container from '@/common/Container'
import React, { useState } from 'react'

const Counter = () => {

  const [count, setCount]=useState(0)

  const handleIncrement=()=>{
    setCount(count +1)
  }

  const handleDecrement=()=>{
    if(count >0){
      setCount(count -1)
    }
  }

  const handleClear=()=>{
    setCount(0)
  }
  return (
    <>
    <Container>
        <div className='bg-blue-100 w-110 p-10 rounded-2xl shadow-2xl m-auto'>
            <h3 className='text-2xl text-black font-bold text-center pb-10'>Counter Apps</h3>
            <div className='bg-gray-50 rounded-2xl w-40 text-center py-10 m-auto shadow-2xs'><span className='text-4xl font-bold text-black'>{count}</span></div>
            <div className="flex gap-x-5 justify-center pt-10">
              <button onClick={handleIncrement} className='text-3xl text-green-500 font-bold py-2 px-10 bg-white rounded-xl cursor-pointer hover:bg-blue-50'>+</button>
              <button onClick={handleClear} className='text-3xl text-green-500 font-bold py-2 px-10 bg-white rounded-xl cursor-pointer hover:bg-blue-50'>c</button>
              <button onClick={handleDecrement} className='text-3xl text-green-500 font-bold py-2 px-10 bg-white rounded-xl cursor-pointer hover:bg-blue-50'>-</button>
            </div>
        </div>
    </Container>
    </>
  )
}

export default Counter