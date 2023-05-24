import { Provider } from "react-redux";
import ReduxCounter from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import { createStore, store } from "./../../store/index";

test("testing redux counter", () => {
  render(
    <Provider store={createStore()}>
      <ReduxCounter />
    </Provider>
  );

  const counter = screen.getByRole("contentInfo");
  expect(counter).toHaveTextContent("0");

  const addButton = screen.getByText(/Increment/i);
  fireEvent.click(addButton);

  expect(counter).toHaveTextContent("1");
});

test("testing redux counter again", () => {
  render(
    <Provider store={createStore()}>
      <ReduxCounter />
    </Provider>
  );

  const counter = screen.getByRole("contentInfo");
  expect(counter).toHaveTextContent("0");

  const addButton = screen.getByText(/Increment/i);
  fireEvent.click(addButton);

  expect(counter).toHaveTextContent("1");
});
