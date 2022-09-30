import React from "react";
import Counter from "./Counter";
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("count starts with 0", () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId("count").textContent).toBe("Clicado 0 vezes");
});

test("clicking on button increments counter", () => {
  const { getByText, getByTestId } = render(<Counter />);
  fireEvent.click(getByText("Incrementar contador"));
  expect(getByTestId("count").textContent).toBe("Clicado 1 vez");
  fireEvent.click(getByText("Incrementar contador"));
  expect(getByTestId("count").textContent).toBe("Clicado 2 vezes");
});
