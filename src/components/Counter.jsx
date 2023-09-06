import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  if (count < 0) {
    setCount(0);
  }

  const increaseCount = () => setCount((prev) => prev + 1);
  const reduceCount = () => setCount((prev) => prev - 1);

  return (
    <>
      <p>{count}</p>
      <button onClick={increaseCount}>Add</button>
      <button onClick={reduceCount}>Reduce</button>
    </>
  );
}

export default Counter;
