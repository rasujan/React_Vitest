import { render, screen } from "@testing-library/react";
import Users from "./Users";
import { server } from "../../mocks/server";
import { rest } from "msw";

describe("#Users", () => {
  test("should render", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

  test("render a list of users", async () => {
    render(<Users />);
    const list = await screen.findAllByRole("listitem");
    expect(list).toHaveLength(3);
  });

  test("Should render error message", async () => {
    // sabotage the server
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    render(<Users />);

    const error = await screen.findByText("Error");

    expect(error).toBeInTheDocument();
  });
});
