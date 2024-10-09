import './App.css';
import { useState } from 'react';
import TodoList from './Components/TodoList';
import TodoCreate from './Components/TodoCreate';

function App() {

  const [todos, setTodos] = useState([]);

  const createTodo = (task)=>{
    setTodos([...todos,task]);

  }
 
  const removeTodo =(todoId)=>{
    setTodos([...todos.filter((todo)=> todo.id !== todoId)]);
  }
return (
    <div className="App">
      <div className='main'>
      <h1>To Do List</h1>
      <TodoCreate onCreateTodo={createTodo}/>
      <TodoList todos={todos} onRemoveTodo={removeTodo}/>
      </div>
    </div>
  );
}

export default App;
