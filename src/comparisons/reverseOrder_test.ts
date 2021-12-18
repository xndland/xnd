import reverseOrder from "./reverseOrder.ts";

import CompareFunction from "../CompareFunction.ts";

import { assert, assertEquals } from "../_test_deps.ts";

Deno.test("returns a CompareFunction", () => {
  const compareFn = reverseOrder();
  assert(compareFn instanceof CompareFunction);
});

Deno.test("compares booleans", () => {
  const compareFn = reverseOrder<boolean>();
  assertEquals(compareFn(false, false), 0);
  assertEquals(compareFn(false, true), +1);
  assertEquals(compareFn(true, false), -1);
  assertEquals(compareFn(true, true), 0);
});

Deno.test("compares numbers", () => {
  const compareFn = reverseOrder<number>();
  assertEquals(compareFn(1, 2), +1);
  assertEquals(compareFn(1, 1), 0);
  assertEquals(compareFn(2, 2), 0);
  assertEquals(compareFn(2, 1), -1);
});

Deno.test("compares bigints", () => {
  const compareFn = reverseOrder<bigint>();
  assertEquals(compareFn(1n, 2n), +1);
  assertEquals(compareFn(1n, 1n), 0);
  assertEquals(compareFn(2n, 2n), 0);
  assertEquals(compareFn(2n, 1n), -1);
});

Deno.test("compares Dates", () => {
  const compareFn = reverseOrder<Date>();
  assertEquals(compareFn(new Date(1), new Date(2)), +1);
  assertEquals(compareFn(new Date(1), new Date(1)), 0);
  assertEquals(compareFn(new Date(2), new Date(2)), 0);
  assertEquals(compareFn(new Date(2), new Date(1)), -1);
});
