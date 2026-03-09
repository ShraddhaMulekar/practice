import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../features/todo/TodoSlice"

export const todoStore = configureStore({
    reducer : {
        todo : todoReducer
    }
})