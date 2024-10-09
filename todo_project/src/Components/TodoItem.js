import React from 'react';
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../styles/todoItem.css';

function TodoItem() {
  return (
   <div className='todo-item'>
     <div>
      Ben ilk todoyum
      </div>
      <div>
        <IoIosRemoveCircle/>
        <FaEdit/>
      </div>
   </div>
  )
}

export default TodoItem

