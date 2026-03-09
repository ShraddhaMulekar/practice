export const initialState = {
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
            todos :[
                ...state.todos,
                action.payload
            ]
        }

    case "EDIT_TODO":
        return{
            todos:[
                ...state.todos,
                action.payload
            ]
        }
  
    default:
        return state;
  }

}