import set from "./set.ts";
import apply from "../apply.ts";

import { assertEquals } from "../_test_deps.ts";

Deno.test("Array.prototype[set]<non-negative>", () => {
  const actual = Array.of(1, 2, 3);
  actual[set](0, -1);
  actual[set](1, -2);
  actual[set](2, -3);
  assertEquals(actual, [-1, -2, -3]);
});

Deno.test("Array.prototype[set]<negative>", () => {
  const actual = Array.of(1, 2, 3);
  actual[set](-1, -1);
  actual[set](-2, -2);
  actual[set](-3, -3);
  assertEquals(actual, [-3, -2, -1]);
});

Deno.test("Array.prototype[set]<negatively out-of-range>", () => {
  const actual = Array.of(1, 2, 3);
  actual[set](-4, -1);
  actual[set](-5, -2);
  actual[set](-Infinity, -3);
  const expected = [1, 2, 3][apply](function () {
    this[-1] = -1;
    this[-2] = -2;
    this[-Infinity] = -3;
  });
  assertEquals(actual, expected);
});

Deno.test("Array.prototype[set]<positively out-of-range>", () => {
  const actual = Array.of(1, 2, 3);
  actual[set](3, 4);
  actual[set](4, 5);
  actual[set](Infinity, 42);
  const expected = [1, 2, 3, 4, 5][apply](function () {
    this[Infinity] = 42;
  });
  assertEquals(actual, expected);
});
