import React from "react";
import Counter from "./Counter";
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("Validar se o contador renderiza o valor padrão", () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId("count").textContent).toBe("Clicado 0 vezes");
});

test("Validar se o contador renderiza o valor modificado", () => {
  const { getByText, getByTestId } = render(<Counter />);
  fireEvent.click(getByText("Incrementar contador"));
  expect(getByTestId("count").textContent).toBe("Clicado 1 vez");
  fireEvent.click(getByText("Incrementar contador"));
  expect(getByTestId("count").textContent).toBe("Clicado 2 vezes");
});
