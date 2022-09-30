import React, { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);
  return (
    <div>
      <input
        type="text"
        aria-label="focus-input"
        ref={inputRef}
        placeholder="Foco aqui!!!"
      />
      <button onClick={() => inputRef.current.focus()}>
        Clique aqui para focar
      </button>
    </div>
  );
};

export default FocusInput;
