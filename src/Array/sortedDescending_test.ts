import sortedDescending from "./sortedDescending.ts";

import {
  assertEquals,
  assertNotStrictEquals,
  assertThrows,
} from "../_deps_test.ts";

Deno.test("returns new array", () => {
  const values = [20, 2, 10, 1];
  assertNotStrictEquals(values[sortedDescending](), values);
});

Deno.test("returns sorted array", () => {
  const values = [20, 2, 10, 1];
  assertEquals(values[sortedDescending](), [20, 10, 2, 1]);
});

Deno.test("leaves self unmodified", () => {
  const values = [20, 2, 10, 1];
  values[sortedDescending]();
  assertEquals(values, [20, 2, 10, 1]);
});

Deno.test("sorts-descending booleans", () => {
  const booleans = [true, false, false, true];
  assertEquals(booleans[sortedDescending](), [true, true, false, false]);
});

Deno.test("sorts-descending booleans", () => {
  const numbers = [20, 2, 10, 1];
  assertEquals(numbers[sortedDescending](), [20, 10, 2, 1]);
});

Deno.test("sorts-descending bigints", () => {
  const bigints = [20n, 2n, 10n, 1n];
  assertEquals(bigints[sortedDescending](), [20n, 10n, 2n, 1n]);
});

Deno.test("sorts-descending ASCII strings", () => {
  const strings = ["c", "a", "b", "aab", "aaa", ""];
  assertEquals(strings[sortedDescending](), ["c", "b", "aab", "aaa", "a", ""]);
});

Deno.test("sorts-descending Unicode strings", () => {
  const strings = ["😂", "Ｚ", "😀", "Z"];
  assertEquals(strings[sortedDescending](), ["Ｚ", "😂", "😀", "Z"]);
});

Deno.test("sorts-descending Dates", () => {
  const a = new Date("2020-12-13T12:12:07");
  const b = new Date("2020-12-14T12:12:07");
  const dates = [a, b];
  assertEquals(dates[sortedDescending](), [b, a]);
});

Deno.test("throws sorting non-comparable values", () => {
  const a = Symbol("a");
  const b = Symbol("b");
  assertThrows(
    // @ts-expect-error symbols are not comparable
    () => [a, b][sortedDescending](),
    TypeError,
    "is not a function"
  );
});
