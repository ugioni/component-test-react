import React from "react";
import ChangeInput from "./ChangeInput";
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("displays the correct greeting", () => {
  const { getByLabelText, getByTestId } = render(<ChangeInput />);
  const input = getByLabelText("user-name");
  const greeting = getByTestId("change-input-greeting");
  expect(input.value).toBe("");
  expect(greeting.textContent).toBe("Olá, Aluno!");
  fireEvent.change(input, { target: { value: "Ugioni" } });
  expect(input.value).toBe("Ugioni");
  expect(greeting.textContent).toBe("Olá, Ugioni!");
});
