import React from 'react'
import { useState } from 'react'
import '../style.css'


    function makeId() {


         return (
            crypto?.randomUUID?.() ??
            Date.now().toString(36) + Math.random().toString(36).slice(2)
    );
}
const Todo = () => {
    const [todos , setTodos]= useState([])
    const [input, setInput ]= useState('')


    const Onsubmit=()=>{
        const text = input.trim();
        if (!text) return; // don't add empty todos
        setTodos((todos)=>{
            return todos.concat({
                text : input ,
                id : makeId()
            })
        }
    );
    setInput('')
    
    };
    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
  return (
    <div className='container'>
        <input type="text"  placeholder='Enter your todo' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={Onsubmit}>Submit</button>

        <ul className="todos-list">
            {todos.map(({text,id})=>(
                <li key={id} className='todo'>
                    <span>{text}</span>
                    <button className="close" onClick={() => removeTodo(id)}>
              X
            </button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo