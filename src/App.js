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
          description={
            <ul>
              <li>
                <code>queryByText</code> and <code>getByText</code> to select a
                node and assert its presence
              </li>
              <li>
                <code>rerender</code> to test with different props
              </li>
              <li>
                <code>jest.fn</code> to mock functions
              </li>
              <li>
                <code>fireEvent.click</code> to simulate click events
              </li>
            </ul>
          }
          component={<Button text="Enviar" onClick={() => {}} />}
        />
        <Scenario
          title="Cenário 2: Input"
          description={
            <ul>
              <li>
                <code>getByLabelText</code> to select elements via{" "}
                <code>aria-label</code>
              </li>
              <li>
                <code>fireEvent.change</code> to simulate change events. Accepts
                an <code>event</code> object
              </li>
            </ul>
          }
          component={<ChangeInput />}
        />
        <Scenario
          title="Cenário 3: Foco"
          description={
            <ul>
              <li>
                <code>container.firstChild</code> is the DOM tree of the
                component and can be used in snapshot testing
              </li>
              <li>
                <code>getByPlaceholderText</code> to select via input{" "}
                <code>placeholder</code>
              </li>
              <li>
                <code>document.activeElement</code> is the same DOM node
                returned by the getter
              </li>
            </ul>
          }
          component={<FocusInput />}
        />
        <Scenario
          title="Cenário 4: Effect"
          description={
            <ul>
              <li>
                <code>useState</code>, <code>useRef</code> and{" "}
                <code>useEffect</code> are only implementation details and have
                no impact in the tests
              </li>
              <li>
                <code>getByTestId</code> for dynamic text
              </li>
              <li>
                <code>fireEvent.click</code> when simulating checkbox action,
                even though the component has <code>onChange</code> callback
              </li>
            </ul>
          }
          component={<Counter />}
        />
      </main>
    </div>
  );
}

export default App;
