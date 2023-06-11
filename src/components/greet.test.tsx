import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("#Greet", () => {
  test("should return a greeting message, sujan", () => {
    render(<Greet name="Sujan" />);

    // Case sensitive test
    const greetMsg = screen.getByText(/hello Sujan/);
    // * asserts that the value is not equal to undefined
    expect(greetMsg).toBeDefined();
  });

  test("should return a greeting message, raja", () => {
    render(<Greet name="raja" />);

    // Case insensitive test
    const greetMsg2 = screen.getByText(/hello raja/i);
    // * toBeInTheDocument is extension from @testing-library/jest-dom
    // * assert whether an element is present in the document or not.
    expect(greetMsg2).toBeInTheDocument();
  });
});
