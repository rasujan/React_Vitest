import { render, screen } from "@testing-library/react";

import App from "./App";

describe("#App", () => {
  test("should render the component count", () => {
    render(<App />);
    const countEle = screen.getByText(/count/); // should be regx
    expect(countEle).toBeInTheDocument();
  });
});
