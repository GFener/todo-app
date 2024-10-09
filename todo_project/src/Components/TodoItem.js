import React from 'react';
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import '../styles/todoItem.css';

function TodoItem({todo, TodoRemove}) {

  const {id, content} =todo;

  const removeTask =()=>{
    TodoRemove(id);
  }

  return (
   <div className='todo-item'>
    
     <div style={{fontSize:'18px', display:'flex',alignItems:'center'}}>
      <MdOutlineCheckBoxOutlineBlank style={{fontSize:'20px'}}/>
     {content}
      </div>
      <div>
        <IoIosRemoveCircle onClick={removeTask}
        style={{ cursor: 'pointer', marginRight: '10px',fontSize:'18px' }}/>
        <FaEdit style={{ cursor: 'pointer',fontSize:'18px' }}/>
      </div>
   </div>
  )
}

export default TodoItem

