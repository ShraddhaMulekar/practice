import { useReducer, useState } from "react";
import { initialTodo, TodoReducer } from "../reducer/TodoReducer";

const Todo = () => {
  const [state, dispatch] = useReducer(TodoReducer, initialTodo);
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    dispatch({
      type: "ADD_TODO",
      payload: text,
    });
  };

  const handleEdit = (index) => {
    const newText = prompt("new text enter")

    dispatch({
        type : "EDIT_TODO",
        payload :{
            index : index,
            text : newText
        }
    })
  };

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />

      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>
            {todo}

            <button
              onClick={() => dispatch({ type: "DELETE_TODO", payload: index })}
            >
              Delete Todo
            </button>

            <button
              onClick={() => handleEdit(index)}
            >
              Edit Todo
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
