"use client"

import Container from '@/common/Container'
import React, { useState } from 'react'

const Todo = () => {

    const [task, setStack]=useState("")
    const[todo, setTodo]=useState([])

    const handleAdd=()=>{
        if(!task.trim()) return;
        const newTask={id:Date.now(), text:task}

        setTodo([newTask, ...todo])
        setStack("")
    }

    const HandleDelete=(id)=>{
        const todoDelete=todo.filter((todo)=> todo.id !==id)

        setTodo(todoDelete)
    }

  return (
    <>
    <Container>
        <div className="w-110 p-10 m-auto bg-blue-50 rounded-2xl shadow-2xl">
            <h3 className='text-2xl font-bold text-gray-700 text-center'>Todo Apps</h3>
            <div className="flex gap-x-4 pt-10">
                <input value={task} onChange={(e)=>setStack(e.target.value)} className='p-2 bg-white outline-0 w-80 text-base text-gray-600' type="text" placeholder='inter your task' />
                <button onClick={handleAdd} className='text-base text-white font-bold bg-blue-500 px-6 py-2 rounded-xl cursor-pointer'>Add</button>
            </div>

            {todo.map((item)=>(
                <div key={item.id} className="flex justify-between items-center p-2 bg-white mt-3">
                <h4 className='text-xl text-gray-500 font-normal'>{item.text}</h4>
                <button onClick={()=>HandleDelete(item.id)} className='text-sm font-semibold text-white bg-red-500 py-1 px-3 rounded cursor-pointer hover:bg-red-400'>Delete</button>
            </div>
            ))}
            
        </div>
    </Container>
    </>
  )
}

export default Todo