import { useState } from "react";

export default function App() {
  return <Counter initialValue={5} />;
}

function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => setCount((prev) => prev + 1);

  const handleDecrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>

      <button
        onClick={handleDecrement}
        disabled={count === 0} // Bonus: disable at 0
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>
    </div>
  );
}
