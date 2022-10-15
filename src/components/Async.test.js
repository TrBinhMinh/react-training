import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async components", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);

    const listItemEls = await screen.findAllByRole("listitem");
    expect(listItemEls).not.toHaveLength(0);
  });
});
