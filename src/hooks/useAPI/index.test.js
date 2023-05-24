import { renderHook } from "@testing-library/react";
import useAPI from ".";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { waitFor } from "@testing-library/react";

const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(ctx.json({ name: "Jack" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("test async hook", async () => {
  const { result } = await renderHook(() => useAPI());
  await waitFor(() => {
    console.log(result);
    expect(result.current).toEqual({ name: "Jack" });
  });
});
