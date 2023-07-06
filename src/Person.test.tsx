import React from "react";
import { render, screen } from "@testing-library/react";
import { Person } from "./Person";

test("renders learn react link", () => {
  render(<Person name="Jack" />);
  const divElement = screen.getByRole("contentInfo");
  expect(divElement).toHaveTextContent(/Name is Jack/i);
  expect(divElement).toHaveAttribute("role", "contentInfo");
});
