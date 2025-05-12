import {useState} from 'react';
import { EditTodo,DeleteTodo } from './Actions';
import {useDispatch} from 'react-redux'
function Todo({id,title}){
    const [editTodo,setEditTodo]=useState(false);
    const [newTodo,setNewTodo]=useState(title);
    const dispatch=useDispatch();
    const handleTodo=()=>{
        if(newTodo.trim()){
           dispatch(EditTodo({id:id, title:newTodo}))
           setEditTodo(false);
        }
    }
    const handleDelete=(id)=>{
      dispatch(DeleteTodo(id));
    }

    return(
        <>
        {
            editTodo ? (
                <div className='form-group'>
                    <input  type='text' className='form-control' value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
                    <button className='btn btn-info' onClick={handleTodo}>Save</button>
                </div>
            ):(
                <li className='list-group-item'>
                    <p>{title}</p>
                    <div className='actions'>
                        <button className='btn btn-warning' onClick={()=>setEditTodo(true)} >Edit</button>
                        <button className='btn btn-danger' onClick={()=>handleDelete(id)} >Delete</button>
                    </div>
                </li>
            )
        }
        </>
    )
}
export default Todo;