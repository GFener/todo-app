import './App.css';

import TodoList from './Components/TodoList';
import TodoCreate from './Components/TodoCreate';

function App() {
  

 
  
  return (
    <div className="App">
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <h1>To Do List</h1>
      <TodoCreate />
      <TodoList />
      </div>
    </div>
  );
}

export default App;
