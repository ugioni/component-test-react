import React, { useEffect } from "react";
import Prism from "prismjs";
import FocusInput from "./FocusInput";
import ChangeInput from "./ChangeInput";
import Counter from "./Counter";
import "./prism.css";
import Scenario from "./Scenario";
import Button from "./Button";

function App() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="app-container">
      <header>
        <h1>Component Tests - React Testing Library</h1>
      </header>
      <main>
        <Scenario
          title="Cenário 1: Botão"
          component={<Button text="Enviar" onClick={() => {}} />}
        />
        <Scenario title="Cenário 2: Input" component={<ChangeInput />} />
        <Scenario title="Cenário 3: Foco" component={<FocusInput />} />
        <Scenario title="Cenário 4: Effect" component={<Counter />} />
      </main>
    </div>
  );
}

export default App;
