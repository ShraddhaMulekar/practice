import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name : "todo",

    initialState : {
        todos : []
    },

    reducers :{
        addTodo : (state, action)=>{
            state.todos.push(action.payload)
        },

        deleteTodo : (state, action) => {
            state.todos = state.todos.filter((todo, index)=>{
                return index !== action.payload
            })
        },

        editTodo : (state, action)=>{
            state.todos = state.todos.map((todo, index)=>(
                index === action.payload.index ? 
                action.payload.text :
                todo
            ))
        }
    }
})

export const {addTodo, deleteTodo, editTodo} = TodoSlice.actions

export default TodoSlice.reducer