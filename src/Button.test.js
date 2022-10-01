import React from "react";
import Button from "./Button";
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

const defaultProps = {
  onClick: jest.fn(),
  text: "Enviar",
};

test("Validar botão snapshot", () => {
  const { container } = render(<Button {...defaultProps} />);
  expect(container.firstChild).toMatchSnapshot();
});

test("Validar se o botão renderiza o texto padrão", () => {
  const { queryByText } = render(<Button {...defaultProps} />);
  expect(queryByText("Enviar")).toBeTruthy();
});

test("Validar se o botão renderiza o texto modificado", () => {
  const { queryByText, rerender } = render(<Button {...defaultProps} />);
  rerender(<Button {...defaultProps} text="Enviar projeto" />);
  expect(queryByText("Enviar projeto")).toBeTruthy();
});

test("Validar chamada da função on click", () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button {...defaultProps} onClick={onClick} />);
  fireEvent.click(getByText(defaultProps.text));
  expect(onClick).toHaveBeenCalled();
});
