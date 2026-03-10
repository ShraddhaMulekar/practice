import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsersAPI } from "./userAPI";

export const fetchUser = createAsyncThunk(
    "users/fetchUser",

    async ()=>{
        const data = await fetchUsersAPI()
        return data
    }
)

const userSlice = createSlice({
    name : "users",

    initialState : {
        users : [],
        loading : false,
        error : null
    },

    reducers : {
        addUser : (state, action)=>{
            state.users.push(action.payload)
        },

        deleteUser : (state, action)=>{
            state.users = state.users.filter((user)=> user.id !== action.payload)
        }
    },

    extraReducers : (builder)=>{
        builder

        .addCase(fetchUser.pending, (state)=>{
            state.loading = true
        })

        .addCase(fetchUser.fulfilled, (state, action)=>{
            state.loading = false,
            state.users = action.payload
        })

        .addCase(fetchUser.rejected, (state)=>{
            state.loading = true,
            state.error = "Failed to fetch users"
        })
    }
})

export const {addUser, deleteUser} = userSlice.actions

export default userSlice.reducer