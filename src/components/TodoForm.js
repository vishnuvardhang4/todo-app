import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [todoName, setTodoName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if(todoName){
            console.log(todoName)
            addTodo(todoName)
            setTodoName('')
        }
    }
  return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input className='todo-input' onChange={(e) => setTodoName(e.target.value)}/>
            <button className='todo-button' type='submit'>Add todo</button>
        </form>
  )
}
