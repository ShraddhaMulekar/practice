import React, { createContext, useContext, useReducer } from 'react'

const AuthContext = createContext()

const initialState = {
    isLoggedin : false,
    user : null
}

const authReducer = (state, action)=>{
    switch (action.type) {
        case 'LOGIN':
            return{
                isLoggedin:true,
                user: action.payload
            }
            
        case 'LOGOUT':
            return{
                isLoggedin : false,
                user : null
            }
    
        default:
            return state;
    }
}

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState)

    const login = (userData)=>{
        dispatch({type:"LOGIN", payload:userData})
    }

    const logout = ()=>{
        dispatch({type:"LOGOUT"})
    }

  return (
    <AuthContext.Provider value={{...state, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth =()=>useContext(AuthContext)