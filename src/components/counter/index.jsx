import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <h3 role="contentInfo">Count is {count}</h3>
    </div>
  );
}

export default Counter;
