
import React from 'react';
import '../styles/createTodo.css';

const CreateTodo = () => {
  return (
    <div className='createTaskDiv'>
        <form className='createForm'>
            <input className='createInput'/>
            <button className='addButton'>Add</button>
        </form>
      
    </div>
  )
}

export default CreateTodo;


