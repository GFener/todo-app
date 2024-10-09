import React from 'react';
import TodoItem from './TodoItem';
import '../styles/todoList.css';


function TodoList({todos, onRemoveTodo, onUpdateTodo}) {
  return (
    <div className='todoList'>
      {
        todos && todos.map((todo)=>(
          <TodoItem key={todo.id} todo={todo}
         TodoRemove={onRemoveTodo} onUpdateTodo={onUpdateTodo}/>
        ))
      }
     
    </div>
  )
}

export default TodoList;
