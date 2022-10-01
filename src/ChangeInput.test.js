import React from "react";
import ChangeInput from "./ChangeInput";
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("Validar se o campo renderiza o texto padrão", () => {
  const { getByLabelText, getByTestId } = render(<ChangeInput />);
  const input = getByLabelText("user-name");
  const greeting = getByTestId("change-input-greeting");
  expect(input.value).toBe("");
  expect(greeting.textContent).toBe("Olá, Aluno!");
});

test("Validar se o campo renderiza o texto modificado", () => {
  const { getByLabelText, getByTestId } = render(<ChangeInput />);
  const input = getByLabelText("user-name");
  const greeting = getByTestId("change-input-greeting");
  fireEvent.change(input, { target: { value: "Ugioni" } });
  expect(input.value).toBe("Ugioni");
  expect(greeting.textContent).toBe("Olá, Ugioni!");
});
