import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import App from "./App";

describe("#App Counter", () => {
  test("should render the component count", () => {
    render(<App />);
    const countEle = screen.getByText(/count/); // should be regx
    expect(countEle).toBeDefined();
  });

  test("should render the increment button", () => {
    render(<App />);
    const incrementBtn = screen.getByRole("button", { name: /increment/i });
    expect(incrementBtn).toBeInTheDocument();
  });

  test("count should be 0 initially", () => {
    render(<App />);
    const countEle = screen.getByText(/count is/);
    expect(countEle).toHaveTextContent("0");
  });

  // Pointer interaction test
  test("should set counter to 1 after increment button is clicked", async () => {
    user.setup();
    render(<App />);
    const incrementBtn = screen.getByRole("button", { name: /increment/i });
    await user.click(incrementBtn);

    const countEle = screen.getByText(/count is/);
    expect(countEle).toHaveTextContent("1");
  });

  // Pointer interaction test
  test("should set counter to -1 after decrement button is clicked", async () => {
    user.setup();
    render(<App />);
    const decrementBtn = screen.getByRole("button", { name: /decrement/i });
    expect(decrementBtn).toBeInTheDocument();
    await user.click(decrementBtn);

    const countEle = screen.getByText(/count is/);
    expect(countEle).toHaveTextContent("-1");
  });

  // Pointer interaction test
  test("should set counter to 2 after increment button is double clicked", async () => {
    user.setup();
    render(<App />);
    const incrementBtn = screen.getByRole("button", { name: /increment/i });
    await user.dblClick(incrementBtn);

    const countEle = screen.getByText(/count is/);
    expect(countEle).toHaveTextContent("2");
  });

  const amt = 10;
  // keyboard interaction test
  test(`should set counter to ${amt} after ${amt} is set`, async () => {
    user.setup();
    render(<App />);
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, `${amt}`);
    expect(amountInput).toHaveValue(amt);

    const setBtn = screen.getByRole("button", { name: /set/i });
    await user.click(setBtn);

    const countEle = screen.getByText(/count is/);
    expect(countEle).toHaveTextContent(`${amt}`);
  });

  // Check if the element focus on correct order
  test("should focus on correct order on tab", async () => {
    user.setup();
    render(<App />);
    const amountInput = screen.getByRole("spinbutton");
    const incrementBtn = screen.getByRole("button", { name: /increment/i });
    const decrementBtn = screen.getByRole("button", { name: /decrement/i });
    const setBtn = screen.getByRole("button", { name: /set/i });

    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(incrementBtn).toHaveFocus();
    await user.tab();
    expect(decrementBtn).toHaveFocus();
    await user.tab();
    expect(setBtn).toHaveFocus();
  });
});
