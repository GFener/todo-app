import React, {useState} from 'react';
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import '../styles/todoItem.css';

function TodoItem({todo, TodoRemove, onUpdateTodo}) {

  const {id, content} =todo;

  const [editable,setEditable]= useState(false);
  const [editTask ,setEditTask] = useState(content);

  const removeTask =()=>{
    TodoRemove(id);
  }

  const updateTodo =()=>{
    const request={
      id:id,
      content: editTask
    }
    onUpdateTodo(request);
    setEditable(false);
  }

  return (
   <div className='todo-item'>
    
     <div style={{fontSize:'18px', display:'flex',alignItems:'center'}}>
     
     {
      editable ?  <input type='text' value={editTask} onChange={(e)=>setEditTask(e.target.value)} style={{outline:'none', border:'none',fontSize:'16px',width:'320px'}} /> : content
     }
      </div>
      <div>
        <IoIosRemoveCircle onClick={removeTask}
        style={{ cursor: 'pointer', marginRight: '10px',fontSize:'18px' }}/>
       
        {
         editable ?  <FaCheck  onClick={updateTodo}/> :  <FaEdit style={{ cursor: 'pointer',fontSize:'18px' }} onClick={()=> setEditable(true)}/>
       
        }
       
      </div>
   </div>
  )
}

export default TodoItem

