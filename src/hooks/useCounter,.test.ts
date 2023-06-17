import { renderHook, act } from "@testing-library/react";

import useCounter from "./useCounter";

describe("useCounter", () => {
  const initialCount = 10;

  test("should return the initial count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("should set the count to initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initial: initialCount },
    });
    expect(result.current.count).toBe(initialCount);
  });

  test("should increment the count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initial: initialCount },
    });
    act(() => result.current.increment());
    expect(result.current.count).toBe(initialCount + 1);
  });

  test("should decrement the count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initial: initialCount },
    });
    act(() => result.current.decrement());
    expect(result.current.count).toBe(initialCount - 1);
  });
});
