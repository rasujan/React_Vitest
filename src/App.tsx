import "./App.css";

import React from "react";

function App() {
  const [count, setCount] = React.useState(0);
  const [amount, setAmount] = React.useState(0);

  return (
    <>
      <p> count is {count}</p>

      <input
        type="number"
        onChange={(e) => setAmount(Number(e.target.value))}
        name="amount"
        value={amount}
      />

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <button onClick={() => setCount(amount)}>Set</button>
    </>
  );
}

export default App;
