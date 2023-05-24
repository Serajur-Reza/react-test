import { render, screen } from "@testing-library/react";
import Sidebar from ".";

const list = [
  {
    name: "radioactive",
    href: "https://www.google.com",
  },
];

test("renders sidebar", () => {
  render(<Sidebar items={list} />);
  const nameElement = screen.getAllByRole("navigation");
  expect(nameElement[0]).toHaveTextContent(list[0].name);
  expect(nameElement[0]).toHaveAttribute("href", list[0].href);
  expect(nameElement).toHaveLength(1);
});
