import compareTo from "./compareTo.ts";

import { assertSign } from "../_deps_test.ts";

const falsyTestValues = [false, 0, -0, 0n, "", null, undefined, NaN];
const truthyTestValues = [
  true,
  {},
  [],
  42,
  "0",
  "false",
  new Date(),
  -42,
  12n,
  3.14,
  -3.14,
  Infinity,
  -Infinity,
];

Deno.test("returns 0 for equal booleans", () => {
  for (const value of [false, true]) assertSign(value[compareTo](value), 0);
});

Deno.test("returns negative values for lesser booleans", () => {
  assertSign(false[compareTo](true), -1);
});

Deno.test("returns positive values for greater booleans", () => {
  assertSign(true[compareTo](false), +1);
});

Deno.test("coerces falsy values to false", () => {
  for (const value of falsyTestValues) {
    assertSign(false[compareTo](value), 0);
    assertSign(true[compareTo](value), 1);
  }
});

Deno.test("coerces truthy values to true", () => {
  for (const value of truthyTestValues) {
    assertSign(false[compareTo](value), -1);
    assertSign(true[compareTo](value), 0);
  }
});
