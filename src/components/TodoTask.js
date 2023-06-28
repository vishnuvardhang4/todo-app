import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const TodoTask = ({todo, setEditTodo, deleteTodo, updateStatus}) => {
    const EditTodo = () => {
        setEditTodo(todo.id)
    }
    const _deleteTodo = () =>{
        deleteTodo(todo.id)
    }
  return (
    <div className='todo-task-wrapper'>
        <p  className={`${todo.completed ? 'todo-task in-active': "todo-task"}`} onClick={() =>updateStatus(todo.id)}>{todo.task}</p>
        <span className='todo-action'>
          <FontAwesomeIcon className='todo-action-icon' icon={faPenToSquare} onClick={EditTodo} />
          <FontAwesomeIcon icon={faTrash} onClick={_deleteTodo}/>
        </span>
    </div>
  )
}
