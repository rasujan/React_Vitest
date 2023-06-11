import { render, screen } from "@testing-library/react";

import Login from "./login";

describe("#Login", () => {
  test("should render", () => {
    render(<Login />);
    const title = screen.getByRole("heading", { name: "Login", level: 1 });
    expect(title).toBeInTheDocument();

    const usernameField = screen.getByRole("textbox", { name: "Username" }); // name is the label
    expect(usernameField).toBeInTheDocument();

    const passwordField = screen.getByRole("password", { name: "Password" });
    expect(passwordField).toBeInTheDocument();

    const checkboxField = screen.getByRole("checkbox", {
      name: "Remember me?",
    });
    expect(checkboxField).toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: "Login" });
    expect(submitButton).toBeInTheDocument();
  });
});
