import { useReducer } from "react";
import { counterReducer, initialCount } from "../reducer/counterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialCount);

  return (
    <div>
      <h2>count : {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default Counter;