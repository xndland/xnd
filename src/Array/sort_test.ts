import sort from "./sort.ts";

import {
  assertEquals,
  assertStrictEquals,
  assertThrows,
} from "../_deps_test.ts";

Deno.test("sorts in-place", () => {
  const values = [20, 2, 10, 1];
  values[sort]();
  assertEquals(values, [1, 2, 10, 20]);
});

Deno.test("returns this", () => {
  const values = [20, 2, 10, 1];
  const returnValue = values[sort]();
  assertStrictEquals(returnValue, values);
});

Deno.test("sorts booleans", () => {
  const booleans = [true, false, false, true];
  assertEquals(booleans[sort](), [false, false, true, true]);
});

Deno.test("sorts numbers", () => {
  const numbers = [20, 2, 10, 1];
  assertEquals(numbers[sort](), [1, 2, 10, 20]);
});

Deno.test("sorts bigints", () => {
  const bigints = [20n, 2n, 10n, 1n];
  assertEquals(bigints[sort](), [1n, 2n, 10n, 20n]);
});

Deno.test("sorts ASCII strings", () => {
  const strings = ["c", "a", "b", "aab", "aaa", ""];
  assertEquals(strings[sort](), ["", "a", "aaa", "aab", "b", "c"]);
});

Deno.test("sorts Unicode strings", () => {
  const strings = ["😂", "Ｚ", "😀", "Z"];
  assertEquals(strings[sort](), ["Z", "😀", "😂", "Ｚ"]);
});

Deno.test("sorts Dates", () => {
  const a = new Date("2020-12-13T12:12:07");
  const b = new Date("2020-12-14T12:12:07");
  const dates = [b, a];
  assertEquals(dates[sort](), [a, b]);
});

Deno.test("throws sorting non-comparable values", () => {
  const a = Symbol("a");
  const b = Symbol("b");
  assertThrows(
    // @ts-expect-error symbols are not comparable
    () => [b, a][sort](),
    TypeError,
    "is not a function"
  );
});
