import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ButtonWrapper } from "./ButtonWrapper";

test("handles onClick", () => {
  const onClick = jest.fn();
  render(<ButtonWrapper onClick={onClick} title="Add Item" />);
  const buttonElement = screen.getByText(/Add Item/i);

  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
