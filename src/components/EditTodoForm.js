import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
const [value,setValue]=useState(task.task)
// const handleChange= (e)=>{
// console.log(e.target.value)
// }

const handleSubmit = e=>{
    e.preventDefault();

    editTodo(value, task.id);
    setValue("")
}
  return (
    <form className='EditTodoForm' onSubmit={handleSubmit}>
        <input type='text ' 
        className='todo-input' value ={value}
         placeholder='update the task'
         onChange={(e)=> setValue(e.target.value)}/>
         <button type='submit' className='todo-btn'>Update</button>
        </form>
  )
}
