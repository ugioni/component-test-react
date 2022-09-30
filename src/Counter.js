import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);
  const [checked] = useState(false);
  const initialTitleRef = useRef(document.title);

  useEffect(() => {
    document.title = checked
      ? `Total number of clicks: ${count}`
      : initialTitleRef.current;
  }, [checked, count]);

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
