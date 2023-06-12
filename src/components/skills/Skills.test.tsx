import { render, screen } from "@testing-library/react";

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
    expect(listEle).toHaveLength(3);
  });
});
