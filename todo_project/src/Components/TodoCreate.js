import React, {useState} from 'react';
import '../styles/todoCreate.css';

function TodoCreate() {
    const [task,setTask]= useState("");

    function handleChange(e){
        setTask(e.target.value);
      }

  return (
    <div className='createTaskDiv'>
    <form className='createForm' >

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


