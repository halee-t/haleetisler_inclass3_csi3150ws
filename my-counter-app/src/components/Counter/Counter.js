import React from "react";
import { useState } from "react";

function Counter() {
  const [count, newCount] = useState(0);

  const increase = () => {
    newCount(count + 1);
  };

  const decrease = () => {
    newCount(count - 1);
  };

  return (
    <section className="counter-box">
      <div className="counter-output">{count}</div>
      <section className="buttons">
        <button onClick={decrease} className="decrease">
          -
        </button>
        <button onClick={increase} className="increase">
          +
        </button>
      </section>
    </section>
  );
}

export default Counter;
