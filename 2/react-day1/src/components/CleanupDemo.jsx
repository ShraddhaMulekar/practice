import React, { useEffect, useState } from "react";

const CleanupDemo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("effect started");
    const interval = setInterval(() => {
      console.log("Running interval");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("stopped");
    };
  }, [count]);

  return (
    <>
      <h2>Clean up demo</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
    </>
  );
};

export default CleanupDemo;
