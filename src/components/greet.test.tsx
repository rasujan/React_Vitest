import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("#Greet", () => {
  test("should return a greeting message, sujan", () => {
    render(<Greet name="Sujan" />);

    // Case sensitive test
    const greetMsg = screen.getByText(/hello Sujan/);
    // * asserts that the value is not equal to undefined
    expect(greetMsg).toBeDefined();
  });

  test("should return a greeting message, raja", () => {
    render(<Greet name="Raja" />);

    // Case insensitive test
    const greetMsg = screen.queryAllByText(/hello raja/i);
    // * toBeInTheDocument is extension from @testing-library/jest-dom
    // * assert whether an element is present in the document or not.
    expect(greetMsg).toBeInTheDocument();
  });
});
