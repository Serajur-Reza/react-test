import { act, renderHook } from "@testing-library/react";
import useCounter from ".";

test("testing useCounter hook", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
