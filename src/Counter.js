import React, { useState } from "react";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span data-testid="count">
        Clicado {count} vez{count === 1 ? "" : "es"}
      </span>
      <br />
      <Button onClick={() => setCount(count + 1)} text="Incrementar contador" />
    </div>
  );
}

export default Counter;
