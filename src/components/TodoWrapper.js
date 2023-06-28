import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { TodoTask } from './TodoTask';
import { EditTodo } from './EditTodo';
uuidv4();

export const TodoWrapper = () => {
  const [todoList, setTodoList] = useState([])

  const addTodo = (todo) =>{
    setTodoList([...todoList, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
  }
  const setEditTodo = (id) => {
    setTodoList(todoList.map((todo) => 
      todo.id === id ? {...todo, isEditing: !todo.isEditing} 
      : todo
    )
    )
  }
  const updateTodo = (id, task) => {
    
    setTodoList(todoList.map((todo) => 
      todo.id === id ? {...todo, task, isEditing: !todo.isEditing } 
      : todo
    )
    )
  }
  const deleteTodo =(id)=>{
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }

  const updateStatus = (id) => {
    
    setTodoList(todoList.map((todo) => 
      todo.id === id ? {...todo, completed: !todo.completed } 
      : todo
    )
    )
  }
  return (
    <div className='todo-wrapper'>
      <h3>Todo tasks</h3>
      <TodoForm addTodo={addTodo} />
      {
        todoList.map((todo, idx) => todo.isEditing ? <EditTodo task={todo} updateTodo={updateTodo} /> : <TodoTask key={idx} todo={todo}  setEditTodo={setEditTodo} deleteTodo={deleteTodo} updateStatus={updateStatus}/>)
      }
    </div>
  )
}
