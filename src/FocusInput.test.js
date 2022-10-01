import React from "react";
import FocusInput from "../src/FocusInput";
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("Validar FocusInput snapshot", () => {
  const { container } = render(<FocusInput />);
  expect(container.firstChild).toMatchSnapshot();
});

test("Validar clique para focar", () => {
  const { getByPlaceholderText, getByText } = render(<FocusInput />);
  fireEvent.click(getByText("Clique aqui para focar"));
  expect(document.activeElement).toBe(getByPlaceholderText("Foco aqui!!!"));
});
