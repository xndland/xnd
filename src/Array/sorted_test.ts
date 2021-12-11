import sorted from "./sorted.ts";

import {
  assertEquals,
  assertNotStrictEquals,
  assertThrows,
} from "../_deps_test.ts";

Deno.test("returns new array", () => {
  const values = [20, 2, 10, 1];
  assertNotStrictEquals(values[sorted](), values);
});

Deno.test("returns sorted array", () => {
  const values = [20, 2, 10, 1];
  assertEquals(values[sorted](), [1, 2, 10, 20]);
});

Deno.test("leaves self unmodified", () => {
  const values = [20, 2, 10, 1];
  values[sorted]();
  assertEquals(values, [20, 2, 10, 1]);
});

Deno.test("sorts booleans", () => {
  const booleans = [true, false, false, true];
  assertEquals(booleans[sorted](), [false, false, true, true]);
});

Deno.test("sorts booleans", () => {
  const numbers = [20, 2, 10, 1];
  assertEquals(numbers[sorted](), [1, 2, 10, 20]);
});

Deno.test("sorts bigints", () => {
  const bigints = [20n, 2n, 10n, 1n];
  assertEquals(bigints[sorted](), [1n, 2n, 10n, 20n]);
});

Deno.test("sorts ASCII strings", () => {
  const strings = ["c", "a", "b", "aab", "aaa", ""];
  assertEquals(strings[sorted](), ["", "a", "aaa", "aab", "b", "c"]);
});

Deno.test("sorts Unicode strings", () => {
  const strings = ["😂", "Ｚ", "😀", "Z"];
  assertEquals(strings[sorted](), ["Z", "😀", "😂", "Ｚ"]);
});

Deno.test("sorts Dates", () => {
  const a = new Date("2020-12-13T12:12:07");
  const b = new Date("2020-12-14T12:12:07");
  const dates = [b, a];
  assertEquals(dates[sorted](), [a, b]);
});

Deno.test("throws sorting non-comparable values", () => {
  const a = Symbol("a");
  const b = Symbol("b");
  assertThrows(
    // @ts-expect-error symbols are not comparable
    () => [b, a][sorted](),
    TypeError,
    "is not a function"
  );
});
