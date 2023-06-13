import { render, screen, logRoles, logDOM } from "@testing-library/react";

import Skills from "./Skills";

describe("#Skills", () => {
  const skills = ["React", "Vue", "Angular"];

  test("should render list", () => {
    render(<Skills skills={skills} />);
    const listEle = screen.getByRole("list");
    expect(listEle).toBeInTheDocument();
  });

  test("should render a list items", () => {
    render(<Skills skills={skills} />);
    const listEle = screen.getAllByRole("listitem");
    expect(listEle).toHaveLength(skills.length);
  });

  test("should render login button", () => {
    render(<Skills skills={skills} />);
    const loginBtn = screen.getByRole("button", { name: /Login/ });
    expect(loginBtn).toBeInTheDocument();
  });

  test("should not render start learning button", () => {
    render(<Skills skills={skills} />);
    const startLearningBtn = screen.queryByRole("button", {
      name: /Start learning/,
    });
    expect(startLearningBtn).not.toBeInTheDocument();
  });

  // Waits for 2000ms before checking
  // Default wait time is 1000 ms
  test("should render start learning button eventually", async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container); // this wi;; show the available roles

    // * this will print out the DOM
    // screen.debug();
    const startLearningBtn = await screen.findByRole(
      "button",
      {
        name: /^Start learning$/,
      },
      {
        timeout: 2000,
      }
    );
    // screen.debug();

    expect(startLearningBtn).toBeInTheDocument();
  });
});
