import compareValues from "./compareValues.ts";

import { assertSign } from "../_deps_test.ts";

Deno.test("compares booleans", () => {
  assertSign(compareValues(false, false), 0);
  assertSign(compareValues(false, true), -1);
  assertSign(compareValues(true, false), +1);
  assertSign(compareValues(true, true), 0);
});

Deno.test("compares numbers", () => {
  assertSign(compareValues(0, 0), 0);
  assertSign(compareValues(0, 1), -1);
  assertSign(compareValues(1, 0), +1);
  assertSign(compareValues(1, 1), 0);
});

Deno.test("compares bigints", () => {
  assertSign(compareValues(0n, 0n), 0);
  assertSign(compareValues(0n, 1n), -1);
  assertSign(compareValues(1n, 0n), +1);
  assertSign(compareValues(1n, 1n), 0);
});

Deno.test("compares strings", () => {
  assertSign(compareValues("0", "0"), 0);
  assertSign(compareValues("0", "1"), -1);
  assertSign(compareValues("1", "0"), +1);
  assertSign(compareValues("1", "1"), 0);
});

Deno.test("compares Dates", () => {
  assertSign(compareValues(new Date(0), new Date(0)), 0);
  assertSign(compareValues(new Date(0), new Date(1)), -1);
  assertSign(compareValues(new Date(1), new Date(0)), +1);
  assertSign(compareValues(new Date(1), new Date(1)), 0);
});

Deno.test("treats same values as equal (even NaN)", () => {
  for (const value of [
    false,
    0,
    -0,
    0n,
    "",
    null,
    undefined,
    NaN,
    true,
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
  ])
    assertSign(compareValues(value, value), 0);
});

Deno.test("treats undefined greater than defined values", () => {
  assertSign(compareValues(undefined, undefined), 0);
  assertSign(compareValues(0, undefined), -1);
  assertSign(compareValues(undefined, -1), +1);
  assertSign(compareValues(undefined, null), +1);
});

Deno.test("treats null less than other defined values", () => {
  assertSign(compareValues(null, null), 0);
  assertSign(compareValues(0, null), +1);
  assertSign(compareValues(null, -1), -1);
  assertSign(compareValues(null, undefined), -1);
});
