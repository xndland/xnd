import set from "./set.ts";

import { assertEquals } from "../_test_deps.ts";

Deno.test("TypedArray.prototype[set]<non-negative>", () => {
  const actual = Int8Array.of(1, 2, 3);
  actual[set](0, -1);
  actual[set](1, -2);
  actual[set](2, -3);
  assertEquals(actual, [-1, -2, -3]);
});

Deno.test("TypedArray.prototype[set]<negative>", () => {
  const actual = Int16Array.of(1, 2, 3);
  actual[set](-1, -1);
  actual[set](-2, -2);
  actual[set](-3, -3);
  assertEquals(actual, [-3, -2, -1]);
});

Deno.test("TypedArray.prototype[set]<negatively out-of-range>", () => {
  const actual = Int32Array.of(1, 2, 3);
  actual[set](-4, -1);
  actual[set](-5, -2);
  actual[set](-Infinity, -3);
  const expected = [1, 2, 3];
  assertEquals(actual, expected);
});

Deno.test("TypedArray.prototype[set]<positively out-of-range>", () => {
  const actual = Float32Array.of(1, 2, 3);
  actual[set](3, 4);
  actual[set](4, 5);
  actual[set](Infinity, 42);
  const expected = [1, 2, 3];
  assertEquals(actual, expected);
});
