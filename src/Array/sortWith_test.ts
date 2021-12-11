import sortWith from "./sortWith.ts";

import { assertEquals, assertStrictEquals } from "../_deps_test.ts";

Deno.test("sorts-with in-place", () => {
  const values = [20, 2, 10, 1];
  values[sortWith](compareNumbersByDigitsThenByDescendingValue);
  assertEquals(values, [2, 1, 20, 10]);
});

Deno.test("returns this", () => {
  const values = [20, 2, 10, 1];
  const returnValue = values[sortWith](
    compareNumbersByDigitsThenByDescendingValue
  );
  assertStrictEquals(returnValue, values);
});

function compareNumbersByDigitsThenByDescendingValue(a: number, b: number) {
  return a.toString().length - b.toString().length || b - a;
}
