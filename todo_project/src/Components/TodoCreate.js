import React, {useState} from 'react';
import '../styles/todoCreate.css';

function TodoCreate({onCreateTodo}) {

    const [task,setTask]= useState("");

    const clearTask =()=>{
        setTask('');
    }

    function handleChange(e){
        setTask(e.target.value);
      }
 
      const createTodo = (e)=>{
        e.preventDefault();
        if(!task)return;
        const request = {
            id : Math.floor(Math.random()* 99999999999),
            content: task
        }
        onCreateTodo(request);
        clearTask();
      }

  return (
    <div className='createTaskDiv'>
    <form className='createForm'  onSubmit={createTodo}>

        <input type='text'
               value={task} 
               placeholder="Add To Task"
               onChange={handleChange}
               className='createInput'/>

        <button type='submit'
         className='addButton' >Add</button>
    </form> 
    </div>
  )
}

export default TodoCreate;


