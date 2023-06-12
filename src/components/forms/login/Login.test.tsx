import { render, screen } from "@testing-library/react";

import Login from "./login";

describe("#Login", () => {
  test("should render", () => {
    render(<Login />);
    const title = screen.getByRole("heading", { name: "Login", level: 1 }); // more options can be provided
    expect(title).toBeInTheDocument();

    const image = screen.getByAltText("placeholder img");
    expect(image).toBeInTheDocument();

    const usernameField = screen.getByRole("textbox", { name: "Username" }); // name is the label
    expect(usernameField).toBeInTheDocument();

    // role password is manual not provided by W3
    const passwordField = screen.getByRole("password", { name: "Password" });
    expect(passwordField).toBeInTheDocument();

    const checkboxField = screen.getByRole("checkbox", {
      name: "Remember me?",
    });
    expect(checkboxField).toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: "Login" });
    expect(submitButton).toBeInTheDocument();

    const privacyPolicy = screen.getByText(
      "Privacy Policy, Terms of Service, and Cookie Notice.",
      { selector: "p" }
    );
    expect(privacyPolicy).toBeInTheDocument();
  });
});
