
export  function AddTodo(todo){
  return({type:'AddTodo',payload:todo})
}
export function DeleteTodo(id){
    return({type:'DeleteTodo',payload:id})
}
export function EditTodo(todo){
    return({type:'EditTodo',payload:todo})
}