import sortedWith from "./sortedWith.ts";

import { assertEquals, assertNotStrictEquals } from "../_test_deps.ts";

Deno.test("returns new array", () => {
  const values = [20, 2, 10, 1];
  assertNotStrictEquals(
    values[sortedWith](compareNumbersByDigitsThenByDescendingValue),
    values
  );
});

Deno.test("returns sorted array", () => {
  const values = [20, 2, 10, 1];
  assertEquals(
    values[sortedWith](compareNumbersByDigitsThenByDescendingValue),
    [2, 1, 20, 10]
  );
});

Deno.test("leaves self unmodified", () => {
  const values = [20, 2, 10, 1];
  values[sortedWith](compareNumbersByDigitsThenByDescendingValue);
  assertEquals(values, [20, 2, 10, 1]);
});

function compareNumbersByDigitsThenByDescendingValue(a: number, b: number) {
  return a.toString().length - b.toString().length || b - a;
}
