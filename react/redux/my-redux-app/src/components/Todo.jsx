import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, deleteTodo } from "../features/todo/TodoSlice";

const Todo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const handleAdd = () => {
    dispatch(addTodo(text));
  };

  const handleEdit = (index) => {
    const newText = prompt("Enter your text");

    dispatch(
      editTodo({
        index: index,
        text: newText,
      }),
    );
  };

  return (
    <div>
      <h2>Todo App</h2>

      <input type="text" onChange={(e) => setText(e.target.value)} />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}

            <button onClick={() => handleEdit(index)}>
              Edit
            </button>

            <button onClick={() => dispatch(deleteTodo(index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
