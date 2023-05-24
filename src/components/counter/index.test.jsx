import Counter from ".";
import { fireEvent, render, screen } from "@testing-library/react";

test("test setState", () => {
  render(<Counter />);

  const divElement = screen.getByRole("contentInfo");
  const buttonElement = screen.getByText("Add");
  fireEvent.click(buttonElement);
  expect(divElement).toHaveTextContent("Count is 1");
});
