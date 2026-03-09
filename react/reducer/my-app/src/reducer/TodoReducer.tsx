export const initialTodo = {
    todos : []
}


export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
        return {
            todos : [
                ...state.todos,
                action.payload
            ]
        }

    case "DELETE_TODO":
        return{
            todos : state.todos.filter((todo, i)=>i !== action.payload)            
        }

    case "EDIT_TODO":
        return{
               todos : state.todos.map((todo, index)=>(
                index === action.payload.index ?
                action.payload.text :
                todo
               ))
        }
  
    default:
        return state;
  }

}