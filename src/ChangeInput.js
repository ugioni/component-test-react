import React, { useState } from "react";

function ChangeInput() {
  const [name, setName] = useState("");
  return (
    <div>
      <span data-testid="change-input-greeting">
        Olá, {name === "" ? "Aluno" : name}!
      </span>
      <br />
      <input
        type="text"
        aria-label="user-name"
        placeholder="Digite seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default ChangeInput;
