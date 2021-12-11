import sortDescending from "./sortDescending.ts";

import {
  assertEquals,
  assertStrictEquals,
  assertThrows,
} from "../_deps_test.ts";

Deno.test("sorts-descending in-place", () => {
  const values = [20, 2, 10, 1];
  values[sortDescending]();
  assertEquals(values, [20, 10, 2, 1]);
});

Deno.test("returns this", () => {
  const values = [20, 2, 10, 1];
  const returnValue = values[sortDescending]();
  assertStrictEquals(returnValue, values);
});

Deno.test("sorts-descending booleans", () => {
  const booleans = [true, false, false, true];
  assertEquals(booleans[sortDescending](), [true, true, false, false]);
});

Deno.test("sorts-descending numbers", () => {
  const numbers = [20, 2, 10, 1];
  assertEquals(numbers[sortDescending](), [20, 10, 2, 1]);
});

Deno.test("sorts-descending bigints", () => {
  const bigints = [20n, 2n, 10n, 1n];
  assertEquals(bigints[sortDescending](), [20n, 10n, 2n, 1n]);
});

Deno.test("sorts-descending ASCII strings", () => {
  const strings = ["c", "a", "b", "aab", "aaa", ""];
  assertEquals(strings[sortDescending](), ["c", "b", "aab", "aaa", "a", ""]);
});

Deno.test("sorts-descending Unicode strings", () => {
  const strings = ["😂", "Ｚ", "😀", "Z"];
  assertEquals(strings[sortDescending](), ["Ｚ", "😂", "😀", "Z"]);
});

Deno.test("sorts-descending Dates", () => {
  const a = new Date("2020-12-13T12:12:07");
  const b = new Date("2020-12-14T12:12:07");
  const dates = [a, b];
  assertEquals(dates[sortDescending](), [b, a]);
});

Deno.test("throws sorting non-comparable values", () => {
  const a = Symbol("a");
  const b = Symbol("b");
  assertThrows(
    // @ts-expect-error symbols are not comparable
    () => [a, b][sortDescending](),
    TypeError,
    "is not a function"
  );
});
