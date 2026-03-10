import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "../features/users/userSlice"

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
                {users?.map((user, index)=>(
                    <li key={index}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}