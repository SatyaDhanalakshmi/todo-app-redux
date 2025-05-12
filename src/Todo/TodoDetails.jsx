
import {useSelector} from 'react-redux';

import Todo from './Todo.jsx';

function TodoDetails(){
    const select=useSelector((state)=>state.todos)
   
    return(
        <>
        <ul  className='list-group mt-4'>
        {select.map((todo)=>(
            <Todo key={todo.id} id={todo.id} title={todo.title} />
        ))}
        </ul>
       
        </>
    )
}
export default TodoDetails;