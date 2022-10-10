import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'good to test somethings' if the button was NOT clicked", () => {
    render(<Greeting />);
    const outputEl = screen.getByText("It's good to test somethings", { exact: false });
    expect(outputEl).toBeInTheDocument();
  });

  test("renders 'changed' if the button was clicked", () => {
    render(<Greeting />);
    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl)
    const outputEl = screen.getByText("changed", { exact: false });
    expect(outputEl).toBeInTheDocument();
  });

  test("removes 'good to test somethings' if the button was clicked", () => {
    render(<Greeting />);
    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl)
    const outputEl = screen.queryByText("good to test somethings", { exact: false });
    expect(outputEl).toBeNull();
  })
});
