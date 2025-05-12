import React from  'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {AddTodo} from './Actions.jsx';
import TodoDetails from './TodoDetails.jsx';


function Todos(){
    const [todoTitle,setTodoTitle]=useState('');
    const dispatch=useDispatch();
   const handleTodo=()=>{
    if(todoTitle.trim()){
      const newTodo={
        title:todoTitle
      }
      dispatch(AddTodo(newTodo));
      setTodoTitle('');
    }

   }
   
    return(
        <div className='container mt-4 w-50'>
          <h2 className='text-primary'>Todo App Using Redux</h2>
          <div className='input-group'>
          <input type='text' placeholder='Search' className='form-control'
          value={todoTitle}
          onChange={(e)=> setTodoTitle(e.target.value)}
          />
          
          <button className='btn btn-success'
          onClick={()=>handleTodo()}
          > Add Todo</button>
          </div>
          
         <TodoDetails/>
         
        </div>
    )
}
export default Todos;
