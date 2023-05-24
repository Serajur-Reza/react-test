import { fireEvent, render, screen } from "@testing-library/react";
import Person from ".";

test("renders a name", () => {
  render(<Person name="Jack" />);
  const divElement = screen.getByText(/I am Jack/i);
  expect(divElement).toBeInTheDocument();
});

test("renders a name by role", () => {
  render(<Person name="Jack" />);
  const divElement = screen.getByRole("contentInfo");
  expect(divElement).toHaveTextContent("I am Jack");
  expect(divElement).toHaveAttribute("role", "contentInfo");
});

test("test button Click", async () => {
  //const onClick = vi.fn();
  await render(<Person name="Jack" />);

  const buttonElement = screen.getByText("Radioactive");

  fireEvent.click(buttonElement);
  //onClick(); // vitest code
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).not.toBeDisabled();
  //expect(onClick).toHaveBeenCalled(); //jest code

  // const res = fireEvent.click(buttonElement);
  // console.log(res);
  // expect(buttonElement).toBeInTheDocument();
  // //expect(buttonElement).toBeDisabled();
  // expect(res).toBe(true); // vitest code
});
