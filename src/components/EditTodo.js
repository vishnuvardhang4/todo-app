import React, {useState} from 'react'

export const EditTodo = ({task, updateTodo}) => {
    const [todoName, setTodoName] = useState(task.task)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(todoName){
            console.log(todoName)
            updateTodo(task.id, todoName)
            setTodoName('')
        }
    }
  return (
        <form className='todo-edit-form' onSubmit={handleSubmit}>
            <input className='todo-input' value={todoName} onChange={(e) => setTodoName(e.target.value)}/>
            <button className='todo-button' type='submit'>Update todo</button>
        </form>
  )
}
