import { useDispatch, useSelector } from "react-redux"
import { deleteUser, fetchUser } from "../features/users/userSlice"

export const UserList = ()=>{

    const dispatch = useDispatch()
    const {users, loading, error} = useSelector((state)=>state.users)

    return(
        <div>
            <h2>User List</h2>

            <button onClick={()=>dispatch(fetchUser())}>
                fetch data
            </button>

            {loading && <p>Loading..</p>}

            {error && <p>{error}</p>}

            <ul>
                {users?.map((user)=>(
                    <li key={user.id}>
                        {user.name}

                        <button onClick={()=>dispatch(deleteUser(user.id))}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}